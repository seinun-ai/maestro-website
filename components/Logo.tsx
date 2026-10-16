import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

/**
 * Header lockup. The brand package says not to shrink the full wordmark SVG
 * below legibility in compact headers, so the mark ships as the SVG master and
 * the wordmark is set as text in the site's typeface (Figtree), at the 500
 * label weight. The SVG lockups in public/brand keep their own drawn letters.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
      <Box
        component="img"
        src="/brand/maestro_mark_small.svg"
        alt=""
        aria-hidden
        sx={{ width: 26, height: 26, display: "block", flexShrink: 0 }}
      />
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
            color: "text.secondary",
          }}
        >
          Career Studio
        </Typography>
      </Stack>
    </Stack>
  );
}
