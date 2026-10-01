"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath } from "@/i18n/config";
import en from "@/i18n/dictionaries/en";
import ja from "@/i18n/dictionaries/ja";
import { Footer } from "./footer";
import { Header } from "./header";

/**
 * Localized 404 with a way back (SHIG 55, 60, 11). not-found files receive no
 * params, so the locale is read from the URL.
 *
 * `chrome` adds the site header and footer: unmatched URLs render the root
 * not-found, outside the locale layout, and without this they had no menu at
 * all (SHIG 60, 6).
 */
export function NotFoundBody({ chrome = false }: { chrome?: boolean }) {
  const locale = localeFromPath(usePathname());
  const dict = locale === "en" ? en : ja;
  const body = (
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
  if (!chrome) return body;
  return (
    <div lang={locale}>
      <Header locale={locale} dict={dict} />
      <main className="container">{body}</main>
      <Footer dict={dict} />
    </div>
  );
}
