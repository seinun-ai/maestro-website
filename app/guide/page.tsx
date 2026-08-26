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

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import Reveal from "@/components/Reveal";
import NumberedSteps from "@/components/NumberedSteps";
import TroubleTable from "@/components/TroubleTable";
import MakerNote from "@/components/MakerNote";
import CtaBand from "@/components/CtaBand";
import { TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import { guide } from "@/content/site";

export const metadata: Metadata = {
  title: "Guide",
  description:
    "From zero to your first tailored PDF. Install it, find your way around, run one real application through it, and keep it updated — assuming no Docker or terminal experience beyond copy-pasting.",
};

export default function GuidePage() {
  return (
    <>
      <PageHero eyebrow={guide.hero.eyebrow} title={guide.hero.title} lede={guide.hero.lede} />

      {/* 0 — the easiest door first */}
      <Section eyebrow={guide.agentPath.eyebrow} title={guide.agentPath.title} lede={guide.agentPath.body} maxWidth={720}>
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <CodeBlock code={guide.agentPath.prompt} label="paste into your agent" />
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2.5, mb: 1.5 }}>
                {guide.agentPath.second}
              </Typography>
              <CodeBlock code={guide.agentPath.secondPrompt} label="later, inside the repo" />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <TintPaper tone="warning" sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h5" component="h3" sx={{ mb: 1.5 }}>
                  {guide.agentPath.limits.title}
                </Typography>
                <Stack spacing={1.5}>
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
      </Section>

      {/* 1 — prerequisites */}
      <Section tone="raised" eyebrow={guide.prerequisites.eyebrow} title={guide.prerequisites.title} maxWidth={620}>
        <Grid container spacing={2.5}>
          {guide.prerequisites.items.map((p, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={p.title}>
              <Reveal delay={i * 60} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {p.body}
                  </Typography>
                  {"check" in p && p.check && (
                    <Box sx={{ mt: 2 }}>
                      <CodeBlock code={p.check} />
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                        {p.checkNote}
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* 2 — install */}
      <Section eyebrow={guide.install.eyebrow} title={guide.install.title} maxWidth={620}>
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <CodeBlock code={guide.install.clone} />
              <Alert severity="info" variant="outlined" sx={{ mt: 2.5, borderRadius: 3 }}>
                <AlertTitle sx={{ fontWeight: 700 }}>Not the key, not yet</AlertTitle>
                {guide.install.keyNote}
              </Alert>
              <Box sx={{ mt: 2.5 }}>
                <CodeBlock code={guide.install.up} />
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Stack spacing={2.5}>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {guide.install.upNote}
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {guide.install.firstBoot}
                </Typography>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Box sx={{ mt: { xs: 5, md: 7 } }}>
            <Typography variant="h3" component="h3" sx={{ mb: 2.5 }}>
              {guide.troubleshooting.title}
            </Typography>
            <TroubleTable columns={guide.troubleshooting.columns} rows={guide.troubleshooting.rows} />
          </Box>
        </Reveal>

        <Reveal>
          <Box sx={{ mt: { xs: 5, md: 6 }, maxWidth: 860 }}>
            <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
              {guide.cleanSlate.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2.5 }}>
              {guide.cleanSlate.body}
            </Typography>
            <Stack spacing={2} sx={{ mb: 3 }}>
              {guide.cleanSlate.consequences.map((c) => (
                <Typography key={c.slice(0, 24)} variant="body2" sx={{ color: "text.secondary", pl: 2.5, borderLeft: 3, borderColor: "divider" }}>
                  {c}
                </Typography>
              ))}
            </Stack>
            <CodeBlock code={guide.cleanSlate.nuke} />
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
              {guide.cleanSlate.nukeNote}
            </Typography>
          </Box>
        </Reveal>
      </Section>

      {/* 3 — orient */}
      <Section tone="raised" eyebrow={guide.tour.eyebrow} title={guide.tour.title} lede={guide.tour.lede} maxWidth={620}>
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

      {/* 4 — the heart of the guide */}
      <Section eyebrow={guide.firstSession.eyebrow} title={guide.firstSession.title} lede={guide.firstSession.lede} maxWidth={720}>
        <Box sx={{ maxWidth: 820 }}>
          <NumberedSteps steps={guide.firstSession.steps} />
        </Box>
      </Section>

      {/* 5 + 6 — the two other surfaces */}
      <Section tone="raised" eyebrow={guide.extension.eyebrow} title={guide.extension.title} lede={guide.extension.lede} maxWidth={680}>
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Paper sx={{ p: 3, borderRadius: 3, backgroundColor: "background.default" }}>
                <Stack spacing={1.75}>
                  {guide.extension.steps.map((s, i) => (
                    <Stack key={s} direction="row" spacing={1.75} sx={{ alignItems: "flex-start" }}>
                      <Chip label={i + 1} size="small" variant="outlined" sx={{ fontFamily: "var(--font-mono)", flexShrink: 0 }} />
                      <Typography variant="body2">{s}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                {guide.extension.note}
              </Typography>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                {guide.mcp.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                {guide.mcp.lede}
              </Typography>
              <CodeBlock code={guide.mcp.cmd} />
              <Stack spacing={2} sx={{ mt: 2.5 }}>
                {guide.mcp.clients.map((c) => (
                  <Box key={c.name}>
                    <Typography variant="h6" component="h4">
                      {c.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {c.body}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* 7 — the horizon */}
      <Section eyebrow={guide.next.eyebrow} title={guide.next.title} lede={guide.next.lede} maxWidth={720}>
        <Grid container spacing={2.5}>
          {guide.next.items.map((n, i) => (
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
          <Typography variant="h4" component="p" sx={{ mt: 4, maxWidth: 820 }}>
            {guide.next.closing}
          </Typography>
        </Reveal>
      </Section>

      {/* 8 — the part that keeps it alive */}
      <Section tone="raised" eyebrow={guide.updating.eyebrow} title={guide.updating.title} lede={guide.updating.lede} maxWidth={720}>
        <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <CodeBlock code={guide.updating.cmd} />
              <Box sx={{ mt: 2.5 }}>
                <CodeBlock code={guide.updating.check} />
              </Box>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                {guide.updating.checkNote}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                {guide.updating.windows}
              </Typography>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <Stack spacing={2.25}>
                {guide.updating.facts.map((f) => (
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
        <Reveal>
          <Box sx={{ mt: 4, maxWidth: 860 }}>
            <Divider sx={{ mb: 3 }} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {guide.updating.why}
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: "wrap" }}>
              <LinkButton href="/agents" variant="outlined">
                What agents can do with it
              </LinkButton>
              <LinkButton href="/features" variant="outlined">
                Every feature
              </LinkButton>
            </Stack>
          </Box>
        </Reveal>
      </Section>

      <MakerNote />
      <CtaBand />
    </>
  );
}
