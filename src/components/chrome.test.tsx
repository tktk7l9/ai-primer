import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import ja from "@/i18n/dictionaries/ja";
import en from "@/i18n/dictionaries/en";
import { NEWS_APP_URL } from "@/engine/site";

vi.mock("next/navigation", () => ({ usePathname: () => "/en/timeline" }));

const { Header } = await import("./header");
const { Footer } = await import("./footer");
const { Breadcrumbs } = await import("./breadcrumbs");
const { JsonLd } = await import("./json-ld");
const { LessonBody } = await import("./lesson-body");

describe("Header", () => {
  it("links the brand back to the locale home and shows the section menu", () => {
    render(<Header locale="en" dict={en} />);
    expect(screen.getByRole("link", { name: "AI Primer" })).toHaveAttribute("href", "/en");
    const nav = screen.getByRole("navigation", { name: en.nav.siteNav });
    expect(within(nav).getByRole("link", { name: en.nav.timeline })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("names the section menu in Japanese on Japanese pages", () => {
    render(<Header locale="ja" dict={ja} />);
    expect(screen.getByRole("navigation", { name: "サイト内メニュー" })).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("shows the disclaimer and opens the sister news app in a new tab", () => {
    render(<Footer dict={ja} />);
    expect(screen.getByText(ja.footer.disclaimer)).toBeInTheDocument();
    const link = screen.getByRole("link", { name: new RegExp(ja.footer.newsLink.replace(/[()（）]/g, ".")) });
    expect(link).toHaveAttribute("href", NEWS_APP_URL);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
  });
});

describe("Breadcrumbs", () => {
  it("lists ancestor pages in order inside a labelled navigation", () => {
    render(
      <Breadcrumbs
        label="現在地"
        items={[
          { label: "コース", href: "/ja" },
          { label: "AIの基礎", href: "/ja/learn/ai-basics" },
        ]}
      />,
    );
    const nav = screen.getByRole("navigation", { name: "現在地" });
    const links = within(nav).getAllByRole("link");
    expect(links.map((a) => [a.textContent, a.getAttribute("href")])).toEqual([
      ["コース", "/ja"],
      ["AIの基礎", "/ja/learn/ai-basics"],
    ]);
  });
});

describe("JsonLd", () => {
  it("emits parseable structured data that cannot break out of its script element", () => {
    const data = { name: "</script><script>alert(1)</script>" };
    const { container } = render(<JsonLd data={data} />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    expect(script.innerHTML).not.toContain("</script>");
    expect(JSON.parse(script.textContent!)).toEqual(data);
  });
});

describe("LessonBody", () => {
  it("renders Markdown as readable headings, lists and links", () => {
    render(<LessonBody markdown={"## 見出し\n\n- 項目A\n- 項目B\n\n[リンク](https://example.com)"} />);
    expect(screen.getByRole("heading", { level: 2, name: "見出し" })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").map((li) => li.textContent)).toEqual(["項目A", "項目B"]);
    expect(screen.getByRole("link", { name: /リンク/ })).toHaveAttribute("href", "https://example.com");
  });
});
