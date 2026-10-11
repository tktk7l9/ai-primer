import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// open-next.config.ts decides whether the Worker serves the prerendered pages or re-renders
// them on every request. Reverting it keeps the site working (every page still answers 200),
// so nothing but this test notices that each request costs a full render again and that a
// burst of next/link prefetches runs into the Workers CPU limit (error 1102).
const source = readFileSync("open-next.config.ts", "utf8");

describe("open-next.config.ts", () => {
  it("reads prerendered pages from the static assets incremental cache", () => {
    expect(source).toMatch(
      /^import staticAssetsIncrementalCache from "@opennextjs\/cloudflare\/overrides\/incremental-cache\/static-assets-incremental-cache";$/m,
    );
    expect(source).toMatch(/^\s*incrementalCache: staticAssetsIncrementalCache,$/m);
  });

  it("answers cached routes before loading the Next server", () => {
    expect(source).toMatch(/^\s*enableCacheInterception: true,$/m);
  });
});
