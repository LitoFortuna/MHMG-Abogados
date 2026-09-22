import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale } from "@/lib/content";
import { resolveSlug } from "@/lib/resolve";
import { practiceAltLinks, staticAltLinks, slugPath } from "@/lib/paths";
import { buildMetadata } from "@/lib/metadata";
import Shell from "./Shell";
import {
  ActualidadPage,
  ContactoPage,
  FirmaPage,
  PracticeAreaPage,
  PrivacidadPage,
  ServiciosIndexPage,
} from "./templates";

const staticMeta: Record<
  "firma" | "contacto" | "servicios" | "actualidad" | "privacidad",
  Record<Locale, { title: string; description: string }>
> = {
  firma: {
    es: { title: "La Firma | Despacho de Abogados en Barcelona y Roses", description: "Conoce a MH & MG Abogados: más de 25 años defendiendo los intereses de nuestros clientes en Barcelona y Roses (Girona)." },
    ca: { title: "El Despatx | Advocats a Barcelona i Roses", description: "Coneix MH & MG Abogados: més de 25 anys defensant els interessos dels nostres clients a Barcelona i Roses (Girona)." },
    en: { title: "The Firm | MHMG Abogados - Lawyers in Barcelona and Roses (Girona)", description: "Meet MH & MG Abogados: more than 25 years defending our clients' interests in Barcelona and Roses (Girona)." },
  },
  contacto: {
    es: { title: "Contacto | Abogados en Barcelona y Roses", description: "Pide tu cita presencial o telemática en Barcelona o Roses (Girona). Presupuesto sin compromiso." },
    ca: { title: "Contacte | Advocats a Barcelona i Roses", description: "Demana la teva cita presencial o telemàtica a Barcelona o Roses (Girona). Pressupost sense compromís." },
    en: { title: "Contact | Lawyers in Barcelona and Roses", description: "Book your in-person or online appointment in Barcelona or Roses (Girona). No-obligation quote." },
  },
  servicios: {
    es: { title: "Servicios Jurídicos en Barcelona y Roses", description: "Todas nuestras áreas de práctica: civil, familia, inmobiliario, penal, extranjería, sucesiones y más." },
    ca: { title: "Serveis Jurídics a Barcelona i Roses (Girona)", description: "Totes les nostres àrees de pràctica: civil, família, immobiliari, penal, estrangeria, successions i més." },
    en: { title: "Legal Services in Barcelona and Roses (Girona)", description: "All our practice areas: civil, family, real estate, criminal, immigration, inheritance and more." },
  },
  actualidad: {
    es: { title: "Actualidad Jurídica", description: "Noticias y artículos legales de interés de MH & MG Abogados, abogados en Barcelona y Roses." },
    ca: { title: "Actualitat Jurídica", description: "Notícies i articles legals d'interès de MH & MG Abogados, advocats a Barcelona i Roses." },
    en: { title: "Legal News", description: "Legal news and articles of interest from MH & MG Abogados, lawyers in Barcelona and Roses." },
  },
  privacidad: {
    es: { title: "Política de Privacidad", description: "Política de privacidad de MH & MG Abogados." },
    ca: { title: "Política de Privacitat", description: "Política de privacitat de MH & MG Abogados." },
    en: { title: "Privacy Policy", description: "Privacy policy of MH & MG Abogados." },
  },
};

export function getSlugMetadata(locale: Locale, slug: string): Metadata {
  const resolved = resolveSlug(locale, slug);
  if (!resolved) return {};

  const path = slugPath(locale, slug);

  if (resolved.type === "practice") {
    return buildMetadata({
      title: resolved.area.metaTitle[locale],
      description: resolved.area.metaDescription[locale],
      path,
      alt: practiceAltLinks(resolved.area.group),
      locale,
    });
  }

  const meta = staticMeta[resolved.type][locale];
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path,
    alt: staticAltLinks(resolved.type),
    locale,
  });
}

export function SlugPage({ locale, slug }: { locale: Locale; slug: string }) {
  const resolved = resolveSlug(locale, slug);
  if (!resolved) notFound();

  const alt = resolved.type === "practice" ? practiceAltLinks(resolved.area.group) : staticAltLinks(resolved.type);

  return (
    <Shell locale={locale} alt={alt}>
      {resolved.type === "practice" && <PracticeAreaPage locale={locale} area={resolved.area} />}
      {resolved.type === "firma" && <FirmaPage locale={locale} />}
      {resolved.type === "contacto" && <ContactoPage locale={locale} />}
      {resolved.type === "servicios" && <ServiciosIndexPage locale={locale} />}
      {resolved.type === "actualidad" && <ActualidadPage locale={locale} />}
      {resolved.type === "privacidad" && <PrivacidadPage locale={locale} />}
    </Shell>
  );
}
