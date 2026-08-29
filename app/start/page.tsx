import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import BlockIcon from "@mui/icons-material/BlockOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import TroubleTable from "@/components/TroubleTable";
import { TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import { agents, guide, quickstart } from "@/content/site";

export const metadata: Metadata = {
  title: "Install",
  description:
    "Three parts and only the first is required: the app, your assistant over MCP, the browser panel. Numbered steps for each, the hand-written config fallbacks, and the one-command update.",
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
        eyebrow="Install"
        title="Three parts. Only the first is required."
        lede="Everything runs in three containers on your machine — about a 1 GB download of prebuilt images, one command. Your assistant and the browser panel attach whenever you want them."
      >
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", pt: 1 }}>
          <Chip label="Apache-2.0" size="small" variant="outlined" />
          <Chip label="No account" size="small" variant="outlined" />
          <Chip label="≈1¢ per application" size="small" variant="outlined" />
          <Chip label="127.0.0.1 only" size="small" variant="outlined" />
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
        lede="Three steps, in order. Before you start, you need exactly two tools and one download's worth of patience."
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
                    <CodeBlock code={quickstart.clone} />
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                  <StepNumber n={2} />
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 0.5 }}>
                      {quickstart.appSteps[1].t}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {quickstart.appSteps[1].b}
                    </Typography>
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
                <AlertTitle sx={{ fontWeight: 700 }}>Port already allocated?</AlertTitle>
                All three host ports are overridable in <code>.env</code>: <code>BACKEND_HOST_PORT</code> (8001),{" "}
                <code>FRONTEND_HOST_PORT</code> (3000) and <code>POSTGRES_HOST_PORT</code> (55432). Only the host side
                of the mapping moves.
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
          <Box sx={{ mt: { xs: 5, md: 6 } }}>
            <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
              {quickstart.troubleshooting.title}
            </Typography>
            <TroubleTable columns={quickstart.troubleshooting.columns} rows={quickstart.troubleshooting.rows} />
          </Box>
        </Reveal>
      </Section>

      {/* Part 2: two client-native paths, profiles as a config customization,
          and the hand-written fallbacks in full. The setup script is a footnote. */}
      <Section
        tone="raised"
        eyebrow="Part 2 · optional"
        title="Attach your assistant (MCP)"
        lede="Two paths, both from the client's own settings — no terminal, no config file, no host Python, because the server runs inside the backend container Part 1 started."
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
          <TintPaper sx={{ p: 3, borderRadius: 3, mt: 3 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 0.75 }}>
              Six profiles — full by default, scoped when you customize
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {agents.setup.profilesNote}
            </Typography>
          </TintPaper>
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
        eyebrow="Part 3 · optional"
        title="The browser panel"
        lede="A Chrome side panel: capture the posting in front of you and fill forms from your autofill profile. Unrelated to Part 2, despite the shared word “extension”."
        maxWidth={680}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Stack spacing={1.5}>
                  {[
                    "Open chrome://extensions and turn on Developer mode",
                    "Load unpacked → the repo's extension/ folder",
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
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <strong>No ID to copy, nothing to configure.</strong> The extension pins its identity, so the backend
                already allowlists it out of the box. If you changed the ports in <code>.env</code>, set the backend
                and app URLs under the panel&apos;s <code>⋯</code> menu.
              </Typography>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Updating: the fourth thing a reader needs from an install page. */}
      <Section
        tone="raised"
        eyebrow="Stay current"
        title="Updating is one command"
        lede="Run it from the folder you cloned. It backs up the database, moves your checkout to the newest release, brings the images to that same version, and waits until the stack is healthy again."
        maxWidth={720}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <CodeBlock code={quickstart.update} />
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                <code>--check</code> changes nothing and answers only: am I up to date? On Windows, run it under WSL.
              </Typography>
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
        eyebrow="Then what?"
        title="The guide walks you through the first hour."
        lede="This page installs it. The guide is the using: your first session in the order that works, the browser panel in action, and what to ask your assistant for."
        maxWidth={700}
      >
        <Reveal>
          <TintPaper sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, maxWidth: 900 }}>
            <Grid container spacing={2.5}>
              {[
                ["Your first session, in order", "Eleven steps from importing resumes to tracking the application. The order is the point."],
                ["Driving it from your assistant", "What to ask for over MCP, and the panel's Job → Score → Resume → Fill → Track ladder."],
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
