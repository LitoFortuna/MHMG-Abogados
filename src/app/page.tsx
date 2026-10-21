import { Metadata } from "next";
import Shell from "@/components/Shell";
import { HomePage } from "@/components/templates";
import { buildMetadata } from "@/lib/metadata";
import { homeAltLinks, homePath } from "@/lib/paths";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Abogados en Barcelona y Roses | MH & MG Abogados",
    description:
      "MH & MG Abogados ofrece asesoramiento jurídico cercano y multilingüe en Barcelona y Roses, con más de 25 años de experiencia para particulares y empresas.",
    path: homePath("es"),
    alt: homeAltLinks(),
    locale: "es",
  });
}

export default function Page() {
  return (
    <Shell locale="es" alt={homeAltLinks()} home>
      <HomePage locale="es" />
    </Shell>
  );
}
