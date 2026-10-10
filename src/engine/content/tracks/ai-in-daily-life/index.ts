import type { Track } from "@/engine/content/types";
import { moneyQuestions } from "./01-money-questions";
import { legalAndContracts } from "./02-legal-and-contracts";
import { governmentProcedures } from "./03-government-procedures";
import { travelPlanning } from "./04-travel-planning";
import { languageLearning } from "./05-language-learning";
import { deviceAiSettings } from "./06-device-ai-settings";

export const aiInDailyLifeTrack: Track = {
  id: "ai-in-daily-life",
  emoji: "🏠",
  title: {
    ja: "暮らしでAIを使う",
    en: "Using AI in Daily Life",
  },
  summary: {
    ja: "お金・法律・行政手続きの相談から、旅行の計画、語学学習、家電やスマホのAI機能の設定まで——暮らしの場面ごとに、AIに任せてよいことと、自分と専門家で確かめることを分ける。",
    en: "From money, legal, and government questions to travel planning, language learning, and the AI settings on your phone and home devices — what to hand to AI in each part of life, and what to check yourself or with a professional.",
  },
  // High-stakes consultations first (money, legal, government), then everyday planning and learning
  // (travel, language), closing with the settings on the devices people already own.
  lessons: [moneyQuestions, legalAndContracts, governmentProcedures, travelPlanning, languageLearning, deviceAiSettings],
};
