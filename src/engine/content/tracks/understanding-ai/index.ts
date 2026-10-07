import type { Track } from "@/engine/content/types";
import { reasoningModels } from "./01-reasoning-models";
import { embeddingsAndRetrieval } from "./02-embeddings-and-retrieval";
import { diffusionModelsInDepth } from "./03-diffusion-models-in-depth";
import { readingBenchmarks } from "./04-reading-benchmarks";
import { aiSafetyPractices } from "./05-ai-safety-practices";
import { healthInformation } from "./06-health-information";

export const understandingAiTrack: Track = {
  id: "understanding-ai",
  emoji: "🔬",
  title: {
    ja: "AIをもっと理解する",
    en: "Understanding AI More Deeply",
  },
  summary: {
    ja: "推論モデル・埋め込みと検索・拡散モデルのしくみから、ベンチマークとシステムカードの読み方、健康・医療の情報の調べ方まで。",
    en: "How reasoning models, embeddings and retrieval, and diffusion models work — then how to read benchmarks and system cards, and how to look up health information.",
  },
  // Mechanisms first (reasoning, retrieval, image generation), then judging claims (benchmarks, safety reports),
  // then applying both to a high-stakes everyday task (health information).
  lessons: [
    reasoningModels,
    embeddingsAndRetrieval,
    diffusionModelsInDepth,
    readingBenchmarks,
    aiSafetyPractices,
    healthInformation,
  ],
};
