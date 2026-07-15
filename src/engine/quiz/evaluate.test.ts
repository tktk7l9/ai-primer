import { describe, expect, it } from "vitest";
import { allCorrect, evaluate } from "./evaluate";
import type { QuizAnswer, QuizSpec } from "./spec";

const L = (s: string) => ({ ja: s, en: s });

const single: QuizSpec = {
  kind: "single",
  prompt: L("q"),
  choices: [L("a"), L("b"), L("c")],
  correctIndex: 1,
  explanation: L("e"),
};

const multi: QuizSpec = {
  kind: "multi",
  prompt: L("q"),
  choices: [L("a"), L("b"), L("c"), L("d")],
  correctIndexes: [0, 2],
  explanation: L("e"),
};

const bool: QuizSpec = {
  kind: "boolean",
  prompt: L("q"),
  answer: true,
  explanation: L("e"),
};

const order: QuizSpec = {
  kind: "order",
  prompt: L("q"),
  items: [L("x"), L("y"), L("z")],
  explanation: L("e"),
};

describe("evaluate: single", () => {
  it("正しい添字で正解", () => {
    expect(evaluate(single, { kind: "single", index: 1 }).correct).toBe(true);
  });
  it("誤った添字で不正解", () => {
    expect(evaluate(single, { kind: "single", index: 0 }).correct).toBe(false);
  });
  it("kind不一致は不正解", () => {
    expect(evaluate(single, { kind: "boolean", value: true }).correct).toBe(false);
  });
});

describe("evaluate: multi", () => {
  it("集合一致で正解（順不同）", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [2, 0] }).correct).toBe(true);
  });
  it("不足は不正解", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [0] }).correct).toBe(false);
  });
  it("過剰は不正解", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [0, 2, 3] }).correct).toBe(false);
  });
  it("同数でも要素違いは不正解", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [0, 3] }).correct).toBe(false);
  });
  it("空回答は不正解", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [] }).correct).toBe(false);
  });
  it("kind不一致は不正解", () => {
    expect(evaluate(multi, { kind: "single", index: 0 }).correct).toBe(false);
  });
});

describe("evaluate: boolean", () => {
  it("一致で正解", () => {
    expect(evaluate(bool, { kind: "boolean", value: true }).correct).toBe(true);
  });
  it("不一致で不正解", () => {
    expect(evaluate(bool, { kind: "boolean", value: false }).correct).toBe(false);
  });
  it("kind不一致は不正解", () => {
    expect(evaluate(bool, { kind: "order", order: [0] }).correct).toBe(false);
  });
});

describe("evaluate: order", () => {
  it("昇順一致で正解", () => {
    expect(evaluate(order, { kind: "order", order: [0, 1, 2] }).correct).toBe(true);
  });
  it("順序違いは不正解", () => {
    expect(evaluate(order, { kind: "order", order: [1, 0, 2] }).correct).toBe(false);
  });
  it("長さ違いは不正解", () => {
    expect(evaluate(order, { kind: "order", order: [0, 1] }).correct).toBe(false);
  });
  it("kind不一致は不正解", () => {
    expect(evaluate(order, { kind: "multi", indexes: [0, 1, 2] }).correct).toBe(false);
  });
});

describe("allCorrect", () => {
  const answers: QuizAnswer[] = [
    { kind: "single", index: 1 },
    { kind: "boolean", value: true },
  ];
  it("全問正解で true", () => {
    expect(allCorrect([single, bool], answers)).toBe(true);
  });
  it("1問でも不正解なら false", () => {
    expect(allCorrect([single, bool], [answers[0], { kind: "boolean", value: false }])).toBe(false);
  });
  it("回答数不一致は false", () => {
    expect(allCorrect([single, bool], [answers[0]])).toBe(false);
  });
  it("空のクイズは false", () => {
    expect(allCorrect([], [])).toBe(false);
  });
});
