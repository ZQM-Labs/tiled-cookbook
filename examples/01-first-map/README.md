# 01 — First Tiled quest map

A small Tiled JSON map scaffold with an orthogonal tile grid and a separate object layer for quest markers. It uses synthetic coordinates and no external art assets, so the structural example is self-contained.

## Open in Tiled

Open `first-map.tmj` in Tiled 1.10 or newer. The `Ground` layer is intentionally empty (zero GIDs) because this first pattern focuses on map dimensions and quest-object metadata, not art or collision. Add a licensed tileset and ground tiles when building a real level. The `Quest Markers` object layer contains Start, Lantern A, and Finish point objects.

Each marker has a stable `checkpoint_id` custom property and a `manual_fallback_allowed` property. These properties are content metadata, not proof of arrival or authorization. A game client should validate checkpoint order and any protected reward on the server.

## Validate the map contract

Requires Node.js 20 or newer. From this directory:

```sh
npm test
```

The tests parse the actual `.tmj` JSON and verify dimensions, tile-data length, non-negative integer GIDs, unique object IDs and checkpoint keys, marker bounds, and explicit fallback metadata. They do not launch Tiled or validate rendering, tileset imports, collision, or game-engine integration.

## Files

- `first-map.tmj` — self-contained Tiled JSON map.
- `map-contract.test.mjs` — dependency-free structural regression tests.
- `package.json` — test command and Node.js engine requirement.

## Design and safety notes

- Keep quest markers in an object layer instead of encoding all game logic in tile indices.
- Treat map coordinates as authored content. Convert them to geographic coordinates only through a documented transformation appropriate to the game.
- Never use client-supplied marker activation as authorization for paid content, prizes, or durable scores.
- Choose public, permitted, accessible real-world locations for actual routes; do not publish private addresses or hazardous destinations.
- Before release, add a real tileset, run the map through the target game engine, and verify collision and responsive rendering there.
