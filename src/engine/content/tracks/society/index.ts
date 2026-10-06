import type { Track } from "@/engine/content/types";
import { workUseCases } from "./01-work-use-cases";
import { lifeUseCases } from "./02-life-use-cases";
import { risks } from "./03-risks";
import { safeUsageChecklist } from "./04-safe-usage-checklist";
import { dataPrivacyAtWork } from "./05-data-privacy-at-work";

export const societyTrack: Track = {
  id: "society",
  emoji: "🧑‍🤝‍🧑",
  title: {
    ja: "活用・倫理・安全",
    en: "Use, Ethics, and Safety",
  },
  summary: {
    ja: "仕事・生活での活用事例から、リスク、安全に使うためのチェックリストまで。",
    en: "Use cases at work and in life, the risks involved, and a checklist for using AI safely.",
  },
  // Lesson ids are stable keys for saved progress and do not imply order; the checklist stays last as the wrap-up.
  lessons: [workUseCases, lifeUseCases, risks, dataPrivacyAtWork, safeUsageChecklist],
};
