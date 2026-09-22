import { Locale, localePrefix, practiceAreas, staticSlugs } from "./content";

export function homePath(locale: Locale): string {
  return localePrefix[locale] || "/";
}

export function slugPath(locale: Locale, slug: string): string {
  const prefix = localePrefix[locale];
  return `${prefix}/${slug}/`;
}

export function staticPath(locale: Locale, key: keyof typeof staticSlugs): string {
  return slugPath(locale, staticSlugs[key][locale]);
}

export function practiceAltLinks(group: string): Partial<Record<Locale, string>> {
  const area = practiceAreas.find((p) => p.group === group);
  if (!area) return {};
  const out: Partial<Record<Locale, string>> = {};
  (Object.keys(area.slug) as Locale[]).forEach((loc) => {
    out[loc] = slugPath(loc, area.slug[loc]);
  });
  return out;
}

export function staticAltLinks(key: keyof typeof staticSlugs): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  (Object.keys(staticSlugs[key]) as Locale[]).forEach((loc) => {
    out[loc] = staticPath(loc, key);
  });
  return out;
}

export function homeAltLinks(): Partial<Record<Locale, string>> {
  return { es: homePath("es"), ca: homePath("ca"), en: homePath("en") };
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
