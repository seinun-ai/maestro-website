"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

const mono = { fontFamily: "var(--font-mono)", fontSize: "0.8rem" };

/** Symptom → cause → fix. The symptom column is monospace because that is how
 *  the reader met it: as text in a terminal they are trying to match. */
export default function TroubleTable({
  columns,
  rows,
}: {
  columns: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <Paper sx={{ borderRadius: 3, overflowX: "auto" }}>
      <Table sx={{ minWidth: 720 }}>
        <TableHead>
          <TableRow>
            {columns.map((c, i) => (
              <TableCell key={c} sx={{ width: i === 0 ? "34%" : i === 1 ? "26%" : "40%" }}>
                {c}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r[0]} sx={{ "&:last-of-type td": { borderBottom: 0 } }}>
              <TableCell>
                <Box component="code" sx={mono}>
                  {r[0]}
                </Box>
              </TableCell>
              <TableCell sx={{ color: "text.secondary" }}>{r[1]}</TableCell>
              <TableCell>{r[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
