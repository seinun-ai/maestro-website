/**
 * Every claim on this site is traceable to the product repo (README.md,
 * SYSTEM.md, KNOWN_ISSUES.md, docs/reports/2026-08-11-launch-content-kit.md).
 * If a number changes there, change it here — this is the only place any of
 * them are written down.
 *
 * Positioning (owner's call, 2026-08-23): the recommended setup is BRING A KEY.
 * "No key" is two honest tiers — the deterministic core always works, and over
 * MCP the client agent supplies the model. Local model servers are
 * "configurable but untested"; never claim "fully offline" anywhere.
 */

export const site = {
  name: "Maestro Career Studio",
  short: "Maestro CS",
  tagline: "A local-first, evidence-backed job-application studio.",
  description:
    "Turn everything you have done into one structured career record, then assemble every tailored resume, cover letter and screening answer from it — locally, deterministically, with a diff of every AI edit. About a penny per application.",
  repo: "https://github.com/seinun-ai/maestro-career-studio",
  issues: "https://github.com/seinun-ai/maestro-career-studio/issues",
  contact: "ajey@seinun.com",
  license: "Apache-2.0",
  author: "Ajey Dhayashanker Loganathan",
  // Set NEXT_PUBLIC_SITE_URL at build time before deploying — canonical URLs,
  // Open Graph images, sitemap.xml and robots.txt all derive from it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maestro-career-studio.example",
} as const;

export const nav = [
  { label: "Why", href: "/why" },
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Agents & MCP", href: "/agents" },
  { label: "Privacy", href: "/privacy" },
  { label: "Get started", href: "/start" },
] as const;

export const hero = {
  eyebrow: "Apache-2.0 · runs on your machine · no account",
  title: "Stop rewriting.\nStart compounding.",
  lede: "Maestro Career Studio records what you actually did — once. Every resume, cover letter and screening answer after that is assembled from that record, scored by an engine that never guesses, and typeset locally into a real PDF. About a penny per application.",
  primaryCta: { label: "Get started", href: "/start" },
  secondaryCta: { label: "Why you'd want this", href: "/why" },
  mediaAlt: "Score a job description, tailor the resume, review the diff of every AI edit, and render a typeset PDF — end to end",
  mediaCaption:
    "Recorded end to end on a real instance: a base score of 49.2 lifted to 70.8, every AI edit shown as a reviewable diff, and a typeset PDF at the end.",
} as const;

export const heroStats = [
  {
    value: "≈1¢",
    label: "per tailored application",
    detail: "Measured with Langfuse on real postings at list prices — not estimated.",
    accent: true,
  },
  {
    value: "83",
    label: "MCP tools",
    detail: "Drive the whole pipeline from Claude, Codex or the ChatGPT desktop app.",
  },
  {
    value: "3",
    label: "local containers",
    detail: "Every port binds to 127.0.0.1. No account, no server holding your history.",
  },
  {
    value: "4,023",
    label: "tests passing",
    detail: "Determinism and cross-engine render parity are enforced, not eyeballed.",
  },
] as const;

/* ------------------------------------------------------------------ *
 * The "why" — the owner's pain-point hooks, each paired with the
 * feature that answers it. Order is deliberate: the pains people feel
 * most often come first.
 * ------------------------------------------------------------------ */

export const whyIntro = {
  eyebrow: "Why you'd want this",
  title: "You already know these feelings.",
  lede: "Every one of them is a real, specific part of a job search that software should have solved by now. Here is the pain, and here is exactly what answers it.",
} as const;

