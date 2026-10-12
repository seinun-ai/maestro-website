import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import { c } from "@/lib/tokens";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="overline" component="p" sx={{ color: c.blue, mb: 1.5, display: "block" }}>
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
  tone?: "default" | "raised";
  maxWidth?: number;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  const centered = align === "center";
  return (
    <Box
      id={id}
      component="section"
      sx={[
        {
          py: { xs: 10, md: 15 },
          ...(tone === "raised" ? { backgroundColor: c.card, borderBlock: `1px solid ${c.border}` } : null),
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
                mb: { xs: 6, md: 8 },
                mx: centered ? "auto" : 0,
                textAlign: centered ? "center" : "left",
              }}
            >
              <Box>
                {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
                {title && (
                  <Typography variant="h2" component="h2">
                    <Highlight text={title} />
                  </Typography>
                )}
              </Box>
              {lede && (
                <Typography variant="subtitle1" sx={{ color: c.muted }}>
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
