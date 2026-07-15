import type { Track } from "@/engine/content/types";
import { attentionIntuition } from "./01-attention-intuition";
import { pretraining } from "./02-pretraining";
import { rlhf } from "./03-rlhf";
import { inferenceTemperature } from "./04-inference-temperature";
import { failurePatterns } from "./05-failure-patterns";

export const howLlmsWorkTrack: Track = {
  id: "how-llms-work",
  emoji: "⚙️",
  title: {
    ja: "LLMの仕組み",
    en: "How LLMs Work",
  },
  summary: {
    ja: "Attention・事前学習・RLHF・推論パラメータから、よくある失敗パターンまで。",
    en: "Attention, pre-training, RLHF, and inference parameters — plus the failure patterns they explain.",
  },
  lessons: [attentionIntuition, pretraining, rlhf, inferenceTemperature, failurePatterns],
};
