import { describe, expect, it } from "vitest";
import { ALL_LESSONS, TRACKS, lessonById, lessonBySlug, nextLesson, prevLesson, trackById } from "./index";
import { TRACK_IDS } from "./types";
import { GLOSSARY } from "./glossary";
import { MODELS } from "./models";
import { TIMELINE } from "./timeline";
import { renderMarkdown } from "@/engine/markdown/render";
import { parseISODate } from "@/engine/freshness/staleness";
import { locales } from "@/i18n/config";

// コンテンツ全体の整合性を横断検証する（css-atelier の content.test.ts 方式）。
// レッスンを追加するとここのパラメトライズが自動で対象に含める。

describe("トラック構成", () => {
  it("トラック id は定義済み TrackId のみで一意", () => {
    const ids = TRACKS.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(TRACK_IDS).toContain(id);
  });

  it("トラックの title/summary/emoji は全ロケール非空", () => {
    for (const track of TRACKS) {
      expect(track.emoji.length).toBeGreaterThan(0);
      for (const locale of locales) {
        expect(track.title[locale].trim().length).toBeGreaterThan(0);
        expect(track.summary[locale].trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("レッスン id は全体で一意・slug はトラック内で一意", () => {
    const ids = ALL_LESSONS.map((ref) => ref.lesson.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const track of TRACKS) {
      const slugs = track.lessons.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("レッスン id は `<trackId>-NN` 形式", () => {
    for (const { track, lesson } of ALL_LESSONS) {
      expect(lesson.id).toMatch(new RegExp(`^${track.id}-\\d{2}$`));
    }
  });
});

describe.each(ALL_LESSONS.map((ref) => [ref.lesson.id, ref] as const))(
  "レッスン %s",
  (_id, { lesson }) => {
    it("title/summary/body が全ロケール非空", () => {
      for (const locale of locales) {
        expect(lesson.title[locale].trim().length).toBeGreaterThan(0);
        expect(lesson.summary[locale].trim().length).toBeGreaterThan(0);
        expect(lesson.body[locale].trim().length).toBeGreaterThan(0);
      }
    });

    it("slug は URL 安全な kebab-case", () => {
      expect(lesson.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    });

    it("クイズが1問以上あり、各問が整合している", () => {
      expect(lesson.quiz.length).toBeGreaterThan(0);
      for (const q of lesson.quiz) {
        for (const locale of locales) {
          expect(q.prompt[locale].trim().length).toBeGreaterThan(0);
          expect(q.explanation[locale].trim().length).toBeGreaterThan(0);
        }
        switch (q.kind) {
          case "single":
            expect(q.choices.length).toBeGreaterThanOrEqual(2);
            expect(q.correctIndex).toBeGreaterThanOrEqual(0);
            expect(q.correctIndex).toBeLessThan(q.choices.length);
            break;
          case "multi":
            expect(q.choices.length).toBeGreaterThanOrEqual(2);
            expect(q.correctIndexes.length).toBeGreaterThan(0);
            expect(new Set(q.correctIndexes).size).toBe(q.correctIndexes.length);
            for (const i of q.correctIndexes) {
              expect(i).toBeGreaterThanOrEqual(0);
              expect(i).toBeLessThan(q.choices.length);
            }
            break;
          case "boolean":
            expect(typeof q.answer).toBe("boolean");
            break;
          case "order":
            expect(q.items.length).toBeGreaterThanOrEqual(2);
            break;
        }
      }
    });

    it("glossaryRefs は glossary.ts の用語 id に解決する", () => {
      const glossaryIds = new Set(GLOSSARY.map((g) => g.id));
      for (const ref of lesson.glossaryRefs ?? []) {
        expect(glossaryIds.has(ref), `glossaryRef '${ref}' が未定義`).toBe(true);
      }
    });

    it("出典が1件以上あり https で始まる", () => {
      expect(lesson.sources.length).toBeGreaterThan(0);
      for (const source of lesson.sources) {
        expect(source.label.trim().length).toBeGreaterThan(0);
        expect(source.url).toMatch(/^https:\/\//);
      }
    });

    it("lastVerified は有効な日付で未来でない", () => {
      const date = parseISODate(lesson.lastVerified);
      expect(date).not.toBeNull();
      expect(date!.getTime()).toBeLessThanOrEqual(Date.now());
    });

    it("body が Markdown として変換できる", () => {
      for (const locale of locales) {
        const html = renderMarkdown(lesson.body[locale]);
        expect(html.length).toBeGreaterThan(0);
      }
    });
  },
);

describe("glossary", () => {
  it("id は一意", () => {
    const ids = GLOSSARY.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("term/definition が全ロケール非空、出典・lastVerified が妥当", () => {
    for (const g of GLOSSARY) {
      for (const locale of locales) {
        expect(g.term[locale].trim().length).toBeGreaterThan(0);
        expect(g.definition[locale].trim().length).toBeGreaterThan(0);
      }
      expect(g.sources.length).toBeGreaterThan(0);
      for (const source of g.sources) {
        expect(source.url).toMatch(/^https:\/\//);
      }
      expect(parseISODate(g.lastVerified)).not.toBeNull();
    }
  });

  it("relatedLessonIds は実在するレッスンに解決する", () => {
    const lessonIds = new Set(ALL_LESSONS.map((ref) => ref.lesson.id));
    for (const g of GLOSSARY) {
      for (const id of g.relatedLessonIds) {
        expect(lessonIds.has(id), `relatedLessonId '${id}' が未定義 (glossary: ${g.id})`).toBe(true);
      }
    }
  });
});

describe("models", () => {
  it("id は一意", () => {
    const ids = MODELS.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("vendor/name/strengths が非空、出典・lastVerified が妥当", () => {
    for (const m of MODELS) {
      expect(m.vendor.trim().length).toBeGreaterThan(0);
      expect(m.name.trim().length).toBeGreaterThan(0);
      expect(m.officialUrl).toMatch(/^https:\/\//);
      for (const locale of locales) {
        expect(m.strengths[locale].trim().length).toBeGreaterThan(0);
      }
      expect(m.sources.length).toBeGreaterThan(0);
      for (const source of m.sources) {
        expect(source.url).toMatch(/^https:\/\//);
      }
      expect(parseISODate(m.lastVerified)).not.toBeNull();
    }
  });

  it("kind は既定の種別のみ", () => {
    const kinds = ["chat", "coding", "image", "video", "music"];
    for (const m of MODELS) {
      expect(kinds).toContain(m.kind);
    }
  });
});

describe("timeline", () => {
  it("id は一意", () => {
    const ids = TIMELINE.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("title/summary が非空、日付が妥当、出典がある", () => {
    for (const e of TIMELINE) {
      for (const locale of locales) {
        expect(e.title[locale].trim().length).toBeGreaterThan(0);
        expect(e.summary[locale].trim().length).toBeGreaterThan(0);
      }
      expect(parseISODate(e.date)).not.toBeNull();
      expect(e.sources.length).toBeGreaterThan(0);
      for (const source of e.sources) {
        expect(source.url).toMatch(/^https:\/\//);
      }
    }
  });

  it("日付が古い順に並んでいる", () => {
    const dates = TIMELINE.map((e) => e.date);
    const sorted = [...dates].sort();
    expect(dates).toEqual(sorted);
  });
});

describe("lookup 関数", () => {
  const first = ALL_LESSONS[0];
  const second = ALL_LESSONS[1];
  const last = ALL_LESSONS[ALL_LESSONS.length - 1];

  it("trackById は hit / miss を返す", () => {
    expect(trackById(first.track.id)?.id).toBe(first.track.id);
    expect(trackById("no-such-track")).toBeUndefined();
  });

  it("lessonById は hit / miss を返す", () => {
    expect(lessonById(first.lesson.id)?.lesson.id).toBe(first.lesson.id);
    expect(lessonById("no-such-lesson")).toBeUndefined();
  });

  it("lessonBySlug は hit / miss を返す", () => {
    expect(lessonBySlug(first.track.id, first.lesson.slug)?.lesson.id).toBe(first.lesson.id);
    expect(lessonBySlug(first.track.id, "no-such-slug")).toBeUndefined();
    expect(lessonBySlug("no-such-track", first.lesson.slug)).toBeUndefined();
  });

  it("nextLesson は学習順で次を返し、末尾と未知の id は null", () => {
    expect(nextLesson(first.lesson.id)?.lesson.id).toBe(second.lesson.id);
    expect(nextLesson(last.lesson.id)).toBeNull();
    expect(nextLesson("no-such-lesson")).toBeNull();
  });

  it("prevLesson は学習順で前を返し、先頭と未知の id は null", () => {
    expect(prevLesson(second.lesson.id)?.lesson.id).toBe(first.lesson.id);
    expect(prevLesson(first.lesson.id)).toBeNull();
    expect(prevLesson("no-such-lesson")).toBeNull();
  });
});
