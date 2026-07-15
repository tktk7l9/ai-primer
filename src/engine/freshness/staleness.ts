import type { Locale } from "@/i18n/config";

/** これを超えて未確認のコンテンツは stale 扱い。 */
export const STALE_AFTER_DAYS = 90;

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** "yyyy-mm-dd" のみ受け付ける（実在しない日付は null）。 */
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

/** lastVerified から now までの経過日数（不正な日付は Infinity = 常に stale）。 */
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

/** バッジ表示用の月精度フォーマット（ja: "2026年7月" / en: "Jul 2026"）。不正な日付は原文を返す。 */
export function formatVerified(lastVerified: string, locale: Locale): string {
  const date = parseISODate(lastVerified);
  if (!date) return lastVerified;
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth();
  return locale === "ja" ? `${y}年${m + 1}月` : `${MONTHS_EN[m]} ${y}`;
}
