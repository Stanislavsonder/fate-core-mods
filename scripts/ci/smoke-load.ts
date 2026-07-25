#!/usr/bin/env node

/**
 * validate-pr.yml's smoke-load step (README.md Step 2, check 7): imports the
 * freshly built bundle.mjs in plain Node and runs it through the exact same
 * shape validation the app's real loader uses, then mounts every declared
 * sheet component. Reuses @fate-core/mod-build/testing's smokeLoad() so this
 * check can never drift from the app's real gate — see
 * planning/modules-2-0/phase-3-registry-store.md, Decision 4.
 *
 * Usage: node --experimental-transform-types scripts/ci/smoke-load.ts <mod-dir>
 */

import fs from 'node:fs'
import path from 'node:path'
import { smokeLoad } from '@fate-core/mod-build/testing'

async function main(): Promise<void> {
	const modDir = process.argv[2]
	if (!modDir) {
		console.error('Usage: smoke-load.ts <mod-dir>')
		process.exitCode = 1
		return
	}

	const manifestPath = path.join(process.cwd(), modDir, 'manifest.json')
	const bundlePath = path.join(process.cwd(), modDir, 'dist', 'bundle.mjs')

	if (!fs.existsSync(bundlePath)) {
		console.error(`${bundlePath} does not exist — run the build step first.`)
		process.exitCode = 1
		return
	}

	const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) as { capabilities?: string[] }
	const result = await smokeLoad(bundlePath, manifest as never)

	if (!result.ok) {
		console.error(`✗ smoke-load failed for ${modDir}: ${result.error}`)
		process.exitCode = 1
		return
	}

	console.log(`✓ smoke-load passed for ${modDir}`)
}

await main()
