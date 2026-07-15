"use client";

import { useEffect, useMemo, useState } from "react";
import { evaluate } from "@/engine/quiz/evaluate";
import { shuffledIndexes } from "@/engine/quiz/shuffle";
import type { QuizAnswer, QuizSpec } from "@/engine/quiz/spec";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { markCompleteClient } from "../use-completed";

type PartialAnswer =
  | { kind: "single"; index: number | null }
  | { kind: "multi"; indexes: readonly number[] }
  | { kind: "boolean"; value: boolean | null }
  | { kind: "order"; order: readonly number[] };

function initial(spec: QuizSpec): PartialAnswer {
  switch (spec.kind) {
    case "single":
      return { kind: "single", index: null };
    case "multi":
      return { kind: "multi", indexes: [] };
    case "boolean":
      return { kind: "boolean", value: null };
    case "order":
      return { kind: "order", order: [] };
  }
}

function isAnswered(a: PartialAnswer): a is QuizAnswer {
  switch (a.kind) {
    case "single":
      return a.index !== null;
    case "multi":
      return a.indexes.length > 0;
    case "boolean":
      return a.value !== null;
    case "order":
      return a.order.length > 0;
  }
}

function Question({
  spec,
  seed,
  dict,
  locale,
  onResult,
}: {
  spec: QuizSpec;
  seed: string;
  dict: Dictionary;
  locale: Locale;
  onResult: (correct: boolean) => void;
}) {
  const [answer, setAnswer] = useState<PartialAnswer>(() => initial(spec));
  const [checked, setChecked] = useState(false);
  const displayOrder = useMemo(
    () => (spec.kind === "order" ? shuffledIndexes(spec.items.length, seed) : []),
    [spec, seed],
  );

  const result = checked && isAnswered(answer) ? evaluate(spec, answer) : null;

  function check() {
    if (!isAnswered(answer)) return;
    setChecked(true);
    onResult(evaluate(spec, answer).correct);
  }

  function reset() {
    setAnswer(initial(spec));
    setChecked(false);
  }

  return (
    <div className="quiz-question">
      <p className="quiz-prompt">{spec.prompt[locale]}</p>

      {spec.kind === "single" && (
        <div className="quiz-choices" role="radiogroup">
          {spec.choices.map((choice, i) => (
            <button
              key={i}
              type="button"
              className="quiz-choice"
              aria-pressed={answer.kind === "single" && answer.index === i}
              disabled={checked}
              onClick={() => setAnswer({ kind: "single", index: i })}
            >
              {choice[locale]}
            </button>
          ))}
        </div>
      )}

      {spec.kind === "multi" && (
        <div className="quiz-choices">
          {spec.choices.map((choice, i) => {
            const selected = answer.kind === "multi" && answer.indexes.includes(i);
            return (
              <button
                key={i}
                type="button"
                className="quiz-choice"
                aria-pressed={selected}
                disabled={checked}
                onClick={() =>
                  setAnswer((prev) => {
                    if (prev.kind !== "multi") return prev;
                    const indexes = selected
                      ? prev.indexes.filter((x) => x !== i)
                      : [...prev.indexes, i];
                    return { kind: "multi", indexes };
                  })
                }
              >
                {choice[locale]}
              </button>
            );
          })}
        </div>
      )}

      {spec.kind === "boolean" && (
        <div className="quiz-choices">
          {[true, false].map((v) => (
            <button
              key={String(v)}
              type="button"
              className="quiz-choice"
              aria-pressed={answer.kind === "boolean" && answer.value === v}
              disabled={checked}
              onClick={() => setAnswer({ kind: "boolean", value: v })}
            >
              {v ? dict.lesson.trueLabel : dict.lesson.falseLabel}
            </button>
          ))}
        </div>
      )}

      {spec.kind === "order" && (
        <div className="quiz-choices">
          {displayOrder.map((itemIndex) => {
            const picked = answer.kind === "order" ? answer.order.indexOf(itemIndex) : -1;
            return (
              <button
                key={itemIndex}
                type="button"
                className="quiz-choice"
                aria-pressed={picked >= 0}
                disabled={checked}
                onClick={() =>
                  setAnswer((prev) => {
                    if (prev.kind !== "order") return prev;
                    const already = prev.order.includes(itemIndex);
                    const order = already
                      ? prev.order.filter((x) => x !== itemIndex)
                      : [...prev.order, itemIndex];
                    return { kind: "order", order };
                  })
                }
              >
                {picked >= 0 && <span className="order-no">{picked + 1}</span>}
                {spec.items[itemIndex][locale]}
              </button>
            );
          })}
        </div>
      )}

      <div className="quiz-actions">
        <button
          type="button"
          className="quiz-check"
          disabled={checked || !isAnswered(answer)}
          onClick={check}
        >
          {dict.lesson.check}
        </button>
        {checked && (
          <button type="button" className="quiz-reset" onClick={reset}>
            {dict.lesson.reset}
          </button>
        )}
        {result && (
          <span className="quiz-feedback" data-state={result.correct ? "correct" : "incorrect"}>
            {result.correct ? dict.lesson.correct : dict.lesson.incorrect}
          </span>
        )}
      </div>

      {result?.correct && (
        <p className="quiz-explanation">
          <strong>{dict.lesson.explanationHeading}: </strong>
          {spec.explanation[locale]}
        </p>
      )}
    </div>
  );
}

export function QuizBlock({
  lessonId,
  quiz,
  locale,
  dict,
}: {
  lessonId: string;
  quiz: readonly QuizSpec[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [results, setResults] = useState<(boolean | null)[]>(() => quiz.map(() => null));

  useEffect(() => {
    if (results.length > 0 && results.every((r) => r === true)) {
      markCompleteClient(lessonId);
    }
  }, [results, lessonId]);

  if (quiz.length === 0) return null;

  return (
    <section className="quiz-block">
      <h2>📝 {dict.lesson.quizHeading}</h2>
      {quiz.map((spec, i) => (
        <Question
          key={i}
          spec={spec}
          seed={`${lessonId}:${i}`}
          dict={dict}
          locale={locale}
          onResult={(correct) =>
            setResults((prev) => prev.map((r, idx) => (idx === i ? correct : r)))
          }
        />
      ))}
    </section>
  );
}
