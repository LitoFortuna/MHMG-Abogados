export default function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="MH & MG Abogados">
      <rect x="1" y="1" width="62" height="62" rx="14" fill="#C9A13B" />
      <rect x="1" y="1" width="62" height="62" rx="14" fill="none" stroke="#6F1626" strokeWidth="1.5" />
      <g stroke="#6F1626" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="32" y1="14" x2="32" y2="46" />
        <line x1="18" y1="22" x2="46" y2="22" />
        <path d="M18 22 L12 32 A6.5 6.5 0 0 0 24 32 Z" />
        <path d="M46 22 L40 32 A6.5 6.5 0 0 0 52 32 Z" />
        <line x1="24" y1="50" x2="40" y2="50" />
        <line x1="32" y1="46" x2="32" y2="50" />
      </g>
      <circle cx="32" cy="14" r="2.6" fill="#6F1626" />
    </svg>
  );
}
