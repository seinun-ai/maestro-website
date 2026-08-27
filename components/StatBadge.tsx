"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

/**
 * One oversized figure with its unit and a line of provenance. The accent
 * variant is reserved for the cost claim, the number that reframes the
 * whole category, so it gets the brand yellow and nothing else does.
 */
export default function StatBadge({
  value,
  label,
  detail,
  accent = false,
}: {
  value: string;
  label: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <Stack spacing={0.75}>
      <Typography
        component="p"
        sx={{
          fontSize: { xs: "2.4rem", md: "3rem" },
          fontWeight: 800,
          letterSpacing: "-0.045em",
          lineHeight: 1,
          color: accent ? "#B4790B" : "text.primary",
          ...(accent
            ? {
                width: "fit-content",
                px: 1,
                mx: -1,
                borderRadius: 1.5,
                backgroundColor: alpha("#FBBF24", 0.22),
              }
            : null),
        }}
      >
        {value}
      </Typography>
      <Typography variant="h6" component="p">
        {label}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {detail}
      </Typography>
      <Box />
    </Stack>
  );
}
