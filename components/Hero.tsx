import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Highlight from "./Highlight";
import CopyInstall from "./CopyInstall";
import ProductStrip from "./ProductStrip";
import WorksWith from "./WorksWith";
import { stage, stageScope, underBar } from "@/lib/tokens";
import { hero } from "@/content/site";

/**
 * The home hero, on the stage.
 * One focal point, read top to bottom: the headline, one button that copies the install
 * command, the marks of the apps it works with, then the whole product in five pictures.
 */
export default function Hero() {
  return (
    // It starts under the transparent top bar, so its light runs up behind the bar.
    <Box component="section" sx={{ background: stage.background, color: stage.fg, ...stageScope, ...underBar({ xs: 5, md: 6 }), pb: { xs: 5, md: 6 } }}>
      <Container>
        <Stack sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography variant="overline" component="p" sx={{ color: stage.fg }}>
            {hero.eyebrow}
          </Typography>
          <Typography variant="h1" component="h1" sx={{ mt: 1.5, color: stage.fg, fontSize: "clamp(2.625rem, 5.2vw, 4.25rem)", lineHeight: 1.04 }}>
            <Highlight text={hero.title} onDark />
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, maxWidth: 820, color: stage.muted, fontSize: "1.125rem", textWrap: "balance", whiteSpace: "pre-line" }}>
            {hero.lede}
          </Typography>
          <Box sx={{ mt: 3, width: "100%" }}>
            <CopyInstall />
          </Box>
          <Box sx={{ mt: 1.5 }}>
            <WorksWith onDark center chrome />
          </Box>
        </Stack>
        <Box sx={{ mt: { xs: 4, md: 4.5 } }}>
          <ProductStrip />
        </Box>
      </Container>
    </Box>
  );
}
