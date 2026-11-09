import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayIcon from "@mui/icons-material/PlayCircleOutlined";
import GitHubMark from "./GitHubMark";
import Highlight from "./Highlight";
import CopyInstall from "./CopyInstall";
import WorksWith from "./WorksWith";
import { LinkButton } from "./NextMui";
import { stage } from "@/lib/tokens";
import { cta } from "@/content/site";

const quietSx = { color: stage.muted, "&:hover": { color: stage.fg, backgroundColor: stage.tileHover } } as const;

/**
 * The ending, back on the stage and built like the opening: the line to
 * remember, the same one button, and the same real marks.
 */
export default function CtaBand() {
  return (
    <Box component="section" sx={{ background: stage.background, color: stage.fg, py: { xs: 7, md: 9 } }}>
      <Container>
        <Stack sx={{ alignItems: "center", textAlign: "center" }}>
          <Typography component="p" variant="body1" sx={{ color: stage.muted, mb: 1.5 }}>
            {cta.kicker}
          </Typography>
          <Typography variant="h2" sx={{ color: stage.fg }}>
            <Highlight text={cta.title} onDark />
          </Typography>
          <Typography variant="subtitle1" sx={{ color: stage.muted, mt: 2, textWrap: "balance" }}>
            {cta.body}
          </Typography>
          <Box sx={{ mt: 3, width: "100%" }}>
            <CopyInstall />
          </Box>
          <Box sx={{ mt: 1.5 }}>
            <WorksWith onDark center chrome />
          </Box>
          <Stack direction="row" spacing={0.5} useFlexGap sx={{ mt: 3, flexWrap: "wrap", justifyContent: "center" }}>
            <Button href={cta.video.href} target="_blank" rel="noopener noreferrer" size="small" startIcon={<PlayIcon />} sx={quietSx}>
              {cta.video.label}
            </Button>
            <Button href={cta.secondary.href} target="_blank" rel="noopener noreferrer" size="small" startIcon={<GitHubMark />} sx={quietSx}>
              {cta.secondary.label}
            </Button>
            <LinkButton href={cta.privacy.href} size="small" endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />} sx={quietSx}>
              {cta.privacy.label}
            </LinkButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
