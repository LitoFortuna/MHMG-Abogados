import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  Locale,
  PracticeArea,
  blogPosts,
  contactPage,
  homeCopy,
  firmPage,
  nav,
  offices,
  practiceAreas,
  staticSlugs,
  ui,
} from "@/lib/content";
import {
  type PhotoKey,
  areaGroups,
  areaH1,
  areaMeta,
  comunidadesServices,
  home,
  inner,
  photoAlt,
  photoStrips,
  photos,
} from "@/lib/copy";
import { slugPath, staticPath } from "@/lib/paths";
import ContactTool, { ToolOffice, ToolTopic } from "./ContactTool";
import Lines from "./Lines";

const dateLocale = { es: "es-ES", ca: "ca-ES", en: "en-GB" } as const;

const css = (vars: Record<string, string | number>) => vars as unknown as CSSProperties;

function Photo({
  name,
  locale,
  sizes,
  preload = false,
}: {
  name: PhotoKey;
  locale: Locale;
  sizes: string;
  preload?: boolean;
}) {
  const p = photos[name];
  return (
    <Image
      src={p.src}
      width={p.width}
      height={p.height}
      alt={photoAlt[name][locale]}
      sizes={sizes}
      preload={preload}
    />
  );
}

function Arrow() {
  return (
    <svg className="area-row__arrow" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path d="M2 9h13M10 3l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PhotoStrip({ locale, set }: { locale: Locale; set: number }) {
  return (
    <div className="strip">
      {photoStrips[set % photoStrips.length].map((name, i) => (
        <div className="strip__tile" key={name} data-reveal="open" style={css({ "--i": i })}>
          <Photo name={name} locale={locale} sizes="(min-width: 1000px) 25vw, 50vw" />
        </div>
      ))}
    </div>
  );
}

function servicesOf(area: PracticeArea, locale: Locale) {
  return area.group === "comunidades" ? comunidadesServices[locale] : area.services[locale];
}

function topicsFor(locale: Locale): ToolTopic[] {
  return areaGroups.flat().map((group) => {
    const area = practiceAreas.find((a) => a.group === group)!;
    return { id: group, label: areaMeta[group][locale].short, services: servicesOf(area, locale) };
  });
}

function toToolOffice(o: (typeof offices)["barcelona"]): ToolOffice {
  return {
    name: o.name,
    address: o.address,
    postalCode: o.postalCode,
    city: o.city,
    phone: o.phone,
    phoneDisplay: o.phoneDisplay,
  };
}

function AreasTable({ locale, groups }: { locale: Locale; groups: string[] }) {
  let n = 0;
  return (
    <div className="areas__table">
      {areaGroups.map((group, gi) => (
        <div className="areas__group" key={gi}>
          <p className="areas__label">{groups[gi]}</p>
          <ul className="areas__rows">
            {group.map((g) => {
              const area = practiceAreas.find((a) => a.group === g)!;
              const m = areaMeta[g][locale];
              const i = n++ % 6;
              return (
                <li key={g} data-reveal="row" style={css({ "--i": i })}>
                  <Link className="area-row" href={slugPath(locale, area.slug[locale])}>
                    <span className="area-row__name">{m.short}</span>
                    <span className="area-row__blurb">{m.blurb}</span>
                    <Arrow />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ContactSection({ locale, withHeading = true }: { locale: Locale; withHeading?: boolean }) {
  const c = home[locale];
  const i = inner[locale];
  return (
    <section className="contact" id="cita" aria-labelledby="cita-h">
      <div className="wrap grid">
        {withHeading ? (
          <Lines as="h2" id="cita-h" className="contact__head head" lines={[c.contactHeading]} reveal />
        ) : (
          <h2 id="cita-h" className="sr-only">
            {c.contactHeading}
          </h2>
        )}
        <p className="contact__sentence" data-reveal>
          {c.contactSentence}
        </p>

        <ContactTool
          locale={locale}
          topics={topicsFor(locale)}
          barcelona={toToolOffice(offices.barcelona)}
          roses={toToolOffice(offices.roses)}
          whatsapp={offices.whatsapp}
          email={offices.email}
        />

        <div className="offices">
          <h3 className="sr-only">{i.contactOffices}</h3>
          <div className="office" data-reveal>
            <div className="office__photo">
              <Photo name="eixample" locale={locale} sizes="160px" />
            </div>
            <div>
              <h3>{offices.barcelona.name}</h3>
              <address>
                <span>{offices.barcelona.address}</span>
                <span>
                  {offices.barcelona.postalCode} {offices.barcelona.city}
                </span>
              </address>
              <a className="link office__phone" href={`tel:${offices.barcelona.phone}`}>
                {offices.barcelona.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="office" data-reveal style={css({ "--i": 1 })}>
            <div className="office__photo">
              <Photo name="ciutadella" locale={locale} sizes="160px" />
            </div>
            <div>
              <h3>{offices.roses.name}</h3>
              <address>
                <span>{offices.roses.address}</span>
                <span>
                  {offices.roses.postalCode} {offices.roses.city}
                </span>
              </address>
              <a className="link office__phone" href={`tel:${offices.roses.phone}`}>
                {offices.roses.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const c = home[locale];
  const f = firmPage[locale];
  const n = nav[locale];

  return (
    <>
      <section className="hero" data-hero aria-labelledby="hero-h">
        <div className="wrap grid hero__grid">
          <div className="hero__stage">
            <div className="hero__title-wrap">
              <Lines as="h1" id="hero-h" className="hero__title" lines={c.h1} load />
            </div>

            <div className="hero__talk">
              <p className="hero__sub" data-load style={css({ "--d": "420ms" })}>
                {c.sub}
              </p>
              <a className="btn" href="#cita" data-hero-action data-load style={css({ "--d": "500ms" })}>
                {c.cta}
              </a>
            </div>

            <div className="hero__photo">
              <div className="hero__media">
                <figure>
                  <Photo name="rambla" locale={locale} sizes="(min-width: 1000px) 33vw, 50vw" preload />
                  <figcaption className="cap">{c.captionBarcelona}</figcaption>
                </figure>
                <figure>
                  <Photo name="bahia" locale={locale} sizes="(min-width: 1000px) 33vw, 50vw" preload />
                  <figcaption className="cap">{c.captionRoses}</figcaption>
                </figure>
              </div>
              <p className="hero__fact">
                <strong>{c.factNumber}</strong>
                <span className="small">{c.factText}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="intro-h">
        <div className="board">
          <div className="board__slogan on-dark" data-ink="dark" data-reveal="open">
            <Lines as="h2" id="intro-h" className="display" lines={c.introSlogan} reveal />
          </div>
          <div className="board__word" data-reveal="open" style={css({ "--i": 1 })}>
            <span className="small">{c.introWordNote}</span>
            <span className="display">{c.introWord}</span>
          </div>
          <div className="board__photo" data-reveal="open" style={css({ "--i": 2 })}>
            <Photo name="frente" locale={locale} sizes="(min-width: 1000px) 33vw, 50vw" />
          </div>
          <div className="board__text">
            <p data-reveal>{c.introText}</p>
          </div>
        </div>
      </section>

      <section className="areas" aria-labelledby="areas-h">
        <div className="wrap">
          <Lines as="h2" id="areas-h" className="areas__head" lines={c.listHeading} reveal />
          <div className="grid areas__body">
            <div className="areas__figure" data-reveal="open">
              <Photo name="fachada" locale={locale} sizes="(min-width: 1000px) 33vw, 100vw" />
            </div>
            <AreasTable locale={locale} groups={c.listGroups} />
          </div>
        </div>
      </section>

      <section className="steps on-dark" data-ink="dark" aria-labelledby="steps-h">
        <div className="wrap">
          <ol className="steps__list">
            {c.stepsLines.map((line, i) => (
              <li className="step" key={i}>
                <Lines
                  as={i === 0 ? "h2" : "p"}
                  id={i === 0 ? "steps-h" : undefined}
                  className="step__line"
                  lines={[line]}
                  reveal
                />
                <p className="step__text" data-reveal>
                  {c.stepsTexts[i]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about wrap grid" aria-labelledby="about-h">
        <h2 id="about-h" className="sr-only">
          {n.firma}
        </h2>
        <dl className="about__facts" data-reveal>
          {c.aboutFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="about__text" data-reveal style={css({ "--i": 1 })}>
          {f.how}
        </p>

        <h3 className="about__newshead">{c.aboutNews}</h3>
        <ul className="about__news">
          {blogPosts.map((post, i) => (
            <li key={post.slug} className="news-row" data-reveal="row" style={css({ "--i": i % 6 })}>
              <span>{post.title[locale]}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(dateLocale[locale], { year: "numeric", month: "short" })}
              </time>
            </li>
          ))}
        </ul>
        <p className="about__more">
          <Link className="link" href={staticPath(locale, "actualidad")}>
            {c.aboutNewsLink}
          </Link>
        </p>
      </section>

      <section className="faq" aria-labelledby="faq-h">
        <div className="faq__head on-dark" data-ink="dark">
          <div className="wrap">
            <Lines as="h2" id="faq-h" className="head" lines={c.faqHeading} reveal />
          </div>
        </div>
        {c.faq.map((item, i) => (
          <div className="faq__band" key={i}>
            <div className="wrap grid">
              <h3 className="faq__q" data-reveal>
                {item.q}
              </h3>
              <p className="faq__a" data-reveal style={css({ "--i": 1 })}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </section>

      <ContactSection locale={locale} />
    </>
  );
}

function PageHero({ title, tone, sub }: { title: string; tone: 1 | 2 | 3 | 4; sub?: string }) {
  return (
    <section
      className={`page-hero page-hero--${tone} ${tone === 2 ? "" : "on-dark"}`}
      data-ink={tone === 2 ? undefined : "dark"}
    >
      <div className="wrap grid">
        <Lines as="h1" className="page-hero__title head" lines={[title]} load />
        {sub ? (
          <p className="page-hero__sub" data-load style={css({ "--d": "450ms" })}>
            {sub}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function CtaBand({ locale }: { locale: Locale }) {
  const i = inner[locale];
  return (
    <section className="cta-band on-dark" data-ink="dark" aria-labelledby="cta-h">
      <div className="wrap grid">
        <h2 id="cta-h" data-reveal>
          {i.needHelp}
        </h2>
        <Link className="btn btn--on-dark" href={`${staticPath(locale, "contacto")}#cita`} data-reveal style={css({ "--i": 1 })}>
          {i.cta}
        </Link>
      </div>
    </section>
  );
}

export function PracticeAreaPage({ locale, area }: { locale: Locale; area: PracticeArea }) {
  const i = inner[locale];
  const idx = practiceAreas.findIndex((a) => a.group === area.group);
  const tone = ((idx % 4) + 1) as 1 | 2 | 3 | 4;
  const [first, ...rest] = area.intro[locale];

  return (
    <>
      <PageHero title={areaH1[area.group]?.[locale] ?? area.title[locale]} tone={tone} />
      <div className="wrap grid page-body">
        <aside className="side-nav" aria-label={i.areas}>
          <h2>{i.areas}</h2>
          <ul>
            {areaGroups.flat().map((g) => {
              const a = practiceAreas.find((x) => x.group === g)!;
              return (
                <li key={g} data-reveal="row">
                  <Link href={slugPath(locale, a.slug[locale])} aria-current={g === area.group ? "page" : undefined}>
                    {areaMeta[g][locale].short}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="page-main">
          <div className="prose prose--lead">
            <p>{first}</p>
          </div>
          <div className="prose" data-reveal>
            {rest.map((p, k) => (
              <p key={k}>{p}</p>
            ))}
          </div>
          <div data-reveal>
            <h2 className="subhead">{i.whatWeDo}</h2>
            <ul className="service-list">
              {servicesOf(area, locale).map((s, k) => (
                <li key={s} data-reveal="row" style={css({ "--i": k % 6 })}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <PhotoStrip locale={locale} set={idx} />
      <CtaBand locale={locale} />
    </>
  );
}

export function FirmaPage({ locale }: { locale: Locale }) {
  const c = firmPage[locale];
  const whyParagraphs = c.why.split("\n\n");
  return (
    <>
      <PageHero title={c.title} tone={1} sub={c.kicker} />
      <div className="wrap grid page-body">
        <div className="side-nav" />
        <div className="page-main">
          <div>
            <h2 className="subhead" data-reveal="row">
              {c.historyTitle}
            </h2>
            <p className="quote" data-reveal="row" style={css({ "--i": 1 })}>
              {c.quote}
            </p>
          </div>
          <div className="prose" data-reveal>
            <p>{c.history}</p>
          </div>
          <div>
            <h2 className="subhead" data-reveal="row">
              {c.whyTitle}
            </h2>
            <div className="prose">
              {whyParagraphs.map((p, k) => (
                <p key={k} data-reveal="row" style={css({ "--i": k + 1 })}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="subhead" data-reveal="row">
              {c.howTitle}
            </h2>
            <div className="prose">
              <p data-reveal="row" style={css({ "--i": 1 })}>
                {c.how}
              </p>
            </div>
          </div>
        </div>
      </div>
      <PhotoStrip locale={locale} set={0} />
      <CtaBand locale={locale} />
    </>
  );
}

export function ContactoPage({ locale }: { locale: Locale }) {
  const c = contactPage[locale];
  return (
    <>
      <PageHero title={c.title} tone={4} />
      <div className="wrap grid page-body">
        <div className="side-nav" />
        <div className="page-main">
          <div className="prose prose--lead">
            <p>{c.intro[0]}</p>
          </div>
          <div className="prose">
            {c.intro.slice(1).map((p, k) => (
              <p key={k} data-reveal="row" style={css({ "--i": k })}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ContactSection locale={locale} withHeading={false} />
      <PhotoStrip locale={locale} set={2} />
    </>
  );
}

export function ServiciosIndexPage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const c = home[locale];
  return (
    <>
      <PageHero title={t.servicesTitle} tone={3} sub={homeCopy[locale].areasSub} />
      <div className="wrap area-index" style={{ paddingBlock: "clamp(64px, 9vw, 120px) clamp(96px, 12vw, 180px)" }}>
        <div className="grid">
          <AreasTable locale={locale} groups={c.listGroups} />
        </div>
      </div>
      <PhotoStrip locale={locale} set={1} />
      <CtaBand locale={locale} />
    </>
  );
}

export function ActualidadPage({ locale }: { locale: Locale }) {
  const i = inner[locale];
  return (
    <>
      <PageHero title={i.newsTitle} tone={2} sub={i.newsNote} />
      <div className="wrap grid page-body">
        <div className="side-nav" />
        <div className="page-main">
          <div className="post-list">
            {blogPosts.map((post, k) => (
              <article className="post" key={post.slug} data-reveal style={css({ "--i": k % 3 })}>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(dateLocale[locale], {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2>{post.title[locale]}</h2>
                <p>{post.excerpt[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <PhotoStrip locale={locale} set={1} />
    </>
  );
}

const privacySub: Record<Locale, string> = {
  es: "Cómo se tratan los datos que nos facilitas.",
  ca: "Com es tracten les dades que ens facilites.",
  en: "How we handle the data you give us.",
};

export function PrivacidadPage({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <>
      <PageHero title={t.privacy} tone={3} sub={privacySub[locale]} />
      <div className="wrap grid page-body">
        <div className="side-nav" />
        <div className="page-main">
          <div className="prose">
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
      </div>
      <PhotoStrip locale={locale} set={2} />
    </>
  );
}

export { staticSlugs };
