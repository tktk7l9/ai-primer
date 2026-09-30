"use client";

import { completion, resumePoint } from "@/engine/progress/progress";
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

/**
 * "Next up" marker for the first unfinished lesson of a track, so the track page
 * carries the same "continue here" cue as the home page (SHIG 20, 77). Absent
 * once the whole track is done.
 */
export function NextUpMark({
  lessonIds,
  lessonId,
  label,
}: {
  lessonIds: readonly string[];
  lessonId: string;
  label: string;
}) {
  const completed = useCompleted();
  const point = resumePoint(completed, lessonIds);
  if (!point || point.kind === "review" || point.lessonId !== lessonId) return null;
  return <span className="next-up">{label}</span>;
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
