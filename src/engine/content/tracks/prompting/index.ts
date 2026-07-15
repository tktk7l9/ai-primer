import type { Track } from "@/engine/content/types";
import { basicStructure } from "./01-basic-structure";
import { fewShot } from "./02-few-shot";
import { stepByStep } from "./03-step-by-step";
import { iteration } from "./04-iteration";
import { commonMistakes } from "./05-common-mistakes";

export const promptingTrack: Track = {
  id: "prompting",
  emoji: "🖋️",
  title: {
    ja: "プロンプト術",
    en: "Prompting Techniques",
  },
  summary: {
    ja: "基本構造・例示・段階的思考から、反復改善とよくある失敗まで。",
    en: "Basic structure, examples, step-by-step reasoning, iteration, and common mistakes.",
  },
  lessons: [basicStructure, fewShot, stepByStep, iteration, commonMistakes],
};
