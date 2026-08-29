import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import NumberedSteps from "@/components/NumberedSteps";
import { TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import { guide } from "@/content/site";

export const metadata: Metadata = {
  title: "Guide",
  description:
    "Your first hour once Maestro CS is running: find your way around, run one real application through it in the order that works, work postings from the browser panel, and drive the whole loop from your assistant over MCP.",
};

export default function GuidePage() {
  return (
    <>
      <PageHero eyebrow={guide.hero.eyebrow} title={guide.hero.title} lede={guide.hero.lede}>
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: "wrap", pt: 1 }}>
          <LinkButton href="/start" variant="outlined" size="small">
            Not installed yet? Start there
          </LinkButton>
        </Stack>
      </PageHero>

      {/* 1. the map */}
      <Section id="tour" tone="raised" eyebrow={guide.tour.eyebrow} title={guide.tour.title} lede={guide.tour.lede} maxWidth={620}>
        <Grid container spacing={2}>
          {guide.tour.items.map((t, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={t.name}>
              <Reveal delay={Math.min(i, 6) * 40}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "baseline" }}>
                  <Typography variant="h6" component="h3" sx={{ whiteSpace: "nowrap" }}>
                    {t.name}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                  {t.body}
                </Typography>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* 2. the heart of the guide */}
      <Section eyebrow={guide.firstSession.eyebrow} title={guide.firstSession.title} lede={guide.firstSession.lede} maxWidth={720}>
        <Box sx={{ maxWidth: 820 }}>
          <NumberedSteps steps={guide.firstSession.steps} />
        </Box>
      </Section>

      {/* 3. the panel, in use */}
      <Section
        tone="raised"
        eyebrow={guide.extension.eyebrow}
        title={guide.extension.title}
        lede={guide.extension.lede}
        maxWidth={680}
      >
        <Box sx={{ maxWidth: 820 }}>
          <NumberedSteps steps={guide.extension.flow} />
        </Box>
        <Reveal>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 4, maxWidth: 760 }}>
            {guide.extension.note}{" "}
            <LinkButton href="/privacy" size="small" sx={{ px: 0, verticalAlign: "baseline" }}>
              What the panel keeps, and what it can&apos;t
            </LinkButton>
          </Typography>
        </Reveal>
      </Section>

      {/* 4. the assistant, in use */}
      <Section eyebrow={guide.mcp.eyebrow} title={guide.mcp.title} lede={guide.mcp.lede} maxWidth={720}>
        <Grid container spacing={2.5}>
          {guide.mcp.ideas.map((n, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={n.t}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                    {n.t}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {n.b}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        <Reveal>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 4, maxWidth: 760 }}>
            {guide.mcp.note}
          </Typography>
        </Reveal>
      </Section>

      {/* 5. the horizon */}
      <Section tone="raised" eyebrow={guide.next.eyebrow} title={guide.next.title} lede={guide.next.lede} maxWidth={720}>
        <Grid container spacing={2.5}>
          {guide.next.items.map((n, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={n.t}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                    {n.t}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {n.b}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        <Reveal>
          <Typography variant="h4" component="p" sx={{ mt: 4, maxWidth: 820 }}>
            {guide.next.closing}
          </Typography>
        </Reveal>
        <Reveal>
          <TintPaper sx={{ mt: { xs: 4, md: 5 }, p: { xs: 3, md: 3.5 }, borderRadius: 4, maxWidth: 820 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              The mechanics behind all three (the proposal ledger, the consent gate, the risks stated plainly)
              live on the Agents page.
            </Typography>
            <LinkButton href="/agents" endIcon={<ArrowForwardIcon />} sx={{ px: 0, mt: 1.5 }}>
              Agents, hunting and the consent ledger
            </LinkButton>
          </TintPaper>
        </Reveal>
      </Section>
    </>
  );
}
