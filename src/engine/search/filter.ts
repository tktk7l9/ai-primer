// Lenient text matching for in-page filters (SHIG 50: never demand exactness).
// Case, full-width/half-width forms and hiragana/katakana all match each other,
// and every whitespace-separated term must appear somewhere in the fields.

// Hiragana (U+3041..U+3096) sits exactly 0x60 below the matching katakana.
const KANA_OFFSET = 0x60;

/** Folds a string so that visually equivalent inputs compare equal. */
export function normalizeForSearch(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[ぁ-ゖ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + KANA_OFFSET))
    .replace(/\s+/g, " ")
    .trim();
}

/** Splits a query into terms; an empty or blank query has none. */
export function queryTerms(query: string): string[] {
  const normalized = normalizeForSearch(query);
  return normalized === "" ? [] : normalized.split(" ");
}

/** True when every term of `query` occurs in at least one of `fields`. */
export function matchesQuery(fields: readonly string[], query: string): boolean {
  const terms = queryTerms(query);
  if (terms.length === 0) return true;
  const haystack = fields.map(normalizeForSearch).join("\n");
  return terms.every((term) => haystack.includes(term));
}
