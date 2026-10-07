import { describe, expect, it } from "vitest";
import { ALL_LESSONS, TRACKS, lessonById, lessonBySlug, nextLesson, prevLesson, trackById } from "./index";
import { TRACK_IDS } from "./types";
import { GLOSSARY } from "./glossary";
import { MODELS } from "./models";
import { TIMELINE } from "./timeline";
import { renderMarkdown } from "@/engine/markdown/render";
import { parseISODate } from "@/engine/freshness/staleness";
import { locales } from "@/i18n/config";

// Checks the integrity of all content across the board (the css-atelier content.test.ts approach).
// New lessons are picked up automatically by the parameterized tests here.

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

describe("track structure", () => {
  it("track ids are unique and only defined TrackIds", () => {
    const ids = TRACKS.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(TRACK_IDS).toContain(id);
  });

  it("track title/summary/emoji are non-empty in every locale", () => {
    for (const track of TRACKS) {
      expect(track.emoji.length).toBeGreaterThan(0);
      for (const locale of locales) {
        expect(track.title[locale].trim().length).toBeGreaterThan(0);
        expect(track.summary[locale].trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("lesson ids are globally unique and slugs unique within a track", () => {
    const ids = ALL_LESSONS.map((ref) => ref.lesson.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const track of TRACKS) {
      const slugs = track.lessons.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });

  it("lesson ids follow the `<trackId>-NN` form", () => {
    for (const { track, lesson } of ALL_LESSONS) {
      expect(lesson.id).toMatch(new RegExp(`^${track.id}-\\d{2}$`));
    }
  });

  it("internal links in lesson bodies stay inside the body's locale and resolve", () => {
    const staticPages = new Set(["models", "glossary", "timeline"]);
    for (const { lesson } of ALL_LESSONS) {
      for (const locale of locales) {
        for (const [, href] of lesson.body[locale].matchAll(/\]\((\/[^)\s]*)\)/g)) {
          // Every page lives under /[locale], so a bare "/models" is a 404.
          expect(href.startsWith(`/${locale}/`), `${lesson.id} (${locale}): ${href}`).toBe(true);
          const path = href.slice(locale.length + 2).split("#")[0];
          const [section, trackId, slug] = path.split("/");
          const resolves =
            section === "learn"
              ? slug
                ? lessonBySlug(trackId, slug) !== undefined
                : trackById(trackId) !== undefined
              : staticPages.has(path);
          expect(resolves, `${lesson.id} (${locale}): ${href} does not resolve`).toBe(true);
        }
      }
    }
  });
});

describe.each(ALL_LESSONS.map((ref) => [ref.lesson.id, ref] as const))(
  "lesson %s",
  (_id, { lesson }) => {
    it("title/summary/body are non-empty in every locale", () => {
      for (const locale of locales) {
        expect(lesson.title[locale].trim().length).toBeGreaterThan(0);
        expect(lesson.summary[locale].trim().length).toBeGreaterThan(0);
        expect(lesson.body[locale].trim().length).toBeGreaterThan(0);
      }
    });

    it("slug is URL-safe kebab-case", () => {
      expect(lesson.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    });

    it("has at least one quiz question and each is consistent", () => {
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

    it("glossaryRefs resolve to term ids in glossary.ts", () => {
      const glossaryIds = new Set(GLOSSARY.map((g) => g.id));
      for (const ref of lesson.glossaryRefs ?? []) {
        expect(glossaryIds.has(ref), `glossaryRef '${ref}' is not defined`).toBe(true);
      }
    });

    it("has at least one source and each starts with https", () => {
      expect(lesson.sources.length).toBeGreaterThan(0);
      for (const source of lesson.sources) {
        expect(source.label.trim().length).toBeGreaterThan(0);
        expect(source.url).toMatch(/^https:\/\//);
      }
    });

    it("lastVerified is a valid date not in the future", () => {
      const date = parseISODate(lesson.lastVerified);
      expect(date).not.toBeNull();
      // lastVerified is a calendar date written in Japan (UTC+9). That day starts 9 hours
      // before its UTC midnight, so compare from there; otherwise today's date counts as
      // "future" every morning until 09:00 JST.
      expect(date!.getTime() - JST_OFFSET_MS).toBeLessThanOrEqual(Date.now());
    });

    it("body converts as Markdown", () => {
      for (const locale of locales) {
        const html = renderMarkdown(lesson.body[locale]);
        expect(html.length).toBeGreaterThan(0);
      }
    });

    it("bold markers all render (no literal ** left on the page)", () => {
      // CommonMark cannot close ** right after a full-width bracket, quote, or % when a letter follows
      // ("**世界保健機関（WHO）**は"), so the asterisks show up as text. Close the bold before the
      // bracket instead: "**世界保健機関**（WHO）は".
      for (const locale of locales) {
        const html = renderMarkdown(lesson.body[locale]).replace(/<code>[\s\S]*?<\/code>/g, "");
        expect(html, `${lesson.id} (${locale})`).not.toContain("**");
      }
    });
  },
);

describe("glossary", () => {
  it("ids are unique", () => {
    const ids = GLOSSARY.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("term/definition are non-empty in every locale; sources and lastVerified are valid", () => {
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

  it("relatedLessonIds resolve to existing lessons", () => {
    const lessonIds = new Set(ALL_LESSONS.map((ref) => ref.lesson.id));
    for (const g of GLOSSARY) {
      for (const id of g.relatedLessonIds) {
        expect(lessonIds.has(id), `relatedLessonId '${id}' is not defined (glossary: ${g.id})`).toBe(true);
      }
    }
  });
});

describe("models", () => {
  it("ids are unique", () => {
    const ids = MODELS.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("vendor/name/strengths are non-empty; sources and lastVerified are valid", () => {
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

  it("kind is one of the defined kinds", () => {
    const kinds = ["chat", "coding", "image", "video", "music"];
    for (const m of MODELS) {
      expect(kinds).toContain(m.kind);
    }
  });
});

describe("timeline", () => {
  it("ids are unique", () => {
    const ids = TIMELINE.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("title/summary are non-empty, dates valid, and sources present", () => {
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

  it("is sorted oldest first", () => {
    const dates = TIMELINE.map((e) => e.date);
    const sorted = [...dates].sort();
    expect(dates).toEqual(sorted);
  });
});

describe("lookup functions", () => {
  const first = ALL_LESSONS[0];
  const second = ALL_LESSONS[1];
  const last = ALL_LESSONS[ALL_LESSONS.length - 1];

  it("trackById returns hit / miss", () => {
    expect(trackById(first.track.id)?.id).toBe(first.track.id);
    expect(trackById("no-such-track")).toBeUndefined();
  });

  it("lessonById returns hit / miss", () => {
    expect(lessonById(first.lesson.id)?.lesson.id).toBe(first.lesson.id);
    expect(lessonById("no-such-lesson")).toBeUndefined();
  });

  it("lessonBySlug returns hit / miss", () => {
    expect(lessonBySlug(first.track.id, first.lesson.slug)?.lesson.id).toBe(first.lesson.id);
    expect(lessonBySlug(first.track.id, "no-such-slug")).toBeUndefined();
    expect(lessonBySlug("no-such-track", first.lesson.slug)).toBeUndefined();
  });

  it("nextLesson returns the next in study order, and null at the end or for unknown ids", () => {
    expect(nextLesson(first.lesson.id)?.lesson.id).toBe(second.lesson.id);
    expect(nextLesson(last.lesson.id)).toBeNull();
    expect(nextLesson("no-such-lesson")).toBeNull();
  });

  it("prevLesson returns the previous in study order, and null at the start or for unknown ids", () => {
    expect(prevLesson(second.lesson.id)?.lesson.id).toBe(first.lesson.id);
    expect(prevLesson(first.lesson.id)).toBeNull();
    expect(prevLesson("no-such-lesson")).toBeNull();
  });
});
