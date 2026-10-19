// @vitest-environment node
import { describe, expect, it } from "vitest";
import {
  BODY_SAMPLE_CHARS,
  classifyFetchError,
  classifyResponse,
  describeFetchError,
  isChallengePage,
  isTransientFetchError,
  readBodySample,
} from "./link-status";

/** The shape Node's fetch rejects with: a bare "fetch failed" whose cause carries the OS/TLS code. */
function fetchFailed(code: string): TypeError {
  return new TypeError("fetch failed", { cause: Object.assign(new Error(`connect failed (${code})`), { code }) });
}

const TIMEOUT = new DOMException("The operation was aborted due to timeout", "TimeoutError");

const NO_HEADERS = new Headers();
const CLOUDFLARE_CHALLENGE = new Headers({ "cf-mitigated": "challenge" });

describe("isChallengePage", () => {
  it("trusts Cloudflare's cf-mitigated header even with an empty body", () => {
    expect(isChallengePage(CLOUDFLARE_CHALLENGE, "")).toBe(true);
  });

  it.each([
    ["Cloudflare managed challenge", "<title>Just a moment...</title>"],
    ["Cloudflare challenge script", '<script src="/cdn-cgi/challenge-platform/h/b/orchestrate/jsch/v1"></script>'],
    ["Cloudflare block page", "<title>Attention Required! | Cloudflare</title>"],
    ["Cloudflare no-JS notice", "<p>Enable JavaScript and cookies to continue</p>"],
    ["Turnstile", "<h1>Verify you are human</h1>"],
    ["Akamai", "<h1>Access Denied</h1><p>You don't have permission to access this page.</p><p>Reference #18.abc</p>"],
    ["Imperva", '<iframe src="/_Incapsula_Resource?CWUDNSAI=9"></iframe>'],
    ["PerimeterX", "<title>Access to this page has been denied</title>"],
    ["CAPTCHA wall", "<div>Please complete the CAPTCHA to continue</div>"],
  ])("recognizes a %s page by its body", (_vendor, body) => {
    expect(isChallengePage(NO_HEADERS, body)).toBe(true);
  });

  it("does not mistake an ordinary error page for a challenge", () => {
    expect(isChallengePage(NO_HEADERS, "<title>404 Not Found</title><p>The page has moved.</p>")).toBe(false);
    expect(isChallengePage(new Headers({ "cf-mitigated": "none" }), "")).toBe(false);
  });
});

describe("classifyResponse", () => {
  it.each([200, 204, 301, 308])("treats HTTP %i as alive", (status) => {
    expect(classifyResponse(status, NO_HEADERS, "")).toEqual({ verdict: "alive", reason: `HTTP ${status}` });
  });

  it.each([401, 403, 429])("treats a plain HTTP %i as blocked, not dead", (status) => {
    expect(classifyResponse(status, NO_HEADERS, "")).toEqual({ verdict: "blocked", reason: `HTTP ${status}` });
  });

  it("names the challenge page when a 403 is one", () => {
    expect(classifyResponse(403, CLOUDFLARE_CHALLENGE, "")).toEqual({
      verdict: "blocked",
      reason: "HTTP 403 (bot challenge page)",
    });
  });

  it("treats a 503 as blocked only when it is a challenge page", () => {
    expect(classifyResponse(503, NO_HEADERS, "<title>Just a moment...</title>")).toEqual({
      verdict: "blocked",
      reason: "HTTP 503 (bot challenge page)",
    });
    expect(classifyResponse(503, NO_HEADERS, "<title>Service Unavailable</title>")).toEqual({
      verdict: "dead",
      reason: "HTTP 503",
    });
  });

  it.each([404, 410, 500, 502])("treats HTTP %i as possibly dead", (status) => {
    expect(classifyResponse(status, NO_HEADERS, "")).toEqual({ verdict: "dead", reason: `HTTP ${status}` });
  });

  it("does not let a challenge marker rescue a 404", () => {
    expect(classifyResponse(404, NO_HEADERS, "<p>Solve the captcha</p>")).toEqual({ verdict: "dead", reason: "HTTP 404" });
  });
});

