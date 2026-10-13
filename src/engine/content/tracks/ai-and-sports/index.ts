import type { Track } from "@/engine/content/types";
import { offsideTechnology } from "./01-offside-technology";
import { gymnasticsJudging } from "./02-gymnastics-judging";
import { ballAndStrike } from "./03-ball-and-strike";
import { aiCommentary } from "./04-ai-commentary";
import { protectingAthletesOnline } from "./05-protecting-athletes-online";
import { humansAndMachines } from "./06-humans-and-machines";

export const aiAndSportsTrack: Track = {
  id: "ai-and-sports",
  emoji: "🏟️",
  title: {
    ja: "スポーツとAI",
    en: "AI and Sports",
  },
  summary: {
    ja: "審判の判定、中継の解説、選手の守り方。サッカーの半自動オフサイド、体操の採点支援、野球のストライク判定のチャレンジ制度、テニスのAIの解説、SNSの中傷から選手を守るAI。人と機械の役割の分け方まで。",
    en: "Officiating, broadcast commentary, and protecting athletes: semi-automated offside in soccer, judging support in gymnastics, the challenge system for ball-and-strike calls in baseball, AI commentary in tennis, and AI that protects athletes from online abuse — plus how roles are divided between people and machines.",
  },
  // Three officiating systems with different scopes for the machine (alert, support, challenge-only),
  // then fans (commentary) and athletes (online abuse), and a closing comparison of human and machine roles.
  lessons: [
    offsideTechnology,
    gymnasticsJudging,
    ballAndStrike,
    aiCommentary,
    protectingAthletesOnline,
    humansAndMachines,
  ],
};
