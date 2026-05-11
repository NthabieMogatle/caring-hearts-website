import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Caring Hearts Assisted Living — Compassionate Care. Safe Living. Dignified Life.";

export default function OpengraphImage() {
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
          background:
            "radial-gradient(ellipse at center, #1a1a1d 0%, #0E0E10 80%)",
          color: "#FAF6EF",
          fontFamily: "Georgia, serif",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Logo: hands + heart */}
        <svg width="120" height="120" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 38c0-6 4-11 9-11 3 0 5 1.5 6.5 3.5L32 42l-6 6c-4 4-10 4-14 0-4-4-6-6-6-10z"
            fill="none"
            stroke="#C9A35B"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M58 38c0-6-4-11-9-11-3 0-5 1.5-6.5 3.5L32 42l6 6c4 4 10 4 14 0 4-4 6-6 6-10z"
            fill="none"
            stroke="#C9A35B"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M32 36s-9-5-9-12a6 6 0 0 1 9-5 6 6 0 0 1 9 5c0 7-9 12-9 12z"
            fill="#C8262C"
          />
        </svg>

        <div
          style={{
            marginTop: 36,
            fontSize: 72,
            letterSpacing: 18,
            textTransform: "uppercase",
            color: "#FAF6EF",
            fontWeight: 500,
          }}
        >
          Caring Hearts
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#C9A35B",
          }}
        >
          Assisted Living
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 36,
          }}
        >
          <div style={{ width: 80, height: 1, background: "#C9A35B" }} />
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path
              d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"
              fill="#C9A35B"
            />
          </svg>
          <div style={{ width: 80, height: 1, background: "#C9A35B" }} />
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 36,
            color: "#FAF6EF",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Compassionate Care · Safe Living · Dignified Life
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 50,
            fontSize: 20,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(250, 246, 239, 0.55)",
          }}
        >
          Hartford, Connecticut · 860.930.1305
        </div>
      </div>
    ),
    { ...size }
  );
}
