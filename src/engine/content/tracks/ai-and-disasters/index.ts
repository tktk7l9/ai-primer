import type { Track } from "@/engine/content/types";
import { forecastingHeavyRain } from "./01-forecasting-heavy-rain";
import { floodForecasting } from "./02-flood-forecasting";
import { socialMediaReports } from "./03-social-media-reports";
import { disasterMisinformation } from "./04-disaster-misinformation";
import { damageAssessment } from "./05-damage-assessment";
import { supportingSurvivors } from "./06-supporting-survivors";

export const aiAndDisastersTrack: Track = {
  id: "ai-and-disasters",
  emoji: "⛑️",
  title: {
    ja: "防災とAI",
    en: "AI and Disasters",
  },
  summary: {
    ja: "災害の前・最中・後で、AIはどこまで役に立つのか。気象庁の大雨の予測とAI、観測所のない川の洪水予測、SNSの被災報告の要約、能登半島地震で広がった偽情報、罹災証明書のための被害認定、被災者を支える生成AIの計画。頼るべき公式の情報の確かめ方まで。",
    en: "How far can AI help before, during, and after a disaster? AI in Japan's heavy-rain forecasting, flood forecasts for ungauged rivers, summarizing damage reports on social media, the misinformation that spread after the Noto Peninsula earthquake, damage assessment for disaster victim certificates, and plans for generative AI that supports survivors — plus how to check the official information to rely on.",
  },
  // Follows a disaster in time order: prediction (rain, floods), the situation as it unfolds (social media reports,
  // misinformation), and the aftermath (damage assessment, survivor support), keeping official information as the anchor.
  lessons: [
    forecastingHeavyRain,
    floodForecasting,
    socialMediaReports,
    disasterMisinformation,
    damageAssessment,
    supportingSurvivors,
  ],
};
