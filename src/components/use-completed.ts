"use client";

import { useSyncExternalStore } from "react";
import { PROGRESS_KEY, loadCompleted, markComplete } from "@/engine/progress/progress";

// Progress hook that subscribes to localStorage. SSR renders it as empty (not completed),
// and after mount useSyncExternalStore swaps in the real value (no hydration mismatch).

const EVENT = "ai-primer:progress-changed";
const EMPTY: readonly string[] = [];

let cacheRaw: string | null = null;
let cacheParsed: readonly string[] = EMPTY;

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT, callback);
  };
}

function getSnapshot(): readonly string[] {
  const raw = window.localStorage.getItem(PROGRESS_KEY);
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    cacheParsed = loadCompleted(window.localStorage);
  }
  return cacheParsed;
}

function getServerSnapshot(): readonly string[] {
  return EMPTY;
}

export function useCompleted(): readonly string[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function markCompleteClient(lessonId: string): void {
  markComplete(window.localStorage, lessonId);
  window.dispatchEvent(new Event(EVENT));
}
