import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "MH & MG Abogados, especialistas en tu derecho en Barcelona y Roses";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#1738c4",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 38, fontWeight: 600, letterSpacing: -1 }}>MH &amp; MG Abogados</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 148, fontWeight: 600, letterSpacing: -7, lineHeight: 0.92 }}>
          <div style={{ display: "flex" }}>Especialistas</div>
          <div style={{ display: "flex" }}>en tu derecho</div>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#dcd6cb" }}>Barcelona y Roses</div>
      </div>
    ),
    { ...size }
  );
}
