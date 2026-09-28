import { describe, expect, it } from "vitest";
import {
  completion,
  isComplete,
  loadCompleted,
  markComplete,
  resumePoint,
  type ProgressStore,
} from "./progress";

function memoryStore(initial?: Record<string, string>): ProgressStore & { data: Map<string, string> } {
  const data = new Map(Object.entries(initial ?? {}));
  return {
    data,
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => void data.set(key, value),
  };
}

const KEY = "ai-primer:progress:v1";

describe("loadCompleted", () => {
  it("returns an empty array when nothing is stored", () => {
    expect(loadCompleted(memoryStore())).toEqual([]);
  });
  it("returns the stored array", () => {
    const store = memoryStore({ [KEY]: JSON.stringify(["a", "b"]) });
    expect(loadCompleted(store)).toEqual(["a", "b"]);
  });
  it("drops non-string elements", () => {
    const store = memoryStore({ [KEY]: JSON.stringify(["a", 1, null]) });
    expect(loadCompleted(store)).toEqual(["a"]);
  });
  it("returns an empty array for non-array JSON", () => {
    const store = memoryStore({ [KEY]: JSON.stringify({ a: 1 }) });
    expect(loadCompleted(store)).toEqual([]);
  });
  it("returns an empty array for broken JSON", () => {
    const store = memoryStore({ [KEY]: "{oops" });
    expect(loadCompleted(store)).toEqual([]);
  });
});

describe("markComplete / isComplete", () => {
  it("stores completion and isComplete becomes true", () => {
    const store = memoryStore();
    markComplete(store, "l1");
    expect(isComplete(store, "l1")).toBe(true);
    expect(isComplete(store, "l2")).toBe(false);
  });
  it("is idempotent (no double entries)", () => {
    const store = memoryStore();
    markComplete(store, "l1");
    const result = markComplete(store, "l1");
    expect(result).toEqual(["l1"]);
    expect(loadCompleted(store)).toEqual(["l1"]);
  });
});

describe("completion", () => {
  it("returns the done count and ratio", () => {
    expect(completion(["a", "c"], ["a", "b", "c", "d"])).toEqual({
      done: 2,
      total: 4,
      ratio: 0.5,
    });
  });
  it("ratio is 0 with no lessons", () => {
    expect(completion(["a"], [])).toEqual({ done: 0, total: 0, ratio: 0 });
  });
});

describe("resumePoint", () => {
  const ids = ["a", "b", "c"];

  it("starts at the first lesson when nothing is completed", () => {
    expect(resumePoint([], ids)).toEqual({ kind: "start", lessonId: "a" });
  });

  it("resumes at the first incomplete lesson, skipping gaps in order", () => {
    expect(resumePoint(["a"], ids)).toEqual({ kind: "resume", lessonId: "b" });
    expect(resumePoint(["a", "c"], ids)).toEqual({ kind: "resume", lessonId: "b" });
  });

  it("resumes at the first lesson when only later lessons are done", () => {
    expect(resumePoint(["c"], ids)).toEqual({ kind: "resume", lessonId: "a" });
  });

  it("ignores completed ids that are not in the course", () => {
    expect(resumePoint(["zzz"], ids)).toEqual({ kind: "start", lessonId: "a" });
  });

  it("points back to the first lesson for review once everything is done", () => {
    expect(resumePoint(["a", "b", "c"], ids)).toEqual({ kind: "review", lessonId: "a" });
  });

  it("returns null for an empty course", () => {
    expect(resumePoint([], [])).toBeNull();
  });
});
