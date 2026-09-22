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
      <section className="relative overflow-hidden bg-maroon-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-dark via-maroon to-maroon-dark" />
          <div className="absolute -right-24 -top-24 w-[32rem] h-[32rem] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute right-10 bottom-0 w-[24rem] h-[24rem] rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="relative container-page py-20 sm:py-28 lg:py-36 max-w-2xl">
          <p className="text-gold-light text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">{c.kicker}</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6">{c.h1}</h1>
          <p className="text-cream/85 text-base sm:text-lg mb-8 max-w-xl">{c.sub}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={staticPath(locale, "contacto")} className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-maroon-dark hover:bg-gold-light transition-colors">
              {c.ctaPrimary}
            </Link>
            <Link href={staticPath(locale, "servicios")} className="inline-flex items-center rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10 transition-colors">
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-maroon/10 bg-white">
        <div className="container-page py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <Stat value="+25" label={locale === "es" ? "años de experiencia" : locale === "ca" ? "anys d'experiència" : "years of experience"} />
          <Stat value="2" label={t.offices2} />
          <Stat value="5" label={t.languages5} />
          <Stat value="✓" label={t.mediators} />
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-maroon mb-5">{c.firmTitle}</h2>
          <p className="text-ink/80 leading-relaxed mb-6">{c.firmText}</p>
          <Link href={staticPath(locale, "firma")} className="inline-flex items-center rounded-full border border-maroon px-6 py-3 text-sm font-semibold text-maroon hover:bg-maroon hover:text-cream transition-colors">
            {c.firmCta}
          </Link>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-maroon mb-6">{c.howWeWork}</h3>
          <div className="space-y-5">
            {c.steps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold/20 text-[#a9821f] font-serif font-semibold shrink-0">{i + 1}</span>
                <div>
                  <h4 className="font-semibold text-ink mb-1">{s.title}</h4>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-maroon/10">
        <div className="container-page py-16 sm:py-20">
          <h2 className="font-serif text-3xl sm:text-4xl text-maroon mb-3">{c.areasTitle}</h2>
          <p className="text-ink/70 mb-10 max-w-2xl">{c.areasSub}</p>
          <PracticeGrid locale={locale} />
        </div>
      </section>

      <section className="container-page py-16 sm:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-maroon mb-5">{c.appointmentTitle}</h2>
          <p className="text-ink/80 leading-relaxed mb-6">{c.appointmentText}</p>
          <div className="space-y-2 text-sm text-ink/75">
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
      <div className="font-serif text-2xl sm:text-3xl text-maroon">{value}</div>
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
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-maroon mb-2">{t.needHelp}</h2>
            <p className="text-sm text-ink/70 mb-4">{offices.email}</p>
            <Link
              href={staticPath(locale, "contacto")}
              className="inline-flex items-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-cream hover:bg-maroon-dark transition-colors"
            >
              {t.contactCta}
            </Link>
          </div>
        </div>

        <aside>
          <h3 className="font-serif text-lg text-maroon mb-4">{t.servicesTitle}</h3>
          <ul className="space-y-1 text-sm">
            {practiceAreas.map((a) => (
              <li key={a.group}>
                <Link
                  href={slugPath(locale, a.slug[locale])}
                  className={`block py-1.5 border-b border-maroon/10 ${a.group === area.group ? "text-maroon font-semibold" : "text-ink/70 hover:text-maroon"}`}
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
          <p className="text-sm font-semibold tracking-wide uppercase text-[#a9821f] mb-1">{c.historyKicker}</p>
          <h2 className="font-serif text-3xl text-maroon mb-4">{c.historyTitle}</h2>
          <p className="italic text-ink/60 mb-4">{c.quote}</p>
          <p className="leading-relaxed text-ink/85">{c.history}</p>
        </section>
        <section>
          <p className="text-sm font-semibold tracking-wide uppercase text-[#a9821f] mb-1">{c.whyKicker}</p>
          <h2 className="font-serif text-3xl text-maroon mb-4">{c.whyTitle}</h2>
          {c.why.split("\n\n").map((p, i) => (
            <p key={i} className="leading-relaxed text-ink/85 mb-4">
              {p}
            </p>
          ))}
        </section>
        <section>
          <p className="text-sm font-semibold tracking-wide uppercase text-[#a9821f] mb-1">{c.howKicker}</p>
          <h2 className="font-serif text-3xl text-maroon mb-4">{c.howTitle}</h2>
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

          <OfficeBlock title="Barcelona" o={offices.barcelona} t={t} />
          <div className="h-8" />
          <OfficeBlock title="Roses (Girona)" o={offices.roses} t={t} />
        </div>
        <ContactForm locale={locale} />
      </div>
    </div>
  );
}

function OfficeBlock({
  title,
  o,
  t,
}: {
  title: string;
  o: (typeof offices)["barcelona"];
  t: (typeof ui)["es"];
}) {
  return (
    <div>
      <h3 className="font-serif text-2xl text-maroon mb-3">{title}</h3>
      <ul className="space-y-1.5 text-sm text-ink/75">
        <li>
          {t.phone}: <a href={`tel:${o.phone}`} className="hover:text-maroon">{o.phoneDisplay}</a>
        </li>
        <li>
          {t.whatsapp}: <a href={`https://wa.me/${offices.whatsapp.replace("+", "")}`} className="hover:text-maroon">{offices.whatsappDisplay}</a>
        </li>
        <li>
          {t.email}: <a href={`mailto:${offices.email}`} className="hover:text-maroon">{offices.email}</a>
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
              className="rounded-xl border border-maroon/10 bg-white p-6 hover:border-gold hover:shadow-lg transition-all font-serif text-xl text-maroon"
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
          <article key={post.slug} className="rounded-xl border border-maroon/10 bg-white p-6 flex flex-col">
            <time className="text-xs uppercase tracking-wide text-[#a9821f] font-semibold mb-2">
              {new Date(post.date).toLocaleDateString(dateLocale, { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <h2 className="font-serif text-xl text-maroon mb-2">{post.title[locale]}</h2>
            <p className="text-sm text-ink/70 flex-1">{post.excerpt[locale]}</p>
            <span className="mt-4 text-sm font-semibold text-maroon">{t.readMore} →</span>
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
