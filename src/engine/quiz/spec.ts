import type { Localized } from "@/i18n/config";

// クイズはシリアライズ可能な判別共用体（css-atelier の ValidatorSpec 方式）。
// 評価ロジックは evaluate.ts の純関数に隔離し、UI はデータを描画するだけにする。

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

/** items は正解の順序で著述する。UI 側が提示時にシャッフルする。 */
export interface OrderSpec {
  kind: "order";
  prompt: Localized<string>;
  items: readonly Localized<string>[];
  explanation: Localized<string>;
}

export type QuizSpec = SingleChoiceSpec | MultiChoiceSpec | BooleanSpec | OrderSpec;

// 回答。order は「正解順における添字」をユーザーが並べた順で持つ
// （全問正解 = [0, 1, 2, ...] の昇順一致）。
export type QuizAnswer =
  | { kind: "single"; index: number }
  | { kind: "multi"; indexes: readonly number[] }
  | { kind: "boolean"; value: boolean }
  | { kind: "order"; order: readonly number[] };
