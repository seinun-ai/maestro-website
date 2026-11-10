import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import { Eyebrow } from "./Section";
import { stage, stageScope, underBar } from "@/lib/tokens";

/**
 * The opening band of an inner page, on the stage (the dark desk every page opens on).
 * With an `aside`, the headline takes the left column and the page's working part (the
 * checker, the install commands, the privacy facts) sits beside it as a lit tile, so a
 * visitor lands on something to use, not on empty space.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
  aside,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  const head = (
    <Stack spacing={2.25} sx={{ maxWidth: 880 }}>
      <Box>
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <Typography
          variant="h1"
          component="h1"
          sx={{ color: stage.fg, fontSize: aside ? "clamp(2.125rem, 3.6vw, 3rem)" : "clamp(2.25rem, 4vw, 3.25rem)" }}
        >
          <Highlight text={title} onDark />
        </Typography>
      </Box>
      <Typography variant="subtitle1" sx={{ color: stage.muted, maxWidth: 720 }}>
        {lede}
      </Typography>
      {children}
    </Stack>
  );
  return (
    // It starts under the transparent top bar, so its light runs up behind the bar.
    <Box component="section" sx={{ ...underBar({ xs: 5, md: 6 }), pb: { xs: 6, md: 8 }, background: stage.background, color: stage.fg, ...stageScope }}>
      <Container>
        {aside ? (
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Reveal>{head}</Reveal>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} sx={{ minWidth: 0 }}>
              {aside}
            </Grid>
          </Grid>
        ) : (
          <Reveal>{head}</Reveal>
        )}
      </Container>
    </Box>
  );
}
