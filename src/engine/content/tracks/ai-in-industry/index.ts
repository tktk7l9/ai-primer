import type { Track } from "@/engine/content/types";
import { verticalAndPhysicalAi } from "./01-vertical-and-physical-ai";
import { smartAgriculture } from "./02-smart-agriculture";
import { constructionAutomation } from "./03-construction-automation";
import { infrastructureInspection } from "./04-infrastructure-inspection";
import { logistics } from "./05-logistics";
import { careTechnology } from "./06-care-technology";

export const aiInIndustryTrack: Track = {
  id: "ai-in-industry",
  emoji: "🏗️",
  title: {
    ja: "現場で働くAI",
    en: "AI on the Front Lines",
  },
  summary: {
    ja: "働き手が減る日本の現場で、AIと機械に何が期待され、何が課題なのか。国の計画のバーティカルAIとフィジカルAI、農業のスマート技術、建設のオートメーション化、橋やトンネルの点検、物流の2024年問題、介護の見守り機器とAI。",
    en: "What is expected of AI and machines on Japan's front lines as the workforce shrinks, and what stands in the way: the vertical and physical AI in the national plan, smart farming technology, automated construction, inspecting bridges and tunnels, the logistics \"2024 problem,\" and monitoring devices and AI in care.",
  },
  // From the national picture (fewer workers, vertical and physical AI) through five front lines — farming,
  // construction, inspection, logistics, care — each with what is automated, what people keep, and how to read the numbers.
  lessons: [verticalAndPhysicalAi, smartAgriculture, constructionAutomation, infrastructureInspection, logistics, careTechnology],
};
