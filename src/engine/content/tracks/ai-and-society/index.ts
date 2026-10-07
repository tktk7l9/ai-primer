import type { Track } from "@/engine/content/types";
import { jobsAndEmployment } from "./01-jobs-and-employment";
import { energyAndWater } from "./02-energy-and-water";
import { biasAndFairness } from "./03-bias-and-fairness";
import { accessibility } from "./04-accessibility";
import { aiScams } from "./05-ai-scams";
import { childrenAndAi } from "./06-children-and-ai";

export const aiAndSocietyTrack: Track = {
  id: "ai-and-society",
  emoji: "🌏",
  title: {
    ja: "AIと社会",
    en: "AI and Society",
  },
  summary: {
    ja: "仕事と雇用、電力と水、バイアスと公平性、アクセシビリティ、AIを使った詐欺、子どもとAI——社会の中のAIを、一次情報の数字と事実で見る。",
    en: "Jobs, electricity and water, bias and fairness, accessibility, AI-enabled scams, and children — AI's place in society, seen through figures and facts from primary sources.",
  },
  // From society-wide questions (jobs, energy) to fairness and inclusion, then protecting people (scams, children).
  lessons: [jobsAndEmployment, energyAndWater, biasAndFairness, accessibility, aiScams, childrenAndAi],
};
