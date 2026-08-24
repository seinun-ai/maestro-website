"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

/**
 * A highlighter stroke behind a phrase. The brand carries a yellow that the app
 * itself has no room for — a marketing page does, and one accent used sparingly
 * on the single most important phrase per screen is what gives a landing page
 * its focal point.
 */
export default function Mark({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        position: "relative",
        display: "inline",
        backgroundImage: `linear-gradient(to top, ${alpha("#FBBF24", 0.5)} 0%, ${alpha(
          "#FBBF24",
          0.5,
        )} 34%, transparent 34%)`,
        backgroundRepeat: "no-repeat",
        paddingInline: "0.08em",
      }}
    >
      {children}
    </Box>
  );
}
