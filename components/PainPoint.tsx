"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";
import { LinkButton } from "./NextMui";
import Reveal from "./Reveal";

export type Pain = {
  pain: string;
  answer: string;
  body: string;
  feature: string;
  href: string;
};

/**
 * Pain in the reader's own words, then the fix.
 *
 * The earlier version put the two in bare columns and the short left-hand pain
 * left a well of dead space beside a long right-hand paragraph, with nothing
 * tying them together. Now the pain is a full-width line the reader meets
 * first, and the answer sits under it in a tinted panel with an accent edge —
 * so the pairing reads as one unit, and the vertical rhythm stays tight
 * whatever the length of either half.
 */
export default function PainPoint({ item, index }: { item: Pain; index: number }) {
  return (
    <Reveal>
      <Box sx={{ py: { xs: 3, md: 3.5 } }}>
        <Grid container spacing={{ xs: 1.5, md: 4 }} sx={{ alignItems: "baseline" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={{ xs: 1.5, md: 2 }} sx={{ alignItems: "baseline" }}>
              <Typography
                component="span"
                aria-hidden
                sx={{
                  fontFamily: "var(--font-mono)",
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  fontWeight: 700,
                  color: "primary.main",
                  flexShrink: 0,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>
              <Typography
                variant="h3"
                component="h3"
                sx={{ fontSize: { xs: "1.3rem", md: "1.55rem" }, lineHeight: 1.25 }}
              >
                {item.pain}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={(t) => ({
                position: "relative",
                pl: { xs: 2.25, md: 3 },
                py: { xs: 0.5, md: 0.25 },
                borderLeft: 3,
                borderColor: alpha(t.palette.primary.main, 0.35),
                ml: { xs: 4.5, md: 0 },
              })}
            >
              <Typography variant="h4" component="p" sx={{ color: "primary.main", mb: 1 }}>
                {item.answer}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {item.body}
              </Typography>
              <LinkButton
                href={item.href}
                size="small"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                sx={{ px: 0, mt: 1, color: "text.secondary", "&:hover": { color: "primary.main", background: "none" } }}
              >
                {item.feature}
              </LinkButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Reveal>
  );
}
