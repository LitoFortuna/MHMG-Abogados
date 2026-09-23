export default function PageBanner({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="bg-sea-deep text-paper">
      <div className="container-page py-14 sm:py-20">
        <p className="font-mono text-brass-light text-xs sm:text-[0.8rem] font-medium tracking-[0.18em] uppercase mb-3">{eyebrow}</p>
        <h1 className="font-serif text-3xl sm:text-5xl">{title}</h1>
      </div>
      <div className="horizon-rule" />
    </div>
  );
}
