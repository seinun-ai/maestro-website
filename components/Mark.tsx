"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { ds } from "@/lib/theme";

/** A tonal stroke behind one phrase. Uses the primary container, the same
 *  information fill as the app, so the mark's yellow stays on the logo. */
export default function Mark({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="span"
      sx={{
        backgroundColor: ds.primaryContainer,
        borderRadius: "4px",
        paddingInline: "0.12em",
      }}
    >
      {children}
    </Box>
  );
}
