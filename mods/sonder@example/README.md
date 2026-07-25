# sonder@example

A worked example of the FATE: Core mod bundle format — not a mod you'd
actually want installed for gameplay, but a real, complete reference: a sheet
component, a config option, `getModData`/`setModData` character-data
round-tripping, scoped CSS, an i18n key, and correct `onInstall`/`onUninstall`/
`onReconfigure` lifecycle handling.

Adds one section to the character sheet with a single text field (a note,
capped at a configurable max length) that persists with the character.

See [`@fate-core/mod-build`'s docs](https://github.com/Stanislavsonder/fate-core/blob/main/docs/MOD_API.md)
for the full mod API this demonstrates.
