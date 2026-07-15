import type { Track } from "@/engine/content/types";
import { workUseCases } from "./01-work-use-cases";
import { lifeUseCases } from "./02-life-use-cases";
import { risks } from "./03-risks";
import { safeUsageChecklist } from "./04-safe-usage-checklist";

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
  lessons: [workUseCases, lifeUseCases, risks, safeUsageChecklist],
};
