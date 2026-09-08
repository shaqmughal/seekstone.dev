/**
 * Benchmark figures — the single source of truth for every number on the site
 * (SHA-327).
 *
 * `benchmarks.json` is a byte-identical vendored copy of the file the seekstone
 * repo generates from its committed harness baselines
 * (shaqmughal/seekstone: scripts/build-benchmarks-json.mjs). Never edit it by
 * hand. `npm run check:benchmarks` (GitHub Actions only — the Vercel build
 * never touches the network) diffs it against the canonical copy on `main`
 * and fails until it is re-synced:
 *
 *   curl -fsSL https://raw.githubusercontent.com/shaqmughal/seekstone/main/benchmarks.json \
 *     -o src/data/benchmarks.json
 *
 * Every figure in the JSON carries provenance (source report, snapshot date,
 * fixture generation, capture mode, commit). The helpers below reproduce the
 * README's formatting conventions so GitHub and seekstone.dev render the same
 * number the same way.
 *
 * Not covered by the JSON: public/og-image.svg (and the rendered og-image.png)
 * is hand-drawn and carries the context-tax multiplier — re-export it when
 * `headline.contextTax.display` changes.
 */
import bench from "./benchmarks.json";

export const BENCH = bench;
export const HEADLINE = bench.headline;
export const TOOLS = bench.tools;
export const GUARANTEES = bench.guarantees.count;
export const SCALING = bench.scaling;
export const RETRIEVAL = bench.retrieval.conditions;
export const RELEASE = bench.release;
export const QUERY_SET = bench.retrieval.querySet;
export const GATE_V2 = bench.retrieval.gateV2;

// ---------- formatting (README conventions) ----------
const KB = 1024;
const MB = KB * 1024;

/** Integer with thousands separators: 1,550. */
export const fmtInt = (v: number): string => Math.round(v).toLocaleString("en-US");
/** Latency: one decimal under 10 ms, otherwise an integer with separators. */
export const fmtMs = (v: number): string => (v < 10 ? v.toFixed(1) : fmtInt(v));
export const fmtMsUnit = (v: number): string => `${fmtMs(v)} ms`;
/** Payload cell: 1.6 KB / 47 KB / 9.8 MB / 95 MB (one decimal below 10 of the unit). */
export function fmtBytesShort(bytes: number): string {
	const [div, unit] = bytes >= MB ? [MB, "MB"] : [KB, "KB"];
	const v = bytes / div;
	return `${v < 10 ? v.toFixed(1) : Math.round(v)} ${unit}`;
}
/** Megabytes with one decimal: 370.9 MB. */
export const fmtMB1 = (bytes: number): string => `${(bytes / MB).toFixed(1)} MB`;
/** Whole kilobytes: 2, 16. */
export const fmtKB0 = (bytes: number): string => String(Math.round(bytes / KB));
/** Kilobytes with one decimal: 15.6 KB — for columns where neighbours would otherwise collide. */
export const fmtKB1 = (bytes: number): string => `${(bytes / KB).toFixed(1)} KB`;
/** Milliseconds with one decimal, always: 1.0, 15.4 — for ranges whose ends must match in precision. */
export const fmtMs1 = (v: number): string => v.toFixed(1);
/** 97.8 million. */
export const fmtMillions = (n: number): string => `${(n / 1e6).toFixed(1)} million`;
/** Seconds / minutes from milliseconds. */
export const fmtSec = (ms: number): string => `${Math.round(ms / 1000)} s`;
export const fmtSec1 = (ms: number): string => `${(ms / 1000).toFixed(1)} s`;
export const fmtMin = (ms: number): string => `${Math.round(ms / 60_000)} min`;
/** 47,000× / 514×. */
export const multiplier = (n: number): string => `${fmtInt(n)}×`;
/** Small counts as words: "ten guarantees". */
export function numberWord(n: number): string {
	const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
	return words[n] ?? String(n);
}

// ---------- scaling adapters ----------
export type AdapterKey = keyof typeof bench.scaling.adapters;
export type Adapter = (typeof bench.scaling.adapters)[AdapterKey];
export const adapter = (key: AdapterKey): Adapter => bench.scaling.adapters[key];
export const SEEKSTONE = adapter("seekstone");
export const REST = adapter("rest");
/** Index of the largest vault size (10k). */
export const BIG = bench.scaling.sizes.length - 1;
/** "1k" / "5k" / "10k". */
export const SIZE_LABELS = bench.scaling.sizes.map((n) => `${n / 1000}k`);

/** The benchmarked server set (Seekstone + every competitor; harness baselines excluded). */
export const SERVERS = (Object.entries(bench.scaling.adapters) as [AdapterKey, Adapter][]).filter(
	([, a]) => a.kind === "seekstone" || a.kind === "competitor",
);
export const COMPETITORS = SERVERS.filter(([, a]) => a.kind === "competitor");
export const COMPETITOR_COUNT = COMPETITORS.length;

export interface ScaleRow {
	key: AdapterKey;
	name: string;
	arch: string;
	raw: number[];
	vals: string[];
	you: boolean;
}

/** Rows for a 1k/5k/10k table, ascending by the 10k value (Seekstone first when it wins). */
export function scaleRows(metric: "warmMs" | "payloadBytes"): ScaleRow[] {
	const fmt = metric === "warmMs" ? fmtMsUnit : fmtBytesShort;
	return SERVERS.map(([key, a]) => ({
		key,
		name: a.label,
		arch: a.architecture,
		raw: a[metric],
		vals: a[metric].map(fmt),
		you: a.kind === "seekstone",
	})).sort((x, y) => x.raw[BIG] - y.raw[BIG]);
}

/** Warm latency at 10k for a subset of adapters, as a min–max range. */
export function latencyRange(keys: AdapterKey[]): { min: number; max: number } {
	const ms = keys.map((k) => adapter(k).warmMs[BIG]);
	return { min: Math.min(...ms), max: Math.max(...ms) };
}

/** A per-query figure at 10k from an adapter's committed queries. */
export function query10k(key: AdapterKey, query: string) {
	const q = adapter(key).queries10k.find((x) => x.query === query);
	if (!q) throw new Error(`benchmarks.json: adapter ${key} has no 10k query "${query}"`);
	return q;
}

// ---------- retrieval conditions ----------
export const RETRIEVAL_DEFAULT = RETRIEVAL["shipped-hybrid:potion-base-8M"];
export const RETRIEVAL_QUALITY = RETRIEVAL["shipped-hybrid:potion-retrieval-32M"];
export const RETRIEVAL_LEXICAL = RETRIEVAL.lexical;
export const RETRIEVAL_TC = RETRIEVAL["competitor:obsidian-tc"];
export const RETRIEVAL_TC_GRAPH = RETRIEVAL["competitor:obsidian-tc-graph"];
export const RETRIEVAL_MCP_PRO = RETRIEVAL["competitor:obsidian-mcp-pro"];
/** ISO date (YYYY-MM-DD) of the head-to-head retrieval run. */
export const RETRIEVAL_DATE = RETRIEVAL_TC.provenance.snapshotDate.slice(0, 10);
/** "~26" — the shipped semantic pipeline's warm p50 at 10k, as the headline quotes it. */
export const SEMANTIC_MS = HEADLINE.semanticWarmP50Ms10k.display;
