import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import BlockIcon from "@mui/icons-material/BlockOutlined";
import LaptopIcon from "@mui/icons-material/LaptopMacOutlined";
import KeyIcon from "@mui/icons-material/KeyOutlined";
import WifiOffIcon from "@mui/icons-material/WifiOffOutlined";
import FolderIcon from "@mui/icons-material/FolderOutlined";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import GitHubMark from "@/components/GitHubMark";
import { accent, c } from "@/lib/tokens";
import { privacy, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy & security",
  description:
    "Maestro runs on your machine and listens only on 127.0.0.1 out of the box, with no account and no server holding your career history, plus the honest version of what that trade costs and what the Companion keeps.",
};

const factIcons = [<LaptopIcon key="l" />, <KeyIcon key="k" />, <WifiOffIcon key="w" />, <FolderIcon key="f" />];

const warn = accent("warning");
const ok = accent("success");

const card = {
  p: { xs: 3, md: 3.5 },
  height: "100%",
  borderRadius: "20px",
  backgroundColor: c.card,
  border: `1px solid ${c.border}`,
} as const;

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow={privacy.hero.eyebrow} title={privacy.hero.title} lede={privacy.hero.lede} />

      <Section>
        <Grid container spacing={3}>
          {privacy.facts.map((f, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={f.title}>
              <Reveal delay={i * 70} sx={{ height: "100%" }}>
                <Box sx={card}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      mb: 2,
                      borderRadius: "12px",
                      display: "grid",
                      placeItems: "center",
                      color: c.blue,
                      backgroundColor: c.blueTint,
                    }}
                  >
                    {factIcons[i]}
                  </Box>
                  <Typography variant="h3" component="h2" sx={{ mb: 1.5 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: c.muted }}>
                    {f.body}
                  </Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* The trade: the most important block on the page, so it gets the loudest treatment. */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, backgroundColor: warn.tint, color: warn.ink }}>
        <Container>
          <Reveal>
            <Stack spacing={3} sx={{ maxWidth: 860 }}>
              <Typography variant="h2">{privacy.trade.title}</Typography>
              {privacy.trade.body.map((p) => (
                <Typography key={p.slice(0, 20)} variant="subtitle1">
                  {p}
                </Typography>
              ))}
              <Typography variant="h3" component="p" sx={{ pl: 2.5, borderLeft: `4px solid ${warn.solid}` }}>
                {privacy.trade.kicker}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
                <Button href={site.security} target="_blank" rel="noopener noreferrer" variant="outlined" startIcon={<GitHubMark />}>
                  {privacy.readSecurity}
                </Button>
                <Button href={site.privacyPolicy} target="_blank" rel="noopener noreferrer" variant="outlined" startIcon={<GitHubMark />}>
                  {privacy.readPolicy}
                </Button>
              </Stack>
            </Stack>
          </Reveal>
        </Container>
      </Box>

      <Section eyebrow={privacy.extension.eyebrow} title={privacy.extension.title} maxWidth={720}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal sx={{ height: "100%" }}>
              <Box sx={card}>
                <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                  What it keeps
                </Typography>
                <Stack spacing={1.5}>
                  {privacy.extension.keeps.map((k) => (
                    <Stack key={k} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <CheckIcon sx={{ fontSize: 19, color: c.muted, mt: "3px", flexShrink: 0 }} />
                      <Typography variant="body2">{k}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80} sx={{ height: "100%" }}>
              <Box sx={{ ...card, backgroundColor: ok.tint, color: ok.ink, borderColor: "transparent" }}>
                <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                  What it leaves out
                </Typography>
                <Stack spacing={1.5}>
                  {privacy.extension.never.map((k) => (
                    <Stack key={k} direction="row" spacing={1.25} sx={{ alignItems: "flex-start" }}>
                      <BlockIcon sx={{ fontSize: 19, color: ok.solid, mt: "3px", flexShrink: 0 }} />
                      <Typography variant="body2">{k}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Typography variant="body1" sx={{ color: c.muted, mt: 4, maxWidth: 860, pt: 3, borderTop: `1px solid ${c.border}` }}>
            {privacy.extension.honest}
          </Typography>
        </Reveal>
      </Section>

      <Section tone="raised" eyebrow={privacy.tracing.eyebrow} title={privacy.tracing.title} maxWidth={760}>
        <Reveal>
          <Typography variant="subtitle1" sx={{ color: c.muted, maxWidth: 860 }}>
            {privacy.tracing.body}
          </Typography>
        </Reveal>
      </Section>

      <Section
        eyebrow={privacy.leavingIntro.eyebrow}
        title={privacy.leavingIntro.title}
        lede={privacy.leavingIntro.lede}
        maxWidth={760}
      >
        <Grid container spacing={2.5}>
          {privacy.leaving.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={item.t}>
              <Reveal delay={i * 60} sx={{ height: "100%" }}>
                <Box sx={card}>
                  <Typography sx={{ fontFamily: "var(--font-mono)", fontWeight: 700, mb: 1 }}>{item.t}</Typography>
                  <Typography variant="body2" sx={{ color: c.muted }}>
                    {item.b}
                  </Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}
