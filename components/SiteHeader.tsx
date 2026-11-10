"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./Logo";
import GitHubMark from "./GitHubMark";
import { barHeight, c, stage, stageScope } from "@/lib/tokens";
import { headerCta, nav, site } from "@/content/site";

// The header is part of the stage: light text over the hero's own light at the top,
// a frosted strip once scrolled. Its one button is quiet until then.
const linkSx = {
  px: 1.5,
  fontWeight: 500,
  color: stage.muted,
  "&:hover": { color: stage.fg, backgroundColor: stage.tileHover },
} as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [raised, setRaised] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home sections are anchors, so only a real page can be the current one.
  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          // The theme gives every Paper a 1px border; here it would draw a light line under the
          // bar and make it 2px taller than barHeight, leaving a strip of page above the hero.
          border: 0,
          ...stageScope,
          // Transparent at the top: each page's first stage section runs up behind it
          // (underBar in lib/tokens.ts). The hairline is an inset shadow, so the bar's
          // height never changes.
          backgroundColor: raised ? "rgba(12, 12, 15, 0.82)" : "transparent",
          backdropFilter: raised ? "blur(16px)" : "none",
          WebkitBackdropFilter: raised ? "blur(16px)" : "none",
          boxShadow: raised ? `inset 0 -1px 0 ${stage.line}` : "none",
          transition: "background-color 200ms cubic-bezier(0.2, 0, 0, 1), box-shadow 200ms cubic-bezier(0.2, 0, 0, 1)",
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: barHeight, gap: 2 }}>
            <Box component={NextLink} href="/" aria-label={`${site.name} home`} sx={{ textDecoration: "none", color: stage.fg }}>
              <Logo onDark />
            </Box>

            <Box sx={{ flex: 1 }} />

            <Stack direction="row" spacing={0.5} component="nav" aria-label="Main" sx={{ display: { xs: "none", md: "flex" } }}>
              {nav.map((item) => (
                <Button
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  size="small"
                  aria-current={isActive(item.href) ? "page" : undefined}
                  sx={{ ...linkSx, ...(isActive(item.href) ? { color: stage.fg } : null) }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                href={site.repo}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                startIcon={<GitHubMark />}
                sx={linkSx}
              >
                GitHub
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Button
                component={NextLink}
                href={headerCta.href}
                variant="outlined"
                size="small"
                aria-current={isActive(headerCta.href) ? "page" : undefined}
                // Quiet at the top, where the page's own button leads; filled with the
                // action colour once the page scrolls. The same on every page and in both schemes.
                sx={{
                  border: "1px solid",
                  transition: "background-color 200ms ease, border-color 200ms ease, color 200ms ease",
                  ...(raised
                    ? { backgroundColor: stage.action, borderColor: stage.action, color: stage.actionFg, "&:hover": { backgroundColor: stage.actionHover, borderColor: stage.actionHover } }
                    : { backgroundColor: "transparent", borderColor: stage.line, color: stage.fg, "&:hover": { backgroundColor: stage.tileHover, borderColor: stage.line } }),
                }}
              >
                {headerCta.label}
              </Button>
              <IconButton
                onClick={() => setOpen(true)}
                aria-label="Open navigation"
                sx={{ display: { xs: "inline-flex", md: "none" }, color: stage.fg, border: `1px solid ${stage.line}`, borderRadius: 2 }}
                size="small"
              >
                <MenuIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 288, borderRadius: 0, backgroundColor: c.card } } }}
      >
        <Stack direction="row" sx={{ alignItems: "center", p: 2 }}>
          <Logo />
          <Box sx={{ flex: 1 }} />
          <IconButton onClick={() => setOpen(false)} aria-label="Close navigation" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Divider />
        <List sx={{ py: 1 }}>
          {nav.map((item) => (
            <ListItemButton
              key={item.href}
              component={NextLink}
              href={item.href}
              selected={isActive(item.href)}
              onClick={() => setOpen(false)}
              sx={{ mx: 1, borderRadius: 2 }}
            >
              <ListItemText slotProps={{ primary: { sx: { fontWeight: 500 } } }} primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Stack spacing={1.25} sx={{ p: 2 }}>
          <Button fullWidth variant="contained" component={NextLink} href={headerCta.href} onClick={() => setOpen(false)}>
            {headerCta.label}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubMark />}
          >
            Star on GitHub
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
