import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every page is prerendered at build time (SSG); neither ISR nor on-demand revalidation is used.
//
// Without an incremental cache (the "dummy" default) OpenNext cannot read the prerendered
// output, so the Worker re-rendered every page on every request (`x-nextjs-cache: MISS`,
// roughly 25-50 ms CPU each). The burst of next/link prefetches a lesson page fires then ran
// past the Workers CPU limit and answered error 1102 (measured on 2026-10-11).
//
// The static assets cache serves the build output instead: `opennextjs-cloudflare deploy` /
// `preview` copy it under cdn-cgi/_next_cache/ (reachable only from the Worker). It is
// read-only, which fits a site with no revalidation. Cache interception answers cached routes
// in the routing layer, without loading the Next server or rendering React; the HTML still
// leaves through worker.ts, so each response gets its own nonce. It does not work with PPR.
// src/lib/open-next-config.test.ts keeps both settings.
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
