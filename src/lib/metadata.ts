import { Metadata } from "next";
import { Locale, locales } from "./content";
import { siteUrl } from "./paths";

const ogLocale: Record<Locale, string> = { es: "es_ES", ca: "ca_ES", en: "en_GB" };

export function buildMetadata({
  title,
  description,
  path,
  alt,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  alt: Partial<Record<Locale, string>>;
  locale: Locale;
}): Metadata {
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    if (alt[loc]) languages[loc] = alt[loc] as string;
  });

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "MH & MG Abogados",
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export { siteUrl };
