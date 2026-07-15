import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, locales } from "./config";

describe("i18n config", () => {
  it("ja と en の2ロケールを持つ", () => {
    expect(locales).toEqual(["ja", "en"]);
  });

  it("デフォルトロケールは ja", () => {
    expect(defaultLocale).toBe("ja");
  });

  it.each(["ja", "en"])("isLocale('%s') は true", (value) => {
    expect(isLocale(value)).toBe(true);
  });

  it.each(["fr", "", "JA", "jp"])("isLocale('%s') は false", (value) => {
    expect(isLocale(value)).toBe(false);
  });
});
