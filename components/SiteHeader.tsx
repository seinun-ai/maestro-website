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
import { alpha } from "@mui/material/styles";
import Logo from "./Logo";
import GitHubMark from "./GitHubMark";
import { headerCta, nav, site } from "@/content/site";

/** The promoted destination renders as a button, so it must not also render as
 *  a link beside it. Footer and sitemap keep the unfiltered list. */
const navLinks = nav.filter((i) => i.href !== headerCta.href);

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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={(t) => ({
          top: 0,
          backdropFilter: "saturate(180%) blur(14px)",
          backgroundColor: alpha(t.palette.background.default, raised ? 0.86 : 0.7),
          borderBottom: 1,
          borderColor: raised ? "divider" : "transparent",
          transition: "background-color .25s ease, border-color .25s ease",
        })}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 62, md: 70 }, gap: 2 }}>
            <Box component={NextLink} href="/" aria-label={`${site.name} home`} sx={{ textDecoration: "none", color: "inherit" }}>
              <Logo />
            </Box>

            <Box sx={{ flex: 1 }} />

            {/* Eight items need more room than the md breakpoint has: at 900px the
                full bar left 16px of headroom, which one font-rendering
                difference would eat. The drawer covers 900 to 1199. */}
            <Stack direction="row" spacing={0.5} sx={{ display: { xs: "none", lg: "flex" } }}>
              {navLinks.map((item) => (
                <Button
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  size="small"
                  color="inherit"
                  aria-current={isActive(item.href) ? "page" : undefined}
                  sx={{
                    px: 1.5,
                    fontWeight: 500,
                    color: isActive(item.href) ? "text.primary" : "text.secondary",
                    "&:hover": { color: "text.primary", backgroundColor: "action.hover" },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {/* The repo, restored as a nav item rather than a second CTA:
                  it reads as navigation here, so it no longer competes with
                  the Install button that now wears the mark. */}
              <Button
                href={site.repo}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                color="inherit"
                startIcon={<GitHubMark />}
                sx={{
                  px: 1.5,
                  fontWeight: 500,
                  color: "text.secondary",
                  "&:hover": { color: "text.primary", backgroundColor: "action.hover" },
                }}
              >
                GitHub
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              {/* One button, wearing the GitHub mark: installing IS cloning
                  from GitHub, so the mark rides the CTA instead of sitting
                  beside it as a competing destination. */}
              <Button
                component={NextLink}
                href={headerCta.href}
                variant="contained"
                size="small"
                startIcon={<GitHubMark />}
                aria-current={isActive(headerCta.href) ? "page" : undefined}
                sx={{ px: 2 }}
              >
                {headerCta.label}
              </Button>
              <IconButton
                onClick={() => setOpen(true)}
                aria-label="Open navigation"
                sx={{ display: { xs: "inline-flex", lg: "none" }, border: 1, borderColor: "divider", borderRadius: 2 }}
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
        slotProps={{ paper: { sx: { width: 288, borderRadius: 0 } } }}
      >
        <Stack direction="row"  sx={{ alignItems: "center", p: 2 }}>
          <Logo />
          <Box sx={{ flex: 1 }} />
          <IconButton onClick={() => setOpen(false)} aria-label="Close navigation" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Divider />
        <List sx={{ py: 1 }}>
          {navLinks.map((item) => (
            <ListItemButton
              key={item.href}
              component={NextLink}
              href={item.href}
              selected={isActive(item.href)}
              onClick={() => setOpen(false)}
              sx={{ mx: 1, borderRadius: 2 }}
            >
              <ListItemText slotProps={{ primary: { sx: { fontWeight: 600 } } }} primary={item.label} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Stack spacing={1.25} sx={{ p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            component={NextLink}
            href={headerCta.href}
            startIcon={<GitHubMark />}
            onClick={() => setOpen(false)}
          >
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
            View on GitHub
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
