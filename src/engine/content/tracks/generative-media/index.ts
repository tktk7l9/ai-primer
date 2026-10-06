import type { Track } from "@/engine/content/types";
import { imageGenerationMechanism } from "./01-image-generation-mechanism";
import { imageGenerationPractice } from "./02-image-generation-practice";
import { videoGeneration } from "./03-video-generation";
import { musicVoiceGeneration } from "./04-music-voice-generation";
import { rightsAndLicensing } from "./05-rights-and-licensing";
import { copyrightInJapan } from "./06-copyright-in-japan";
import { deepfakesAndProvenance } from "./07-deepfakes-and-provenance";

export const generativeMediaTrack: Track = {
  id: "generative-media",
  emoji: "🎨",
  title: {
    ja: "画像・動画・音楽生成",
    en: "Generating Images, Video, and Music",
  },
  summary: {
    ja: "拡散モデルの仕組みから、Veo・Suno・ElevenLabsなどのツール、米国と日本の著作権、ディープフェイクと来歴の確かめ方まで。",
    en: "How diffusion models work, tools like Veo, Suno, and ElevenLabs, copyright in the US and Japan, and how to check deepfakes and provenance.",
  },
  lessons: [
    imageGenerationMechanism,
    imageGenerationPractice,
    videoGeneration,
    musicVoiceGeneration,
    rightsAndLicensing,
    copyrightInJapan,
    deepfakesAndProvenance,
  ],
};