export const painPoints = [
  {
    pain: "You hate that resume tailoring is a slot machine.",
    answer: "A score that never guesses.",
    body: "Most checkers ask an LLM and get a different number every run — the same resume has scored 66–99 across 100 runs on a popular one. Maestro's ATS engine has no LLM anywhere in the scoring path. Same resume, same posting, same config: identical score and identical breakdown, every time.",
    feature: "Deterministic ATS engine",
    href: "/features#scoring",
  },
  {
    pain: "Your folder is a graveyard of resume_v2_FINAL(3).docx.",
    answer: "Version history, not a folder of copies.",
    body: "Somewhere in that pile is the old resume with the one great bullet, and no way to tell which file it is. Here there is no pile: every write path — a manual edit, a chat edit, a tailoring run, even a restore — records an append-only resume version. Diff any two, restore any one. Old variants are archived, not deleted.",
    feature: "Resume versions",
    href: "/features#versions",
  },
  {
    pain: "You are not sure your resume is even good enough to send.",
    answer: "A grade, and what each flaw costs you.",
    body: "A gap needs a job description. A Health Report does not — it is the job-independent check on one resume: parseability, dates, evidence quality, format gates, with a letter grade and a fix list ranked by impact. A failing fatal gate blocks tailoring outright, because tailoring reorders a healthy document and cannot repair a broken one.",
    feature: "Health Report",
    href: "/features#health",
  },
  {
    pain: "LaTeX looks great and is miserable to edit — tailoring one, unthinkable.",
    answer: "LaTeX quality without LaTeX editing.",
    body: "You edit content in a structured editor: a bullet is a bullet, never a paragraph you re-indent or a .tex line you hand-patch. Layout stays the template's job. Changing a word is easier than in a Word doc and can never break the formatting.",
    feature: "Structured editing",
    href: "/features#templates",
  },
  {
    pain: "How many resume templates have you changed in your lifetime?",
    answer: "One or two. Here it's a button.",
    body: "In a Word file or a hand-written .tex, a redesign means rebuilding the document, so nobody does it. A template here owns presentation and nothing else, layered under per-resume and per-application overrides — so the same content renders through any design without being touched. Switching stops being a life decision and becomes a matter of taste.",
    feature: "Templates",
    href: "/features#templates",
  },
  {
    pain: "You answer the same screening questions for the fourth time.",
    answer: "Answer once. Reuse forever.",
    body: "Screening answers and cover letters generate from your Career KB and your saved answers, and the browser extension fills application forms from your Autofill Profile — grounded in the actual application, not a static clipboard. Credentials, signatures, consent checkboxes and government IDs sit on a deny-list and stay human-only, always.",
    feature: "Q&A and autofill",
    href: "/features#extension",
  },
  {
    pain: "You do the work; you never find time to write it down.",
    answer: "Drop the raw material in. It becomes structure.",
    body: "Add every resume variant you have, plus project write-ups, certifications and performance-review notes. Entity resolution, deduplication, bullet clustering and profile synthesis turn the pile into one Career Knowledge Base — your verified history in a form everything downstream composes from.",
    feature: "Career KB",
    href: "/features#career-kb",
  },
  {
    pain: "You don't actually know what the market wants for your roles.",
    answer: "Your own postings, quantified.",
    body: "Every job you capture builds a picture of the market you are really applying into: top skills, a skill heatmap, role mix over time. Gaps & growth classifies each gap as missing, already in your KB, or already on a resume — so frequent-and-missing is your next thing to learn, and frequent-but-in-your-KB is something you have and keep forgetting to say.",
    feature: "Analytics & gap analysis",
    href: "/features#analytics",
  },
  {
    pain: "You re-explain how you want to sound in every single prompt.",
    answer: "Say it once. It sticks.",
    body: "A persona is durable context about you as a candidate — vision, strengths, goals, working style, how your writing should read. Set it once (or have it drafted from your KB and approve it) and every generated document is written in that voice. It shapes tone and emphasis only; it is never a source of new factual claims.",
    feature: "Persona",
    href: "/features#persona",
  },
  {
    pain: "You are tired of searching for jobs at all.",
    answer: "Send the assistant you already use.",
    body: "The MCP server hands your agent a composed brief — your stated preferences, your work-authorization answers verbatim, and the guardrails you configured — so a Claude or Codex session finds postings on whatever boards it can read, captures them, scores them against your bases and hands back a ranked shortlist. No board integration to be locked into, no scraper to break.",
    feature: "Hunt over MCP",
    href: "/agents",
  },
  {
    pain: "You wish the form-filler knew everything your resume knows.",
    answer: "It does — per application.",
    body: "The extension fills from your Autofill Profile and grounds its answers in the specific application in front of it, not a generic saved blob. Its telemetry records which fields it met and whether they filled — and structurally cannot store a value you typed, because the models have no value column.",
    feature: "AI-grounded autofill",
    href: "/features#extension",
  },
] as const;

export const whyClose = {
  title: "And the day you stop using it, you still have everything.",
  body: "Your Career KB exports to one deterministic career.md — no model involved, readable and diffable. Your resumes are JSON on your disk. Every render is filed in its own company-and-role-named folder with the source and the exact PDF you sent. Nothing about leaving is engineered to be difficult, because nothing here was ever monetized by making it so.",
  kicker: "All you have here is control.",
} as const;

/* ------------------------------------------------------------------ */

export const problem = {
  eyebrow: "The premise",
  title: "Your effort should compound. Right now it evaporates.",
  body: [
    "A resume rebuilt from scratch for each role. A cover letter written again from memory. The same “tell us about a time you…” answered for the fourth time. None of that effort carries forward — you start from zero on the next posting, and the one after that.",
    "The 2026 reality makes it worse: the average opening draws around 240 applications, and employers increasingly filter for resumes that read as machine-written. Volume is not the lever. Depth per application is — and depth is only affordable if the work you did last time is still there when you come back.",
  ],
  pull: "Record it once. Assemble it forever.",
} as const;

