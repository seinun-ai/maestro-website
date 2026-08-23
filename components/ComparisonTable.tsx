"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { comparison } from "@/content/site";

export default function ComparisonTable() {
  const last = comparison.columns.length - 1;

  return (
    <Box>
      <Paper sx={{ borderRadius: 3, overflowX: "auto" }}>
        <Table sx={{ minWidth: 780 }} aria-label="How Maestro CS compares with other tools">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "18%" }} />
              {comparison.columns.map((c, i) => (
                <TableCell
                  key={c}
                  sx={(t) => ({
                    width: "27.3%",
                    color: i === last ? "primary.main" : "text.secondary",
                    backgroundColor: i === last ? alpha(t.palette.primary.main, 0.06) : undefined,
                  })}
                >
                  {c}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {comparison.rows.map((row) => (
              <TableRow key={row.label} sx={{ "&:last-of-type td": { borderBottom: 0 } }}>
                <TableCell sx={{ fontWeight: 600 }}>{row.label}</TableCell>
                {row.cells.map((cell, i) => (
                  <TableCell
                    key={`${row.label}-${i}`}
                    sx={(t) => ({
                      color: i === last ? "text.primary" : "text.secondary",
                      fontWeight: i === last ? 600 : 400,
                      backgroundColor: i === last ? alpha(t.palette.primary.main, 0.06) : undefined,
                    })}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
        {comparison.footnote}
      </Typography>
    </Box>
  );
}