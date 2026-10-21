"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Locale, localeLabel, locales, nav } from "@/lib/content";
import { home as homeCopy, shell } from "@/lib/copy";
import { homePath, staticPath } from "@/lib/paths";

export default function Header({
  locale,
  alt,
  home = false,
}: {
  locale: Locale;
  alt?: Partial<Record<Locale, string>>;
  home?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [heroAction, setHeroAction] = useState(home);
  const pathname = usePathname();
  const t = nav[locale];
  const s = shell[locale];
  const cta = homeCopy[locale].cta;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!home) {
      setHeroAction(false);
      return;
    }
    const target = document.querySelector("[data-hero-action]");
    if (!target || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setHeroAction(entry.isIntersecting), {
      rootMargin: "-72px 0px 0px 0px",
    });
    io.observe(target);
    return () => io.disconnect();
  }, [home, pathname]);

  const links = [
    { key: "firma", label: t.firma, href: staticPath(locale, "firma") },
    { key: "servicios", label: t.servicios, href: staticPath(locale, "servicios") },
    { key: "actualidad", label: t.actualidad, href: staticPath(locale, "actualidad") },
    { key: "contacto", label: t.contacto, href: staticPath(locale, "contacto") },
  ];
  const current = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  const langs = (
    <div className="lang" role="group" aria-label="Idioma / Language">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={alt?.[loc] || homePath(loc)}
          hrefLang={loc}
          lang={loc}
          aria-label={localeLabel[loc]}
          aria-current={loc === locale ? "true" : undefined}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <a className="skip-link" href="#contenido">
        {s.skip}
      </a>
      <header className="site-header">
        <div className="wrap grid">
          <Link href={homePath(locale)} className="wordmark">
            MH &amp; MG Abogados
          </Link>

          <nav className="site-nav" aria-label={s.navLabel}>
            {links.map((l) => (
              <Link key={l.key} href={l.href} aria-current={current(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__end">
            <Link
              href={`${homePath(locale)}#cita`}
              className="btn header-action"
              data-hidden={heroAction ? "true" : "false"}
              tabIndex={heroAction ? -1 : undefined}
            >
              {cta}
            </Link>
            {langs}
            <button
              type="button"
              className="menu-button"
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? s.close : s.menu}
            </button>
          </div>
        </div>
      </header>

      <div id="menu" className="menu-panel" hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.key}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        {langs}
        <Link
          href={`${homePath(locale)}#cita`}
          className="btn"
          onClick={() => setOpen(false)}
        >
          {cta}
        </Link>
      </div>
    </>
  );
}
