import { Metadata } from "next";
import Shell from "@/components/Shell";
import { HomePage } from "@/components/templates";
import { buildMetadata } from "@/lib/metadata";
import { homeAltLinks, homePath } from "@/lib/paths";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "MH&MG Abogados | Law Firm in Barcelona and Roses",
    description:
      "MH & MG Abogados offers close, multilingual legal advice in Barcelona and Roses, with more than 25 years of experience for individuals and businesses.",
    path: homePath("en"),
    alt: homeAltLinks(),
    locale: "en",
  });
}

export default function Page() {
  return (
    <Shell locale="en" alt={homeAltLinks()} home>
      <HomePage locale="en" />
    </Shell>
  );
}
