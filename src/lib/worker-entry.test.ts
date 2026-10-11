import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// The deployed entry is worker.ts, which wraps the OpenNext build output with
// wrapWithScriptNonce (src/lib/csp-nonce.ts, tested in csp-nonce.test.ts). The build output does
// not exist when the tests run, so the wiring is checked here by reading the files.
// Each of these can be undone without any visible breakage: the site keeps working and only the
// CSP quietly falls back to script-src 'unsafe-inline' (Observatory B).

describe("wrangler.jsonc", () => {
  it("points main at the nonce wrapper, not the raw OpenNext worker", () => {
    const config = readFileSync("wrangler.jsonc", "utf8");
    const main = config.match(/^\s*"main"\s*:\s*"([^"]*)"/m)?.[1];
    expect(main).toBe("worker.ts");
  });
});

describe("worker.ts", () => {
  const source = readFileSync("worker.ts", "utf8");

  it("imports the OpenNext worker that the build writes", () => {
    expect(source).toMatch(/^import openNextWorker from "\.\/\.open-next\/worker\.js";$/m);
  });

  it("exports that worker wrapped with the script nonce", () => {
    expect(source).toMatch(/^import \{ wrapWithScriptNonce \} from "\.\/src\/lib\/csp-nonce";$/m);
    expect(source).toMatch(/^export default wrapWithScriptNonce\(openNextWorker\);$/m);
  });
});

describe("public/", () => {
  it("holds no HTML, so every page is served by the Worker and gets the nonce", () => {
    // Workers Assets serves files in public/ before the Worker runs: an HTML file there would
    // skip the nonce (and the next.config.ts headers) entirely.
    const files = readdirSync("public", { recursive: true, encoding: "utf8" }).map((f) => join("public", f));
    expect(files.length).toBeGreaterThan(0);
    expect(files.filter((f) => /\.html?$/i.test(f))).toEqual([]);
  });
});
