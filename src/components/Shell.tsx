import { Locale } from "@/lib/content";
import Header from "./Header";
import Footer from "./Footer";

export default function Shell({
  locale,
  alt,
  children,
}: {
  locale: Locale;
  alt?: Partial<Record<Locale, string>>;
  children: React.ReactNode;
}) {
  return (
    <div lang={locale}>
      <Header locale={locale} alt={alt} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
