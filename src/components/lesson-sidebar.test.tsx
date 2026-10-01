import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LessonSidebar } from "./lesson-sidebar";
import { markComplete } from "@/engine/progress/progress";
import type { Track } from "@/engine/content/types";

const track: Track = {
  id: "ai-basics",
  emoji: "🧪",
  title: { ja: "デモのトラック", en: "Demo track" },
  summary: { ja: "s", en: "s" },
  lessons: ["one", "two", "three"].map((slug, i) => ({
    id: `demo-${slug}`,
    slug,
    title: { ja: `デモ${i + 1}`, en: `Demo ${i + 1}` },
    summary: { ja: "s", en: "s" },
    body: { ja: "b", en: "b" },
    quiz: [],
    sources: [{ label: "x", url: "https://example.com" }],
    lastVerified: "2026-07-01",
  })),
};

beforeEach(() => window.localStorage.clear());

function renderSidebar(locale: "ja" | "en" = "ja") {
  return render(
    <LessonSidebar
      track={track}
      locale={locale}
      currentLessonId="demo-two"
      doneLabel="完了"
      outlineLabel="このトラックの目次"
      summaryLabel="目次"
    />,
  );
}

describe("LessonSidebar", () => {
  it("lists every lesson of the track with a link to it, labelled in the page language", () => {
    renderSidebar();
    const [outline] = screen.getAllByRole("navigation", { name: "このトラックの目次" });
    const links = within(outline).getAllByRole("link");
    expect(links.map((a) => a.textContent)).toEqual(["デモ1", "デモ2", "デモ3"]);
    expect(links[0]).toHaveAttribute("href", "/ja/learn/ai-basics/one");
  });

  it("marks only the current lesson with aria-current", () => {
    renderSidebar();
    const [outline] = screen.getAllByRole("navigation", { name: "このトラックの目次" });
    const current = within(outline)
      .getAllByRole("link")
      .filter((a) => a.getAttribute("aria-current") === "page");
    expect(current.map((a) => a.textContent)).toEqual(["デモ2"]);
  });

  it("announces completed lessons as text, not only as a tick", () => {
    markComplete(window.localStorage, "demo-one");
    renderSidebar();
    const [outline] = screen.getAllByRole("navigation", { name: "このトラックの目次" });
    expect(within(outline).getByRole("link", { name: /デモ1/ })).toHaveTextContent("完了");
    expect(within(outline).getByRole("link", { name: /デモ3/ })).not.toHaveTextContent("完了");
  });

  it("offers a collapsible outline for small screens that opens on tap", async () => {
    const user = userEvent.setup();
    const { container } = renderSidebar("en");
    const details = container.querySelector("details")!;
    expect(details).not.toHaveAttribute("open");
    // The summary says what opens and where the learner is (SHIG 4, 59), not only the track title.
    await user.click(screen.getByText("目次 · 2 / 3", { selector: "summary" }));
    expect(details).toHaveAttribute("open");
    expect(within(details).getByText("Demo track")).toBeInTheDocument();
    expect(within(details).getByRole("link", { name: "Demo 1" })).toHaveAttribute(
      "href",
      "/en/learn/ai-basics/one",
    );
  });
});
