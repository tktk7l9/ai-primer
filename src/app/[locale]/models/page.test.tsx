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
    expect(card.getByRole("heading", { level: 2, name: MODELS[0].name })).toBeInTheDocument();
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

  it("pre-renders both languages", () => {
    expect(generateStaticParams().map((p) => p.locale).sort()).toEqual(["en", "ja"]);
  });

  it("rejects unknown locales and builds metadata for known ones", async () => {
    await expect(ModelsPage(params("fr"))).rejects.toThrow("NEXT_NOT_FOUND");
    expect((await generateMetadata(params("ja"))).title).toBe(ja.models.title);
    expect(await generateMetadata(params("fr"))).toEqual({});
  });
});
