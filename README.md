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
├── layouts/Base.astro   # shared <head> + document shell (SEO seam)
├── pages/index.astro    # landing page
└── styles/tokens.css    # design tokens (dark-first, monospace accents)
public/                  # static assets, robots.txt
astro.config.mjs         # site URL + sitemap integration
```

## License

MIT © Shaq Mughal. The product it markets, Seekstone, is also MIT and lives at
[shaqmughal/seekstone](https://github.com/shaqmughal/seekstone).
