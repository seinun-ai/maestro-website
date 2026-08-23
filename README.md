<p align="center">
  <img src="public/brand/maestro_lockup_light.svg" alt="Maestro Career Studio" width="420">
</p>

# maestro-website

The marketing and product-knowledge site for
**[Maestro Career Studio](https://github.com/seinun-ai/maestro-career-studio)** — a
local-first, evidence-backed job-application studio.

Next.js 16 (App Router) · React 19 · **Material UI v9** · TypeScript · fully static.

---

## Run it

```bash
npm install
npm run dev     # http://localhost:3100
```

```bash
npm run build && npm start
```

Every route prerenders to static HTML, so the built output drops onto any static
host or CDN. There is no API, no database, and no runtime environment beyond the
one variable below.

## Before deploying

Set the canonical origin — `metadataBase`, Open Graph URLs, `sitemap.xml` and
`robots.txt` all derive from it:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Without it the site falls back to a placeholder origin, which is fine locally and
wrong in production.

## How it is organised

```
content/site.ts     ALL marketing copy and every number, in one typed module
lib/theme.ts        the MUI theme: brand tokens, tonal ladder, type scale
lib/media.ts        intrinsic sizes of the product captures (no layout shift)
components/         the site's own vocabulary — Section, ShotFrame, FeatureRow, …
app/                one file per route; each exports its own `metadata`
public/media/       product screenshots and GIFs, copied from the product repo
public/brand/       the brand package (lockups, marks, social preview)
```

**Copy lives in `content/site.ts`, not in JSX.** Every claim on the site is
traceable to the product repo's `README.md`, `SYSTEM.md` or `KNOWN_ISSUES.md`; when
a number changes there (tool count, test count, tool profiles), it changes in that
one file here. Pages read from it and never restate a figure inline.

## Design notes

- **Brand tokens are locked** (`docs/assets/brand/brand-tokens.json` in the product
  repo): blue `#2563EB`, yellow `#FBBF24`, navy `#0F172A`. `lib/theme.ts` mirrors
  them; do not invent new brand colours here.
- **The tonal ladder matches the app** — the page sits *below* the card, so
  containment reads as tone rather than as a hairline border. Light and dark are
  both first-class, and the toggle writes the colour-scheme class before hydration
  so there is no flash.
- **The window chrome around each capture is deliberately quiet** — three dots and
  a hairline. It says "this is the real app" without competing with it.
- **Motion is decoration.** `Reveal` fades content in on first entry and starts
  visible whenever `IntersectionObserver` is missing or the user prefers reduced
  motion.

## MUI v9 gotchas worth knowing before editing

Both bit during the build and are easy to reintroduce:

1. **System props were removed from `Stack`, `Grid`, `Box` and `Typography`.**
   `alignItems`, `justifyContent` and `order` go inside `sx`, not on the element.
2. **A theme callback cannot cross the server → client boundary.** `sx={(t) => …}`
   written in a server component throws at prerender, as does
   `component={NextLink}`. Tinted surfaces live in `components/Surfaces.tsx` and
   internal links go through `components/NextMui.tsx`; both are client modules that
   own the binding once. Pages stay server components so they can export `metadata`.

## Captures

The screenshots and GIFs in `public/media/` are copied from the product repo's
`docs/assets/`. They are real captures of the shipped app, already reviewed and
cleared for publication there — re-copy them rather than re-recording, and keep
`lib/media.ts` in step with any change in pixel dimensions.

`kb-onboarding.png` is the one exception: the copy here is cropped to remove the
black letterbox bars the original capture carries, which read as a rendering fault
inside the site's window chrome.

## Licence

Apache-2.0, matching the product. See the
[product repository](https://github.com/seinun-ai/maestro-career-studio) for the
full text and `NOTICE`.
