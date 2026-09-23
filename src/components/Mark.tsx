export default function Mark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="MH & MG Abogados">
      <rect x="1" y="1" width="62" height="62" rx="12" fill="#0B2622" />
      <rect x="1" y="1" width="62" height="62" rx="12" fill="none" stroke="#AD8248" strokeWidth="1" strokeOpacity="0.5" />
      <g stroke="#D9B583" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="32" y1="12" x2="32" y2="36" />
        <line x1="16" y1="36" x2="48" y2="36" />
        <path d="M32 15 L18 36" />
        <path d="M32 15 L46 36" />
      </g>
      <circle cx="18" cy="36" r="3" fill="#0B2622" stroke="#D9B583" strokeWidth="1.6" />
      <circle cx="46" cy="36" r="3" fill="#0B2622" stroke="#D9B583" strokeWidth="1.6" />
      <circle cx="32" cy="12" r="1.7" fill="#D9B583" />
      <line x1="12" y1="46" x2="52" y2="46" stroke="#AD8248" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
