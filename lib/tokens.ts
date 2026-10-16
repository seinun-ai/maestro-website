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

/** The text face everywhere: Figtree, the owner's "Lavender Dusk" typeface. */
export const sans = "var(--font-figtree), Figtree, system-ui, sans-serif";

/**
 * Text weights. Lavender Dusk keeps text at 400 or lighter; buttons and labels
 * (nav, pills, links, the prompt bubbles) take 500 so they still read as UI.
 */
export const weight = { display: 350, text: 400, label: 500 } as const;

/** Figtree 350, whisper-light: headlines and section titles. */
export const display = {
  fontFamily: sans,
  fontWeight: weight.display,
  letterSpacing: "-0.025em",
  // Headlines break into even lines instead of leaving one word behind.
  textWrap: "balance",
} as const;
