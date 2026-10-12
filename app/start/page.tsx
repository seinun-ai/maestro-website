import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PlayIcon from "@mui/icons-material/PlayCircleOutlined";

import PageHero from "@/components/PageHero";
import Section, { Eyebrow } from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import { accent, c } from "@/lib/tokens";
import { cta, start } from "@/content/site";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Install uv, then two commands: uv tool install and maestro start. It runs on macOS, Linux and Windows with no Docker. Then add a key, import your resumes and connect your AI. Docker is the self-host alternative.",
};

function StepNumber({ n }: { n: number }) {
  return (
    <Box
      sx={{
        width: 32,
        height: 32,
        flexShrink: 0,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        color: c.blue,
        backgroundColor: c.blueTint,
        fontFamily: "var(--font-mono), monospace",
        fontWeight: 700,
        fontSize: "0.875rem",
      }}
    >
      {n}
    </Box>
  );
}

export default function StartPage() {
  return (
    <>
      <PageHero eyebrow={start.hero.eyebrow} title={start.hero.title} lede={start.hero.lede}>
        <Box>
          <Button href={cta.video.href} target="_blank" rel="noopener noreferrer" startIcon={<PlayIcon />} sx={{ px: 0, color: c.blue }}>
            {cta.video.label}
          </Button>
        </Box>
      </PageHero>

      <Section>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "flex-start" }}>
          {/* The two commands, with the one prerequisite in front of them. */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <Stack spacing={5}>
                <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                  <StepNumber n={1} />
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 0.75 }}>
                      {start.uv.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: c.muted, mb: 2 }}>
                      {start.uv.body}
                    </Typography>
                    <Stack spacing={1.5}>
                      <CodeBlock code={start.uv.mac} label="macOS and Linux" />
                      <CodeBlock code={start.uv.windows} label="Windows, in PowerShell" />
                    </Stack>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                  <StepNumber n={2} />
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                      {start.install.title}
                    </Typography>
                    <CodeBlock code={start.install.code} />
                    <Typography variant="body2" sx={{ color: c.muted, mt: 2 }}>
                      {start.install.body}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Reveal>
          </Grid>

          {/* What to do once it's running, then the one line for your assistant. */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
                {start.next.title}
              </Typography>
              <Stack spacing={2}>
                {start.next.steps.map((s) => (
                  <Box
                    key={s.t}
                    sx={{
                      p: 2.5,
                      borderRadius: "16px",
                      backgroundColor: c.card,
                      border: `1px solid ${c.border}`,
                      borderLeft: `6px solid ${accent(s.accent).solid}`,
                    }}
                  >
                    <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                      {s.t}
                    </Typography>
                    <Typography variant="body2" sx={{ color: c.muted }}>
                      {s.b}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box sx={{ mt: 5 }}>
                <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
                  {start.connect.title}
                </Typography>
                <CodeBlock code={start.connect.code} />
                <Typography variant="body2" sx={{ color: c.muted, mt: 1.5 }}>
                  {start.connect.body}
                </Typography>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* The alternative route, named as one. */}
      <Section id="docker" tone="raised">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <Eyebrow>{start.docker.eyebrow}</Eyebrow>
              <Typography variant="h2" sx={{ fontSize: "clamp(1.875rem, 3.4vw, 2.5rem)", mb: 2 }}>
                {start.docker.title}
              </Typography>
              <Typography variant="body1" sx={{ color: c.muted }}>
                {start.docker.lede}
              </Typography>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal delay={80}>
              <CodeBlock code={start.docker.code} />
              <Typography variant="body2" sx={{ color: c.muted, mt: 1.5 }}>
                {start.docker.after}
              </Typography>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <Section title={start.docs.title}>
        <Grid container spacing={2.5}>
          {start.docs.links.map((d, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={d.t}>
              <Reveal delay={i * 60} sx={{ height: "100%" }}>
                <Link
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    display: "block",
                    height: "100%",
                    p: 3,
                    borderRadius: "16px",
                    backgroundColor: c.card,
                    border: `1px solid ${c.border}`,
                    color: c.fg,
                    transition: "border-color 160ms ease",
                    "&:hover": { borderColor: c.blue },
                  }}
                >
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1, color: c.blue }}>
                    <Typography variant="h5" component="h3" sx={{ color: c.blue }}>
                      {d.t}
                    </Typography>
                    <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: c.muted, fontWeight: 400 }}>
                    {d.b}
                  </Typography>
                </Link>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}
