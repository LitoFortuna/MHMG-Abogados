import { Metadata } from "next";
import Shell from "@/components/Shell";
import { HomePage } from "@/components/templates";
import { buildMetadata } from "@/lib/metadata";
import { homeAltLinks, homePath } from "@/lib/paths";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "MH&MG Advocats | Despatx d'Advocats a Barcelona i Roses",
    description:
      "MH & MG Abogados ofereix assessorament jurídic proper i multilingüe a Barcelona i Roses, amb més de 25 anys d'experiència per a particulars i empreses.",
    path: homePath("ca"),
    alt: homeAltLinks(),
    locale: "ca",
  });
}

export default function Page() {
  return (
    <Shell locale="ca" alt={homeAltLinks()} home>
      <HomePage locale="ca" />
    </Shell>
  );
}
