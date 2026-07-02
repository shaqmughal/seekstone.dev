# Seekstone Design System

The brand and interface system for **Seekstone** — *the fastest Obsidian MCP server for
Claude.* This system exists to make one thing happen: a landing page (and supporting
surfaces) that feel **fast, joyful, and trustworthy**, and that pull a visitor toward the
GitHub repo and a 30-second install.

It is intentionally built as a **clean extension of Obsidian's visual language** — the same
volcanic-glass dark canvas, the same violet crystal, the same Inter typography — with
Seekstone's own flavor layered on top: a warm **amber spark**, big **monospace benchmark
numerals**, and quick, confident motion.

---

## What is Seekstone?

Seekstone is an open-source (MIT) **Obsidian MCP server**. It gives Claude — and any
Model Context Protocol client — direct read/write access to an Obsidian vault by reading
files **straight from disk**, holding a warm full-text index in-process. No Obsidian app,
no Local REST API plugin, no network calls.

The product *is* a benchmark story:

- **Speed** — warm searches return in **1.4–3.2 ms**, 25–160× faster than every other
  Obsidian MCP server measured.
- **Context** — a search that costs ~1.75 MB / ~459,000 tokens via the REST plugin costs
  **~3 KB / ~800 tokens** via Seekstone — a **~575× reduction**.
- **Breadth** — **16 tools** (8 read, 8 write), more than any competitor tested.

Those numbers are the hero of every page. The design system is built to make them sing.

### Products / surfaces

1. **Marketing website** (`ui_kits/website/`) — the primary deliverable. The live repo
   `shaqmughal/seekstone.dev` is currently a placeholder Astro scaffold, so the kit here is
   the canonical landing-page design.

(There is no app GUI — Seekstone is a stdio server — so the website is the one product
surface. A docs site could be a future addition.)

---

## Sources (for whoever builds on this)

You may not have access to all of these; they are recorded so you can dig deeper if you do.

- **GitHub — server:** https://github.com/shaqmughal/seekstone
  (`README.md`, `llms.txt`, `CLAUDE.md` → product story, all copy, all benchmark numbers;
  `brand/` → the gem icon, wordmarks, favicon, all imported into `assets/`).
- **GitHub — website:** https://github.com/shaqmughal/seekstone.dev
  (`src/styles/tokens.css` → the original placeholder tokens that seeded this system:
  dark-first, monospace accents, `--accent: #7c3aed`).
- **Obsidian (reference brand we extend):** https://obsidian.md and
  https://obsidian.md/brand — primary purple `#6C31E3`, light accent `#A079FF`,
  dark canvas `#1E1E2E`, typeface **Inter**, story of "durability, privacy, user ownership."
- **Live domains** that will point at this site: `seekstone.dev`, `getseekstone.com`,
  `bestobsidianmcp.com`.
- **npm:** `seekstone` (the former `obsidian-mcp-seekstone` alias is deprecated).

> Explore the repos above to build higher-fidelity work — the README in `shaqmughal/seekstone`
> is the single best source of voice and verified figures.

---

## CONTENT FUNDAMENTALS — how Seekstone writes

The voice is **confident, technical, and warm** — a fast tool that respects your time and
isn't afraid to show its receipts. It borrows Obsidian's calm second-person cadence and adds
a builder's bluntness about performance.

- **Person & address.** Speak to the reader as **"you" / "your vault."** Refer to the product
  as **"Seekstone"** or **"it,"** and to the team as **"we"** only when describing what was
  measured ("5 servers *we* benchmarked"). Obsidian-style possessive headlines are on-brand:
  *"Your context is precious." "Your vault stays yours." "Your files, forever."*
- **Casing.** **Sentence case everywhere** — headlines, buttons, nav. The only ALL-CAPS is the
  letter-spaced **eyebrow/overline** (`OPEN SOURCE · MIT · OBSIDIAN MCP`). Tool names, package
  names, env vars, and commands are always lowercase `mono` (`search`, `patch_frontmatter`,
  `SEEKSTONE_VAULT`, `npx -y seekstone`).
- **Numbers are the argument.** Lead with the figure, set in monospace: **"575× smaller,"
  "1.4 ms," "160× faster," "16 tools."** Always terse (`575×`, never "575 times smaller").
  Never invent a number — every figure traces to the repo's published, reproducible benchmark.
