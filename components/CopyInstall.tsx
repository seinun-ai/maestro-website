"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/CheckOutlined";

import { stage } from "@/lib/tokens";
import { hero, start } from "@/content/site";

type Os = "mac" | "win";

const copy = hero.install;

/** The visitor's system, read once on the client; the server renders macOS and Linux. */
const noop = () => () => {};
const detectOs = (): Os => (/win/i.test(navigator.userAgent) ? "win" : "mac");
const serverOs = (): Os => "mac";

/**
 * Everything one paste needs on a new machine. The middle line matters: a terminal can't
 * find uv until it's reopened, so without it the install line would fail straight after
 * uv arrives. The commands stay one click away, because nobody should have to paste what
 * they can't read.
 */
const linesFor = (os: Os) => [os === "win" ? start.uv.windows : start.uv.mac, copy.path[os], ...start.install.code.split("\n")];

/** One button: copy the install command. The system is picked for you. */
export default function CopyInstall({
  align = "center",
  defaultOpen = false,
}: {
  align?: "center" | "left";
  defaultOpen?: boolean;
}) {
  const detected = React.useSyncExternalStore(noop, detectOs, serverOs);
  const [picked, setPicked] = React.useState<Os | null>(null);
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(defaultOpen);
  const os = picked ?? detected;
  const lines = linesFor(os);
  const items = align === "center" ? "center" : "flex-start";

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 4000);
    } catch {
      // Clipboard can be blocked; the commands open so they can be selected by hand.
      setOpen(true);
    }
  };

  return (
    <Stack spacing={1.25} sx={{ alignItems: items, width: "100%" }}>
      {/* The one filled button on the screen. */}
      <Button
        onClick={onCopy}
        startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
        sx={{
          borderRadius: 999,
          px: 3.25,
          py: 1.375,
          fontSize: "1.0625rem",
          fontWeight: 600,
          whiteSpace: "nowrap",
          color: "#fff",
          backgroundColor: copied ? "#11865b" : stage.action,
          boxShadow: stage.actionGlow,
          "&:hover": { backgroundColor: copied ? "#11865b" : stage.actionHover },
        }}
      >
        {copied ? copy.copied : copy.copy}
      </Button>

      {/* What to do next, once it's copied; otherwise which system, and what it runs. */}
      <Box aria-live="polite" sx={{ minHeight: 30, display: "flex", alignItems: "center" }}>
        {copied ? (
          <Typography variant="body2" sx={{ color: stage.green, fontWeight: 500 }}>
            {copy.then[os]}
          </Typography>
        ) : (
          <Stack direction="row" spacing={0.25} sx={{ alignItems: "center", flexWrap: "wrap", justifyContent: items }}>
            {(["mac", "win"] as const).map((key) => (
              <Button
                key={key}
                size="small"
                onClick={() => setPicked(key)}
                aria-pressed={os === key}
                sx={{
                  minHeight: 26,
                  px: 1.25,
                  fontSize: "0.8125rem",
                  whiteSpace: "nowrap",
                  color: os === key ? stage.fg : stage.muted,
                  backgroundColor: os === key ? stage.tile : "transparent",
                  "&:hover": { backgroundColor: stage.tileHover },
                }}
              >
                {copy.tabs[key]}
              </Button>
            ))}
            <Button
              size="small"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              sx={{ minHeight: 26, px: 1.25, fontSize: "0.8125rem", whiteSpace: "nowrap", color: stage.blue, "&:hover": { backgroundColor: stage.tileHover } }}
            >
              {open ? copy.hide : copy.see}
            </Button>
          </Stack>
        )}
      </Box>

      <Collapse in={open} sx={{ width: "100%", maxWidth: 680 }}>
        <Box
          component="pre"
          sx={{
            m: 0,
            px: 2,
            py: 1.5,
            overflowX: "auto",
            textAlign: "left",
            borderRadius: "12px",
            border: `1px solid ${stage.line}`,
            backgroundColor: "rgba(0, 0, 0, 0.28)",
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: "0.8125rem",
            lineHeight: 1.75,
            color: stage.fg,
          }}
        >
          {lines.join("\n")}
        </Box>
      </Collapse>
    </Stack>
  );
}
