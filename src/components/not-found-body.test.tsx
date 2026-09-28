import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import en from "@/i18n/dictionaries/en";
import ja from "@/i18n/dictionaries/ja";

const { usePathname } = vi.hoisted(() => ({ usePathname: vi.fn() }));
vi.mock("next/navigation", () => ({ usePathname }));

const { NotFoundBody } = await import("./not-found-body");

describe("NotFoundBody", () => {
  it("speaks the URL's locale and links back to that course list", () => {
    usePathname.mockReturnValue("/en/learn/nope");
    render(<NotFoundBody />);
    expect(screen.getByRole("heading", { name: en.notFound.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: en.notFound.backHome })).toHaveAttribute("href", "/en");
  });

  it("falls back to Japanese for unknown prefixes", () => {
    usePathname.mockReturnValue("/zz");
    render(<NotFoundBody />);
    expect(screen.getByRole("link", { name: ja.notFound.backHome })).toHaveAttribute("href", "/ja");
  });
});
