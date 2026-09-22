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
          background: "#C9A13B",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 34,
            height: 34,
            border: "3px solid #6F1626",
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            color: "#6F1626",
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          MG
        </div>
      </div>
    ),
    { ...size }
  );
}
