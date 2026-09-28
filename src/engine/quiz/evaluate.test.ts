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
  it("correct with the right index", () => {
    expect(evaluate(single, { kind: "single", index: 1 }).correct).toBe(true);
  });
  it("incorrect with a wrong index", () => {
    expect(evaluate(single, { kind: "single", index: 0 }).correct).toBe(false);
  });
  it("incorrect on a kind mismatch", () => {
    expect(evaluate(single, { kind: "boolean", value: true }).correct).toBe(false);
  });
});

describe("evaluate: multi", () => {
  it("correct when the sets match (any order)", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [2, 0] }).correct).toBe(true);
  });
  it("incorrect when some are missing", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [0] }).correct).toBe(false);
  });
  it("incorrect when there are extras", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [0, 2, 3] }).correct).toBe(false);
  });
  it("incorrect with the same count but different elements", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [0, 3] }).correct).toBe(false);
  });
  it("incorrect for an empty answer", () => {
    expect(evaluate(multi, { kind: "multi", indexes: [] }).correct).toBe(false);
  });
  it("incorrect on a kind mismatch", () => {
    expect(evaluate(multi, { kind: "single", index: 0 }).correct).toBe(false);
  });
});

describe("evaluate: boolean", () => {
  it("correct when it matches", () => {
    expect(evaluate(bool, { kind: "boolean", value: true }).correct).toBe(true);
  });
  it("incorrect when it does not match", () => {
    expect(evaluate(bool, { kind: "boolean", value: false }).correct).toBe(false);
  });
  it("incorrect on a kind mismatch", () => {
    expect(evaluate(bool, { kind: "order", order: [0] }).correct).toBe(false);
  });
});

describe("evaluate: order", () => {
  it("correct when the ascending order matches", () => {
    expect(evaluate(order, { kind: "order", order: [0, 1, 2] }).correct).toBe(true);
  });
  it("incorrect for a different order", () => {
    expect(evaluate(order, { kind: "order", order: [1, 0, 2] }).correct).toBe(false);
  });
  it("incorrect for a different length", () => {
    expect(evaluate(order, { kind: "order", order: [0, 1] }).correct).toBe(false);
  });
  it("incorrect on a kind mismatch", () => {
    expect(evaluate(order, { kind: "multi", indexes: [0, 1, 2] }).correct).toBe(false);
  });
});

describe("allCorrect", () => {
  const answers: QuizAnswer[] = [
    { kind: "single", index: 1 },
    { kind: "boolean", value: true },
  ];
  it("true when every question is correct", () => {
    expect(allCorrect([single, bool], answers)).toBe(true);
  });
  it("false when any question is wrong", () => {
    expect(allCorrect([single, bool], [answers[0], { kind: "boolean", value: false }])).toBe(false);
  });
  it("false when the answer count does not match", () => {
    expect(allCorrect([single, bool], [answers[0]])).toBe(false);
  });
  it("false for an empty quiz", () => {
    expect(allCorrect([], [])).toBe(false);
  });
});
