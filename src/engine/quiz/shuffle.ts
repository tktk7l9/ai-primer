// order 問題の提示順シャッフル。SSR とクライアントで同一結果になるよう
// 乱数は使わず、シード文字列（レッスンid+設問番号）から決定的に生成する。

function hashSeed(seed: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mulberry32(a: number): () => number {
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * [0..length-1] の添字を決定的にシャッフルして返す。
 * 返り値 r について「提示位置 i に置くのは正解順 r[i] 番目の項目」。
 */
export function shuffledIndexes(length: number, seed: string): number[] {
  const indexes = Array.from({ length }, (_, i) => i);
  const rand = mulberry32(hashSeed(seed));
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes;
}
