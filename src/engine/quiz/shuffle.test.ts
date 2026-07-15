import { describe, expect, it } from "vitest";
import { shuffledIndexes } from "./shuffle";

describe("shuffledIndexes", () => {
  it("同じシードなら同じ順序（決定的）", () => {
    expect(shuffledIndexes(5, "lesson-1:0")).toEqual(shuffledIndexes(5, "lesson-1:0"));
  });

  it("[0..n-1] の順列を返す", () => {
    const result = shuffledIndexes(7, "seed");
    expect([...result].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it("異なるシードでは（十分な長さで）異なる順序になる", () => {
    const a = shuffledIndexes(10, "seed-a");
    const b = shuffledIndexes(10, "seed-b");
    expect(a).not.toEqual(b);
  });

  it("長さ0・1でも安全", () => {
    expect(shuffledIndexes(0, "s")).toEqual([]);
    expect(shuffledIndexes(1, "s")).toEqual([0]);
  });
});
