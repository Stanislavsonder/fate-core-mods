/**
 * Flags source files that look minified/obfuscated rather than
 * human-reviewable — reviewers must be able to actually read every submitted
 * file (docs/REVIEW_CHECKLIST.md). Everything else on the security-lint pass
 * (eval, new Function, non-literal dynamic import, document.write) is
 * expressible with core `no-eval`/`no-implied-eval`/`no-new-func` and
 * `no-restricted-syntax` (see eslint.config.js) — this heuristic is the one
 * check with no built-in equivalent, so it's the only real custom rule here.
 */

const MAX_LINE_LENGTH = 300
const MAX_OFFENDING_LINE_RATIO = 0.05 // >5% of lines over MAX_LINE_LENGTH looks generated, not hand-written

/** @type {import('eslint').Rule.RuleModule} */
const noMinifiedSource = {
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow minified/obfuscated-looking source (must be human-reviewable)'
		},
		schema: []
	},
	create(context) {
		return {
			Program(node) {
				const lines = context.sourceCode.getLines()
				if (lines.length === 0) return

				const offending = lines.filter(line => line.length > MAX_LINE_LENGTH).length
				if (offending / lines.length > MAX_OFFENDING_LINE_RATIO) {
					context.report({
						node,
						message: `File looks minified/generated (${offending}/${lines.length} lines exceed ${MAX_LINE_LENGTH} chars) — submit human-readable source, not a build artifact.`
					})
				}
			}
		}
	}
}

export default {
	rules: {
		'no-minified-source': noMinifiedSource
	}
}
