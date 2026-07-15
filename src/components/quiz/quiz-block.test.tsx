import { describe, expect, it, beforeEach, vi } from "vitest";
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
  it("クイズが0問なら何も描画しない", () => {
    const { container } = render(
      <QuizBlock lessonId="l1" quiz={[]} locale="ja" dict={ja} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("単一選択: 正解を選んで答え合わせすると正解と表示される", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
    expect(screen.getByText(/1\+1=2です/)).toBeInTheDocument();
  });

  it("単一選択: 不正解を選ぶと不正解と表示され、解説は出ない", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.incorrect)).toBeInTheDocument();
    expect(screen.queryByText(/1\+1=2です/)).not.toBeInTheDocument();
  });

  it("答え合わせ前はボタンが無効", () => {
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    expect(screen.getByRole("button", { name: ja.lesson.check })).toBeDisabled();
  });

  it("選び直すと状態がリセットされる", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[single]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.incorrect)).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: ja.lesson.reset }));
    expect(screen.queryByText(ja.lesson.incorrect)).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: ja.lesson.check })).toBeDisabled();
  });

  it("複数選択: 正解の組み合わせを選んで正解になる", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[multi]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "4" }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
  });

  it("○×問題: 選択して判定できる", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="l1" quiz={[bool]} locale="ja" dict={ja} />);
    await user.click(screen.getByRole("button", { name: ja.lesson.trueLabel }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
  });

  it("並べ替え: 表示順(シャッフル後)で正しい順に選ぶと正解になる", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="order-lesson" quiz={[order]} locale="ja" dict={ja} />);
    // 表示はシャッフルされるため、テキストで見分けて正解順(一→二→三)にクリックする
    await user.click(screen.getByRole("button", { name: /一/ }));
    await user.click(screen.getByRole("button", { name: /二/ }));
    await user.click(screen.getByRole("button", { name: /三/ }));
    await user.click(screen.getByRole("button", { name: ja.lesson.check }));
    expect(screen.getByText(ja.lesson.correct)).toBeInTheDocument();
  });

  it("全問正解すると進捗がlocalStorageに保存される", async () => {
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

  it("1問でも不正解だと進捗は保存されない", async () => {
    const user = userEvent.setup();
    render(<QuizBlock lessonId="lesson-y" quiz={[single, bool]} locale="ja" dict={ja} />);
    const checkButtons = () => screen.getAllByRole("button", { name: ja.lesson.check });

    await user.click(screen.getByRole("button", { name: "1" })); // 不正解
    await user.click(checkButtons()[0]);
    await user.click(screen.getByRole("button", { name: ja.lesson.trueLabel }));
    await user.click(checkButtons()[1]);

    const raw = window.localStorage.getItem("ai-primer:progress:v1");
    expect(JSON.parse(raw ?? "[]")).not.toContain("lesson-y");
  });

  it("英語ロケールでは英語の選択肢が表示される", () => {
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
});
