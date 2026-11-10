import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import { c, stage, stageScope } from "@/lib/tokens";

export function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <Typography variant="overline" component="p" sx={{ color: onDark ? stage.fg : c.fg, mb: 1.5, display: "block" }}>
      {children}
    </Typography>
  );
}

/**
 * One vertical rhythm for the whole site. Pages never set their own paddings,
 * because a per-page rhythm is how a marketing site drifts into six different
 * ones. Titles take the `[key phrase]` markup from content/site.ts.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "default",
  maxWidth = 820,
  children,
  sx,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lede?: React.ReactNode;
  align?: "left" | "center";
  /** "stage" puts the section on the dark desk, for an ending. */
  tone?: "default" | "raised" | "stage";
  maxWidth?: number;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  const centered = align === "center";
  const onDark = tone === "stage";
  return (
    <Box
      id={id}
      component="section"
      sx={[
        {
          py: { xs: 7, md: 9 },
          ...(tone === "raised" ? { backgroundColor: c.card, borderBlock: `1px solid ${c.border}` } : null),
          ...(onDark ? { background: stage.background, color: stage.fg, ...stageScope } : null),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container>
        {(eyebrow || title || lede) && (
          <Reveal>
            <Stack
              spacing={2.5}
              sx={{
                maxWidth,
                mb: { xs: 4, md: 5 },
                mx: centered ? "auto" : 0,
                textAlign: centered ? "center" : "left",
              }}
            >
              <Box>
                {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
                {title && (
                  <Typography variant="h2" component="h2" sx={onDark ? { color: stage.fg } : undefined}>
                    <Highlight text={title} onDark={onDark} />
                  </Typography>
                )}
              </Box>
              {lede && (
                <Typography variant="subtitle1" sx={{ color: onDark ? stage.muted : c.muted }}>
                  {lede}
                </Typography>
              )}
            </Stack>
          </Reveal>
        )}
        {children}
      </Container>
    </Box>
  );
}
