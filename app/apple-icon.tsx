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
          background: "#ffeb3b",
          border: "12px solid #000000",
          borderRadius: 40,
          fontSize: 76,
          fontWeight: 800,
          color: "#000000",
        }}
      >
        KR
      </div>
    ),
    size,
  );
}