export const pillars = [
  {
    icon: "determinism",
    title: "Deterministic scoring, no LLM in the loop",
    body: "The ATS engine blends lexical layers — keyword coverage, section placement, recency weights, title matches, experience gates, format linting — with a pinned embedding model running offline on CPU. Same resume, same job, same config: byte-identical 0–100 score and breakdown, every time.",
    proof: "Popular LLM-judged checkers scored one resume 66–99 across 100 runs.",
  },
  {
    icon: "evidence",
    title: "Evidence, not invention",
    body: "Resumes compose from approved points in your Career Knowledge Base, verbatim. Rewriting a bullet is a separate step that asks you first, and a keyword with no evidence behind it can only ever land in your skills list — never as an invented experience bullet.",
    proof: "Every edit records a resume version. Nothing is lost, nothing is one-way.",
  },
  {
    icon: "ownership",
    title: "It leaves with you",
    body: "Apache-2.0, no account, no subscription, no usage tier — you pay only for the model tokens you choose to spend. Your KB exports to a single career.md you can read and diff. Every render lands in a company-and-role-named folder holding the source and the exact PDF you sent.",
    proof: "About a penny per application, against $15–75 a month for hosted tools.",
  },
] as const;

/* ---------------------------- economics ---------------------------- */

export const economics = {
  eyebrow: "What it costs",
  title: "About a penny per application. Measured, not estimated.",
  lede: "We traced real applications end to end with Langfuse (August 2026) on the default model profile, costed at list price. Your payloads and retries will vary somewhat — but not by an order of magnitude.",
  rows: [
    { op: "JD extraction", tokens: "~3k / ~1.5k", cost: "~¼¢" },
    { op: "Gap enrichment", tokens: "~7k / ~3k", cost: "~½¢" },
    { op: "Tailoring pass", tokens: "~11k / ~0.6k", cost: "~¼¢" },
    { op: "Cover letter + screening answers", tokens: "~8k / ~0.9k", cost: "~¼¢" },
    { op: "Career KB consolidation, per imported resume (one-time)", tokens: "~7k / ~1.5k", cost: "~⅓¢" },
  ],
  total: { op: "Capture → tailored resume → full apply package", cost: "≈1.3¢" },
  headline: {
    stat: "under $2",
    body: "My entire search to date — daily use, every feature — has cost under two dollars in tokens. That is what token-metered means against the $15–75 a month the hosted tools charge.",
  },
  note: "Costed against GPT-5.6 Luna at $0.20/M input · $1.20/M output.",
} as const;

export const modelProfiles = {
  eyebrow: "Choose your models",
  title: "One key. Two measured profiles.",
  lede: "We benchmarked the combinations on real postings with every call traced, and the result was clearer than expected: the Fast tier decides almost everything — how much of a posting gets extracted, how honest your base score is, and most of the wall-clock — while the Smart-tier choice barely moved the outcome. So the decision collapses to two profiles, one per API key.",
  columns: [
    {
      name: "Thorough",
      badge: "the default",
      model: "gpt-5.6-luna",
      key: "OpenAI",
      extraction: "The most complete extraction we measured",
      speed: "~40 seconds",
      cost: "about a penny",
      costNote: "per application",
      hallucinations: "zero measured",
      recommended: true,
    },
    {
      name: "Snappy",
      badge: "when speed wins",
      model: "gemini-3.7-flash",
      key: "Gemini",
      extraction: "~¾ of that, strongest on named tools",
      speed: "~10 seconds",
      cost: "under 3¢",
      costNote: "Gemini promo pricing doubles Jan 2027",
      hallucinations: "zero measured",
      recommended: false,
    },
  ],
  why: "Thorough is the default because honest scoring starts at extraction: a fast model that misses requirements quietly inflates your fit score — in our tests, by around nine points. Mixing tiers across providers is fully supported; in our tests it bought nothing these two profiles don't already give you.",
} as const;

/* ------------------------------ steps ------------------------------ */

