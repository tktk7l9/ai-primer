import { describe, expect, it } from "vitest";
import { shuffledIndexes } from "./shuffle";

describe("shuffledIndexes", () => {
  it("gives the same order for the same seed (deterministic)", () => {
    expect(shuffledIndexes(5, "lesson-1:0")).toEqual(shuffledIndexes(5, "lesson-1:0"));
  });

  it("returns a permutation of [0..n-1]", () => {
    const result = shuffledIndexes(7, "seed");
    expect([...result].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it("gives a different order for a different seed (given enough length)", () => {
    const a = shuffledIndexes(10, "seed-a");
    const b = shuffledIndexes(10, "seed-b");
    expect(a).not.toEqual(b);
  });

  it("is safe for lengths 0 and 1", () => {
    expect(shuffledIndexes(0, "s")).toEqual([]);
    expect(shuffledIndexes(1, "s")).toEqual([0]);
  });
});
