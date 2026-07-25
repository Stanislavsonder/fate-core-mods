# mods/

One folder per mod, named exactly `<author>@<name>` (matching the mod's
`manifest.json` `id` field). Each folder is a **self-contained package** —
its own `package.json`, its own lockfile, its own `vite.config.ts` — not part
of a shared workspace, so unrelated mods' PRs never touch the same lockfile.

See [`../docs/SUBMITTING.md`](../docs/SUBMITTING.md) for the full submission
process, including the exact folder layout expected here.
