import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Logo from "./Logo";
import { TextLink } from "./NextMui";
import { nav, site } from "@/content/site";

const resources = [
  { label: "README", href: `${site.repo}#readme` },
  { label: "Known issues", href: `${site.repo}/blob/main/KNOWN_ISSUES.md` },
  { label: "Security", href: `${site.repo}/blob/main/SECURITY.md` },
  { label: "Contributing", href: `${site.repo}/blob/main/CONTRIBUTING.md` },
];

/**
 * Deliberately one band, not columns. The tall three-column footer read as a
 * second table of contents under the page it just ended; every destination it
 * held is already in the header, so the footer's whole job is identity, a thin
 * link row, and the legal line.
 */
export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", backgroundColor: "background.paper" }}>
      <Container sx={{ py: { xs: 4, md: 5 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2.5}
          sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between" }}
        >
          <Logo />
          <Stack direction="row" spacing={{ xs: 2, md: 2.5 }} useFlexGap sx={{ flexWrap: "wrap" }}>
            {nav.map((item) => (
              <TextLink key={item.href} href={item.href} color="text.secondary" variant="body2" sx={{ "&:hover": { color: "text.primary" } }}>
                {item.label}
              </TextLink>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 2.5, md: 3 } }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between" }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} {site.author} · {site.license} ·{" "}
            <Link href={`mailto:${site.contact}`} color="text.secondary" sx={{ "&:hover": { color: "text.primary" } }}>
              {site.contact}
            </Link>
          </Typography>
          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
            {resources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                color="text.secondary"
                variant="body2"
                sx={{ "&:hover": { color: "text.primary" } }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
