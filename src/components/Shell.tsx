import { Locale } from "@/lib/content";
import Header from "./Header";
import Footer from "./Footer";
import Motion from "./Motion";

export default function Shell({
  locale,
  alt,
  home = false,
  children,
}: {
  locale: Locale;
  alt?: Partial<Record<Locale, string>>;
  home?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div lang={locale}>
      <Header locale={locale} alt={alt} home={home} />
      <main id="contenido">{children}</main>
      <Footer locale={locale} />
      <Motion />
    </div>
  );
}
