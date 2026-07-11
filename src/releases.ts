/**
 * Seekstone release history, resolved at build time from the GitHub Releases
 * API (SHA-118). Same downstream-consumer model as src/version.ts: the
 * seekstone release workflow pings a Vercel deploy hook after each publish,
 * so the changelog re-fetches — and therefore auto-updates — shortly after
 * every release, with no manual step.
 *
 * A failed or rate-limited fetch degrades to an empty list, never a failed
 * build; the /changelog page renders a "view on GitHub" fallback for that
 * case. Unauthenticated GitHub API calls are limited to 60/hr per IP (shared
 * across Vercel builders), so an optional GITHUB_TOKEN env var is used when
 * present.
 */

export interface Release {
	/** Semver without the package prefix, e.g. "0.9.0". */
	version: string;
	/** Full tag, e.g. "seekstone@0.9.0". */
	tag: string;
	/** ISO publish timestamp. */
	publishedAt: string;
	/** Raw markdown body from the GitHub release (changesets output). */
	bodyMd: string;
	/** Link to the release on GitHub. */
	url: string;
}

const RELEASES_URL = "https://api.github.com/repos/shaqmughal/seekstone/releases?per_page=100";

interface GitHubRelease {
	tag_name?: unknown;
	published_at?: unknown;
	body?: unknown;
	html_url?: unknown;
	draft?: unknown;
	prerelease?: unknown;
}

async function fetchReleases(): Promise<Release[]> {
	try {
		const headers: Record<string, string> = {
			"User-Agent": "seekstone-site",
			Accept: "application/vnd.github+json",
		};
		const token = process.env.GITHUB_TOKEN;
		if (token) headers.Authorization = `Bearer ${token}`;

		const res = await fetch(RELEASES_URL, {
			headers,
			signal: AbortSignal.timeout(10_000),
		});
		if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
		const raw = (await res.json()) as GitHubRelease[];
		if (!Array.isArray(raw)) throw new Error("unexpected payload: not an array");

		const mapped = raw
			.filter(
				(r) =>
					r.draft !== true &&
					r.prerelease !== true &&
					typeof r.tag_name === "string" &&
					typeof r.published_at === "string" &&
					typeof r.html_url === "string",
			)
			.map((r) => {
				const tag = r.tag_name as string;
				return {
					tag,
					// "seekstone@0.9.0" → "0.9.0" (also covers the pre-rename
					// "obsidian-mcp-seekstone@x.y.z" tags and "vx.y.z"-style tags).
					version: tag.split("@").pop()?.replace(/^v/, "") ?? tag,
					publishedAt: r.published_at as string,
					bodyMd: typeof r.body === "string" ? r.body : "",
					url: r.html_url as string,
				};
			});

		// The package was renamed obsidian-mcp-seekstone → seekstone, and for a
		// stretch both names published the same version. Dedupe by version,
		// preferring the canonical seekstone@ tag; old-name-only releases
		// (e.g. 0.2.2) are kept so the history has no gaps.
		const byVersion = new Map<string, Release>();
		for (const rel of mapped) {
			const existing = byVersion.get(rel.version);
			if (!existing || (!existing.tag.startsWith("seekstone@") && rel.tag.startsWith("seekstone@"))) {
				byVersion.set(rel.version, rel);
			}
		}

		// Newest first. The API roughly orders by creation, but the
		// pre-rename releases prove that's not reliable.
		return [...byVersion.values()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
	} catch (err) {
		console.warn(
			`[releases] GitHub releases lookup failed (${err instanceof Error ? err.message : err}); /changelog will render the GitHub fallback link`,
		);
		return [];
	}
}

export const RELEASES = await fetchReleases();
