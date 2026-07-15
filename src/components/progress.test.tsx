import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ProgressMeter, LessonTick } from "./progress";
import { markComplete } from "@/engine/progress/progress";

beforeEach(() => {
  window.localStorage.clear();
  cleanup();
});

describe("ProgressMeter", () => {
  it("未完了の状態では 0/n を表示する", () => {
    render(<ProgressMeter lessonIds={["a", "b", "c"]} label="進捗" />);
    expect(screen.getByText("0/3")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });

  it("localStorageの完了状態を反映する", () => {
    markComplete(window.localStorage, "a");
    markComplete(window.localStorage, "b");
    render(<ProgressMeter lessonIds={["a", "b", "c"]} label="進捗" />);
    expect(screen.getByText("2/3")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "2");
  });

  it("レッスン0件でも安全に描画される", () => {
    render(<ProgressMeter lessonIds={[]} label="進捗" />);
    expect(screen.getByText("0/0")).toBeInTheDocument();
  });
});

describe("LessonTick", () => {
  it("未完了なら data-done=false", () => {
    render(<LessonTick lessonId="l1" />);
    expect(document.querySelector(".tick")).toHaveAttribute("data-done", "false");
  });

  it("完了済みなら data-done=true でチェックマークを表示", () => {
    markComplete(window.localStorage, "l1");
    render(<LessonTick lessonId="l1" />);
    const tick = document.querySelector(".tick");
    expect(tick).toHaveAttribute("data-done", "true");
    expect(tick?.textContent).toBe("✓");
  });
});
