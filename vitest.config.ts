import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: [
        "src/engine/**/*.ts",
        "src/i18n/**/*.ts",
        "src/lib/**/*.ts",
        "src/components/**/*.{ts,tsx}",
        "src/app/**/*.{ts,tsx}",
      ],
      // opengraph-image renders through next/og (Satori → PNG), which jsdom cannot exercise.
      exclude: ["src/**/*.test.{ts,tsx}", "src/app/opengraph-image.tsx"],
      reporter: ["text", "json-summary", "html"],
      // The pure logic layer (engine: content / quiz / progress / freshness / markdown,
      // i18n: config / dictionaries) stays at 100%.
      // The React UI layer (components + app routes) has its own floor, set 2 points below the
      // measured value so it catches untested UI without flaking. Tests there are behavioural:
      // render the page, act like a user, assert visible text / roles / state.
      thresholds: {
        "src/engine/**/*.ts": {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100,
        },
        "src/i18n/**/*.ts": {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100,
        },
        "src/{components,app}/**/*.{ts,tsx}": {
          statements: 95,
          branches: 94,
          functions: 96,
          lines: 97,
        },
      },
    },
  },
});
