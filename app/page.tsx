import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FunctionsIcon from "@mui/icons-material/FunctionsOutlined";
import VerifiedIcon from "@mui/icons-material/VerifiedOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpenOutlined";
import ShieldIcon from "@mui/icons-material/ShieldOutlined";

import Hero from "@/components/Hero";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ShotFrame from "@/components/ShotFrame";
import ComparisonTable from "@/components/ComparisonTable";
import FeatureRow from "@/components/FeatureRow";
import PainPoint from "@/components/PainPoint";
import Economics from "@/components/Economics";
import ModelProfiles from "@/components/ModelProfiles";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import CodeBlock from "@/components/CodeBlock";
import MakerNote from "@/components/MakerNote";
import Mark from "@/components/Mark";
import StructuredData from "@/components/StructuredData";
import { IconTile, TintBand, TintPaper } from "@/components/Surfaces";
import { LinkButton } from "@/components/NextMui";
import {
  agents,
  economics,
  features,
  modelProfiles,
  painPoints,
  pillars,
  privacy,
  problem,
  quickstart,
  steps,
  whyIntro,
} from "@/content/site";

const pillarIcons: Record<string, React.ReactElement> = {
  determinism: <FunctionsIcon />,
  evidence: <VerifiedIcon />,
  ownership: <LockOpenIcon />,
};

