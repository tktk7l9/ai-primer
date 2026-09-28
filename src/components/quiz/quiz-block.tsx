"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
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
  const promptId = useId();
  const [answer, setAnswer] = useState<PartialAnswer>(() => initial(spec));
  const [checked, setChecked] = useState(false);
  // Checking disables the choices and the check button, and resetting unmounts
  // the reset button, so without this keyboard focus falls back to <body>.
  const rootRef = useRef<HTMLDivElement>(null);
  const focusAfterToggle = useRef(false);
  useEffect(() => {
    if (!focusAfterToggle.current) return;
    focusAfterToggle.current = false;
    const selector = checked ? ".quiz-reset" : ".quiz-choice";
    rootRef.current?.querySelector<HTMLButtonElement>(selector)?.focus();
  }, [checked]);
  const displayOrder = useMemo(
    () => (spec.kind === "order" ? shuffledIndexes(spec.items.length, seed) : []),
    [spec, seed],
  );

  const result = checked && isAnswered(answer) ? evaluate(spec, answer) : null;

  function check() {
    if (!isAnswered(answer)) return;
    focusAfterToggle.current = true;
    setChecked(true);
    onResult(evaluate(spec, answer).correct);
  }

  function reset() {
    focusAfterToggle.current = true;
    setAnswer(initial(spec));
    setChecked(false);
  }

  return (
    <div className="quiz-question" ref={rootRef}>
      <p className="quiz-prompt" id={promptId}>
        {spec.prompt[locale]}
      </p>
      {spec.kind === "multi" && <p className="quiz-hint">{dict.lesson.multiHint}</p>}
      {spec.kind === "order" && <p className="quiz-hint">{dict.lesson.orderHint}</p>}

      {spec.kind === "single" && (
        <div className="quiz-choices" role="group" aria-labelledby={promptId}>
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
        <div className="quiz-choices" role="group" aria-labelledby={promptId}>
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
        <div className="quiz-choices" role="group" aria-labelledby={promptId}>
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
        <div className="quiz-choices" role="group" aria-labelledby={promptId}>
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
        {/* Always mounted so screen readers announce the result when it appears (SHIG 66, 94). */}
        <span
          className="quiz-feedback"
          role="status"
          data-state={result ? (result.correct ? "correct" : "incorrect") : undefined}
        >
          {result ? (result.correct ? dict.lesson.correct : dict.lesson.incorrect) : ""}
        </span>
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

export interface NextLessonLink {
  readonly href: string;
  readonly title: string;
}

export function QuizBlock({
  lessonId,
  quiz,
  locale,
  dict,
  next = null,
  courseHref,
}: {
  lessonId: string;
  quiz: readonly QuizSpec[];
  locale: Locale;
  dict: Dictionary;
  /** Where to go after finishing; null on the last lesson of the course. */
  next?: NextLessonLink | null;
  courseHref?: string;
}) {
  const [results, setResults] = useState<(boolean | null)[]>(() => quiz.map(() => null));

  const allCorrect = results.length > 0 && results.every((r) => r === true);

  useEffect(() => {
    if (allCorrect) markCompleteClient(lessonId);
  }, [allCorrect, lessonId]);

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
      {/* Completing the lesson gets immediate, nearby feedback and the next step (SHIG 61, 66, 41). */}
      <div className="quiz-complete-slot" role="status">
        {allCorrect && (
          <p className="quiz-complete">
            <span className="quiz-complete-mark" aria-hidden="true">
              ✓
            </span>
            <strong>{dict.lesson.completedNotice}</strong>
            {next ? (
              <a href={next.href}>
                {dict.lesson.next}: {next.title} →
              </a>
            ) : (
              courseHref && <a href={courseHref}>{dict.lesson.backToCourse}</a>
            )}
          </p>
        )}
      </div>
    </section>
  );
}