export const steps = [
  {
    n: "01",
    title: "Feed the Career KB — once",
    summary: "Drop in every resume variant you have. Old ones, role-specific ones, the too-long one.",
    body: "Maestro CS resolves duplicate entities across them, clusters bullets, and builds one structured Career Knowledge Base: your verified history in a form the rest of the system can compose from. This is the step that pays off repeatedly — the KB's quality is the ceiling on everything downstream.",
    note: "Imported points arrive needing approval. Only approved points compose into a resume, so fixing a duplicate once fixes every future application.",
    image: "/media/kb-onboarding.png",
    imageAlt: "The Career KB import dialog consolidating several resume variants into one knowledge base",
  },
  {
    n: "02",
    title: "Build a base resume per track",
    summary: "One base per track you actually target — not one per job.",
    body: "“New base resume → From Career KB” proposes which entries belong and gives a reason for each one it leaves off, plus a drafted summary. The optional instruction box steers shape, not facts: “lead with pipeline and cloud work, keep it mid-level, leave off teaching.”",
    note: "Bullets are never rewritten at this step. Approved KB points compose verbatim — that is what keeps a generated resume defensible.",
    image: "/media/base-resume.png",
    imageAlt: "The base resume studio with its health grade and a live typeset preview",
  },
  {
    n: "03",
    title: "Capture the job, and pre-scan it",
    summary: "Paste the JD, or grab it with the browser extension from the board you are already reading.",
    body: "Score it against your bases with the deterministic engine. Every capture also gets a knock-out pre-scan: the posting's stated requirements — work authorization, OPT policy, salary, years of experience — checked against your profile before you spend any effort on it.",
    note: "Mismatches are said out loud here, rather than discovered at the screening call.",
    image: "/media/job-overview.png",
    imageAlt: "A captured job with its extracted fields and a knock-out pre-scan of the stated requirements",
  },
  {
    n: "04",
    title: "Work the gaps — don't accept a rewrite",
    summary: "A gap names a requirement your resume does not evidence yet.",
    body: "The workflow asks targeted questions to surface things that are true but unwritten. Closing one either produces new evidence — which then belongs to you permanently, in the KB — or it stays a gap. That is the difference between tailoring and drifting.",
    note: "Already know the answer? Quick Tailor runs the same honesty rules in one request, with no session to open.",
    image: "/media/kb-import.png",
    imageAlt: "Importing KB evidence into a resume, with the drawer showing what is already present",
  },
  {
    n: "05",
    title: "Render, read it, and track it",
    summary: "Cover letter, screening answers, and a real LaTeX or Typst PDF compiled on your machine.",
    body: "Read the output before it goes anywhere — this is your name on it. Then the tracker carries the application from Saved to Accepted, with inline status, provenance filters for what you did versus what an agent did, and every render filed on disk.",
    note: "The diff of every AI edit is per-hunk and revertible, so “what changed” is never a guess.",
    image: "/media/applications.png",
    imageAlt: "The application tracker, from saved jobs through to signed offers",
  },
] as const;

/* ---------------------------- features ----------------------------- */

