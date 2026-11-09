"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import { Mark } from "./WorksWith";
import { stage, type Accent } from "@/lib/tokens";
import { useCases, worksWith } from "@/content/site";

/** The stage's version of each area colour. */
const tone: Record<Accent, string> = { violet: stage.violet, tangerine: stage.tangerine, teal: stage.teal, blue: stage.blue };

// The four chat apps from the "works with" list; "Any MCP app" stays in the list only.
const apps = worksWith.apps.filter((a) => a.mark !== "mcp");

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Use cases as a picture, not a list: one chat window on the stage, its tabs the marks
 * of the apps Maestro works with. The tabs take turns,
 * and a click picks one. The asks are the same in every app, which is the point.
 * Each reply carries its area's colour.
 */
export default function ChatPicture() {
  const [active, setActive] = React.useState(0);
  const [pinned, setPinned] = React.useState(false);

  React.useEffect(() => {
    if (pinned || reduced()) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % apps.length), 2600);
    return () => window.clearInterval(id);
  }, [pinned]);

  return (
    <Box sx={{ borderRadius: "20px", overflow: "hidden", background: stage.background, border: `1px solid ${stage.line}`, color: stage.fg, boxShadow: "0 24px 60px -24px rgba(11, 17, 34, 0.55)" }}>
      {/* The app tabs. */}
      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", px: 1.25, py: 1, borderBottom: `1px solid ${stage.line}`, overflowX: "auto" }} role="tablist" aria-label="Chat app">
        {apps.map((app, i) => {
          const on = i === active;
          return (
            <ButtonBase
              key={app.name}
              role="tab"
              aria-selected={on}
              onClick={() => {
                setActive(i);
                setPinned(true);
              }}
              sx={{
                gap: 0.875,
                px: 1.25,
                py: 0.75,
                borderRadius: "10px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                color: on ? stage.fg : stage.muted,
                backgroundColor: on ? stage.tileHover : "transparent",
                opacity: on ? 1 : 0.75,
                transition: "background-color 240ms ease, opacity 240ms ease, color 240ms ease",
                "&:hover": { opacity: 1, color: stage.fg },
              }}
            >
              <Mark mark={app.mark} size={18} />
              {app.name}
            </ButtonBase>
          );
        })}
        <Stack direction="row" spacing={0.75} sx={{ ml: "auto !important", pl: 1, alignItems: "center", flexShrink: 0 }}>
          <Box aria-hidden sx={{ width: 7, height: 7, borderRadius: 999, backgroundColor: stage.green, boxShadow: "0 0 0 3px rgba(95, 214, 163, 0.2)" }} />
          <Typography component="span" sx={{ fontSize: "0.75rem", color: stage.muted, whiteSpace: "nowrap" }}>
            {useCases.chatConnected}
          </Typography>
        </Stack>
      </Stack>

      {/* The asks and the replies. */}
      <Stack spacing={1.75} sx={{ p: { xs: 2, md: 2.75 } }}>
        {useCases.chat.map((m) => (
          <Stack key={m.ask} spacing={0.75}>
            <Typography
              component="p"
              sx={{
                alignSelf: "flex-end",
                maxWidth: "88%",
                m: 0,
                px: 1.75,
                py: 1,
                borderRadius: "16px 16px 4px 16px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              {m.ask}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", maxWidth: "92%" }}>
              <Box aria-hidden sx={{ width: 8, height: 8, borderRadius: 999, backgroundColor: tone[m.area], flexShrink: 0 }} />
              <Typography component="p" sx={{ m: 0, fontSize: "0.875rem", color: tone[m.area], lineHeight: 1.4 }}>
                {m.reply}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
