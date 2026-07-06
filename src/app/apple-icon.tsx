import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #030712 0%, #1e1b4b 100%)",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -2,
            background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
            backgroundClip: "text",
            color: "#818cf8",
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size },
  );
}
