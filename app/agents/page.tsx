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
import Button from "@mui/material/Button";
import WarningAmberIcon from "@mui/icons-material/WarningAmberOutlined";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import ContentPasteIcon from "@mui/icons-material/ContentPasteOutlined";
import GavelIcon from "@mui/icons-material/GavelOutlined";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ShotFrame from "@/components/ShotFrame";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import { TintPaper } from "@/components/Surfaces";
import { agents, quickstart, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Agents & MCP",
  description:
    "An MCP server with 88 tools across six tool sets, running on your machine against your data. Connect with one command, hunt with the agent you already use, triage in the Agent inbox, and by default stop for your yes before every submit.",
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
                caption={agents.hero.caption}
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
                    Six tool sets, one at a time
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
                    <code>full</code> alongside a smaller set registers each shared tool twice, so pick one.
                  </Typography>
                </Box>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Grid container spacing={2.5} sx={{ mt: { xs: 4, md: 5 } }}>
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
          <TintPaper sx={{ mt: { xs: 4, md: 5 }, p: { xs: 3, md: 4 }, borderRadius: 4 }}>
            <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
              {agents.setup.delegate.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>
              {agents.setup.delegate.body}
            </Typography>
            <CodeBlock code={agents.setup.delegate.prompt} label="prompt" wrap />
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
              {agents.setup.delegate.caveat}
            </Typography>
          </TintPaper>
        </Reveal>
        <Reveal>
          <Alert severity="warning" variant="outlined" sx={{ mt: { xs: 6, md: 8 }, borderRadius: 3 }}>
            <AlertTitle sx={{ fontWeight: 700 }}>{agents.setup.local.title}</AlertTitle>
            {agents.setup.local.body}
          </Alert>
        </Reveal>
      </Section>

      <Section tone="raised" eyebrow="No key required" title={agents.keyless.title} maxWidth={760}>
        <Reveal>
          <TintPaper sx={{ p: { xs: 3, md: 4.5 }, borderRadius: 4, maxWidth: 900 }}>
            <Typography variant="subtitle1">{agents.keyless.body}</Typography>
          </TintPaper>
        </Reveal>
      </Section>

      <Section eyebrow="Hunting" title={agents.hunt.title} lede={agents.hunt.body} maxWidth={760}>
        <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <ShotFrame
                src={agents.hunt.image}
                alt={agents.hunt.imageAlt}
                sizes="(max-width: 900px) 100vw, 640px"
                caption={agents.hunt.caption}
              />
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
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <Section tone="raised" eyebrow="Skills" title={agents.skills.title} lede={agents.skills.body} maxWidth={760}>
        <Grid container spacing={2.5}>
          {agents.skills.items.map((k, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={k.name}>
              <Reveal delay={(i % 3) * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", mb: 1 }}
                  >
                    {k.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {k.detail}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
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
              {agents.ledger.caveat}
            </Typography>
          </Box>
        </Reveal>
      </Section>

      <Section
        tone="raised"
        eyebrow={agents.fullAutomation.eyebrow}
        title={agents.fullAutomation.title}
        lede={agents.fullAutomation.body}
        maxWidth={800}
      >
        <Grid container spacing={2.5}>
          {agents.fullAutomation.points.map((g, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={g}>
              <Reveal delay={i * 80} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Typography variant="body2">{g}</Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        <Reveal>
          <Stack spacing={2} sx={{ mt: 4, maxWidth: 800 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {agents.fullAutomation.extra}
            </Typography>
            <Box>
              <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                {agents.fullAutomation.login.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {agents.fullAutomation.login.body}
              </Typography>
            </Box>
          </Stack>
        </Reveal>
      </Section>

      <Section eyebrow="Risks" title={agents.risks.title} lede={agents.risks.lede} maxWidth={760}>
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

      <Section tone="raised" eyebrow={agents.alwaysOn.eyebrow} title={agents.alwaysOn.title} lede={agents.alwaysOn.body} maxWidth={800}>
        <Grid container spacing={2.5}>
          {agents.alwaysOn.points.map((g, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={g}>
              <Reveal delay={(i % 2) * 80} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Typography variant="body2">{g}</Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        <Reveal>
          <Box sx={{ mt: 3 }}>
            <Button
              href={`${site.repo}/blob/main/docs/always-on-bot.md`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
            >
              {agents.alwaysOn.link}
            </Button>
          </Box>
        </Reveal>
      </Section>
    </>
  );
}
