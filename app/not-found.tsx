import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LinkButton } from "@/components/NextMui";
import { nav } from "@/content/site";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Box sx={{ py: { xs: 12, md: 18 } }}>
      <Container>
        <Stack spacing={3} sx={{ maxWidth: 620 }}>
          <Typography
            sx={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "primary.main", letterSpacing: ".1em" }}
          >
            404
          </Typography>
          <Typography variant="h1" component="h1" sx={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            That page is not here.
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            It may have moved, or it may never have existed. Everything the site has is one of these:
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
            <LinkButton href="/" variant="contained">
              Home
            </LinkButton>
            {nav.map((item) => (
              <LinkButton key={item.href} href={item.href} variant="outlined">
                {item.label}
              </LinkButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
