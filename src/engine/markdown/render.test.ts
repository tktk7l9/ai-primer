import { describe, expect, it } from "vitest";
import { renderMarkdown } from "./render";

describe("renderMarkdown", () => {
  it("見出しを変換する", () => {
    expect(renderMarkdown("## Title")).toBe("<h2>Title</h2>");
  });
  it("段落と強調を変換する", () => {
    expect(renderMarkdown("hello **world**")).toBe("<p>hello <strong>world</strong></p>");
  });
  it("リストを変換する", () => {
    const html = renderMarkdown("- a\n- b");
    expect(html).toContain("<ul>");
    expect(html).toContain("<li>a</li>");
  });
  it("リンクを変換する", () => {
    expect(renderMarkdown("[x](https://example.com)")).toBe(
      '<p><a href="https://example.com">x</a></p>',
    );
  });
  it("コードブロックとインラインコードを変換する", () => {
    expect(renderMarkdown("`x`")).toBe("<p><code>x</code></p>");
    expect(renderMarkdown("```\ncode\n```")).toBe("<pre><code>code\n</code></pre>");
  });
  it("生のHTMLは出力に通さない（既定で無視される）", () => {
    const html = renderMarkdown('<script>alert(1)</script>\n\ntext');
    expect(html).not.toContain("<script>");
    expect(html).toContain("text");
  });
  it("空文字は空を返す", () => {
    expect(renderMarkdown("")).toBe("");
  });
});
