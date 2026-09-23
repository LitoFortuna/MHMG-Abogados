import Link from "next/link";
import {
  Locale,
  PracticeArea,
  blogPosts,
  contactPage,
  firmPage,
  homeCopy,
  offices,
  practiceAreas,
  staticSlugs,
  ui,
} from "@/lib/content";
import { slugPath, staticPath } from "@/lib/paths";
import PageBanner from "./PageBanner";
import ContactForm from "./ContactForm";
import PracticeGrid from "./PracticeGrid";

export function HomePage({ locale }: { locale: Locale }) {
  const c = homeCopy[locale];
  const t = ui[locale];
  return (
    <div>
      <section className="relative overflow-hidden bg-sea-deep">
        <div className="relative container-page pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40 max-w-2xl">
          <p className="font-mono text-brass-light text-xs sm:text-sm tracking-[0.2em] uppercase mb-5">{c.kicker}</p>
          <h1 className="font-serif font-medium text-4xl sm:text-5xl lg:text-[3.4rem] text-paper leading-[1.1] mb-6">{c.h1}</h1>
          <p className="text-paper/80 text-base sm:text-lg mb-9 max-w-xl">{c.sub}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={staticPath(locale, "contacto")} className="inline-flex items-center rounded-sm bg-brass px-7 py-3.5 text-sm font-semibold text-sea-deep hover:bg-brass-light transition-colors">
              {c.ctaPrimary}
            </Link>
            <Link href={staticPath(locale, "servicios")} className="inline-flex items-center rounded-sm border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper hover:bg-paper/10 transition-colors">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="horizon-rule" />
      </section>

      <section className="bg-linen">
        <div className="container-page py-8 grid grid-cols-2 sm:grid-cols-4 divide-x divide-sea/10 text-center">
          <Stat value="25+" label={locale === "es" ? "años de experiencia" : locale === "ca" ? "anys d'experiència" : "years of experience"} />
          <Stat value="2" label={t.offices2} />
          <Stat value="5" label={t.languages5} />
          <Stat value="✓" label={t.mediators} />
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-sea mb-5">{c.firmTitle}</h2>
          <p className="text-ink/80 leading-relaxed mb-6">{c.firmText}</p>
          <Link href={staticPath(locale, "firma")} className="inline-flex items-center rounded-sm border border-sea px-6 py-3 text-sm font-semibold text-sea hover:bg-sea hover:text-paper transition-colors">
            {c.firmCta}
          </Link>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-sea mb-6">{c.howWeWork}</h3>
          <div className="space-y-5">
            {c.steps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brass/15 text-sea font-mono text-sm font-medium shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="font-semibold text-ink mb-1">{s.title}</h4>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen border-y border-sea/10">
        <div className="container-page py-16 sm:py-20">
          <h2 className="font-serif text-3xl sm:text-4xl text-sea mb-3">{c.areasTitle}</h2>
          <p className="text-ink/70 mb-10 max-w-2xl">{c.areasSub}</p>
          <PracticeGrid locale={locale} />
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-sea mb-5">{c.appointmentTitle}</h2>
          <p className="text-ink/80 leading-relaxed mb-6">{c.appointmentText}</p>
          <div className="space-y-2 text-sm text-ink/75 font-mono">
            <p>Barcelona · {offices.barcelona.phoneDisplay} · {offices.barcelona.address}</p>
            <p>Roses (Girona) · {offices.roses.phoneDisplay} · {offices.roses.address}</p>
          </div>
        </div>
        <ContactForm locale={locale} />
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl sm:text-3xl text-sea">{value}</div>
      <div className="text-xs sm:text-sm text-ink/60 mt-1">{label}</div>
    </div>
  );
}

export function PracticeAreaPage({ locale, area }: { locale: Locale; area: PracticeArea }) {
  const t = ui[locale];
  return (
    <div>
      <PageBanner eyebrow={t.servicesTitle} title={area.title[locale]} />
      <div className="container-page py-14 grid lg:grid-cols-[2fr_1fr] gap-12">
        <div>
          <div className="prose-block space-y-5 text-[1.05rem] leading-relaxed text-ink/85">
            {area.intro[locale].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {area.services[locale].map((s) => (
              <li key={s} className="flex gap-2 text-[0.95rem]">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-sm border border-brass/30 bg-brass/10 p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-sea mb-2">{t.needHelp}</h2>
            <p className="text-sm text-ink/70 mb-4 font-mono">{offices.email}</p>
            <Link
              href={staticPath(locale, "contacto")}
              className="inline-flex items-center rounded-sm bg-sea px-6 py-3 text-sm font-semibold text-paper hover:bg-sea-deep transition-colors"
            >
              {t.contactCta}
            </Link>
          </div>
        </div>

        <aside>
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-sea mb-4">{t.servicesTitle}</h3>
          <ul className="space-y-1 text-sm">
            {practiceAreas.map((a) => (
              <li key={a.group}>
                <Link
                  href={slugPath(locale, a.slug[locale])}
                  className={`block py-1.5 border-b border-sea/10 ${a.group === area.group ? "text-sea font-semibold" : "text-ink/70 hover:text-sea"}`}
                >
                  {a.navTitle[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export function FirmaPage({ locale }: { locale: Locale }) {
  const c = firmPage[locale];
  return (
    <div>
      <PageBanner eyebrow={c.kicker} title={c.title} />
      <div className="container-page py-14 space-y-14 max-w-3xl">
        <section>
          <p className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-brass mb-1">{c.historyKicker}</p>
          <h2 className="font-serif text-3xl text-sea mb-4">{c.historyTitle}</h2>
          <p className="italic text-ink/60 mb-4">{c.quote}</p>
          <p className="leading-relaxed text-ink/85">{c.history}</p>
        </section>
        <section>
          <p className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-brass mb-1">{c.whyKicker}</p>
          <h2 className="font-serif text-3xl text-sea mb-4">{c.whyTitle}</h2>
          {c.why.split("\n\n").map((p, i) => (
            <p key={i} className="leading-relaxed text-ink/85 mb-4">
              {p}
            </p>
          ))}
        </section>
        <section>
          <p className="font-mono text-xs font-medium tracking-[0.14em] uppercase text-brass mb-1">{c.howKicker}</p>
          <h2 className="font-serif text-3xl text-sea mb-4">{c.howTitle}</h2>
          <p className="leading-relaxed text-ink/85">{c.how}</p>
        </section>
      </div>
    </div>
  );
}

export function ContactoPage({ locale }: { locale: Locale }) {
  const c = contactPage[locale];
  const t = ui[locale];
  return (
    <div>
      <PageBanner eyebrow={c.kicker} title={c.title} />
      <div className="container-page py-14 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <div className="space-y-3 text-ink/80 mb-10">
            {c.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <OfficeBlock title="Barcelona" coord="41.3874°N" o={offices.barcelona} t={t} />
          <div className="h-8" />
          <OfficeBlock title="Roses (Girona)" coord="42.2624°N" o={offices.roses} t={t} />
        </div>
        <ContactForm locale={locale} />
      </div>
    </div>
  );
}

function OfficeBlock({
  title,
  coord,
  o,
  t,
}: {
  title: string;
  coord: string;
  o: (typeof offices)["barcelona"];
  t: (typeof ui)["es"];
}) {
  return (
    <div>
      <p className="font-mono text-xs text-brass tracking-[0.1em] mb-1">{coord}</p>
      <h3 className="font-serif text-2xl text-sea mb-3">{title}</h3>
      <ul className="space-y-1.5 text-sm text-ink/75">
        <li>
          {t.phone}: <a href={`tel:${o.phone}`} className="hover:text-sea">{o.phoneDisplay}</a>
        </li>
        <li>
          {t.whatsapp}: <a href={`https://wa.me/${offices.whatsapp.replace("+", "")}`} className="hover:text-sea">{offices.whatsappDisplay}</a>
        </li>
        <li>
          {t.email}: <a href={`mailto:${offices.email}`} className="hover:text-sea">{offices.email}</a>
        </li>
        <li>
          {t.address}: {o.address}, {o.postalCode} {o.city}
        </li>
      </ul>
    </div>
  );
}

export function ServiciosIndexPage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <div>
      <PageBanner eyebrow={t.servicesTitle} title={t.servicesTitle} />
      <div className="container-page py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practiceAreas.map((area) => (
            <Link
              key={area.group}
              href={slugPath(locale, area.slug[locale])}
              className="rounded-sm border border-sea/10 bg-linen p-6 hover:border-brass hover:shadow-lg transition-all font-serif text-xl text-sea"
            >
              {area.title[locale]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ActualidadPage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const eyebrow = { es: "Actualidad", ca: "Actualitat", en: "News" }[locale];
  const heading = { es: "Nuestro blog", ca: "El nostre blog", en: "Our blog" }[locale];
  const dateLocale = { es: "es-ES", ca: "ca-ES", en: "en-GB" }[locale];
  return (
    <div>
      <PageBanner eyebrow={eyebrow} title={heading} />
      <div className="container-page py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-sm border border-sea/10 bg-linen p-6 flex flex-col">
            <time className="font-mono text-xs uppercase tracking-wide text-brass font-medium mb-2">
              {new Date(post.date).toLocaleDateString(dateLocale, { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <h2 className="font-serif text-xl text-sea mb-2">{post.title[locale]}</h2>
            <p className="text-sm text-ink/70 flex-1">{post.excerpt[locale]}</p>
            <span className="mt-4 text-sm font-semibold text-brass">{t.readMore} →</span>
          </article>
        ))}
      </div>
    </div>
  );
}

export function PrivacidadPage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const title = t.privacy;
  return (
    <div>
      <PageBanner eyebrow={title} title={title} />
      <div className="container-page py-14 max-w-3xl text-sm leading-relaxed text-ink/75">
        <p>
          {
            {
              es: "Política de privacidad de demostración para esta previsualización. El texto legal completo y revisado se incorporará antes del lanzamiento definitivo.",
              ca: "Política de privacitat de demostració per a aquesta previsualització. El text legal complet i revisat s'incorporarà abans del llançament definitiu.",
              en: "Demo privacy policy for this preview. The full, reviewed legal text will be added before the final launch.",
            }[locale]
          }
        </p>
      </div>
    </div>
  );
}

export { staticSlugs };
