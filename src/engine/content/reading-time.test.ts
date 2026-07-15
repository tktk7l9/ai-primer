import { describe, expect, it } from "vitest";
import { estimateLessonMinutes, estimateTrackMinutes, formatMinutes } from "./reading-time";
import type { Lesson, Track } from "./types";

function makeLesson(overrides: Partial<Lesson> = {}): Lesson {
  return {
    id: "t-01",
    slug: "x",
    title: { ja: "x", en: "x" },
    summary: { ja: "x", en: "x" },
    body: { ja: "あ".repeat(500), en: "word ".repeat(220) },
    quiz: [],
    sources: [{ label: "s", url: "https://example.com" }],
    lastVerified: "2026-07-15",
    ...overrides,
  };
}

describe("estimateLessonMinutes", () => {
  it("ja: 500文字ちょうどで約1分", () => {
    expect(estimateLessonMinutes(makeLesson(), "ja")).toBeCloseTo(1, 5);
  });

  it("en: 220語ちょうどで約1分", () => {
    expect(estimateLessonMinutes(makeLesson(), "en")).toBeCloseTo(1, 5);
  });

  it("本文が長いほど時間が増える", () => {
    const short = makeLesson({ body: { ja: "あ".repeat(100), en: "w ".repeat(50) } });
    const long = makeLesson({ body: { ja: "あ".repeat(1000), en: "w ".repeat(500) } });
    expect(estimateLessonMinutes(long, "ja")).toBeGreaterThan(estimateLessonMinutes(short, "ja"));
    expect(estimateLessonMinutes(long, "en")).toBeGreaterThan(estimateLessonMinutes(short, "en"));
  });

  it("クイズの設問数が多いほど時間が増える", () => {
    const bare = makeLesson();
    const withQuiz = makeLesson({
      quiz: [
        { kind: "boolean", prompt: { ja: "q", en: "q" }, answer: true, explanation: { ja: "e", en: "e" } },
        { kind: "boolean", prompt: { ja: "q", en: "q" }, answer: true, explanation: { ja: "e", en: "e" } },
      ],
    });
    expect(estimateLessonMinutes(withQuiz, "ja")).toBeGreaterThan(estimateLessonMinutes(bare, "ja"));
  });
});

describe("estimateTrackMinutes", () => {
  it("トラック内の全レッスンの合計になる", () => {
    const track: Track = {
      id: "ai-basics",
      emoji: "x",
      title: { ja: "x", en: "x" },
      summary: { ja: "x", en: "x" },
      lessons: [makeLesson(), makeLesson()],
    };
    expect(estimateTrackMinutes(track, "ja")).toBeCloseTo(2, 5);
  });

  it("レッスンが0件なら0分", () => {
    const track: Track = {
      id: "ai-basics",
      emoji: "x",
      title: { ja: "x", en: "x" },
      summary: { ja: "x", en: "x" },
      lessons: [],
    };
    expect(estimateTrackMinutes(track, "ja")).toBe(0);
  });
});

describe("formatMinutes", () => {
  it("ja: 「約N分」形式で四捨五入する", () => {
    expect(formatMinutes(4.4, "ja")).toBe("約4分");
    expect(formatMinutes(4.6, "ja")).toBe("約5分");
  });

  it("en: 「~N min」形式で四捨五入する", () => {
    expect(formatMinutes(4.4, "en")).toBe("~4 min");
    expect(formatMinutes(4.6, "en")).toBe("~5 min");
  });

  it("1分未満は最低1分に切り上げる", () => {
    expect(formatMinutes(0.2, "ja")).toBe("約1分");
    expect(formatMinutes(0, "en")).toBe("~1 min");
  });
});
