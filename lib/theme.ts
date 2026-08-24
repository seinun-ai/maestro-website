"use client";

import { createTheme, alpha } from "@mui/material/styles";

/**
 * Brand tokens are locked in the product repo
 * (docs/assets/brand/brand-tokens.json). Mirror that file; don't invent new
 * brand colours here.
 */
export const brand = {
  blue: "#2563EB",
  blueFacet: "#1D4ED8",
  yellow: "#FBBF24",
  yellowFacet: "#D99A00",
  navy: "#0F172A",
  grey: "#64748B",
} as const;

/** Light only, by decision. A marketing page is read once, in daylight, from a
 *  link — a theme toggle is app furniture that costs a fifth of the styling
 *  budget and earns nothing here. */
const surface = {
  page: "#F7F8FA",
  card: "#FFFFFF",
  border: "#E3E7EE",
  text: "#0F172A",
  muted: "#5A6678",
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: { main: brand.blue, dark: brand.blueFacet, contrastText: "#FFFFFF" },
    secondary: { main: brand.yellowFacet, light: brand.yellow, contrastText: brand.navy },
    warning: { main: brand.yellowFacet },
    success: { main: "#188038" },
    error: { main: "#D93025" },
    background: { default: surface.page, paper: surface.card },
    text: { primary: surface.text, secondary: surface.muted },
    divider: surface.border,
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "var(--font-inter), Inter, system-ui, -apple-system, Segoe UI, sans-serif",
    h1: { fontSize: "clamp(2.5rem, 6vw, 4.25rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.04 },
    h2: { fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.028em", lineHeight: 1.12 },
    h3: { fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 },
    h4: { fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.012em", lineHeight: 1.3 },
    h5: { fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.008em" },
    h6: { fontSize: "0.9375rem", fontWeight: 700 },
    subtitle1: { fontSize: "1.1875rem", lineHeight: 1.62, letterSpacing: "-0.005em" },
    body1: { fontSize: "1.0125rem", lineHeight: 1.68 },
    body2: { fontSize: "0.9125rem", lineHeight: 1.62 },
    overline: { fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.14em", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": { scrollBehavior: "smooth", WebkitFontSmoothing: "antialiased" },
        "@media (prefers-reduced-motion: reduce)": {
          "html, body": { scrollBehavior: "auto" },
          "*": { animationDuration: "0.01ms !important", transitionDuration: "0.01ms !important" },
        },
        // Anchor targets must clear the fixed header, or a deep link lands with
        // its own heading hidden behind the AppBar.
        "[id]": { scrollMarginTop: "88px" },
        code: { fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, monospace" },
      },
    },
    MuiContainer: { defaultProps: { maxWidth: "lg" } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 20, paddingBlock: 9 },
        sizeLarge: { paddingInline: 26, paddingBlock: 12, fontSize: "1rem" },
        outlined: ({ theme: t }) => ({ borderColor: t.palette.divider }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, letterSpacing: "-0.005em" },
        sizeSmall: { height: 24, fontSize: "0.75rem" },
        outlined: ({ theme: t }) => ({ borderColor: t.palette.divider }),
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme: t }) => ({ backgroundImage: "none", border: `1px solid ${t.palette.divider}` }),
        rounded: { borderRadius: 14 },
      },
    },
    MuiCard: { styleOverrides: { root: { borderRadius: 14 } } },
    MuiAccordion: {
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: ({ theme: t }) => ({
          borderRadius: 12,
          marginBottom: 8,
          "&::before": { display: "none" },
          "&.Mui-expanded": { background: alpha(t.palette.primary.main, 0.04) },
        }),
      },
    },
    MuiLink: { defaultProps: { underline: "hover" }, styleOverrides: { root: { fontWeight: 500 } } },
    MuiTooltip: { defaultProps: { arrow: true } },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme: t }) => ({ borderColor: t.palette.divider, fontSize: "0.9125rem" }),
        head: { fontWeight: 700 },
      },
    },
  },
});

export default theme;
