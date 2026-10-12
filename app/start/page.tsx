import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import BlockIcon from "@mui/icons-material/BlockOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlined";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import TroubleTable from "@/components/TroubleTable";
import { TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import { agents, guide, quickstart, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Install uv, then two commands: uv tool install and maestro start. It runs on macOS, Linux and Windows with no Docker. Then connect your assistant and load the Companion. Docker is the self-host alternative.",
};

/** The rail number every step on this page wears. */
function StepNumber({ n }: { n: number }) {
  return (
    <Chip
      label={n}
      size="small"
      color="primary"
      sx={{ fontFamily: "var(--font-mono)", fontWeight: 700, minWidth: 30, flexShrink: 0 }}
    />
  );
}

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Two commands. Then add what you want."
        lede="Install uv once, then install Maestro and start it. No Docker, no Git, no clone. It runs on macOS, Linux and Windows (x64). Your assistant and the Companion attach whenever you want them."
      >
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", pt: 1 }}>
          <Chip label="Apache-2.0" size="small" variant="outlined" />
          <Chip label="No account" size="small" variant="outlined" />
          <Chip label={`v${site.version}`} size="small" variant="outlined" />
          <Chip label="Listens on 127.0.0.1" size="small" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: "wrap", pt: 1 }}>
          <Button
            href={site.video}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            startIcon={<PlayCircleOutlineIcon />}
          >
            Watch the 37-second onboarding video
          </Button>
          <Button href={site.changelog} target="_blank" rel="noopener noreferrer" size="small" color="inherit" sx={{ color: "text.secondary" }}>
            Changelog
          </Button>
          <Button href={site.pypi} target="_blank" rel="noopener noreferrer" size="small" color="inherit" sx={{ color: "text.secondary" }}>
            PyPI
          </Button>
        </Stack>
      </PageHero>

      {/* The map before the territory: three cards, one required. */}
      <Section tone="raised" eyebrow="The shape of it" title="What a complete setup looks like" maxWidth={620}>
        <Grid container spacing={2.5}>
          {quickstart.pieces.map((p, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={p.n}>
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

      {/* Part 1: the numbered rail, with the agent path beside it. */}
      <Section
        id="fastest-path"
        eyebrow="Part 1 · required"
        title="Install the app"
        lede="Three steps, in order. You need one tool, uv, and about 100 MB of patience on first start."
        maxWidth={680}
      >
        <Reveal>
          <Grid container spacing={2.5} sx={{ mb: { xs: 4, md: 5 } }}>
            {quickstart.prerequisites.map((p) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.title}>
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
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <Stack spacing={3.5}>
                <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                  <StepNumber n={1} />
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                      {quickstart.appSteps[0].t}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                      {quickstart.appSteps[0].b}
                    </Typography>
                    <Stack spacing={1.5}>
                      <CodeBlock code={quickstart.uvInstall} label="macOS and Linux" />
                      <CodeBlock code={quickstart.uvInstallWindows} label="Windows, in PowerShell" />
                    </Stack>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                  <StepNumber n={2} />
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                      {quickstart.appSteps[1].t}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                      {quickstart.appSteps[1].b}
                    </Typography>
                    <CodeBlock code={quickstart.install} />
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                  <StepNumber n={3} />
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                      {quickstart.appSteps[2].t}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {quickstart.appSteps[2].b}{" "}
                      <LinkButton href="/models" size="small" sx={{ px: 0, verticalAlign: "baseline" }}>
                        Which key, and what it costs
                      </LinkButton>
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Alert severity="info" variant="outlined" sx={{ mt: 3, borderRadius: 3 }}>
                <AlertTitle sx={{ fontWeight: 700 }}>Port already in use?</AlertTitle>
                {quickstart.ports}
              </Alert>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <TintPaper sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                  {guide.agentPath.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                  {guide.agentPath.body}
                </Typography>
                <CodeBlock code={guide.agentPath.prompt} label="paste into your agent" wrap />
                <Divider sx={{ my: 2 }} />
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
        </Grid>

        <Reveal>
          <Grid container spacing={{ xs: 4, md: 5 }} sx={{ mt: { xs: 5, md: 6 }, alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                The maestro command
              </Typography>
              <Stack spacing={1.25}>
                {quickstart.commands.map((c) => (
                  <Stack key={c.c} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 0.25, sm: 2 }} sx={{ alignItems: { sm: "baseline" } }}>
                    <Box
                      component="code"
                      sx={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", fontWeight: 600, minWidth: { sm: 190 }, flexShrink: 0 }}
                    >
                      {c.c}
                    </Box>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {c.d}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                {quickstart.dataFolder.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                {quickstart.dataFolder.body}
              </Typography>
              <Stack spacing={0.75}>
                {quickstart.dataFolder.rows.map(([os, path]) => (
                  <Typography key={os} variant="body2">
                    <strong>{os}</strong>{" "}
                    <Box component="code" sx={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", overflowWrap: "anywhere" }}>
                      {path}
                    </Box>
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Reveal>

        <Reveal>
          <Box sx={{ mt: { xs: 5, md: 6 } }}>
            <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
              {quickstart.troubleshooting.title}
            </Typography>
            <TroubleTable columns={quickstart.troubleshooting.columns} rows={quickstart.troubleshooting.rows} />
          </Box>
        </Reveal>
      </Section>

      {/* The alternative route, named as one. Not a second install path to weigh. */}
      <Section
        id="docker"
        tone="raised"
        eyebrow={quickstart.docker.eyebrow}
        title={quickstart.docker.title}
        lede={quickstart.docker.lede}
        maxWidth={720}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <CodeBlock code={quickstart.docker.code} />
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                {quickstart.docker.after}
              </Typography>
              <Grid container spacing={2.5} sx={{ mt: 1 }}>
                {quickstart.docker.prerequisites.map((p) => (
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
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Stack spacing={2}>
                <Alert severity="info" variant="outlined" sx={{ borderRadius: 3 }}>
                  <AlertTitle sx={{ fontWeight: 700 }}>{quickstart.docker.ports.title}</AlertTitle>
                  {quickstart.docker.ports.body}
                </Alert>
                <Alert severity="warning" variant="outlined" sx={{ borderRadius: 3 }}>
                  <AlertTitle sx={{ fontWeight: 700 }}>{quickstart.docker.separate.title}</AlertTitle>
                  {quickstart.docker.separate.body}
                </Alert>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Part 2: HTTP by URL is the default. Two ways to add it, then the
          per-client commands and the hand-written fallbacks. */}
      <Section
        eyebrow="Part 2 · optional"
        title="Attach your assistant (MCP)"
        lede="The MCP server runs inside Maestro, at http://localhost:8001/mcp. Your assistant connects by URL, so it needs no Docker and no Python. Two ways to add it: one command, or one card in the app."
        maxWidth={720}
      >
        <Grid container spacing={2.5}>
          {agents.setup.paths.map((path, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={path.name}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                    {path.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                    {path.covers}
                  </Typography>
                  <Stack spacing={1.5}>
                    {path.steps.map((s, j) => (
                      <Stack key={s} direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                        <Chip
                          label={j + 1}
                          size="small"
                          variant="outlined"
                          sx={{ fontFamily: "var(--font-mono)", flexShrink: 0 }}
                        />
                        <Typography variant="body2">{s}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                    {path.note}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        <Reveal>
          <Grid container spacing={2.5} sx={{ mt: 1.5 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                {agents.setup.urlClients.title}
              </Typography>
              <CodeBlock code={agents.setup.urlClients.code} />
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                {agents.setup.urlClients.note}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                {agents.setup.codexPlugin.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                {agents.setup.codexPlugin.body}
              </Typography>
              <Stack spacing={0.75}>
                {agents.setup.codexPlugin.fields.map(([k, v]) => (
                  <Typography key={k} variant="body2">
                    <strong>{k}</strong> · {v}
                  </Typography>
                ))}
              </Stack>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                {agents.setup.codexPlugin.note}
              </Typography>
            </Grid>
          </Grid>
        </Reveal>

        <Reveal>
          <TintPaper sx={{ p: 3, borderRadius: 3, mt: 3 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>
              Six tool sets: full by default, smaller when you choose
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {agents.setup.profilesNote}
            </Typography>
          </TintPaper>
        </Reveal>

        <Reveal>
          <Alert severity="warning" variant="outlined" sx={{ mt: 3, borderRadius: 3 }}>
            <AlertTitle sx={{ fontWeight: 700 }}>{agents.setup.local.title}</AlertTitle>
            {agents.setup.local.body}
          </Alert>
        </Reveal>

        <Reveal>
          <Box sx={{ mt: { xs: 5, md: 6 } }}>
            <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
              {agents.setup.fallback.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 3, maxWidth: 760 }}>
              {agents.setup.fallback.body}
            </Typography>
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 1 }}>
                  {agents.setup.fallback.claude.title}
                </Typography>
                <CodeBlock code={agents.setup.fallback.claude.code} label="add under mcpServers" />
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                  {agents.setup.fallback.claude.note}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" component="h4" sx={{ mb: 1 }}>
                  {agents.setup.fallback.codex.title}
                </Typography>
                <CodeBlock code={agents.setup.fallback.codex.code} label="append to the file" />
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                  {agents.setup.fallback.codex.note}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 3 }}>
              {agents.setup.otherClients}{" "}
              <LinkButton href="/agents" size="small" sx={{ px: 0, verticalAlign: "baseline" }}>
                What agents can do with it
              </LinkButton>
            </Typography>
          </Box>
        </Reveal>
      </Section>

      {/* Part 3: three clicks. */}
      <Section
        tone="raised"
        eyebrow="Part 3 · optional"
        title="The Companion"
        lede="A Chrome side panel. Save the posting in front of you, pick a resume, fill the form from your saved answers and track it. Unrelated to Part 2, despite both being add-ons."
        maxWidth={680}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack spacing={1.5}>
                  {[
                    "Open chrome://extensions and turn on Developer mode",
                    "Load unpacked, then pick the extension folder (on a uv install, see below)",
                    "Pin the icon, then click it on any job page",
                  ].map((s, i) => (
                    <Stack key={s} direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                      <Chip label={i + 1} size="small" variant="outlined" sx={{ fontFamily: "var(--font-mono)" }} />
                      <Typography variant="body2">{s}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <Stack spacing={2}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>On a uv install there is no clone to load from.</strong> Run <code>maestro --version</code>,
                  then on GitHub open Releases, that version, and <strong>Source code</strong>. Download it, unpack it
                  and load its <code>extension</code> folder, so the Companion matches the Maestro you run. On Docker,
                  load the <code>extension</code> folder inside your clone. It is not in a store.
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>No ID to copy, nothing to configure.</strong> The Companion pins its identity, so the
                  backend already allowlists it. If you changed the ports, open <code>chrome://extensions</code>,
                  choose Details on the Companion card, then Extension options. Set the Backend address and App
                  address, press Test connection, then Save.
                </Typography>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Updating: the fourth thing a reader needs from an install page. */}
      <Section
        eyebrow="Stay current"
        title="Updating is one command"
        lede="Which command depends on how you installed. The first one covers most readers. Every release is listed in the changelog, and a Breaking changes heading there is worth reading before you update."
        maxWidth={720}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Stack spacing={2.5}>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    Installed with uv
                  </Typography>
                  <CodeBlock code={quickstart.update.uv} />
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                    {quickstart.update.uvNote}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    On Docker
                  </Typography>
                  <CodeBlock code={quickstart.update.docker} />
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                    {quickstart.update.dockerNote}
                  </Typography>
                </Box>
                <Box>
                  <Button href={site.changelog} target="_blank" rel="noopener noreferrer" size="small" sx={{ px: 0 }}>
                    Read the changelog
                  </Button>
                </Box>
              </Stack>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <Stack spacing={2}>
                {quickstart.updateFacts.map((f) => (
                  <Stack key={f.t} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                    <CheckIcon sx={{ fontSize: 19, color: "primary.main", mt: "3px", flexShrink: 0 }} />
                    <Box>
                      <Typography variant="h6" component="h3">
                        {f.t}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {f.b}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* The one place this page sends you next. */}
      <Section
        tone="raised"
        eyebrow="Then what?"
        title="The guide walks you through the first hour."
        lede="This page installs it. The guide is the using: your first session in the order that works, the Companion in action, and what to ask your assistant for."
        maxWidth={700}
      >
        <Reveal>
          <TintPaper sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, maxWidth: 900 }}>
            <Grid container spacing={2.5}>
              {[
                ["Your first session, in order", "From importing resumes to tracking the application. The order is the point."],
                ["Driving it from your assistant", "What to ask for over MCP, and the Companion's four steps: Job, Resume, Fill, Track."],
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

    </>
  );
}
