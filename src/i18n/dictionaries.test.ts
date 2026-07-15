import { describe, expect, it } from "vitest";
import { getDictionary } from "./dictionaries";
import { locales } from "./config";

function keyPaths(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object") {
      return keyPaths(value as Record<string, unknown>, path);
    }
    return [path];
  });
}

describe("getDictionary", () => {
  it.each(locales)("'%s' の辞書を解決する", async (locale) => {
    const dict = await getDictionary(locale);
    expect(dict.meta.title.length).toBeGreaterThan(0);
  });

  it("ja と en は同一のキー構造を持ち、全値が非空文字列", async () => {
    const [ja, en] = await Promise.all([getDictionary("ja"), getDictionary("en")]);
    expect(keyPaths(en)).toEqual(keyPaths(ja));
    for (const dict of [ja, en]) {
      for (const path of keyPaths(dict)) {
        const value = path
          .split(".")
          .reduce<unknown>((acc, key) => (acc as Record<string, unknown>)[key], dict);
        expect(typeof value, path).toBe("string");
        expect((value as string).trim().length, path).toBeGreaterThan(0);
      }
    }
  });
});
