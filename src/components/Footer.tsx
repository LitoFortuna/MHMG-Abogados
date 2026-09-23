import Link from "next/link";
import { Locale, nav, offices, practiceAreas, siteName, ui } from "@/lib/content";
import { homePath, slugPath, staticPath } from "@/lib/paths";
import Mark from "./Mark";

export default function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const n = nav[locale];

  return (
    <footer className="bg-sea-deep text-paper/90 mt-24">
      <div className="horizon-rule" />
      <div className="container-page py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={homePath(locale)} className="flex items-center gap-2.5 mb-4">
            <Mark className="h-9 w-9 shrink-0" />
            <span className="font-serif text-lg text-paper">MH &amp; MG</span>
          </Link>
          <ul className="space-y-1.5 text-sm text-paper/75">
            <li>
              <a href={`mailto:${offices.email}`} className="hover:text-brass-light transition-colors">
                {offices.email}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${offices.whatsapp.replace("+", "")}`} className="hover:text-brass-light transition-colors">
                {t.whatsapp}: {offices.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono font-medium text-brass-light uppercase text-xs tracking-wider mb-4">{n.servicios}</h3>
          <ul className="space-y-1.5 text-sm text-paper/75">
            {practiceAreas.map((area) => (
              <li key={area.group}>
                <Link href={slugPath(locale, area.slug[locale])} className="hover:text-brass-light transition-colors">
                  {area.navTitle[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono font-medium text-brass-light uppercase text-xs tracking-wider mb-4">41.3874°N — Barcelona</h3>
          <ul className="space-y-1.5 text-sm text-paper/75">
            <li>{offices.barcelona.address}</li>
            <li>
              {offices.barcelona.postalCode} {offices.barcelona.city}
            </li>
            <li>
              <a href={`tel:${offices.barcelona.phone}`} className="hover:text-brass-light transition-colors">
                {t.phone}: {offices.barcelona.phoneDisplay}
              </a>
            </li>
          </ul>

          <h3 className="font-mono font-medium text-brass-light uppercase text-xs tracking-wider mb-4 mt-6">42.2624°N — Roses</h3>
          <ul className="space-y-1.5 text-sm text-paper/75">
            <li>{offices.roses.address}</li>
            <li>
              {offices.roses.postalCode} {offices.roses.city}
            </li>
            <li>
              <a href={`tel:${offices.roses.phone}`} className="hover:text-brass-light transition-colors">
                {t.phone}: {offices.roses.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono font-medium text-brass-light uppercase text-xs tracking-wider mb-4">{n.contacto}</h3>
          <Link
            href={staticPath(locale, "contacto")}
            className="inline-flex items-center rounded-sm bg-brass px-5 py-2.5 text-sm font-semibold text-sea-deep hover:bg-brass-light transition-colors"
          >
            {n.cta}
          </Link>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/55 font-mono">
          <p>
            {siteName} © {new Date().getFullYear()} {t.rights}
          </p>
          <Link href={staticPath(locale, "privacidad")} className="hover:text-brass-light transition-colors">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
