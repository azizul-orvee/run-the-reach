import { ImageResponse } from "next/og";
import { hero, site } from "@/content/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0B0D",
          color: "#F1EEE7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 24, fontWeight: 500, letterSpacing: 8, textTransform: "uppercase" }}>
          <svg width="56" height="56" viewBox="0 0 64 64" fill="none" style={{ marginRight: 18 }}>
            <path d="M56 42 V8 H8 V56 H42" stroke="#FFB31A" strokeWidth="2" strokeLinejoin="miter" />
            <path d="M21 47 V17 H34 A8.5 8.5 0 0 1 34 34 H21 M33 34 L59 60" stroke="#FFB31A" strokeWidth="4" strokeLinejoin="miter" />
          </svg>
          {site.name}
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>{hero.headline}</div>
        <div style={{ fontSize: 30, color: "#FFB31A", fontWeight: 600 }}>{site.motto}</div>
      </div>
    ),
    size,
  );
}
