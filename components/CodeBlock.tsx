"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import TerminalIcon from "@mui/icons-material/TerminalOutlined";

export default function CodeBlock({
  code,
  label = "bash",
  wrap = false,
}: {
  code: string;
  label?: string;
  /** Prose prompts wrap; shell commands scroll. A wrapped command reads as two
   *  commands, and a scrolled paragraph hides most of itself. */
  wrap?: boolean;
}) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked (insecure origin, permission). The code is
      // selectable either way, so failing silently beats an error toast.
    }
  };

  return (
    <Paper sx={{ overflow: "hidden", borderRadius: 3, backgroundColor: "var(--c-code-bg)", border: "none", boxShadow: "none" }}>
      <Stack
        direction="row"
        
        spacing={1}
        sx={{ alignItems: "center", px: 2, py: 1, backgroundColor: "var(--c-code-bar)" }}
      >
        <TerminalIcon sx={{ fontSize: 16, color: "var(--c-code-muted)" }} />
        <Typography variant="caption" sx={{ color: "var(--c-code-muted)", fontWeight: 600, letterSpacing: ".06em" }}>
          {label}
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Button
          size="small"
          onClick={copy}
          startIcon={copied ? <CheckIcon sx={{ fontSize: 15 }} /> : <ContentCopyIcon sx={{ fontSize: 15 }} />}
          sx={{ color: copied ? "#5aca94" : "var(--c-code-muted)", py: 0.25, "&:hover": { color: "var(--c-code-fg)", backgroundColor: "rgba(255,255,255,0.08)" } }}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </Stack>
      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2.25,
          overflowX: wrap ? "visible" : "auto",
          whiteSpace: wrap ? "pre-wrap" : "pre",
          overflowWrap: wrap ? "anywhere" : "normal",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: "0.8375rem",
          lineHeight: 1.75,
          color: "var(--c-code-fg)",
        }}
      >
        <code>{code}</code>
      </Box>
    </Paper>
  );
}
