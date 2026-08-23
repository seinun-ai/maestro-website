import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
import GitHubMark from "@/components/GitHubMark";
import { TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import { quickstart, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Prerequisites, the four-line quickstart, what works with zero API keys, how to run it fully offline against a local model server, and how to wire up the MCP server.",
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
        title="Four lines to a running studio."
        lede="Everything runs in three containers on your machine. The first build takes several minutes because it installs TeX Live and downloads the pinned embedding model; after that, it is one command."
      >
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", pt: 1 }}>
          <Chip label="Apache-2.0" size="small" variant="outlined" />
          <Chip label="No account" size="small" variant="outlined" />
          <Chip label="No API key needed to start" size="small" variant="outlined" />
          <Chip label="127.0.0.1 only" size="small" variant="outlined" />
        </Stack>
      </PageHero>

      <Section eyebrow="Step 1" title="Prerequisites" maxWidth={620}>
        <Grid container spacing={2.5}>
          {quickstart.prerequisites.map((p, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={p.title}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {p.body}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section
        tone="raised"
        eyebrow="Step 2"
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
              <Alert severity="info" variant="outlined" sx={{ mt: 3, borderRadius: 3 }}>
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

      <Section
        eyebrow="Step 3 — optional"
        title={quickstart.noKey.title}
        lede="Maestro CS is fully operational with zero API keys configured — rare in this category, and deliberate."
        maxWidth={660}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal sx={{ height: "100%" }}>
              <TintPaper tone="success" sx={{ p: 3.5, height: "100%", borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  Works immediately, no key
                </Typography>
                <Stack spacing={1.5}>
                  {quickstart.noKey.works.map((w) => (
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
                  {quickstart.noKey.defers.map((d) => (
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
      </Section>

      <Section
        tone="raised"
        eyebrow="Step 4 — choose your models"
        title="Three tiers, configured independently"
        lede="Press Test on each in Settings → Models to measure what it actually does. Because the tiers are separate, running Fast and Smart locally while Chat points at a hosted model is a supported — and often optimal — setup."
        maxWidth={720}
      >
        <Reveal>
          <Paper sx={{ borderRadius: 3, overflowX: "auto", mb: 4 }}>
            <Table sx={{ minWidth: 560 }} aria-label="Model tiers">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "16%" }}>Tier</TableCell>
                  <TableCell sx={{ width: "48%" }}>Used for</TableCell>
                  <TableCell>Wants</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {quickstart.tiers.map((t) => (
                  <TableRow key={t.tier} sx={{ "&:last-of-type td": { borderBottom: 0 } }}>
                    <TableCell sx={{ fontWeight: 700, color: "primary.main" }}>{t.tier}</TableCell>
                    <TableCell sx={{ color: "text.secondary" }}>{t.used}</TableCell>
                    <TableCell>{t.wants}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Reveal>

        <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                Run it fully offline
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Point the OpenAI-compatible client at any local server and no resume text leaves your machine. Model ids
                become free text once that is set, because we cannot enumerate what your server has pulled.
              </Typography>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal delay={80}>
              <CodeBlock code={quickstart.offline} />
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <Section
        eyebrow="Step 5 — optional"
        title="Wire it up to your assistant"
        lede="With the backend already running, one command registers the MCP server and prints ready-to-paste config for every client."
        maxWidth={660}
      >
        <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <CodeBlock code={quickstart.mcp} />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <Stack spacing={2}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Add <code>--profile hunt</code> to register a scoped profile instead, or <code>--print-only</code> to
                  change nothing and just see the config. Restart Claude Desktop with Cmd+Q after pasting — closing the
                  window is not enough.
                </Typography>
                <Box>
                  <LinkButton href="/agents" variant="outlined">
                    What agents can do with it
                  </LinkButton>
                </Box>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <Section tone="raised" eyebrow="Before you file a bug" title="Read the known issues first" maxWidth={640}>
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

      <Section eyebrow="Questions" title="Common ones, answered" maxWidth={620}>
        <Reveal>
          <Faq />
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
