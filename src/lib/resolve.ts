import { Locale, practiceAreas, staticSlugs } from "./content";

export type ResolvedContent =
  | { type: "practice"; area: (typeof practiceAreas)[number] }
  | { type: "firma" }
  | { type: "contacto" }
  | { type: "servicios" }
  | { type: "actualidad" }
  | { type: "privacidad" };

export function resolveSlug(locale: Locale, slug: string): ResolvedContent | null {
  const area = practiceAreas.find((p) => p.slug[locale] === slug);
  if (area) return { type: "practice", area };

  const staticKey = (Object.keys(staticSlugs) as (keyof typeof staticSlugs)[]).find(
    (key) => staticSlugs[key][locale] === slug
  );
  if (staticKey) return { type: staticKey };

  return null;
}

export function allSlugsForLocale(locale: Locale): string[] {
  const areaSlugs = practiceAreas.map((p) => p.slug[locale]);
  const staticKeys = Object.keys(staticSlugs) as (keyof typeof staticSlugs)[];
  const staticVals = staticKeys.map((key) => staticSlugs[key][locale]);
  return [...areaSlugs, ...staticVals];
}
