#!/usr/bin/env node

/**
 * validate-pr.yml's first step (README.md Step 2, checks 1-4): scope,
 * ownership, schema, version. The remaining checks (build, security lint,
 * smoke-load — checks 5-7) are separate workflow steps that only run if this
 * one passes, since each needs to show up as its own line in the PR's Checks
 * tab rather than being swallowed into one script's exit code.
 *
 * On success, writes modId/modDir to $GITHUB_OUTPUT so later steps
 * (build/lint/smoke-load) know what to operate on. On failure, posts (or
 * updates) a single PR comment explaining exactly what's wrong.
 *
 * Usage: node --experimental-transform-types scripts/ci/validate.ts
 * Required env: BASE_SHA, HEAD_SHA, GITHUB_REPOSITORY, PR_NUMBER, GITHUB_TOKEN
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import semver from 'semver'
import { fetchPublishedIndex } from './lib/registry.ts'
import { getPullRequestLabels, upsertValidationComment } from './lib/github.ts'

const root = process.cwd()
const errors: string[] = []
const warnings: string[] = []

function requireEnv(name: string): string {
	const value = process.env[name]
	if (!value) throw new Error(`Missing required env var: ${name}`)
	return value
}

async function main(): Promise<void> {
	const baseSha = requireEnv('BASE_SHA')
	const headSha = requireEnv('HEAD_SHA')
	const repo = requireEnv('GITHUB_REPOSITORY')
	const prNumber = requireEnv('PR_NUMBER')

	// --- 1. Scope ---
	const changed = execFileSync('git', ['diff', '--name-only', baseSha, headSha], { cwd: root, encoding: 'utf-8' })
		.split('\n')
		.map(line => line.trim())
		.filter(Boolean)

	const modIds = new Set<string>()
	const outsideMods: string[] = []
	const ALLOWED_OUTSIDE = new Set(['owners.json', 'blocklist.json'])
	for (const file of changed) {
		const match = /^mods\/([^/]+)\//.exec(file)
		if (match) {
			modIds.add(match[1])
		} else if (!file.startsWith('.github/') && !file.startsWith('docs/') && !ALLOWED_OUTSIDE.has(file) && file !== 'registry.schema.json' && file !== 'eslint.config.js') {
			outsideMods.push(file)
		}
	}

	const labels = await getPullRequestLabels(repo, prNumber)
	const scopeBypass = labels.includes('infra') || labels.includes('multi-mod')

	if (!scopeBypass) {
		if (modIds.size > 1) {
			errors.push(`PR touches multiple mod folders (${[...modIds].join(', ')}). Split into separate PRs, or ask a maintainer for the "multi-mod" label.`)
		}
		if (outsideMods.length > 0) {
			errors.push(`PR touches files outside mods/<id>/ (${outsideMods.join(', ')}). Ask a maintainer for the "infra" label if this is intentional.`)
		}
	}

	if (modIds.size === 0) {
		errors.push('No mods/<id>/ folder was touched by this PR — nothing to validate.')
		await finish(repo, prNumber)
		return
	}

	const modId = [...modIds][0]
	const modDir = `mods/${modId}`
	const manifestPath = path.join(root, modDir, 'manifest.json')

	if (!fs.existsSync(manifestPath)) {
		errors.push(`${modDir}/manifest.json is missing.`)
		await finish(repo, prNumber)
		return
	}

	let manifest: Record<string, unknown>
	try {
		manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) as Record<string, unknown>
	} catch (e) {
		errors.push(`${modDir}/manifest.json is not valid JSON: ${e instanceof Error ? e.message : String(e)}`)
		await finish(repo, prNumber)
		return
	}

	// --- 2. Ownership ---
	const ownersPath = path.join(root, 'owners.json')
	const owners = JSON.parse(fs.readFileSync(ownersPath, 'utf-8')) as Record<string, string[]>
	const authorGithub = (manifest.author as { github?: string } | undefined)?.github

	if (modId !== manifest.id) {
		errors.push(`Folder name "mods/${modId}" doesn't match manifest.id "${String(manifest.id)}".`)
	}

	if (owners[modId]) {
		// Existing mod — PR author (checked via the workflow's actor, passed as PR_AUTHOR) must be listed.
		const prAuthor = process.env.PR_AUTHOR
		if (prAuthor && !owners[modId].includes(prAuthor)) {
			errors.push(`"${modId}" is owned by ${owners[modId].join(', ')} — ${prAuthor} is not listed in owners.json.`)
		}
	} else {
		// New mod — author.github must match the PR author, and be listed in the folder id's <author> prefix.
		const prAuthor = process.env.PR_AUTHOR
		const [idAuthorPrefix] = modId.split('@')
		if (prAuthor && authorGithub !== prAuthor) {
			errors.push(`New mod: manifest.author.github ("${authorGithub}") must match the PR author ("${prAuthor}").`)
		}
		if (idAuthorPrefix && authorGithub && idAuthorPrefix.toLowerCase() !== authorGithub.toLowerCase()) {
			// Soft signal, not a blocker: a mismatch is common for an established
			// author alias (e.g. id prefix "sonder" vs GitHub handle
			// "Stanislavsonder") — the human reviewer decides, doesn't get
			// auto-blocked by CI.
			warnings.push(`New mod: id prefix "${idAuthorPrefix}" doesn't match manifest.author.github ("${authorGithub}") — fine for an established author alias, otherwise worth a second look in review.`)
		}
		// A maintainer (or bot) adds the entry to owners.json on merge — not this script's job.
	}

	// --- 3. Schema ---
	const schemaPath = path.join(root, 'registry.schema.json')
	const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8')) as Record<string, unknown>
	const ajv = new Ajv({ allErrors: true })
	addFormats(ajv)
	const validateManifest = ajv.compile(schema)
	if (!validateManifest(manifest)) {
		for (const err of validateManifest.errors ?? []) {
			errors.push(`manifest.json schema violation at "${err.instancePath || '/'}": ${err.message}`)
		}
	}

	const translationsDir = path.join(root, modDir, 'translations')
	const shippedLangs = fs.existsSync(translationsDir)
		? fs
				.readdirSync(translationsDir)
				.filter(f => f.endsWith('.json'))
				.map(f => f.replace(/\.json$/, ''))
		: []
	const declaredLangs = Array.isArray(manifest.languages) ? (manifest.languages as string[]) : []
	const missingTranslations = declaredLangs.filter(lang => !shippedLangs.includes(lang))
	if (missingTranslations.length > 0) {
		errors.push(`manifest.languages declares ${missingTranslations.join(', ')} but translations/ has no matching file.`)
	}
	if (!fs.existsSync(path.join(root, modDir, 'LICENSE'))) {
		errors.push(`${modDir}/LICENSE is missing.`)
	}

	// --- 4. Version ---
	const declaredVersion = manifest.version as string | undefined
	if (declaredVersion && semver.valid(declaredVersion)) {
		const publishedIndex = await fetchPublishedIndex()
		const publishedEntry = publishedIndex?.mods.find(m => m.id === modId)
		if (publishedEntry && !semver.gt(declaredVersion, publishedEntry.latestVersion)) {
			errors.push(`manifest.version "${declaredVersion}" must be strictly greater than the currently published "${publishedEntry.latestVersion}".`)
		}
	} else {
		errors.push(`manifest.version "${String(declaredVersion)}" is not a valid semver version.`)
	}

	const outputPath = process.env.GITHUB_OUTPUT
	if (errors.length === 0 && outputPath) {
		fs.appendFileSync(outputPath, `mod-id=${modId}\nmod-dir=${modDir}\n`)
	}

	await finish(repo, prNumber)
}

async function finish(repo: string, prNumber: string): Promise<void> {
	if (errors.length > 0) {
		const body = ['### ❌ validate-pr checks failed', '', ...errors.map(e => `- ${e}`)].join('\n')
		console.error(body)
		await upsertValidationComment(repo, prNumber, body)
		process.exitCode = 1
		return
	}

	const body = ['### ✅ validate-pr checks passed (scope, ownership, schema, version)', ...(warnings.length > 0 ? ['', '**Worth a look in review:**', ...warnings.map(w => `- ${w}`)] : [])].join('\n')
	console.log(body)
	await upsertValidationComment(repo, prNumber, body)
}

await main()
