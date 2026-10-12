import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShotFrame from "./ShotFrame";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import GitHubMark from "./GitHubMark";
import { LinkButton } from "./NextMui";
import { c } from "@/lib/tokens";
import { hero } from "@/content/site";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 7, md: 12 },
        pb: { xs: 10, md: 15 },
        backgroundImage: `radial-gradient(70% 52% at 50% -8%, ${c.blueTint} 0%, transparent 70%)`,
      }}
    >
      <Container>
        <Stack spacing={{ xs: 3, md: 3.5 }} sx={{ maxWidth: 1000, mx: "auto", textAlign: "center", alignItems: "center" }}>
          <Reveal>
            <Box
              component="p"
              sx={{
                m: 0,
                display: "inline-block",
                px: 1.75,
                py: 0.75,
                borderRadius: 999,
                border: `1px solid ${c.border}`,
                backgroundColor: c.card,
                color: c.muted,
                fontSize: { xs: "0.8125rem", md: "0.875rem" },
                fontWeight: 500,
              }}
            >
              {hero.eyebrow}
            </Box>
          </Reveal>
          <Reveal delay={60}>
            <Typography variant="h1" component="h1">
              <Highlight text={hero.title} />
            </Typography>
          </Reveal>
          <Reveal delay={120}>
            <Typography variant="subtitle1" sx={{ color: c.muted, maxWidth: 720, mx: "auto" }}>
              {hero.lede}
            </Typography>
          </Reveal>
          <Reveal delay={180}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ justifyContent: "center", alignItems: { xs: "stretch", sm: "center" }, pt: 1 }}
            >
              <LinkButton href={hero.primaryCta.href} variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                {hero.primaryCta.label}
              </LinkButton>
              <Button
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<GitHubMark />}
              >
                {hero.secondaryCta.label}
              </Button>
            </Stack>
          </Reveal>
          <Reveal delay={210}>
            <Typography variant="body2" sx={{ color: c.muted }}>
              {hero.under}
            </Typography>
          </Reveal>
        </Stack>

        <Reveal delay={240} sx={{ mt: { xs: 6, md: 9 }, maxWidth: 1120, mx: "auto" }}>
          <ShotFrame src="/media/hero.mp4" alt={hero.mediaAlt} priority hero caption={hero.mediaCaption} />
        </Reveal>
      </Container>
    </Box>
  );
}
