"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ds } from "@/lib/theme";

/**
 * One number, what it counts, and a line of provenance. Filled the way the
 * app's stat tiles are: surface-container-low, 12px corners, no border and
 * no shadow. Every tile in the row is the same treatment.
 */
export default function StatBadge({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <Stack
      spacing={0.75}
      sx={{
        backgroundColor: ds.surfaceLow,
        borderRadius: "12px",
        p: 2,
        height: "100%",
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: { xs: "1.75rem", md: "2rem" },
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          fontVariantNumeric: "tabular-nums",
          color: "text.primary",
        }}
      >
        {value}
      </Typography>
      <Typography variant="body2" component="p" sx={{ fontWeight: 500 }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {detail}
      </Typography>
    </Stack>
  );
}
