// @ts-check
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Canonical site URL — required for absolute URLs in the sitemap and
	// canonical/OG tags (Phase 3 SEO). getseekstone.com and bestobsidianmcp.com
	// 308-redirect here at the Vercel edge (SHA-103).
	site: 'https://seekstone.dev',
	// Output stays static by default — every page prerenders to HTML. The Vercel
	// adapter only kicks in for routes that opt out via `export const prerender =
	// false`; today that's just the /api/subscribe handler (SHA-167), which needs
	// a server function to keep the Buttondown API key off the client.
	adapter: vercel(),
	// Keep noindex/internal pages (e.g. /styleguide, the /subscribe/* transactional
	// pages) out of the sitemap.
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/styleguide') && !page.includes('/subscribe'),
		}),
	],
});
