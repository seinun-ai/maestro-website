import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ShotFrame from "./ShotFrame";
import Reveal from "./Reveal";
import { Eyebrow } from "./Section";

export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  image: string;
  imageAlt: string;
};

/** Alternating text/capture row. Image always renders after the copy on
 *  narrow screens, whatever side it takes on desktop. */
export default function FeatureRow({
  feature,
  flip = false,
  headingLevel = "h3",
}: {
  feature: Feature;
  flip?: boolean;
  /** h2 when this list sits directly under the page h1; h3 under a Section h2. */
  headingLevel?: "h2" | "h3";
}) {
  return (
    <Grid container spacing={{ xs: 4, md: 7 }}  id={feature.id} sx={{ alignItems: "center", scrollMarginTop: 96 }}>
      <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: flip ? 2 : 1 } }}>
        <Reveal>
          <Box>
            <Eyebrow>{feature.eyebrow}</Eyebrow>
            <Typography variant="h3" component={headingLevel} sx={{ mb: 2 }}>
              {feature.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {feature.body}
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {feature.bullets.map((b) => (
                <Stack key={b} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                  <CheckCircleOutlineIcon sx={{ fontSize: 19, color: "primary.main", mt: "2px", flexShrink: 0 }} />
                  <Typography variant="body2">{b}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Reveal>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: flip ? 1 : 2 } }}>
        <Reveal delay={80}>
          <ShotFrame src={feature.image} alt={feature.imageAlt} sizes="(max-width: 900px) 100vw, 640px" />
        </Reveal>
      </Grid>
    </Grid>
  );
}