export const features = [
  {
    id: "career-kb",
    eyebrow: "The record",
    title: "A Career KB that actually resolves your history",
    body: "Add multiple resume variants and startup consolidation performs entity resolution, deduplication, bullet clustering and profile synthesis into one structured record of your work, projects and skills. Certifications, project write-ups and performance-review notes belong in here too — anything true about your work is usable evidence later.",
    bullets: [
      "Approved points compose verbatim into base resumes and applications",
      "Every point keeps its provenance back to the document it came from",
      "Seeding defers cleanly with no API key and retries on a later boot",
    ],
    image: "/media/kb-onboarding.png",
    imageAlt: "Career KB onboarding: drop in your resumes, get a knowledge base",
  },
  {
    id: "scoring",
    eyebrow: "The measurement",
    title: "Deterministic ATS scoring, and a measured tailoring lift",
    body: "A hybrid engine: deterministic lexical layers plus a pinned local embedding model for semantics. Anchored soft-matching requires both an overlapping lexical anchor and embedding proximity, so it credits genuine synonyms — “container orchestration” against Kubernetes — without hallucinating unearned skills.",
    bullets: [
      "Same resume, JD and config version → identical score and breakdown, always",
      "Base → tailored delta recorded per application, so you can see if tailoring did anything",
      "Runs entirely offline on CPU — scoring never calls a model",
    ],
    image: "/media/job-overview.png",
    imageAlt: "A job overview with the deterministic score breakdown and knock-out pre-scan",
  },
  {
    id: "health",
    eyebrow: "The pre-flight",
    title: "Health Report — is this document sound at all?",
    body: "A gap needs a job. A Health Report does not: it is the job-independent check on one resume — parseability, dates, evidence quality, format gates — with a letter grade and a fix list ranked by what each defect actually costs you.",
    bullets: [
      "A failing fatal gate blocks tailoring outright",
      "Tailoring reorders an already-healthy document; it cannot repair a broken one",
      "Overrule a finding deliberately, with your reason on the record",
    ],
    image: "/media/health-report.png",
    imageAlt: "A job-independent resume health grade with the cost of each defect",
  },
  {
    id: "templates",
    eyebrow: "The output",
    title: "Real typesetting — without the typesetting headache",
    body: "Two engines compiled locally: LaTeX (pdflatex) and Typst. You edit content in a structured editor and the layout stays the template's job, so changing a word can never break the formatting. A template owns presentation and nothing else, which is why switching one never touches your content.",
    bullets: [
      "Changing your design is a button, not a rebuild of the document",
      "Start from a bundled design, adapt one you found, or write your own in the editor",
      "Validation compiles a sample PDF and runs a parse-certification gate, so a design that would break an ATS parser never reaches “ready”",
    ],
    image: "/media/templates.png",
    imageAlt: "The template gallery, with LaTeX and Typst designs compiled locally",
  },
  {
    id: "extension",
    eyebrow: "The capture",
    title: "A browser extension that never stores what you typed",
    body: "A floating in-page widget: capture a posting from the board you are already reading, score it against every base resume, tailor on the go, and fill application forms from your Autofill Profile. Its telemetry records which fields it met and whether they filled — label, kind, rule, outcome, host — and structurally cannot store a value you typed, because the models have no value column.",
    bullets: [
      "Zero-config install — the extension pins its identity, so the backend already allowlists it",
      "Signatures, attestations, consent checkboxes, credentials and government IDs sit on a deny-list — never filled, never shown to a model",
      "It posts only to your own backend on localhost — there is no collector at the other end",
    ],
    image: "/media/extension.gif",
    imageAlt: "The extension widget capturing a job posting and scoring it against four base resumes",
  },
  {
    id: "analytics",
    eyebrow: "The feedback loop",
    title: "Analytics: what the market keeps asking you for",
    body: "Every captured job builds a picture of the market you are actually applying into — top skills, a skill heatmap, role mix over time — filterable by role category, seniority and employment type.",
    bullets: [
      "Gaps & growth classifies each gap as missing, already in your KB, or already on a resume",
      "Frequent and missing is the next thing worth learning",
      "Frequent and already in your KB is something you have and keep forgetting to say",
    ],
    image: "/media/analytics.png",
    imageAlt: "Analytics dashboards quantifying the market you are applying into",
  },
] as const;

/** Smaller capabilities that deserve a line but not a full capture. */
export const featureExtras = [
  {
    id: "versions",
    title: "No more resume_v2_FINAL(3).docx",
    body: "Every write path — a manual edit, a chat edit, a tailoring run, even a restore — records an append-only resume version. Diff two, restore one; nothing is ever lost and nothing is one-way. Old variants you no longer target are archived, not deleted, and still there when an unusual role calls for one.",
  },
  {
    id: "persona",
    title: "Tell it how you sound — once",
    body: "A persona is durable context about you as a candidate: vision, strengths, goals, working style, how your writing should read. Set it once and every generated document is written in that voice, instead of you re-explaining it in every prompt. It shapes tone and emphasis only — never facts.",
  },
  {
    id: "chat",
    title: "Chat scoped by what you pin",
    body: "Pin a base resume and the chat works on that one. Pin a section, an experience entry or a single bullet, and edits outside that scope are refused, not merely discouraged. Proposed edits arrive as an approval card — nothing lands silently.",
  },
  {
    id: "quick-tailor",
    title: "Quick Tailor",
    body: "For when you already know the answer: one request against a job, resolutions planned from your saved preferences, tailored and rendered without opening a tailoring session at all. The honesty rules survive the shortcut.",
  },
  {
    id: "knockout",
    title: "Knock-out pre-scan",
    body: "Work authorization, OPT policy, salary and years of experience, checked against your profile at capture time — so a disqualifier surfaces before you spend an evening on the application, not at the screening call.",
  },
  {
    id: "export",
    title: "career.md export",
    body: "Your entire career record as one deterministic Markdown file, with no model involved. Downloadable from the Career KB page or over MCP — and every application render is filed on disk in its own company-and-role-named folder.",
  },
] as const;

