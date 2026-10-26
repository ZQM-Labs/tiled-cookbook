# Tiled Cookbook

<!-- ZQM-START -->
<!-- markdownlint-disable MD033 -->
<p align="center">
  <strong>ZQM Labs</strong><br>
  <a href="https://github.com/ZQM-Labs">ZQM Labs</a>
</p>
<!-- markdownlint-enable MD033 -->
<!-- ZQM-END -->

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A **Tiled cookbook** for tile maps in location games: maps, tilesets, object layers for quests, and web export. Patterns are written for map-based games built on real places, where the map is the game board. It is intended for game developers and level designers working with tile maps. Validate each pattern against your own game, Tiled version, and operating environment before adopting it.

## Repository role and status

**Status:** Active, public — seeding. Pattern passes land in follow-up work; the table below lists what is planned, not what is already written.

**What this repository is:** Tiled patterns — maps, tilesets, quest object layers, and web export.

**What it contributes:** Part of the ZQM Labs game-development portfolio, and a sibling to the ZQM Computing geospatial cookbook series.

**Standing:** This repository is maintained independently. Automated checks cover only the paths and environments configured in its workflows; they do not establish production readiness or operational certification.

## Who this is for

Game developers and level designers working with tile maps for location and quest games.

## Prerequisites

- Tiled (version pinned per pattern at fill time)
- A tile set (synthetic or openly licensed, with provenance noted)
- A web game client that can load the exported map format

## Patterns (planned)

| # | Example | What it will demonstrate |
|---|---------|--------------------------|
| 01 | `01-first-map` | A first playable tile map: layers, tiles, and collision |
| 02 | `02-tilesets` | Building and managing tilesets, including terrain transitions |
| 03 | `03-object-layers-quests` | Object layers as quest content: checkpoints, triggers, and objectives |
| 04 | `04-export-web` | Exporting maps for web delivery and loading them in a browser game |

## Repository layout

```text
tiled-cookbook/
├── examples/  # one directory per pattern
├── README.md
└── LICENSE
```

## Roadmap

- First pattern pass: first map (01), then tilesets (02)
- Second pass: quest object layers (03) and web export (04)

## Contributing

A contributing guide lands with the first pattern pass. Report security issues to <zqmcomputing@gmail.com> — please do not open a public issue for those.
