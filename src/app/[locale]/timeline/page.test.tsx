import { describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { TIMELINE } from "@/engine/content/timeline";
import en from "@/i18n/dictionaries/en";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const { default: TimelinePage, generateMetadata, generateStaticParams } = await import("./page");
const params = (locale: string) => ({ params: Promise.resolve({ locale }) });

const byId = (id: string) => TIMELINE.find((e) => e.id === id)!;
const dayEvent = TIMELINE.find((e) => e.precision === "day")!;

async function itemFor(locale: "ja" | "en", id: string) {
  render(await TimelinePage(params(locale)));
  const heading = screen.getByRole("heading", { level: 2, name: byId(id).title[locale] });
  return within(heading.closest("li") as HTMLElement);
}

describe("TimelinePage", () => {
  it("lists events newest first", async () => {
    render(await TimelinePage(params("en")));
    const headings = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
    expect(headings[0]).toBe(TIMELINE[TIMELINE.length - 1].title.en);
    expect(headings.at(-1)).toBe(TIMELINE[0].title.en);
  });

  it("formats dates with the precision each event is known to", async () => {
    expect((await itemFor("ja", "1950-turing-test")).getByText("1950年")).toBeInTheDocument();
  });

  it("formats month-precision dates without inventing a day", async () => {
    expect((await itemFor("en", "1956-dartmouth")).getByText("Jun 1956")).toBeInTheDocument();
  });

  it("formats day-precision dates in each language", async () => {
    const [y, m, d] = dayEvent.date.split("-");
    expect((await itemFor("ja", dayEvent.id)).getByText(`${y}年${Number(m)}月${Number(d)}日`)).toBeInTheDocument();
    cleanup();
    expect((await itemFor("en", dayEvent.id)).getByText(dayEvent.date)).toBeInTheDocument();
  });

  it("shows year-only dates in English too", async () => {
    expect((await itemFor("en", "1950-turing-test")).getByText("1950")).toBeInTheDocument();
  });

  it("links each event to its sources", async () => {
    const item = await itemFor("en", "1956-dartmouth");
    const source = byId("1956-dartmouth").sources[0];
    expect(item.getByRole("link", { name: new RegExp(source.label) })).toHaveAttribute("href", source.url);
  });

  it("pre-renders both languages", () => {
    expect(generateStaticParams().map((p) => p.locale).sort()).toEqual(["en", "ja"]);
  });

  it("rejects unknown locales and builds metadata for known ones", async () => {
    await expect(TimelinePage(params("xx"))).rejects.toThrow("NEXT_NOT_FOUND");
    expect((await generateMetadata(params("en"))).title).toBe(en.timeline.title);
    expect(await generateMetadata(params("xx"))).toEqual({});
  });
});
