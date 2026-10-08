"use client";

import { createTheme } from "@mui/material/styles";

/**
 * Light-theme roles from the product design system
 * (maestro-career-studio/docs/design-system/tokens.json, which mirrors
 * frontend/app/globals.css). Values are the sRGB of those oklch tokens.
 * `brandBlue` and `brandYellow` are for the mark only.
 */
export const ds = {
  background: "#F7F7F7",
  foreground: "#0A0A0A",
  card: "#FFFFFF",
  surfaceLow: "#F2F2F2",
  surface: "#EBEBEB",
  surfaceHigh: "#E7E7E7",
  mutedForeground: "#656565",
  border: "#E5E5E5",
  ring: "#4E77B8",
  primary: "#1358BB",
  primaryForeground: "#FAFAFA",
  primaryContainer: "#D1E3FF",
  onPrimaryContainer: "#053171",
  secondaryContainer: "#DEE7F5",
  onSecondaryContainer: "#25364F",
  success: "#0C6F4D",
  successContainer: "#C0F0D8",
  warning: "#81520A",
  warningContainer: "#FDDDB8",
  attention: "#9B4201",
  destructive: "#B21A1B",
  brandBlue: "#2563EB",
  brandYellow: "#FBBF24",
  /** Sticky bars. From shadow-level2 in the design system. */
  shadowFloat: "0 1px 2px 0 rgba(0,0,0,0.30), 0 2px 6px 2px rgba(0,0,0,0.15)",
} as const;

/** Mark colours, kept named so a UI fill is never invented from them. */
export const brand = {
  blue: ds.brandBlue,
  yellow: ds.brandYellow,
} as const;

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: { main: ds.primary, contrastText: ds.primaryForeground },
    secondary: { main: ds.secondaryContainer, contrastText: ds.onSecondaryContainer },
    warning: { main: ds.warning },
    success: { main: ds.success },
    error: { main: ds.destructive },
    background: { default: ds.background, paper: ds.card },
    text: { primary: ds.foreground, secondary: ds.mutedForeground },
    divider: ds.border,
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: "var(--font-geist), Geist, system-ui, sans-serif",
    h1: { fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.08 },
    h2: { fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.15 },
    h3: { fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.25 },
    h4: { fontSize: "1.125rem", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.35 },
    h5: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.4 },
    h6: { fontSize: "0.875rem", fontWeight: 500 },
    subtitle1: { fontSize: "1rem", lineHeight: 1.6 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.01em",
      lineHeight: 1.4,
      textTransform: "none",
    },
    button: { textTransform: "none", fontWeight: 500, letterSpacing: 0, fontSize: "0.875rem" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": { WebkitFontSmoothing: "antialiased" },
        "@media (prefers-reduced-motion: reduce)": {
          "*": { animationDuration: "0.01ms !important", transitionDuration: "0.01ms !important" },
        },
        "[id]": { scrollMarginTop: "88px" },
        code: { fontFamily: "var(--font-mono), 'Geist Mono', ui-monospace, monospace" },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "p",
          subtitle2: "p",
        },
      },
    },
    MuiContainer: { defaultProps: { maxWidth: "lg" } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          paddingInline: 16,
          paddingBlock: 6,
          minHeight: 32,
          "&:active": { transform: "scale(0.97)" },
          "&.Mui-focusVisible": { outline: `2px solid ${ds.ring}`, outlineOffset: 2 },
        },
        sizeSmall: { minHeight: 28, paddingInline: 12, fontSize: "0.75rem" },
        sizeLarge: { minHeight: 36, paddingInline: 18, paddingBlock: 8, fontSize: "0.875rem" },
        outlined: { borderColor: ds.border },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { "&.Mui-focusVisible": { outline: `2px solid ${ds.ring}`, outlineOffset: 2 } },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500, borderRadius: 999 },
        sizeSmall: { height: 24, fontSize: "0.75rem" },
        outlined: { borderColor: ds.border },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: "none", border: `1px solid ${ds.border}`, boxShadow: "none" },
        rounded: { borderRadius: 12 },
      },
    },
    MuiCard: { styleOverrides: { root: { borderRadius: 12, boxShadow: "none" } } },
    MuiAccordion: {
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          marginBottom: 8,
          "&::before": { display: "none" },
          "&.Mui-expanded": { background: ds.primaryContainer },
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
      styleOverrides: {
        root: {
          fontWeight: 500,
          "&.Mui-focusVisible": { outline: `2px solid ${ds.ring}`, outlineOffset: 2 },
        },
      },
    },
    MuiTooltip: { defaultProps: { arrow: true } },
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: ds.border, fontSize: "0.875rem" },
        head: { fontWeight: 500 },
      },
    },
  },
});

export default theme;
