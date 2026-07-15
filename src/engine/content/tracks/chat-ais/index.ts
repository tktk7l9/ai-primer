import type { Track } from "@/engine/content/types";
import { chatgptLesson } from "./01-chatgpt";
import { claudeLesson } from "./02-claude";
import { geminiLesson } from "./03-gemini";
import { grokAndOthers } from "./04-grok-and-others";
import { choosing } from "./05-choosing";

export const chatAisTrack: Track = {
  id: "chat-ais",
  emoji: "💬",
  title: {
    ja: "主要チャットAI比較",
    en: "Comparing the Major Chat AIs",
  },
  summary: {
    ja: "ChatGPT・Claude・Gemini・Grok——それぞれの開発元と強み、選び方。",
    en: "ChatGPT, Claude, Gemini, Grok — who makes them, what they're good at, and how to choose.",
  },
  lessons: [chatgptLesson, claudeLesson, geminiLesson, grokAndOthers, choosing],
};
