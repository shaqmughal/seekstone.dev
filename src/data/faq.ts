/**
 * FAQ content — the single source for both the visible accordion (Faq.astro)
 * and the FAQPage JSON-LD (SHA-113). Sharing one array guarantees the
 * structured data Google and AI engines read never drifts from what visitors
 * actually see. Answers trace to the README FAQ.
 */
export interface FaqItem {
	q: string;
	a: string;
}

export const FAQS: FaqItem[] = [
	{
		q: "Does it work when Obsidian is closed?",
		a: "Yes. Seekstone works when Obsidian is closed — it reads the vault folder directly from disk, so the app never has to be running.",
	},
	{
		q: "Can I use an Obsidian MCP server without the Local REST API plugin?",
		a: "Yes — that's exactly what Seekstone is. It reads the filesystem directly and bypasses the plugin entirely; no plugins are required at all. Skipping the REST round-trip is the source of the up-to-~47,000× payload reduction.",
	},
	{
		q: "What's the best Obsidian MCP server that doesn't need a plugin?",
		a: "Seekstone — it's filesystem-direct, so there's no plugin and no running Obsidian app, and it's the only Obsidian MCP server with published, reproducible benchmarks: the smallest search payloads (~2 KB at 10,000 notes) and the fastest warm search (6.2 ms) of the six servers tested.",
	},
	{
		q: "Can Claude query my Obsidian notes by frontmatter properties?",
		a: "Yes — Seekstone's query_notes tool filters notes by frontmatter key/value predicates (equals, contains, exists, greater/less-than on numbers and ISO dates), plus tag, folder, modified time, and file size. It returns compact rows rather than note content — a full 10,000-note vault scan costs about 350 bytes of context.",
	},
	{
		q: "How do I connect Claude to my Obsidian vault?",
		a: "Run npx -y seekstone init — it auto-detects your Obsidian vault and configures Claude Desktop for you (use --client code for Claude Code). That's the fastest way to connect Claude to Obsidian: no Local REST API plugin, no running Obsidian app.",
	},
	{
		q: "Does it work with ChatGPT, Cursor, and Claude Code?",
		a: "Yes. Any client that speaks the Model Context Protocol works — Claude Desktop, Claude Code, Cursor, ChatGPT, VS Code, Windsurf, Continue, and more.",
	},
	{
		q: "Does it work offline?",
		a: "Yes. Seekstone works offline — your vault is read straight from local disk, with zero network calls and no cloud services involved.",
	},
	{
		q: "Is it safe to use on my vault?",
		a: "Seekstone only modifies files when you explicitly call a write tool. It makes no network requests, and the vault path is sandboxed — no tool can read or write outside it.",
	},
	{
		q: "Does it work on Windows?",
		a: "Yes. Seekstone is tested on macOS, Linux, and Windows in CI on every commit.",
	},
	{
		q: "How big a vault can it handle?",
		a: "It is benchmarked against committed vaults of 1,000, 5,000, and 10,000 notes, and search stays in single-digit milliseconds even at 10k. The in-memory index is a few MB and starts in a few seconds.",
	},
];
