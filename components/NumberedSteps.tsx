"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Reveal from "./Reveal";

/**
 * An ordered walkthrough where the order is the point. The rail down the left
 * carries the eye between steps, so a reader who looks away mid-install can
 * find their place again, which is the whole job of a numbered list that runs
 * to eleven items.
 */
export default function NumberedSteps({ steps }: { steps: readonly { t: string; b: string }[] }) {
  return (
    <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0 }}>
      {steps.map((s, i) => (
        <Reveal key={s.t} delay={Math.min(i, 6) * 40}>
          <Stack component="li" direction="row" spacing={{ xs: 2, md: 3 }} sx={{ alignItems: "flex-start" }}>
            <Stack sx={{ alignItems: "center", alignSelf: "stretch", flexShrink: 0 }}>
              <Box
                sx={(t) => ({
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "primary.main",
                  backgroundColor: alpha(t.palette.primary.main, 0.1),
                })}
              >
                {i + 1}
              </Box>
              {i < steps.length - 1 && (
                <Box sx={{ width: "2px", flex: 1, minHeight: 18, backgroundColor: "divider", my: 0.75 }} />
              )}
            </Stack>
            <Box sx={{ pb: i < steps.length - 1 ? 3.5 : 0, pt: 0.25 }}>
              <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                {s.t}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {s.b}
              </Typography>
            </Box>
          </Stack>
        </Reveal>
      ))}
    </Box>
  );
}
