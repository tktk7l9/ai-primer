import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const { default: UnknownLocalePath } = await import("./page");

describe("unknown path under a locale", () => {
  it("answers with the localized 404 instead of the build-time root one", () => {
    expect(() => UnknownLocalePath()).toThrow("NEXT_NOT_FOUND");
  });
});
