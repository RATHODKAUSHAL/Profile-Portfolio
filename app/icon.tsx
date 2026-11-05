import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
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
          background: "#ffeb3b",
          border: "32px solid #000000",
          borderRadius: 112,
          fontSize: 220,
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
