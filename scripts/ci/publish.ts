#!/usr/bin/env node

/**
 * publish.yml (README.md Step 3): rebuild the changed mod, hash+size every
 * published artifact, copy into gh-pages:mods/<id>/<version>/ — refusing if
 * that path already exists (immutability) — and regenerate registry.json.
 * Also handles blocklist-only republishes (index regen, no rebuild).
 *
 * Usage:
 *   node --experimental-transform-types scripts/ci/publish.ts <mod-dir> <gh-pages-dir>
 *   node --experimental-transform-types scripts/ci/publish.ts --blocklist-only <gh-pages-dir>
 */

import fs from 'node:fs'
import path from 'node:path'
import semver from 'semver'
import { sha256, type RegistryIndex, type RegistryModEntry } from './lib/registry.ts'

/** "t.foo.bar" -> translations.foo.bar; anything not "t."-prefixed is returned as-is. */
function resolveI18nString(value: string, translations: Record<string, unknown>): string {
	if (!value.startsWith('t.')) return value
	const path_ = value.slice(2).split('.')
	let cursor: unknown = translations
	for (const segment of path_) {
		if (typeof cursor !== 'object' || cursor === null) return value
		cursor = (cursor as Record<string, unknown>)[segment]
	}
	return typeof cursor === 'string' ? cursor : value
}

function loadIndex(ghPagesDir: string): RegistryIndex {
	const indexPath = path.join(ghPagesDir, 'registry.json')
	if (fs.existsSync(indexPath)) {
		return JSON.parse(fs.readFileSync(indexPath, 'utf-8')) as RegistryIndex
	}
	return { schemaVersion: 1, generatedAt: '', blocklist: {}, mods: [] }
}

function writeIndex(ghPagesDir: string, index: RegistryIndex): void {
	fs.writeFileSync(path.join(ghPagesDir, 'registry.json'), JSON.stringify(index, null, 2))
}

async function publishBlocklistOnly(ghPagesDir: string): Promise<void> {
	const index = loadIndex(ghPagesDir)
	const blocklistPath = path.join(process.cwd(), 'blocklist.json')
	index.blocklist = JSON.parse(fs.readFileSync(blocklistPath, 'utf-8')) as Record<string, string[]>
	index.generatedAt = new Date().toISOString()
	writeIndex(ghPagesDir, index)
	console.log('Regenerated registry.json for a blocklist-only update.')
}

async function publishMod(modDir: string, ghPagesDir: string): Promise<void> {
	const manifestPath = path.join(process.cwd(), modDir, 'manifest.json')
	const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) as Record<string, unknown>
	const modId = manifest.id as string
	const version = manifest.version as string
	const entry = (manifest.entry as string) ?? 'bundle.mjs'

	const bundlePath = path.join(process.cwd(), modDir, 'dist', entry)
	if (!fs.existsSync(bundlePath)) {
		console.error(`${bundlePath} is missing — the build step must run before publish.ts.`)
		process.exitCode = 1
		return
	}

	const targetDir = path.join(ghPagesDir, 'mods', modId, version)
	if (fs.existsSync(targetDir)) {
		console.error(`${modId}@${version} is already published at ${targetDir} — refusing to overwrite (immutability guard). Bump the version and try again.`)
		process.exitCode = 1
		return
	}
	fs.mkdirSync(targetDir, { recursive: true })

	const files: Record<string, { url: string; sha256: string; size: number }> = {}

	function publishFile(srcPath: string, relName: string): Buffer {
		const content = fs.readFileSync(srcPath)
		const destPath = path.join(targetDir, relName)
		fs.mkdirSync(path.dirname(destPath), { recursive: true })
		fs.writeFileSync(destPath, content)
		files[relName] = { url: `mods/${modId}/${version}/${relName}`, sha256: sha256(content), size: content.length }
		return content
	}

	publishFile(bundlePath, entry)
	publishFile(manifestPath, 'manifest.json')

	const strings: Record<string, { name: string; short: string }> = {}
	const translationsDir = path.join(process.cwd(), modDir, 'translations')
	if (fs.existsSync(translationsDir)) {
		for (const file of fs.readdirSync(translationsDir).filter(f => f.endsWith('.json'))) {
			const lang = file.replace(/\.json$/, '')
			const content = publishFile(path.join(translationsDir, file), `translations/${file}`)
			const translations = JSON.parse(content.toString('utf-8')) as Record<string, unknown>
			const description = manifest.description as { short?: string } | undefined
			strings[lang] = {
				name: resolveI18nString((manifest.name as string) ?? '', translations),
				short: resolveI18nString(description?.short ?? '', translations)
			}
		}
	}

	let readmeUrl: string | undefined
	const readmePath = path.join(process.cwd(), modDir, 'README.md')
	if (fs.existsSync(readmePath)) {
		publishFile(readmePath, 'README.md')
		readmeUrl = `mods/${modId}/${version}/README.md`
	}
	const changelogPath = path.join(process.cwd(), modDir, 'CHANGELOG.md')
	if (fs.existsSync(changelogPath)) {
		publishFile(changelogPath, 'CHANGELOG.md')
	}

	const index = loadIndex(ghPagesDir)
	const blocklistPath = path.join(process.cwd(), 'blocklist.json')
	index.blocklist = JSON.parse(fs.readFileSync(blocklistPath, 'utf-8')) as Record<string, string[]>

	const existingIndex = index.mods.findIndex(m => m.id === modId)
	const previousVersions = existingIndex >= 0 ? index.mods[existingIndex].versions : []

	const entryData: RegistryModEntry = {
		...manifest,
		id: modId,
		version,
		latestVersion: version,
		publishedAt: new Date().toISOString(),
		files,
		...(readmeUrl ? { readmeUrl } : {}),
		versions: [...new Set([...previousVersions, version])].sort((a, b) => semver.compare(a, b)),
		strings
	}

	if (existingIndex >= 0) index.mods[existingIndex] = entryData
	else index.mods.push(entryData)

	index.generatedAt = new Date().toISOString()
	writeIndex(ghPagesDir, index)

	console.log(`Published ${modId}@${version}.`)
}

async function main(): Promise<void> {
	const [first, second] = process.argv.slice(2)

	if (first === '--blocklist-only') {
		if (!second) {
			console.error('Usage: publish.ts --blocklist-only <gh-pages-dir>')
			process.exitCode = 1
			return
		}
		await publishBlocklistOnly(second)
		return
	}

	if (!first || !second) {
		console.error('Usage: publish.ts <mod-dir> <gh-pages-dir>')
		process.exitCode = 1
		return
	}

	await publishMod(first, second)
}

await main()
