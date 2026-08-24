"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Reveal from "./Reveal";
import { economics } from "@/content/site";

export default function Economics() {
  return (
    <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "flex-start" }}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Reveal>
          <Paper
            sx={(t) => ({
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              borderColor: alpha(t.palette.warning.main, 0.35),
              backgroundColor: alpha(t.palette.warning.main, 0.1),
            })}
          >
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "3.4rem", md: "4.25rem" },
                fontWeight: 800,
                letterSpacing: "-0.055em",
                lineHeight: 1,
                color: "#8A5A00",
              }}
            >
              {economics.headline.stat}
            </Typography>
            <Typography variant="h5" component="p" sx={{ mt: 0.75, color: "#8A5A00" }}>
              {economics.headline.label}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2.5 }}>
              {economics.headline.body}
            </Typography>
            <Divider sx={{ my: 2.5, borderColor: "rgba(138,90,0,0.22)" }} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {economics.headline.aside}
            </Typography>
          </Paper>
        </Reveal>
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <Reveal delay={80}>
          <Paper sx={{ borderRadius: 3, overflowX: "auto" }}>
            <Table sx={{ minWidth: 580 }} aria-label="Measured token cost per operation">
              <TableHead>
                <TableRow>
                  <TableCell>Operation</TableCell>
                  <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                    Input tokens
                  </TableCell>
                  <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                    Output tokens
                  </TableCell>
                  <TableCell align="right">Cost</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {economics.rows.map((r) => (
                  <TableRow key={r.op}>
                    <TableCell sx={{ color: "text.secondary" }}>{r.op}</TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "text.secondary" }}
                    >
                      {r.tokensIn}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "text.secondary" }}
                    >
                      {r.tokensOut}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, whiteSpace: "nowrap" }}>
                      {r.cost}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow
                  sx={(t) => ({
                    backgroundColor: alpha(t.palette.primary.main, 0.07),
                    "& td": { borderBottom: 0 },
                  })}
                >
                  <TableCell sx={{ fontWeight: 700 }} colSpan={3}>
                    {economics.total.op}
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 800, color: "primary.main", whiteSpace: "nowrap" }}>
                    {economics.total.cost}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
            {economics.note}
          </Typography>
        </Reveal>
      </Grid>
    </Grid>
  );
}
