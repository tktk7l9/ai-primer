import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SourcesList } from "./sources-list";
import ja from "@/i18n/dictionaries/ja";

describe("SourcesList", () => {
  it("出典を全てリンクとして描画し、新規タブ属性を持つ", () => {
    render(
      <SourcesList
        sources={[
          { label: "Source A", url: "https://a.example.com" },
          { label: "Source B", url: "https://b.example.com" },
        ]}
        dict={ja}
      />,
    );
    const linkA = screen.getByRole("link", { name: /Source A/ });
    expect(linkA).toHaveAttribute("href", "https://a.example.com");
    expect(linkA).toHaveAttribute("target", "_blank");
    expect(linkA).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByRole("link", { name: /Source B/ })).toBeInTheDocument();
  });

  it("出典が0件ならリンクを描画しない", () => {
    render(<SourcesList sources={[]} dict={ja} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
