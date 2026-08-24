import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FeatureRow from "@/components/FeatureRow";
import ComparisonTable from "@/components/ComparisonTable";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import MakerNote from "@/components/MakerNote";
import { featureExtras, features } from "@/content/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "A Career KB that resolves your history, deterministic ATS scoring, a job-independent health report, real LaTeX and Typst typesetting, a browser extension that stores no field values, and analytics on the market you are applying into.",
};


export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything here exists to keep one document connected to one record."
        lede="A resume builder gives you the last step with no evidence base behind it. A matcher scores a document it did not compose. These are the pieces that keep the evidence and the document connected end to end."
      />

      <Section>
        <Stack spacing={{ xs: 9, md: 14 }}>
          {features.map((f, i) => (
            <FeatureRow key={f.id} feature={f} flip={i % 2 === 1} />
          ))}
        </Stack>
      </Section>

      <Section
        tone="raised"
        eyebrow="Also in the box"
        title="The parts that make each pass cheaper than the last"
        maxWidth={680}
      >
        <Grid container spacing={2.5}>
          {featureExtras.map((e, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={e.id}>
              <Reveal delay={(i % 3) * 70} sx={{ height: "100%" }}>
                <Paper id={e.id} sx={{ p: 3, height: "100%", borderRadius: 3, backgroundColor: "background.default", scrollMarginTop: 96 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 1.25 }}>
                    {e.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {e.body}
                  </Typography>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section
        eyebrow="How it compares"
        title="Side by side with the alternatives"
        lede="Only checkable claims — pick any row and verify it yourself."
        maxWidth={640}
      >
        <Reveal>
          <ComparisonTable />
        </Reveal>
        <Reveal>
          <Box sx={{ mt: 5, maxWidth: 760 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              One row deserves expanding. The score is <strong>our</strong> score: deterministic, versioned and
              reproducible. It is not a prediction of what any real ATS shows an employer — no consumer tool can offer
              that, and independent tests keep proving the point, with the same resume scoring 66–99 across 100 runs on a
              popular LLM-judged checker. Use ours to compare your own drafts against one another and to catch parsing
              and coverage problems.
            </Typography>
          </Box>
        </Reveal>
      </Section>

      <MakerNote />
      <CtaBand />
    </>
  );
}
