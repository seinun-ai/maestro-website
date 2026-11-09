import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ChromeMark, ClaudeMark, CodexMark, CursorMark, McpMark, OpenAIMark } from "./BrandMarks";
import { c, stage } from "@/lib/tokens";
import { worksWith, type BrandMark } from "@/content/site";

/** Copy names a mark; this is the one place that picks it. */
export function Mark({ mark, size = 20 }: { mark: BrandMark; size?: number }) {
  switch (mark) {
    case "claude":
      return <ClaudeMark size={size} />;
    case "openai":
      return <OpenAIMark size={size} />;
    case "codex":
      return <CodexMark size={size} />;
    case "cursor":
      return <CursorMark size={size} />;
    case "mcp":
      return <McpMark size={size} />;
    case "chrome":
      return <ChromeMark size={size} />;
  }
}

/**
 * "Works with" and the marks of the apps Maestro connects to. With `chrome`,
 * the row ends in the Companion's store link, in Chrome's own colours.
 */
export default function WorksWith({ onDark = false, center = false, chrome = false }: { onDark?: boolean; center?: boolean; chrome?: boolean }) {
  const fg = onDark ? stage.fg : c.fg;
  const muted = onDark ? stage.muted : c.muted;
  const line = onDark ? stage.line : c.border;
  return (
    <Stack direction="row" useFlexGap sx={{ flexWrap: "wrap", alignItems: "center", justifyContent: center ? "center" : "flex-start", columnGap: 2, rowGap: 1 }}>
      <Typography component="p" sx={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.6875rem", letterSpacing: ".08em", textTransform: "uppercase", color: muted }}>
        {worksWith.label}
      </Typography>
      <Stack component="ul" direction="row" useFlexGap sx={{ listStyle: "none", m: 0, p: 0, flexWrap: "wrap", alignItems: "center", justifyContent: center ? "center" : "flex-start", columnGap: 1.75, rowGap: 1 }}>
        {worksWith.apps.map((app) => {
          // The protocol is the catch-all, so it reads quieter than the four apps people know.
          const quiet = app.mark === "mcp";
          return (
            <Stack component="li" key={app.name} direction="row" spacing={0.75} title={app.detail} sx={{ alignItems: "center", color: quiet ? muted : fg }}>
              <Mark mark={app.mark} size={quiet ? 16 : 20} />
              <Typography component="span" sx={{ fontSize: quiet ? "0.8125rem" : "0.9375rem", fontWeight: 500, color: quiet ? muted : fg, whiteSpace: "nowrap" }}>
                {app.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
      {chrome && (
        <>
          <Box aria-hidden sx={{ width: "1px", height: 20, backgroundColor: line, display: { xs: "none", sm: "block" } }} />
          <Box
            component="a"
            href={worksWith.chrome.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, fontSize: "0.9375rem", fontWeight: 500, color: fg, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { textDecoration: "underline" } }}
          >
            <Mark mark="chrome" />
            {worksWith.chrome.label}
            <ArrowOutwardIcon sx={{ fontSize: 16, color: muted }} />
          </Box>
        </>
      )}
    </Stack>
  );
}
