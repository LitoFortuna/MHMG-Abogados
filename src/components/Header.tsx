"use client";

import Link from "next/link";
import { useState } from "react";
import { Locale, localeLabel, locales, nav, practiceAreas } from "@/lib/content";
import { homePath, slugPath, staticPath } from "@/lib/paths";
import Mark from "./Mark";

export default function Header({
  locale,
  alt,
}: {
  locale: Locale;
  alt?: Partial<Record<Locale, string>>;
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const t = nav[locale];

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-sea/10">
      <div className="container-page flex items-center justify-between h-16">
        <Link href={homePath(locale)} className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <Mark className="h-9 w-9 shrink-0" />
          <span className="font-serif text-lg sm:text-xl text-sea leading-tight">MH &amp; MG</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[0.8rem] font-medium tracking-[0.06em] uppercase text-ink/80">
          <Link href={staticPath(locale, "firma")} className="hover:text-sea transition-colors">
            {t.firma}
          </Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link href={staticPath(locale, "servicios")} className="hover:text-sea transition-colors">
              {t.servicios}
            </Link>
            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                <ul className="rounded-md border border-sea/10 bg-linen shadow-xl py-2 normal-case font-normal tracking-normal text-[0.92rem]">
                  {practiceAreas.map((area) => (
                    <li key={area.group}>
                      <Link href={slugPath(locale, area.slug[locale])} className="block px-4 py-2 hover:bg-paper hover:text-sea transition-colors">
                        {area.navTitle[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link href={staticPath(locale, "actualidad")} className="hover:text-sea transition-colors">
            {t.actualidad}
          </Link>
          <Link href={staticPath(locale, "contacto")} className="hover:text-sea transition-colors">
            {t.contacto}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher locale={locale} alt={alt} />
          <Link
            href={staticPath(locale, "contacto")}
            className="inline-flex items-center rounded-sm bg-sea px-5 py-2.5 text-sm font-semibold text-paper hover:bg-sea-deep transition-colors"
          >
            {t.cta}
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-sea/20"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-5 flex flex-col gap-1.5">
            <span className="h-0.5 bg-sea block" />
            <span className="h-0.5 bg-sea block" />
            <span className="h-0.5 bg-sea block" />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-sea/10 bg-paper">
          <div className="container-page py-4 flex flex-col gap-1 text-sm font-medium">
            <Link href={staticPath(locale, "firma")} className="py-2" onClick={() => setOpen(false)}>
              {t.firma}
            </Link>
            <Link href={staticPath(locale, "servicios")} className="py-2" onClick={() => setOpen(false)}>
              {t.servicios}
            </Link>
            <ul className="pl-3 flex flex-col gap-1 border-l border-sea/15 mb-1">
              {practiceAreas.map((area) => (
                <li key={area.group}>
                  <Link href={slugPath(locale, area.slug[locale])} className="block py-1.5 text-[0.9rem] text-ink/80" onClick={() => setOpen(false)}>
                    {area.navTitle[locale]}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={staticPath(locale, "actualidad")} className="py-2" onClick={() => setOpen(false)}>
              {t.actualidad}
            </Link>
            <Link href={staticPath(locale, "contacto")} className="py-2" onClick={() => setOpen(false)}>
              {t.contacto}
            </Link>
            <div className="pt-2 flex items-center gap-3">
              <LanguageSwitcher locale={locale} alt={alt} />
            </div>
            <Link
              href={staticPath(locale, "contacto")}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-sea px-5 py-2.5 text-sm font-semibold text-paper"
              onClick={() => setOpen(false)}
            >
              {t.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({ locale, alt }: { locale: Locale; alt?: Partial<Record<Locale, string>> }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs font-medium">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink/25">/</span>}
          <Link
            href={alt?.[loc] || homePath(loc)}
            className={loc === locale ? "text-sea" : "text-ink/45 hover:text-sea transition-colors"}
            aria-label={localeLabel[loc]}
          >
            {loc.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
