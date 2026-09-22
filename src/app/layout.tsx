import type { Metadata } from "next";
import { Cormorant_SC, Poppins } from "next/font/google";
import "./globals.css";
import { offices, siteName } from "@/lib/content";
import { siteUrl } from "@/lib/paths";

const cormorant = Cormorant_SC({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    email: offices.email,
    sameAs: ["https://www.facebook.com/mhmg.abogados"],
    logo: `${siteUrl}/images/mark.png`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "20:00",
    },
    department: [
      {
        "@type": "LegalService",
        name: `${siteName} — Barcelona`,
        telephone: offices.barcelona.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: offices.barcelona.address,
          addressLocality: offices.barcelona.city,
          postalCode: offices.barcelona.postalCode,
          addressCountry: "ES",
        },
      },
      {
        "@type": "LegalService",
        name: `${siteName} — Roses (Girona)`,
        telephone: offices.roses.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: offices.roses.address,
          addressLocality: offices.roses.city,
          postalCode: offices.roses.postalCode,
          addressCountry: "ES",
        },
      },
    ],
  };

  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${poppins.variable} antialiased font-sans bg-cream text-ink`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
