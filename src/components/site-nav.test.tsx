import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ja from "@/i18n/dictionaries/ja";

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));
vi.mock("next/navigation", () => ({ usePathname }));

const { SiteNav } = await import("./site-nav");

describe("SiteNav", () => {
  it("marks the course link as current on a lesson page", () => {
    usePathname.mockReturnValue("/ja/learn/ai-basics/what-is-ai");
    render(<SiteNav locale="ja" labels={ja.nav} />);
    expect(screen.getByRole("link", { name: ja.nav.home })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: ja.nav.glossary })).not.toHaveAttribute("aria-current");
  });

  it("marks the glossary link as current on the glossary page", () => {
    usePathname.mockReturnValue("/ja/glossary");
    render(<SiteNav locale="ja" labels={ja.nav} />);
    const current = screen.getAllByRole("link").filter((a) => a.getAttribute("aria-current"));
    expect(current.map((a) => a.textContent)).toEqual([ja.nav.glossary]);
  });
});
