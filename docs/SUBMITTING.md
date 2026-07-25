# Submitting a mod

This repo is a curated, PR-reviewed registry — there is no code sandbox, so
**the review is the trust boundary**. A merged mod runs with full app
privileges on users' devices. Read [`REVIEW_CHECKLIST.md`](./REVIEW_CHECKLIST.md)
to understand what a reviewer will look for before you open a PR.

The mod API contract itself (what's on `window.FateSDK`, the manifest fields,
the bundle shape, lifecycle guarantees) lives in the app repo, not here:
**[FATE: Core's `docs/MOD_API.md`](https://github.com/Stanislavsonder/fate-core/blob/main/docs/MOD_API.md)**
— read that first. This document only covers the registry-specific parts:
folder layout, local development, and the PR checklist.

## 1. Scaffold

Create `mods/<author>@<name>/` (use your GitHub handle as `<author>`) with:

```
mods/<author>@<name>/
  manifest.json
  bundle.ts
  src/
    components/...
  translations/
    en.json
  package.json
  vite.config.ts
  README.md
  CHANGELOG.md
  LICENSE
```

`package.json`:

```json
{
	"name": "<author>-<name>-mod",
	"private": true,
	"type": "module",
	"scripts": {
		"build": "vite build",
		"dev": "node node_modules/@fate-core/mod-build/dist/devCli.js"
	},
	"dependencies": {
		"@fate-core/mod-types": "^0.1.0"
	},
	"devDependencies": {
		"@fate-core/mod-build": "^0.1.0",
		"@vitejs/plugin-vue": "^6.0.0",
		"vite": "^8.0.0",
		"vue": "^3.5.0"
	}
}
```

`vite.config.ts`:

```ts
import { defineModConfig } from '@fate-core/mod-build'
export default defineModConfig()
```

Each mod folder is **self-contained** — its own `package.json`, its own
lockfile (commit it), its own `vite.config.ts`. It is deliberately **not**
part of a shared pnpm workspace across mods, so your PR only ever touches
files inside your own `mods/<id>/` folder — no shared lockfile, no conflicts
with other authors' concurrent PRs.

`LICENSE` is required — pick any OSI-approved license for your own mod's
source; it does not need to match this repo's.

## 2. Develop

```bash
cd mods/<author>@<name>
pnpm install
pnpm run build          # emits dist/bundle.mjs
```

For live reload against a running FATE: Core instance, see `docs/MOD_API.md`
§5 ("Testing locally") in the app repo — Developer Mode → Connect dev mod.

## 3. Before opening a PR

- [ ] `manifest.json` validates against [`../registry.schema.json`](../registry.schema.json)
- [ ] `manifest.version` is a valid semver, strictly greater than any
      previously published version of this mod (`1.0.0`+ if this is new)
- [ ] `manifest.languages` matches the files under `translations/`
- [ ] `LICENSE`, `README.md` are present
- [ ] Source is human-readable — no build output, no minified/generated
      files committed (only `manifest.json`, `bundle.ts`, `src/`, etc. —
      never a checked-in `dist/`)
- [ ] `onInstall` is idempotent — see `docs/MOD_API.md`'s lifecycle section;
      this is the single most common bug in a first submission
- [ ] `pnpm run build` succeeds locally and stays under the size limits
      (1MB soft warning / 3MB hard error for `bundle.mjs`)
- [ ] If this is a new mod: your PR is the only thing touching your
      `mods/<id>/` folder, and nothing outside it
- [ ] If this updates an existing mod: you're listed in [`../owners.json`](../owners.json)
      for that id

## 4. What happens after you open the PR

`validate-pr.yml` runs automatically (scope → ownership → schema → version →
build → security lint → smoke-load) and comments the result on your PR. Fix
anything it flags and push again — it re-runs on every push to the PR branch.

Once CI is green, a maintainer reviews your source against
[`REVIEW_CHECKLIST.md`](./REVIEW_CHECKLIST.md). On merge, `publish.yml`
rebuilds your mod from the merged source (never from anything you upload
directly) and publishes it — the published bundle is provably what was
reviewed.

## 5. Updating a published mod

Bump `manifest.version`, open a PR against your own `mods/<id>/` folder same
as above. Published versions are immutable — a new version is always a new
folder-content-at-that-commit, never an edit to what's already live.
