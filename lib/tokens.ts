/**
 * Named handles on the colour tokens in app/globals.css. They are plain
 * strings, so server components can pass them straight into `sx`, and they
 * flip with the reader's light or dark preference without a theme callback.
 */
export const c = {
  bg: "var(--c-bg)",
  card: "var(--c-card)",
  raised: "var(--c-raised)",
  fg: "var(--c-fg)",
  muted: "var(--c-muted)",
  border: "var(--c-border)",
  ring: "var(--c-ring)",
  blue: "var(--c-blue)",
  blueTint: "var(--c-blue-tint)",
  blueInk: "var(--c-blue-ink)",
  navy: "var(--c-navy)",
  shadowFrame: "var(--c-shadow-frame)",
  shadowHero: "var(--c-shadow-hero)",
  shadowFloat: "var(--c-shadow-float)",
} as const;

/** The three specialist colours from the hero GIF, plus app blue. */
export type Accent = "violet" | "tangerine" | "teal" | "blue";

/** Status roles, used on the Privacy page only. Same solid / tint / ink shape. */
export type Status = "warning" | "success";

export function accent(a: Accent | Status) {
  return {
    /** Edges, outlines and icons only. */
    solid: `var(--c-${a})`,
    /** Fills: pills, backdrops behind captures. */
    tint: `var(--c-${a}-tint)`,
    /** Text that sits on the tint. */
    ink: `var(--c-${a}-ink)`,
  };
}

/** Inter Tight 800, tight: headlines and section titles. */
export const display = {
  fontFamily: "var(--font-display), 'Inter Tight', var(--font-geist), system-ui, sans-serif",
  fontWeight: 800,
  letterSpacing: "-0.035em",
  // Headlines break into even lines instead of leaving one word behind.
  textWrap: "balance",
} as const;
