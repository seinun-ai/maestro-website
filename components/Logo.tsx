import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { c, stage } from "@/lib/tokens";

/** The one-colour M from public/brand/maestro_mark.svg, inline so it takes the text colour. */
const MARK =
  "M29.82 209.74 A5 5 0 0 1 29.07 206.18 L56.07 43.18 A5 5 0 0 1 56.33 42.22 L57.64 38.78 A5 5 0 0 1 59.51 36.42 L61.45 35.11 A5 5 0 0 1 65.76 34.48 L68.32 35.3 A5 5 0 0 1 70.2 36.39 L73.39 39.32 A5 5 0 0 1 73.62 39.55 L128 96.74 L182.38 39.55 A5 5 0 0 1 182.61 39.32 L185.8 36.39 A5 5 0 0 1 187.68 35.3 L190.24 34.48 A5 5 0 0 1 194.55 35.11 L196.49 36.42 A5 5 0 0 1 198.36 38.78 L199.67 42.22 A5 5 0 0 1 199.93 43.18 L226.93 206.18 A5 5 0 0 1 226.18 209.74 L221.56 216.8 A5 5 0 0 1 220.11 218.25 L215.24 221.43 A5 5 0 0 1 211.84 222.21 L206.71 221.52 A5 5 0 0 1 204.14 220.37 L198.76 215.81 A5 5 0 0 1 198.46 215.54 L128 145.07 L57.54 215.54 A5 5 0 0 1 57.24 215.81 L51.86 220.37 A5 5 0 0 1 49.29 221.52 L44.16 222.21 A5 5 0 0 1 40.76 221.43 L35.89 218.25 A5 5 0 0 1 34.44 216.8Z";

/**
 * Header lockup. The brand package says not to shrink the full wordmark SVG
 * below legibility in compact headers, so the mark is drawn inline from the SVG
 * master, in the colour of the text around it (light on the stage, ink on light),
 * and the wordmark is set as text in the site's typeface (Figtree), at the 500
 * label weight. The SVG lockups in public/brand keep their own drawn letters.
 */
/** `onDark` sets the mark and the second line for the stage; the wordmark takes the colour around it. */
export default function Logo({ compact = false, onDark = false }: { compact?: boolean; onDark?: boolean }) {
  return (
    <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
      <Box
        component="svg"
        // Cropped to the M, which spans about 30 to 226 of the master's 256.
        viewBox="20 20 216 216"
        aria-hidden
        sx={{ width: 26, height: 26, display: "block", flexShrink: 0, color: onDark ? stage.fg : c.fg }}
      >
        <path d={MARK} fill="currentColor" />
      </Box>
      <Stack spacing={0} sx={{ display: compact ? { xs: "none", sm: "flex" } : "flex" }}>
        <Typography
          component="span"
          sx={{ fontWeight: 500, fontSize: "1.0625rem", letterSpacing: "-0.025em", lineHeight: 1.1 }}
        >
          Maestro
        </Typography>
        <Typography
          component="span"
          sx={{
            fontWeight: 500,
            fontSize: "0.625rem",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            lineHeight: 1.2,
            color: onDark ? stage.muted : "text.secondary",
          }}
        >
          Career Studio
        </Typography>
      </Stack>
    </Stack>
  );
}
