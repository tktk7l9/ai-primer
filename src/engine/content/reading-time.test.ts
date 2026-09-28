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
  it("ja: exactly 500 characters is about 1 minute", () => {
    expect(estimateLessonMinutes(makeLesson(), "ja")).toBeCloseTo(1, 5);
  });

  it("en: exactly 220 words is about 1 minute", () => {
    expect(estimateLessonMinutes(makeLesson(), "en")).toBeCloseTo(1, 5);
  });

  it("takes longer for a longer body", () => {
    const short = makeLesson({ body: { ja: "あ".repeat(100), en: "w ".repeat(50) } });
    const long = makeLesson({ body: { ja: "あ".repeat(1000), en: "w ".repeat(500) } });
    expect(estimateLessonMinutes(long, "ja")).toBeGreaterThan(estimateLessonMinutes(short, "ja"));
    expect(estimateLessonMinutes(long, "en")).toBeGreaterThan(estimateLessonMinutes(short, "en"));
  });

  it("takes longer for more quiz questions", () => {
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
  it("is the sum of every lesson in the track", () => {
    const track: Track = {
      id: "ai-basics",
      emoji: "x",
      title: { ja: "x", en: "x" },
      summary: { ja: "x", en: "x" },
      lessons: [makeLesson(), makeLesson()],
    };
    expect(estimateTrackMinutes(track, "ja")).toBeCloseTo(2, 5);
  });

  it("is 0 minutes with no lessons", () => {
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
  it("ja: rounds in the \"約N分\" form", () => {
    expect(formatMinutes(4.4, "ja")).toBe("約4分");
    expect(formatMinutes(4.6, "ja")).toBe("約5分");
  });

  it("en: rounds in the \"~N min\" form", () => {
    expect(formatMinutes(4.4, "en")).toBe("~4 min");
    expect(formatMinutes(4.6, "en")).toBe("~5 min");
  });

  it("rounds anything under 1 minute up to 1 minute", () => {
    expect(formatMinutes(0.2, "ja")).toBe("約1分");
    expect(formatMinutes(0, "en")).toBe("~1 min");
  });
});
