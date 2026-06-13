# Website UI kit — Seekstone landing page

A high-fidelity, interactive recreation of the Seekstone marketing site. The real
site (`shaqmughal/seekstone.dev`) is currently a placeholder Astro scaffold, so this
kit is the **canonical visual design** for the landing page — built to be compelling,
joyful, and trustworthy, and to drive users to the GitHub repo and the install flow.

## Open `index.html`

It assembles the full page from the section components below and composes the
design-system primitives (`Button`, `Card`, `Badge`, `Metric`, `CodeBlock`, `Tabs`,
`GemMark`) from `window.SeekstoneDesignSystem_*`.

## Sections

| File | What it is | Interactions |
|---|---|---|
| `Nav.jsx` | Sticky glass top bar, logo lockup, CTAs | Frosts on scroll |
| `Hero.jsx` | Headline, floating gem, install one-liner, trust strip | Copy button, entrance rise |
| `Benchmark.jsx` | The proof — hero stats + latency comparison chart | Animated bars |
| `Tools.jsx` | All 16 tools | Read / Write tab switch |
| `Pillars.jsx` | Three trust statements (Obsidian "Your X is Y" voice) | — |
| `Install.jsx` | Get-started methods with real commands | Tab switch, copy |
| `Faq.jsx` | The questions that unblock a download | Accordion |
| `Footer.jsx` | Closing CTA band + footer links | — |

## Shared

- `icons.jsx` — the curated Lucide icon set as `window.SS_Icon` (`<Icon name="search" />`).
- `site.css` — marketing-layout helpers only (containers, section rhythm, hero glow). All color/type/spacing comes from the design-system tokens.

## Load order (already wired in `index.html`)

React UMD → ReactDOM UMD → Babel → `_ds_bundle.js` → `icons.jsx` → section files → render script.
Each section file reads the primitives at the top and assigns itself to `window.SS_<Name>`.

## Content source

All copy and every benchmark number are lifted verbatim from the real repo
(`README.md`, `llms.txt`): 575× payload reduction, 1.4 ms warm latency, 16 tools,
the 5-server comparison, the install commands. Do not invent figures — update them
from the repo if they change.
