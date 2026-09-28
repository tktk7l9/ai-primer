import { describe, expect, it } from "vitest";
import { navSection } from "./nav";

describe("navSection", () => {
  it.each([
    ["/ja", "home"],
    ["/en/", "home"],
    ["/ja/learn/ai-basics", "home"],
    ["/ja/learn/ai-basics/what-is-ai", "home"],
    ["/en/models", "models"],
    ["/ja/timeline", "timeline"],
    ["/ja/glossary", "glossary"],
  ])("maps %s to %s", (path, section) => {
    expect(navSection(path)).toBe(section);
  });

  it.each(["/ja/unknown", "/", "", null, "/fr/models"])("returns null for %s", (path) => {
    expect(navSection(path)).toBeNull();
  });
});
