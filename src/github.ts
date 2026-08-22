/**
 * GitHub star count, resolved at build time (same pattern as version.ts).
 * Returns undefined when the API is unreachable — the Nav then hides the
 * count rather than showing a stale or invented number.
 */
const REPO_API = "https://api.github.com/repos/shaqmughal/seekstone";

async function fetchStars(): Promise<string | undefined> {
	try {
		const res = await fetch(REPO_API, { signal: AbortSignal.timeout(5_000) });
		if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
		const { stargazers_count } = (await res.json()) as { stargazers_count?: unknown };
		if (typeof stargazers_count !== "number") throw new Error("unexpected payload");
		return stargazers_count >= 1000
			? `${(stargazers_count / 1000).toFixed(1)}k`
			: String(stargazers_count);
	} catch (err) {
		console.warn(
			`[github] star lookup failed (${err instanceof Error ? err.message : err}); hiding star count`,
		);
		return undefined;
	}
}

export const STARS = await fetchStars();
