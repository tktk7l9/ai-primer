import { isStale } from "@/engine/freshness/staleness";
import { formatVerified } from "@/engine/freshness/staleness";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function FreshnessBadge({
  lastVerified,
  locale,
  dict,
}: {
  lastVerified: string;
  locale: Locale;
  dict: Dictionary;
}) {
  const stale = isStale(lastVerified, new Date());
  return (
    <span
      className="freshness-badge"
      data-stale={stale}
      title={stale ? dict.lesson.staleNotice : undefined}
    >
      {dict.lesson.lastVerified}: {formatVerified(lastVerified, locale)}
    </span>
  );
}
