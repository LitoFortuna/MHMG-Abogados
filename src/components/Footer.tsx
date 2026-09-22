import Link from "next/link";
import { Locale, nav, offices, practiceAreas, siteName, ui } from "@/lib/content";
import { homePath, slugPath, staticPath } from "@/lib/paths";
import Mark from "./Mark";

export default function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const n = nav[locale];

  return (
    <footer className="bg-maroon-dark text-cream/90 mt-24">
      <div className="container-page py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={homePath(locale)} className="flex items-center gap-2 mb-4">
            <Mark className="h-9 w-9 shrink-0" />
            <span className="font-serif text-lg text-cream">MH & MG</span>
          </Link>
          <ul className="space-y-1.5 text-sm text-cream/75">
            <li>
              <a href={`mailto:${offices.email}`} className="hover:text-gold-light transition-colors">
                {offices.email}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${offices.whatsapp.replace("+", "")}`} className="hover:text-gold-light transition-colors">
                {t.whatsapp}: {offices.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gold-light uppercase text-xs tracking-wider mb-4">{n.servicios}</h3>
          <ul className="space-y-1.5 text-sm text-cream/75">
            {practiceAreas.map((area) => (
              <li key={area.group}>
                <Link href={slugPath(locale, area.slug[locale])} className="hover:text-gold-light transition-colors">
                  {area.navTitle[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gold-light uppercase text-xs tracking-wider mb-4">Barcelona</h3>
          <ul className="space-y-1.5 text-sm text-cream/75">
            <li>{offices.barcelona.address}</li>
            <li>
              {offices.barcelona.postalCode} {offices.barcelona.city}
            </li>
            <li>
              <a href={`tel:${offices.barcelona.phone}`} className="hover:text-gold-light transition-colors">
                {t.phone}: {offices.barcelona.phoneDisplay}
              </a>
            </li>
          </ul>

          <h3 className="font-semibold text-gold-light uppercase text-xs tracking-wider mb-4 mt-6">Roses (Girona)</h3>
          <ul className="space-y-1.5 text-sm text-cream/75">
            <li>{offices.roses.address}</li>
            <li>
              {offices.roses.postalCode} {offices.roses.city}
            </li>
            <li>
              <a href={`tel:${offices.roses.phone}`} className="hover:text-gold-light transition-colors">
                {t.phone}: {offices.roses.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gold-light uppercase text-xs tracking-wider mb-4">{n.contacto}</h3>
          <Link
            href={staticPath(locale, "contacto")}
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-maroon-dark hover:bg-gold-light transition-colors"
          >
            {n.cta}
          </Link>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>
            {siteName} © {new Date().getFullYear()} {t.rights}
          </p>
          <Link href={staticPath(locale, "privacidad")} className="hover:text-gold-light transition-colors">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
