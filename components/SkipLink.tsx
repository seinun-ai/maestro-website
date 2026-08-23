import * as React from "react";
import Box from "@mui/material/Box";

/** Keyboard users land on the nav on every page; this gets them past it. */
export default function SkipLink() {
  return (
    <Box
      component="a"
      href="#main"
      sx={{
        position: "absolute",
        left: 12,
        top: -80,
        zIndex: 1200,
        px: 2,
        py: 1.25,
        borderRadius: 2,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        fontWeight: 600,
        textDecoration: "none",
        transition: "top .18s ease",
        "&:focus-visible": { top: 12 },
      }}
    >
      Skip to content
    </Box>
  );
}
