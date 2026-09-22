import { MetadataRoute } from "next";
import { locales } from "@/lib/content";
import { allSlugsForLocale } from "@/lib/resolve";
import { homePath, siteUrl, slugPath } from "@/lib/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    entries.push({ url: `${siteUrl}${homePath(locale)}`, changeFrequency: "weekly", priority: locale === "es" ? 1 : 0.8 });
    allSlugsForLocale(locale).forEach((slug) => {
      entries.push({ url: `${siteUrl}${slugPath(locale, slug)}`, changeFrequency: "monthly", priority: 0.7 });
    });
  });

  return entries;
}
