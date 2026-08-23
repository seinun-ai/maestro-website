/**
 * Every claim on this site is traceable to the product repo (README.md,
 * SYSTEM.md, KNOWN_ISSUES.md). If a number changes there, change it here —
 * this file is the only place any of them are written down.
 */

export const site = {
  name: "Maestro Career Studio",
  short: "Maestro CS",
  tagline: "A local-first, evidence-backed job-application studio.",
  description:
    "Turn everything you have done into one structured career record, then assemble every tailored resume, cover letter and screening answer from it — locally, deterministically, with a diff of every AI edit.",
  repo: "https://github.com/seinun-ai/maestro-career-studio",
  contact: "ajey@seinun.com",
  license: "Apache-2.0",
  author: "Ajey Dhayashanker Loganathan",
  // Set NEXT_PUBLIC_SITE_URL at build time before deploying — canonical URLs,
  // Open Graph images, sitemap.xml and robots.txt all derive from it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maestro-career-studio.example",
} as const;

export const nav = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Agents & MCP", href: "/agents" },
  { label: "Privacy", href: "/privacy" },
  { label: "Get started", href: "/start" },
] as const;

export const hero = {
  eyebrow: "Apache-2.0 · runs on your machine · no account",
  title: "Stop rewriting.\nStart compounding.",
  lede: "Most of a job search goes into documents that are thrown away a week later. Maestro CS records what you actually did once — then every resume, cover letter and screening answer after that is assembled from that record, scored deterministically, and typeset locally into a real PDF.",
  primaryCta: { label: "Get started", href: "/start" },
  secondaryCta: { label: "See how it works", href: "/how-it-works" },
  mediaAlt: "Score, tailor, review the diff of every AI edit, and render a typeset PDF — end to end",
} as const;

export const heroStats = [
  { value: "83", label: "MCP tools", detail: "Drive the whole pipeline from Claude, Codex or the ChatGPT desktop app." },
  { value: "0", label: "API keys required", detail: "Scoring, rendering and tracking never call a model." },
  { value: "3", label: "local containers", detail: "Every port binds to 127.0.0.1. Nothing phones home." },
  { value: "4,023", label: "tests passing", detail: "Determinism and cross-engine render parity are enforced, not eyeballed." },
] as const;

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
    body: "Apache-2.0, no account, no subscription, no usage tier. Your KB exports to a single career.md you can read and diff. Every render lands in a company-and-role-named folder holding the source and the exact PDF you sent.",
    proof: "Point it at your own models — hosted or fully local — and everything keeps working.",
  },
] as const;

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
    title: "Real typesetting, and templates you own",
    body: "Two engines compiled locally: LaTeX (pdflatex) and Typst. A template is a presentation layer and nothing else — it carries its own default formatting, layered under per-resume and per-application overrides, so switching one never touches your content.",
    bullets: [
      "Start from a bundled design, adapt one you found, or write your own in the editor",
      "Validation compiles a sample PDF and runs a parse-certification gate",
      "A template that would break an ATS parser never reaches “ready”",
    ],
    image: "/media/templates.png",
    imageAlt: "The template gallery, with LaTeX and Typst designs compiled locally",
  },
  {
    id: "extension",
    eyebrow: "The capture",
    title: "A browser extension that never stores what you typed",
    body: "A floating in-page widget: capture a posting from the board you are already reading, score it against every base resume, and fill application forms from your Autofill Profile. Its telemetry records which fields it met and whether they filled — label, kind, rule, outcome, host — and structurally cannot store a value you typed, because the models have no value column.",
    bullets: [
      "Signatures, attestations, consent checkboxes, credentials and government IDs sit on a deny-list — never filled, never shown to a model",
      "Capture is a toggle; Analytics → Autofill coverage → Clear data deletes all of it",
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
    { label: "Cost", cells: ["$15–75/month", "Free + tokens", "Free (Apache-2.0) + your own tokens"] },
  ],
  footnote: "Only checkable claims — verify any row yourself.",
} as const;

