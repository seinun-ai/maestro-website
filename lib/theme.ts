"use client";

import { createTheme } from "@mui/material/styles";
import { c, display, sans, weight } from "./tokens";

/**
 * MUI palette roles from the product design system (light) and the app's dark
 * theme (dark). With both schemes present MUI emits them as CSS variables
 * behind `prefers-color-scheme`, so there is no toggle and no flash. Colours
 * the site uses directly (accents, tints) live in app/globals.css instead.
 */
const light = {
  primary: { main: "#1358BB", contrastText: "#FAFAFA" },
  secondary: { main: "#DEE7F5", contrastText: "#25364F" },
  warning: { main: "#81520A" },
  success: { main: "#0C6F4D" },
  error: { main: "#B21A1B" },
  background: { default: "#F7F7F7", paper: "#FFFFFF" },
  text: { primary: "#0A0A0A", secondary: "#656565" },
  divider: "#E5E5E5",
};

const dark = {
  primary: { main: "#86B2F7", contrastText: "#08172E" },
  secondary: { main: "#2A3A52", contrastText: "#E3EAF5" },
  warning: { main: "#F3C27A" },
  success: { main: "#7FD6B0" },
  error: { main: "#F2A49B" },
  background: { default: "#0A0A0A", paper: "#171717" },
  text: { primary: "#FAFAFA", secondary: "#A8A8A8" },
  divider: "rgba(255,255,255,0.1)",
};

const theme = createTheme({
  cssVariables: { colorSchemeSelector: "media" },
  colorSchemes: { light: { palette: light }, dark: { palette: dark } },
  shape: { borderRadius: 8 },
  typography: {
    // Figtree throughout (Lavender Dusk): display and headings at 350, text at
    // 400, buttons and labels at 500, all at -0.025em. Geist Mono stays for code.
    fontFamily: sans,
    fontWeightLight: 300,
    fontWeightRegular: weight.text,
    fontWeightMedium: weight.label,
    fontWeightBold: weight.label,
    h1: { ...display, fontSize: "clamp(2.75rem, 6.6vw, 5.25rem)", lineHeight: 1.02 },
    h2: { ...display, fontSize: "clamp(2.125rem, 4.4vw, 3.5rem)", lineHeight: 1.06 },
    h3: { ...display, fontSize: "clamp(1.5rem, 2.3vw, 1.875rem)", lineHeight: 1.2 },
    h4: { fontSize: "1.1875rem", fontWeight: weight.text, letterSpacing: "-0.025em", lineHeight: 1.25 },
    h5: { fontSize: "1.0625rem", fontWeight: weight.text, letterSpacing: "-0.025em", lineHeight: 1.3 },
    h6: { fontSize: "0.9375rem", fontWeight: weight.text, letterSpacing: "-0.025em", lineHeight: 1.4 },
    subtitle1: { fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)", lineHeight: 1.55, letterSpacing: "-0.025em" },
    body1: { fontSize: "1.0625rem", lineHeight: 1.65, letterSpacing: "-0.025em" },
    body2: { fontSize: "0.9375rem", lineHeight: 1.6, letterSpacing: "-0.025em" },
    caption: { letterSpacing: "-0.025em" },
    overline: {
      fontFamily: "var(--font-mono), 'Geist Mono', ui-monospace, monospace",
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.1em",
      lineHeight: 1.4,
      textTransform: "uppercase",
    },
    button: { textTransform: "none", fontWeight: weight.label, letterSpacing: "-0.025em", fontSize: "0.9375rem" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": { WebkitFontSmoothing: "antialiased" },
        body: { backgroundColor: c.bg, color: c.fg, letterSpacing: "-0.025em" },
        "@media (prefers-reduced-motion: reduce)": {
          "*": { animationDuration: "0.01ms !important", transitionDuration: "0.01ms !important" },
        },
        "[id]": { scrollMarginTop: "88px" },
        code: { fontFamily: "var(--font-mono), 'Geist Mono', ui-monospace, monospace" },
      },
    },
    MuiTypography: {
      defaultProps: { variantMapping: { subtitle1: "p", subtitle2: "p" } },
    },
    MuiContainer: { defaultProps: { maxWidth: "lg" } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 18,
          paddingBlock: 7,
          minHeight: 36,
          "&:active": { transform: "scale(0.97)" },
          "&.Mui-focusVisible": { outline: `2px solid ${c.ring}`, outlineOffset: 2 },
        },
        sizeSmall: { minHeight: 32, paddingInline: 14, fontSize: "0.875rem" },
        sizeLarge: { minHeight: 48, paddingInline: 22, paddingBlock: 10, fontSize: "1rem", borderRadius: 12 },
        outlined: { borderColor: c.border, color: c.fg, backgroundColor: c.card },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { "&.Mui-focusVisible": { outline: `2px solid ${c.ring}`, outlineOffset: 2 } },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: weight.label, borderRadius: 999 },
        outlined: { borderColor: c.border },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: "none", border: `1px solid ${c.border}`, boxShadow: "none" },
        rounded: { borderRadius: 16 },
      },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true },
      styleOverrides: {
        root: {
          borderRadius: 16,
          marginBottom: 10,
          "&::before": { display: "none" },
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
      styleOverrides: {
        root: {
          fontWeight: weight.label,
          "&.Mui-focusVisible": { outline: `2px solid ${c.ring}`, outlineOffset: 2 },
        },
      },
    },
  },
});

export default theme;
