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
  /** A neutral tint: icon tiles and step numbers. */
  tint: "var(--c-tint)",
  blue: "var(--c-blue)",
  blueTint: "var(--c-blue-tint)",
  blueInk: "var(--c-blue-ink)",
  /** The signal on light sections: a band (tint) with ink on it. Never text on light. */
  signal: "var(--c-signal)",
  signalTint: "var(--c-signal-tint)",
  signalInk: "var(--c-signal-ink)",
  navy: "var(--c-navy)",
  shadowFrame: "var(--c-shadow-frame)",
  shadowHero: "var(--c-shadow-hero)",
  shadowFloat: "var(--c-shadow-float)",
} as const;

/** The area colours. Tangerine stays defined but no area uses it now. */
export type Accent = "violet" | "tangerine" | "teal" | "blue" | "marigold";

/**
 * The colour code: each part of the product keeps one colour everywhere on the site
 * (the hero tiles, How it works, the feature cards, the chat), so a visitor learns it
 * once and reads the rest by colour. It follows the order a user meets them in.
 * Apply is marigold, the site's one signal colour, because Apply is where the user acts.
 */
export const area = {
  /** One career history: what you did. */
  history: "violet",
  /** Specialist resumes and their health: what you send. */
  resumes: "blue",
  /** The job, its Match score, its gaps and the diffs: matching. */
  tailor: "teal",
  /** The Companion and Submit: applying. */
  apply: "marigold",
} as const satisfies Record<string, Accent>;

/** Status roles (the Privacy page). Same solid / tint / ink shape. */
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

/** The stage: the dark desk every page opens on. Fixed in both schemes (globals.css). */
export const stage = {
  bg: "var(--stage-bg)",
  glow: "var(--stage-glow)",
  fg: "var(--stage-fg)",
  muted: "var(--stage-muted)",
  tile: "var(--stage-tile)",
  tileHover: "var(--stage-tile-hover)",
  line: "var(--stage-line)",
  blue: "var(--stage-blue)",
  green: "var(--stage-green)",
  red: "var(--stage-red)",
  violet: "var(--stage-violet)",
  tangerine: "var(--stage-tangerine)",
  teal: "var(--stage-teal)",
  marigold: "var(--stage-marigold)",
  /** The signal: highlighted headline words and thin edges. */
  signal: "var(--stage-signal)",
  /** The primary action: filled buttons only, one per screen. */
  action: "var(--stage-action)",
  actionHover: "var(--stage-action-hover)",
  /** Text and icons on the action fill. */
  actionFg: "var(--stage-action-fg)",
  actionGlow: "var(--stage-action-glow)",
  /** The desk itself: warm near-black, lit from above. */
  background: "radial-gradient(110% 80% at 50% -10%, var(--stage-glow) 0%, var(--stage-bg) 62%)",
} as const;

/**
 * The top bar's height: 62px, and 70px from md up. The bar is sticky and transparent
 * at the top, so each page's first stage section starts under it (see underBar).
 */
export const barHeight = { xs: 62, md: 70 } as const;

/**
 * For a page's first stage section: pull it up under the top bar so its light runs
 * behind the bar, and add the bar's height to its top padding. `pt` is in spacing units.
 */
export function underBar(pt: { xs: number; md: number }) {
  return {
    mt: { xs: `-${barHeight.xs}px`, md: `-${barHeight.md}px` },
    pt: { xs: `${barHeight.xs + pt.xs * 8}px`, md: `${barHeight.md + pt.md * 8}px` },
  };
}

/** Inside a stage section, focus rings take the signal instead of ink. */
export const stageScope = { "--c-ring": "var(--stage-signal)" } as const;

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
