import type { QuizAnswer, QuizSpec } from "./spec";

export interface QuizResult {
  readonly correct: boolean;
}

/** spec と answer の kind が一致しない場合は不正解として扱う。 */
export function evaluate(spec: QuizSpec, answer: QuizAnswer): QuizResult {
  switch (spec.kind) {
    case "single":
      return { correct: answer.kind === "single" && answer.index === spec.correctIndex };
    case "multi": {
      if (answer.kind !== "multi") return { correct: false };
      const expected = new Set(spec.correctIndexes);
      const got = new Set(answer.indexes);
      if (expected.size !== got.size) return { correct: false };
      for (const i of expected) {
        if (!got.has(i)) return { correct: false };
      }
      return { correct: true };
    }
    case "boolean":
      return { correct: answer.kind === "boolean" && answer.value === spec.answer };
    case "order": {
      if (answer.kind !== "order") return { correct: false };
      if (answer.order.length !== spec.items.length) return { correct: false };
      return { correct: answer.order.every((v, i) => v === i) };
    }
  }
}

/** レッスン内の全問に正解したか。 */
export function allCorrect(specs: readonly QuizSpec[], answers: readonly QuizAnswer[]): boolean {
  return (
    specs.length > 0 &&
    specs.length === answers.length &&
    specs.every((spec, i) => evaluate(spec, answers[i]).correct)
  );
}
