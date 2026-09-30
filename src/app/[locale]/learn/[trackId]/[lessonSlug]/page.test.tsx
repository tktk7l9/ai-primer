import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { ALL_LESSONS } from "@/engine/content";
import type { QuizSpec } from "@/engine/quiz/spec";
import ja from "@/i18n/dictionaries/ja";
import en from "@/i18n/dictionaries/en";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

const { default: LessonPage, generateMetadata, generateStaticParams } = await import("./page");

type Params = { locale: string; trackId: string; lessonSlug: string };
const params = (p: Params) => ({ params: Promise.resolve(p) });

const first = ALL_LESSONS[0];
const second = ALL_LESSONS[1];
const last = ALL_LESSONS[ALL_LESSONS.length - 1];

async function renderLesson(p: Params) {
  return render(await LessonPage(params(p)));
}

/** Answers one question the way a learner who knows the answer would. */
async function answerCorrectly(user: UserEvent, spec: QuizSpec, locale: "ja" | "en") {
  const dict = locale === "ja" ? ja : en;
  const group = screen.getByRole("group", { name: spec.prompt[locale] });
  const question = group.closest(".quiz-question") as HTMLElement;
  const pick = (label: string) => user.click(within(group).getByRole("button", { name: label }));
  switch (spec.kind) {
    case "single":
      await pick(spec.choices[spec.correctIndex][locale]);
      break;
    case "multi":
      for (const i of spec.correctIndexes) await pick(spec.choices[i][locale]);
      break;
    case "boolean":
      await pick(spec.answer ? dict.lesson.trueLabel : dict.lesson.falseLabel);
      break;
    case "order":
      for (const item of spec.items) await pick(item[locale]);
      break;
  }
  await user.click(within(question).getByRole("button", { name: dict.lesson.check }));
  expect(within(question).getByRole("status")).toHaveTextContent(dict.lesson.correct);
}

beforeEach(() => window.localStorage.clear());

describe("LessonPage", () => {
  it("pre-renders every lesson in both languages", () => {
    expect(generateStaticParams()).toHaveLength(ALL_LESSONS.length * 2);
  });

  it("shows the lesson title, body, sources and a way back to its track", async () => {
    await renderLesson({ locale: "ja", trackId: first.track.id, lessonSlug: first.lesson.slug });
    expect(screen.getByRole("heading", { level: 1, name: first.lesson.title.ja })).toBeInTheDocument();
    const crumbs = screen.getByRole("navigation", { name: ja.nav.breadcrumb });
    expect(within(crumbs).getByRole("link", { name: first.track.title.ja })).toHaveAttribute(
      "href",
      `/ja/learn/${first.track.id}`,
    );
    expect(screen.getByRole("heading", { name: new RegExp(ja.lesson.sourcesHeading) })).toBeInTheDocument();
    expect(screen.getByText(ja.lesson.lastVerified, { exact: false })).toBeInTheDocument();
  });

  it("labels the outline and pager landmarks in Japanese on Japanese pages", async () => {
    await renderLesson({ locale: "ja", trackId: second.track.id, lessonSlug: second.lesson.slug });
    expect(screen.getAllByRole("navigation", { name: ja.nav.trackOutline }).length).toBeGreaterThan(0);
    const pager = screen.getByRole("navigation", { name: ja.nav.lessonPager });
    expect(within(pager).getByRole("link", { name: new RegExp(first.lesson.title.ja) })).toBeInTheDocument();
    expect(screen.queryByRole("navigation", { name: /Track outline|Lesson pagination/ })).toBeNull();
  });

  it("marks the lesson complete and offers the next lesson after every quiz answer is right", async () => {
    const user = userEvent.setup();
    await renderLesson({ locale: "ja", trackId: first.track.id, lessonSlug: first.lesson.slug });
    const meta = document.querySelector(".lesson-meta") as HTMLElement;
    expect(within(meta).queryByText(ja.lesson.completed)).toBeNull();

    for (const spec of first.lesson.quiz) await answerCorrectly(user, spec, "ja");

    expect(screen.getByText(ja.lesson.completedNotice)).toBeInTheDocument();
    expect(within(meta).getByText(ja.lesson.completed)).toBeVisible();
    expect(
      screen.getByRole("link", { name: `${ja.lesson.next}: ${second.lesson.title.ja} →` }),
    ).toHaveAttribute("href", `/ja/learn/${second.track.id}/${second.lesson.slug}`);
  });

  it("sends the learner back to the course after the final lesson", async () => {
    const user = userEvent.setup();
    await renderLesson({ locale: "en", trackId: last.track.id, lessonSlug: last.lesson.slug });
    for (const spec of last.lesson.quiz) await answerCorrectly(user, spec, "en");
    expect(screen.getByRole("link", { name: en.lesson.backToCourse })).toHaveAttribute("href", "/en");
  });

  it("rejects unknown lessons and locales with a 404", async () => {
    await expect(
      LessonPage(params({ locale: "ja", trackId: first.track.id, lessonSlug: "no-such-lesson" })),
    ).rejects.toThrow("NEXT_NOT_FOUND");
    await expect(
      LessonPage(params({ locale: "fr", trackId: first.track.id, lessonSlug: first.lesson.slug })),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("builds localized metadata with language alternates", async () => {
    const meta = await generateMetadata(
      params({ locale: "en", trackId: first.track.id, lessonSlug: first.lesson.slug }),
    );
    expect(meta.title).toBe(first.lesson.title.en);
    expect(meta.alternates?.languages).toEqual({
      ja: `/ja/learn/${first.track.id}/${first.lesson.slug}`,
      en: `/en/learn/${first.track.id}/${first.lesson.slug}`,
    });
    expect(await generateMetadata(params({ locale: "en", trackId: "x", lessonSlug: "y" }))).toEqual({});
  });
});
