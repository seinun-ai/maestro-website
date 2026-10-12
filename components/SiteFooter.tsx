import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Logo from "./Logo";
import { TextLink } from "./NextMui";
import { c } from "@/lib/tokens";
import { docs, headerCta, nav, site } from "@/content/site";

/** The details live on GitHub, so the footer's second row points there. */
const onGitHub = [
  { label: "README", href: docs.readme },
  { label: "Getting started", href: docs.gettingStarted },
  { label: "MCP guide", href: docs.mcpGuide },
  { label: "Known issues", href: docs.knownIssues },
  { label: "Contributing", href: docs.contributing },
];

const linkSx = { color: c.muted, "&:hover": { color: c.fg } } as const;

/** One band: identity, the site's own links, the GitHub docs, the legal line. */
export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${c.border}`, backgroundColor: c.card }}>
      <Container sx={{ py: { xs: 4, md: 5 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2.5}
          sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between" }}
        >
          <Logo />
          <Stack direction="row" spacing={{ xs: 2, md: 2.5 }} useFlexGap sx={{ flexWrap: "wrap" }}>
            {[headerCta, ...nav].map((item) => (
              <TextLink key={item.href} href={item.href} variant="body2" sx={linkSx}>
                {item.label}
              </TextLink>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 2.5, md: 3 }, borderColor: c.border }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.5}
          sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between" }}
        >
          <Typography variant="body2" sx={{ color: c.muted }}>
            © {new Date().getFullYear()} {site.author}
            {" · "}
            <Link href={site.companyUrl} target="_blank" rel="noopener noreferrer" sx={linkSx}>
              {site.company}
            </Link>
            {" · "}
            {site.license}
            {" · "}
            <Link href={`mailto:${site.contact}`} sx={linkSx}>
              {site.contact}
            </Link>
          </Typography>
          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
            {onGitHub.map((item) => (
              <Link key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" variant="body2" sx={linkSx}>
                {item.label}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
