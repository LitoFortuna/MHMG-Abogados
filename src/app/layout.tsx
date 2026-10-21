import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { offices, siteName } from "@/lib/content";
import { siteUrl } from "@/lib/paths";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
};

export const viewport: Viewport = {
  themeColor: "#1738c4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization"],
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    email: offices.email,
    foundingDate: "2001",
    sameAs: ["https://www.facebook.com/mhmg.abogados"],
    logo: `${siteUrl}/icon`,
    image: `${siteUrl}/opengraph-image`,
    knowsLanguage: ["es", "ca", "en", "nl", "de"],
    department: [
      {
        "@type": "LegalService",
        name: `${siteName} · Barcelona`,
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
        name: `${siteName} · Roses (Girona)`,
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
    <html lang="es" className={hanken.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
