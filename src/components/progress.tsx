"use client";

import { completion } from "@/engine/progress/progress";
import { useCompleted } from "./use-completed";

export function ProgressMeter({
  lessonIds,
  label,
}: {
  lessonIds: readonly string[];
  label: string;
}) {
  const completed = useCompleted();
  const { done, total, ratio } = completion(completed, lessonIds);
  return (
    <div className="track-progress">
      <div
        className="progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
      >
        <div className="progress-fill" style={{ width: `${ratio * 100}%` }} />
      </div>
      <span className="progress-count">
        {done}/{total}
      </span>
    </div>
  );
}

/**
 * Small completion stamp used in lists. The mark itself is decorative; a
 * visually hidden label carries the state for screen readers (SHIG 96, 94).
 */
export function LessonTick({ lessonId, doneLabel }: { lessonId: string; doneLabel: string }) {
  const completed = useCompleted();
  const done = completed.includes(lessonId);
  return (
    <span className="tick" data-done={done}>
      <span aria-hidden="true">{done ? "✓" : ""}</span>
      {done && <span className="visually-hidden">{doneLabel}</span>}
    </span>
  );
}

/** Visible "✓ completed" badge next to a lesson title; absent until completed (SHIG 25, 37). */
export function LessonStatus({ lessonId, label }: { lessonId: string; label: string }) {
  const completed = useCompleted();
  if (!completed.includes(lessonId)) return null;
  return (
    <span className="lesson-status">
      <span aria-hidden="true">✓ </span>
      {label}
    </span>
  );
}
