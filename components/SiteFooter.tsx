import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
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
  { label: "Architecture (SYSTEM.md)", href: `${site.repo}/blob/main/SYSTEM.md` },
  { label: "Security & threat model", href: `${site.repo}/blob/main/SECURITY.md` },
  { label: "Contributing", href: `${site.repo}/blob/main/CONTRIBUTING.md` },
];

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", backgroundColor: "background.paper" }}>
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 4 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Logo />
            <Typography variant="body2" sx={{ color: "text.secondary", mt: 2, maxWidth: 360 }}>
              {site.tagline} Built by one person who uses it daily, and released under Apache-2.0 so it can outlive that.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Site
            </Typography>
            <Stack spacing={1} sx={{ mt: 1.5 }}>
              {nav.map((item) => (
                <TextLink key={item.href} href={item.href} color="text.primary" variant="body2">
                  {item.label}
                </TextLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4 }}>
            <Typography variant="overline" sx={{ color: "text.secondary" }}>
              Project
            </Typography>
            <Stack spacing={1} sx={{ mt: 1.5 }}>
              {resources.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="text.primary"
                  variant="body2"
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 5 } }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5} sx={{ alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} {site.author} · {site.license}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Commercial questions:{" "}
            <Link href={`mailto:${site.contact}`} color="text.primary">
              {site.contact}
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
