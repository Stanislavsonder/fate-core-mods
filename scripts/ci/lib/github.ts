const API_BASE = 'https://api.github.com'

function authHeaders(): Record<string, string> {
	const token = process.env.GITHUB_TOKEN
	return {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
		...(token ? { Authorization: `Bearer ${token}` } : {})
	}
}

/** Labels on the current PR, e.g. to allow a maintainer-labeled "infra" or
 * "multi-mod" PR through the single-mod-folder scope check. */
export async function getPullRequestLabels(repo: string, prNumber: string): Promise<string[]> {
	const res = await fetch(`${API_BASE}/repos/${repo}/pulls/${prNumber}`, { headers: authHeaders() })
	if (!res.ok) return []
	const pr = (await res.json()) as { labels?: Array<{ name: string }> }
	return (pr.labels ?? []).map(l => l.name)
}

/** Posts (or updates, if one from this script already exists) a single PR
 * comment summarizing validate-pr.yml's result — cheaper than a bot that
 * juggles per-check comments, and still satisfies "comment results on the PR". */
export async function upsertValidationComment(repo: string, prNumber: string, body: string): Promise<void> {
	const headers = authHeaders()
	if (!headers.Authorization) return // no token available (e.g. local run) — skip silently

	const marker = '<!-- fate-mods:validate-pr -->'
	const taggedBody = `${marker}\n${body}`

	const listRes = await fetch(`${API_BASE}/repos/${repo}/issues/${prNumber}/comments?per_page=100`, { headers })
	const comments = listRes.ok ? ((await listRes.json()) as Array<{ id: number; body: string }>) : []
	const existing = comments.find(c => c.body.includes(marker))

	if (existing) {
		await fetch(`${API_BASE}/repos/${repo}/issues/comments/${existing.id}`, {
			method: 'PATCH',
			headers: { ...headers, 'Content-Type': 'application/json' },
			body: JSON.stringify({ body: taggedBody })
		})
	} else {
		await fetch(`${API_BASE}/repos/${repo}/issues/${prNumber}/comments`, {
			method: 'POST',
			headers: { ...headers, 'Content-Type': 'application/json' },
			body: JSON.stringify({ body: taggedBody })
		})
	}
}
