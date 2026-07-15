import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Pager } from "./pager";
import ja from "@/i18n/dictionaries/ja";
import type { LessonRef } from "@/engine/content";
import type { Track, Lesson } from "@/engine/content/types";

const track: Track = {
  id: "ai-basics",
  emoji: "🧭",
  title: { ja: "AIの基礎", en: "AI Basics" },
  summary: { ja: "s", en: "s" },
  lessons: [],
};

function makeLesson(id: string, slug: string): Lesson {
  return {
    id,
    slug,
    title: { ja: `レッスン${id}`, en: `Lesson ${id}` },
    summary: { ja: "s", en: "s" },
    body: { ja: "b", en: "b" },
    quiz: [],
    sources: [{ label: "x", url: "https://example.com" }],
    lastVerified: "2026-07-01",
  };
}

const prevRef: LessonRef = { track, lesson: makeLesson("01", "first") };
const nextRef: LessonRef = { track, lesson: makeLesson("02", "second") };

describe("Pager", () => {
  it("prev/next 両方あれば両方のリンクを描画する", () => {
    render(<Pager prev={prevRef} next={nextRef} locale="ja" dict={ja} />);
    const prevLink = screen.getByRole("link", { name: /レッスン01/ });
    const nextLink = screen.getByRole("link", { name: /レッスン02/ });
    expect(prevLink).toHaveAttribute("href", "/ja/learn/ai-basics/first");
    expect(nextLink).toHaveAttribute("href", "/ja/learn/ai-basics/second");
  });

  it("prevがnullなら次のみ描画する", () => {
    render(<Pager prev={null} next={nextRef} locale="ja" dict={ja} />);
    expect(screen.queryByRole("link", { name: /レッスン01/ })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /レッスン02/ })).toBeInTheDocument();
  });

  it("prev/next 両方nullなら何も描画しない", () => {
    const { container } = render(<Pager prev={null} next={null} locale="ja" dict={ja} />);
    expect(container).toBeEmptyDOMElement();
  });
});
