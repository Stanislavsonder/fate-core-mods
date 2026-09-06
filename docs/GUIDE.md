# From zero to a published mod

The complete path from "I have an idea" to "users can install it from the
Mod Store", assuming only Node ≥ 24 and pnpm. Skim
[SUBMITTING.md](./SUBMITTING.md) for the registry rules and the app repo's
[MOD_API.md](https://github.com/Stanislavsonder/fate/blob/main/docs/MOD_API.md)
for the full API contract — this guide is the walkthrough that ties them
together.

## 1. Scaffold a project

```bash
pnpm create fate-mod
```

Answer the prompts:

- **id** — `<author>@<name>`, lowercase kebab-case, e.g. `sonder@dice-d6`.
  Use your GitHub handle as `<author>` (CI binds it to your PR).
- **capabilities** — pick what your mod does:
  - `sheetComponents` — Vue sections on the character sheet
  - `dice` — extra 3D die shapes and/or materials
  - `theme` — a CSS skin
  - `translations` — declared in the schema but not yet merged at runtime;
    hold off on translation-pack submissions until the app ships the merge
- **languages** — every language you'll ship a `translations/<lang>.json` for.

You get a self-contained project: `manifest.json`, `bundle.ts`, `src/`,
`translations/`, a `vite.config.ts` using `@fate-app/mod-build`'s preset,
and `pnpm dev`/`pnpm build` scripts.

## 2. Develop with live reload

```bash
pnpm install
pnpm dev        # serves manifest/bundle with rebuild-on-change
```

In the app (any running Assistant for Fate instance — the web version works):
Settings → Developer Mode → enable → **Connect dev mod** → paste the URL
`pnpm dev` prints. The mod hot-reloads in the app on every save. Details and
caveats: MOD_API.md §"Testing locally".

Things the API guarantees that first-time authors most often trip on:

- **`onInstall` must be idempotent** — it re-runs on every load, not once.
- Imports of `vue`, `vue-i18n`, `@ionic/vue`, `ionicons/icons` — and for
  dice mods `three`/`cannon-es` — are not bundled; they resolve to the
  host app's own instances through `FateSDK`. Write normal imports; the
  build preset handles it.
- Dice mods: extend `Dice` / use `DiceMaterial` from `@fate-app/mod-types`
  (real exports, bundled into your mod). Your shapes/materials register in
  the app under `<your-mod-id>:<Name>` keys, so they can't collide with
  anyone else's.

## 3. Check it builds clean

```bash
pnpm build      # emits dist/bundle.mjs
```

Stay under the size limits (1 MB warning / 3 MB hard error). `theme.css` is
capped at 100 KiB. Don't commit `dist/` — CI rebuilds from source, and the
published bundle is always the CI build of what was reviewed, never your
local output.

## 4. Submit

1. Fork this repo, copy your project folder to `mods/<your-id>/`
   (self-contained: own `package.json` + committed lockfile, no shared
   workspace).
2. Add a `LICENSE` (any OSI-approved license) and a `README.md`.
3. Run through the checklist in [SUBMITTING.md](./SUBMITTING.md) §3.
4. Open a PR touching only your `mods/<id>/` folder.

`validate-pr.yml` will comment its verdict (scope → ownership → schema →
version → build → security lint → smoke-load, which also instantiates dice
shapes headlessly). Fix and push until green, then a human reviews your
source against [REVIEW_CHECKLIST.md](./REVIEW_CHECKLIST.md) — the review is
the trust boundary; merged mods run with full app privileges.

## 5. After the merge

`publish.yml` rebuilds from the merged source, pins hashes into
`registry.json`, and deploys to GitHub Pages. The mod appears in the app's
Mod Store on its next index refresh (automatic at app launch). Updates are
the same flow with a strictly-greater `manifest.version` — published
versions are immutable.
