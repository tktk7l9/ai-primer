import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GlossaryList, type GlossaryItem } from "./glossary-list";

const items: GlossaryItem[] = [
  { id: "token", term: "トークン", definition: "LLM が扱う最小単位。", related: [{ href: "/ja/learn/a/b", title: "LLMとは" }] },
  { id: "rag", term: "RAG（検索拡張生成）", definition: "外部情報を検索して回答する。", related: [] },
  { id: "hallucination", term: "ハルシネーション", definition: "もっともらしい嘘。", related: [] },
];

const labels = {
  filter: "用語を絞り込む",
  relatedLessons: "関連レッスン",
  matchCount: "{n}件",
  noMatch: "該当する用語がありません。",
  clearFilter: "絞り込みを解除",
};

describe("GlossaryList", () => {
  it("shows every term with its related lessons until something is typed", () => {
    render(<GlossaryList items={items} labels={labels} />);
    expect(screen.getAllByRole("term")).toHaveLength(3);
    expect(screen.getByRole("link", { name: "LLMとは" })).toHaveAttribute("href", "/ja/learn/a/b");
    expect(screen.getByRole("status")).toHaveTextContent("");
  });

  it("narrows the list as the learner types and announces the count (SHIG 22, 51, 66)", async () => {
    const user = userEvent.setup();
    render(<GlossaryList items={items} labels={labels} />);
    await user.type(screen.getByRole("searchbox", { name: labels.filter }), "はるしね");
    expect(screen.getAllByRole("term").map((t) => t.textContent)).toEqual(["ハルシネーション"]);
    expect(screen.getByRole("status")).toHaveTextContent("1件");
  });

  it("offers a one-tap way out when nothing matches (SHIG 55, 60)", async () => {
    const user = userEvent.setup();
    render(<GlossaryList items={items} labels={labels} />);
    await user.type(screen.getByRole("searchbox", { name: labels.filter }), "zzz");
    expect(screen.queryAllByRole("term")).toHaveLength(0);
    expect(screen.getByText(labels.noMatch, { exact: false })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: labels.clearFilter }));
    expect(screen.getAllByRole("term")).toHaveLength(3);
    expect(screen.getByRole("searchbox", { name: labels.filter })).toHaveValue("");
  });
});
