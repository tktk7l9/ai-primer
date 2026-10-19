// Classification of one source-link check for scripts/check-freshness.ts.
//
// A link is "alive" (2xx/3xx), "blocked" (the page most likely exists but cannot be verified from a script: the site
// turned the automated client away with 401/403/429 or a bot-protection 503, or its TLS certificate chain lacks the
// intermediate that browsers fetch themselves) or "dead" (404/410, other HTTP errors, DNS failures, connection errors,
// timeouts, bad certificates). Blocked links go into the report for information only: openai.com, britannica.com,
// midjourney.com and others challenge anything that does not look like a browser, and counting those as dead made
// every monthly report cry wolf (issue #18).

export type LinkVerdict = "alive" | "blocked" | "dead";

export interface LinkStatus {
  verdict: LinkVerdict;
  /** Short cause for the report, e.g. "HTTP 404", "HTTP 403 (bot challenge page)", "fetch failed: ENOTFOUND". */
  reason: string;
}

/** Statuses a site uses to turn away a client it does not trust, whether or not the page exists. */
const BLOCKED_STATUSES: ReadonlySet<number> = new Set([401, 403, 429]);

/** Text that bot-protection interstitials put in the page body. */
const CHALLENGE_MARKERS: readonly RegExp[] = [
  /Just a moment\.\.\./, // Cloudflare managed / JS challenge
  /cf-chl|challenge-platform/, // Cloudflare challenge scripts
  /Attention Required!/, // Cloudflare block page (error 1020)
  /Enable JavaScript and cookies to continue/, // Cloudflare
  /Verify you are human/i, // Cloudflare Turnstile, DataDome
  /Access Denied[\s\S]{0,400}Reference #/, // Akamai
  /_Incapsula_Resource|Incapsula incident ID/, // Imperva
  /Access to this page has been denied/, // PerimeterX / HUMAN
  /captcha/i, // CAPTCHA walls in general
];

/** How much of an error page is read for the challenge check; interstitials are a few kB. */
export const BODY_SAMPLE_CHARS = 16_384;

/** True when the response is a bot-protection challenge rather than the page itself. */
export function isChallengePage(headers: Headers, bodySample: string): boolean {
  // Cloudflare labels its challenges explicitly; the body of a managed challenge is otherwise generic.
  if (headers.get("cf-mitigated") === "challenge") return true;
  return CHALLENGE_MARKERS.some((marker) => marker.test(bodySample));
}

/** Classifies a response by its status; the headers and a body sample tell a challenge page from a real error. */
export function classifyResponse(status: number, headers: Headers, bodySample: string): LinkStatus {
  if (status < 400) return { verdict: "alive", reason: `HTTP ${status}` };
  const challenge = isChallengePage(headers, bodySample);
  // A challenge page can come with 503 as well (Cloudflare's older JS challenge and "under attack" mode).
  const blocked = BLOCKED_STATUSES.has(status) || (status === 503 && challenge);
  const reason = blocked && challenge ? `HTTP ${status} (bot challenge page)` : `HTTP ${status}`;
  return { verdict: blocked ? "blocked" : "dead", reason };
}

/** Reads at most `maxChars` of the body as text and releases the rest of the connection. */
export async function readBodySample(res: Response, maxChars: number = BODY_SAMPLE_CHARS): Promise<string> {
  if (res.body === null) return "";
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  try {
    while (text.length < maxChars) {
      const { done, value } = await reader.read();
      if (done) break;
      text += decoder.decode(value, { stream: true });
    }
  } catch {
    // A body that breaks off part-way is still usable as a sample.
  } finally {
    // Stops the download once the sample is enough; a no-op on a closed stream, rejects on a broken one.
    await reader.cancel().catch(() => undefined);
  }
  return text.slice(0, maxChars);
}

/**
 * Describes a failed fetch for the report. Node's fetch rejects with a bare "fetch failed" and keeps the useful part
 * (ENOTFOUND, ECONNREFUSED, CERT_HAS_EXPIRED...) in `cause`; a timeout rejects with a DOMException named TimeoutError.
 */
export function describeFetchError(error: unknown): string {
  if (!(error instanceof Error)) return String(error);
  if (error.name === "TimeoutError") return "timed out";
  const cause = error.cause;
  if (!(cause instanceof Error)) return error.message;
  const code = causeCode(error);
  return `${error.message}: ${code ?? cause.message}`;
}

/** The OS/TLS code (ECONNRESET, UNABLE_TO_VERIFY_LEAF_SIGNATURE...) Node keeps in the cause of "fetch failed". */
function causeCode(error: Error): string | undefined {
  const code = (error.cause as { code?: unknown } | undefined)?.code;
  return typeof code === "string" ? code : undefined;
}

/**
 * Failures that are often a passing hiccup of a slow or busy host rather than a dead page: a timeout, a reset or
 * dropped connection, a temporary DNS failure. One of these is worth one more try before the link is called dead.
 */
const TRANSIENT_CODES: ReadonlySet<string> = new Set([
  "ECONNRESET",
  "ETIMEDOUT",
  "EPIPE",
  "EAI_AGAIN",
  "UND_ERR_SOCKET",
  "UND_ERR_CONNECT_TIMEOUT",
]);

export function isTransientFetchError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  if (error.name === "TimeoutError") return true;
  const code = causeCode(error);
  return code !== undefined && TRANSIENT_CODES.has(code);
}

/**
 * The server sends its own certificate without the intermediate one. Browsers fetch the missing intermediate
 * themselves (from the certificate's AIA address) and open the page; Node does not, so the check cannot verify it.
 * An expired or mismatched certificate is a different code and stays dead.
 */
const INCOMPLETE_CHAIN_CODES: ReadonlySet<string> = new Set([
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
]);

/**
 * Classifies a fetch that threw: an incomplete certificate chain is "blocked" (the page most likely opens in a
 * browser, it just cannot be verified from here); anything else (DNS failure, refused connection, timeout, bad
 * certificate) is "dead".
 */
export function classifyFetchError(error: unknown): LinkStatus {
  const reason = describeFetchError(error);
  const code = error instanceof Error ? causeCode(error) : undefined;
  if (code !== undefined && INCOMPLETE_CHAIN_CODES.has(code)) {
    return { verdict: "blocked", reason: `${reason} (incomplete certificate chain; browsers complete it)` };
  }
  return { verdict: "dead", reason };
}
