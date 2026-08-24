"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { alpha, type SxProps, type Theme } from "@mui/material/styles";

type Tone = "primary" | "success" | "warning";

/**
 * Tinted surfaces live here, together, because tinting needs the theme at
 * render time — and a theme callback cannot cross a server/client boundary.
 * Pages stay server components and reach for these instead of hand-rolling
 * an alpha() in an sx callback.
 */
export function TintPaper({
  tone = "primary",
  children,
  sx,
}: {
  tone?: Tone;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Paper
      sx={[
        (t) => ({
          backgroundColor: alpha(t.palette[tone].main, 0.07),
          borderColor: alpha(t.palette[tone].main, 0.24),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Paper>
  );
}

/** A full-bleed tinted band, used for the privacy and consent sections. */
export function TintBand({
  tone = "primary",
  id,
  children,
}: {
  tone?: Tone;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      id={id}
      component="section"
      sx={(t) => ({
        py: { xs: 8, md: 12 },
        borderBlock: 1,
        borderColor: "divider",
        backgroundColor: alpha(t.palette[tone].main, 0.06),
      })}
    >
      <Container>{children}</Container>
    </Box>
  );
}

/** The one soft wash used behind heroes and the closing CTA. */
export function GlowBox({
  children,
  origin = "50% -30%",
  radius = "120% 140%",
  sx,
}: {
  children: React.ReactNode;
  origin?: string;
  radius?: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={[
        (t) => ({
          backgroundImage: `radial-gradient(${radius} at ${origin}, ${alpha(
            t.palette.primary.main,
            0.1,
          )} 0%, transparent 60%)`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}

/** Icon tile used by the pillar cards. */
export function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={(t) => ({
        width: 44,
        height: 44,
        borderRadius: 2.5,
        display: "grid",
        placeItems: "center",
        color: "primary.main",
        backgroundColor: alpha(t.palette.primary.main, 0.1),
      })}
    >
      {children}
    </Box>
  );
}
