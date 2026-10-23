import { ImageResponse } from "next/og";
import { hero, plain, site } from "@/content/site";

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
          background: "#F7F1E6",
          color: "#1F1A15",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none" style={{ marginRight: 18 }}>
            <path d="M56 42 V8 H8 V56 H42" stroke="#C2410C" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            <path d="M21 47 V17 H34 A8.5 8.5 0 0 1 34 34 H21 M33 34 L59 60" stroke="#C2410C" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          {site.name}
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -4 }}>{plain(hero.headline)}</div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 32, fontWeight: 600 }}>
          <div style={{ width: 40, height: 6, borderRadius: 3, background: "#C2410C", marginRight: 18 }} />
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}
