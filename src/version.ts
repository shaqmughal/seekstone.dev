/**
 * Published Seekstone version, resolved at build time from the npm registry
 * (SHA-165). The npm `latest` dist-tag of the `seekstone` package is the
 * source of truth; the site is a downstream consumer. The seekstone release
 * workflow pings a Vercel deploy hook after each publish, so a rebuild — and
 * therefore a re-fetch — happens shortly after every release.
 *
 * FALLBACK_VERSION is used only when the registry is unreachable or returns
 * something unexpected, so a registry blip can never fail the build. It may
 * lag behind `latest`; it is NOT the value to bump on release.
 */
const FALLBACK_VERSION = "0.7.2";

const REGISTRY_URL = "https://registry.npmjs.org/seekstone/latest";

async function fetchLatestVersion(): Promise<string> {
	try {
		const res = await fetch(REGISTRY_URL, {
			signal: AbortSignal.timeout(5_000),
		});
		if (!res.ok) throw new Error(`registry responded ${res.status}`);
		const { version } = (await res.json()) as { version?: unknown };
		if (typeof version !== "string" || !/^\d+\.\d+\.\d+/.test(version)) {
			throw new Error(`unexpected payload: ${JSON.stringify(version)}`);
		}
		return version;
	} catch (err) {
		console.warn(
			`[version] npm registry lookup failed (${err instanceof Error ? err.message : err}); falling back to ${FALLBACK_VERSION}`,
		);
		return FALLBACK_VERSION;
	}
}

export const VERSION = await fetchLatestVersion();
