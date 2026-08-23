"use client";

import * as React from "react";
import NextLink from "next/link";
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
        // One soft wash behind the fold. Minimalist means one gradient, not five.
        backgroundImage: `radial-gradient(90% 70% at 50% -10%, ${alpha(
          t.palette.primary.main,
          t.palette.mode === "dark" ? 0.22 : 0.1,
        )} 0%, transparent 60%)`,
      })}
    >
      <Container>
        <Stack spacing={3.5} sx={{ maxWidth: 860, textAlign: { xs: "left", md: "center" }, mx: { md: "auto" } }}>
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
            <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 700, mx: { md: "auto" } }}>
              {hero.lede}
            </Typography>
          </Reveal>
          <Reveal delay={180}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: { md: "center" } }}>
              <Button
                component={NextLink}
                href={hero.primaryCta.href}
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {hero.primaryCta.label}
              </Button>
              <Button component={NextLink} href={hero.secondaryCta.href} variant="outlined" size="large">
                {hero.secondaryCta.label}
              </Button>
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
          <ShotFrame
            src="/media/hero.gif"
            alt={hero.mediaAlt}
            priority
            caption="Recorded end to end on a real instance: a base score of 49.2 lifted to 70.8, every AI edit shown as a diff, and a typeset PDF at the end."
          />
        </Reveal>

        <Reveal delay={260} sx={{ mt: { xs: 6, md: 8 } }}>
          <Grid container spacing={{ xs: 3, md: 2 }}>
            {heroStats.map((s) => (
              <Grid size={{ xs: 6, md: 3 }} key={s.label}>
                <Stack spacing={0.5}>
                  <Typography
                    sx={{ fontSize: { xs: "1.9rem", md: "2.3rem" }, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {s.value}
                  </Typography>
                  <Typography variant="h6" component="p">
                    {s.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {s.detail}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}