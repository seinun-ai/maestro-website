"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Reveal from "./Reveal";
import { Eyebrow } from "./Section";

export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <Box
      component="section"
      sx={(t) => ({
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 9 },
        borderBottom: 1,
        borderColor: "divider",
        backgroundImage: `radial-gradient(80% 90% at 12% -30%, ${alpha(
          t.palette.primary.main,
          t.palette.mode === "dark" ? 0.2 : 0.09,
        )} 0%, transparent 58%)`,
      })}
    >
      <Container>
        <Reveal>
          <Stack spacing={2.5} sx={{ maxWidth: 820 }}>
            <Box>
              <Eyebrow>{eyebrow}</Eyebrow>
              <Typography variant="h1" component="h1" sx={{ fontSize: "clamp(2.2rem, 4.6vw, 3.4rem)" }}>
                {title}
              </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              {lede}
            </Typography>
            {children}
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}