export const comparison = {
  columns: ["Typical AI resume builders", "CLI skill frameworks", "Maestro CS"],
  rows: [
    {
      label: "ATS scoring",
      cells: ["LLM or black-box — same input, different score per run", "LLM judgment", "Deterministic & LLM-free — same input, same score, always"],
    },
    { label: "Measured tailoring lift", cells: ["Static score only", "Not scored as a lift", "Base → tailored delta, per application"] },
    { label: "See what the AI changed", cells: ["No audit trail", "No", "Per-hunk diff, revertible"] },
    { label: "Typeset output", cells: ["House web templates", "HTML → PDF", "Real LaTeX and Typst, bring your own template"] },
    { label: "Career record", cells: ["None (per-document)", "Flat markdown/YAML files", "Structured, versioned KB — exports to one career.md"] },
    { label: "Agent access", cells: ["No", "CLI skill files", "MCP server (83 tools) against your own machine"] },
    { label: "Auto-submits for you", cells: ["N/A", "Never (stated)", "Never — consent ledger, enforced"] },
    { label: "Cost", cells: ["$15–75/month", "Free + tokens", "Free (Apache-2.0) + your own tokens — ≈1¢ per application"] },
  ],
  footnote:
    "Only checkable claims — verify any row yourself. Columns describe the categories as of August 2026; tell us if a row has gone stale.",
} as const;

/* ------------------------------ agents ----------------------------- */

export const agents = {
  hero: {
    eyebrow: "Agent surfaces",
    title: "The assistant you already use can drive all of it",
    lede: "Maestro CS ships an MCP server, so you can run the whole pipeline conversationally — extract a JD, score it, walk the gaps, render the PDF — without leaving Claude, the ChatGPT desktop app or the Codex CLI. Unlike SaaS-backed job-search MCP servers, it runs on your machine against your database.",
    image: "/media/mcp-dashboard.png",
    imageAlt: "Claude pulling the whole pipeline over MCP and building its own view of it",
  },
  keyless: {
    title: "No API key? Over MCP, your assistant is the model.",
    body: "Claude or Codex extracts the posting, authors the tailoring edits, and the server applies them through the same honesty gates — the whole capture → score → tailor → render arc, plus Career KB and resume maintenance, with zero in-house LLM calls. If you mainly want tailoring and a maintained career record driven from the assistant you already use, that is a complete setup on its own.",
  },
  profiles: [
    { name: "full", detail: "All 83 tools" },
    { name: "hunt", detail: "Find, capture, triage, propose" },
    { name: "apply", detail: "Tailor, render, package, submit-adjacent" },
    { name: "explore", detail: "Analytics and market questions" },
    { name: "templates", detail: "Author and validate designs" },
    { name: "career", detail: "Career KB reads and writes" },
  ],
  hunt: {
    title: "Hunt with the agent you already use",
    body: "get_job_search_brief hands an agent a composed brief — your stated preferences, your work-authorization answers verbatim, and the guardrails you configured — so a Claude or Codex session can go find postings on whatever boards it can read, capture them, score them against your bases, and hand back a ranked shortlist.",
    kicker: "There is no board integration to be locked into and no scraper to break: the agent reads what you would have read.",
    image: "/media/hunt-digest.png",
    imageAlt: "A scheduled hunt reporting back — and stopping at your review",
  },
  ledger: {
    title: "Going all the way: the proposal ledger",
    body: "A hunted job becomes an application proposal in a staged lane — tailored, rendered and filled without interrupting you at every page — and then it stops. You triage proposals in bulk, and apply runs execute only the ones you accepted. Nothing is ever executed from the web app: filling and submitting happen inside a live agent session holding a browser, and the final consent lives in that session, one turn before the click.",
    guards: [
      "Consent is an append-only event, metered by a daily cap you set",
      "An agent can never self-certify — marking a proposal submitted needs a receipt or your own attestation",
      "A submit click that cannot be verified ends terminally as submission_uncertain: never retried, never re-clicked",
    ],
  },
  risks: {
    title: "The risks, plainly",
    lede: "Letting an agent read job pages and drive a browser for you means three real exposures. The consent gate exists because these are real and unfixable, not because they are hypothetical.",
    items: [
      { title: "Prompt injection", body: "A job posting is untrusted text. Text inside one can try to instruct the agent reading it." },
      { title: "Unverified employers", body: "A hunted posting is not a vetted one, and an application carries your contact details and work history to whoever posted it." },
      { title: "Bot detection", body: "Some employers filter applications that look automated, and we will not help you hide — no stealth automation, no CAPTCHA bypass, no headless submitting." },
    ],
    closing: "Use the lane on jobs you have looked at yourself. Everything it does is written down.",
  },
} as const;

/* ----------------------------- privacy ----------------------------- */

