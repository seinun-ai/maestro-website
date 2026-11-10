"use client";

import * as React from "react";
import Box from "@mui/material/Box";

import { accent, area, c } from "@/lib/tokens";

/** The gathered chip is the career history, so it takes that area's colour. */
const history = accent(area.history);

/**
 * The premise's file chips, as one button: a click gathers the copies into a
 * single "Career history" chip, and another spreads them again. It is the hero
 * GIF's first beat, played by the reader. Reduced motion swaps with no movement.
 */
export default function ChipCollapse({
  chips,
  tilt,
  hint,
  hintAgain,
  merged,
  mergedNote,
  label,
}: {
  chips: readonly string[];
  tilt: readonly number[];
  hint: string;
  hintAgain: string;
  merged: string;
  mergedNote: string;
  label: string;
}) {
  const [gathered, setGathered] = React.useState(false);
  const motion = "@media (prefers-reduced-motion: reduce)";

  return (
    <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 760 }}>
      <Box
        component="button"
        type="button"
        onClick={() => setGathered((g) => !g)}
        aria-pressed={gathered}
        aria-label={label}
        sx={{
          all: "unset",
          cursor: "pointer",
          display: "block",
          position: "relative",
          borderRadius: "16px",
          "&:focus-visible": { outline: `2px solid ${c.ring}`, outlineOffset: 6 },
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, md: 1.5 } }}>
          {chips.map((chip, i) => {
            const dot = chip.lastIndexOf(".");
            return (
              <Box
                key={chip}
                component="span"
                sx={{
                  display: { xs: i > 3 ? "none" : "inline-block", sm: "inline-block" },
                  transform: gathered
                    ? `translateX(${-i * 28}px) scale(0.2) rotate(0deg)`
                    : `rotate(${tilt[i]}deg)`,
                  opacity: gathered ? 0 : 1,
                  transition: "transform 420ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 320ms ease",
                  transitionDelay: `${(gathered ? i : chips.length - i) * 45}ms`,
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
                  [motion]: { transition: "none" },
                  "button:hover > div > &": { boxShadow: `3px 3px 0 ${history.solid}` },
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
        <Box
          component="span"
          aria-hidden
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            display: "inline-flex",
            alignItems: "baseline",
            gap: 1,
            fontWeight: 600,
            color: history.ink,
            backgroundColor: history.tint,
            border: `1.5px solid ${history.solid}`,
            borderRadius: 999,
            px: 1.75,
            py: 0.6,
            boxShadow: `3px 3px 0 ${history.solid}`,
            opacity: gathered ? 1 : 0,
            transform: gathered ? "scale(1)" : "scale(0.6)",
            transformOrigin: "left center",
            transition: "transform 360ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 260ms ease",
            transitionDelay: gathered ? "260ms" : "0ms",
            pointerEvents: "none",
            [motion]: { transition: "none" },
          }}
        >
          {merged}
          <Box component="span" sx={{ fontWeight: 500, color: c.muted, fontSize: "0.875rem" }}>
            {mergedNote}
          </Box>
        </Box>
      </Box>
      <Box
        component="p"
        aria-hidden
        sx={{ m: 0, mt: 1.5, fontFamily: "var(--font-mono), monospace", fontSize: "0.75rem", color: c.muted }}
      >
        {gathered ? hintAgain : hint}
      </Box>
    </Box>
  );
}
