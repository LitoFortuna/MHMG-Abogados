import Link from "next/link";
import { Locale, practiceAreas, ui } from "@/lib/content";
import { slugPath } from "@/lib/paths";

export default function PracticeGrid({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {practiceAreas.map((area) => (
        <Link
          key={area.group}
          href={slugPath(locale, area.slug[locale])}
          className="group rounded-sm border border-sea/10 bg-linen p-6 hover:border-brass hover:shadow-lg transition-all"
        >
          <h3 className="font-serif text-xl text-sea mb-2">{area.title[locale]}</h3>
          <span className="inline-flex items-center text-sm font-semibold text-brass group-hover:gap-2 gap-1 transition-all">
            {t.readMore}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
