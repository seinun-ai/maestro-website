import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import Reveal from "./Reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="overline" component="p" sx={{ color: "primary.main", mb: 1.25 }}>
      {children}
    </Typography>
  );
}

/**
 * One vertical rhythm for the whole site. Pages never set their own paddings —
 * a per-page rhythm is how a marketing site drifts into six different ones.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "default",
  maxWidth = 760,
  children,
  sx,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
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
          py: { xs: 8, md: 13 },
          ...(tone === "raised"
            ? { backgroundColor: "background.paper", borderBlock: 1, borderColor: "divider" }
            : null),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container>
        {(eyebrow || title || lede) && (
          <Reveal>
            <Stack
              spacing={2}
              sx={{ maxWidth, mb: { xs: 5, md: 7 }, mx: centered ? "auto" : 0, textAlign: centered ? "center" : "left" }}
            >
              <Box>
                {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
                {title && (
                  <Typography variant="h2" component="h2">
                    {title}
                  </Typography>
                )}
              </Box>
              {lede && (
                <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
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
