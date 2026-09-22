export default function PageBanner({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="bg-maroon text-cream">
      <div className="container-page py-14 sm:py-20">
        <p className="text-gold-light text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">{eyebrow}</p>
        <h1 className="font-serif text-3xl sm:text-5xl">{title}</h1>
      </div>
    </div>
  );
}
