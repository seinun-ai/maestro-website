import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import SavingsIcon from "@mui/icons-material/SavingsOutlined";
import VerifiedIcon from "@mui/icons-material/VerifiedOutlined";
import { c } from "@/lib/tokens";
import { numbers } from "@/content/site";

/** One glyph per number, so each reads before its words do. */
const numberIcons = [<TimerIcon key="t" />, <SavingsIcon key="s" />, <VerifiedIcon key="v" />];

/** Three numbers under the stage, each with its glyph and how it was measured. */
export default function NumbersBand() {
  return (
    <Box component="section" aria-label={numbers.eyebrow} sx={{ py: { xs: 3.5, md: 4 }, borderBottom: `1px solid ${c.border}` }}>
      <Container>
        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" }, gap: { xs: 2.5, md: 4 } }}>
          {numbers.items.map((n, i) => (
            <Stack component="li" key={n.figure} direction="row" spacing={1.5} sx={{ minWidth: 0, alignItems: "flex-start" }}>
              <Box aria-hidden sx={{ flexShrink: 0, width: 42, height: 42, borderRadius: "12px", display: "grid", placeItems: "center", color: c.blueInk, backgroundColor: c.blueTint, "& svg": { fontSize: 22 } }}>
                {numberIcons[i]}
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography component="p" sx={{ fontSize: "1.375rem", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  {n.figure}
                </Typography>
                <Typography variant="body2" sx={{ color: c.muted }}>
                  {n.label}.{" "}
                  <Box component="a" href={n.link.href} target="_blank" rel="noopener noreferrer" sx={{ color: c.blue, textDecoration: "none", whiteSpace: "nowrap", "&:hover": { textDecoration: "underline" } }}>
                    {n.link.label}
                  </Box>
                </Typography>
              </Box>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
