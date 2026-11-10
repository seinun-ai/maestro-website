import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import Hero from "@/components/Hero";
import ChatPicture from "@/components/ChatPicture";
import FeatureArt from "@/components/FeatureArt";
import NumbersBand from "@/components/NumbersBand";
import { ChromeMark } from "@/components/BrandMarks";
import ChipCollapse from "@/components/ChipCollapse";
import Section, { Eyebrow } from "@/components/Section";
import Reveal from "@/components/Reveal";
import ShotFrame from "@/components/ShotFrame";
import Highlight from "@/components/Highlight";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import StructuredData from "@/components/StructuredData";
import { icons } from "@/components/icons";
import { accent, area, c, display, weight } from "@/lib/tokens";
import {
  beliefs,
  capabilities,
  hero,
  faqIntro,
  howItWorks,
  premise,
  useCases,
} from "@/content/site";

/** An external "read more" link: ink, underlined. */
function OutLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="always"
      sx={{ color: c.fg, display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: weight.label, textUnderlineOffset: "0.2em" }}
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
      <NumbersBand />

      {/* The premise: the loss in one line, the copies as the picture, then the line to remember. */}
      <Section id="premise" tone="raised">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal>
              <Eyebrow>{premise.eyebrow}</Eyebrow>
              <Typography variant="h2">
                <Highlight text={premise.title} />
              </Typography>
              <Typography variant="subtitle1" sx={{ color: c.muted, mt: 2, maxWidth: 520 }}>
                {premise.sub}
              </Typography>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Reveal delay={80}>
              <ChipCollapse
                chips={premise.chips}
                tilt={chipTilt}
                hint={premise.chipsHint}
                hintAgain={premise.chipsHintAgain}
                label={premise.chipsLabel}
                merged={premise.chipsMerged}
                mergedNote={premise.chipsMergedNote}
              />
            </Reveal>
          </Grid>
        </Grid>

        <Reveal>
          <Typography
            component="p"
            sx={{
              ...display,
              letterSpacing: "-0.025em",
              fontSize: "clamp(1.625rem, 3vw, 2.375rem)",
              lineHeight: 1.15,
              textAlign: "center",
              maxWidth: 940,
              mx: "auto",
              mt: { xs: 5, md: 6 },
            }}
          >
            {premise.pull}
          </Typography>
        </Reveal>

        {/* What Maestro believes: four behaviours, each with its glyph. */}
        <Reveal>
          <Box sx={{ mt: { xs: 5, md: 6 } }}>
            <Eyebrow>{beliefs.eyebrow}</Eyebrow>
            <Grid component="ul" container spacing={{ xs: 2.5, md: 3 }} sx={{ listStyle: "none", m: 0, p: 0, mt: 1 }}>
              {beliefs.items.map((b) => (
                <Grid component="li" size={{ xs: 12, sm: 6, md: 3 }} key={b.t}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                    <Box
                      aria-hidden
                      sx={{ flexShrink: 0, width: 40, height: 40, borderRadius: "12px", display: "grid", placeItems: "center", color: c.fg, backgroundColor: c.tint, "& svg": { fontSize: 21 } }}
                    >
                      {icons[b.icon]}
                    </Box>
                    <Box>
                      <Typography variant="h4" component="h3" sx={{ fontSize: "1.0625rem", mb: 0.25 }}>
                        {b.t}
                      </Typography>
                      <Typography variant="body2" sx={{ color: c.muted }}>
                        {b.b}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Reveal>
      </Section>

      {/* How it works: four stations in the colour code, beside the career-history film. */}
      <Section id="how-it-works" eyebrow={howItWorks.eyebrow} title={howItWorks.title} maxWidth={960}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box component="ol" sx={{ listStyle: "none", m: 0, p: 0, position: "relative" }}>
              {/* The line that joins the stations. */}
              <Box aria-hidden sx={{ position: "absolute", left: 23, top: 24, bottom: 24, width: 2, background: `linear-gradient(${howItWorks.steps.map((s) => accent(s.accent).solid).join(", ")})`, opacity: 0.5 }} />
              {howItWorks.steps.map((s, i) => {
                const a = accent(s.accent);
                return (
                  <Reveal key={s.title} delay={i * 90}>
                    <Stack component="li" direction="row" spacing={2} sx={{ position: "relative", alignItems: "flex-start", py: 1.5 }}>
                      <Box
                        aria-hidden
                        sx={{ flexShrink: 0, width: 48, height: 48, borderRadius: 999, display: "grid", placeItems: "center", color: a.ink, backgroundColor: a.tint, border: `2px solid ${a.solid}`, "& svg": { fontSize: 23 } }}
                      >
                        {icons[s.icon]}
                      </Box>
                      <Box sx={{ pt: 0.25 }}>
                        <Typography component="p" sx={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.6875rem", letterSpacing: ".06em", textTransform: "uppercase", color: a.ink, fontWeight: 600 }}>
                          {i + 1} · {s.label}
                        </Typography>
                        <Typography variant="h4" component="h3" sx={{ fontSize: "1.1875rem" }}>
                          {s.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: c.muted }}>
                          {s.body}
                        </Typography>
                      </Box>
                    </Stack>
                  </Reveal>
                );
              })}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} sx={{ minWidth: 0 }}>
            <Reveal delay={120}>
              <ShotFrame src="/media/hero.mp4" alt={hero.mediaAlt} caption={hero.mediaCaption} accent={area.history} />
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* What you get: a drawn picture, a title and one line, coloured by area. */}
      <Section id="features" eyebrow={capabilities.eyebrow} title={capabilities.title} lede={capabilities.lede} sx={{ pt: { md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          {capabilities.cards.map((card, i) => (
            // Three across, then two.
            <Grid size={{ xs: 12, sm: 6, md: i < 3 ? 4 : 6 }} key={card.title}>
              <Reveal delay={(i % 3) * 70} sx={{ height: "100%" }}>
                <Box
                  component="article"
                  sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "20px", overflow: "hidden", backgroundColor: c.card, border: `1px solid ${c.border}` }}
                >
                  <FeatureArt kind={card.art} tone={card.accent} label={card.artAlt} />
                  <Stack spacing={1} sx={{ p: { xs: 2.5, md: 3 }, flex: 1 }}>
                    <Typography variant="h3" sx={{ fontSize: "1.3125rem" }}>{card.title}</Typography>
                    <Typography variant="body1" sx={{ color: c.muted }}>
                      {card.body}
                    </Typography>
                    <Box sx={{ flex: 1 }} />
                    {"install" in card && (
                      <Box sx={{ pt: 1 }}>
                        <Button
                          href={card.install.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          startIcon={<ChromeMark size={18} />}
                          sx={{ borderColor: c.border, color: c.fg, "&:hover": { borderColor: c.fg, backgroundColor: c.raised } }}
                        >
                          {card.install.label}
                        </Button>
                      </Box>
                    )}
                  </Stack>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
        {/* One way out, at the end, so nothing pulls you off the page halfway through. */}
        <Box sx={{ mt: { xs: 3, md: 4 } }}>
          <OutLink href={capabilities.more.href}>{capabilities.more.label}</OutLink>
        </Box>
      </Section>

      {/* Use cases as a picture: the chat window, in the apps it works with. */}
      <Section id="use-cases">
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <Eyebrow>{useCases.eyebrow}</Eyebrow>
              <Typography variant="h2" component="h2">
                <Highlight text={useCases.title} />
              </Typography>
              <Typography variant="subtitle1" sx={{ color: c.muted, mt: 2 }}>
                {useCases.lede}
              </Typography>
              <Typography variant="body2" sx={{ color: c.muted, mt: 1.25 }}>
                {useCases.attended}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <OutLink href={useCases.link.href}>{useCases.link.label}</OutLink>
              </Box>
            </Reveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} sx={{ minWidth: 0 }}>
            <Reveal delay={100}>
              <ChatPicture />
              <Typography variant="body2" sx={{ color: c.muted, mt: 1.5, textAlign: "center" }}>
                {useCases.more}
              </Typography>
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      {/* A short FAQ: the answers a Show HN reader asks first. */}
      {/* The title holds the left column so the answers fill the row, not a narrow strip. */}
      <Section id="faq">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: "sticky" }, top: { md: 96 } }}>
              <Eyebrow>{faqIntro.eyebrow}</Eyebrow>
              <Typography variant="h2" component="h2">
                <Highlight text={faqIntro.title} />
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Reveal>
              <Faq />
            </Reveal>
          </Grid>
        </Grid>
      </Section>

      <CtaBand />
    </>
  );
}
