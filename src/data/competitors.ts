/**
 * Competitor-capture pages (SHA-221) — the single source for /vs/[slug].
 * One entry per benchmarked competitor; every figure traces to the harness
 * scaling report (packages/harness/fixtures/baseline-reports/scaling/
 * benchmark-scaling.md in the main repo) and the canonical messaging doc.
 * Fairness is the strategy: each entry names real strengths of the
 * competitor ("edge") — honest pages rank better and backfire less.
 */

export interface VsRow {
	label: string;
	seekstone: string;
	them: string;
}

export interface VsFaq {
	q: string;
	a: string;
}

export interface Competitor {
	/** URL segment: /vs/<slug> */
	slug: string;
	/** Package/repo name as users search it */
	name: string;
	author: string;
	repo: string;
	/** <title> — competitor name + "alternative" up front for the query */
	metaTitle: string;
	metaDescription: string;
	/** Hero paragraph — the verdict, honest and specific */
	verdict: string;
	/** At-a-glance table rows */
	rows: VsRow[];
	/** 1k / 5k / 10k scaling — payload then latency, competitor values */
	payload: [string, string, string];
	latency: [string, string, string];
	/** Seekstone's values are constant across pages (from the same report) */
	/** "Where <name> has the edge" — genuine strengths, 3 cards */
	edge: { title: string; body: string }[];
	/** "Why the numbers differ" — architecture prose paragraphs */
	why: string[];
	/** On-page FAQ; also emitted as FAQPage JSON-LD */
	faq: VsFaq[];
}

export const SEEKSTONE_SCALE = {
	payload: ["1.6 KB", "1.8 KB", "2.0 KB"] as [string, string, string],
	latency: ["1.1 ms", "3.1 ms", "6.2 ms"] as [string, string, string],
};

