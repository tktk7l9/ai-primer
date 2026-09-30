import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import ja from "@/i18n/dictionaries/ja";
import en from "@/i18n/dictionaries/en";

const { redirect, usePathname } = vi.hoisted(() => ({
  redirect: vi.fn(),
  usePathname: vi.fn(() => "/ja/nope"),
}));
vi.mock("next/navigation", () => ({ redirect, usePathname }));

const { default: RootNotFound } = await import("./not-found");
const { default: LocaleNotFound } = await import("./[locale]/not-found");
const { default: RootPage } = await import("./page");
const { default: RootLayout } = await import("./layout");

describe("root routes", () => {
  it("sends the bare root URL to the default language", () => {
    RootPage();
    expect(redirect).toHaveBeenCalledWith("/ja");
  });

  it("shows a localized 404 with a way home for unmatched URLs", () => {
    usePathname.mockReturnValue("/en/missing");
    render(<RootNotFound />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: en.notFound.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: en.notFound.backHome })).toHaveAttribute("href", "/en");
    // Outside the locale layout there is still a header and footer in the URL's language (SHIG 60, 6).
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: en.nav.siteNav })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("shows the same 404 inside the locale layout without a second header", () => {
    usePathname.mockReturnValue("/ja/learn/missing");
    render(<LocaleNotFound />);
    expect(screen.getByRole("heading", { level: 1, name: ja.notFound.title })).toBeInTheDocument();
    expect(screen.queryByRole("banner")).not.toBeInTheDocument();
  });

  it("renders the document in Japanese and loads the analytics beacon as a module", () => {
    const html = renderToStaticMarkup(<RootLayout>{<p>child</p>}</RootLayout>);
    expect(html).toMatch(/^<html lang="ja">/);
    expect(html).toContain("<p>child</p>");
    expect(html).toMatch(/<script type="module" src="https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js"/);
  });
});
