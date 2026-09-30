import { describe, expect, it } from "vitest";
import { matchesQuery, normalizeForSearch, queryTerms } from "./filter";

describe("normalizeForSearch", () => {
  it("folds case, full-width forms, hiragana and surrounding whitespace", () => {
    expect(normalizeForSearch("  ＬＬＭ  Token ")).toBe("llm token");
    expect(normalizeForSearch("はるしねーしょん")).toBe("ハルシネーション");
    expect(normalizeForSearch("トークン")).toBe("トークン");
  });
});

describe("queryTerms", () => {
  it("returns no terms for a blank query", () => {
    expect(queryTerms("")).toEqual([]);
    expect(queryTerms("   ")).toEqual([]);
  });

  it("splits on any whitespace, including full-width spaces", () => {
    expect(queryTerms("rag　エージェント\tfine")).toEqual(["rag", "エージェント", "fine"]);
  });
});

describe("matchesQuery", () => {
  const fields = ["RAG（検索拡張生成）", "外部のデータベースを検索して、その内容を踏まえて回答を生成する手法。"];

  it("matches everything when the query is empty", () => {
    expect(matchesQuery(fields, "")).toBe(true);
  });

  it("is lenient about case, width and kana", () => {
    expect(matchesQuery(fields, "rag")).toBe(true);
    expect(matchesQuery(fields, "ＲＡＧ")).toBe(true);
    expect(matchesQuery(fields, "でーたべーす")).toBe(true);
  });

  it("requires every term, in any field", () => {
    expect(matchesQuery(fields, "rag 回答")).toBe(true);
    expect(matchesQuery(fields, "rag 画像")).toBe(false);
  });
});
