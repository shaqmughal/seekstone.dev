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
		a: "No. Seekstone reads the vault folder directly from disk. Obsidian can be open or closed — it never has to be running.",
	},
	{
		q: "Do I need the Local REST API plugin?",
		a: "No. Seekstone bypasses it entirely — that's the source of the up-to-~30,000× payload reduction. No plugins are required at all.",
	},
	{
		q: "Which AI clients does it support?",
		a: "Any client that speaks the Model Context Protocol over stdio — Claude Desktop, Claude Code, Cursor, Windsurf, Continue, and more.",
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