export const privacy = {
  hero: {
    eyebrow: "Privacy & security",
    title: "Local-first is not a marketing word here. It is the architecture.",
    lede: "Three containers on your machine. Every port bound to 127.0.0.1. No account, no tenancy, no server holding your career history — and one hard rule that follows from all of it.",
  },
  facts: [
    {
      title: "Nothing is uploaded",
      body: "Scoring, rendering, tracking and export run entirely locally. The only outbound traffic is to the one LLM provider you configure.",
    },
    {
      title: "Your key never leaves your custody",
      body: "It lives in your .env or your local database and is sent to exactly one place: the provider endpoint you configured. The API never echoes a stored key back out — the settings endpoint reports only configured: yes/no — and a non-http(s) model endpoint is refused outright, because that URL decides where your key is sent.",
    },
    {
      title: "No telemetry leaves your machine",
      body: "The extension's one telemetry endpoint posts to your own backend on localhost. There is no collector at the other end, in this repo or anywhere else.",
    },
    {
      title: "Your data is files you own",
      body: "Resumes are JSON on your disk. Renders land in company-and-role-named folders. Your whole KB exports to one deterministic career.md — no model involved.",
    },
  ],
  trade: {
    title: "The trade that buys all of this: no authentication",
    body: [
      "Single-user and local-first means there is no login, and no authentication on any HTTP or MCP endpoint. That absence is exactly what removes the accounts, the tenancy and the server holding your career history.",
      "One rule follows: do not expose it to a network. Not the public internet, not your LAN, not a tunnel. Anything that can reach the API has full read and write access to your entire career record and your saved API keys.",
    ],
    kicker: "Running it locally is safe by construction; publishing it is not, and no setting makes it so.",
  },
  extension: {
    title: "What the extension does and does not keep",
    keeps: ["Which fields it met — label, kind, rule, outcome", "The hostname of the page, and a first-seen timestamp"],
    never: [
      "Any value you typed — the models have no value column",
      "Signatures, attestations, consent checkboxes, credentials, government IDs",
    ],
    honest:
      "“No values” is not the same as “nothing personal”. What the table accumulates is a record of which companies you applied to, and when. Three things bound it: it never leaves your machine, capture is a toggle in the widget's ⋯ menu, and Clear data deletes all of it whenever you want — without turning capture off.",
  },
  tracing: {
    title: "Optional LLM tracing, and why compose won't forward it",
    body: "Every LLM call can be traced to a Langfuse instance you already run. All three variables are required, and — deliberately — the compose stack does not forward them: traces contain your prompts, meaning your resume text, and a stale key pair passed through silently would ship that to a third party. To trace, run the backend process yourself, outside compose. Tracing is off whenever any of the three is unset, and the app never requires it.",
  },
} as const;

/* ---------------------------- quickstart --------------------------- */

export const quickstart = {
  pieces: [
    {
      n: "1",
      title: "The stack",
      required: true,
      body: "One docker compose up -d. Three containers, all bound to localhost. First build takes several minutes — it installs TeX Live and downloads the pinned embedding model.",
    },
    {
      n: "2",
      title: "One API key",
      required: false,
      body: "Paste it into .env or Settings → Models. OpenAI or Gemini — either one alone is a complete setup, and each maps to a measured profile.",
    },
    {
      n: "3",
      title: "MCP for your assistant",
      required: false,
      body: "One script registers the server with Claude Code and prints paste-ready config for Claude Desktop and the ChatGPT desktop app / Codex CLI, every path already filled in.",
    },
    {
      n: "4",
      title: "The browser extension",
      required: false,
      body: "chrome://extensions → Developer mode → Load unpacked → the repo's extension/ folder. No ID to copy, nothing to configure: the extension pins its identity, so the backend already allowlists it.",
    },
  ],
  clone: `git clone ${site.repo}.git
cd maestro-career-studio
cp .env.example .env

# Recommended: edit .env and paste an OPENAI_API_KEY (or GEMINI_API_KEY).
# The deterministic core runs without one; the AI lanes want one.

docker compose up -d --build`,
  mcp: "./scripts/setup-mcp.sh",
  prerequisites: [
    { title: "Docker Desktop", body: "Or Docker Engine + Compose v2." },
    {
      title: "~4 GB of disk",
      body: "Backend ~1.9 GB (it carries a minimal TeX Live, Typst and the pinned embedding model), frontend ~1.6 GB, PostgreSQL ~0.4 GB.",
    },
    {
      title: "One API key — recommended",
      body: "OpenAI or Gemini. Without one you still get the deterministic core, and over MCP your assistant supplies the model.",
    },
  ],
  keyless: {
    title: "What runs with no key at all",
    works: [
      "Deterministic ATS scoring across every base resume",
      "Gap diagnostics, health reports, full manual tailoring",
      "Raw LaTeX/Typst editors and PDF compilation",
      "Application tracking and analytics dashboards",
    ],
    defers: [
      "Career KB seeding — defers cleanly, retries on a later boot",
      "Automatic JD field extraction — falls back to manual entry",
      "Cover letters, Q&A, guided gap resolution and chat — prompt for a key first",
    ],
  },
  localModels: {
    title: "Local model servers: configurable, but untested",
    body: "The LLM client speaks to any OpenAI-compatible endpoint, so Ollama, LM Studio or vLLM can be configured by setting OPENAI_BASE_URL. Being honest, as everywhere else: we have not validated any local model end to end yet, and the app's heavier demands — long tailoring prompts, strict JSON output, streaming tool calls — are exactly where small models struggle. We make no offline promise until we can stand behind one.",
    ask: "If you try it anyway, a report of what worked or broke, with the model name, is a genuinely useful contribution.",
  },
  earlyRelease: {
    title: "The compose path is the least-tested part of this release",
    body: "The stack runs daily on my machine, but the fresh-clone first boot has had little outside testing yet. If it fails on yours, please open an issue with the log — right now that report is one of the most valuable contributions there is.",
  },
} as const;

