"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CursorIcon from "@mui/icons-material/NearMe";

import ScoreRing from "./ScoreRing";
import { reduced, useRoll } from "./motion";
import { stage } from "@/lib/tokens";
import { hero } from "@/content/site";

/** When each station lights, in ms. One pass, left to right, then it rests on Submit. */
const BEATS = [200, 850, 1500, 2150, 3200];
const LAST = BEATS.length - 1;

/** A small page, drawn: an outline and a few lines. */
function Page({ color, sx, lines = 3, fill = "rgba(255, 255, 255, 0.07)" }: { color: string; sx?: object; lines?: number; fill?: string }) {
  return (
    <Box sx={{ position: "absolute", width: 40, height: 52, borderRadius: "5px", border: `1.5px solid ${color}`, backgroundColor: fill, p: "7px", display: "grid", gap: "5px", alignContent: "start", transition: "transform 420ms cubic-bezier(0.2, 0.8, 0.2, 1)", ...sx }}>
      {Array.from({ length: lines }, (_, i) => (
        <Box key={i} sx={{ height: 2.5, borderRadius: 2, backgroundColor: color, opacity: 0.7, width: i === lines - 1 ? "60%" : "100%" }} />
      ))}
    </Box>
  );
}

const tones = [stage.muted, stage.violet, stage.tangerine, stage.teal, stage.blue];

/**
 * The whole product in one line of five pictures, in the site's colour code. It lights
 * left to right once and rests on Submit, which is the point of the product. The ring's
 * pair is the one the site's real captures show, and the label says it's a sample.
 */
export default function ProductStrip() {
  const [step, setStep] = React.useState(-1);
  React.useEffect(() => {
    const skip = reduced();
    const timers = BEATS.map((at, i) => window.setTimeout(() => setStep(i), skip ? 0 : at));
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, []);

  const { before, after } = hero.score;
  const score = useRoll(step >= 3 ? after : before, 1000, before);

  const art = [
    // Every old resume: a messy pile.
    <>
      <Page key="a" color={stage.muted} sx={{ transform: "translateX(-18px) rotate(-12deg)" }} />
      <Page key="b" color={stage.muted} sx={{ transform: "translateX(18px) rotate(11deg)" }} />
      <Page key="c" color={stage.muted} sx={{ transform: "rotate(-2deg)" }} fill="#1a2440" />
    </>,
    // One career history: one page, on the two it replaced.
    <>
      <Page key="a" color={stage.violet} sx={{ transform: "translate(6px, -3px)", opacity: 0.45 }} />
      <Page key="b" color={stage.violet} sx={{ transform: "translate(3px, -1.5px)", opacity: 0.7 }} />
      <Page key="c" color={stage.violet} lines={4} fill="#2a2150" />
    </>,
    // A resume per role: a fan.
    <>
      <Page key="a" color={stage.tangerine} sx={{ transformOrigin: "bottom center", transform: step >= 2 ? "translateX(-18px) rotate(-14deg)" : "none" }} />
      <Page key="b" color={stage.tangerine} sx={{ transformOrigin: "bottom center", transform: step >= 2 ? "translateX(18px) rotate(14deg)" : "none" }} />
      <Page key="c" color={stage.tangerine} fill="#3a2518" />
    </>,
    <ScoreRing key="r" value={score} size={64} stroke={6} color={stage.teal} track={stage.line} text={stage.fg} fontSize="0.9375rem" />,
    <Box key="s" sx={{ position: "relative" }}>
      <Box sx={{ px: 1.75, py: 0.75, borderRadius: "9px", fontSize: "0.875rem", fontWeight: 600, color: "#fff", backgroundColor: stage.action }}>{hero.strip[4].art}</Box>
      <Box sx={{ position: "absolute", right: -10, bottom: -14, opacity: step >= LAST ? 1 : 0, transform: step >= LAST ? "none" : "translate(26px, 22px)", transition: "opacity 300ms ease, transform 620ms cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
        <CursorIcon sx={{ fontSize: 22, color: stage.fg, transform: "scaleX(-1)", display: "block" }} />
      </Box>
    </Box>,
  ];

  return (
    <Box
      component="ol"
      sx={{
        listStyle: "none",
        m: 0,
        p: 0,
        display: "grid",
        gap: { xs: 1.5, md: 2.5 },
        gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", md: "repeat(5, minmax(0, 1fr))" },
      }}
    >
      {hero.strip.map((s, i) => {
        const on = step >= i;
        return (
          <Box
            component="li"
            key={s.label}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.25,
              textAlign: "center",
              px: 1,
              py: 2,
              borderRadius: "16px",
              border: `1px solid ${on ? tones[i] : stage.line}`,
              backgroundColor: on ? stage.tile : "transparent",
              transition: "border-color 360ms ease, background-color 360ms ease",
              "@media (prefers-reduced-motion: reduce)": { transition: "none" },
            }}
          >
            <Box aria-hidden sx={{ position: "relative", height: 64, width: "100%", display: "grid", placeItems: "center", opacity: on ? 1 : 0.4, transition: "opacity 360ms ease" }}>
              {art[i]}
            </Box>
            <Box>
              <Typography component="p" sx={{ fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.3, color: on ? stage.fg : stage.muted, transition: "color 360ms ease" }}>
                {s.label}
              </Typography>
              {"note" in s && (
                <Typography component="p" variant="caption" sx={{ color: stage.muted }}>
                  {s.note}
                </Typography>
              )}
            </Box>
            {i < LAST && (
              <ChevronRightIcon aria-hidden sx={{ display: { xs: "none", md: "block" }, position: "absolute", right: -21, top: "50%", transform: "translateY(-50%)", fontSize: 22, color: step > i ? stage.muted : stage.line, transition: "color 360ms ease" }} />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
