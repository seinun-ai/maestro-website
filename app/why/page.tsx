import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import PainPoint from "@/components/PainPoint";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import MakerNote from "@/components/MakerNote";
import CtaBand from "@/components/CtaBand";
import { painPoints, whyClose, whyIntro } from "@/content/site";

export const metadata: Metadata = {
  title: "Why you'd want this",
  description:
    "Unpredictable tailoring, resume_v2_FINAL(3).docx, repeating the same screening answers, LaTeX you can't edit, no idea what the market wants. Eleven specific pains, and exactly what answers each one.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero eyebrow={whyIntro.eyebrow} title={whyIntro.title} lede={whyIntro.lede} />

      <Box component="section" sx={{ py: { xs: 5, md: 8 } }}>
        <Container>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            {painPoints.map((p, i) => (
              <PainPoint key={p.pain} item={p} index={i} />
            ))}
          </Box>
        </Container>
      </Box>

      <Section tone="raised">
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

      <MakerNote />
      <CtaBand />
    </>
  );
}
