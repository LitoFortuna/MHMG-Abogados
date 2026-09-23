import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B2622",
          borderRadius: 12,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 64 64">
          <g stroke="#D9B583" strokeWidth="2" fill="none">
            <line x1="32" y1="12" x2="32" y2="36" />
            <line x1="16" y1="36" x2="48" y2="36" />
            <path d="M32 15 L18 36" />
            <path d="M32 15 L46 36" />
          </g>
          <circle cx="18" cy="36" r="3.4" fill="#0B2622" stroke="#D9B583" strokeWidth="2" />
          <circle cx="46" cy="36" r="3.4" fill="#0B2622" stroke="#D9B583" strokeWidth="2" />
          <circle cx="32" cy="12" r="2" fill="#D9B583" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
