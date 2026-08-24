"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { alpha } from "@mui/material/styles";
import Reveal from "./Reveal";
import { modelProfiles } from "@/content/site";

const rows = [
  { key: "model", label: "Every tier set to", mono: true },
  { key: "key", label: "The one key you need", mono: false },
  { key: "extraction", label: "JD requirements captured", mono: false },
  { key: "speed", label: "Capture + tailor feels like", mono: false },
  { key: "hallucinations", label: "Hallucinated skills", mono: false },
] as const;

export default function ModelProfiles() {
  return (
    <>
      <Grid container spacing={3}>
        {modelProfiles.columns.map((c, i) => (
          <Grid size={{ xs: 12, md: 6 }} key={c.name}>
            <Reveal delay={i * 90} sx={{ height: "100%" }}>
              <Paper
                sx={(t) => ({
                  p: { xs: 3, md: 4 },
                  height: "100%",
                  borderRadius: 4,
                  ...(c.recommended
                    ? {
                        borderColor: alpha(t.palette.primary.main, 0.4),
                        backgroundColor: alpha(t.palette.primary.main, t.palette.mode === "dark" ? 0.09 : 0.05),
                      }
                    : null),
                })}
              >
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2.5 }}>
                  <Typography variant="h3" component="h3">
                    {c.name}
                  </Typography>
                  <Chip
                    label={c.badge}
                    size="small"
                    color={c.recommended ? "primary" : "default"}
                    variant={c.recommended ? "filled" : "outlined"}
                  />
                </Stack>

                <Box
                  sx={(t) => ({
                    mb: 3,
                    p: 2,
                    borderRadius: 2.5,
                    backgroundColor: alpha(t.palette.warning.main, t.palette.mode === "dark" ? 0.1 : 0.14),
                  })}
                >
                  <Typography
                    component="p"
                    sx={(t) => ({
                      fontSize: "1.9rem",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      lineHeight: 1.1,
                      color: t.palette.mode === "dark" ? "#FBBF24" : "#8A5A00",
                    })}
                  >
                    {c.cost}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.25 }}>
                    {c.costNote}
                  </Typography>
                </Box>

                <Stack spacing={1.75}>
                  {rows.map((r) => (
                    <Box key={r.key}>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {r.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, fontFamily: r.mono ? "var(--font-mono)" : undefined }}
                      >
                        {c[r.key]}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Reveal>
          </Grid>
        ))}
      </Grid>

      <Reveal>
        <Box sx={{ mt: 4, maxWidth: 820 }}>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {modelProfiles.why}
          </Typography>
        </Box>
      </Reveal>
    </>
  );
}
