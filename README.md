# seekstone.dev

The official website for [**Seekstone**](https://github.com/shaqmughal/seekstone) — the fastest Obsidian MCP server for Claude.

Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com). Static output; auto-deploys from `main`, preview URL per PR.

## Domains

`seekstone.dev` is canonical. `getseekstone.com` and `bestobsidianmcp.com` 308-redirect to it at the Vercel edge.

## Develop

```sh
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # production build → ./dist/
npm run preview  # preview the production build locally
```

## Structure

```text
src/
├── layouts/Base.astro    # shared <head> + document shell (SEO seam)
├── pages/index.astro     # landing page
├── data/benchmarks.json  # vendored copy of seekstone's generated benchmarks.json
├── data/benchmarks.ts    # typed accessor + README-style formatters
└── styles/tokens.css     # design tokens (dark-first, monospace accents)
public/                   # static assets, robots.txt
scripts/                  # CI-only guards (see below)
astro.config.mjs          # site URL + sitemap integration
```

## Benchmark numbers

Every benchmark figure on the site — tables, metric cards, the latency chart,
tool and guarantee counts, and the headline numbers in prose — is read from
`src/data/benchmarks.json`. That file is a byte-identical copy of the one the
[seekstone repo](https://github.com/shaqmughal/seekstone/blob/main/benchmarks.json)
generates from its committed harness baselines; it is the single source of
truth the README over there is checked against too. Never edit it by hand.

Two guards run in GitHub Actions (not in the Vercel build, which must never
depend on the network):

- `npm run check:benchmarks` fetches the canonical file from `main` and fails
  until the vendored copy matches. Re-sync with
  `curl -fsSL https://raw.githubusercontent.com/shaqmughal/seekstone/main/benchmarks.json -o src/data/benchmarks.json`,
  rebuild, review the rendered numbers, commit.
- `npm run check:phrases` fails on any retired claim in prose (mirrors the
  repo's docs-sync guard).

`Tools.astro` also refuses to build if its tool cards disagree with the
vendored counts. Not covered: `public/og-image.svg` (and the rendered PNG) is
hand-drawn and carries the context-tax multiplier — re-export it when that
number changes.

## License

MIT © Shaq Mughal. The product it markets, Seekstone, is also MIT and lives at
[shaqmughal/seekstone](https://github.com/shaqmughal/seekstone).
