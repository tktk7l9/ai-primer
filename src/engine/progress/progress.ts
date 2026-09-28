// Lesson-completion persistence. The store is injected (an interface matching
// the localStorage API) so this module is pure and 100% testable in Node.

export interface ProgressStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export const PROGRESS_KEY = "ai-primer:progress:v1";
const KEY = PROGRESS_KEY;

/** Load the set of completed lesson ids (tolerant of missing/corrupt data). */
export function loadCompleted(store: ProgressStore): string[] {
  const raw = store.getItem(KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.filter((x): x is string => typeof x === "string");
    }
    return [];
  } catch {
    return [];
  }
}

export function isComplete(store: ProgressStore, id: string): boolean {
  return loadCompleted(store).includes(id);
}

/** Mark a lesson complete (idempotent). Returns the updated completed list. */
export function markComplete(store: ProgressStore, id: string): string[] {
  const completed = loadCompleted(store);
  if (!completed.includes(id)) {
    completed.push(id);
    store.setItem(KEY, JSON.stringify(completed));
  }
  return completed;
}

export interface Completion {
  readonly done: number;
  readonly total: number;
  /** 0..1; 0 when there are no lessons. */
  readonly ratio: number;
}

/** Pure: how many of `lessonIds` are in `completed`. */
export function completion(
  completed: readonly string[],
  lessonIds: readonly string[],
): Completion {
  const set = new Set(completed);
  const done = lessonIds.reduce((acc, id) => acc + (set.has(id) ? 1 : 0), 0);
  const total = lessonIds.length;
  return { done, total, ratio: total === 0 ? 0 : done / total };
}

/**
 * Where "continue learning" should send the learner (SHIG 20, 12):
 * - `start`: nothing in this course is done yet, begin at the first lesson.
 * - `resume`: the first lesson (in course order) that is not done.
 * - `review`: everything is done, go back to the first lesson.
 * Returns null when the course has no lessons.
 */
export type ResumePoint =
  | { readonly kind: "start"; readonly lessonId: string }
  | { readonly kind: "resume"; readonly lessonId: string }
  | { readonly kind: "review"; readonly lessonId: string };

export function resumePoint(
  completed: readonly string[],
  lessonIds: readonly string[],
): ResumePoint | null {
  if (lessonIds.length === 0) return null;
  const set = new Set(completed);
  const firstIncomplete = lessonIds.find((id) => !set.has(id));
  if (firstIncomplete === undefined) return { kind: "review", lessonId: lessonIds[0] };
  const anyDone = lessonIds.some((id) => set.has(id));
  return { kind: anyDone ? "resume" : "start", lessonId: firstIncomplete };
}
