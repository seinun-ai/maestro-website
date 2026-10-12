import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import { Eyebrow } from "./Section";
import { c } from "@/lib/tokens";

/** The opening band of an inner page: same type and wash as the home hero, smaller. */
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
      sx={{
        pt: { xs: 7, md: 12 },
        pb: { xs: 7, md: 10 },
        borderBottom: `1px solid ${c.border}`,
        backgroundImage: `radial-gradient(80% 90% at 12% -30%, ${c.blueTint} 0%, transparent 60%)`,
      }}
    >
      <Container>
        <Reveal>
          <Stack spacing={3} sx={{ maxWidth: 880 }}>
            <Box>
              <Eyebrow>{eyebrow}</Eyebrow>
              <Typography variant="h1" component="h1" sx={{ fontSize: "clamp(2.5rem, 5.4vw, 4.25rem)" }}>
                <Highlight text={title} />
              </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ color: c.muted, maxWidth: 720 }}>
              {lede}
            </Typography>
            {children}
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
