---
name: seekstone-design
description: Use this skill to generate well-branded interfaces and assets for Seekstone — the fastest open-source Obsidian MCP server for Claude — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Seekstone design

Read the `readme.md` file within this skill, and explore the other available files. It
covers the brand story, content/voice fundamentals, visual foundations, iconography, and a
full file index.

Seekstone's identity is a **clean extension of Obsidian**: a faceted violet gem on a
purple-tinted near-black canvas, Inter + JetBrains Mono type, with Seekstone's own **amber
spark** and big **monospace benchmark numerals** for warmth and proof. The goal of any
Seekstone surface is to feel **fast, joyful, and trustworthy** and to drive people to the
GitHub repo and the 30-second install.

## Where things are

- `styles.css` — the single stylesheet to link; it `@import`s every token + font file under `tokens/`.
- `tokens/` — colors, typography, spacing, effects (CSS custom properties).
- `components/` — React primitives: `GemMark`, `Button`, `Badge`, `Card`, `Metric`, `CodeBlock`, `Tabs`. Props in each `*.d.ts`, usage in each `*.prompt.md`.
- `ui_kits/website/` — the full landing page, well factored into section components.
- `guidelines/foundations/` — specimen cards for colors, type, spacing, brand.
- `assets/` — gem icons, wordmarks, favicons.

## How to work

If creating **visual artifacts** (slides, mocks, throwaway prototypes, etc.): copy the assets
you need out of `assets/`, link `styles.css` (or inline the tokens), and produce static HTML
files for the user to view. Compose the existing components rather than reinventing them;
read primitives from `window.SeekstoneDesignSystem_<hash>` after loading `_ds_bundle.js`, or
lift their styles directly from the token variables.

If working on **production code** (e.g. the real `seekstone.dev` Astro site): copy the assets
and use the tokens + the rules in `readme.md` to become an expert in designing with this
brand. Keep all copy and every benchmark figure faithful to the Seekstone repo.

If the user invokes this skill **without other guidance**, ask them what they want to build or
design, ask a few focused questions (surface, audience, fidelity, variations), and then act as
an expert designer who outputs HTML artifacts *or* production code, depending on the need.

## Non-negotiables

- Sentence case everywhere; ALL-CAPS only for the letter-spaced eyebrow. Tool/package/env names always lowercase mono.
- Numbers lead and are set in JetBrains Mono, terse (`575×`, `1.4 ms`, `16 tools`). Never invent a figure.
- Violet is the brand; amber is a sparing accent (~1:6). No emoji in UI, no hand-drawn/AI illustration — the gem, glow, and numerals are the whole visual vocabulary.
- Dark-first, purple-tinted canvas. Subtle hairline borders + soft glows for depth, not heavy shadows. Quick motion, no bounce, respect `prefers-reduced-motion`.
