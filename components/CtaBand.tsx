import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayIcon from "@mui/icons-material/PlayCircleOutlined";
import GitHubMark from "./GitHubMark";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import { LinkButton } from "./NextMui";
import { accent, c } from "@/lib/tokens";
import { cta } from "@/content/site";

/** The three specialists as one striped edge: the site's sign-off motif. */
const stripe = `linear-gradient(90deg, ${accent("violet").solid} 0 33.33%, ${accent("tangerine").solid} 33.33% 66.66%, ${accent("teal").solid} 66.66% 100%)`;

export default function CtaBand() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 } }}>
      <Container>
        <Reveal>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: { xs: "20px", md: "28px" },
              border: `1px solid ${c.border}`,
              px: { xs: 3, md: 8 },
              pt: { xs: 7, md: 10 },
              pb: { xs: 6, md: 9 },
              textAlign: "center",
              backgroundColor: c.card,
              backgroundImage: `radial-gradient(90% 120% at 50% -20%, ${c.blueTint} 0%, transparent 60%)`,
              "&::before": { content: '""', position: "absolute", insetInline: 0, top: 0, height: 8, backgroundImage: stripe },
            }}
          >
            <Typography variant="h2" sx={{ maxWidth: 860, mx: "auto" }}>
              <Highlight text={cta.title} />
            </Typography>
            <Typography variant="subtitle1" sx={{ color: c.muted, maxWidth: 620, mx: "auto", mt: 2.5 }}>
              {cta.body}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ justifyContent: "center", alignItems: { xs: "stretch", sm: "center" }, mt: 4.5 }}
            >
              <LinkButton href={cta.primary.href} variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                {cta.primary.label}
              </LinkButton>
              <Button
                href={cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<GitHubMark />}
              >
                {cta.secondary.label}
              </Button>
            </Stack>
            <Button
              href={cta.video.href}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<PlayIcon />}
              sx={{ mt: 2.5, color: c.blue }}
            >
              {cta.video.label}
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
