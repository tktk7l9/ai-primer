import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./render";

describe("renderMarkdown", () => {
  it("converts headings", () => {
    expect(renderMarkdown("## Title")).toBe("<h2>Title</h2>");
  });
  it("converts paragraphs and emphasis", () => {
    expect(renderMarkdown("hello **world**")).toBe("<p>hello <strong>world</strong></p>");
  });
  it("converts lists", () => {
    const html = renderMarkdown("- a\n- b");
    expect(html).toContain("<ul>");
    expect(html).toContain("<li>a</li>");
  });
  it("converts links", () => {
    expect(renderMarkdown("[x](https://example.com)")).toBe(
      '<p><a href="https://example.com">x</a></p>',
    );
  });
  it("converts code blocks and inline code", () => {
    expect(renderMarkdown("`x`")).toBe("<p><code>x</code></p>");
    expect(renderMarkdown("```\ncode\n```")).toBe("<pre><code>code\n</code></pre>");
  });
  it("does not pass raw HTML through (ignored by default)", () => {
    const html = renderMarkdown('<script>alert(1)</script>\n\ntext');
    expect(html).not.toContain("<script>");
    expect(html).toContain("text");
  });
  it("returns empty for an empty string", () => {
    expect(renderMarkdown("")).toBe("");
  });
  it("converts GFM tables", () => {
    const html = renderMarkdown("| a | b |\n|---|---|\n| 1 | 2 |");
    expect(html).toContain("<table>");
    expect(html).toContain("<th>a</th>");
    expect(html).toContain("<td>1</td>");
  });
});
