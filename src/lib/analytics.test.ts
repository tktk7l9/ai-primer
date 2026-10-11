import { describe, expect, it } from "vitest";
import { BEACON_SRC, BEACON_TOKEN } from "./analytics";
import { contentSecurityPolicy } from "./csp";
import { withScriptNonce } from "./csp-nonce";

describe("analytics beacon", () => {
  const origin = new URL(BEACON_SRC).origin;

  it("loads from an origin the CSP allows in script-src", () => {
    expect(contentSecurityPolicy()).toMatch(new RegExp(`script-src [^;]*${origin}[ ;]`));
  });

  it("stays allowed after the Worker swaps 'unsafe-inline' for a nonce", () => {
    // The beacon is appended at runtime without a nonce, so the host source must survive.
    expect(withScriptNonce(contentSecurityPolicy(), "n")).toMatch(new RegExp(`script-src [^;]*${origin}[ ;]`));
  });

  it("has a 32-digit hex site token", () => {
    expect(BEACON_TOKEN).toMatch(/^[0-9a-f]{32}$/);
  });
});
