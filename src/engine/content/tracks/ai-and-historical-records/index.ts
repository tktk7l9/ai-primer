import type { Track } from "@/engine/content/types";
import { digitalArchives } from "./01-digital-archives";
import { ocrFullTextSearch } from "./02-ocr-full-text-search";
import { kuzushijiRecognition } from "./03-kuzushiji-recognition";
import { crowdsourcedTranscription } from "./04-crowdsourced-transcription";
import { photoColorization } from "./05-photo-colorization";
import { reuseAndVerification } from "./06-reuse-and-verification";

export const aiAndHistoricalRecordsTrack: Track = {
  id: "ai-and-historical-records",
  emoji: "🏛️",
  title: {
    ja: "歴史資料とAI",
    en: "AI and Historical Records",
  },
  summary: {
    ja: "古い本、古文書、白黒写真。デジタル化した歴史資料を、AIはどう読み、どう探せるようにしているのか。デジタルアーカイブとジャパンサーチ、国立国会図書館のOCRと全文検索、くずし字を読むAI、市民とAIで進める翻刻、写真のカラー化、そして使える条件と元の資料での確かめ方。",
    en: "Old books, old documents, black-and-white photos: how does AI read digitized historical records and make them findable? Digital archives and Japan Search, the National Diet Library's OCR and full-text search, AI that reads kuzushiji, transcription by the public and AI together, photo colorization, and how to check usage conditions and the original materials.",
  },
  // From finding (archives, metadata, full-text search) through reading (OCR, kuzushiji, crowdsourced transcription)
  // to presenting (colorization) and reusing responsibly (licenses, checking AI answers against the originals).
  lessons: [
    digitalArchives,
    ocrFullTextSearch,
    kuzushijiRecognition,
    crowdsourcedTranscription,
    photoColorization,
    reuseAndVerification,
  ],
};
