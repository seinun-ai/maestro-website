import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import PauseIcon from "@mui/icons-material/PauseCircleOutlined";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import MakerNote from "@/components/MakerNote";
import Economics from "@/components/Economics";
import ModelProfiles from "@/components/ModelProfiles";
import GitHubMark from "@/components/GitHubMark";
import { TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import { modelProfiles, quickstart, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Four pieces and only the first is required: the stack, one API key, the MCP script, the browser extension. Plus what runs with no key at all, and what a tailored application actually costs.",
};

const firstBoot = [
  "Launches PostgreSQL on host port 55432, chosen to dodge any Postgres you already run",
  "Runs database migrations via Alembic",
  "Seeds demonstration base resumes, compiles initial PDF previews, and seeds the default AI prompts",
  "Serves the UI on 127.0.0.1:3000 and the API on 127.0.0.1:8001",
];

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Four pieces. Only the first is required."
        lede="Everything runs in three containers on your machine. The first build takes several minutes because it installs TeX Live and downloads the pinned embedding model; after that, it is one command."
      >
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", pt: 1 }}>
          <Chip label="Apache-2.0" size="small" variant="outlined" />
          <Chip label="No account" size="small" variant="outlined" />
          <Chip label="≈1¢ per application" size="small" variant="outlined" />
          <Chip label="127.0.0.1 only" size="small" variant="outlined" />
        </Stack>
      </PageHero>

      {/* The four pieces */}
      <Section eyebrow="The shape of it" title="What a complete setup looks like" maxWidth={620}>
        <Grid container spacing={2.5}>
          {quickstart.pieces.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={p.n}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.5 }}>
                    <Chip
                      label={p.n}
                      size="small"
                      color={p.required ? "primary" : "default"}
                      variant={p.required ? "filled" : "outlined"}
                      sx={{ fontFamily: "var(--font-mono)", minWidth: 26 }}
                    />
                    <Typography variant="h5" component="h3">
                      {p.title}
                    </Typography>
                    <Chip
                      label={p.required ? "required" : "optional"}
                      size="small"
                      variant="outlined"
                      sx={{ ml: "auto", opacity: 0.75 }}
                    />
                  </Stack>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {p.body}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Prerequisites + clone */}
      <Section
        tone="raised"
        eyebrow="Step 1"
        title="Clone and start the stack"
        lede="Then open http://localhost:3000."
        maxWidth={620}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <CodeBlock code={quickstart.clone} />
            </Reveal>
            <Reveal>
              <Alert severity="warning" variant="outlined" sx={{ mt: 3, borderRadius: 3 }}>
                <AlertTitle sx={{ fontWeight: 700 }}>{quickstart.earlyRelease.title}</AlertTitle>
                {quickstart.earlyRelease.body}
              </Alert>
            </Reveal>
            <Reveal>
              <Alert severity="info" variant="outlined" sx={{ mt: 2, borderRadius: 3 }}>
                <AlertTitle sx={{ fontWeight: 700 }}>Port already allocated?</AlertTitle>
                All three host ports are overridable in <code>.env</code> — <code>BACKEND_HOST_PORT</code> (8001),{" "}
                <code>FRONTEND_HOST_PORT</code> (3000) and <code>POSTGRES_HOST_PORT</code> (55432). Only the host side of
                the mapping moves; the containers keep their internal ports.
              </Alert>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                You will need
              </Typography>
              <Stack spacing={2} sx={{ mb: 4 }}>
                {quickstart.prerequisites.map((p) => (
                  <Box key={p.title}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {p.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {p.body}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                On first boot, Docker will:
              </Typography>
              <Stack spacing={1.5}>
                {firstBoot.map((f) => (
                  <Stack key={f} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                    <CheckIcon sx={{ fontSize: 19, color: "primary.main", mt: "2px", flexShrink: 0 }} />
                    <Typography variant="body2">{f}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Step 2 — the key, the cost, the profiles */}
      <Section
        eyebrow="Step 2"
        title="Bring one API key"
        lede="OpenAI or Gemini — either one alone is a complete setup. The parts that make Maestro CS fastest day to day run on it: in-app tailoring, the extension's tailor-on-the-go and AI form filling, cover letters and screening answers, KB consolidation, and chat."
        maxWidth={760}
      >
        <Economics />
      </Section>

      <Section
        tone="raised"
        eyebrow={modelProfiles.eyebrow}
        title={modelProfiles.title}
        lede={modelProfiles.lede}
        maxWidth={800}
      >
        <ModelProfiles />
      </Section>

      {/* No key */}
      <Section
        eyebrow="No key yet?"
        title={quickstart.keyless.title}
        lede="Two honest tiers: the deterministic core always works, and over MCP your assistant supplies the model itself."
        maxWidth={680}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal sx={{ height: "100%" }}>
              <TintPaper tone="success" sx={{ p: 3.5, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  Works immediately, no key
                </Typography>
                <Stack spacing={1.5}>
                  {quickstart.keyless.works.map((w) => (
                    <Stack key={w} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <CheckIcon sx={{ fontSize: 19, color: "success.main", mt: "2px", flexShrink: 0 }} />
                      <Typography variant="body2">{w}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </TintPaper>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80} sx={{ height: "100%" }}>
              <Paper sx={{ p: 3.5, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  Degrades or defers cleanly
                </Typography>
                <Stack spacing={1.5}>
                  {quickstart.keyless.defers.map((d) => (
                    <Stack key={d} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <PauseIcon sx={{ fontSize: 19, color: "text.secondary", mt: "2px", flexShrink: 0 }} />
                      <Typography variant="body2">{d}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Alert severity="info" variant="outlined" sx={{ mt: 3, borderRadius: 3 }}>
            <AlertTitle sx={{ fontWeight: 700 }}>{quickstart.localModels.title}</AlertTitle>
            {quickstart.localModels.body} {quickstart.localModels.ask}
          </Alert>
        </Reveal>
      </Section>

      {/* Steps 3 and 4 */}
      <Section
        tone="raised"
        eyebrow="Steps 3 & 4"
        title="Attach your assistant, and your browser"
        lede="Both are optional, and both take about a minute."
        maxWidth={640}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                MCP for your assistant
              </Typography>
              <CodeBlock code={quickstart.mcp} />
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                Registers the server with Claude Code and prints paste-ready config for Claude Desktop and the ChatGPT
                desktop app / Codex CLI, every path already filled in. Add <code>--profile hunt</code> for a scoped
                profile, or <code>--print-only</code> to change nothing and just see the config. Restart Claude Desktop
                with Cmd+Q after pasting — closing the window is not enough.
              </Typography>
              <LinkButton href="/agents" sx={{ px: 0, mt: 1 }}>
                What agents can do with it
              </LinkButton>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                The browser extension
              </Typography>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack spacing={1.5}>
                  {[
                    "Open chrome://extensions",
                    "Turn on Developer mode",
                    "Load unpacked → the repo's extension/ folder",
                  ].map((s, i) => (
                    <Stack key={s} direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                      <Chip label={i + 1} size="small" variant="outlined" sx={{ fontFamily: "var(--font-mono)" }} />
                      <Typography variant="body2" sx={{ fontFamily: i === 0 ? "var(--font-mono)" : undefined }}>
                        {s}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                <strong>No ID to copy, nothing to configure.</strong> The extension pins its identity, so the backend
                already allowlists it out of the box.
              </Typography>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Known issues */}
      <Section eyebrow="Before you file a bug" title="Read the known issues first" maxWidth={640}>
        <Reveal>
          <Stack spacing={3} sx={{ maxWidth: 820 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              This project is early and the repo says so plainly. <code>KNOWN_ISSUES.md</code> is the map: what is solid,
              what is rough, what is a deliberate limitation rather than a defect, and the specific gaps worth picking
              up. Several things in there look like bugs and are recorded decisions.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Contribution fast-path: docs fixes, resume and cover-letter templates, and extension job-board adapters go
              straight to PR — no issue needed. Features and architecture changes: open an issue first. Every PR gets a
              human first response within 48 hours.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button
                href={`${site.repo}/blob/main/KNOWN_ISSUES.md`}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<GitHubMark />}
              >
                KNOWN_ISSUES.md
              </Button>
              <Button
                href={`${site.repo}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
              >
                Contributing guide
              </Button>
            </Stack>
          </Stack>
        </Reveal>
      </Section>

      <Section tone="raised" eyebrow="Questions" title="Common ones, answered" maxWidth={620}>
        <Reveal>
          <Faq />
        </Reveal>
      </Section>

      <MakerNote />
      <CtaBand />
    </>
  );
}
