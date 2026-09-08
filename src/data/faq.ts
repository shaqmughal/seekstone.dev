/**
 * FAQ content — the single source for both the visible accordion (Faq.astro)
 * and the FAQPage JSON-LD (SHA-113). Sharing one array guarantees the
 * structured data Google and AI engines read never drifts from what visitors
 * actually see. Answers trace to the README FAQ; every figure is read from
 * src/data/benchmarks.json (SHA-327).
 */
import {
	BIG,
	fmtKB0,
	fmtMsUnit,
	GUARANTEES,
	HEADLINE,
	multiplier,
	numberWord,
	SEEKSTONE,
	SEMANTIC_MS,
	SERVERS,
} from "./benchmarks";

const seekMs = fmtMsUnit(SEEKSTONE.warmMs[BIG]);
const payloadKB = fmtKB0(HEADLINE.payloadBytes10k);
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
		a: `Yes — that's exactly what Seekstone is. It reads the filesystem directly and bypasses the plugin entirely; no plugins are required at all. Skipping the REST round-trip is the source of the up-to-~${multiplier(HEADLINE.contextTax.display)} payload reduction.`,
	},
	{
		q: "What's the best Obsidian MCP server that doesn't need a plugin?",
		a: `Seekstone — it's filesystem-direct, so there's no plugin and no running Obsidian app, and it's the only Obsidian MCP server with published, reproducible benchmarks: the smallest search payloads (~${payloadKB} KB at 10,000 notes) and the fastest warm keyword search (${seekMs} mean) of the ${numberWord(SERVERS.length)} servers tested.`,
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
		a: "Any client that speaks MCP over stdio works — Claude Desktop, Claude Code, Cursor, VS Code, Windsurf, Continue, and more. ChatGPT is the exception for now: it connects to MCP servers remotely, and Seekstone is local-only today (a remote transport is on the roadmap).",
	},
	{
		q: "Does it work offline?",
		a: "Yes. Seekstone runs fully offline — your vault is read straight from local disk, with no network calls at runtime and no cloud services involved. (Enabling the optional semantic search downloads a small ~30 MB model once, checksum-verified; after that, semantic search is offline too.)",
	},
	{
		q: "Is it safe to use on my vault?",
		a: `Seekstone only modifies files when you explicitly call a write tool, and its Write-Safety Contract — ${numberWord(GUARANTEES)} named guarantees, each backed by a test that runs in CI — covers atomic writes, recoverable deletes, byte-identical frontmatter, a write journal that makes every write reversible (undo_write), and an optional hash-verifiable audit log. The running server makes no network requests, the vault path is sandboxed, and you can go further: SEEKSTONE_READ_ONLY=1 removes the write tools entirely, and SEEKSTONE_WRITE_PATHS restricts writes to folders you allow.`,
	},
	{
		q: "Does it work on Windows?",
		a: "Yes. Seekstone is tested on macOS, Linux, and Windows in CI on every commit.",
	},
	{
		q: "How big a vault can it handle?",
		a: `It is benchmarked against committed vaults of 1,000, 5,000, and 10,000 notes; warm keyword search averages ${seekMs} at 10k (the shipped semantic pipeline, MaxSim rerank included, ~${SEMANTIC_MS} ms). At that scale the cold index build takes tens of seconds and the process stays under ~100 MB of memory; typical personal vaults index in a few seconds.`,
	},
];
