import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #4a0e19 0%, #6f1626 100%)",
          color: "#faf6ee",
        }}
      >
        <div style={{ width: 64, height: 6, background: "#c9a13b", marginBottom: 32 }} />
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1 }}>MH & MG Abogados</div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#e6c874", maxWidth: 820 }}>
          Especialistas en tu derecho, con más de 25 años a tu lado
        </div>
        <div style={{ fontSize: 24, marginTop: 40, color: "rgba(250,246,238,0.75)" }}>Barcelona · Roses (Girona)</div>
      </div>
    ),
    { ...size }
  );
}
