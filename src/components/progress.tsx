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

export function LessonTick({ lessonId }: { lessonId: string }) {
  const completed = useCompleted();
  const done = completed.includes(lessonId);
  return (
    <span className="tick" data-done={done} aria-hidden="true">
      {done ? "✓" : ""}
    </span>
  );
}
