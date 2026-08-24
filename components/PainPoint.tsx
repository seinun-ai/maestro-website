"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { alpha } from "@mui/material/styles";
import { LinkButton } from "./NextMui";
import Reveal from "./Reveal";

export type Pain = {
  pain: string;
  answer: string;
  body: string;
  feature: string;
  href: string;
};

/**
 * Pain on the left in the reader's own words, the answer on the right. The
 * left column is deliberately the loud one — a landing page earns the right to
 * explain a feature only after the reader recognises the problem it solves.
 */
export default function PainPoint({ item, index }: { item: Pain; index: number }) {
  return (
    <Reveal>
      <Grid
        container
        spacing={{ xs: 2, md: 6 }}
        sx={{
          py: { xs: 4, md: 5 },
          borderTop: 1,
          borderColor: "divider",
          alignItems: "flex-start",
        }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "text.secondary",
                pt: 0.75,
                minWidth: 22,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "text.primary" }}
            >
              {item.pain}
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ pl: { xs: 5, md: 0 } }}>
            <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", mb: 1.25 }}>
              <Box
                sx={(t) => ({
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  flexShrink: 0,
                  backgroundColor: alpha(t.palette.primary.main, 0.12),
                  color: "primary.main",
                })}
              >
                <ArrowForwardIcon sx={{ fontSize: 15 }} />
              </Box>
              <Typography variant="h4" component="p" sx={{ color: "primary.main" }}>
                {item.answer}
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {item.body}
            </Typography>
            <LinkButton
              href={item.href}
              size="small"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
              sx={{ px: 0, mt: 1.5, color: "text.secondary" }}
            >
              {item.feature}
            </LinkButton>
          </Box>
        </Grid>
      </Grid>
    </Reveal>
  );
}
