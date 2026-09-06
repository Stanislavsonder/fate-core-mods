# Reviewer checklist

**The PR review is the security boundary.** There is no sandbox — a merged
mod runs with full app privileges on every user's device (character data,
`localStorage`, `indexedDB`, `fetch`, everything). CI (`validate-pr.yml`)
automates the mechanical checks (schema, version, size, build, a security
lint pass, a smoke-load pass); none of that substitutes for a human actually
reading the code. Green CI is a prerequisite for review, not a replacement
for it.

## Non-negotiables for every PR

- **Read every source file.** PRs are kept small by the bundle size limits
  specifically so this is feasible — refuse to review (request a split, or
  close) anything that's unreviewably large or looks generated/obfuscated
  (the CI security lint's `no-minified-source` check catches the obvious
  cases, but use your own judgment too).
- **Understand every network call, storage access, and dynamic property
  access**, and match it against the mod's stated purpose in its
  description/README. The security lint flags `fetch`/`XMLHttpRequest`/
  `WebSocket`/`localStorage`/`indexedDB`/`document.cookie` as warnings, not
  errors — a mod that legitimately needs one of these (a weather-dice mod
  calling a public API, say) is allowed, but the PR description must justify
  it and you must be satisfied the justification is genuine and matches what
  the code actually does.
- **Character data exposure.** Mods receive the whole `Character` object
  (`onInstall`/`onUninstall`/`onReconfigure`, component props). Flag any code
  that serializes, logs, or transmits character data anywhere off-device.
- **Diff against the previous version**, not just the new code in isolation
  — a mod's v1 can be clean and v1.1 can quietly add something malicious.
  Review every version bump with the same scrutiny as a new submission.
- **Run it.** Scaffold locally if needed, or use the author's own dev-mode
  setup: `fate-mod-build dev` in the mod's folder, connect from a running
  Assistant for Fate instance (Settings → Developer Mode → Connect dev mod), and
  actually use the mod's UI — a smoke-load pass in CI only proves it mounts
  without throwing, not that it behaves correctly.
- **Translations.** Spot-check languages you can read for anything abusive
  or misleading; for languages you can't read, machine-translate a spot
  check rather than skipping the review entirely.
- **`onInstall` idempotency.** The single most common first-PR bug: `onInstall`
  runs on every character load, not just the first install (see
  `docs/MOD_API.md` in the app repo). A mod that unconditionally writes a
  default value instead of `getModData(...) ?? default` will silently wipe
  user data on every reload. Check for this explicitly.

## Ownership

- **New mod**: the folder name matches `manifest.id`, `manifest.author.github`
  matches the PR author, and the id's `<author>` prefix matches their handle
  (or an approved org alias — use judgment, flag anything odd). On merge,
  add the entry to `owners.json` (a maintainer does this, or a bot commit —
  not automated by `validate-pr.yml` itself).
- **Existing mod**: the PR author must already be listed in `owners.json`
  for that id. If someone who isn't listed wants to contribute a fix,
  that's a conversation with the existing owner(s), not something to merge
  around.

## Merging

Once satisfied, merging to `main` triggers `publish.yml`, which rebuilds the
mod from the merged tree (never from anything the author uploaded directly)
and publishes the result. This is what makes "published bundle == reviewed
source" a provable property — don't merge anything you haven't actually read.
