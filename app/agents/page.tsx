import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import WarningAmberIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import ContentPasteIcon from "@mui/icons-material/ContentPasteOutlined";
import GavelIcon from "@mui/icons-material/GavelOutlined";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ShotFrame from "@/components/ShotFrame";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import MakerNote from "@/components/MakerNote";
import { TintPaper } from "@/components/Surfaces";
import { agents, quickstart } from "@/content/site";

export const metadata: Metadata = {
  title: "Agents & MCP",
  description:
    "An MCP server with 83 tools across six profiles, running on your machine against your database. Hunt with the agent you already use, triage proposals, and stop at a consent gate that an agent can never self-certify.",
};

export default function AgentsPage() {
  return (
    <>
      <PageHero eyebrow={agents.hero.eyebrow} title={agents.hero.title} lede={agents.hero.lede} />

      <Section>
        <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <ShotFrame
                src={agents.hero.image}
                alt={agents.hero.imageAlt}
                priority
                sizes="(max-width: 900px) 100vw, 640px"
                caption="Claude pulling the whole pipeline over MCP and building its own view of it."
              />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h3" component="h2" sx={{ mb: 1.5 }}>
                    {agents.setup.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                    {agents.setup.body}
                  </Typography>
                  <Stack spacing={1.25}>
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
                  <Box sx={{ mt: 2.5 }}>
                    <CodeBlock code={quickstart.mcp} />
                  </Box>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                    {agents.setup.manual}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                    {agents.setup.flags}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 1.5 }}>
                    Six profiles, one at a time
                  </Typography>
                  <Stack spacing={1}>
                    {agents.profiles.map((p) => (
                      <Stack key={p.name} direction="row" spacing={1.5} sx={{ alignItems: "baseline" }}>
                        <Chip
                          label={p.name}
                          size="small"
                          variant="outlined"
                          sx={{ fontFamily: "var(--font-mono)", minWidth: 84 }}
                        />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {p.detail}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                    <code>full</code> alongside a scoped profile registers each shared tool twice, so pick one.
                  </Typography>
                </Box>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>


        <Reveal>
          <TintPaper sx={{ mt: { xs: 4, md: 5 }, p: { xs: 3, md: 4 }, borderRadius: 4 }}>
            <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
              {agents.setup.delegate.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>
              {agents.setup.delegate.body}
            </Typography>
            <CodeBlock code={agents.setup.delegate.prompt} label="prompt" />
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
              {agents.setup.delegate.caveat}
            </Typography>
          </TintPaper>
        </Reveal>
        <Reveal>
          <Alert severity="warning" variant="outlined" sx={{ mt: { xs: 6, md: 8 }, borderRadius: 3 }}>
            <AlertTitle sx={{ fontWeight: 700 }}>Keep the transport STDIO</AlertTitle>
            The HTTP option means exposing a deliberately unauthenticated backend that holds your full employment
            history. Don&apos;t.
          </Alert>
        </Reveal>
      </Section>

      <Section eyebrow="No key required" title={agents.keyless.title} maxWidth={760}>
        <Reveal>
          <TintPaper sx={{ p: { xs: 3, md: 4.5 }, borderRadius: 4, maxWidth: 900 }}>
            <Typography variant="subtitle1">{agents.keyless.body}</Typography>
          </TintPaper>
        </Reveal>
      </Section>

      <Section tone="raised" eyebrow="Hunting" title={agents.hunt.title} lede={agents.hunt.body} maxWidth={760}>
        <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <ShotFrame src={agents.hunt.image} alt={agents.hunt.imageAlt} sizes="(max-width: 900px) 100vw, 640px" />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Typography
                variant="h3"
                component="p"
                sx={{ pl: 2.5, borderLeft: 3, borderColor: "primary.main" }}
              >
                {agents.hunt.kicker}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 3 }}>
                The author&apos;s own daily prompts ship in <code>docs/agent-prompts/</code> as starting points to adapt: a
                scheduled hunt and two apply-session variants, with the personal parts turned into placeholders.
              </Typography>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <Section eyebrow="The consent ledger" title={agents.ledger.title} lede={agents.ledger.body} maxWidth={800}>
        <Grid container spacing={2.5}>
          {agents.ledger.guards.map((g, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={g}>
              <Reveal delay={i * 80} sx={{ height: "100%" }}>
                <TintPaper sx={{ p: 3, height: "100%", borderRadius: 3 }}>
                  <GavelIcon sx={{ color: "primary.main", mb: 1.5 }} />
                  <Typography variant="body2">{g}</Typography>
                </TintPaper>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        <Reveal>
          <Box sx={{ mt: 4, maxWidth: 800 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Be clear-eyed about what that consent event is: the agent writes it when it calls the tool, so it records{" "}
              <em>that the agent said you agreed</em>. It gives you attribution after the fact and a hard ceiling on
              volume; it is not a lock a prompt-injected agent cannot pick. The lane is built to be run while you watch
              it.
            </Typography>
          </Box>
        </Reveal>
      </Section>

      <Section tone="raised" eyebrow="Risks" title={agents.risks.title} lede={agents.risks.lede} maxWidth={760}>
        <Grid container spacing={2.5}>
          {agents.risks.items.map((r, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={r.title}>
              <Reveal delay={i * 80} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <WarningAmberIcon sx={{ color: "warning.main", mb: 1.5 }} />
                  <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                    {r.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {r.body}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        <Reveal>
          <Typography variant="h4" component="p" sx={{ mt: 4 }}>
            {agents.risks.closing}
          </Typography>
        </Reveal>
      </Section>

      <MakerNote />
      <CtaBand />
    </>
  );
}
