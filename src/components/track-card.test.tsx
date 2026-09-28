import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { TrackCard } from "./track-card";
import ja from "@/i18n/dictionaries/ja";
import type { Track } from "@/engine/content/types";

beforeEach(() => {
  window.localStorage.clear();
  cleanup();
});

const track: Track = {
  id: "ai-basics",
  emoji: "🧭",
  title: { ja: "AIの基礎", en: "AI Basics" },
  summary: { ja: "基礎の説明", en: "Basics summary" },
  lessons: [
    {
      id: "ai-basics-01",
      slug: "a",
      title: { ja: "a", en: "a" },
      summary: { ja: "a", en: "a" },
      body: { ja: "a", en: "a" },
      quiz: [],
      sources: [{ label: "x", url: "https://example.com" }],
      lastVerified: "2026-07-01",
    },
    {
      id: "ai-basics-02",
      slug: "b",
      title: { ja: "b", en: "b" },
      summary: { ja: "b", en: "b" },
      body: { ja: "b", en: "b" },
      quiz: [],
      sources: [{ label: "x", url: "https://example.com" }],
      lastVerified: "2026-07-01",
    },
  ],
};

describe("TrackCard", () => {
  it("shows track number, title, lesson count and progress with the right link", () => {
    render(<TrackCard track={track} index={0} locale="ja" dict={ja} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/ja/learn/ai-basics");
    expect(screen.getByText(/Track 01/)).toBeInTheDocument();
    expect(screen.getByText("AIの基礎")).toBeInTheDocument();
    expect(screen.getByText("基礎の説明")).toBeInTheDocument();
    expect(screen.getByText("0/2")).toBeInTheDocument();
  });

  it("changes the zero-padded Track number with index", () => {
    render(<TrackCard track={track} index={7} locale="ja" dict={ja} />);
    expect(screen.getByText(/Track 08/)).toBeInTheDocument();
  });

  it("shows the estimated time (約N分)", () => {
    render(<TrackCard track={track} index={0} locale="ja" dict={ja} />);
    expect(screen.getByText(/約\d+分/)).toBeInTheDocument();
  });

  it("shows ~N min in the English locale", () => {
    render(<TrackCard track={track} index={0} locale="en" dict={ja} />);
    expect(screen.getByText(/~\d+ min/)).toBeInTheDocument();
  });
});
