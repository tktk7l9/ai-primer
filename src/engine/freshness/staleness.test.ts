import { describe, expect, it } from "vitest";
import {
  STALE_AFTER_DAYS,
  daysSince,
  formatVerified,
  isStale,
  parseISODate,
} from "./staleness";

const NOW = new Date(Date.UTC(2026, 6, 15)); // 2026-07-15

describe("parseISODate", () => {
  it("有効な日付をUTCでパースする", () => {
    expect(parseISODate("2026-07-15")?.toISOString()).toBe("2026-07-15T00:00:00.000Z");
  });
  it.each(["2026/07/15", "2026-7-15", "20260715", "", "yesterday"])(
    "形式違反 '%s' は null",
    (value) => {
      expect(parseISODate(value)).toBeNull();
    },
  );
  it("実在しない日付（2026-02-30）は null", () => {
    expect(parseISODate("2026-02-30")).toBeNull();
  });
});

describe("daysSince", () => {
  it("経過日数を返す", () => {
    expect(daysSince("2026-07-01", NOW)).toBe(14);
  });
  it("当日は 0", () => {
    expect(daysSince("2026-07-15", NOW)).toBe(0);
  });
  it("不正な日付は Infinity", () => {
    expect(daysSince("invalid", NOW)).toBe(Infinity);
  });
});

describe("isStale", () => {
  it("STALE_AFTER_DAYS は 90", () => {
    expect(STALE_AFTER_DAYS).toBe(90);
  });
  it("ちょうど90日は stale でない", () => {
    expect(isStale("2026-04-16", NOW)).toBe(false); // 90日前
  });
  it("91日で stale", () => {
    expect(isStale("2026-04-15", NOW)).toBe(true); // 91日前
  });
  it("閾値を差し替えられる", () => {
    expect(isStale("2026-07-01", NOW, 7)).toBe(true);
    expect(isStale("2026-07-01", NOW, 30)).toBe(false);
  });
  it("不正な日付は常に stale", () => {
    expect(isStale("", NOW)).toBe(true);
  });
});

describe("formatVerified", () => {
  it("ja は 年月 表記", () => {
    expect(formatVerified("2026-07-15", "ja")).toBe("2026年7月");
  });
  it("en は 月略称+年 表記", () => {
    expect(formatVerified("2026-12-01", "en")).toBe("Dec 2026");
  });
  it("不正な日付は原文を返す", () => {
    expect(formatVerified("unknown", "ja")).toBe("unknown");
  });
});
