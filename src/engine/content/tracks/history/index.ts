import type { Track } from "@/engine/content/types";
import { dartmouth } from "./01-dartmouth";
import { aiWinter } from "./02-ai-winter";
import { deepLearningRevolution } from "./03-deep-learning-revolution";
import { transformer } from "./04-transformer";
import { chatgptMoment } from "./05-chatgpt-moment";
import { afterChatgpt } from "./06-after-chatgpt";

export const historyTrack: Track = {
  id: "history",
  emoji: "📜",
  title: {
    ja: "AIの歴史",
    en: "The History of AI",
  },
  summary: {
    ja: "1956年のダートマス会議から、深層学習革命・Transformer・ChatGPTモーメント、そしてその後の流れまで。",
    en: "From the 1956 Dartmouth conference to the deep learning revolution, the Transformer, the ChatGPT moment, and what came after.",
  },
  lessons: [dartmouth, aiWinter, deepLearningRevolution, transformer, chatgptMoment, afterChatgpt],
};
