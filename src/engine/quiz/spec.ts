import type { Localized } from "@/i18n/config";

// Quizzes are serializable discriminated unions (the css-atelier ValidatorSpec approach).
// Evaluation logic is isolated in pure functions in evaluate.ts; the UI only renders the data.

export interface SingleChoiceSpec {
  kind: "single";
  prompt: Localized<string>;
  choices: readonly Localized<string>[];
  correctIndex: number;
  explanation: Localized<string>;
}

export interface MultiChoiceSpec {
  kind: "multi";
  prompt: Localized<string>;
  choices: readonly Localized<string>[];
  correctIndexes: readonly number[];
  explanation: Localized<string>;
}

export interface BooleanSpec {
  kind: "boolean";
  prompt: Localized<string>;
  answer: boolean;
  explanation: Localized<string>;
}

/** Author items in the correct order. The UI shuffles them for presentation. */
export interface OrderSpec {
  kind: "order";
  prompt: Localized<string>;
  items: readonly Localized<string>[];
  explanation: Localized<string>;
}

export type QuizSpec = SingleChoiceSpec | MultiChoiceSpec | BooleanSpec | OrderSpec;

// Answers. order holds the indexes in the correct order, arranged in the order the user placed them
// (all correct = matches ascending [0, 1, 2, ...]).
export type QuizAnswer =
  | { kind: "single"; index: number }
  | { kind: "multi"; indexes: readonly number[] }
  | { kind: "boolean"; value: boolean }
  | { kind: "order"; order: readonly number[] };
