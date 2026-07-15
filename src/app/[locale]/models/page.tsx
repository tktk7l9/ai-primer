import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MODELS } from "@/engine/content/models";
import { type Locale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.models.title,
    description: dict.models.lead,
    alternates: {
      canonical: `/${locale}/models`,
      languages: { ja: "/ja/models", en: "/en/models" },
    },
  };
}

export default async function ModelsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <div className="page-title">
        <h1>{dict.models.title}</h1>
        <p className="lead">{dict.models.lead}</p>
      </div>
      <div className="model-grid">
        {MODELS.map((m) => (
          <article key={m.id} className="model-card">
            <span className="specimen-tag">{m.kind}</span>
            <span className="model-vendor">{m.vendor}</span>
            <h2>{m.name}</h2>
            <p>{m.strengths[locale]}</p>
            <div className="model-footer">
              <span className="free-tier-badge" data-free={m.freeTier}>
                {m.freeTier ? dict.models.freeTierYes : dict.models.freeTierNo}
              </span>
              <a href={m.officialUrl} target="_blank" rel="noopener noreferrer">
                {dict.models.officialSite} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
