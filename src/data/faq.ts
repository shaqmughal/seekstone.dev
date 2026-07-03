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
		q: "Does the Obsidian app need to be running?",
		a: "No. Seekstone works when Obsidian is closed — it reads the vault folder directly from disk, so the app never has to be running.",
	},
	{
		q: "Do I need the Local REST API plugin?",
		a: "No. Seekstone bypasses it entirely — that's the source of the up-to-~47,000× payload reduction. No plugins are required at all.",
	},
	{
		q: "How do I connect Claude to Obsidian?",
		a: "Run npx -y seekstone init — it auto-detects your Obsidian vault and configures Claude Desktop for you (use --client code for Claude Code). That's the fastest way to connect Claude to Obsidian: no Local REST API plugin, no running Obsidian app.",
	},
	{
		q: "Which AI clients does it support?",
		a: "Any client that speaks the Model Context Protocol — Claude Desktop, Claude Code, Cursor, ChatGPT, VS Code, Windsurf, Continue, and more.",
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
