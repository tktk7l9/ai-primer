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
      include: ["src/engine/**/*.ts", "src/i18n/**/*.ts", "src/lib/**/*.ts"],
      exclude: ["src/**/*.test.{ts,tsx}"],
      reporter: ["text", "json-summary", "html"],
      // The pure logic layer (engine: content / quiz / progress / freshness / markdown,
      // i18n: config / dictionaries) stays at 100%.
      // The React component layer is tested but, as presentation, is outside the threshold gate
      // (state transitions in quiz-block etc. are tested individually, but 100% is not required).
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
      },
    },
  },
});
