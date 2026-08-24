"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";
import ShotFrame from "./ShotFrame";
import Reveal from "./Reveal";
import GitHubMark from "./GitHubMark";
import StatBadge from "./StatBadge";
import { LinkButton } from "./NextMui";
import { hero, heroStats, site } from "@/content/site";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={(t) => ({
        position: "relative",
        overflow: "hidden",
        pt: { xs: 7, md: 12 },
        pb: { xs: 8, md: 12 },
        // One wash behind the fold, plus a faint warm counterpoint on the
        // right so the yellow in the stat row doesn't arrive from nowhere.
        backgroundImage: `radial-gradient(80% 60% at 50% -12%, ${alpha(
          t.palette.primary.main,
          t.palette.mode === "dark" ? 0.26 : 0.12,
        )} 0%, transparent 62%),
        radial-gradient(50% 40% at 92% 4%, ${alpha("#FBBF24", t.palette.mode === "dark" ? 0.1 : 0.14)} 0%, transparent 70%)`,
      })}
    >
      <Container>
        <Stack
          spacing={3.5}
          sx={{ maxWidth: 900, textAlign: { xs: "left", md: "center" }, mx: { md: "auto" }, alignItems: { md: "center" } }}
        >
          <Reveal>
            <Chip
              label={hero.eyebrow}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 999, backgroundColor: "background.paper", px: 0.5 }}
            />
          </Reveal>
          <Reveal delay={60}>
            <Typography variant="h1" component="h1" sx={{ whiteSpace: "pre-line" }}>
              {hero.title}
            </Typography>
          </Reveal>
          <Reveal delay={120}>
            <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 720, mx: { md: "auto" } }}>
              {hero.lede}
            </Typography>
          </Reveal>
          <Reveal delay={180}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: { md: "center" } }}>
              <LinkButton href={hero.primaryCta.href} variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                {hero.primaryCta.label}
              </LinkButton>
              <LinkButton href={hero.secondaryCta.href} variant="outlined" size="large">
                {hero.secondaryCta.label}
              </LinkButton>
              <Button
                href={site.repo}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                color="inherit"
                startIcon={<GitHubMark />}
                sx={{ color: "text.secondary", display: { xs: "none", md: "inline-flex" } }}
              >
                Star on GitHub
              </Button>
            </Stack>
          </Reveal>
        </Stack>

        <Reveal delay={220} sx={{ mt: { xs: 6, md: 8 } }}>
          <ShotFrame src="/media/hero.mp4" alt={hero.mediaAlt} priority glow caption={hero.mediaCaption} />
        </Reveal>

        <Reveal delay={260} sx={{ mt: { xs: 6, md: 9 } }}>
          <Grid container spacing={{ xs: 3.5, md: 3 }}>
            {heroStats.map((s) => (
              <Grid size={{ xs: 6, md: 3 }} key={s.label}>
                <StatBadge value={s.value} label={s.label} detail={s.detail} accent={"accent" in s && s.accent} />
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}
