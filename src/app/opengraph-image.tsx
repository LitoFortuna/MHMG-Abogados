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
          padding: "88px",
          background: "#0B2622",
          color: "#F1ECDF",
        }}
      >
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 3, color: "#D9B583", marginBottom: 28 }}>
          41.3874°N BARCELONA — 42.2624°N ROSES
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600, letterSpacing: -1, maxWidth: 980 }}>
          Especialistas en tu derecho, con más de 25 años a tu lado
        </div>
        <div style={{ display: "flex", width: 1024, height: 1, background: "#AD8248", marginTop: 40 }} />
        <div style={{ display: "flex", fontSize: 26, marginTop: 32, color: "rgba(241,236,223,0.72)" }}>
          MH &amp; MG Abogados
        </div>
      </div>
    ),
    { ...size }
  );
}
