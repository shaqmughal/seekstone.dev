/**
 * POST /api/subscribe — first-party proxy to Buttondown (SHA-167).
 *
 * The footer <SubscribeForm /> posts here instead of straight to Buttondown so
 * the API key never reaches the client, the form action stays on seekstone.dev
 * (no third-party iframe), and we can drop bot traffic with a honeypot before
 * spending an upstream call. Double opt-in itself is a Buttondown account
 * setting — when it's on, Buttondown sends the confirmation email; we just hand
 * it the address.
 *
 * This is the only non-static route on the site: prerender=false makes it a
 * Vercel serverless function while every page still builds to static HTML.
 */
import type { APIRoute } from "astro";

export const prerender = false;

const BUTTONDOWN_ENDPOINT = "https://api.buttondown.email/v1/subscribers";

// Pragmatic email shape check — the real validation is the confirmation email
// that Buttondown sends. We only reject the obviously-broken here.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: Record<string, unknown>, status: number): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "content-type": "application/json" },
	});
}

export const POST: APIRoute = async ({ request }) => {
	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, error: "Could not read the form." }, 400);
	}

	// Honeypot: a hidden field real users never see. Any value means a bot —
	// return a success shape so the bot can't tell it was dropped, and skip the
	// upstream call entirely.
	if (((form.get("company") as string) ?? "").trim() !== "") {
		return json({ ok: true }, 200);
	}

	const email = ((form.get("email") as string) ?? "").trim();
	if (!email || !EMAIL_RE.test(email)) {
		return json({ ok: false, error: "Enter a valid email address." }, 400);
	}

	const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
	if (!apiKey) {
		// Misconfiguration (missing env var), not user error. Don't leak which.
		console.error("[subscribe] BUTTONDOWN_API_KEY is not set");
		return json({ ok: false, error: "Subscriptions are temporarily unavailable." }, 503);
	}

	let upstream: Response;
	try {
		upstream = await fetch(BUTTONDOWN_ENDPOINT, {
			method: "POST",
			headers: {
				Authorization: `Token ${apiKey}`,
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email_address: email,
				tags: ["seekstone.dev"],
				referrer_url: "https://seekstone.dev/",
			}),
		});
	} catch (err) {
		console.error("[subscribe] upstream request failed", err);
		return json({ ok: false, error: "Something went wrong. Please try again." }, 502);
	}

	if (upstream.ok) {
		return json({ ok: true }, 200);
	}

	// Already-subscribed is a success from the visitor's point of view — don't
	// make them feel like they did something wrong. Buttondown signals it with a
	// 400 carrying code "email_already_exists". Parse defensively; never surface
	// the raw upstream body (it can echo internal detail).
	let alreadySubscribed = false;
	try {
		const data = (await upstream.json()) as { code?: string };
		alreadySubscribed = data?.code === "email_already_exists";
	} catch {
		// non-JSON upstream error — fall through to the generic message
	}

	if (alreadySubscribed) {
		return json({ ok: true, alreadySubscribed: true }, 200);
	}

	console.error(`[subscribe] upstream returned ${upstream.status}`);
	return json({ ok: false, error: "Something went wrong. Please try again." }, 502);
};
