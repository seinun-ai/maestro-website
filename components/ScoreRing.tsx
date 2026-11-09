import * as React from "react";
import Box from "@mui/material/Box";

/** A Match score ring. The number sits in the middle, so the ring needs no label to read. */
export default function ScoreRing({
  value,
  size = 96,
  stroke = 8,
  color,
  track,
  text,
  fontSize = "1.375rem",
}: {
  value: number;
  size?: number;
  stroke?: number;
  color: string;
  track: string;
  text: string;
  fontSize?: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <Box sx={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden style={{ transform: "rotate(-90deg)", display: "block" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - value / 100)} />
      </svg>
      <Box sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize, fontWeight: 600, color: text, fontVariantNumeric: "tabular-nums" }}>
        {value.toFixed(1)}
      </Box>
    </Box>
  );
}
