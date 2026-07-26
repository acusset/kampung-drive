import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#10302b",
          borderRadius: 7,
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          fontSize: 21,
          color: "#f6f1e4",
        }}
      >
        K<span style={{ color: "#f2a93b" }}>.</span>
      </div>
    ),
    { ...size },
  );
}
