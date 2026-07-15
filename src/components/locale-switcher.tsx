"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

/** 現在のパスを保ったままロケールセグメントだけ差し替える。 */
export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() ?? "/";
  const next: Locale = locale === "ja" ? "en" : "ja";
  const target = pathname.replace(/^\/(ja|en)(?=\/|$)/, `/${next}`) || `/${next}`;
  return (
    <Link href={target} className="locale-switch" rel="alternate" hrefLang={next}>
      {label}
    </Link>
  );
}
