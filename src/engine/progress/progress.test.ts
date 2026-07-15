import { describe, expect, it } from "vitest";
import {
  completion,
  isComplete,
  loadCompleted,
  markComplete,
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
  it("未保存なら空配列", () => {
    expect(loadCompleted(memoryStore())).toEqual([]);
  });
  it("保存済みの配列を返す", () => {
    const store = memoryStore({ [KEY]: JSON.stringify(["a", "b"]) });
    expect(loadCompleted(store)).toEqual(["a", "b"]);
  });
  it("文字列以外の要素は捨てる", () => {
    const store = memoryStore({ [KEY]: JSON.stringify(["a", 1, null]) });
    expect(loadCompleted(store)).toEqual(["a"]);
  });
  it("配列でないJSONは空配列", () => {
    const store = memoryStore({ [KEY]: JSON.stringify({ a: 1 }) });
    expect(loadCompleted(store)).toEqual([]);
  });
  it("壊れたJSONは空配列", () => {
    const store = memoryStore({ [KEY]: "{oops" });
    expect(loadCompleted(store)).toEqual([]);
  });
});

describe("markComplete / isComplete", () => {
  it("完了を保存し isComplete が true になる", () => {
    const store = memoryStore();
    markComplete(store, "l1");
    expect(isComplete(store, "l1")).toBe(true);
    expect(isComplete(store, "l2")).toBe(false);
  });
  it("冪等（二重登録しない）", () => {
    const store = memoryStore();
    markComplete(store, "l1");
    const result = markComplete(store, "l1");
    expect(result).toEqual(["l1"]);
    expect(loadCompleted(store)).toEqual(["l1"]);
  });
});

describe("completion", () => {
  it("完了数と比率を返す", () => {
    expect(completion(["a", "c"], ["a", "b", "c", "d"])).toEqual({
      done: 2,
      total: 4,
      ratio: 0.5,
    });
  });
  it("レッスン0件なら ratio 0", () => {
    expect(completion(["a"], [])).toEqual({ done: 0, total: 0, ratio: 0 });
  });
});
