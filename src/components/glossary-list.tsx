"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { matchesQuery } from "@/engine/search/filter";

export interface GlossaryItem {
  readonly id: string;
  readonly term: string;
  readonly definition: string;
  readonly related: readonly { readonly href: string; readonly title: string }[];
}

export interface GlossaryListLabels {
  readonly filter: string;
  readonly relatedLessons: string;
  /** Result count, with {n} standing for the number. */
  readonly matchCount: string;
  readonly noMatch: string;
  readonly clearFilter: string;
}

/**
 * Glossary with an instant, lenient filter (SHIG 22, 51, 50, 12). Without JS the
 * whole list still renders; the filter only narrows it. The dl structure is kept
 * exactly as before (div > dt, dd, dd) for the definition-list audit.
 */
export function GlossaryList({
  items,
  labels,
}: {
  items: readonly GlossaryItem[];
  labels: GlossaryListLabels;
}) {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const shown = items.filter((g) => matchesQuery([g.term, g.definition], query));
  const filtering = query.trim() !== "";

  return (
    <>
      <div className="glossary-filter">
        <label htmlFor={inputId}>{labels.filter}</label>
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Announced as it changes so the effect of typing is heard, not only seen (SHIG 66, 94). */}
        <p className="glossary-count" role="status">
          {filtering ? labels.matchCount.replace("{n}", String(shown.length)) : ""}
        </p>
      </div>
      {shown.length === 0 && (
        <p className="glossary-empty">
          {labels.noMatch}{" "}
          <button
            type="button"
            className="link-button"
            onClick={() => {
              setQuery("");
              // The button unmounts once the list refills; without this, keyboard
              // focus falls back to <body> and the learner loses their place.
              inputRef.current?.focus();
            }}
          >
            {labels.clearFilter}
          </button>
        </p>
      )}
      <dl className="glossary-list">
        {shown.map((g) => (
          <div key={g.id} className="glossary-item">
            <dt>{g.term}</dt>
            <dd>{g.definition}</dd>
            {g.related.length > 0 && (
              <dd className="glossary-related">
                <span>{labels.relatedLessons}:</span>
                {g.related.map((lesson) => (
                  <Link key={lesson.href} href={lesson.href}>
                    {lesson.title}
                  </Link>
                ))}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </>
  );
}
