import type { Track } from "@/engine/content/types";
import { birds } from "./01-birds";
import { photoIdentification } from "./02-photo-identification";
import { cameraTraps } from "./03-camera-traps";
import { oceanSounds } from "./04-ocean-sounds";
import { checkingSuggestions } from "./05-checking-suggestions";
import { protectingLocations } from "./06-protecting-locations";

export const aiAndNatureTrack: Track = {
  id: "ai-and-nature",
  emoji: "🦉",
  title: {
    ja: "生きものとAI",
    en: "AI and Nature",
  },
  summary: {
    ja: "鳥の声、写真の生きもの、自動撮影カメラ、海のクジラの歌。AIは膨大な記録を仕分けて、生きものの調査と保全を速めている。AIの候補を人が確かめるしくみと、希少な生きものの居場所を守る公開データのルールまで。",
    en: "Birdsong, living things in photos, camera traps, and whale songs in the ocean: AI sorts through huge volumes of records to speed up wildlife surveys and conservation. Also covered: how people verify AI suggestions, and the rules for public data that protect where rare species live.",
  },
  // Four ways AI handles wildlife records (sound, photos, camera traps, ocean audio),
  // then how human verification keeps the data honest, closing with protecting rare species' locations.
  lessons: [birds, photoIdentification, cameraTraps, oceanSounds, checkingSuggestions, protectingLocations],
};
