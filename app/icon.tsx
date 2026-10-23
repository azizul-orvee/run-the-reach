import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="14" fill="#1F1A15" />
        <g transform="translate(32 32) scale(0.84) translate(-32 -32)">

          <path d="M56 42 V8 H8 V56 H42" stroke="#E2611F" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />

          <path d="M21 47 V17 H34 A8.5 8.5 0 0 1 34 34 H21 M33 34 L59 60" stroke="#E2611F" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />

        </g>
      </svg>
    ),
    size,
  );
}
