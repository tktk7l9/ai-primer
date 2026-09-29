import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ALL_LESSONS, TRACKS } from "@/engine/content";
import { markComplete } from "@/engine/progress/progress";
import { NEWS_APP_URL } from "@/engine/site";
import ja from "@/i18n/dictionaries/ja";
import en from "@/i18n/dictionaries/en";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const { default: HomePage, generateStaticParams } = await import("./page");
const params = (locale: string) => ({ params: Promise.resolve({ locale }) });

beforeEach(() => window.localStorage.clear());

describe("HomePage", () => {
  it("pre-renders both languages", () => {
    expect(generateStaticParams()).toEqual([{ locale: "ja" }, { locale: "en" }]);
  });

  it("invites a first-time visitor to start the first track", async () => {
    render(await HomePage(params("ja")));
    expect(screen.getByRole("heading", { level: 1, name: ja.home.heroTitle })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: ja.home.startLearning })).toHaveAttribute(
      "href",
      `/ja/learn/${TRACKS[0].id}`,
    );
    expect(screen.getByRole("progressbar", { name: ja.home.overallProgress })).toHaveAttribute(
      "aria-valuenow",
      "0",
    );
  });

  it("takes a returning learner straight to the next unfinished lesson", async () => {
    markComplete(window.localStorage, ALL_LESSONS[0].lesson.id);
    render(await HomePage(params("en")));
    const next = ALL_LESSONS[1];
    expect(screen.getByRole("link", { name: en.home.resumeLearning })).toHaveAttribute(
      "href",
      `/en/learn/${next.track.id}/${next.lesson.slug}`,
    );
    expect(screen.getByText(`${en.home.upNext} ${next.lesson.title.en}`)).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: en.home.overallProgress })).toHaveAttribute(
      "aria-valuenow",
      "1",
    );
  });

  it("shows one card per track and links to the sister news app", async () => {
    render(await HomePage(params("en")));
    for (const track of TRACKS) {
      expect(screen.getByRole("heading", { level: 2, name: new RegExp(track.title.en) })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: new RegExp(en.home.newsBanner) })).toHaveAttribute(
      "href",
      NEWS_APP_URL,
    );
  });

  it("rejects unknown locales with a 404", async () => {
    await expect(HomePage(params("fr"))).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
