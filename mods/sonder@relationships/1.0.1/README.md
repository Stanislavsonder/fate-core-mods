# sonder@relationships

Track a character's relationships on the Fate sheet: a name and a short
"what" for each connection (an ally, an enemy, family, a contact). Originally
a built-in field of the app's core identity module; split out into its own
mod so the app repo only ships strictly core modules.

Adds one section to the character sheet with an add button, a compact
two-column list (name / what), and a modal form for creating and editing
entries. No config options.

See [`docs/MOD_API.md`](https://github.com/Stanislavsonder/fate/blob/main/docs/MOD_API.md)
in the app repo for the full mod API this is built against.

## Developing

```bash
pnpm install
pnpm run dev
```

Then, in the app: Settings → Developer Mode → enable it → connect to the
URL `pnpm run dev` prints. Changes to this project live-reload in the app.

## Publishing

See [`fate-mods`'s `SUBMITTING.md`](https://github.com/Stanislavsonder/fate-mods/blob/main/docs/SUBMITTING.md)
for how this mod gets submitted to the public registry.

## Versions

See `CHANGELOG.md` for release notes.
