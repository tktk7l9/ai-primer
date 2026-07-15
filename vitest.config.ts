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
      include: ["src/engine/**/*.ts", "src/i18n/**/*.ts"],
      exclude: ["src/**/*.test.{ts,tsx}"],
      reporter: ["text", "json-summary", "html"],
      // 純ロジック層（engine: content / quiz / progress / freshness / markdown、
      // i18n: config / dictionaries）は 100% を維持する。
      // React コンポーネント層はテスト対象だが presentation として閾値ゲート対象外
      // （quiz-block 等の状態遷移は個別にテストするが 100% までは求めない）。
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
