# D6 Dice

An Assistant for Fate mod (`sonder@dice-d6`), scaffolded by `create-fate-mod`.

## Developing

```
npm install
npm run dev
```

Then, in the app: Settings → Developer Mode → enable it → connect to
`http://localhost:5199`. Changes to this project live-reload in the app.

## Publishing

See [`fate-mods`](https://github.com/Stanislavsonder/fate-mods)'s
`SUBMITTING.md` for how to submit this mod to the public registry once it's
ready. In short: `npm run build`, then open a pull request against that repo
adding this folder under `mods/sonder@dice-d6/`.

## API reference

See [`docs/MOD_API.md`](https://github.com/Stanislavsonder/fate/blob/main/docs/MOD_API.md)
in the app repo for the full contract this mod is built against (manifest
shape, `window.FateSDK`, capabilities, lifecycle hooks).
