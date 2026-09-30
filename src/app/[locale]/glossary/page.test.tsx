import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { GLOSSARY } from "@/engine/content/glossary";
import ja from "@/i18n/dictionaries/ja";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const { default: GlossaryPage, generateMetadata, generateStaticParams } = await import("./page");

async function renderPage(locale: string) {
  const ui = await GlossaryPage({ params: Promise.resolve({ locale }) });
  return render(ui);
}

describe("GlossaryPage", () => {
  it("keeps only dt/dd inside each dl group (axe definition-list)", async () => {
    const { container } = await renderPage("ja");
    const dl = container.querySelector("dl.glossary-list");
    expect(dl).not.toBeNull();
    const groups = Array.from(dl!.children);
    expect(groups).toHaveLength(GLOSSARY.length);
    for (const group of groups) {
      expect(group.tagName).toBe("DIV");
      const tags = Array.from(group.children).map((c) => c.tagName);
      expect(tags[0]).toBe("DT");
      expect(tags.slice(1).every((t) => t === "DD")).toBe(true);
    }
  });

  it("puts related lesson links in a dd", async () => {
    const { container } = await renderPage("en");
    const withRelated = GLOSSARY.filter((g) => g.relatedLessonIds.length > 0).length;
    const related = container.querySelectorAll(".glossary-related");
    expect(related).toHaveLength(withRelated);
    for (const dd of related) {
      expect(dd.tagName).toBe("DD");
      expect(dd.querySelector("a[href^='/en/learn/']")).not.toBeNull();
    }
  });

  it("sorts terms in the reading order of the page language", async () => {
    await renderPage("en");
    const terms = screen.getAllByRole("term").map((dt) => dt.textContent!);
    expect(terms).toEqual([...terms].sort((a, b) => a.localeCompare(b, "en")));
    expect(terms).toHaveLength(GLOSSARY.length);
  });

  it("pre-renders both languages", () => {
    expect(generateStaticParams().map((p) => p.locale).sort()).toEqual(["en", "ja"]);
  });

  it("rejects unknown locales and builds metadata for known ones", async () => {
    await expect(GlossaryPage({ params: Promise.resolve({ locale: "fr" }) })).rejects.toThrow(
      "NEXT_NOT_FOUND",
    );
    const meta = await generateMetadata({ params: Promise.resolve({ locale: "ja" }) });
    expect(meta.title).toBe(ja.glossary.title);
    expect(await generateMetadata({ params: Promise.resolve({ locale: "fr" }) })).toEqual({});
  });
});
