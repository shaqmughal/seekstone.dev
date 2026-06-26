/**
 * Site-wide constants — the single source of truth for SEO/GEO metadata
 * (SHA-112). Everything an Open Graph tag, Twitter card, or JSON-LD block
 * needs lives here so copy and URLs never drift between pages.
 */
export const SITE = {
	name: "Seekstone",
	domain: "seekstone.dev",
	url: "https://seekstone.dev",
	// Default <title> / description. Per-page values override via Base props.
	title: "Seekstone — the fastest Obsidian MCP server for Claude",
	description:
		"Seekstone is a filesystem-direct Obsidian MCP server for Claude. Search and edit your vault in milliseconds, with up to ~30,000× smaller payloads (3 KB vs tens of MB) than REST-proxy servers. No plugins, no Obsidian app required.",
	// 1200×630 social card served from /public. See public/og-image.svg source.
	ogImage: "/og-image.png",
	author: { name: "Shaq Mughal", url: "https://github.com/shaqmughal" },
	repo: "https://github.com/shaqmughal/seekstone",
	npm: "https://www.npmjs.com/package/seekstone",
	// Surfaced as JSON-LD softwareVersion. Bump on each release — mirrors the
	// `latest` dist-tag of the `seekstone` npm package (0.6.2 as of 2026-06-14).
	version: "0.6.2",
} as const;