export const agents = {
  hero: {
    eyebrow: "Agent surfaces",
    title: "The assistant you already use can drive all of it",
    lede: "Maestro CS ships an MCP server, so you can run the whole pipeline conversationally — extract a JD, score it, walk the gaps, render the PDF — without leaving Claude, the ChatGPT desktop app or the Codex CLI. Unlike SaaS-backed job-search MCP servers, it runs on your machine against your database.",
    image: "/media/mcp-dashboard.png",
    imageAlt: "Claude pulling the whole pipeline over MCP and building its own view of it",
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

export const privacy = {
  hero: {
    eyebrow: "Privacy & security",
    title: "Local-first is not a marketing word here. It is the architecture.",
    lede: "Three containers on your machine. Every port bound to 127.0.0.1. No account, no tenancy, no server holding your career history — and one hard rule that follows from all of it.",
  },
  facts: [
    { title: "Nothing is uploaded", body: "Scoring, rendering, tracking and export run entirely locally. The only outbound traffic is to the LLM provider you configure — and you can point that at a local model server instead." },
    { title: "No telemetry leaves your machine", body: "The extension's one telemetry endpoint posts to your own backend on localhost. There is no collector at the other end, in this repo or anywhere else." },
    { title: "Your data is files you own", body: "Resumes are JSON on your disk. Renders land in company-and-role-named folders. Your whole KB exports to one deterministic career.md — no model involved." },
    { title: "Optional tracing, off by default", body: "LLM tracing to a Langfuse instance you already run is three env vars, and off whenever either key is unset. Traces contain your resume text — point it at a host you control." },
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
    keeps: [
      "Which fields it met — label, kind, rule, outcome",
      "The hostname of the page, and a first-seen timestamp",
    ],
    never: [
      "Any value you typed — the models have no value column",
      "Signatures, attestations, consent checkboxes, credentials, government IDs",
    ],
    honest:
      "“No values” is not the same as “nothing personal”. What the table accumulates is a record of which companies you applied to, and when. Three things bound it: it never leaves your machine, capture is a toggle in the widget's ⋯ menu, and Clear data deletes all of it whenever you want — without turning capture off.",
  },
} as const;

export const quickstart = {
  clone: `git clone ${site.repo}.git
cd maestro-career-studio
cp .env.example .env
docker compose up -d --build`,
  mcp: "./scripts/setup-mcp.sh",
  offline: `ollama pull llama3.2:3b
# in .env — host.docker.internal reaches the host from inside the container
OPENAI_BASE_URL=http://host.docker.internal:11434/v1`,
  prerequisites: [
    { title: "Docker Desktop", body: "Or Docker Engine + Compose v2." },
    { title: "~4 GB of disk", body: "Backend ~1.9 GB (it carries a minimal TeX Live, Typst and the pinned embedding model), frontend ~1.6 GB, PostgreSQL ~0.4 GB." },
    { title: "An LLM — optional to start", body: "An OpenAI or Gemini key, or a local OpenAI-compatible server (Ollama, LM Studio, vLLM). Without one, the deterministic half still works." },
  ],
  noKey: {
    title: "Try it before you bring a key",
    works: [
      "Deterministic ATS scoring across every base resume",
      "Gap diagnostics and full manual tailoring",
      "Raw LaTeX/Typst editors and PDF compilation",
      "Application tracking and analytics dashboards",
    ],
    defers: [
      "Career KB seeding — defers cleanly, retries on a later boot",
      "Automatic JD field extraction — falls back to manual entry",
      "Cover letters, Q&A, guided gap resolution and chat — prompt for a key first",
    ],
  },
  tiers: [
    { tier: "Fast", used: "Extraction, classification, bulk KB work", wants: "Cheap — a small local model is fine" },
    { tier: "Smart", used: "Tailoring, gap enrichment, planning", wants: "Your best model" },
    { tier: "Chat", used: "The interactive agent", wants: "Must support streaming tool calls" },
  ],
} as const;

export const faqs = [
  {
    q: "Do I need an API key to use it?",
    a: "No. Scoring, rendering, tracking, analytics and export never call a model, so the deterministic half of the product works with zero keys configured. Generation features — cover letters, screening answers, guided gap resolution, chat — prompt you to add one in Settings when you first reach for them.",
  },
  {
    q: "Is my resume uploaded anywhere?",
    a: "No. Everything runs in three containers on your machine, bound to 127.0.0.1. The only outbound traffic is to whichever LLM provider you configure — and you can point that at a local model server, in which case no resume text leaves your machine at all.",
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
    q: "What does it cost?",
    a: "Nothing. Apache-2.0, no account, no subscription, no usage tier — you pay only for whatever model tokens you choose to spend, and you can spend none by running local models.",
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
    a: "Early, and the repo says so plainly. KNOWN_ISSUES.md lists what is solid, what is rough, and what is a deliberate limitation rather than a bug — the tracker does not paginate server-side, scores are not re-derived when a base resume changes, and autofill is not first-try-clean on every ATS. Read it before you file a bug or pick up work.",
  },
] as const;

export const closing = {
  title: "Tooling for someone's career should be infrastructure, not a rental.",
  body: "Clone it, run it, and keep everything it produces. Nothing here was ever monetized by making it difficult to leave.",
} as const;
