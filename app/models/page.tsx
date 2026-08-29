import * as React from "react";
import type { Metadata } from "next";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Economics from "@/components/Economics";
import ModelProfiles from "@/components/ModelProfiles";
import { economics, modelProfiles, modelsPage, quickstart } from "@/content/site";

export const metadata: Metadata = {
  title: "Models",
  description:
    "Two model profiles benchmarked on real postings with every call traced, what a tailored application costs at list prices, and why local model servers stay configurable but untested.",
};

/**
 * Model choice and cost are decisions a reader makes after installing, in
 * Settings → Models. They used to sit inside /start, between "clone the repo"
 * and "attach your assistant", which is neither where they are needed nor
 * where they are looked up later. Here they are one reference page.
 */
export default function ModelsPage() {
  return (
    <>
      <PageHero eyebrow={modelsPage.eyebrow} title={modelsPage.title} lede={modelsPage.lede} />

      <Section eyebrow={modelProfiles.eyebrow} title={modelProfiles.title} lede={modelProfiles.lede} maxWidth={800}>
        <ModelProfiles />
      </Section>

      <Section tone="raised" eyebrow={economics.eyebrow} title={economics.title} lede={economics.lede} maxWidth={760}>
        <Economics />
      </Section>

      <Section eyebrow="Running your own" title={quickstart.localModels.title} maxWidth={720}>
        <Reveal>
          <Alert severity="info" variant="outlined" sx={{ borderRadius: 3 }}>
            <AlertTitle sx={{ fontWeight: 700 }}>Configurable, not yet validated</AlertTitle>
            {quickstart.localModels.body} {quickstart.localModels.ask}
          </Alert>
        </Reveal>
      </Section>

    </>
  );
}
