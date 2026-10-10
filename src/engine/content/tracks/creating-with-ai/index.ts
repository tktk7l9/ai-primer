import type { Track } from "@/engine/content/types";
import { writingWithAi } from "./01-writing-with-ai";
import { makingImages } from "./02-making-images";
import { makingMusic } from "./03-making-music";
import { makingVideo } from "./04-making-video";
import { gamesAndCreativeCoding } from "./05-games-and-creative-coding";
import { publishingYourWork } from "./06-publishing-your-work";

export const creatingWithAiTrack: Track = {
  id: "creating-with-ai",
  emoji: "🪄",
  title: {
    ja: "AIと創作",
    en: "Creating with AI",
  },
  summary: {
    ja: "文章・画像・音楽・動画・ゲームをAIと作るときの、自分の作風の守り方、サービスの規約と公募・公開先のAI方針、表示と制作記録の残し方。",
    en: "Writing, images, music, video, and games with AI — keeping your own voice, what each service's terms and each contest's or platform's AI policy allow, and how to label your work and keep records.",
  },
  // Media in the order most hobbyists start (text, images, music, video), then code and games,
  // closing with publishing, which every medium funnels into.
  lessons: [writingWithAi, makingImages, makingMusic, makingVideo, gamesAndCreativeCoding, publishingYourWork],
};
