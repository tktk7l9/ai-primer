"use client";

import { resumePoint } from "@/engine/progress/progress";
import type { Dictionary } from "@/i18n/dictionaries";
import { useCompleted } from "./use-completed";

export interface ResumeLesson {
  readonly id: string;
  readonly href: string;
  readonly title: string;
}

/**
 * Primary call to action on the home page (SHIG 20, 12, 77): a returning learner
 * lands on the first lesson they have not finished instead of the first track.
 * Before hydration (and with no progress) it keeps the plain "start" link.
 */
export function ResumeLink({
  lessons,
  startHref,
  dict,
}: {
  lessons: readonly ResumeLesson[];
  startHref: string;
  dict: Dictionary;
}) {
  const completed = useCompleted();
  const point = resumePoint(
    completed,
    lessons.map((l) => l.id),
  );
  const target = point && point.kind !== "start" ? lessons.find((l) => l.id === point.lessonId) : undefined;

  const label = !target
    ? dict.home.startLearning
    : point?.kind === "review"
      ? dict.home.reviewLearning
      : dict.home.resumeLearning;

  return (
    <div className="resume">
      <a className="button-primary" href={target ? target.href : startHref}>
        {label}
      </a>
      <span className="resume-next">
        {target && point?.kind === "resume" ? `${dict.home.upNext} ${target.title}` : ""}
      </span>
    </div>
  );
}
