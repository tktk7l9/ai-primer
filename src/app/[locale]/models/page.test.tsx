import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MODELS } from "@/engine/content/models";
import ja from "@/i18n/dictionaries/ja";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const { default: ModelsPage, generateMetadata, generateStaticParams } = await import("./page");
const params = (locale: string) => ({ params: Promise.resolve({ locale }) });

describe("ModelsPage", () => {
  it("shows one card per model with its official site opening in a new tab", async () => {
    render(await ModelsPage(params("ja")));
    expect(screen.getByRole("heading", { level: 1, name: ja.models.title })).toBeInTheDocument();
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(MODELS.length);
    const card = within(cards[0]);
    expect(card.getByRole("heading", { level: 3, name: MODELS[0].name })).toBeInTheDocument();
    const link = card.getByRole("link", { name: new RegExp(ja.models.officialSite) });
    expect(link).toHaveAttribute("href", MODELS[0].officialUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("states free-tier availability in words, not only by colour", async () => {
    render(await ModelsPage(params("ja")));
    const free = MODELS.filter((m) => m.freeTier).length;
    expect(screen.queryAllByText(ja.models.freeTierYes)).toHaveLength(free);
    expect(screen.queryAllByText(ja.models.freeTierNo)).toHaveLength(MODELS.length - free);
  });

  it("groups the cards by kind under headings in the page language (SHIG 10, 17, 11)", async () => {
    render(await ModelsPage(params("ja")));
    const kinds = [...new Set(MODELS.map((m) => m.kind))];
    const headings = screen.getAllByRole("heading", { level: 2 }).map((h) => h.textContent);
    expect(headings).toEqual(kinds.map((k) => ja.models.kinds[k]));
    // Each group holds exactly the models of that kind, in data order.
    for (const kind of kinds) {
      const group = screen.getByRole("region", { name: ja.models.kinds[kind] });
      const names = within(group).getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
      expect(names).toEqual(MODELS.filter((m) => m.kind === kind).map((m) => m.name));
    }
    // No raw English kind ids leak onto the Japanese page.
    expect(screen.queryByText(/^(chat|coding|image|video|music)$/i)).not.toBeInTheDocument();
  });

  it("pre-renders both languages", () => {
    expect(generateStaticParams().map((p) => p.locale).sort()).toEqual(["en", "ja"]);
  });

  it("rejects unknown locales and builds metadata for known ones", async () => {
    await expect(ModelsPage(params("fr"))).rejects.toThrow("NEXT_NOT_FOUND");
    expect((await generateMetadata(params("ja"))).title).toBe(ja.models.title);
    expect(await generateMetadata(params("fr"))).toEqual({});
  });
});
