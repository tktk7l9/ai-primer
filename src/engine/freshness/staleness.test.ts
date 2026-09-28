import { describe, expect, it } from "vitest";
import {
  daysSince,
  formatVerified,
  isStale,
  parseISODate,
} from "./staleness";

const NOW = new Date(Date.UTC(2026, 6, 15)); // 2026-07-15

describe("parseISODate", () => {
  it("parses a valid date as UTC", () => {
    expect(parseISODate("2026-07-15")?.toISOString()).toBe("2026-07-15T00:00:00.000Z");
  });
  it.each(["2026/07/15", "2026-7-15", "20260715", "", "yesterday"])(
    "returns null for malformed '%s'",
    (value) => {
      expect(parseISODate(value)).toBeNull();
    },
  );
  it("returns null for a nonexistent date (2026-02-30)", () => {
    expect(parseISODate("2026-02-30")).toBeNull();
  });
});

describe("daysSince", () => {
  it("returns the elapsed days", () => {
    expect(daysSince("2026-07-01", NOW)).toBe(14);
  });
  it("is 0 on the same day", () => {
    expect(daysSince("2026-07-15", NOW)).toBe(0);
  });
  it("is Infinity for an invalid date", () => {
    expect(daysSince("invalid", NOW)).toBe(Infinity);
  });
});

describe("isStale", () => {
  it("exactly 90 days is not stale", () => {
    expect(isStale("2026-04-16", NOW)).toBe(false); // 90 days ago
  });
  it("91 days is stale", () => {
    expect(isStale("2026-04-15", NOW)).toBe(true); // 91 days ago
  });
  it("accepts a custom threshold", () => {
    expect(isStale("2026-07-01", NOW, 7)).toBe(true);
    expect(isStale("2026-07-01", NOW, 30)).toBe(false);
  });
  it("an invalid date is always stale", () => {
    expect(isStale("", NOW)).toBe(true);
  });
});

describe("formatVerified", () => {
  it("ja uses the year-month form", () => {
    expect(formatVerified("2026-07-15", "ja")).toBe("2026年7月");
  });
  it("en uses the short month name + year form", () => {
    expect(formatVerified("2026-12-01", "en")).toBe("Dec 2026");
  });
  it("returns the raw input for an invalid date", () => {
    expect(formatVerified("unknown", "ja")).toBe("unknown");
  });
});
