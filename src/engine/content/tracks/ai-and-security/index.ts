import type { Track } from "@/engine/content/types";
import { bigPicture } from "./01-big-picture";
import { jailbreaks } from "./02-jailbreaks";
import { dataPoisoning } from "./03-data-poisoning";
import { supplyChain } from "./04-supply-chain";
import { attackersUsingAi } from "./05-attackers-using-ai";
import { aiForDefense } from "./06-ai-for-defense";

export const aiAndSecurityTrack: Track = {
  id: "ai-and-security",
  emoji: "🛡️",
  title: {
    ja: "AIとセキュリティ",
    en: "AI and Security",
  },
  summary: {
    ja: "AIは攻撃の的にも、攻撃の道具にも、守りの道具にもなる。日本の「10大脅威」に初めて入ったAIのリスク、安全対策をすり抜けるジェイルブレイク、学習データに仕込まれる毒、モデルファイルとパッケージの落とし穴、報告書で見る攻撃者のAIの使い方、脆弱性を見つけて直す守る側のAI。",
    en: "AI can be the target of an attack, a tool for attackers, and a tool for defenders: the AI risk that entered Japan's list of 10 major threats for the first time, jailbreaks that slip past safeguards, poison slipped into training data, pitfalls in model files and packages, how attackers use AI according to threat reports, and defenders using AI to find and fix vulnerabilities.",
  },
  // From the map of the field, through attacks on AI itself (inputs, training data, supply chain), to attackers using
  // AI and defenders using AI, closing with a checklist that ties the track together.
  lessons: [bigPicture, jailbreaks, dataPoisoning, supplyChain, attackersUsingAi, aiForDefense],
};
