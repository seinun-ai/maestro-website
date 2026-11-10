import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LinkButton } from "@/components/NextMui";
import { stage, stageScope, underBar } from "@/lib/tokens";
import { headerCta, nav } from "@/content/site";

/** Quiet buttons on the stage: no marigold on a page with nothing to install. */
const quiet = { color: stage.fg, borderColor: stage.line, backgroundColor: "transparent", "&:hover": { borderColor: stage.muted, backgroundColor: stage.tileHover } } as const;

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    // On the stage like every other page, so the transparent top bar has its light behind it.
    <Box sx={{ background: stage.background, color: stage.fg, ...stageScope, ...underBar({ xs: 12, md: 18 }), pb: { xs: 12, md: 18 } }}>
      <Container>
        <Stack spacing={3} sx={{ maxWidth: 620 }}>
          <Typography
            sx={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: stage.muted, letterSpacing: ".1em" }}
          >
            404
          </Typography>
          <Typography variant="h1" component="h1" sx={{ color: stage.fg, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            That page is not here.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: stage.muted }}>
            It may have moved, or it may never have existed. Everything the site has is one of these:
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
            <LinkButton href="/" variant="outlined" sx={quiet}>
              Home
            </LinkButton>
            {[headerCta, ...nav].map((item) => (
              <LinkButton key={item.href} href={item.href} variant="outlined" sx={quiet}>
                {item.label}
              </LinkButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
