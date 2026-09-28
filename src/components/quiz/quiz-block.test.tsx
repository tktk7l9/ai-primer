import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QuizBlock } from "./quiz-block";
import type { QuizSpec } from "@/engine/quiz/spec";
import ja from "@/i18n/dictionaries/ja";

const L = (s: string) => ({ ja: s, en: s });

const single: QuizSpec = {
  kind: "single",
  prompt: L("1+1は?"),
  choices: [L("1"), L("2"), L("3")],
  correctIndex: 1,
  explanation: L("1+1=2です"),
};

const multi: QuizSpec = {
  kind: "multi",
  prompt: L("偶数を選べ"),
  choices: [L("1"), L("2"), L("3"), L("4")],
  correctIndexes: [1, 3],
  explanation: L("2と4が偶数です"),
};

const bool: QuizSpec = {
  kind: "boolean",
  prompt: L("空は青い"),
  answer: true,
  explanation: L("その通り"),
};

const order: QuizSpec = {
  kind: "order",
  prompt: L("小さい順に並べよ"),
  items: [L("一"), L("二"), L("三")],
  explanation: L("一→二→三の順です"),
};

beforeEach(() => {
  window.localStorage.clear();
  cleanup();
});

describe("QuizBlock", () => {
  it("renders nothing when the quiz has no questions", () => {
    const { container } = render(
      <QuizBlock lessonId="l1" quiz={[]} locale="ja" dict={ja} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("single choice: picking the right answer and checking shows correct", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
    expect(screen.getByText(/1\+1=2です/)).toBeInTheDocument();
  });

  it("single choice: a wrong answer shows incorrect without the explanation", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.incorrect)).toBeInTheDocument();
    expect(screen.queryByText(/1\+1=2です/)).not.toBeInTheDocument();
  });

  it("the check button is disabled before answering", () => {
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    expect(screen.getByRole("button", { name: ja.lesson.check })).toBeDisabled();
  });

  it("choosing again resets the state", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.incorrect)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: ja.lesson.reset }));
    expect(screen.queryByText(ja.lesson.incorrect)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: ja.lesson.check })).toBeDisabled();
  });

  it("keeps keyboard focus inside the question across check and reset", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    const choices = screen.getAllByRole("button", { name: /^\d+$/ });
    expect(document.body).toHaveFocus();
    await user.click(choices[0]);
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    // The check button is now disabled; focus moves to the reset action, not <body>.
    expect(screen.getByRole("button", { name: ja.lesson.reset })).toHaveFocus();
    await user.keyboard("{Enter}");
    // The reset button unmounts; focus returns to the first choice.
    expect(choices[0]).toHaveFocus();
  });

  it("multiple choice: the right combination is correct", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[multi]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "4" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
  });

  it("true/false: can select and be judged", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[bool]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: ja.lesson.trueLabel }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
  });

  it("ordering: picking in the right order from the displayed (shuffled) order is correct", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="order-lesson" quiz={[order]} locale="ja" dict={ja} />);
    // The display is shuffled, so identify items by text and click them in the correct order (一 -> 二 -> 三)
    await user.click(screen.getByRole("button", { name: /一/ }));
    await user.click(screen.getByRole("button", { name: /二/ }));
    await user.click(screen.getByRole("button", { name: /三/ }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
  });

  it("saves progress to localStorage when every question is correct", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="lesson-x" quiz={[single, bool]} locale="ja" dict={ja} />);
    const checkButtons = () => screen.getAllByRole("button", { name: ja.lesson.check });

    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(checkButtons()[0]);
    await user.click(screen.getByRole("button", { name: ja.lesson.trueLabel }));
    await user.click(checkButtons()[1]);

    const raw = window.localStorage.getItem("ai-primer:progress:v1");
    expect(JSON.parse(raw ?? "[]")).toContain("lesson-x");
  });

  it("does not save progress when any question is wrong", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="lesson-y" quiz={[single, bool]} locale="ja" dict={ja} />);
    const checkButtons = () => screen.getAllByRole("button", { name: ja.lesson.check });

    await user.click(screen.getByRole("button", { name: "1" })); // Incorrect
    await user.click(checkButtons()[0]);
    await user.click(screen.getByRole("button", { name: ja.lesson.trueLabel }));
    await user.click(checkButtons()[1]);

    const raw = window.localStorage.getItem("ai-primer:progress:v1");
    expect(JSON.parse(raw ?? "[]")).not.toContain("lesson-y");
  });

  it("shows English choices in the English locale", () => {
    const enSingle: QuizSpec = {
      kind: "single",
      prompt: { ja: "質問", en: "Question" },
      choices: [{ ja: "選択肢A", en: "Choice A" }],
      correctIndex: 0,
      explanation: { ja: "解説", en: "Explanation" },
    };
    render(<QuizBlock lessonId="l1" quiz={[enSingle]} locale="en" dict={ja} />);
    expect(screen.getByText("Question")).toBeInTheDocument();
    expect(screen.getByText("Choice A")).toBeInTheDocument();
  });

  it("labels each choice group with its prompt instead of a mismatched radiogroup", () => {
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    expect(screen.queryByRole("radiogroup")).not.toBeInTheDocument();
    expect(screen.getByRole("group", { name: "1+1は?" })).toBeInTheDocument();
  });

  it("states the rules for multi-select and ordering questions up front", () => {
    render(<QuizBlock lessonId="l1" quiz={[multi, order]} locale="ja" dict={ja} />);
    expect(screen.getByText(ja.lesson.multiHint)).toBeInTheDocument();
    expect(screen.getByText(ja.lesson.orderHint)).toBeInTheDocument();
  });

  it("announces the result through a live status region", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getAllByRole("status").some((el) => el.textContent === ja.lesson.correct)).toBe(
      true,
    );
  });

  it("shows a completion notice with the next lesson once every answer is right", async () => {
    const user = userEvent.setup();
    render(
      <QuizBlock
        lessonId="l1"
        quiz={[single]}
        locale="ja"
        dict={ja}
        next={{ href: "/ja/learn/t/next", title: "Next one" }}
        courseHref="/ja"
      />,
    );
    expect(screen.queryByText(ja.lesson.completedNotice)).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.completedNotice)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Next one/ })).toHaveAttribute(
      "href",
      "/ja/learn/t/next",
    );
  });

  it("points back to the course after the very last lesson", async () => {
    const user = userEvent.setup();
    render(
      <QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} next={null} courseHref="/ja" />,
    );
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByRole("link", { name: ja.lesson.backToCourse })).toHaveAttribute("href", "/ja");
  });
});