/** The home page shows the five sharpest pains; /why carries all eleven. */
const HOME_PAINS = [0, 1, 3, 4, 8];

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />

      {/* The premise */}
      <Section tone="raised">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <Eyebrow>{problem.eyebrow}</Eyebrow>
              <Typography variant="h2">{problem.title}</Typography>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal delay={80}>
              <Stack spacing={2.5}>
                {problem.body.map((p) => (
                  <Typography key={p.slice(0, 24)} variant="body1" sx={{ color: "text.secondary" }}>
                    {p}
                  </Typography>
                ))}
                <Typography variant="h3" component="p" sx={{ mt: 1 }}>
                  <Mark>{problem.pull}</Mark>
                </Typography>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Pain points — the reader recognises themselves before we explain anything */}
      <Section eyebrow={whyIntro.eyebrow} title={whyIntro.title} lede={whyIntro.lede} maxWidth={720}>
        <Box sx={{ "& > *:not(:first-of-type)": { borderTop: 1, borderColor: "divider" } }}>
          {HOME_PAINS.map((idx, i) => (
            <PainPoint key={painPoints[idx].pain} item={painPoints[idx]} index={i} />
          ))}
        </Box>
        <Reveal>
          <Stack direction="row" sx={{ justifyContent: "center", mt: { xs: 5, md: 6 } }}>
            <LinkButton href="/why" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}>
              All eleven reasons
            </LinkButton>
          </Stack>
        </Reveal>
      </Section>

      {/* Three pillars */}
      <Section
        tone="raised"
        eyebrow="What makes it different"
        title="Three commitments, and everything else follows from them"
        lede="These are the parts other tools in this category do not do — not because they are hard to copy, but because each one costs something a subscription product is unwilling to pay."
      >
        <Grid container spacing={3}>
          {pillars.map((p, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={p.title}>
              <Reveal delay={i * 90} sx={{ height: "100%" }}>
                <Paper sx={{ p: { xs: 3, md: 3.5 }, height: "100%", borderRadius: 3 }}>
                  <Stack spacing={2}>
                    <IconTile>{pillarIcons[p.icon]}</IconTile>
                    <Typography variant="h4" component="h3">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {p.body}
                    </Typography>
                    <Divider sx={{ pt: 0.5 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {p.proof}
                    </Typography>
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* The loop */}
      <Section
        eyebrow="The loop"
        title="Five steps, and the fourth one is where the value is"
        lede="Built for few, well-evidenced applications rather than volume — because depth per application is the only lever left when a single opening draws around 240 of them."
      >
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {steps.map((s, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={s.n}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Stack spacing={1.5}>
                    <Typography
                      sx={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", fontWeight: 700, color: "primary.main" }}
                    >
                      {s.n}
                    </Typography>
                    <Typography variant="h4" component="h3">
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {s.summary}
                    </Typography>
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          ))}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Reveal delay={350} sx={{ height: "100%" }}>
              <TintPaper
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4" component="p" sx={{ mb: 2 }}>
                  Walk the whole loop, step by step.
                </Typography>
                <LinkButton href="/how-it-works" endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", px: 0 }}>
                  How it works
                </LinkButton>
              </TintPaper>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Two flagship features */}
      <Section
        tone="raised"
        eyebrow="Inside the studio"
        title="The parts you will actually live in"
        lede="Everything below is in the shipped app — these are real captures, not mockups."
      >
        <Stack spacing={{ xs: 8, md: 12 }}>
          <FeatureRow feature={features[0]} />
          <FeatureRow feature={features[1]} flip />
        </Stack>
        <Reveal>
          <Stack direction="row" sx={{ justifyContent: "center", mt: { xs: 6, md: 8 } }}>
            <LinkButton href="/features" variant="outlined" size="large" endIcon={<ArrowForwardIcon />}>
              See every feature
            </LinkButton>
          </Stack>
        </Reveal>
      </Section>

      {/* Economics — the number that reframes the category */}
      <Section
        eyebrow={economics.eyebrow}
        title={economics.title}
        lede={economics.lede}
        maxWidth={760}
      >
        <Economics />
      </Section>

      {/* Model profiles */}
      <Section
        tone="raised"
        eyebrow={modelProfiles.eyebrow}
        title={modelProfiles.title}
        lede={modelProfiles.lede}
        maxWidth={800}
      >
        <ModelProfiles />
      </Section>

      {/* Comparison */}
      <Section
        eyebrow="How it compares"
        title="The rows a subscription product cannot fill in"
        lede="No vibes, no vendor asterisks — every claim here is one you can check against the source in an afternoon."
      >
        <Reveal>
          <ComparisonTable />
        </Reveal>
      </Section>

      {/* Agents */}
      <Section tone="raised" eyebrow={agents.hero.eyebrow} title={agents.hero.title} lede={agents.hero.lede}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <ShotFrame src={agents.hero.image} alt={agents.hero.imageAlt} sizes="(max-width: 900px) 100vw, 640px" />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                    {agents.setup.title}
                  </Typography>
                  <CodeBlock code={quickstart.mcp} />
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1.5 }}>
                    Registers Claude Code for you. Prints ready-to-paste config for Claude Desktop and ChatGPT desktop /
                    Codex CLI.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
                    Six profiles keep the tool list relevant per chat — enable one at a time.
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                    {agents.profiles.map((p) => (
                      <Chip key={p.name} label={p.name} size="small" variant="outlined" sx={{ fontFamily: "var(--font-mono)" }} />
                    ))}
                  </Stack>
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>No API key?</strong> Over MCP your assistant is the model, so tailoring and KB upkeep still
                  work.
                </Typography>
                <LinkButton href="/agents" endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", px: 0 }}>
                  Agents, hunting and the consent ledger
                </LinkButton>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* Privacy strip */}
      <TintBand>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <ShieldIcon sx={{ fontSize: 34, color: "primary.main", mb: 1.5 }} />
              <Typography variant="h2">{privacy.hero.title}</Typography>
              <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2 }}>
                {privacy.hero.lede}
              </Typography>
              <LinkButton href="/privacy" endIcon={<ArrowForwardIcon />} sx={{ mt: 3, px: 0 }}>
                Read the honest version
              </LinkButton>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2.5}>
              {privacy.facts.map((f, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={f.title}>
                  <Reveal delay={i * 70}>
                    <Stack spacing={1}>
                      <Typography variant="h5" component="h3">
                        {f.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {f.body}
                      </Typography>
                    </Stack>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </TintBand>

      {/* Quickstart */}
      <Section
        eyebrow="Get running"
        title="Four pieces, and only the first is required."
        lede="The rest attach whenever you want them."
        maxWidth={640}
      >
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal>
              <CodeBlock code={quickstart.clone} />
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal delay={80}>
              <Stack spacing={2}>
                {quickstart.pieces.map((p) => (
                  <Stack key={p.n} direction="row" spacing={1.75} sx={{ alignItems: "flex-start" }}>
                    <Chip
                      label={p.n}
                      size="small"
                      color={p.required ? "primary" : "default"}
                      variant={p.required ? "filled" : "outlined"}
                      sx={{ minWidth: 26, fontFamily: "var(--font-mono)" }}
                    />
                    <Box>
                      <Typography variant="h6" component="p">
                        {p.title}
                        {!p.required && (
                          <Typography component="span" variant="body2" sx={{ color: "text.secondary", fontWeight: 400 }}>
                            {" "}
                            · optional
                          </Typography>
                        )}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
                <LinkButton href="/start" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", mt: 1 }}>
                  Full setup guide
                </LinkButton>
              </Stack>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* FAQ */}
      <Section tone="raised" eyebrow="Questions" title="The ones worth answering up front" maxWidth={640}>
        <Reveal>
          <Faq />
        </Reveal>
      </Section>

      <MakerNote />
      <CtaBand />
    </>
  );
}
