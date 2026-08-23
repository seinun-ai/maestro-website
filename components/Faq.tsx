import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "@/content/site";

export default function Faq({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  return (
    <Box sx={{ maxWidth: 860 }}>
      {items.map((item) => (
        <Accordion key={item.q} variant="outlined">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2.5, py: 0.75 }}>
            <Typography variant="h5" component="h3">
              {item.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              {item.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
