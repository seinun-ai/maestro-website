<p align="center">
  <img src="public/brand/maestro_lockup_light.svg" alt="Maestro Career Studio" width="420">
</p>

# maestro-website

The promo site for
**[Maestro Career Studio](https://github.com/seinun-ai/maestro-career-studio)**:
three pages (Home, Get started, Privacy) that sell the app and send readers to
GitHub for the detail.

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

## Deploying

The production domain is **maestrocareerstudio.com**, registered at Spaceship
(auto-renew on, expires 2027-08-24).

**Set the origin before the production build.** `metadataBase`, every canonical
URL, the Open Graph tags, `sitemap.xml` and `robots.txt` all derive from it:

```bash
NEXT_PUBLIC_SITE_URL=https://maestrocareerstudio.com
```

Set it in the host's environment variables, not just `.env.example`. With the
fallback origin the `og:image` URL points at a domain that doesn't exist, and
LinkedIn renders a bare text link instead of the preview card.

Verify after any build:

```bash
grep -o 'og:image" content="[^"]*"' .next/server/app/index.html
cat .next/server/app/robots.txt.body
```

### Vercel, once

1. vercel.com → **Add New… → Project** → import `seinun-ai/maestro-website`.
   Next.js is detected; no build settings to change.
2. **Settings → Environment Variables**, Production:
   `NEXT_PUBLIC_SITE_URL = https://maestrocareerstudio.com`.
   Add it *before* the first production build, or redeploy after.
3. **Settings → Domains** → add `maestrocareerstudio.com` and `www.maestrocareerstudio.com`,
   keeping one as a redirect to the other.
4. Add the DNS records below at Spaceship, then let Vercel issue the certificate.

Every push to `main` redeploys.

### DNS at Spaceship

Spaceship holds the nameservers, so the records go in its DNS editor. For Vercel:

| Type | Host | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Confirm both against the host's current docs at setup time — these values do
change. Then add the domain in the host's dashboard so it can issue the
certificate, and let it redirect `www` to the apex (or the reverse; just pick one
and keep the other a redirect, so there is a single canonical origin).

### After the domain is live, before posting

LinkedIn caches Open Graph data hard, and a preview scraped before the site is up
will stick. Run the URL through **LinkedIn Post Inspector** to force a re-scrape,
and check the card renders. The image it uses is `public/brand/social-preview.png`
(1280x640).

## How it is organised

```
content/site.ts     ALL marketing copy and every number, in one typed module
app/globals.css     the colour tokens, light and dark, as CSS custom properties
lib/tokens.ts       named handles on those tokens, the accents and the display type
lib/theme.ts        the MUI theme: palette per colour scheme, type scale
lib/media.ts        intrinsic sizes of the product captures (no layout shift)
components/         the site's own vocabulary: Section, Highlight, ShotFrame, SpecPill, …
app/                one file per route; each exports its own `metadata`
public/media/       product captures and the hero loop
public/brand/       the brand package (lockups, marks, social preview)
```

**Three pages.** Home (one scroll: hero, premise, how it works, what you get,
your AI, three numbers, it's yours, FAQ, call to action), Get started and
Privacy. `/privacy` is the published privacy-policy URL for store listings, so it
stays. The retired pages (`/why`, `/features`, `/guide`, `/models`, `/agents`)
are permanent redirects in `next.config.ts` to the home section that replaced
them.

**Copy lives in `content/site.ts`, not in JSX.** Every claim on the site is
traceable to the product repo's `README.md`, `SYSTEM.md` or `KNOWN_ISSUES.md`; when
a number changes there (tool count, test count, cost figures), it changes in that
one file here. Pages read from it and never restate a figure inline.

Two rules that file's header states and this one repeats, because getting either
wrong makes the site lie:

1. **Positioning is bring-a-key.** One OpenAI, Gemini *or* Claude key is the
   recommended setup. OpenRouter and custom servers are left to the app's docs.
   "No key" is two honest tiers: the deterministic core always works, and
   over MCP the client agent supplies the model. Local model servers are
   *configurable but untested* — never write "fully offline" anywhere.
2. **Costs are cited as "about a penny" (OpenAI default) / "under 3¢" (Gemini)
   / "about a penny" with Claude Haiku, with "in our tests" and never a sample
   count.** Claude has no measured speed or extraction figures. The site shows
   three headline numbers (under a minute, about a penny, same score every
   time) and the tool count once; cost tables and benchmarks live in the app's
   docs.
3. **Vocabulary is the app's:** Match score (never "ATS score"), Career history,
   Jobs, Agent inbox, Assistant, Settings › AI & models, the Companion.
4. **Submitting:** "The Companion fills the form and stops. You press Submit."
   The opt-in Full automation is stated once on the home page (Your AI) and in
   the FAQ. Never write a product-wide "never auto-submits".

**Voice.** Short sentences, concrete nouns, second person. No em-dash pile-ups, no
"not X but Y" scaffolding, no throat-clearing. If a sentence has three clauses and
two dashes, it is not finished.

## Design notes

- **The look shares the README hero GIF's colours** (`hero-gif/` in the private
  marketing repo). Headlines and section titles are Inter Tight 800, tracking
  about -0.035em (the GIF's Bricolage read as too playful at page scale); body
  and UI stay Geist. One key phrase per headline is set in app blue `#1358bb`,
  with no highlight band: write it as `[phrase]` in `content/site.ts` and
  `<Highlight>` renders it.
- **Three specialist colours** colour-code the how-it-works steps and the feature
  cards, each as solid / tint / on-tint: Violet `#9964e5` / `#eee7ff` /
  `#53347e`, Tangerine `#d16100` / `#ffe5d8` / `#723302`, Teal `#0c9999` /
  `#c9f5f4` / `#015353`. The solid is an edge, an outline or an icon; text in an
  accent sits only on its own tint. App blue stays the action and link colour.
- **Brand mark colours are locked** (`docs/assets/brand/brand-tokens.json` in the
  product repo): blue `#2563EB`, yellow `#FBBF24`, navy `#0F172A`. They are for
  the mark only; do not invent new brand colours here.
- **Light first, dark by preference.** Every colour is a CSS custom property in
  `app/globals.css` with a dark value behind `prefers-color-scheme`, and the MUI
  theme carries both schemes (`colorSchemeSelector: "media"`). There is no toggle
  and no script: the reader's system setting decides. Server components use the
  tokens as plain strings (`c.blue`, `accent("teal").tint`), so no theme callback
  has to cross into a client module.
- **Captures sit in rounded frames with a coloured top edge**, like the GIF's
  resume pages. No fake browser chrome.
- **Motion is decoration.** `Reveal` fades content in on first entry and starts
  visible whenever `IntersectionObserver` is missing or the user prefers reduced
  motion.

## MUI v9 gotchas worth knowing before editing

Both bit during the build and are easy to reintroduce:

1. **System props were removed from `Stack`, `Grid`, `Box` and `Typography`.**
   `alignItems`, `justifyContent` and `order` go inside `sx`, not on the element.
2. **A theme callback cannot cross the server → client boundary.** `sx={(t) => …}`
   written in a server component throws at prerender, as does
   `component={NextLink}`. Colours come from the CSS-variable tokens instead of
   the theme, and internal links go through `components/NextMui.tsx`, a client
   module that owns the binding once. Pages stay server components so they can
   export `metadata`.

## Captures

The stills and the Companion GIF in `public/media/` are v0.10.1 captures of the
fictional persona "Jordan Ellis", made on a throwaway stack and kept in the
private marketing repo (`site-media/`, whose `MANIFEST.md` says what each file
shows and which numbers are on screen). Re-copy from there rather than
re-recording, and keep `lib/media.ts` in step with any change in pixel
dimensions. An animated GIF has a still in `gifStill` that readers who prefer
reduced motion see instead (`extension.gif` falls back to `companion.png`).

Each feature card crops its capture to 7:4 from the top, so cards side by side
line up. `lib/media.ts` marks every capture still waiting on a v0.10.1 recapture
with `TODO(capture)`.

One exception:

- **`hero.mp4`** is *not* from `docs/assets/`. It is the product repo's hero
  animation (`hero.gif`, a short loop built from real v0.10.1 captures of a
  made-up persona, "Jordan Ellis"), encoded from its 1080p master in the private
  marketing repo (`hero-gif/renders/hero-1080p.mp4`) to H.264 at 1512px / 30fps,
  silent, about 1.2 MB. The first and last frames match, so it loops without a
  jump. Its caption says it is an animation, not a recording of one real run.
  With reduced motion it does not autoplay; it shows its poster and controls.

### Re-encoding a master

```bash
ffmpeg -i master.mov -t <seconds> \
  -vf "scale=1512:-2:flags=lanczos,fps=30" -an \
  -c:v libx264 -profile:v high -crf 26 -preset slow \
  -pix_fmt yuv420p -movflags +faststart public/media/<name>.mp4
ffmpeg -ss 0.3 -i public/media/<name>.mp4 -frames:v 1 -q:v 3 public/media/<name>-poster.jpg
```

Then add the output's pixel size to `mediaSize` and its poster to `videoPoster`
in `lib/media.ts`; `ShotFrame` switches to `<video>` on the file extension alone.

> **Review every frame of a master before publishing it.** The `docs/assets/`
> GIFs went through a publication review; the `.mov` masters did not, and they
> are not always the same take. `extention_quicktailor.mov` is a different,
> **unscrubbed** recording whose rendered-PDF preview shows a real phone number
> and a personal email from ~28.5s — which is why the extension capture on this
> site is still the cleared GIF.

## Licence

Apache-2.0, matching the product. See the
[product repository](https://github.com/seinun-ai/maestro-career-studio) for the
full text and `NOTICE`.

The headline font, Inter Tight, is under the SIL Open Font License 1.1 and is
self-hosted at build time by `next/font/google`.
