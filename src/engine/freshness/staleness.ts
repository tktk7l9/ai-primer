import type { Locale } from "@/i18n/config";

/** Content unverified for longer than this is treated as stale. */
export const STALE_AFTER_DAYS = 90;

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Accepts only "yyyy-mm-dd" (null for dates that do not exist). */
export function parseISODate(iso: string): Date | null {
  const m = ISO_DATE.exec(iso);
  if (!m) return null;
  const [, y, mo, d] = m;
  const date = new Date(Date.UTC(Number(y), Number(mo) - 1, Number(d)));
  const valid =
    date.getUTCFullYear() === Number(y) &&
    date.getUTCMonth() === Number(mo) - 1 &&
    date.getUTCDate() === Number(d);
  return valid ? date : null;
}

/** Days elapsed from lastVerified to now (Infinity for invalid dates = always stale). */
export function daysSince(lastVerified: string, now: Date): number {
  const date = parseISODate(lastVerified);
  if (!date) return Infinity;
  return Math.floor((now.getTime() - date.getTime()) / 86_400_000);
}

export function isStale(
  lastVerified: string,
  now: Date,
  staleAfterDays: number = STALE_AFTER_DAYS,
): boolean {
  return daysSince(lastVerified, now) > staleAfterDays;
}

const MONTHS_EN = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/** Month-precision format for the badge (ja: "2026年7月" / en: "Jul 2026"). Returns the input as is for invalid dates. */
export function formatVerified(lastVerified: string, locale: Locale): string {
  const date = parseISODate(lastVerified);
  if (!date) return lastVerified;
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth();
  return locale === "ja" ? `${y}年${m + 1}月` : `${MONTHS_EN[m]} ${y}`;
}
