import type { Source } from "@/engine/content/types";
import type { Dictionary } from "@/i18n/dictionaries";

export function SourcesList({ sources, dict }: { sources: readonly Source[]; dict: Dictionary }) {
  return (
    <section className="sources">
      <h2>{dict.lesson.sourcesHeading}</h2>
      <ul>
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
