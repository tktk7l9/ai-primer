import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GlossaryPage from "./page";
import { GLOSSARY } from "@/engine/content/glossary";

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
});
