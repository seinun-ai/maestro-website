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
import { LinkButton, TextLink } from "./NextMui";
import { accent, c, display } from "@/lib/tokens";
import { cta } from "@/content/site";

/** The three specialists as one striped edge: the site's sign-off motif. */
const stripe = `linear-gradient(90deg, ${accent("violet").solid} 0 33.33%, ${accent("tangerine").solid} 33.33% 66.66%, ${accent("teal").solid} 66.66% 100%)`;

export default function CtaBand() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 15 } }}>
      <Container>
        <Reveal>
          <Typography
            component="p"
            sx={{
              ...display,
              letterSpacing: "-0.025em",
              fontSize: "clamp(1.625rem, 3vw, 2.375rem)",
              lineHeight: 1.15,
              textAlign: "center",
              maxWidth: 820,
              mx: "auto",
              mb: { xs: 6, md: 8 },
            }}
          >
            {cta.kicker}
          </Typography>
        </Reveal>
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
            <Typography variant="subtitle1" sx={{ color: c.muted, maxWidth: 660, mx: "auto", mt: 2.5, textWrap: "pretty" }}>
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
            <Stack
              spacing={1}
              sx={{ alignItems: "center", mt: { xs: 4, md: 5 }, pt: { xs: 3, md: 3.5 }, borderTop: `1px solid ${c.border}` }}
            >
              <Typography variant="body2" sx={{ color: c.muted }}>
                {cta.export}
              </Typography>
              <TextLink
                href={cta.privacy.href}
                sx={{ color: c.blue, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 500, fontSize: "0.9375rem" }}
              >
                {cta.privacy.label}
                <ArrowForwardIcon sx={{ fontSize: 17 }} />
              </TextLink>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
