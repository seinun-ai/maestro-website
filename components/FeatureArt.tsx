"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/CheckCircle";
import CursorIcon from "@mui/icons-material/NearMe";

import { ChromeMark } from "./BrandMarks";
import ScoreRing from "./ScoreRing";
import { useRoll, useStepsOnView } from "./motion";
import { accent, c, stage, type Accent } from "@/lib/tokens";
import { studio, type FeatureArtKind } from "@/content/site";

const show = (on: boolean, delay = 0) => ({
  opacity: on ? 1 : 0,
  transform: on ? "none" : "translateY(6px)",
  transition: `opacity 340ms ease ${delay}ms, transform 340ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
});

const panelSx = { backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: "14px", boxShadow: c.shadowFloat } as const;

/** A drawn resume page: a coloured band, a title and a few lines. */
function ResumePage({ role, tag, tone, sx }: { role: string; tag: string; tone: Accent; sx?: object }) {
  const a = accent(tone);
  return (
    <Box sx={{ ...panelSx, position: "absolute", width: 104, height: 148, overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 560ms cubic-bezier(0.2, 0.8, 0.2, 1)", "@media (prefers-reduced-motion: reduce)": { transition: "none" }, ...sx }}>
      <Box sx={{ height: 7, backgroundColor: a.solid }} />
      <Box sx={{ p: 1.25, flex: 1, display: "flex", flexDirection: "column", gap: 0.75 }}>
        <Box sx={{ fontSize: "0.8125rem", fontWeight: 600, color: c.fg, lineHeight: 1.2 }}>{role}</Box>
        {[100, 88, 94, 70].map((w) => (
          <Box key={w} sx={{ height: 4, borderRadius: 2, width: `${w}%`, backgroundColor: c.border }} />
        ))}
        <Box sx={{ mt: "auto", alignSelf: "flex-start", fontSize: "0.6875rem", fontWeight: 600, borderRadius: 999, px: 0.875, py: 0.125, whiteSpace: "nowrap", color: a.ink, backgroundColor: a.tint, border: `1px solid ${a.solid}` }}>{tag}</Box>
      </Box>
    </Box>
  );
}

/** One resume per track: the pages fan out from one stack. */
function Targets() {
  const { ref, step } = useStepsOnView(1, 350);
  const [left, mid, right] = studio.targets;
  const fan = step >= 1;
  return (
    // Scaled on a 1024px screen, where the three-across card is narrower than the fan.
    <Box ref={ref} sx={{ position: "relative", width: "100%", height: 180, display: "grid", placeItems: "center", transform: { xs: "none", md: "scale(0.84)", lg: "none" } }}>
      <ResumePage {...left} tone="tangerine" sx={{ transform: fan ? "translateX(-108px) rotate(-5deg)" : "none" }} />
      <ResumePage {...right} tone="tangerine" sx={{ transform: fan ? "translateX(108px) rotate(5deg)" : "none" }} />
      <ResumePage {...mid} tone="tangerine" sx={{ transform: fan ? "translateY(-6px)" : "none" }} />
    </Box>
  );
}

/** It asks instead of inventing: a question, a yes, and the score moves. */
function Asks() {
  const { ref, step } = useStepsOnView(3, 800);
  const { before, after, q, yes, no, saved } = studio.asks;
  const score = useRoll(step >= 3 ? after : before, 1000, before);
  const teal = accent("teal");
  return (
    <Stack ref={ref} direction="row" spacing={2} sx={{ alignItems: "center", width: "100%", maxWidth: 360 }}>
      <ScoreRing value={score} size={92} stroke={8} color={teal.solid} track={c.border} text={c.fg} fontSize="1.25rem" />
      <Box sx={{ ...panelSx, p: 1.5, flex: 1, minWidth: 0, borderRadius: "14px 14px 14px 4px" }}>
        <Box sx={{ fontSize: "0.875rem", fontWeight: 500, color: c.fg, lineHeight: 1.35 }}>{q}</Box>
        <Stack direction="row" spacing={0.75} sx={{ mt: 1, alignItems: "center" }}>
          <Box sx={{ fontSize: "0.75rem", fontWeight: 600, px: 1, py: 0.375, borderRadius: "7px", whiteSpace: "nowrap", color: step >= 1 ? "#fff" : c.fg, backgroundColor: step >= 1 ? stage.action : "transparent", border: `1px solid ${step >= 1 ? stage.action : c.border}`, transition: "background-color 200ms ease" }}>{yes}</Box>
          <Box sx={{ fontSize: "0.75rem", px: 1, py: 0.375, borderRadius: "7px", color: c.muted, border: `1px solid ${c.border}` }}>{no}</Box>
        </Stack>
        <Box sx={{ mt: 0.75, fontSize: "0.75rem", fontWeight: 500, color: accent("success").ink, ...show(step >= 2) }}>{saved}</Box>
      </Box>
    </Stack>
  );
}

/** Every edit is a diff: the old line struck, the new one in, your call. */
function Diff() {
  const { ref, step } = useStepsOnView(2, 800);
  const { del, add, src, keep, undo } = studio.diff;
  const violet = accent("violet");
  return (
    <Box ref={ref} sx={{ ...panelSx, p: 1.75, width: "100%", maxWidth: 360 }}>
      <Box sx={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.8125rem", lineHeight: 1.55, display: "grid", gap: 0.75 }}>
        <Box sx={{ color: step >= 1 ? "var(--c-del)" : c.fg, textDecoration: step >= 1 ? "line-through" : "none", transition: "color 300ms ease" }}>
          {step >= 1 ? "− " : ""}
          {del}
        </Box>
        <Box sx={{ color: accent("success").ink, ...show(step >= 1, 150) }}>+ {add}</Box>
      </Box>
      <Stack direction="row" spacing={1} sx={{ mt: 1.25, alignItems: "center", ...show(step >= 2) }}>
        <Box sx={{ fontSize: "0.6875rem", fontWeight: 600, color: violet.ink, backgroundColor: violet.tint, border: `1px solid ${violet.solid}`, borderRadius: 999, px: 0.875, whiteSpace: "nowrap" }}>{src}</Box>
        <Box sx={{ ml: "auto !important", fontSize: "0.75rem", color: c.muted, whiteSpace: "nowrap" }}>
          {keep} · {undo}
        </Box>
      </Stack>
    </Box>
  );
}

/** A line of text on a drawn page; `strong` is the name at the top. */
function Line({ w, strong = false }: { w: number; strong?: boolean }) {
  return <Box sx={{ height: 4, borderRadius: 2, width: `${w}%`, backgroundColor: strong ? accent("tangerine").solid : c.border }} />;
}

/** The same facts on two layouts. A button changes which one you get. */
function Templates() {
  const { ref, step } = useStepsOnView(1, 900);
  const a = accent("tangerine");
  const pageSx = (on: boolean) => ({ ...panelSx, width: 118, height: 146, p: 1.25, display: "flex", gap: 0.75, opacity: on ? 1 : 0.5, outline: on ? `2px solid ${a.solid}` : "none", outlineOffset: 2, transition: "opacity 300ms ease" });
  return (
    <Stack ref={ref} spacing={1.25} sx={{ alignItems: "center" }}>
      <Stack direction="row" spacing={0.5}>
        {studio.templates.map((t, i) => {
          const on = step === i;
          return (
            <Box key={t} sx={{ fontSize: "0.75rem", fontWeight: 600, px: 1.25, py: 0.375, borderRadius: 999, whiteSpace: "nowrap", color: on ? a.ink : c.muted, backgroundColor: on ? c.card : "transparent", border: `1px solid ${on ? a.solid : c.border}`, transition: "all 240ms ease" }}>{t}</Box>
          );
        })}
      </Stack>
      <Stack direction="row" spacing={2}>
        <Box sx={{ ...pageSx(step === 0), flexDirection: "column" }}>
          <Line w={55} strong />
          {[100, 92, 96, 80, 100, 70].map((w, i) => <Line key={i} w={w} />)}
        </Box>
        <Box sx={pageSx(step === 1)}>
          <Stack spacing={0.75} sx={{ width: "32%" }}>
            <Line w={100} strong />
            {[100, 80, 90].map((w) => <Line key={w} w={w} />)}
          </Stack>
          <Stack spacing={0.75} sx={{ flex: 1 }}>
            {[100, 92, 96, 80, 100, 70].map((w, i) => <Line key={i} w={w} />)}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

/** The Companion: fills the form, then the cursor rests on Submit. It never presses it. */
function Companion() {
  const { fields, submit, note, label } = studio.companion;
  const { ref, step } = useStepsOnView(fields.length + 1, 480);
  const blue = accent("blue");
  const done = step > fields.length;
  return (
    <Box ref={ref} sx={{ ...panelSx, width: "100%", maxWidth: 400, overflow: "hidden" }}>
      <Stack direction="row" spacing={0.875} sx={{ alignItems: "center", px: 1.5, py: 0.875, borderBottom: `1px solid ${c.border}` }}>
        <ChromeMark size={16} />
        <Box sx={{ fontSize: "0.75rem", fontWeight: 600, color: blue.ink }}>{label}</Box>
      </Stack>
      <Box sx={{ p: 1.5 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0.75 }}>
          {fields.map((f, i) => {
            const ticked = step > i;
            return (
              <Stack key={f} direction="row" spacing={0.625} sx={{ alignItems: "center", fontSize: "0.8125rem", color: ticked ? c.fg : c.muted, transition: "color 200ms ease" }}>
                <CheckIcon aria-hidden sx={{ fontSize: 17, color: ticked ? accent("success").solid : c.border, transition: "color 200ms ease" }} />
                <span>{f}</span>
              </Stack>
            );
          })}
        </Box>
        <Stack direction="row" spacing={2.5} sx={{ mt: 1.5, alignItems: "center" }}>
          <Box sx={{ position: "relative", flexShrink: 0 }}>
            <Box sx={{ fontSize: "0.8125rem", fontWeight: 600, px: 1.5, py: 0.625, borderRadius: "8px", whiteSpace: "nowrap", color: "#fff", backgroundColor: stage.action }}>{submit}</Box>
            <Box aria-hidden sx={{ position: "absolute", right: -10, bottom: -12, ...show(done) }}>
              <CursorIcon sx={{ fontSize: 20, color: c.fg, transform: "scaleX(-1)", display: "block" }} />
            </Box>
          </Box>
          <Box sx={{ fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.3, color: accent("success").ink, ...show(done, 150) }}>{note}</Box>
        </Stack>
      </Box>
    </Box>
  );
}

const arts: Record<FeatureArtKind, () => React.ReactElement> = {
  targets: Targets,
  asks: Asks,
  diff: Diff,
  templates: Templates,
  companion: Companion,
};

/** The picture at the top of a feature card, drawn so it stays sharp and large at any size. */
export default function FeatureArt({ kind, tone, label }: { kind: FeatureArtKind; tone: Accent; label: string }) {
  const Art = arts[kind];
  return (
    <Box role="img" aria-label={label} sx={{ height: { xs: 220, md: 232 }, display: "grid", placeItems: "center", overflow: "hidden", px: 2.5, py: 2, backgroundColor: accent(tone).tint }}>
      <Art />
    </Box>
  );
}
