// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Canonical site URL — required for absolute URLs in the sitemap and
	// canonical/OG tags (Phase 3 SEO). getseekstone.com and bestobsidianmcp.com
	// 308-redirect here at the Vercel edge (SHA-103).
	site: 'https://seekstone.dev',
	// Keep noindex/internal pages (e.g. /styleguide) out of the sitemap.
	integrations: [sitemap({ filter: (page) => !page.includes('/styleguide') })],
});
