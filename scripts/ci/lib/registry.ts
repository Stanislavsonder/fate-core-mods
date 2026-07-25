import { createHash } from 'node:crypto'
import fs from 'node:fs'

export interface RegistryFileEntry {
	url: string
	sha256: string
	size: number
}

export interface RegistryModEntry {
	// The mod's full static manifest, embedded verbatim...
	[manifestField: string]: unknown
	id: string
	version: string
	// ...plus publish-time fields:
	latestVersion: string
	publishedAt: string
	files: Record<string, RegistryFileEntry>
	readmeUrl?: string
	versions: string[]
	/** Per-language display strings, extracted at publish time so the Mod
	 * Store can render browse cards with zero extra requests (Phase 3 doc,
	 * Step 7's note on why this must be in the index format from the start). */
	strings: Record<string, { name: string; short: string }>
}

export interface RegistryIndex {
	schemaVersion: number
	generatedAt: string
	blocklist: Record<string, string[]>
	mods: RegistryModEntry[]
}

export const REPO = 'Stanislavsonder/fate-core-mods'
export const GH_PAGES_RAW_BASE = `https://raw.githubusercontent.com/${REPO}/gh-pages`

/** Returns null (not an error) when nothing has been published yet — every
 * caller must treat "no registry.json on gh-pages" as "empty registry", not a failure. */
export async function fetchPublishedIndex(): Promise<RegistryIndex | null> {
	const res = await fetch(`${GH_PAGES_RAW_BASE}/registry.json`, { cache: 'no-store' })
	if (!res.ok) return null
	return (await res.json()) as RegistryIndex
}

export function sha256(content: string | Buffer): string {
	return createHash('sha256').update(content).digest('hex')
}

export function fileSize(filePath: string): number {
	return fs.statSync(filePath).size
}
