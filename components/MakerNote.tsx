"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import GitHubMark from "./GitHubMark";
import Reveal from "./Reveal";
import { makerNote, site } from "@/content/site";

/**
 * One person built this and says so in the first person. On a page that will be
 * reached from a LinkedIn post, the signature is the credibility — and the ask
 * for bug reports is the honest version of a launch CTA.
 */
export default function MakerNote() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 } }}>
      <Container>
        <Reveal>
          <Box
            sx={(t) => ({
              maxWidth: 780,
              mx: "auto",
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              border: 1,
              borderColor: alpha(t.palette.warning.main, 0.35),
              backgroundColor: alpha(t.palette.warning.main, t.palette.mode === "dark" ? 0.07 : 0.08),
            })}
          >
            <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
              {makerNote.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {makerNote.body}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 3.5, alignItems: { sm: "center" }, justifyContent: "space-between" }}
            >
              <Typography
                sx={{ fontSize: "1.35rem", fontWeight: 600, fontStyle: "italic", letterSpacing: "-0.02em" }}
              >
                — {makerNote.signature}
              </Typography>
              <Stack direction="row" spacing={1.5}>
                <Button href={site.issues} target="_blank" rel="noopener noreferrer" variant="contained" size="small">
                  Report an issue
                </Button>
                <Button
                  href={site.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="small"
                  startIcon={<GitHubMark />}
                >
                  Contribute
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
