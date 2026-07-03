/**
 * Head-to-head comparison — the single source for the visible table
 * (Compare.astro). Mirrors the README's above-the-fold table in the main repo
 * 1:1 (shaqmughal/seekstone README.md, "Seekstone vs obsidian-mcp-server vs
 * REST-proxy servers") so GitHub and seekstone.dev never tell different
 * stories. Figures trace to the harness scaling report:
 * packages/harness/fixtures/baseline-reports/scaling/benchmark-scaling.md.
 * If a figure changes, update the README table and this file together.
 */
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
		seekstone: "2.0 KB",
		omcp: "47 KB",
		rest: "up to 95 MB",
	},
	{
		label: "Warm search latency @ 10k notes",
		seekstone: "6.2 ms",
		omcp: "732 ms (~118× slower)",
		rest: "up to 1,550 ms",
	},
];