- **Claims are receipts, not adjectives.** Prefer *"the only Obsidian MCP server with published
  numbers"* over *"blazing fast." "Benchmarked, not claimed."* Honesty builds the trust that
  converts.
- **Sentences are short and declarative.** *"No Obsidian app. No plugins. No network calls."*
  Punchy fragments are welcome in display copy; full sentences in body.
- **Tone words:** fast, direct, warm, open, precise, calm. **Avoid:** hype, FOMO, "revolutionary,"
  "game-changing," exclamation-mark spam, fake urgency.
- **Emoji:** none in UI copy. (The README uses a couple of medal/badge emoji in tables; the
  website does not — warmth comes from the amber spark and motion, not emoji.)

**Examples (verbatim from the product):**
> "Search and edit your vault in milliseconds, without burning context."
> "Filesystem-direct · 16 tools · No plugins · No Obsidian app required."
> "Claude never sees your full vault at once — it searches and reads selectively."
> "It's your time to seek." *(our closing CTA, a nod to Obsidian's "It's your time to shine.")*

---

## VISUAL FOUNDATIONS

### The idea
A **faceted violet gemstone** — the "seek stone" — glinting on a deep, purple-tinted black,
with a single warm **amber spark**. Obsidian is *volcanic glass, durable and private*;
Seekstone is *the cut gem inside it — fast, brilliant, and a little joyful.*

### Color
- **Canvas is purple-tinted near-black** (hue ~260°), never flat grey-black — this is the
  primary tie to Obsidian. Page `#110f18`, surface `#1a1726` (≈ Obsidian's `#1E1E2E`),
  raised `#211d2f`. See `tokens/colors.css`.
- **Violet is the brand**, sampled directly from the logo's five facets: `#b8a6ff → #4c2fb8`.
  Primary accent is **`--violet-500` `#7c5cff`** — it sits right between Obsidian's `#6C31E3`
  and `#A079FF`, so we read as the same family. Obsidian's exact values are kept as
  `--obsidian-*` anchors for direct tie-in.
- **Amber `#f59e0b` is Seekstone's own** — the spark. Used sparingly: the logo sparkle, the
  `spark` button, gradient numerals, "try it" delight. It is the warmth Obsidian's all-violet
  palette doesn't have. Never let amber outweigh violet (~1:6 area ratio).
- **Green `#10b981`** means *fastest / winner* — the Seekstone row in the benchmark.
- **Text** is a faintly violet white (`#f1eefb`) → muted (`#8b84a3`), so even the ink ties to
  the canvas hue.

### Type
- **Inter** for everything UI and prose (the Obsidian + Seekstone-wordmark face). Weights
  400/500/600/700/800. Display is **800, tracking −0.04em**, leading ~1.0 — tight and modern.
- **JetBrains Mono** for code, commands, package/tool names, and the signature **benchmark
  numerals** (tabular figures, slashed zero). Big mono numbers are the brand's most
  recognizable typographic move.
- Sentence case; balance headlines (`text-wrap: balance`), pretty body (`text-wrap: pretty`).

### Backgrounds & atmosphere
- **No photography.** Backgrounds are the dark canvas plus: a faint **hairline grid**
  (`--grid-line`, masked to fade out), soft **radial violet glow blobs** behind the hero / CTA,
  and one small amber glow for warmth. Gradients are used *only* as brand accents
  (`--gradient-gem`, `--gradient-spark`) and text fills — never as full-section washes, and
  never the dreaded blue-purple SaaS gradient.

### Depth, borders & cards
- Depth on dark comes from **subtle violet-white hairline borders + soft, large, low-opacity
  ambient shadows**, not heavy drop shadows. Every panel gets a `--ring-inset` top highlight.
- **Cards:** `--surface` fill, 1px `--border-default`, **`--radius-lg` (14px)**, inset ring.
  `variant="glow"` adds a violet gradient edge + halo for the one card you want to pull focus.
  Interactive cards **lift 3px** and gain a violet ring on hover.
- **Radii:** 6px controls · 10px inputs/buttons · 14px cards · 20px panels · pill for badges.

### Motion
- **Quick and confident:** `--dur-fast 120ms` (hover), `--dur-base 200ms` (transitions),
  `--ease-out` for UI. **No bounce on UI.** `--ease-spring` exists for delight only (the gem
  twinkle, icon pops). All decorative motion is **gated by `prefers-reduced-motion`**.
- **Hover** = lighter background / brighter violet + slight lift. **Press** = `scale(0.985)` +
  1px nudge + a darker shade. Focus = 2px violet ring offset from the canvas.
- **Website motion layer** (`ui_kits/website/anim.js` + the motion block at the bottom of
  `site.css`) adds the "fun to play with" feel: a fixed **ambient aurora** (a slow-drifting,
  scroll-parallaxed violet/amber light field behind all content, edge-veiled so the center
  stays legible), gradient-text **shimmer** on headings, a slow **glow-pulse** on the halos,
  **count-up** benchmark numerals, **scroll-reveal** of sections, a hero **cursor-parallax**
  (gem + glows drift toward the pointer), a **cursor spotlight** on cards, and a **sheen
  sweep** on primary/spark buttons.
- **Non-negotiable robustness rule:** motion may never leave content stuck invisible. The
  animation clock can be frozen (throttled/backgrounded tabs, capture/export). So reveals are
  visible-by-default with instant-reveal failsafes, and count-up never replaces the real number
  unless the clock is proven live. Never ship an entrance that hides content behind a
  clock-dependent reveal with no failsafe.

### Layout
- Centered marketing column, **max 1200px** (760px for reading-width sections), fluid `--gutter`
  and `--section-y` rhythm. Sticky glass nav that frosts (`backdrop-filter`) once scrolled.
  Generous whitespace; the numbers and the gem get room to breathe.

### Transparency & blur
- Glass is reserved for the **nav** (and could extend to popovers): `--glass` fill +
  `--blur-md`. Tinted fills (`--accent-soft`, `--spark-soft`) carry icon chips and badges.

---

## ICONOGRAPHY

- **Brand mark:** the **faceted gem** (`assets/seekstone-icon.svg`, `…-mono.svg`,
  `…-favicon.svg`) and the **wordmark** lockups (`…-wordmark-dark/light.svg`). Also available
  as the `<GemMark>` React component (tintable, glow, spark, animated). Keep clear space of at
  least the gem's own width; pair with "Seekstone" in Inter 500–600, tracking −0.03em.
  `assets/obsidian-style-favicon.svg` is the website repo's original Obsidian-style crystal,
  kept for reference only — **do not** use it as Seekstone's mark.
- **UI icons:** **[Lucide](https://lucide.dev) (MIT)** — clean 2px round-cap line icons, the
  closest match to Obsidian's own line-icon style. A curated subset is inlined in
  `ui_kits/website/icons.jsx` as `<Icon name="…">` (so it tints via `currentColor` and needs no
  network). For new icons, pull more from Lucide and keep stroke width 2. *Substitution note:
  Seekstone ships no icon set of its own besides the gem, so Lucide is our chosen standard —
  flag if the brand later adopts a different family.*
- **No emoji** in product UI. **No hand-drawn or AI-generated illustration** — the gem + glow +
  numerals are the entire visual vocabulary.

---

## Index / manifest

```
styles.css                  ← the one file consumers link (imports only)
tokens/
  fonts.css                 Inter + JetBrains Mono (Google Fonts CDN)
  colors.css                violet facets, amber spark, obsidian-tinted neutrals, semantics
  typography.css            families, fluid scale, weights, tracking
  spacing.css               4/8 grid, radii, control sizes, layout, z-index
  effects.css               shadows, brand glows, blur/glass, motion easings
  base.css                  reset + document defaults (uses the tokens)
components/
  brand/   GemMark          the faceted gem as a component
  core/    Button · Badge · Card · Metric · CodeBlock · Tabs
guidelines/foundations/     ~14 specimen cards (Colors · Type · Spacing · Brand)
ui_kits/website/            the landing page (index.html + 8 section files + icons + site.css)
templates/landing-page/     the landing page as a copy-me template — edit one line in
                            ds-base.js to bind the design system, then customise
assets/                     gem icons, wordmarks, favicons
SKILL.md                    Agent-Skill entry point
```

**Components** (props live in each `*.d.ts`, usage in each `*.prompt.md`):
`GemMark`, `Button`, `Badge`, `Card`, `Metric`, `CodeBlock`, `Tabs`.

**Starting points:** all seven components, plus the full **Landing page** screen.

To use the system, link `styles.css`, then read components from
`window.SeekstoneDesignSystem_<hash>` (run the design-system check to get the exact namespace).

---

*MIT © Shaq Mughal. Built as a clean, joyful extension of Obsidian for the MCP era.*
