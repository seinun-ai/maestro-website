import * as React from "react";
import type { Metadata } from "next";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayIcon from "@mui/icons-material/PlayCircleOutlined";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import CopyInstall from "@/components/CopyInstall";
import WorksWith from "@/components/WorksWith";
import { ChromeMark } from "@/components/BrandMarks";
import Reveal from "@/components/Reveal";
import { c, stage, weight } from "@/lib/tokens";
import { cta, start } from "@/content/site";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "One paste installs Maestro on macOS, Linux and Windows, with no Docker. Then add your AI, drop in your resumes and tailor to a job.",
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
        color: c.fg,
        backgroundColor: c.tint,
        fontFamily: "var(--font-mono), monospace",
        fontWeight: 700,
        fontSize: "0.875rem",
      }}
    >
      {n}
    </Box>
  );
}

const cardSx = { height: "100%", p: { xs: 2.5, md: 3 }, borderRadius: "16px", backgroundColor: c.card, border: `1px solid ${c.border}` } as const;

/**
 * One path for someone new: the paste, then three steps with no branches. What can wait is
 * under When you're ready, and every other way to install stays closed until it's asked for.
 */
export default function StartPage() {
  return (
    <>
      {/* The commands sit on the stage beside the headline: copy once, paste, done. */}
      <PageHero eyebrow={start.hero.eyebrow} title={start.hero.title} lede={start.hero.lede} aside={<CopyInstall align="left" defaultOpen />}>
        <Box>
          <Button href={cta.video.href} target="_blank" rel="noopener noreferrer" startIcon={<PlayIcon />} sx={{ px: 0, color: stage.muted, "&:hover": { color: stage.fg, backgroundColor: "transparent" } }}>
            {cta.video.label}
          </Button>
        </Box>
      </PageHero>

      <Section title={start.next.title}>
        <Grid component="ol" container spacing={{ xs: 3, md: 4 }} sx={{ listStyle: "none", m: 0, p: 0 }}>
          {start.next.steps.map((s, i) => (
            <Grid component="li" size={{ xs: 12, md: 4 }} key={s.t}>
              <Reveal delay={i * 70}>
                <Stack direction="row" spacing={1.75} sx={{ alignItems: "flex-start" }}>
                  <StepNumber n={i + 1} />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography component="p" sx={{ fontSize: "1.1875rem", fontWeight: weight.label, mb: 0.5 }}>
                      {s.t}
                    </Typography>
                    <Typography variant="body1" sx={{ color: c.muted }}>
                      {s.b}
                    </Typography>
                  </Box>
                </Stack>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section title={start.later.title} tone="raised">
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal sx={{ height: "100%" }}>
              <Box sx={cardSx}>
                <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                  {start.connect.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <WorksWith />
                </Box>
                <CodeBlock code={start.connect.code} />
                <Typography variant="body2" sx={{ color: c.muted, mt: 1.5 }}>
                  {start.connect.body}
                </Typography>
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={70} sx={{ height: "100%" }}>
              <Box sx={cardSx}>
                <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                  {start.companion.title}
                </Typography>
                <Typography variant="body2" sx={{ color: c.muted, mb: 2 }}>
                  {start.companion.body}
                </Typography>
                <Button
                  href={start.companion.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<ChromeMark size={18} />}
                  endIcon={<ArrowOutwardIcon sx={{ fontSize: 17 }} />}
                  sx={{ borderColor: c.border, color: c.fg, fontWeight: weight.label, "&:hover": { borderColor: c.fg, backgroundColor: c.raised } }}
                >
                  {start.companion.link.label}
                </Button>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Accordion variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2.5, py: 0.75 }}>
            {/* The summary is already a heading, so this stays plain text inside it. */}
            <Typography variant="h5" component="span">
              {start.other.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2.5, pb: 3, pt: 0 }}>
            <Grid container spacing={{ xs: 4, md: 5 }}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
                <Typography component="p" sx={{ fontWeight: weight.label, mb: 1.5 }}>
                  {start.other.byHand}
                </Typography>
                <Typography variant="body2" sx={{ color: c.muted, mb: 1.5 }}>
                  {start.uv.title}. {start.uv.body}
                </Typography>
                <Stack spacing={1.5}>
                  <CodeBlock code={start.uv.mac} label="macOS and Linux" />
                  <CodeBlock code={start.uv.windows} label="Windows, in PowerShell" />
                </Stack>
                <Typography variant="body2" sx={{ color: c.muted, mt: 2.5, mb: 1.5 }}>
                  {start.install.title}. {start.install.body}
                </Typography>
                <CodeBlock code={start.install.code} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
                <Typography component="p" sx={{ fontWeight: weight.label, mb: 1.5 }}>
                  {start.other.docker.title}
                </Typography>
                <Typography variant="body2" sx={{ color: c.muted, mb: 1.5 }}>
                  {start.other.docker.lede}
                </Typography>
                <CodeBlock code={start.other.docker.code} />
                <Typography variant="body2" sx={{ color: c.muted, mt: 1.5 }}>
                  {start.other.docker.after}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Stack direction="row" spacing={2.5} useFlexGap sx={{ mt: 3, flexWrap: "wrap", alignItems: "center" }}>
          <Typography variant="body2" sx={{ color: c.muted }}>
            {start.docs.label}
          </Typography>
          {start.docs.links.map((d) => (
            <Link
              key={d.t}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              underline="always"
              sx={{ color: c.fg, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: weight.label, textUnderlineOffset: "0.2em" }}
            >
              {d.t}
              <ArrowOutwardIcon sx={{ fontSize: 15 }} />
            </Link>
          ))}
        </Stack>
      </Section>
    </>
  );
}
