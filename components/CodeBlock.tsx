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

export default function CodeBlock({ code, label = "bash" }: { code: string; label?: string }) {
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
    <Paper sx={{ overflow: "hidden", borderRadius: 3 }}>
      <Stack
        direction="row"
        
        spacing={1}
        sx={{ alignItems: "center", px: 2, py: 1, borderBottom: 1, borderColor: "divider", backgroundColor: "action.hover" }}
      >
        <TerminalIcon sx={{ fontSize: 16, color: "text.secondary" }} />
        <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600, letterSpacing: ".06em" }}>
          {label}
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Button
          size="small"
          onClick={copy}
          startIcon={copied ? <CheckIcon sx={{ fontSize: 15 }} /> : <ContentCopyIcon sx={{ fontSize: 15 }} />}
          sx={{ color: copied ? "success.main" : "text.secondary", py: 0.25 }}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </Stack>
      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2.25,
          overflowX: "auto",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: "0.8375rem",
          lineHeight: 1.75,
          color: "text.primary",
        }}
      >
        <code>{code}</code>
      </Box>
    </Paper>
  );
}
