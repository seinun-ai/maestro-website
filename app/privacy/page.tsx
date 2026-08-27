import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import BlockIcon from "@mui/icons-material/BlockOutlined";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import GitHubMark from "@/components/GitHubMark";
import { TintBand, TintPaper } from "@/components/Surfaces";
import { privacy, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy & security",
  description:
    "Three containers on your machine, every port bound to 127.0.0.1, no account and no server holding your career history, plus the honest version of what that trade costs and what the extension keeps.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow={privacy.hero.eyebrow} title={privacy.hero.title} lede={privacy.hero.lede} />

      <Section>
        <Grid container spacing={3}>
          {privacy.facts.map((f, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={f.title}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: { xs: 3, md: 3.5 }, height: "100%", borderRadius: 3 }}>
                  <Typography variant="h4" component="h2" sx={{ mb: 1.5 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {f.body}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* The trade: the most important block on the site, so it gets the loudest treatment */}
      <TintBand tone="warning">
          <Reveal>
            <Stack spacing={3} sx={{ maxWidth: 820 }}>
              <Typography variant="h2">{privacy.trade.title}</Typography>
              {privacy.trade.body.map((p) => (
                <Typography key={p.slice(0, 20)} variant="subtitle1">
                  {p}
                </Typography>
              ))}
              <Typography variant="h4" component="p" sx={{ pl: 2.5, borderLeft: 3, borderColor: "warning.main" }}>
                {privacy.trade.kicker}
              </Typography>
              <Box>
                <Button
                  href={`${site.repo}/blob/main/SECURITY.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<GitHubMark />}
                >
                  Read SECURITY.md and the threat model
                </Button>
              </Box>
            </Stack>
          </Reveal>
      </TintBand>

      <Section eyebrow="The extension" title={privacy.extension.title} maxWidth={640}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal sx={{ height: "100%" }}>
              <Paper sx={{ p: 3.5, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  What it keeps
                </Typography>
                <Stack spacing={1.5}>
                  {privacy.extension.keeps.map((k) => (
                    <Stack key={k} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <CheckIcon sx={{ fontSize: 19, color: "text.secondary", mt: "2px", flexShrink: 0 }} />
                      <Typography variant="body2">{k}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80} sx={{ height: "100%" }}>
              <TintPaper tone="success" sx={{ p: 3.5, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  What it structurally cannot keep
                </Typography>
                <Stack spacing={1.5}>
                  {privacy.extension.never.map((k) => (
                    <Stack key={k} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <BlockIcon sx={{ fontSize: 19, color: "success.main", mt: "2px", flexShrink: 0 }} />
                      <Typography variant="body2">{k}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </TintPaper>
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Box sx={{ mt: 4, maxWidth: 860 }}>
            <Divider sx={{ mb: 3 }} />
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {privacy.extension.honest}
            </Typography>
          </Box>
        </Reveal>
      </Section>

      <Section eyebrow="Tracing" title={privacy.tracing.title} maxWidth={720}>
        <Reveal>
          <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 860 }}>
            {privacy.tracing.body}
          </Typography>
        </Reveal>
      </Section>

      <Section
        tone="raised"
        eyebrow="Leaving"
        title="Nothing about leaving is engineered to be difficult."
        lede="Because nothing here was ever monetized by making it so."
        maxWidth={640}
      >
        <Grid container spacing={2.5}>
          {[
            { t: "career.md", b: "Your whole career record as one deterministic Markdown file. No model involved, readable and diffable, downloadable from the Career KB page or over MCP." },
            { t: "applications/", b: "Every render filed in its own company-and-role-named folder with the typeset source and the exact PDF you sent." },
            { t: "base_resumes/", b: "Your resumes are JSON files on your disk, not rows in someone else's database." },
            { t: "The database", b: "Postgres in a container you own. docker compose down -v is yours to run, and it deletes everything, which is the point." },
          ].map((c, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={c.t}>
              <Reveal delay={i * 60} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Typography sx={{ fontFamily: "var(--font-mono)", fontWeight: 700, mb: 1 }}>{c.t}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {c.b}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      <CtaBand />
    </>
  );
}
