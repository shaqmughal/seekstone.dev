/**
 * Head-to-head comparison — the single source for the visible table
 * (Compare.astro). Mirrors the README's above-the-fold table in the main repo
 * 1:1 (shaqmughal/seekstone README.md, "Seekstone vs obsidian-mcp-server vs
 * REST-proxy servers") so GitHub and seekstone.dev never tell different
 * stories. Every figure is read from src/data/benchmarks.json — the same file
 * the README is checked against in the repo's CI (SHA-327).
 */
import { type AdapterKey, BIG, adapter, fmtBytesShort, fmtMsUnit, HEADLINE, SEEKSTONE } from "./benchmarks";

export interface CompareRow {
	label: string;
	seekstone: string;
	omcp: string;
	rest: string;
}

export const COMPARE_COLUMNS = {
	seekstone: "Seekstone",
	omcp: "obsidian-mcp-server",
	omcpNote: "#1 by downloads",
	rest: "REST-proxy servers",
} as const;

const omcp = adapter("obsidian-mcp-server");
// "up to …" = the worst REST-proxy *server* at 10k (the raw plugin baseline `rest` is not a server).
const proxies = HEADLINE.restProxyRange.adapters.filter((k) => k !== "rest").map((k) => adapter(k as AdapterKey));
const maxBy = (f: (a: ReturnType<typeof adapter>) => number) => Math.max(...proxies.map(f));
const worstProxy = { payloadBytes10k: maxBy((a) => a.payloadBytes[BIG]), warmMs10k: maxBy((a) => a.warmMs[BIG]) };

export const COMPARE_ROWS: CompareRow[] = [
	{
		label: "Local REST API plugin",
		seekstone: "Not needed",
		omcp: "Required",
		rest: "Required",
	},
	{
		label: "Obsidian app running",
		seekstone: "Not needed — works with Obsidian closed",
		omcp: "Required",
		rest: "Required",
	},
	{
		label: "Search payload @ 10k notes",
		seekstone: fmtBytesShort(SEEKSTONE.payloadBytes[BIG]),
		omcp: fmtBytesShort(omcp.payloadBytes[BIG]),
		rest: `up to ${fmtBytesShort(worstProxy.payloadBytes10k)}`,
	},
	{
		label: "Warm search latency @ 10k notes",
		seekstone: fmtMsUnit(SEEKSTONE.warmMs[BIG]),
		omcp: `${fmtMsUnit(omcp.warmMs[BIG])} (~${omcp.vsSeekstone10k?.display}× slower)`,
		rest: `up to ${fmtMsUnit(worstProxy.warmMs10k)}`,
	},
	{
		label: "Structured frontmatter queries",
		seekstone: "Built-in (query_notes) — property/date/size predicates, ~350 B answers",
		omcp: "JSONLogic via REST",
		rest: "Varies",
	},
];
