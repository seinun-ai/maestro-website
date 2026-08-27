import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
import TerminalIcon from "@mui/icons-material/TerminalOutlined";
import ContentPasteIcon from "@mui/icons-material/ContentPasteOutlined";
import BlockIcon from "@mui/icons-material/BlockOutlined";

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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import OnThisPage from "@/components/OnThisPage";
import { agents, guide, modelProfiles, quickstart, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Install",
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
        eyebrow="Install"
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

      <Container sx={{ pt: { xs: 4, md: 5 } }}>
        <OnThisPage />
      </Container>

      {/* What you are installing comes before how to install it: the reader
          needs to know what an agent would be doing on their behalf. */}
      <Section tone="raised" eyebrow="The shape of it" title="What a complete setup looks like" maxWidth={620}>
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

      {/* Step 1: one step, two ways to do it, presented as an actual choice.
          Keeps the #fastest-path anchor the guide deep-links to. */}
      <Section
        id="fastest-path"
        eyebrow="Step 1"
        title="Start the stack"
        lede="Two ways to the same place. Both end with the app running on http://localhost:3000."
        maxWidth={680}
      >
        <Reveal>
          <Grid container spacing={2.5} sx={{ mb: { xs: 4, md: 5 } }}>
            {quickstart.prerequisites.map((p) => (
              <Grid size={{ xs: 12, sm: 4 }} key={p.title}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {p.body}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Reveal>

        <Grid container spacing={{ xs: 4, md: 4 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                {guide.agentPath.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                {guide.agentPath.body}
              </Typography>
              <CodeBlock code={guide.agentPath.prompt} label="paste into your agent" wrap />
              <TintPaper tone="warning" sx={{ p: 2.5, borderRadius: 3, mt: 2.5 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 1.25 }}>
                  {guide.agentPath.limits.title}
                </Typography>
                <Stack spacing={1.25}>
                  {guide.agentPath.limits.items.map((i) => (
                    <Stack key={i} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <BlockIcon sx={{ fontSize: 18, color: "warning.main", mt: "3px", flexShrink: 0 }} />
                      <Typography variant="body2">{i}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </TintPaper>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                Or do it yourself
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                Three commands and a wait. The first build takes several minutes because it installs TeX Live and
                downloads the embedding model, once.
              </Typography>
              <CodeBlock code={quickstart.clone} />
              <Alert severity="info" variant="outlined" sx={{ mt: 2.5, borderRadius: 3 }}>
                <AlertTitle sx={{ fontWeight: 700 }}>Port already allocated?</AlertTitle>
                All three host ports are overridable in <code>.env</code>: <code>BACKEND_HOST_PORT</code> (8001),{" "}
                <code>FRONTEND_HOST_PORT</code> (3000) and <code>POSTGRES_HOST_PORT</code> (55432). Only the host side of
                the mapping moves; the containers keep their internal ports.
              </Alert>
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Box sx={{ mt: { xs: 5, md: 6 } }}>
            <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
              Either way, on first boot Docker will:
            </Typography>
            <Grid container spacing={2}>
              {firstBoot.map((f) => (
                <Grid size={{ xs: 12, sm: 6 }} key={f}>
                  <Stack direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                    <CheckIcon sx={{ fontSize: 19, color: "primary.main", mt: "2px", flexShrink: 0 }} />
                    <Typography variant="body2">{f}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Reveal>
      </Section>

      {/* Step 2: the key, the cost, the profiles */}
      <Section
        eyebrow="Step 2"
        title="Bring one API key"
        lede="OpenAI or Gemini. Either one alone is a complete setup. The parts that make Maestro CS fastest day to day run on it: in-app tailoring, the extension's tailor-on-the-go and AI form filling, cover letters and screening answers, KB consolidation, and chat."
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
        lede="Three tiers, and only the last one actually wants a key. The deterministic core never calls a model at all, and over MCP your assistant is the model."
        maxWidth={720}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
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
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal delay={80} sx={{ height: "100%" }}>
              <TintPaper sx={{ p: 3.5, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  No key, over MCP
                </Typography>
                <Stack spacing={1.5}>
                  {quickstart.keyless.overMcp.map((m) => (
                    <Stack key={m} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <TerminalIcon sx={{ fontSize: 19, color: "primary.main", mt: "2px", flexShrink: 0 }} />
                      <Typography variant="body2">{m}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </TintPaper>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Reveal delay={160} sx={{ height: "100%" }}>
              <Paper sx={{ p: 3.5, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  Wants a key
                </Typography>
                <Stack spacing={1.5}>
                  {quickstart.keyless.wantsKey.map((d) => (
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
              <Stack spacing={1.25} sx={{ mt: 2.5 }}>
                {agents.setup.targets.map((t) => (
                  <Stack key={t.client} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                    {t.auto ? (
                      <CheckIcon sx={{ fontSize: 18, color: "success.main", mt: "3px", flexShrink: 0 }} />
                    ) : (
                      <ContentPasteIcon sx={{ fontSize: 18, color: "text.secondary", mt: "3px", flexShrink: 0 }} />
                    )}
                    <Typography variant="body2">
                      <strong>{t.client}</strong> · {t.how}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                {agents.setup.manual} {agents.setup.flags}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                <strong>Or skip the pasting.</strong> {guide.agentPath.second}
              </Typography>
              <CodeBlock code={guide.agentPath.secondPrompt} label="paste into your agent" wrap />
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                It knows where those config files live and can merge into them without clobbering your other MCP
                servers.{" "}
                <LinkButton href="/agents" size="small" sx={{ px: 0, verticalAlign: "baseline" }}>
                  More on delegating this
                </LinkButton>
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
      <Section
        eyebrow="Then what?"
        title="The guide walks you through the first hour."
        lede="This page is the decision: what you need, what it costs, what runs without a key. The guide is the doing: install, first boot, the order to set things up in, and how to keep it updated. It assumes no Docker or terminal experience."
        maxWidth={700}
      >
        <Reveal>
          <TintPaper sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, maxWidth: 900 }}>
            <Grid container spacing={2.5}>
              {[
                ["Let an agent install it", "Paste one prompt into Claude Code or Codex and it clones, configures and starts the stack."],
                ["Your first session, in order", "Eleven steps from importing resumes to tracking the application. The order is the point."],
                ["When something breaks", "A symptom-to-fix table for the errors a first boot actually produces."],
                ["Keeping it up to date", "One command that backs up, moves your checkout to the newest release, and waits for healthy."],
              ].map(([t, b]) => (
                <Grid size={{ xs: 12, sm: 6 }} key={t}>
                  <Typography variant="h6" component="h3">
                    {t}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                    {b}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <LinkButton href="/guide" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ mt: 3.5 }}>
              Open the guide
            </LinkButton>
          </TintPaper>
        </Reveal>
      </Section>

      <Section eyebrow="Early software" title={quickstart.freshInstall.title} maxWidth={640}>
        <Reveal>
          <Stack spacing={3} sx={{ maxWidth: 820 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {quickstart.freshInstall.body}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              <code>KNOWN_ISSUES.md</code> is the map: what is solid, what is rough, what is a deliberate limitation
              rather than a defect, and the specific gaps worth picking up. Several things in there look like bugs and
              are recorded decisions.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Contribution fast-path: docs fixes, resume and cover-letter templates, and extension job-board adapters go
              straight to PR, no issue needed. Features and architecture changes: open an issue first. Every PR gets a
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
