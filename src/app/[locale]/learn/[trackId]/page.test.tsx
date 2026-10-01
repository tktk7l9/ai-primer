import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { TRACKS } from "@/engine/content";
import { markComplete } from "@/engine/progress/progress";
import ja from "@/i18n/dictionaries/ja";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const { default: TrackPage, generateMetadata, generateStaticParams } = await import("./page");

const track = TRACKS[0];
const params = (locale: string, trackId: string) => ({ params: Promise.resolve({ locale, trackId }) });

beforeEach(() => window.localStorage.clear());

describe("TrackPage", () => {
  it("pre-renders every track in both languages", () => {
    expect(generateStaticParams()).toHaveLength(TRACKS.length * 2);
  });

  it("lists the track's lessons in order with numbered links", async () => {
    render(await TrackPage(params("ja", track.id)));
    expect(screen.getByRole("heading", { level: 1, name: track.title.ja })).toBeInTheDocument();
    const links = within(document.querySelector(".lesson-list") as HTMLElement).getAllByRole("link");
    expect(links).toHaveLength(track.lessons.length);
    expect(links[0]).toHaveTextContent(`01${track.lessons[0].title.ja}`);
    expect(links[0]).toHaveAttribute("href", `/ja/learn/${track.id}/${track.lessons[0].slug}`);
  });

  it("offers a breadcrumb back to the course", async () => {
    render(await TrackPage(params("ja", track.id)));
    const crumbs = screen.getByRole("navigation", { name: ja.nav.breadcrumb });
    expect(within(crumbs).getByRole("link", { name: ja.nav.home })).toHaveAttribute("href", "/ja");
  });

  it("shows which lessons are already completed", async () => {
    markComplete(window.localStorage, track.lessons[0].id);
    render(await TrackPage(params("ja", track.id)));
    const links = within(document.querySelector(".lesson-list") as HTMLElement).getAllByRole("link");
    expect(links[0]).toHaveTextContent(ja.lesson.completed);
    expect(links[1]).not.toHaveTextContent(ja.lesson.completed);
  });

  it("points at the first unfinished lesson as the next step (SHIG 20, 77)", async () => {
    markComplete(window.localStorage, track.lessons[0].id);
    markComplete(window.localStorage, track.lessons[1].id);
    render(await TrackPage(params("ja", track.id)));
    const links = within(document.querySelector(".lesson-list") as HTMLElement).getAllByRole("link");
    expect(links[2]).toHaveTextContent(ja.track.nextUp);
    expect(links.filter((a) => a.textContent?.includes(ja.track.nextUp))).toHaveLength(1);
  });

  it("does not mark a next step once the whole track is done", async () => {
    for (const lesson of track.lessons) markComplete(window.localStorage, lesson.id);
    render(await TrackPage(params("ja", track.id)));
    expect(screen.queryByText(ja.track.nextUp)).not.toBeInTheDocument();
  });

  it("shows an estimated time for every lesson (SHIG 32)", async () => {
    render(await TrackPage(params("en", track.id)));
    const links = within(document.querySelector(".lesson-list") as HTMLElement).getAllByRole("link");
    for (const link of links) expect(link).toHaveTextContent(/~\d+ min/);
  });

  it("rejects unknown tracks and locales with a 404", async () => {
    await expect(TrackPage(params("ja", "no-such-track"))).rejects.toThrow("NEXT_NOT_FOUND");
    await expect(TrackPage(params("de", track.id))).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("builds metadata only for real tracks", async () => {
    expect((await generateMetadata(params("en", track.id))).title).toBe(track.title.en);
    expect(await generateMetadata(params("en", "nope"))).toEqual({});
    expect(await generateMetadata(params("xx", track.id))).toEqual({});
  });
});
