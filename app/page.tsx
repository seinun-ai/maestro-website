import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Hero from "@/components/Hero";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ShotFrame from "@/components/ShotFrame";
import Highlight from "@/components/Highlight";
import SpecPill from "@/components/SpecPill";
import CodeBlock from "@/components/CodeBlock";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import StructuredData from "@/components/StructuredData";
import { TextLink } from "@/components/NextMui";
import { icons } from "@/components/icons";
import { accent, c, display } from "@/lib/tokens";
import {
  agentsTeaser,
  capabilities,
  faqIntro,
  howItWorks,
  numbers,
  ownership,
  premise,
} from "@/content/site";

/** An external "read more" link, in the action colour. */
function OutLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: c.blue, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 600 }}
    >
      {children}
      <ArrowOutwardIcon sx={{ fontSize: 17 }} />
    </Link>
  );
}

/** Filename chips from the hero GIF's opening frame, tilted, as decoration. */
const chipTilt = [-5, 3, -2, 4, -3, 2];

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />

      {/* The premise: the pain, then the answer, then the line to remember. */}
      <Section id="premise" tone="raised">
        <Reveal>
          <Box
            aria-hidden
            sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, md: 1.5 }, mb: { xs: 4, md: 5 }, maxWidth: 760 }}
          >
            {premise.chips.map((chip, i) => {
              const dot = chip.lastIndexOf(".");
              return (
                <Box
                  key={chip}
                  component="span"
                  sx={{
                    display: { xs: i > 3 ? "none" : "inline-block", sm: "inline-block" },
                    transform: `rotate(${chipTilt[i]}deg)`,
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                    fontWeight: 500,
                    color: c.fg,
                    backgroundColor: c.card,
                    border: `1.5px solid ${c.border}`,
                    borderRadius: 999,
                    px: 1.5,
                    py: 0.5,
                    boxShadow: `3px 3px 0 ${c.border}`,
                  }}
                >
                  {chip.slice(0, dot)}
                  <Box component="span" sx={{ color: c.muted }}>
                    {chip.slice(dot)}
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ maxWidth: 900, mb: { xs: 5, md: 7 } }}>
            <Eyebrow>{premise.eyebrow}</Eyebrow>
            <Typography variant="h2">
              <Highlight text={premise.title} />
            </Typography>
          </Box>
        </Reveal>

        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "stretch" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Stack spacing={2.5}>
                {premise.body.slice(0, 2).map((p) => (
                  <Typography key={p.slice(0, 24)} variant="body1" sx={{ color: c.muted, fontSize: "1.125rem" }}>
                    {p}
                  </Typography>
                ))}
              </Stack>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80} sx={{ height: "100%" }}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 3, md: 4 },
                  borderRadius: "20px",
                  backgroundColor: c.blueTint,
                  borderLeft: `6px solid ${c.blue}`,
                }}
              >
                <Typography variant="body1" sx={{ color: c.blueInk, fontSize: "1.125rem", fontWeight: 500 }}>
                  {premise.body[2]}
                </Typography>
              </Box>
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Typography
            component="p"
            sx={{
              ...display,
              fontVariationSettings: '"opsz" 60, "wdth" 98',
              letterSpacing: "-0.025em",
              fontSize: "clamp(1.625rem, 3vw, 2.375rem)",
              lineHeight: 1.15,
              textAlign: "center",
              maxWidth: 940,
              mx: "auto",
              mt: { xs: 7, md: 10 },
            }}
          >
            {premise.pull}
          </Typography>
        </Reveal>
      </Section>

      {/* How it works: the GIF's three beats, in the GIF's three colours. */}
      <Section id="how-it-works" eyebrow={howItWorks.eyebrow} title={howItWorks.title}>
        <Grid container spacing={3}>
          {howItWorks.steps.map((s, i) => {
            const a = accent(s.accent);
            return (
              <Grid size={{ xs: 12, md: 4 }} key={s.title}>
                <Reveal delay={i * 90} sx={{ height: "100%" }}>
                  <Stack
                    spacing={2.5}
                    sx={{
                      height: "100%",
                      p: { xs: 3, md: 4 },
                      borderRadius: "20px",
                      backgroundColor: c.card,
                      border: `1px solid ${c.border}`,
                      borderTop: `8px solid ${a.solid}`,
                    }}
                  >
                    <Box>
                      <SpecPill tone={s.accent} icon={icons[s.icon]}>
                        {s.label}
                      </SpecPill>
                    </Box>
                    <Typography variant="h3">{s.title}</Typography>
                    <Typography variant="body1" sx={{ color: c.muted }}>
                      {s.body}
                    </Typography>
                  </Stack>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Section>

      {/* What you get: six teasers, each with a real capture and a way out to GitHub. */}
      <Section id="features" eyebrow={capabilities.eyebrow} title={capabilities.title} lede={capabilities.lede} sx={{ pt: { md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {capabilities.cards.map((card, i) => {
            const a = accent(card.accent);
            return (
              <Grid size={{ xs: 12, md: 6 }} key={card.title}>
                <Reveal delay={(i % 2) * 90} sx={{ height: "100%" }}>
                  <Box
                    component="article"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "24px",
                      overflow: "hidden",
                      backgroundColor: c.card,
                      border: `1px solid ${c.border}`,
                    }}
                  >
                    <Box sx={{ backgroundColor: a.tint, px: { xs: 2, md: 3.5 }, pt: { xs: 2.5, md: 3.5 }, pb: { xs: 2.5, md: 3.5 } }}>
                      <ShotFrame
                        src={card.image}
                        alt={card.imageAlt}
                        accent={card.accent}
                        aspect="7 / 4"
                        sizes="(max-width: 900px) 100vw, 560px"
                      />
                    </Box>
                    <Stack spacing={2} sx={{ p: { xs: 3, md: 4 }, flex: 1 }}>
                      <Box>
                        <SpecPill tone={card.accent} icon={icons[card.icon]}>
                          {card.pill}
                        </SpecPill>
                      </Box>
                      <Typography variant="h3">{card.title}</Typography>
                      <Typography variant="body1" sx={{ color: c.muted }}>
                        {card.body}
                      </Typography>
                      {"quote" in card && (
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, pl: 2, borderLeft: `3px solid ${a.solid}` }}
                        >
                          {card.quote}
                        </Typography>
                      )}
                      <Box sx={{ flex: 1 }} />
                      <Box>
                        <OutLink href={card.href}>{capabilities.more}</OutLink>
                      </Box>
                    </Stack>
                  </Box>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Section>

      {/* Works with your AI */}
      <Section id="agents" tone="raised">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <Stack spacing={3}>
                <Box>
                  <Eyebrow>{agentsTeaser.eyebrow}</Eyebrow>
                  <Typography variant="h2">
                    <Highlight text={agentsTeaser.title} />
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: c.muted }}>
                  {agentsTeaser.body}
                </Typography>
                <Box>
                  <CodeBlock code={agentsTeaser.connect.code} />
                  <Typography variant="body2" sx={{ color: c.muted, mt: 1.25 }}>
                    {agentsTeaser.connect.body}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: c.muted }}>
                  {agentsTeaser.attended} {agentsTeaser.automation}
                </Typography>
                <Box>
                  <OutLink href={agentsTeaser.link.href}>{agentsTeaser.link.label}</OutLink>
                </Box>
              </Stack>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Reveal delay={80}>
              <ShotFrame src={agentsTeaser.image} alt={agentsTeaser.imageAlt} sizes="(max-width: 900px) 100vw, 680px" />
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* The three headline numbers, each with its receipt on GitHub. */}
      <Section id="numbers" eyebrow={numbers.eyebrow} title={numbers.title}>
        <Grid container spacing={3}>
          {numbers.items.map((n, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={n.figure}>
              <Reveal delay={i * 90} sx={{ height: "100%" }}>
                <Stack
                  spacing={1.75}
                  sx={{
                    height: "100%",
                    p: { xs: 3, md: 4 },
                    borderRadius: "20px",
                    backgroundColor: c.card,
                    border: `1px solid ${c.border}`,
                  }}
                >
                  <Typography
                    component="p"
                    sx={{ ...display, fontSize: "clamp(2.25rem, 3.6vw, 3rem)", lineHeight: 1.05, mb: 0.5 }}
                  >
                    <Highlight text={`[${n.figure}]`} />
                  </Typography>
                  <Typography variant="h4" component="p">
                    {n.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: c.muted }}>
                    {n.detail}
                  </Typography>
                  <Box sx={{ flex: 1 }} />
                  <Box>
                    <OutLink href={n.link.href}>{n.link.label}</OutLink>
                  </Box>
                </Stack>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* It's yours */}
      <Section id="yours" tone="raised" eyebrow={ownership.eyebrow} title={ownership.title}>
        <Grid container spacing={{ xs: 3.5, md: 4 }}>
          {ownership.items.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.t}>
              <Reveal delay={i * 70}>
                <Stack spacing={1.5}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      display: "grid",
                      placeItems: "center",
                      color: c.blue,
                      backgroundColor: c.blueTint,
                    }}
                  >
                    {icons[item.icon]}
                  </Box>
                  <Typography variant="h4" component="h3">
                    {item.t}
                  </Typography>
                  <Typography variant="body2" sx={{ color: c.muted }}>
                    {item.b}
                  </Typography>
                </Stack>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        <Reveal>
          <Stack spacing={2.5} sx={{ mt: { xs: 7, md: 10 }, alignItems: "center", textAlign: "center" }}>
            <Typography
              component="p"
              sx={{
                ...display,
                fontVariationSettings: '"opsz" 60, "wdth" 98',
                letterSpacing: "-0.025em",
                fontSize: "clamp(1.625rem, 3vw, 2.375rem)",
                lineHeight: 1.15,
                maxWidth: 820,
              }}
            >
              {ownership.kicker}
            </Typography>
            <TextLink
              href={ownership.link.href}
              sx={{ color: c.blue, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 600 }}
            >
              {ownership.link.label}
              <ArrowForwardIcon sx={{ fontSize: 17 }} />
            </TextLink>
          </Stack>
        </Reveal>
      </Section>

      {/* A short FAQ: the answers a Show HN reader asks first. */}
      <Section id="faq" eyebrow={faqIntro.eyebrow} title={faqIntro.title} maxWidth={860}>
        <Reveal>
          <Faq />
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
