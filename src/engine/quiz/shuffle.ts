// Shuffles the presentation order of order questions. To give the same result on SSR and the client
// it uses no randomness and derives it deterministically from a seed string (lesson id + question number).

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
 * Returns the indexes [0..length-1] shuffled deterministically.
 * For the result r, "presentation position i shows the item at position r[i] in the correct order".
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