describe("readBodySample", () => {
  const encoder = new TextEncoder();

  function chunked(chunks: readonly Uint8Array[], onCancel?: () => void): Response {
    let index = 0;
    const stream = new ReadableStream<Uint8Array>({
      pull(controller) {
        if (index < chunks.length) {
          controller.enqueue(chunks[index]);
          index += 1;
        } else {
          controller.close();
        }
      },
      cancel: onCancel,
    });
    return new Response(stream, { status: 403 });
  }

  it("returns an empty sample for a response without a body", async () => {
    await expect(readBodySample(new Response(null, { status: 403 }))).resolves.toBe("");
  });

  it("returns the whole body when it is shorter than the limit", async () => {
    await expect(readBodySample(new Response("<title>Just a moment...</title>"))).resolves.toBe(
      "<title>Just a moment...</title>",
    );
    expect(BODY_SAMPLE_CHARS).toBe(16_384);
  });

  it("stops reading at the limit and cancels the rest of the download", async () => {
    let cancelled = false;
    const chunk = encoder.encode("x".repeat(1_000));
    const res = chunked(Array.from({ length: 100 }, () => chunk), () => {
      cancelled = true;
    });
    const sample = await readBodySample(res, 2_500);
    expect(sample).toBe("x".repeat(2_500));
    expect(cancelled).toBe(true);
  });

  it("decodes multi-byte characters split across chunks", async () => {
    const bytes = encoder.encode("あいう");
    const res = chunked([bytes.slice(0, 4), bytes.slice(4)]);
    await expect(readBodySample(res)).resolves.toBe("あいう");
  });

  it("keeps what was read when the body breaks off", async () => {
    let pulls = 0;
    const stream = new ReadableStream<Uint8Array>({
      pull(controller) {
        pulls += 1;
        // The first pull delivers a chunk; the next one (after that chunk is consumed) breaks the stream.
        if (pulls === 1) controller.enqueue(encoder.encode("partial"));
        else controller.error(new Error("connection reset"));
      },
    });
    await expect(readBodySample(new Response(stream, { status: 503 }))).resolves.toBe("partial");
  });
});

describe("describeFetchError", () => {
  it("stringifies a non-Error value", () => {
    expect(describeFetchError("boom")).toBe("boom");
  });

  it("names a timeout", () => {
    expect(describeFetchError(new DOMException("The operation was aborted due to timeout", "TimeoutError"))).toBe(
      "timed out",
    );
  });

  it("surfaces the OS/TLS code hidden in the cause of 'fetch failed'", () => {
    const cause = Object.assign(new Error("getaddrinfo ENOTFOUND example.invalid"), { code: "ENOTFOUND" });
    expect(describeFetchError(new TypeError("fetch failed", { cause }))).toBe("fetch failed: ENOTFOUND");
  });

  it("falls back to the cause's message when it has no code", () => {
    expect(describeFetchError(new TypeError("fetch failed", { cause: new Error("bad port") }))).toBe(
      "fetch failed: bad port",
    );
  });

  it("uses the error's own message when there is no Error cause", () => {
    expect(describeFetchError(new TypeError("fetch failed", { cause: "unknown" }))).toBe("fetch failed");
    expect(describeFetchError(new Error("more than 10 redirects from https://a.example/"))).toBe(
      "more than 10 redirects from https://a.example/",
    );
  });
});

describe("isTransientFetchError", () => {
  it.each(["ECONNRESET", "ETIMEDOUT", "EPIPE", "EAI_AGAIN", "UND_ERR_SOCKET", "UND_ERR_CONNECT_TIMEOUT"])(
    "is worth a retry after %s",
    (code) => {
      expect(isTransientFetchError(fetchFailed(code))).toBe(true);
    },
  );

  it("is worth a retry after a timeout", () => {
    expect(isTransientFetchError(TIMEOUT)).toBe(true);
  });

  it.each(["ENOTFOUND", "ECONNREFUSED", "CERT_HAS_EXPIRED", "UNABLE_TO_VERIFY_LEAF_SIGNATURE"])(
    "does not retry %s, which a second try would not change",
    (code) => {
      expect(isTransientFetchError(fetchFailed(code))).toBe(false);
    },
  );

  it("does not retry an error without a code, or a non-Error value", () => {
    expect(isTransientFetchError(new TypeError("fetch failed", { cause: new Error("bad port") }))).toBe(false);
    expect(isTransientFetchError(new Error("more than 10 redirects from https://a.example/"))).toBe(false);
    expect(isTransientFetchError("boom")).toBe(false);
  });
});

describe("classifyFetchError", () => {
  it.each(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY"])(
    "treats %s (a certificate chain without its intermediate) as blocked, not dead",
    (code) => {
      expect(classifyFetchError(fetchFailed(code))).toEqual({
        verdict: "blocked",
        reason: `fetch failed: ${code} (incomplete certificate chain; browsers complete it)`,
      });
    },
  );

  it.each(["ENOTFOUND", "ECONNREFUSED", "CERT_HAS_EXPIRED", "ERR_TLS_CERT_ALTNAME_INVALID"])(
    "treats %s as possibly dead",
    (code) => {
      expect(classifyFetchError(fetchFailed(code))).toEqual({ verdict: "dead", reason: `fetch failed: ${code}` });
    },
  );

  it("treats a timeout, an error without a code and a non-Error value as possibly dead", () => {
    expect(classifyFetchError(TIMEOUT)).toEqual({ verdict: "dead", reason: "timed out" });
    expect(classifyFetchError(new Error("more than 10 redirects from https://a.example/"))).toEqual({
      verdict: "dead",
      reason: "more than 10 redirects from https://a.example/",
    });
    expect(classifyFetchError("boom")).toEqual({ verdict: "dead", reason: "boom" });
  });
});
