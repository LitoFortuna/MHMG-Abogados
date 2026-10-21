import Link from "next/link";
import { Locale, nav, offices, siteName, ui } from "@/lib/content";
import { credits, shell } from "@/lib/copy";
import { staticPath } from "@/lib/paths";

export default function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const n = nav[locale];
  const s = shell[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer on-dark" data-ink="dark">
      <div className="site-footer__cols">
        <div>
          <h2>{offices.barcelona.name}</h2>
          <address>
            <span>{offices.barcelona.address}</span>
            <span>
              {offices.barcelona.postalCode} {offices.barcelona.city}
            </span>
            <a href={`tel:${offices.barcelona.phone}`}>{offices.barcelona.phoneDisplay}</a>
          </address>
        </div>

        <div>
          <h2>{offices.roses.name}</h2>
          <address>
            <span>{offices.roses.address}</span>
            <span>
              {offices.roses.postalCode} {offices.roses.city}
            </span>
            <a href={`tel:${offices.roses.phone}`}>{offices.roses.phoneDisplay}</a>
          </address>
        </div>

        <div>
          <h2>{s.footerNav}</h2>
          <ul>
            <li>
              <Link href={staticPath(locale, "firma")}>{n.firma}</Link>
            </li>
            <li>
              <Link href={staticPath(locale, "servicios")}>{n.servicios}</Link>
            </li>
            <li>
              <Link href={staticPath(locale, "actualidad")}>{n.actualidad}</Link>
            </li>
            <li>
              <Link href={staticPath(locale, "contacto")}>{n.contacto}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>{s.footerContact}</h2>
          <ul>
            <li>
              <a href={`https://wa.me/${offices.whatsapp.replace("+", "")}`}>
                {t.whatsapp} {offices.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${offices.email}`}>{offices.email}</a>
            </li>
            <li>
              <a href="https://www.facebook.com/mhmg.abogados" rel="noopener">
                {s.facebook}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__mark" aria-hidden="true">
        <svg viewBox="0 0 1000 190" focusable="false">
          <text
            x="0"
            y="168"
            fontSize="236"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            style={{ fontFamily: "var(--font-hanken), system-ui, sans-serif", fontWeight: 500, letterSpacing: "-0.05em" }}
          >
            MH &amp; MG
          </text>
        </svg>
      </div>

      <div className="site-footer__legal">
        <p>
          {siteName} © {year}. {t.rights}.{" "}
          <Link href={staticPath(locale, "privacidad")}>{t.privacy}</Link>
        </p>
        <p>
          {s.credits}:{" "}
          {credits.map((c, i) => (
            <span key={c.photo}>
              <a href={c.page} rel="noopener">
                “{c.title}”
              </a>
              {c.by ? `, ${c.by}, ` : ", "}
              <a href={c.licenceUrl} rel="noopener">
                {c.licence}
              </a>
              {i < credits.length - 1 ? "; " : `, ${s.viaCommons}.`}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
