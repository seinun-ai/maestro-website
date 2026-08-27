"use client";

import * as React from "react";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";
import GitHubMark from "./GitHubMark";
import Reveal from "./Reveal";
import { closing, site } from "@/content/site";

export default function CtaBand() {
  return (
    <Box component="section" data-toc="skip" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Reveal>
          <Box
            sx={(t) => ({
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              border: 1,
              borderColor: "divider",
              px: { xs: 3, md: 8 },
              py: { xs: 6, md: 9 },
              textAlign: "center",
              backgroundColor: "background.paper",
              backgroundImage: `radial-gradient(120% 140% at 50% -30%, ${alpha(
                t.palette.primary.main,
                0.12,
              )} 0%, transparent 62%)`,
            })}
          >
            <Typography variant="h2" sx={{ maxWidth: 780, mx: "auto" }}>
              {closing.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 620, mx: "auto", mt: 2.5 }}>
              {closing.body}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}  sx={{ justifyContent: "center", mt: 4.5 }}>
              <Button component={NextLink} href="/start" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                Run it locally
              </Button>
              <Button
                href={site.repo}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<GitHubMark />}
              >
                Read the source
              </Button>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 3 }}>
              Apache-2.0 · no account · no subscription · your data stays on your disk
            </Typography>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}