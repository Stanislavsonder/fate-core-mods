# sonder@example

A worked example of the Assistant for Fate mod bundle format — not a mod you'd
actually want installed for gameplay, but a real, complete reference: a sheet
component, a config option, `getModData`/`setModData` character-data
round-tripping, scoped CSS, an i18n key, and correct `onInstall`/`onUninstall`/
`onReconfigure` lifecycle handling.

Adds one section to the character sheet with a single text field (a note,
capped at a configurable max length) that persists with the character.

See [`@fate-app/mod-build`'s docs](https://github.com/Stanislavsonder/fate/blob/main/docs/MOD_API.md)
for the full mod API this demonstrates.

This was the first mod published through the real `validate-pr.yml` /
`publish.yml` pipeline — see `docs/SUBMITTING.md` if you'd like to add your own.

## Versions

See `CHANGELOG.md` for release notes.
