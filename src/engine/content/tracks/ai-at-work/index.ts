import type { Track } from "@/engine/content/types";
import { meetingNotes } from "./01-meeting-notes";
import { draftingAndEditing } from "./02-drafting-and-editing";
import { translationAndLocalization } from "./03-translation-and-localization";
import { spreadsheetsAndData } from "./04-spreadsheets-and-data";
import { slidesAndImages } from "./05-slides-and-images";
import { automatingRoutineWork } from "./06-automating-routine-work";

export const aiAtWorkTrack: Track = {
  id: "ai-at-work",
  emoji: "💼",
  title: {
    ja: "仕事でAIを使う",
    en: "Using AI at Work",
  },
  summary: {
    ja: "会議の記録、メールや文書、翻訳、表計算、資料や画像、定型作業の自動化——日々の仕事でAIを使う手順と、人が確かめるべきところ。",
    en: "Meeting notes, emails and documents, translation, spreadsheets, slides and images, and automating routine work — how to use AI for everyday tasks, and what a person still has to check.",
  },
  lessons: [
    meetingNotes,
    draftingAndEditing,
    translationAndLocalization,
    spreadsheetsAndData,
    slidesAndImages,
    automatingRoutineWork,
  ],
};
