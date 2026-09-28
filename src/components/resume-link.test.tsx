import { beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { markComplete } from "@/engine/progress/progress";
import ja from "@/i18n/dictionaries/ja";
import { ResumeLink } from "./resume-link";

const lessons = [
  { id: "a", href: "/ja/learn/t1/a", title: "Lesson A" },
  { id: "b", href: "/ja/learn/t1/b", title: "Lesson B" },
];

function renderLink() {
  return render(<ResumeLink lessons={lessons} startHref="/ja/learn/t1" dict={ja} />);
}

beforeEach(() => {
  window.localStorage.clear();
  cleanup();
});

describe("ResumeLink", () => {
  it("links to the first track with the start label when nothing is done", () => {
    renderLink();
    const link = screen.getByRole("link", { name: ja.home.startLearning });
    expect(link).toHaveAttribute("href", "/ja/learn/t1");
    expect(screen.queryByText(/Lesson/)).not.toBeInTheDocument();
  });

  it("jumps straight to the first incomplete lesson once progress exists", () => {
    markComplete(window.localStorage, "a");
    renderLink();
    const link = screen.getByRole("link", { name: ja.home.resumeLearning });
    expect(link).toHaveAttribute("href", "/ja/learn/t1/b");
    expect(screen.getByText(/Lesson B/)).toBeInTheDocument();
  });

  it("offers a review from the first lesson when everything is done", () => {
    markComplete(window.localStorage, "a");
    markComplete(window.localStorage, "b");
    renderLink();
    const link = screen.getByRole("link", { name: ja.home.reviewLearning });
    expect(link).toHaveAttribute("href", "/ja/learn/t1/a");
  });
});
