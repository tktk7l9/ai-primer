"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/i18n/config";
import en from "@/i18n/dictionaries/en";
import ja from "@/i18n/dictionaries/ja";

/**
 * Localized 404 with a way back (SHIG 55, 60, 11). not-found files receive no
 * params, so the locale is read from the URL.
 */
export function NotFoundBody() {
  const locale = localeFromPath(usePathname());
  const dict = locale === "en" ? en : ja;
  return (
    <div className="narrow-page not-found" lang={locale}>
      <div className="page-title">
        <span className="specimen-tag">404</span>
        <h1>{dict.notFound.title}</h1>
        <p className="lead">{dict.notFound.lead}</p>
      </div>
      <div className="not-found-actions">
        <Link className="button-primary" href={`/${locale}`}>
          {dict.notFound.backHome}
        </Link>
        <Link href={`/${locale}/glossary`}>{dict.notFound.glossary}</Link>
      </div>
    </div>
  );
}
