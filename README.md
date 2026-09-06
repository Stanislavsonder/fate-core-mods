# fate-mods

The public, curated mod registry for
[Assistant for Fate](https://github.com/Stanislavsonder/fate) — the digital
character sheet for the FATE Core RPG system. Mods merged here are built by
CI, hash-pinned into `registry.json`, and served via GitHub Pages straight
into the app's Mod Store.

- **Write and publish a mod:** start with [docs/GUIDE.md](./docs/GUIDE.md)
  (zero-to-published walkthrough), then [docs/SUBMITTING.md](./docs/SUBMITTING.md)
  for the registry rules.
- **API contract:** the app repo's
  [docs/MOD_API.md](https://github.com/Stanislavsonder/fate/blob/main/docs/MOD_API.md).
- **Review process:** [docs/REVIEW_CHECKLIST.md](./docs/REVIEW_CHECKLIST.md).
  There is no code sandbox — **the PR review is the trust boundary**, and a
  merged mod runs with full app privileges on users' devices.

## How trust works here

- Every submission is a source-only PR (`mods/<id>/`, never `dist/`);
  CI validates scope, ownership, schema, and version, rebuilds the bundle
  with a pinned toolchain, security-lints it, and smoke-loads it before a
  human ever reviews it.
- `publish.yml` republishes only from merged source; `registry.json` pins a
  sha256 for every file, and the app re-verifies the bundle hash at install
  time *and* on every load.
- `blocklist.json` is the kill switch: a blocklisted version is disabled in
  every app on its next registry refresh. **Response-time target: a
  confirmed-malicious report gets blocklisted within 24 hours** — report via
  a GitHub issue on this repo.

## Maintenance policy

- The SDK packages (`@fate-app/mod-types`, `@fate-app/mod-build`) version
  in lockstep with the app's `SDK_VERSION` (same major.minor). Mods declare
  the range they need via `"sdk"` and the app refuses to load a mod outside
  its range — see MOD_API.md's compatibility section.
- **ABI-breaking changes are announced first:** any dependency upgrade that
  would break the mod ABI (a Vue/Ionic/three/cannon-es major, or any
  removal from the `FateSDK` surface) gets an RFC issue in the app repo
  before an SDK major ships, with migration notes for affected authors.
- Schema changes to [`registry.schema.json`](./registry.schema.json) land
  here first; the app repo vendors a byte-identical copy (CI-checked), so
  the canonical version is always this one.