export const faqs = [
  {
    q: "Do I need an API key?",
    a: "Recommended: yes. The parts that make Maestro CS fastest day to day are LLM-backed — in-app tailoring, the extension's tailor-on-the-go and AI form filling, cover letters and screening answers, Career KB consolidation, and chat. One key, OpenAI or Gemini, is a complete setup. Without one you still get the deterministic core, and if you drive it over MCP your assistant supplies the model itself.",
  },
  {
    q: "What does it actually cost to run?",
    a: "About a penny per tailored application on the default profile, and under 3¢ on the fast one — measured with Langfuse on real postings at list prices, not estimated. My entire search to date, with daily use of every feature, has cost under $2 in tokens. The software itself is Apache-2.0: no account, no subscription, no usage tier.",
  },
  {
    q: "Is my resume uploaded anywhere?",
    a: "No. Everything runs in three containers on your machine, bound to 127.0.0.1. The only outbound traffic is to whichever LLM provider you configure, and your key is sent to exactly that one endpoint — it lives in your .env or your local database, and the API never echoes a stored key back out.",
  },
  {
    q: "Can I run it fully offline on a local model?",
    a: "You can configure any OpenAI-compatible endpoint, including Ollama, LM Studio and vLLM — but we will not claim it works, because we have not validated a local model end to end yet. Long tailoring prompts, strict JSON output and streaming tool calls are exactly where small models struggle. The deterministic core (scoring, rendering, tracking, export) never calls a model at all, so that half is genuinely offline today.",
  },
  {
    q: "Is the score a real ATS score?",
    a: "It is our score: deterministic, versioned and reproducible. It is not a prediction of what any real ATS shows an employer — no consumer tool can offer that. Use it to compare your own drafts against one another and to catch parsing and coverage problems. Chasing 100 produces keyword-stuffed resumes that modern screens flag.",
  },
  {
    q: "Will it apply to jobs for me?",
    a: "It will carry an application to the point of submission and then stop. Filling and submitting happen only inside a live agent session you are running, with consent recorded one turn before the click and a daily cap you set. Nothing is ever submitted from the web app, and an unverifiable submit click ends terminally rather than being retried.",
  },
  {
    q: "Can I use my own resume template?",
    a: "Yes — that is the point of the template layer. Start from a bundled LaTeX or Typst design, adapt one you found elsewhere, or write your own source in the built-in editor. Validation compiles a sample PDF and runs a parse-certification gate, so a design that would break an ATS parser never reaches “ready”.",
  },
  {
    q: "Which languages are supported?",
    a: "English-language resumes and job descriptions, with full support for accented Latin characters (Zürich, José, Nestlé, São Paulo). Non-Latin scripts are refused explicitly at ingest rather than scored misleadingly at zero coverage.",
  },
  {
    q: "How early is this, really?",
    a: "Early, and the repo says so plainly. The compose fresh-clone boot in particular has had little outside testing. KNOWN_ISSUES.md lists what is solid, what is rough, and what is a deliberate limitation rather than a bug — the tracker does not paginate server-side, scores are not re-derived when a base resume changes, and autofill is not first-try-clean on every ATS. If something breaks, a clear bug report is one of the most valuable contributions right now.",
  },
] as const;

export const makerNote = {
  title: "It's early, and I'd rather you tell me.",
  body: "I built this because I needed it, and I use it every day. That also means it has the rough edges of software with one user — the fresh-clone first boot especially. If something doesn't work, please say so: a clear bug report is a contribution, and right now it's one of the most valuable kinds. Contributions are more than welcome.",
  signature: "Ajey",
} as const;

export const closing = {
  title: "Tooling for someone's career should be infrastructure, not a rental.",
  body: "Clone it, run it, and keep everything it produces. Nothing here was ever monetized by making it difficult to leave.",
} as const;
