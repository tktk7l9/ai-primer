import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));
vi.mock("next/navigation", () => ({ usePathname }));

const { LocaleSwitcher } = await import("./locale-switcher");

describe("LocaleSwitcher", () => {
  it("ja→en: swaps only the locale and keeps the current path", () => {
    usePathname.mockReturnValue("/ja/learn/ai-basics/what-is-ai");
    render(<LocaleSwitcher locale="ja" label="English" />);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute(
      "href",
      "/en/learn/ai-basics/what-is-ai",
    );
  });

  it("en→ja: swaps correctly in the other direction too", () => {
    usePathname.mockReturnValue("/en/models");
    render(<LocaleSwitcher locale="en" label="日本語" />);
    expect(screen.getByRole("link", { name: "日本語" })).toHaveAttribute("href", "/ja/models");
  });

  it("falls back to the locale root when pathname is null", () => {
    usePathname.mockReturnValue(null);
    render(<LocaleSwitcher locale="ja" label="English" />);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("href", "/en");
  });

  it("sets hrefLang to the target locale", () => {
    usePathname.mockReturnValue("/ja");
    render(<LocaleSwitcher locale="ja" label="English" />);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("hrefLang", "en");
  });
});
