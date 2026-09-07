# D20 Dice

An Assistant for Fate mod (`sonder@dice-d20`), scaffolded by `create-fate-mod`.

## Developing

```bash
pnpm install
pnpm dev
```

Then, in the app: Settings → Developer Mode → enable it → connect to
`http://localhost:5199`. Reopen the Roll Dice page after a rebuild to load
the updated die.

## Publishing

See [`fate-mods`](https://github.com/Stanislavsonder/fate-mods)'s
`SUBMITTING.md` for how to submit this mod to the public registry once it's
ready. In short: `pnpm build`, then open a pull request against that repo
adding this folder under `mods/sonder@dice-d20/`.

## API reference

See [`docs/MOD_API.md`](https://github.com/Stanislavsonder/fate/blob/main/docs/MOD_API.md)
in the app repo for the full contract this mod is built against (manifest
shape, `window.FateSDK`, capabilities, lifecycle hooks).
