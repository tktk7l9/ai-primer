import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, localeFromPath, locales } from "./config";

describe("i18n config", () => {
  it("has two locales, ja and en", () => {
    expect(locales).toEqual(["ja", "en"]);
  });

  it("defaults to the ja locale", () => {
    expect(defaultLocale).toBe("ja");
  });

  it.each(["ja", "en"])("isLocale('%s') is true", (value) => {
    expect(isLocale(value)).toBe(true);
  });

  it.each(["fr", "", "JA", "jp"])("isLocale('%s') is false", (value) => {
    expect(isLocale(value)).toBe(false);
  });
});

describe("localeFromPath", () => {
  it.each([
    ["/en", "en"],
    ["/en/learn/x/y", "en"],
    ["/ja/models", "ja"],
  ])("reads the locale segment of %s", (path, expected) => {
    expect(localeFromPath(path)).toBe(expected);
  });

  it.each(["/", "/fr/x", "/english", "", null])("falls back to the default for %s", (path) => {
    expect(localeFromPath(path)).toBe(defaultLocale);
  });
});
