import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";

import PageHero from "@/components/PageHero";
import Section, { Eyebrow } from "@/components/Section";
import PainPoint from "@/components/PainPoint";
import ShotFrame from "@/components/ShotFrame";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import CtaBand from "@/components/CtaBand";
import { painPoints, steps, whyClose, whyIntro } from "@/content/site";

export const metadata: Metadata = {
  title: "Why, and how it works",
  description:
    "Eleven specific pains a job search actually has, what answers each one, and the five-step loop underneath — evidence, base resume, application, typeset PDF — with real captures at each step.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero eyebrow={whyIntro.eyebrow} title={whyIntro.title} lede={whyIntro.lede} />

      <Box component="section" sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Box sx={{ "& > *:not(:first-of-type)": { borderTop: 1, borderColor: "divider" } }}>
            {painPoints.map((p, i) => (
              <PainPoint key={p.pain} item={p} index={i} headingLevel="h2" />
            ))}
          </Box>
        </Container>
      </Box>

      {/* The loop, absorbed from the old /how-it-works page: the pains say
          what hurts, this says what happens instead — one argument, one page. */}
      <Box id="loop" component="section" sx={{ py: { xs: 8, md: 12 }, borderTop: 1, borderColor: "divider" }}>
        <Container>
          <Reveal>
            <Box sx={{ maxWidth: 820, mb: { xs: 6, md: 9 } }}>
              <Eyebrow>How it works</Eyebrow>
              <Typography variant="h2" component="h2">
                Evidence → base resume → application → typeset PDF.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2 }}>
                That whole cycle is the part other tools cannot reproduce. Here is each step of it, with what the app
                actually shows you.
              </Typography>
            </Box>
          </Reveal>
          <Stack spacing={{ xs: 9, md: 14 }}>
            {steps.map((s) => (
              <Box key={s.n}>
                <Grid container spacing={{ xs: 4, md: 7 }} sx={{ alignItems: "flex-start" }}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Reveal>
                      <Stack spacing={2}>
                        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                          <Box
                            sx={{
                              width: 42,
                              height: 42,
                              borderRadius: "50%",
                              display: "grid",
                              placeItems: "center",
                              border: 2,
                              borderColor: "primary.main",
                              color: "primary.main",
                              fontWeight: 800,
                              fontSize: "0.9rem",
                              fontFamily: "var(--font-mono)",
                              flexShrink: 0,
                            }}
                          >
                            {s.n}
                          </Box>
                          <Divider sx={{ flex: 1 }} />
                        </Stack>
                        <Typography variant="h2" component="h3" sx={{ fontSize: { xs: "1.7rem", md: "2.1rem" } }}>
                          {s.title}
                        </Typography>
                        <Typography variant="subtitle1">{s.summary}</Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary" }}>
                          {s.body}
                        </Typography>
                        <Alert severity="info" icon={false} variant="outlined" sx={{ borderRadius: 2.5 }}>
                          <Typography variant="body2">{s.note}</Typography>
                        </Alert>
                      </Stack>
                    </Reveal>
                  </Grid>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Reveal delay={80}>
                      <ShotFrame src={s.image} alt={s.imageAlt} sizes="(max-width: 900px) 100vw, 640px" />
                    </Reveal>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Section
        tone="raised"
        eyebrow="The rule underneath all five"
        title="A gap is closed by evidence, or it stays a gap."
        lede="This is the whole discipline. Ask a general-purpose assistant for a tailored resume and you get fluent text that no longer quite matches what you did, in a layout it reinvents each time, with nothing kept between conversations."
        maxWidth={720}
      >
        <Grid container spacing={2.5}>
          {[
            {
              t: "Approved evidence composes verbatim",
              b: "Nothing is invented at create time. Rewriting a bullet is a separate, explicit step that asks you first.",
            },
            {
              t: "An unevidenced keyword can only reach your skills list",
              b: "It can never become an experience bullet. That constraint survives Quick Tailor and the agent lane alike.",
            },
            {
              t: "Every edit is a diff you can revert",
              b: "Per hunk, on the record, with a resume version behind it. Nothing the AI does to your document is one-way.",
            },
          ].map((c, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={c.t}>
              <Reveal delay={i * 80} sx={{ height: "100%" }}>
                <Paper sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default" }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1.25 }}>
                    {c.t}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {c.b}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section>
        <Reveal>
          <Stack spacing={3} sx={{ maxWidth: 820 }}>
            <Typography variant="h2">{whyClose.title}</Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              {whyClose.body}
            </Typography>
            <Typography variant="h3" component="p">
              <Mark>{whyClose.kicker}</Mark>
            </Typography>
          </Stack>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
