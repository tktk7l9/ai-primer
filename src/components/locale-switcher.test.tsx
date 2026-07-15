import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));
vi.mock("next/navigation", () => ({ usePathname }));

const { LocaleSwitcher } = await import("./locale-switcher");

describe("LocaleSwitcher", () => {
  it("ja→en: 現在のパスを保ったままロケールだけ差し替える", () => {
    usePathname.mockReturnValue("/ja/learn/ai-basics/what-is-ai");
    render(<LocaleSwitcher locale="ja" label="English" />);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute(
      "href",
      "/en/learn/ai-basics/what-is-ai",
    );
  });

  it("en→ja: 逆方向も正しく差し替える", () => {
    usePathname.mockReturnValue("/en/models");
    render(<LocaleSwitcher locale="en" label="日本語" />);
    expect(screen.getByRole("link", { name: "日本語" })).toHaveAttribute("href", "/ja/models");
  });

  it("pathnameがnullの場合はロケールのトップへフォールバックする", () => {
    usePathname.mockReturnValue(null);
    render(<LocaleSwitcher locale="ja" label="English" />);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("href", "/en");
  });

  it("hrefLang属性が切替先ロケールになっている", () => {
    usePathname.mockReturnValue("/ja");
    render(<LocaleSwitcher locale="ja" label="English" />);
    expect(screen.getByRole("link", { name: "English" })).toHaveAttribute("hrefLang", "en");
  });
});
