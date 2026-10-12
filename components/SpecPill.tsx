import * as React from "react";
import Box from "@mui/material/Box";
import { accent, type Accent } from "@/lib/tokens";

/**
 * The hero GIF's specialist pill: tint fill, solid outline, on-tint text and an
 * icon, so the colour never carries meaning on its own.
 */
export default function SpecPill({
  tone,
  icon,
  children,
}: {
  tone: Accent;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const a = accent(tone);
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75,
        height: 30,
        pl: icon ? 1.1 : 1.5,
        pr: 1.5,
        borderRadius: 999,
        border: `1.5px solid ${a.solid}`,
        backgroundColor: a.tint,
        color: a.ink,
        fontSize: "0.8125rem",
        fontWeight: 650,
        letterSpacing: "-0.005em",
        whiteSpace: "nowrap",
        "& svg": { fontSize: 17, display: "block" },
      }}
    >
      {icon}
      {children}
    </Box>
  );
}
