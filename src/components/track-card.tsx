import Link from "next/link";
import type { Track } from "@/engine/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ProgressMeter } from "./progress";

export function TrackCard({
  track,
  index,
  locale,
  dict,
}: {
  track: Track;
  index: number;
  locale: Locale;
  dict: Dictionary;
}) {
  const lessonIds = track.lessons.map((l) => l.id);
  return (
    <Link href={`/${locale}/learn/${track.id}`} className="track-card">
      <span className="specimen-tag">
        Track {String(index + 1).padStart(2, "0")} · {track.lessons.length}{" "}
        {dict.home.lessonsLabel}
      </span>
      <h2>
        <span className="track-emoji" aria-hidden="true">
          {track.emoji}
        </span>
        {track.title[locale]}
      </h2>
      <p>{track.summary[locale]}</p>
      <ProgressMeter lessonIds={lessonIds} label={dict.track.progress} />
    </Link>
  );
}