export const COMPETITORS: Competitor[] = [
	{
		slug: "mcp-obsidian",
		name: "mcp-obsidian",
		author: "MarkusPfundstein",
		repo: "https://github.com/MarkusPfundstein/mcp-obsidian",
		metaTitle: "mcp-obsidian alternative — Seekstone vs mcp-obsidian benchmark | Seekstone",
		metaDescription:
			"Looking for an mcp-obsidian alternative? Head-to-head benchmark on a 10,000-note vault: 2 KB vs 95 MB search payloads, 6.2 ms vs 1,550 ms warm latency, no Local REST API plugin required. Reproducible with an open-source harness.",
		verdict:
			"mcp-obsidian connects Claude to your vault by proxying Obsidian's Local REST API plugin — which returns full note content for every search hit. On our committed 10,000-note benchmark vault that meant 95 MB per search on average, and one broad query returned 370.9 MB (~97.8 million tokens) in a single tool call. Seekstone reads the vault from disk and returns ranked excerpts instead: ~2 KB for the same queries, with Obsidian closed.",
		rows: [
			{
				label: "Architecture",
				seekstone: "Filesystem-direct, warm in-process index",
				them: "REST proxy via Local REST API plugin",
			},
			{ label: "Local REST API plugin", seekstone: "Not needed", them: "Required" },
			{
				label: "Obsidian app running",
				seekstone: "Not needed — works with Obsidian closed",
				them: "Required",
			},
			{ label: "Search payload @ 10k notes (mean)", seekstone: "2.0 KB", them: "95 MB" },
			{
				label: "Worst single query @ 10k notes",
				seekstone: "~2 KB",
				them: "370.9 MB / ~97.8M tokens",
			},
			{
				label: "Warm search latency @ 10k notes",
				seekstone: "6.2 ms",
				them: "1,550 ms (~250× slower)",
			},
		],
		payload: ["9.8 MB", "45 MB", "95 MB"],
		latency: ["164 ms", "740 ms", "1,550 ms"],
		edge: [
			{
				title: "No index in memory.",
				body: "mcp-obsidian keeps no state of its own — search runs inside the Obsidian app you already have open. Seekstone's warm index costs a few MB of RAM per vault; mcp-obsidian offloads that to Obsidian.",
			},
			{
				title: "It sees the app's live view.",
				body: "Every call goes through the running app, so results reflect exactly what Obsidian itself sees at that moment. Seekstone reads from disk, so an edit is visible once Obsidian autosaves it (typically within a couple of seconds).",
			},
			{
				title: "Familiar if you already run the plugin.",
				body: "If the Local REST API plugin is already part of your setup, mcp-obsidian slots into it without introducing a second way of reading the vault.",
			},
		],
		why: [
			"The payload gap is architectural, not a tuning issue. Obsidian's REST API returns the full content of every matching note, and mcp-obsidian forwards that to the model — so payload grows with your vault. At 1,000 notes it's 9.8 MB per search; at 10,000 notes it's 95 MB. Seekstone returns short ranked excerpts, so it stays ~2 KB at every size. That's up to a ~47,000× difference in what your context window has to absorb.",
			"Latency follows the same logic: every mcp-obsidian query is an HTTP round-trip into the app, while Seekstone serves queries from a warm in-process full-text index kept live by a file watcher. At 10,000 notes that's 1,550 ms vs 6.2 ms warm — and the gap widens as the vault grows.",
		],
		faq: [
			{
				q: "Is Seekstone a drop-in alternative to mcp-obsidian?",
				a: "For typical use, yes. Both are standard MCP stdio servers, so any MCP client that runs mcp-obsidian can run Seekstone — npx -y seekstone init sets it up for Claude Desktop, Claude Code, Cursor, and VS Code. The difference is that Seekstone reads your vault from disk, so it needs no Local REST API plugin and works with Obsidian closed.",
			},
			{
				q: "Why is mcp-obsidian's search payload so large?",
				a: "It proxies Obsidian's Local REST API, which returns the full content of every matching note. On a 10,000-note vault that averaged 95 MB per search in our benchmark, with one broad query returning 370.9 MB (~97.8 million tokens) in a single tool call. Seekstone returns ranked excerpts instead — ~2 KB for the same queries.",
			},
			{
				q: "Do I need to uninstall anything to switch?",
				a: "No. Seekstone runs alongside whatever you have installed and never requires the Local REST API plugin. Point SEEKSTONE_VAULT at your vault folder and it works — whether Obsidian is running or not.",
			},
		],
	},
	{
		slug: "obsidian-mcp-server",
		name: "obsidian-mcp-server",
		author: "cyanheads",
		repo: "https://github.com/cyanheads/obsidian-mcp-server",
		metaTitle:
			"obsidian-mcp-server alternative — Seekstone vs obsidian-mcp-server | Seekstone",
		metaDescription:
			"Seekstone vs obsidian-mcp-server, benchmarked on a 10,000-note vault: 2 KB vs 47 KB search payloads, 6.2 ms vs 732 ms warm latency — and no Local REST API plugin or running Obsidian app required. Reproducible with an open-source harness.",
		verdict:
			"obsidian-mcp-server is the most-downloaded Obsidian MCP server and the strongest REST-proxy option we benchmarked — its payloads stay bounded where other proxies balloon. Seekstone's difference is structural: it reads the vault from disk, so there's no Local REST API plugin to install, no running Obsidian app to depend on, ~118× faster warm search, and ~23× smaller search payloads on the 10,000-note benchmark vault.",
		rows: [
			{
				label: "Architecture",
				seekstone: "Filesystem-direct, warm in-process index",
				them: "REST proxy via Local REST API plugin",
			},
			{ label: "Local REST API plugin", seekstone: "Not needed", them: "Required" },
			{
				label: "Obsidian app running",
				seekstone: "Not needed — works with Obsidian closed",
				them: "Required",
			},
			{ label: "Search payload @ 10k notes (mean)", seekstone: "2.0 KB", them: "47 KB" },
			{
				label: "Warm search latency @ 10k notes",
				seekstone: "6.2 ms",
				them: "732 ms (~118× slower)",
			},
			{
				label: "Structured frontmatter queries",
				seekstone: "Built-in (query_notes) — property/date/size predicates, ~350 B answers",
				them: "JSONLogic via REST",
			},
		],
		payload: ["55 KB", "47 KB", "47 KB"],
		latency: ["82 ms", "356 ms", "732 ms"],
		edge: [
			{
				title: "The most-downloaded option.",
				body: "obsidian-mcp-server is #1 by npm downloads among Obsidian MCP servers — a real signal of maturity, documentation, and community testing that a newer server has to earn.",
			},
			{
				title: "Bounded payloads for a REST proxy.",
				body: "Unlike other REST proxies, its search responses hold roughly flat (~47 KB) as the vault grows — the best payload discipline of any proxy we benchmarked.",
			},
			{
				title: "Leans on Obsidian's plugin ecosystem.",
				body: "Running inside the app's REST API lets it integrate app-side capabilities — such as Omnisearch-backed relevance ranking — that a filesystem-direct server has to reimplement itself.",
			},
		],
		why: [
			"obsidian-mcp-server is the REST proxy done well: it caps what it returns, so the payload story is bounded rather than catastrophic. The remaining ~23× payload gap and the dependency chain are structural — it can only answer while Obsidian is open with the Local REST API plugin installed, configured with an API key, and reachable over local HTTPS. Seekstone reads the vault directly from disk: nothing to install inside Obsidian, nothing that has to be running.",
			"Latency is where the round-trips show: 732 ms warm search at 10,000 notes vs 6.2 ms from Seekstone's warm in-process index — and its latency grows ~9× from a 1k-note vault to a 10k-note vault, while Seekstone's barely moves. For an agent making many tool calls per task, milliseconds-vs-seconds compounds quickly.",
		],
		faq: [
			{
				q: "Is Seekstone a good alternative to obsidian-mcp-server?",
				a: "If you want vault access without installing the Local REST API plugin or keeping Obsidian running, yes — that's the structural difference. On the 10,000-note benchmark vault Seekstone also returns ~23× smaller search payloads (2 KB vs 47 KB) and answers ~118× faster warm (6.2 ms vs 732 ms). Both are standard MCP stdio servers, so switching is a config change.",
			},
			{
				q: "What does obsidian-mcp-server do better?",
				a: "It's the most-downloaded Obsidian MCP server, it has the best payload discipline of any REST proxy we benchmarked, and running inside the app lets it use app-side features like Omnisearch-backed relevance ranking. If your workflow depends on plugin-side capabilities, that's a genuine advantage.",
			},
			{
				q: "Do both servers edit notes safely?",
				a: "Seekstone's write path is verified byte-for-byte by its open-source harness: frontmatter is edited in place with key order, quote style, and comments preserved. We haven't benchmarked competitors' write safety, so we make no claim about obsidian-mcp-server there — the harness is public if you want to run that comparison.",
			},
		],
	},
	{
		slug: "mcpvault",
		name: "mcpvault",
		author: "bitbonsai",
		repo: "https://github.com/bitbonsai/mcpvault",
		metaTitle: "mcpvault alternative — Seekstone vs mcpvault benchmark | Seekstone",
		metaDescription:
			"Seekstone vs mcpvault, benchmarked on a 10,000-note vault: both return ~2 KB excerpt payloads, but Seekstone's warm in-process index answers in 6.2 ms vs 958 ms — and adds structured queries, backlinks, and outline tools. Reproducible with an open-source harness.",
		verdict:
			"mcpvault gets the most important thing right: like Seekstone, it's filesystem-direct and returns excerpts, so its search payloads stay ~2 KB at any vault size — no Local REST API plugin, no running app. The gap is latency and depth: mcpvault re-scans the vault in a subprocess per query (958 ms warm at 10,000 notes), while Seekstone serves the same queries from a warm in-process index in 6.2 ms, and adds tools no other benchmarked server has — structured frontmatter queries, backlinks, outlines, and tag listings.",
		rows: [
			{
				label: "Architecture",
				seekstone: "Filesystem-direct, warm in-process index",
				them: "Filesystem-direct, subprocess scan per query",
			},
			{ label: "Local REST API plugin", seekstone: "Not needed", them: "Not needed" },
			{
				label: "Obsidian app running",
				seekstone: "Not needed",
				them: "Not needed",
			},
			{ label: "Search payload @ 10k notes (mean)", seekstone: "2.0 KB", them: "2.2 KB" },
			{
				label: "Warm search latency @ 10k notes",
				seekstone: "6.2 ms",
				them: "958 ms (~155× slower)",
			},
			{
				label: "Backlinks, outlines, tags, structured queries",
				seekstone: "Built-in (get_backlinks, outline_note, list_tags, query_notes)",
				them: "Not offered",
			},
		],
		payload: ["1.7 KB", "1.9 KB", "2.2 KB"],
		latency: ["96 ms", "467 ms", "958 ms"],
		edge: [
			{
				title: "Payload discipline.",
				body: "mcpvault is the only other server we benchmarked in the ~2 KB class — it returns excerpts, not documents, and stays flat as the vault grows. On the metric that matters most for context tax, it's genuinely good.",
			},
			{
				title: "The same no-plugin story.",
				body: "Like Seekstone, it reads the vault from disk: no Local REST API plugin, no API key, and it works with Obsidian closed. The deployment story is equally simple.",
			},
			{
				title: "Stateless simplicity.",
				body: "It holds nothing in memory between queries — no resident index, no file watcher. If you query your vault rarely and RAM matters more than latency, that trade-off is defensible.",
			},
		],
		why: [
			"Seekstone and mcpvault agree on the big architectural call — filesystem-direct, excerpts-not-documents — which is why both sit in the ~2 KB payload class while REST proxies climb into the megabytes. The difference is what happens per query: mcpvault spawns a subprocess and scans the vault each time, so its warm latency grows 10× from a 1k-note vault (96 ms) to a 10k-note vault (958 ms). Seekstone builds its full-text index once, keeps it live with a file watcher, and answers from memory: 6.2 ms at 10,000 notes, barely moving with scale.",
			"The second difference is tool depth. Seekstone ships 17 tools, including several no other benchmarked server offers: query_notes for structured frontmatter queries that answer in a few hundred bytes, get_backlinks and get_links for graph navigation, outline_note for section-level reads, and list_tags — plus periodic-notes support that works with Obsidian closed.",
		],
		faq: [
			{
				q: "Why choose Seekstone over mcpvault if payloads are similar?",
				a: "Latency and tools. Both return ~2 KB excerpt payloads, but mcpvault re-scans the vault per query — 958 ms warm at 10,000 notes vs 6.2 ms from Seekstone's warm in-process index, a gap that widens with vault size. Seekstone also adds structured frontmatter queries, backlinks, outlines, and tag tools that mcpvault doesn't offer.",
			},
			{
				q: "Is mcpvault's approach ever preferable?",
				a: "If you query rarely and want zero resident memory, its stateless design is a fair trade — nothing stays warm between calls. Seekstone spends a few MB of RAM on its index to make every query millisecond-fast; mcpvault spends nothing and pays per query instead.",
			},
			{
				q: "Are these numbers reproducible?",
				a: "Yes — every figure comes from an open-source harness run against committed 1,000 / 5,000 / 10,000-note vaults generated from public-domain text, 20 runs per query, cold and warm reported separately. Clone the Seekstone repo and re-run it.",
			},
		],
	},
];
