#!/usr/bin/env node
/**
 * Staleness guard for src/data/benchmarks.json (SHA-327).
 *
 * The site vendors a copy of the seekstone repo's generated benchmarks.json —
 * the single source of truth for every published benchmark number. This
 * script fetches the canonical copy from the repo's `main` branch and fails
 * when the vendored file differs, so a re-baseline upstream fails this repo's
 * CI until someone re-syncs the copy (instead of waiting for a human sweep).
 *
 * Runs from GitHub Actions only. It is deliberately NOT part of `npm run
 * build`: the Vercel build must never depend on the network (see
 * src/version.ts for the same rule).
 *
 * Usage:
 *   node scripts/check-benchmarks-sync.mjs               # fetch from GitHub
 *   node scripts/check-benchmarks-sync.mjs --local PATH  # compare against a local file (drills)
 *   SEEKSTONE_BENCHMARKS_URL=…                           # override the canonical URL
 */
import { readFileSync } from "node:fs";

const SOURCE =
	process.env.SEEKSTONE_BENCHMARKS_URL ??
	"https://raw.githubusercontent.com/shaqmughal/seekstone/main/benchmarks.json";
const VENDORED = new URL("../src/data/benchmarks.json", import.meta.url);

const args = process.argv.slice(2);
const localIdx = args.indexOf("--local");

const vendored = readFileSync(VENDORED, "utf8");
let canonical;
if (localIdx !== -1) {
	const path = args[localIdx + 1];
	if (!path) {
		console.error("--local needs a path to a benchmarks.json");
		process.exit(2);
	}
	canonical = readFileSync(path, "utf8");
} else {
	const res = await fetch(SOURCE, { signal: AbortSignal.timeout(10_000) });
	if (!res.ok) {
		console.error(`could not fetch canonical benchmarks.json: ${SOURCE} responded ${res.status}`);
		process.exit(2);
	}
	canonical = await res.text();
}

const a = JSON.parse(vendored);
const b = JSON.parse(canonical);
if (JSON.stringify(a) === JSON.stringify(b)) {
	console.log(
		`src/data/benchmarks.json is in sync with the canonical copy (fixture v${a.fixture.version}, release ${a.release.version}).`,
	);
	process.exit(0);
}

const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
const differing = [...keys].filter((k) => JSON.stringify(a[k]) !== JSON.stringify(b[k]));
console.error(
	`src/data/benchmarks.json is out of sync with the canonical seekstone benchmarks.json.\n` +
		`  differing sections: ${differing.join(", ")}\n` +
		`  vendored: fixture v${a.fixture?.version} · release ${a.release?.version}\n` +
		`  canonical: fixture v${b.fixture?.version} · release ${b.release?.version}\n` +
		`Re-sync, then rebuild and review the rendered numbers:\n` +
		`  curl -fsSL ${SOURCE} -o src/data/benchmarks.json`,
);
process.exit(1);
