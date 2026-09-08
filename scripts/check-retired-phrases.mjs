#!/usr/bin/env node
/**
 * Retired-claims guard (SHA-327) — the site's copy of check 2 in the seekstone
 * repo's scripts/check-docs-sync.mjs.
 *
 * Structured figures on the site come from src/data/benchmarks.json and cannot
 * drift. Prose can: a retired number typed into a sentence would otherwise
 * ship silently. This walks every source file and fails on any phrase the
 * messaging doc has retired. Keep the list in step with the repo's — when a
 * baseline is superseded, its headline figures get added on both sides.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const RETIRED = [
	// pre-SHA-236 / SHA-276 claims
	/575\s*[×x]/,
	/1\.75\s*MB/,
	/459,?000/,
	/~?800×/,
	// SHA-316: pre-MaxSim comparison numbers
	/vs our 76%/,
	/171\s*ms vs 14\s*ms/,
	/26\.5[- ]minute/,
	// SHA-327: the fixture-v1 canon, retired by the fixture-v2 re-baseline
	// (SHA-322): the old 6.2 ms / 440× / ~14 ms headline, the v1 retrieval
	// figures, and the "beats tc's plain semantic on holdout" claim v2 overturned.
	/6\.2\s*ms/,
	/~?440×/,
	/~?118×/,
	/\b2,?714\b/,
	/\b1,?302\b/,
	/\b958\s*ms/,
	/~14\s*ms/,
	/~6× slower/,
	/~?90–250×/,
	/70–250×/,
	/91\.7% (on the )?held-out/,
	/vs our 91\.7%/,
	/84\.0% overall/,
	/85\.0% (held|hold)/,
	/\b84\.0%/,
	/\b88\.7%/,
	/222\s*ms/,
	/833\s*ms/,
	/36[- ]min/,
	/~23 min/,
	/88% of the time/,
	/beats\s+obsidian-tc'?s plain/,
	/"19 tools"|\b19 tools\b/,
	/eight (named |tested )?guarantees/,
];

const INCLUDE = /\.(astro|ts|mjs|md|svg)$/;
const SKIP_DIRS = new Set(["node_modules", "dist", ".vercel", ".astro", ".git"]);
const SKIP_FILES = new Set(["scripts/check-retired-phrases.mjs", "src/data/benchmarks.json"]);

const files = [];
const walk = (dir) => {
	for (const entry of readdirSync(dir)) {
		const p = join(dir, entry);
		const rel = relative(root, p);
		if (statSync(p).isDirectory()) {
			if (!SKIP_DIRS.has(entry)) walk(p);
		} else if (INCLUDE.test(entry) && !SKIP_FILES.has(rel)) {
			files.push(rel);
		}
	}
};
walk(join(root, "src"));
walk(join(root, "public"));
walk(join(root, "scripts"));
for (const f of ["README.md"]) files.push(f);

const errors = [];
for (const file of files) {
	const text = readFileSync(join(root, file), "utf8");
	for (const re of RETIRED) {
		const m = text.match(re);
		if (m) {
			const line = text.slice(0, m.index).split("\n").length;
			errors.push(`${file}:${line} contains retired claim "${m[0]}" — see the messaging doc`);
		}
	}
}

if (errors.length > 0) {
	console.error(`retired-phrases guard: ${errors.length} problem(s)\n`);
	for (const e of errors) console.error(`  ✗ ${e}`);
	process.exit(1);
}
console.log(`retired-phrases guard: ${files.length} files clean (${RETIRED.length} retired phrases)`);
