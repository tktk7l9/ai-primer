import type { Track } from "@/engine/content/types";
import { workUseCases } from "./01-work-use-cases";
import { lifeUseCases } from "./02-life-use-cases";
import { risks } from "./03-risks";
import { safeUsageChecklist } from "./04-safe-usage-checklist";
import { dataPrivacyAtWork } from "./05-data-privacy-at-work";
import { learningWithAi } from "./06-learning-with-ai";
import { aiRules } from "./07-ai-rules";

export const societyTrack: Track = {
  id: "society",
  emoji: "🧑‍🤝‍🧑",
  title: {
    ja: "活用・倫理・安全",
    en: "Use, Ethics, and Safety",
  },
  summary: {
    ja: "仕事・生活・学びでの活用から、リスク、情報の扱い、日本とEUのAIのルール、安全に使うためのチェックリストまで。",
    en: "Using AI at work, in daily life, and for learning; the risks; handling information; the rules for AI in Japan and the EU; and a checklist for using AI safely.",
  },
  // Lesson ids are stable keys for saved progress and do not imply order; the checklist stays last as the wrap-up.
  lessons: [workUseCases, lifeUseCases, learningWithAi, risks, dataPrivacyAtWork, aiRules, safeUsageChecklist],
};
