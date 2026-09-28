import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ProgressMeter, LessonStatus, LessonTick } from "./progress";
import { markComplete } from "@/engine/progress/progress";

beforeEach(() => {
  window.localStorage.clear();
  cleanup();
});

describe("ProgressMeter", () => {
  it("shows 0/n when nothing is complete", () => {
    render(<ProgressMeter lessonIds={["a", "b", "c"]} label="進捗" />);
    expect(screen.getByText("0/3")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });

  it("reflects completion stored in localStorage", () => {
    markComplete(window.localStorage, "a");
    markComplete(window.localStorage, "b");
    render(<ProgressMeter lessonIds={["a", "b", "c"]} label="進捗" />);
    expect(screen.getByText("2/3")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "2");
  });

  it("renders safely with zero lessons", () => {
    render(<ProgressMeter lessonIds={[]} label="進捗" />);
    expect(screen.getByText("0/0")).toBeInTheDocument();
  });
});

describe("LessonTick", () => {
  it("data-done=false when not complete", () => {
    render(<LessonTick lessonId="l1" doneLabel="完了" />);
    expect(document.querySelector(".tick")).toHaveAttribute("data-done", "false");
  });

  it("data-done=true with a check mark when complete", () => {
    markComplete(window.localStorage, "l1");
    render(<LessonTick lessonId="l1" doneLabel="完了" />);
    const tick = document.querySelector(".tick");
    expect(tick).toHaveAttribute("data-done", "true");
    expect(tick?.textContent).toContain("✓");
  });

  it("exposes completion as text to assistive tech, not only as a mark", () => {
    markComplete(window.localStorage, "l1");
    render(<LessonTick lessonId="l1" doneLabel="完了" />);
    expect(screen.getByText("完了")).toHaveClass("visually-hidden");
  });

  it("says nothing extra while the lesson is not done", () => {
    render(<LessonTick lessonId="l1" doneLabel="完了" />);
    expect(screen.queryByText("完了")).not.toBeInTheDocument();
  });
});

describe("LessonStatus", () => {
  it("renders nothing until the lesson is completed", () => {
    const { container } = render(<LessonStatus lessonId="l1" label="完了" />);
    expect(container).toBeEmptyDOMElement();
  });

  it("shows a visible text badge once completed", () => {
    markComplete(window.localStorage, "l1");
    render(<LessonStatus lessonId="l1" label="完了" />);
    expect(screen.getByText("完了")).toBeVisible();
  });
});
