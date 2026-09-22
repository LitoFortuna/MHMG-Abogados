import { Metadata } from "next";
import { getSlugMetadata, SlugPage } from "@/components/SlugPage";
import { allSlugsForLocale } from "@/lib/resolve";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return allSlugsForLocale("ca").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return getSlugMetadata("ca", slug);
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  return <SlugPage locale="ca" slug={slug} />;
}
