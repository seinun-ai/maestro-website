import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Logo from "./Logo";
import { TextLink } from "./NextMui";
import { stage } from "@/lib/tokens";
import { docs, headerCta, nav, site, worksWith } from "@/content/site";

/** The details live on GitHub, so the footer's second row points there. */
const onGitHub = [
  { label: "README", href: docs.readme },
  { label: "Getting started", href: docs.gettingStarted },
  { label: "MCP guide", href: docs.mcpGuide },
  { label: "Known issues", href: docs.knownIssues },
  { label: "Contributing", href: docs.contributing },
];

const linkSx = { color: stage.muted, "&:hover": { color: stage.fg } } as const;

/** One band on the stage: identity, the site's own links, the GitHub docs, the legal line. */
export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${stage.line}`, backgroundColor: stage.bg, color: stage.fg }}>
      <Container sx={{ py: { xs: 4, md: 5 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2.5}
          sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between" }}
        >
          <Logo onDark />
          <Stack direction="row" spacing={{ xs: 2, md: 2.5 }} useFlexGap sx={{ flexWrap: "wrap" }}>
            {[headerCta, ...nav].map((item) => (
              <TextLink key={item.href} href={item.href} variant="body2" sx={linkSx}>
                {item.label}
              </TextLink>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 2.5, md: 3 }, borderColor: stage.line }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.5}
          sx={{ alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between" }}
        >
          <Typography variant="body2" sx={{ color: stage.muted }}>
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
        {/* The marks on this site are their owners'. */}
        <Typography variant="caption" component="p" sx={{ color: stage.muted, opacity: 0.8, mt: 2, maxWidth: 900 }}>
          {worksWith.trademarks}
        </Typography>
      </Container>
    </Box>
  );
}
