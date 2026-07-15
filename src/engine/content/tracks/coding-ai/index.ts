import type { Track } from "@/engine/content/types";
import { codingAiOverview } from "./01-overview";
import { githubCopilot } from "./02-github-copilot";
import { agenticCli } from "./03-agentic-cli";
import { aiEditors } from "./04-ai-editors";
import { safeUsage } from "./05-safe-usage";

export const codingAiTrack: Track = {
  id: "coding-ai",
  emoji: "🛠️",
  title: {
    ja: "コーディングAI",
    en: "Coding AI",
  },
  summary: {
    ja: "補完・チャット・エージェント型の違いから、代表的ツール、安全な使い方まで。",
    en: "Completion, chat, and agentic tools — plus how to use them safely.",
  },
  lessons: [codingAiOverview, githubCopilot, agenticCli, aiEditors, safeUsage],
};
