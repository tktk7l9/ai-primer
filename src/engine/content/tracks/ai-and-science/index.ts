import type { Track } from "@/engine/content/types";
import { nobelPrizes2024 } from "./01-nobel-prizes-2024";
import { proteinStructure } from "./02-protein-structure";
import { weatherForecasting } from "./03-weather-forecasting";
import { mathematics } from "./04-mathematics";
import { medicalAi } from "./05-medical-ai";
import { researchAndPublishing } from "./06-research-and-publishing";

export const aiAndScienceTrack: Track = {
  id: "ai-and-science",
  emoji: "🔬",
  title: {
    ja: "AIと科学",
    en: "AI and Science",
  },
  summary: {
    ja: "AIを生んだ科学と、AIが手伝う科学。2024年のノーベル賞、タンパク質の構造予測、天気予報、数学の証明、医療機器、研究と論文のルールから、何ができるようになり、何が残っているかを確かめる。",
    en: "The science behind AI, and the science AI now helps with: the 2024 Nobel Prizes, protein structure prediction, weather forecasting, mathematical proof, medical devices, and the rules of research publishing — what became possible, and what is still open.",
  },
  // From the prizes that frame the topic, through three fields where AI changed the work (biology, weather, mathematics),
  // to regulated use in medicine, closing with the rules that keep humans accountable in research.
  lessons: [nobelPrizes2024, proteinStructure, weatherForecasting, mathematics, medicalAi, researchAndPublishing],
};
