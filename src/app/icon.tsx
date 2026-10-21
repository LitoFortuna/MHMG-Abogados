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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1738c4",
          color: "#ffffff",
          fontSize: 25,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: -1,
        }}
      >
        <div style={{ display: "flex" }}>MH</div>
        <div style={{ display: "flex" }}>MG</div>
      </div>
    ),
    { ...size }
  );
}
