import type { Track } from "@/engine/content/types";
import { imageGenerationMechanism } from "./01-image-generation-mechanism";
import { imageGenerationPractice } from "./02-image-generation-practice";
import { videoGeneration } from "./03-video-generation";
import { musicVoiceGeneration } from "./04-music-voice-generation";
import { rightsAndLicensing } from "./05-rights-and-licensing";

export const generativeMediaTrack: Track = {
  id: "generative-media",
  emoji: "🎨",
  title: {
    ja: "画像・動画・音楽生成",
    en: "Generating Images, Video, and Music",
  },
  summary: {
    ja: "拡散モデルの仕組みから、Sora・Veo・Suno・ElevenLabs、権利の話まで。",
    en: "How diffusion models work, tools like Sora, Veo, Suno, and ElevenLabs, and the rights involved.",
  },
  lessons: [
    imageGenerationMechanism,
    imageGenerationPractice,
    videoGeneration,
    musicVoiceGeneration,
    rightsAndLicensing,
  ],
};
