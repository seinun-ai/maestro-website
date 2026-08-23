"use client";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useColorScheme } from "@mui/material/styles";

const LABEL = "Toggle light and dark mode";

/**
 * Which icon shows is decided in CSS, not in React state. A `mounted` flag
 * would mean a setState in an effect and a first paint with the wrong glyph;
 * the colour-scheme class is already on <html> before hydration, so the
 * stylesheet gets it right on the very first frame.
 */
export default function ColorModeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();

  const toggle = () => {
    const resolved = mode === "system" ? systemMode : mode;
    setMode(resolved === "dark" ? "light" : "dark");
  };

  return (
    <Tooltip title={LABEL}>
      <IconButton
        onClick={toggle}
        aria-label={LABEL}
        size="small"
        sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <DarkModeOutlinedIcon
          fontSize="small"
          sx={[{ display: "block" }, (t) => t.applyStyles("dark", { display: "none" })]}
        />
        <LightModeOutlinedIcon
          fontSize="small"
          sx={[{ display: "none" }, (t) => t.applyStyles("dark", { display: "block" })]}
        />
      </IconButton>
    </Tooltip>
  );
}
