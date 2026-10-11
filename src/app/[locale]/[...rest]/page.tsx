import { notFound } from "next/navigation";

// Any path under a locale that no other route matches (/en/missing, /ja/learn, ...) lands here
// and gets the localized 404 inside the locale layout, rendered per request in the URL's
// language. Without this route such URLs fell through to the root not-found, which is
// prerendered once at build time with the default (Japanese) chrome: with the Worker serving
// prerendered pages from the incremental cache, an /en/... URL then hydrated English over
// Japanese markup (React error 418). It has no generateStaticParams, so nothing is prerendered.
export default function UnknownLocalePath(): never {
  notFound();
}
