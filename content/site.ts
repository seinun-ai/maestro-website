/**
 * Every claim here is traceable to the product repo (README.md, SYSTEM.md,
 * KNOWN_ISSUES.md, docs/reports/2026-08-11-launch-content-kit.md). If a number
 * changes there, change it here. This is the only place any of them are written.
 *
 * Positioning (owner's call, 2026-08-23, updated 2026-10-12): the recommended
 * setup is BRING A KEY: OpenAI, Gemini or Claude. OpenRouter and custom
 * servers live on the Models page only. "No key" is two honest tiers. The
 * deterministic core always works, and over MCP the client agent supplies the
 * model. Local model servers are "configurable but untested". Never claim
 * "fully offline" anywhere.
 *
 * Vocabulary is the app's: Match score (never "ATS score"; "ATS" only where
 * applicant tracking systems are explained), Career history, Jobs, Agent
 * inbox, Assistant, Settings › AI & models, the Companion (Job, Resume, Fill,
 * Track). Submitting: the Companion fills the form and stops, you press
 * Submit; the opt-in Full automation is stated on the Agents page only.
 *
 * Voice: short sentences, concrete nouns, second person. NO EM DASHES in
 * rendered copy, ever (readers filter AI text by them, and the product scrubs
 * them from its own output); en dashes in numeric ranges are fine. No
 * "not X but Y" scaffolding, no throat-clearing.
 */

export const site = {
  name: "Maestro Career Studio",
  short: "Maestro CS",
  tagline: "A local-first, evidence-backed job-application studio.",
  description:
    "Write down what you did once. Maestro builds every tailored resume, cover letter and screening answer from that record, scores it with an engine that never guesses, and typesets it locally into a real PDF. About a penny an application.",
  repo: "https://github.com/seinun-ai/maestro-career-studio",
  // The release the copy was checked against. Bump it with the copy, not alone.
  version: "0.10.1",
  pypi: "https://pypi.org/project/maestro-career-studio/",
  changelog: "https://github.com/seinun-ai/maestro-career-studio/blob/main/CHANGELOG.md",
  releases: "https://github.com/seinun-ai/maestro-career-studio/releases",
  privacyPolicy: "https://github.com/seinun-ai/maestro-career-studio/blob/main/PRIVACY.md",
  video: "https://www.youtube.com/watch?v=TvNTzPxPNnc",
  issues: "https://github.com/seinun-ai/maestro-career-studio/issues",
  contact: "ajey@seinun.com",
  license: "Apache-2.0",
  author: "Ajey Dhayashanker Loganathan",
  company: "Seinun LLC",
  companyUrl: "https://seinun.com",
  // Set NEXT_PUBLIC_SITE_URL at build time before deploying. Canonical URLs,
  // Open Graph, sitemap.xml and robots.txt all derive from it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maestro-career-studio.example",
} as const;

// Order is the reader's journey: the argument, then the action, then the depth
// they go looking for once they are already committed. Install and Guide sit in
// the middle rather than at the end, because a nav that puts its own conversion
// destination seventh, behind six explanations, is arguing with itself. Models,
// Agents and Privacy are all post-decision reading, so they follow.
// Promoted out of the nav row into a filled button in the header. It stays in
// `nav` so the footer and the sitemap still carry it; only the header treats it
// specially, and it renders there exactly once.
export const headerCta = { label: "Get started", href: "/start" } as const;

export const nav = [
  { label: "Why & how", href: "/why" },
  { label: "Features", href: "/features" },
  { label: "Get started", href: "/start" },
  { label: "Guide", href: "/guide" },
  { label: "Models", href: "/models" },
  { label: "Agents & MCP", href: "/agents" },
  { label: "Privacy", href: "/privacy" },
] as const;

export const hero = {
  eyebrow: "Apache-2.0 · runs on your machine · no account",
  under:
    "Apache-2.0 · runs on your machine · works with Claude, ChatGPT, and Cursor via MCP.",
  title: "Stop rewriting.\nStart compounding.",
  lede: "Write down what you did, once. Maestro builds every tailored resume, cover letter and screening answer from that record. Scored by an engine that never guesses. Typeset locally into a real PDF. About a penny an application.",
  primaryCta: { label: "Get started", href: "/start" },
  secondaryCta: { label: "Why you'd want this", href: "/why" },
  mediaAlt:
    "A pile of resume files such as resume_FINAL(3).docx becomes one career history, then a specialist resume for each role, company and country. One is matched to a job, with its match score going from 82.4 to 87.3, and the application form waits for you to press Submit.",
  mediaCaption:
    "A short animation made from real captures of the app. The person, the employers and the job are made up.",
} as const;

export const heroStats = [
  {
    value: "≈1¢",
    label: "per application",
    detail: "On the OpenAI default, measured on real postings. Not guessed at.",
    accent: true,
  },
  { value: "88", label: "MCP tools", detail: "Run the whole pipeline from Claude, Codex or the ChatGPT desktop app." },
  { value: "2", label: "commands to install", detail: "uv tool install, then maestro start. No Docker, no Git, no account." },
  { value: "0", label: "LLM calls in scoring", detail: "Same resume, same posting, same number. Enforced in CI, not claimed in a README." },
] as const;

/* --------------------------- the why --------------------------- */

export const whyIntro = {
  eyebrow: "Why you'd want this",
  title: "You already know these feelings.",
  lede: "Each one is a specific, ordinary part of a job search that software should have fixed by now. Here's the pain, and here's what fixes it.",
} as const;

export const painPoints = [
  {
    pain: "You hate that resume tailoring is a slot machine.",
    answer: "A score that never guesses.",
    body: "Most checkers ask an LLM. One popular tool scored the same resume anywhere from 66 to 99 across a hundred runs. Maestro has no AI service in the scoring path at all, so the same resume against the same posting returns the same number and the same breakdown. Every time.",
    source: { label: "the 66–99 test", href: "https://danunparsed.com/p/hackerrank-open-source-ats" },
    feature: "Match score",
    href: "/features#scoring",
  },
  {
    pain: "Your folder is a graveyard of resume_v2_FINAL(3).docx.",
    answer: "Version history, not a pile of copies.",
    body: "Every edit becomes a version: manual, chat, tailoring run, even a restore. Diff any two. Restore any one. Old variants get archived instead of deleted, so the bullet you wrote in March is still findable in September.",
    feature: "Resume versions",
    href: "/features#versions",
  },
  {
    pain: "You're not sure your resume is even good enough to send.",
    answer: "A grade, and what each flaw costs you.",
    body: "The health report checks one resume on its own merits: parsing, dates, evidence quality, format gates. You get a letter grade, the points to the next one and a fix list ranked by impact. Fail a fatal gate and tailoring is blocked, because reordering a broken document doesn't repair it.",
    feature: "Health report",
    href: "/features#health",
  },
  {
    pain: "LaTeX looks great and is miserable to edit. Tailoring one, unthinkable.",
    answer: "LaTeX quality without LaTeX editing.",
    body: "You edit content in a structured editor. A bullet is a bullet, not a .tex line you hand-patch. Layout stays the template's job, so changing a word can't break your formatting.",
    feature: "Structured editing",
    href: "/features#templates",
  },
  {
    pain: "How many resume templates have you changed in your life?",
    answer: "One or two. Here it's a button.",
    body: "In Word or raw .tex, a redesign means rebuilding the document, so nobody bothers. Here a template owns presentation and nothing else. The same content renders through any design without being touched.",
    feature: "Templates",
    href: "/features#templates",
  },
  {
    pain: "You're answering the same screening questions for the fourth time.",
    answer: "Answer once. Reuse forever.",
    body: "Cover letters and screening answers come from your career history and the answers you've already given. The Companion fills forms from your saved answers. Passwords and government IDs are skipped by field type, and by default signatures and agreement boxes stay yours to type.",
    feature: "Q&A and autofill",
    href: "/features#companion",
  },
  {
    pain: "You do the work. You never find time to write it down.",
    answer: "Drop the raw material in. Get structure back.",
    body: "Every resume variant you own, plus project write-ups, certifications, review notes. Maestro resolves duplicate items across them, clusters the bullets and builds one career history. That becomes the evidence base for everything downstream.",
    feature: "Career history",
    href: "/features#career-history",
  },
  {
    pain: "You don't actually know what the market wants for your roles.",
    answer: "Your own postings, quantified.",
    body: "Every job you capture feeds a picture of the market you're really applying into: top skills, a skill heatmap, role mix over time. Skill gaps are marked not in your career history, in your career history, or used before. Frequent and missing is what to learn next. Frequent but already yours is what you keep forgetting to say.",
    feature: "Analytics & gap analysis",
    href: "/features#analytics",
  },
  {
    pain: "You re-explain how you want to sound in every single prompt.",
    answer: "Say it once. It sticks.",
    body: "Your persona holds who you are as a candidate: strengths, goals, working style, how your writing should read. Set it once and every generated document comes out in that voice. It shapes tone and emphasis, never facts.",
    feature: "Persona",
    href: "/features#persona",
  },
  {
    pain: "You're tired of searching for jobs at all.",
    answer: "Send the assistant you already use.",
    body: "Maestro hands your agent a brief: your preferences, your work-authorization answers word for word, the guardrails you set. Claude or Codex reads the boards, saves what fits, scores it against your bases and files the best in your Agent inbox. No integrations to break.",
    feature: "Hunt over MCP",
    href: "/agents",
  },
  {
    pain: "You wish the form-filler knew everything your resume knows.",
    answer: "It does, per application.",
    body: "The Companion fills from your saved answers and grounds each answer in the application on screen, not a generic saved blob. Its usage log records which fields it met and whether they filled, and has no column for what you typed. The job's What was submitted tab keeps the answers it filled, so you can check them.",
    feature: "AI-grounded autofill",
    href: "/features#companion",
  },
] as const;

export const whyClose = {
  title: "And if you walk away, you keep everything.",
  body: "Your career history exports to one career.md. Plain Markdown, no model involved, readable and diffable. Resumes are JSON on your disk. Every render sits in its own company-and-role folder with the source and the exact PDF you sent.",
  kicker: "The record is yours. That is the whole design.",
} as const;

/* --------------------------- premise --------------------------- */

export const problem = {
  eyebrow: "The premise",
  title: "Your effort should compound. Right now it evaporates.",
  body: [
    "A single opening now routinely draws hundreds of applications, and screens increasingly flag resumes that read like a machine wrote them. Volume stopped working. Depth is the only lever left, and depth is only affordable when last month's work is still sitting there.",
  ],
  pull: "Write it once. Reuse it forever.",
} as const;

export const pillars = [
  {
    icon: "determinism",
    title: "Scoring that can't drift",
    body: "No LLM anywhere in the scoring path. Deterministic lexical layers plus a pinned embedding model running on your CPU. Same resume, same posting, same config: the same number and the same breakdown, run after run.",
    proof: "Determinism is enforced by the test suite in CI, not asserted in a README.",
  },
  {
    icon: "evidence",
    title: "Evidence, not invention",
    body: "Resumes compose from approved bullets in your career history, word for word. Rewriting a bullet is a separate step that asks first. A keyword with no evidence behind it reaches your skills list and nowhere else.",
    proof: "Every edit is a version. Nothing is lost, nothing is one-way.",
  },
  {
    icon: "ownership",
    title: "It leaves with you",
    body: "Apache-2.0. No account, no subscription, no usage tier. You pay for the tokens you spend and nothing else. Your career history exports to one career.md you can read and diff.",
    proof: "About a penny an application on the OpenAI default, against $15–75 a month.",
  },
] as const;

/* -------------------------- economics -------------------------- */

export const economics = {
  eyebrow: "What it costs",
  title: "A tailored application costs about a penny on the default setup.",
  lede: "We traced real applications end to end with Langfuse in August 2026, on the model profile a fresh install ships with, priced at list. Your payloads will vary. Not by an order of magnitude.",
  headline: {
    stat: "≈1¢",
    label: "per tailored application",
    body: "Save the posting, score it, close the gaps, tailor, render the PDF, and write the cover letter and screening answers. All of it, on the OpenAI default.",
    aside: "My whole search so far has cost under $2 in tokens. Hosted tools charge $15–75 a month.",
  },
  // Input and output are priced ~6x apart, so a combined token count can't be
  // checked against the provider's rate card. Keeping them split is what makes
  // the row verifiable rather than merely stated.
  rows: [
    { op: "JD extraction", tokensIn: "~3k", tokensOut: "~1.5k", cost: "~¼¢" },
    { op: "Gap enrichment", tokensIn: "~7k", tokensOut: "~3k", cost: "~½¢" },
    { op: "Tailoring pass", tokensIn: "~11k", tokensOut: "~0.6k", cost: "~¼¢" },
    { op: "Cover letter + screening answers", tokensIn: "~8k", tokensOut: "~0.9k", cost: "~¼¢" },
    { op: "Career history build, per resume (one-time)", tokensIn: "~7k", tokensOut: "~1.5k", cost: "~⅓¢" },
  ],
  total: { op: "Save a job → tailored resume → full apply package", cost: "≈1.3¢" },
  note: "Priced against GPT-5.6 Luna at $0.20 per million input tokens and $1.20 per million output. Multiply it out yourself. That is the point of showing the split.",
} as const;

export const modelsPage = {
  eyebrow: "Models",
  title: "Which model, and what it costs you.",
  lede: "One key, OpenAI, Gemini or Claude, is a complete setup. This page is the reference behind that sentence: the two profiles benchmarked on real postings, where Claude stands, what a tailored application actually costs, and where local models stand.",
} as const;

export const modelProfiles = {
  eyebrow: "Choose your models",
  title: "Two setups measured on real postings, and Claude.",
  lede: "Any OpenAI-compatible model can be configured. The first two are benchmarked end to end with every call traced, one per API key, so you can start from a known-good setup instead of guessing. The Fast tier decides almost everything: how much of a posting gets extracted, how honest your base score is, and most of the waiting.",
  columns: [
    {
      name: "OpenAI",
      badge: "depth",
      model: "gpt-5.6-luna",
      key: "One OpenAI key",
      extraction: "The most complete extraction we measured",
      speed: "~40 seconds",
      cost: "about a penny",
      costNote: "per application",
      hallucinations: "none measured",
      recommended: true,
    },
    {
      name: "Gemini",
      badge: "speed",
      model: "gemini-3.7-flash",
      key: "One Gemini key",
      extraction: "About ¾ of that, strongest on named tools",
      speed: "~10 seconds",
      cost: "under 3¢",
      costNote: "Gemini promo pricing doubles Jan 2027",
      hallucinations: "none measured",
      recommended: false,
    },
    {
      name: "Claude",
      badge: "your key",
      model: "claude-haiku-5-5",
      key: "One Claude key",
      extraction: "Not measured",
      speed: "Not measured",
      cost: "about a penny",
      costNote: "per application with Haiku, in our tests",
      hallucinations: "not measured",
      recommended: false,
    },
  ],
  why: "A fresh install ships with the OpenAI one already set, because honest scoring starts at extraction: a fast model that misses requirements inflates your fit score, in our tests by about nine points. Neither is a tier above the other, and switching is three dropdowns in Settings › AI & models. Claude Sonnet 5.5 and Opus 5.5 are listed too. OpenRouter keys and custom OpenAI-compatible servers work as well. Mixing tiers across providers works too. These two already cover what it would buy you.",
} as const;

/* ---------------------------- steps ---------------------------- */

export const steps = [
  {
    n: "01",
    title: "Feed your career history, once",
    summary: "Every resume variant you own. The old ones, the role-specific ones, the one that runs to three pages.",
    body: "Maestro resolves duplicate items across them, clusters the bullets and builds one career history. This is the step that keeps paying: everything downstream composes from it, so its quality is the ceiling on everything else.",
    note: "Bullets that arrive unchanged from a file you wrote are approved on import. Anything merged across resumes, or written by a model, waits in Drafts to review for you. Fix a duplicate once and it is fixed for every future application.",
    image: "/media/kb-onboarding.png",
    imageAlt: "The import dialog adding several resume variants to one career history",
  },
  {
    n: "02",
    title: "Build a base resume per track",
    summary: "One per track you actually target. Not one per job.",
    body: "“New base resume › From career history” proposes what belongs and tells you why it left the rest out, with a drafted summary. The instruction box steers shape, not facts: “lead with pipeline and cloud work, keep it mid-level, drop the teaching.”",
    note: "Bullets are never rewritten here. Approved bullets compose word for word, which is what keeps a generated resume defensible.",
    image: "/media/base-resume.png",
    imageAlt: "The base resume studio with its health grade and a live typeset preview",
  },
  {
    n: "03",
    title: "Save the job, then check it",
    summary: "Paste the posting, or save it with the Companion from the board you're already reading.",
    body: "Score it against every base. Then the requirements check compares your profile with what the posting actually states: work authorization, OPT policy, salary, years of experience, and whether an on-site or hybrid office is where you live.",
    note: "You find out about a disqualifier before you spend the evening, not at the screening call.",
    image: "/media/job-overview.png",
    imageAlt: "A saved job with its extracted fields and a check of the stated requirements against your profile",
  },
  {
    n: "04",
    title: "Work the gaps",
    summary: "A gap is a requirement your resume doesn't evidence yet.",
    body: "The workflow asks pointed questions to surface things that are true but unwritten. Close one and you've either produced new evidence that's yours permanently, or it stays a gap. That's the difference between tailoring and drifting.",
    note: "Already know the answer? Quick Tailor does it in one request, same honesty rules, no session to open.",
    image: "/media/kb-import.png",
    imageAlt: "Adding bullets from your career history to a resume, with the drawer showing what is already present",
  },
  {
    n: "05",
    title: "Render it, read it, track it",
    summary: "Cover letter, screening answers, and a real LaTeX or Typst PDF compiled on your machine.",
    body: "Read the output before it goes anywhere. Your name is on it. Then the Jobs page carries the application from Saved to Accepted, with inline status, filters for Tracked, Yours and Agents, and every render filed on disk.",
    note: "Every AI edit is a per-hunk diff you can revert, so “what changed” is never a guess.",
    image: "/media/applications.png",
    imageAlt: "The Jobs page, from saved jobs through to offers",
  },
] as const;

/* --------------------------- features -------------------------- */

export const features = [
  {
    id: "career-history",
    eyebrow: "The record",
    title: "A career history that resolves your work",
    body: "Add your resume variants and Maestro performs entity resolution, deduplication, bullet clustering and profile synthesis. What comes out is one structured record of your work, projects and skills. Certifications, project write-ups and review notes belong in there too. It reads PDF, DOCX, Markdown, text and PowerPoint files.",
    bullets: [
      "Approved points compose word for word into resumes and applications",
      "Verbatim bullets from your own files import approved; merged and model-written bullets wait in Drafts to review",
      "Every bullet keeps its source back to the document it came from",
      "First-start seeding waits for an AI key and retries once one is there",
    ],
    image: "/media/kb-onboarding.png",
    imageAlt: "Add your documents: drop in your resumes, get your career history",
  },
  {
    id: "scoring",
    eyebrow: "The measurement",
    title: "A match score that never guesses, and a measured lift",
    body: "Deterministic lexical layers plus a pinned embedding model for semantics. Soft matches need both a shared lexical anchor and embedding proximity, so “container orchestration” earns credit against Kubernetes without inventing a skill you don't have.",
    bullets: [
      "Same resume, posting and config version gives an identical score and breakdown, run after run",
      "Recency is one of the inputs, so a document scored months apart can move as its work ages. Nothing else does.",
      "Base-to-tailored delta recorded per application, so you can see if tailoring did anything",
      "Runs on your CPU. Scoring never calls an AI service.",
    ],
    image: "/media/job-overview.png",
    imageAlt: "A job overview with the match score breakdown and a check of its stated requirements",
  },
  {
    id: "health",
    eyebrow: "The pre-flight",
    title: "Health report: is this document sound at all?",
    body: "A gap needs a job description. A health report doesn't. It checks one resume on its own merits: parsing, dates, evidence quality, format gates. Back comes a letter grade, the points to the next one and a fix list ranked by what each flaw costs you. Each bullet gets a question you can answer with or without a number.",
    bullets: [
      "A failing fatal gate blocks tailoring outright",
      "Tailoring reorders a healthy document. It can't repair a broken one.",
      "Mark as OK any check you disagree with, with your reason on the record",
    ],
    image: "/media/health-report.png",
    imageAlt: "A job-independent resume health grade with the cost of each defect",
  },
  {
    id: "templates",
    eyebrow: "The output",
    title: "Real typesetting, without the typesetting",
    body: "Two engines compiled locally: LaTeX and Typst. The Typst engine ships inside the app, so those PDFs need no TeX. LaTeX templates need TeX on your computer, and without it they build through Typst. You edit content in a structured editor and layout stays the template's job, so changing a word can't break your formatting. A template owns presentation and nothing else, which is why switching one never touches your content.",
    bullets: [
      "Changing your design is a button, not a rebuild",
      "Start from a bundled design, adapt one you found, or write your own",
      "Validation compiles a sample PDF and runs a parse gate, so a design that breaks applicant tracking system parsers never ships",
    ],
    image: "/media/templates.png",
    imageAlt: "The template gallery, with LaTeX and Typst designs compiled locally",
  },
  {
    id: "companion",
    eyebrow: "The capture",
    title: "The Companion fills the form and stops",
    body: "A Chrome side panel with four steps: Job, Resume, Fill, Track. Save job also scores your base resumes and picks the best match. The fill reads the form, checks the page kept every value it set, and lists what it filled and what still needs you. The Companion fills the form and stops. You press Submit.",
    bullets: [
      "Fills from your saved answers, with optional AI for the questions they can't answer, and attaches your resume to an empty upload box",
      "Passwords and government IDs are skipped by field type. Signatures and agreement boxes stay yours unless you turn on the agreement permission in Profile.",
      "It never moves to the next page and never submits",
      "It posts to your own backend on localhost. There's no collector on the other end.",
    ],
    image: "/media/extension.gif",
    imageAlt: "The Companion panel on a job page, stepping through Job, Resume, Fill and Track",
  },
  {
    id: "analytics",
    eyebrow: "The feedback loop",
    title: "What the market keeps asking you for",
    body: "Every captured job builds a picture of the market you're really applying into: top skills, a skill heatmap, role mix over time. Filter by role category, seniority and employment type.",
    bullets: [
      "Skill gaps are marked not in your career history, in your career history, or used before",
      "Frequent and missing is what to learn next",
      "Frequent but already yours is what you keep forgetting to say",
    ],
    image: "/media/analytics.png",
    imageAlt: "Analytics dashboards quantifying the market you are applying into",
  },
] as const;

export const featureExtras = [
  {
    id: "versions",
    title: "No more resume_v2_FINAL(3).docx",
    body: "Every write path records a version: manual edits, chat edits, tailoring runs, even restores. Diff two, restore one. Old variants get archived rather than deleted, so they're still there when an unusual role calls for one.",
  },
  {
    id: "persona",
    title: "Tell it how you sound, once",
    body: "Your persona holds strengths, goals, working style and how your writing should read. Set it once and every generated document comes out in that voice. Tone and emphasis only. Never facts.",
  },
  {
    id: "chat",
    title: "An Assistant scoped by what you pin",
    body: "Pin a resume and the Assistant works on that one. Pin a section, an entry or a single bullet and edits outside that scope get refused, not just discouraged. Proposed edits arrive as a card you accept or discard.",
  },
  {
    id: "quick-tailor",
    title: "Quick Tailor",
    body: "For when you already know the answer. One request against a job, resolutions planned from your saved preferences, tailored and rendered without opening a session. Same honesty rules.",
  },
  {
    id: "knockout",
    title: "Requirements check",
    body: "Work authorization, OPT policy, salary, years of experience and whether an on-site or hybrid office is where you live, checked against your profile when you save a job. Disqualifiers surface before you spend the evening.",
  },
  {
    id: "export",
    title: "career.md export",
    body: "Your whole career record as one Markdown file, no model involved. Download it from the Career history page or over MCP. Every render is filed on disk in its own company-and-role folder.",
  },
] as const;

export const comparison = {
  columns: ["Typical AI resume builders", "CLI skill frameworks", "Maestro CS"],
  rows: [
    {
      label: "Match scoring",
      cells: ["LLM or black-box. Same input, different score per run.", "LLM judgment", "Deterministic and LLM-free. Same input, same score."],
    },
    { label: "Measured tailoring lift", cells: ["Static score only", "Not scored as a lift", "Base-to-tailored delta, per application"] },
    { label: "See what the AI changed", cells: ["No audit trail", "No", "Per-hunk diff, revertible"] },
    { label: "Typeset output", cells: ["House web templates", "HTML to PDF", "Real LaTeX and Typst, bring your own"] },
    { label: "Career record", cells: ["None, per document", "Flat markdown/YAML files", "Structured, versioned, exports to one career.md"] },
    { label: "Agent access", cells: ["No", "CLI skill files", "MCP server, 88 tools, on your machine"] },
    { label: "Submits for you", cells: ["N/A", "Never (stated)", "Asks first by default, with a consent ledger. Full automation is an opt-in switch."] },
    { label: "Cost", cells: ["$15–75/month", "Free + tokens", "Free, Apache-2.0, plus ≈1¢ an application in tokens"] },
  ],
  footnote: "Only checkable claims. Verify any row yourself. Columns describe the categories as of August 2026.",
} as const;

/* ---------------------------- agents --------------------------- */

export const agents = {
  hero: {
    eyebrow: "Agent surfaces",
    title: "The assistant you already use can drive all of it",
    lede: "Maestro ships an MCP server. Extract a posting, score it, walk the gaps, render the PDF, all without leaving Claude, the ChatGPT desktop app or the Codex CLI. Unlike SaaS-backed job-search servers, it runs on your machine against your database.",
    image: "/media/connected-agents.png",
    imageAlt:
      "Settings › Connected agents in the app, with the Connect an agent app card: a Tool set choice and a command, install button or URL for each assistant",
    caption: "Settings › Connected agents. Pick a tool set, then copy a command, press an install button or copy the URL.",
  },
  setup: {
    title: "Connect it with one command",
    body: "The MCP server runs inside the Maestro backend on your computer, at http://localhost:8001/mcp. Your assistant connects by URL, so it needs no Docker and no Python on its side. HTTP is the default transport.",
    homeBlurb:
      "Run maestro connect, or open Settings › Connected agents › Connect an agent app. It adds Maestro to Claude Desktop, Claude Code, Codex, Cursor or VS Code. No config file to write by hand.",
    targets: [
      {
        client: "From the terminal (uv install)",
        how: "maestro connect lists the apps and which already have Maestro. maestro connect claude-desktop, claude-code, codex, cursor, vscode or other adds it.",
        auto: true,
      },
      {
        client: "From the app (any install)",
        how: "Settings › Connected agents › Connect an agent app. Pick a Tool set, then copy a command, press an install button or download the Claude Desktop bundle.",
        auto: true,
      },
      {
        client: "Claude Desktop on Docker",
        how: "Download maestro-career-studio.mcpb from the card or the GitHub release and double-click it. It is a small Node bridge to the local URL. Reinstall it if you have the older Docker-based one.",
        auto: false,
      },
    ],
    manual:
      "Claude Desktop rewrites its settings file while it runs. If it is open, maestro connect waits and writes after you quit it. --now writes at once, and --print shows the entry without changing anything. It keeps a .bak copy of the old file.",
    flags:
      "Every route defaults to the full tool set, all 88 tools, and staying there is fine. Smaller sets are an opt-in trim: the card's Tool set selector, --profile hunt on maestro connect, or a /mcp/hunt URL. One set at a time.",
    paths: [
      {
        name: "From the terminal",
        covers: "uv installs: Claude Desktop, Claude Code, Codex, Cursor and VS Code",
        steps: [
          "Run maestro connect to see the apps and which already have Maestro",
          "Run maestro connect claude-code (or claude-desktop, codex, cursor, vscode, other)",
          "Restart that app so it sees the tools",
        ],
        note: "claude-code and codex run that app's own mcp add command for you. With Claude Desktop open, the command waits and writes after you quit it. --now writes at once, --print shows the entry first.",
      },
      {
        name: "From the app",
        covers: "Any install, Docker included",
        steps: [
          "Open Settings › Connected agents › Connect an agent app",
          "Choose a Tool set (full by default)",
          "Copy the command or URL, press the install button, or download the Claude Desktop bundle",
        ],
        note: "Claude Code and Codex CLI get a copyable command, Cursor and VS Code get install buttons, and any other HTTP client gets the URL.",
      },
    ],
    urlClients: {
      title: "URL clients: Claude Code and Codex",
      code: `claude mcp add --scope user --transport http maestro-career-studio http://localhost:8001/mcp
codex mcp add maestro-career-studio --url http://localhost:8001/mcp`,
      note: "Use /mcp exactly, with no trailing slash. --scope user makes Maestro available in every folder. Without it, Claude Code adds it to the current project only. Smaller sets use /mcp/hunt, /mcp/apply, /mcp/explore, /mcp/templates or /mcp/career.",
    },
    codexPlugin: {
      title: "Codex app: custom server or plugin",
      body: "In the Codex app, open Plugins › Add › Create custom MCP server, choose Server URL, paste the URL and set Authentication to No authentication. Leave Tunnel off. For the plugin route, add a marketplace with these fields, then install Maestro Career Studio.",
      fields: [
        ["Source", "seinun-ai/maestro-career-studio"],
        ["Git ref", "the release tag you are installing, for example v0.10.1"],
        ["Sparse paths", ".agents/plugins and plugins"],
      ],
      note: "Pick one connection route per client, so each tool shows up once.",
    },
    profilesNote:
      "Every route loads all 88 tools: the full set, and the right default. The five smaller sets are an opt-in trim: hunt (21 tools), apply (50), explore (11), templates (12) and career (18). Choose one in the card's Tool set selector, with --profile on maestro connect, or by URL. One set at a time.",
    fallback: {
      title: "If an install misbehaves, write the config by hand",
      body: "A hand-written entry always works. If it connects, the server is fine and the packaging was the problem. Both entries point at the local URL, so neither needs Docker or Python.",
      claude: {
        title: "Claude Code and Cursor · mcpServers",
        note: "Add the entry under mcpServers in the client's config. VS Code uses the same entry under servers in .vscode/mcp.json. Claude Desktop uses maestro connect claude-desktop or the bundle. Its manual Node bridge entry is in the MCP guide.",
        code: `"maestro-career-studio": {
  "type": "http",
  "url": "http://localhost:8001/mcp"
}`,
      },
      codex: {
        title: "Codex · ~/.codex/config.toml",
        note: "Append the block, then restart the app. The Codex CLI and the Codex app share this file.",
        code: `[mcp_servers.maestro-career-studio]
url = "http://localhost:8001/mcp"
enabled = true`,
      },
    },
    otherClients:
      "Another HTTP client? Use the URL above. A client that only speaks stdio can run maestro mcp, the same bridge Claude Desktop uses on a uv install.",
    local: {
      title: "Keep MCP on this computer",
      body: "/mcp has no authentication by design, because a local process can already reach the app's API. It sits behind the same Host and Origin checks. Never publish port 8001, never proxy /mcp beyond this computer, and leave Codex's Tunnel off. Web connectors on claude.ai and chatgpt.com are outside this local setup.",
    },
    delegate: {
      title: "Or ask your agent to do it",
      body: "An agent that can run commands can run the connect step for you. It knows which app it is, and maestro connect only edits that app's own settings.",
      prompt: "Run `maestro connect` to see which apps already have Maestro, then run it for the app I'm using. Tell me when I need to restart it.",
      caveat: "Read what it changes. Claude Desktop's settings file is shared with your other MCP servers, and maestro connect keeps a .bak copy of the old one.",
    },
  },
  keyless: {
    title: "No API key? Your assistant is the model.",
    body: "Over MCP, Claude or Codex extracts the posting and authors the tailoring edits, and the server applies them through the same honesty gates. The whole save, score, tailor, render arc plus career history and resume upkeep, with no in-house LLM calls at all. If that is how you already work, it is a complete setup on its own.",
  },
  profiles: [
    { name: "full", detail: "All 88 tools" },
    { name: "hunt", detail: "21 tools. Find, capture, triage, propose" },
    { name: "apply", detail: "50 tools. Tailor, render, fill, consent, submit" },
    { name: "explore", detail: "11 tools. Analytics and market questions" },
    { name: "templates", detail: "12 tools. Author and validate designs" },
    { name: "career", detail: "18 tools. Career history reads and writes" },
  ],
  hunt: {
    title: "Hunt with the agent you already use",
    body: "get_job_search_brief hands your agent your preferences, your work-authorization answers word for word, and the guardrails you configured. A Claude or Codex session then finds postings on whatever boards it can read, saves them, scores them against your bases and files the best as proposals in your Agent inbox.",
    kicker: "No board integration to get locked into. No scraper to break. The agent reads what you would have read.",
    image: "/media/agent-inbox.png",
    imageAlt:
      "The Agent inbox: jobs your agent found, in lanes for Needs you, To review, Queued, Applying and History, with the agent that filed each one",
    caption: "The Agent inbox. Each job shows which agent filed it. You Queue or Skip it.",
  },
  ledger: {
    title: "The Agent inbox and the consent ledger",
    body: "A job your agent finds becomes a proposal, filed with the name of the agent that found it. You review proposals in the Agent inbox, in lanes: Needs you, To review, Queued, Applying and History. You Queue or Skip them, in bulk if you like. An apply run works only the ones you queued. It tailors, renders and fills each application in a live agent session with a browser, then by default waits for your yes before each submit. Nothing is ever submitted from the web app itself.",
    guards: [
      "Consent is an append-only event, capped daily at a number you set",
      "By default an agent can't self-certify. Marking a proposal submitted needs a receipt or your own attestation.",
      "A submit click that can't be verified ends as submission_uncertain. Never retried, never re-clicked.",
    ],
    caveat:
      "Be clear-eyed about that consent event: the agent writes it when it calls the tool, so it records that the agent said you agreed. It gives you attribution afterwards and a hard ceiling on volume. It isn't a lock a prompt-injected agent can't pick. Run the apply session while you watch it.",
  },
  fullAutomation: {
    eyebrow: "Opt-in · off by default",
    title: "Full automation, if you choose it",
    body: "The default is attended: one yes per application before the final submit. Settings › Connected agents has a switch called Full automation, and it is Off until you turn it on. While it is On, your own agent may submit queued jobs whose final review is clean without asking each time.",
    points: [
      "Your daily limit and your Companies to skip still apply.",
      "A job with anything to check goes to Needs you, and the agent asks you.",
      "The agent's automatic yes and its note confirming submission are labelled auto in the consent ledger.",
    ],
    extra:
      "Order, batching and timing stay between you and your agent. The Companion is separate: it fills the form and stops. You press Submit.",
  },
  risks: {
    title: "The risks, plainly",
    lede: "Letting an agent read job pages and drive a browser means three real exposures. The consent gate exists because they're real and unfixable.",
    items: [
      { title: "Prompt injection", body: "A job posting is untrusted text. Text inside one can try to instruct the agent reading it." },
      { title: "Unverified employers", body: "A hunted posting isn't a vetted one, and an application carries your contact details and work history to whoever posted it." },
      { title: "Bot detection", body: "Some employers filter applications that look automated, and we won't help you hide. No stealth automation, no CAPTCHA bypass, no headless submitting." },
    ],
    closing: "Use it on jobs you've looked at yourself. Everything it does is written down.",
  },
} as const;

/* ---------------------------- privacy -------------------------- */

export const privacy = {
  hero: {
    eyebrow: "Privacy & security",
    title: "Local-first isn't a marketing word here. It's the architecture.",
    lede: "Maestro runs on your machine and listens only on 127.0.0.1 out of the box. No account, no tenancy, no server holding your career history. One hard rule follows from that.",
  },
  facts: [
    {
      title: "Your record stays here",
      body: "Scoring, rendering, tracking and export run on your machine. Your career record leaves it only for the AI service you choose, when you use an AI feature, and for the assistant you connect over MCP, when it calls a tool. With no key and no assistant, nothing about your career goes anywhere.",
    },
    {
      title: "Your key stays yours",
      body: "Keys sit in plain text in maestro.env (.env on Docker) and your local database, and each one goes only to its own provider's endpoint: OpenAI, Gemini, Claude or OpenRouter, or a server you name. The API never echoes a stored key back out; the settings endpoint reports only whether one is configured. A non-http(s) model endpoint is refused outright, because that URL decides where your key is sent.",
    },
    {
      title: "Nothing phones home",
      body: "The code has no analytics, crash reporting or ads. The Companion's one usage log posts to your own backend on localhost, with no collector at the other end. Updates happen only when you run maestro update or update.sh, and the maestro command names each request it makes.",
    },
    {
      title: "Your data is files you own",
      body: "One SQLite database, your resumes, PDFs and settings, all in one folder on your disk. career.md exports your whole career history as plain Markdown, with no model involved.",
    },
  ],
  trade: {
    title: "The trade that buys all this: no authentication",
    body: [
      "Single-user and local-first means no login, and no authentication on any HTTP or MCP endpoint. That absence is what removes the accounts, the tenancy and the server holding your career history.",
      "So: don't expose it to a network. Not the internet, not your LAN, not a tunnel. Anything that can reach the API has full read and write access to your entire career record and your saved API keys.",
      "There is one narrow, documented exception. The optional second copy publishes only /api/sync, sealed, and only as the sync setup guide describes.",
    ],
    kicker: "Running it locally is safe by construction. Publishing it isn't, and no setting makes it so.",
  },
  extension: {
    title: "What the Companion keeps, and what it leaves out",
    keeps: [
      "A usage log of which fields it met: label, kind, rule, outcome",
      "The page's hostname and a first-seen timestamp",
      "For an AI fill, a run trace: the page's own option texts and which one was chosen, diversity questions included. The last 50 runs.",
      "On each job, a What was submitted record: every answer filled, page by page. Diversity answers are kept only with your consent.",
    ],
    never: [
      "Any typed value in the usage log or the run trace. Those tables have no column for one.",
      "Passwords and government ID numbers. It skips them by field type.",
      "Signatures, initials, salary history and agreement boxes, unless you turn on the agreement permission in Profile.",
      "Voluntary diversity questions, unless you turn on the standing consent in Profile.",
    ],
    honest:
      "“No values” isn't the same as “nothing personal”. The usage log accumulates a record of which companies you applied to and when. Three things bound it: it never leaves your machine, Clear data under Analytics › Autofill coverage deletes the records and the run traces whenever you want, and you can turn capture off. There is no switch in the panel. You set telemetryEnabled to false in the extension's stored settings, from its service worker console. The extension README shows the steps.",
  },
  tracing: {
    title: "Optional tracing, and why compose won't forward it",
    body: "Every LLM call can be traced to a Langfuse instance you already run. It needs an optional tracing extra that the Docker and native installs include and the uv install leaves out, and all three variables set by you. The compose stack deliberately does not forward them. Traces contain your prompts, which means your resume text, and a stale key pair passed through silently would ship that to a third party. To trace, run the backend yourself outside compose. Tracing is off whenever any of the three is unset.",
  },
  leaving: [
    { t: "career.md", b: "Your whole career history as one deterministic Markdown file. No model involved, readable and diffable, downloadable from the Career history page or over MCP." },
    { t: "Your PDFs", b: "Every render is filed in its own company-and-role folder with the typeset source and the exact PDF you sent. On the uv install, finished PDFs are also copied to Documents/Maestro Career Studio/Applications." },
    { t: "base_resumes/", b: "Your resumes are JSON files on your disk, not rows in someone else's database." },
    { t: "The database", b: "One SQLite file in your data folder. Delete the folder and everything is gone, which is the point." },
  ],
} as const;

/* --------------------------- quickstart ------------------------ */

export const quickstart = {
  pieces: [
    {
      n: "1",
      title: "The app",
      required: true,
      body: "Install uv once, then two commands: uv tool install and maestro start. It runs on macOS, Linux and Windows (x64), with no Docker, no Git and no clone. Add your AI key afterwards, inside the app: Settings › AI & models. OpenAI, Gemini or Claude, any one is a complete setup.",
    },
    {
      n: "2",
      title: "Your assistant",
      required: false,
      body: "An MCP server inside the app, reached by URL. Run maestro connect, or open Settings › Connected agents › Connect an agent app. It covers Claude Desktop, Claude Code, Codex, Cursor and VS Code.",
    },
    {
      n: "3",
      title: "The Companion",
      required: false,
      body: "A Chrome side panel for saving and filling job pages. chrome://extensions › Developer mode › Load unpacked › the extension folder. Nothing to configure on the default ports.",
    },
  ],
  uvInstall: "curl -LsSf https://astral.sh/uv/install.sh | sh",
  uvInstallWindows: `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`,
  install: `uv tool install --python 3.12 maestro-career-studio
maestro start`,
  // The home page has room for one block, so it carries both steps and says
  // where the Windows line lives.
  homeInstall: `# 1. Install uv once, then open a new terminal.
curl -LsSf https://astral.sh/uv/install.sh | sh     # macOS and Linux

# 2. Install Maestro, then start it. Opens http://localhost:3000.
uv tool install --python 3.12 maestro-career-studio
maestro start`,
  homeInstallNote: "On Windows, use the PowerShell line on the Get started page. No Docker, no Git, no clone.",
  mcp: "maestro connect",
  appSteps: [
    {
      t: "Install uv, once",
      b: "uv installs Maestro as a single command and fetches the Python it needs. The package brings its own web app and its own Node. Open a new terminal afterwards so uv is found.",
    },
    {
      t: "Install Maestro and start it",
      b: "maestro start runs Maestro in the background and opens http://localhost:3000. Closing the terminal does not stop it. The first start downloads the scoring model (about 100 MB, once) from Hugging Face, so allow a minute or two. If the terminal says maestro is not found, run uv tool update-shell and open a new terminal.",
    },
    {
      t: "Add your API key, inside the app",
      b: "Settings › AI & models: paste one key, from OpenAI, Gemini or Claude, and press Test on each model. A key saved in the app wins over one in maestro.env, so pick one place and stay there.",
    },
  ],
  more: "The full command table, where your data lives per system, TeX for LaTeX templates and uninstalling are in the setup reference on GitHub.",
  ports: "If a port is taken, set MAESTRO_PORT (backend, 8001) or MAESTRO_WEB_PORT (app, 3000) in maestro.env, then run maestro restart. The Companion expects the default ports, so give it the new addresses under Extension options.",
  docker: {
    eyebrow: "Alternative · self-hosters and contributors",
    title: "Run it with Docker instead",
    lede: "Docker stays the route for servers and for working on the code. It runs two containers, the backend and the frontend, with your data in one SQLite file in the folder you clone. It needs Docker, Git and about a 1 GB download. On Windows, run it under WSL.",
    code: `git clone ${site.repo}.git
cd maestro-career-studio
cp .env.example .env

# Downloads prebuilt images, about 1 GB.
docker compose up -d`,
    after: "Open http://localhost:3000, then add your key in Settings › AI & models. The first start sets up the database and adds a demo resume so you have something to look at.",
    ports: {
      title: "Port already allocated?",
      body: "Both host ports are overridable in .env: BACKEND_HOST_PORT (8001) and FRONTEND_HOST_PORT (3000). Only the host side of the mapping moves.",
    },
    separate: {
      title: "Docker and uv are separate copies",
      body: "They keep separate data, and both want ports 8001 and 3000, so run one at a time. Moving from Docker to uv? Stop Docker, install Maestro as above, then run maestro import-docker CHECKOUT once. --dry-run shows the plan, and it changes nothing in the Docker folder.",
    },
  },
  troubleshooting: {
    title: "If something goes wrong",
    columns: ["You see", "It means", "Do"],
    rows: [
      ["maestro: command not found", "The install folder is not on your PATH yet", "Run uv tool update-shell, then open a new terminal"],
      ["A port is already in use", "Another program holds 3000 or 8001", "The message names the port. Set MAESTRO_WEB_PORT or MAESTRO_PORT in maestro.env, then maestro restart"],
      ["Page loads but everything errors", "Maestro is still starting", "maestro status, or maestro logs. localhost:8001/health answers {\"status\":\"ok\"} when it's ready"],
      ["The first start is slow", "It is downloading the scoring model, about 100 MB, once", "Wait it out. maestro start --skip-model leaves it for the first score"],
      ["Calls fail 401 though Settings says Configured", "A stale key. The label says where it lives.", "Re-enter it in Settings › AI & models and press Test"],
      ["Cannot connect to the Docker daemon", "Docker isn't running (Docker route)", "Start Docker Desktop, wait for “running”, re-run the command"],
      ["port is already allocated", "Another app owns 3000 or 8001 (Docker route)", "Change the matching *_HOST_PORT in .env"],
      ["Added a key to .env after starting", "Keys are read at process start (Docker route)", "docker compose restart backend. An in-app key overrides .env"],
    ],
  },
  update: {
    uv: "maestro update",
    docker: "./scripts/update.sh",
    uvNote: "It checks PyPI, prints any breaking changes from the changelog, saves a verified snapshot of your data, then stops Maestro, updates it and starts it again. maestro status tells you if a newer version exists.",
    dockerNote: "From the folder you cloned. It saves a database backup, moves to the newest release and waits until the app is healthy. --check changes nothing and only answers: am I up to date? It needs bash, so on Windows run it under WSL.",
  },
  updateFacts: [
    { t: "Your data is not involved", b: "Resumes, jobs and settings are files an update does not touch. The database is one SQLite file in your data folder, and it is snapshotted or backed up first. Deleting the project folder on the Docker route does delete your data." },
    { t: "Migrations run themselves", b: "They run when the backend starts, so the first start after an update takes longer than usual." },
    { t: "Two things stay manual", b: "Reload the Companion at chrome://extensions and reload any open job tab, then restart your AI assistant app so it sees new tools. On Windows, quit Claude Desktop before maestro update." },
  ],
  prerequisites: [
    {
      title: "uv",
      body: "Install it once. It installs Python 3.12 for you, and the package carries its own web app and Node. No Docker, no Git, no clone, and no WSL on Windows.",
    },
    {
      title: "macOS, Linux or Windows (x64)",
      body: "Windows on ARM is best effort and untested. Alpine and other musl Linux are not supported. Windows is the least tested platform.",
    },
    {
      title: "About a 100 MB download, once",
      body: "The scoring model comes from Hugging Face on first start. No resume or job text is sent.",
    },
    {
      title: "One API key, recommended",
      body: "OpenAI, Gemini or Claude, added in Settings › AI & models after first start. Without one you still get scoring, PDFs and tracking, and over MCP your assistant supplies the model.",
    },
  ],
  // Three tiers, not two. The middle one is the easiest to undersell: over MCP
  // the assistant is the model, and the server takes what it authored through
  // the same gates. kb_ingest_resume says "No in-house LLM" in as many words.
  keyless: {
    title: "What runs with no key at all",
    works: [
      "Match scores across every base resume",
      "Health reports, gap diagnostics and full manual tailoring",
      "The raw LaTeX and Typst editors, and PDF compilation",
      "Job tracking and analytics",
      "The Companion's Saved answers only fill, straight from your saved answers",
    ],
    overMcp: [
      "Career history building. Your assistant parses the resume, the server stores it with no in-house LLM.",
      "Job capture. The agent reads the posting and stores the structured fields.",
      "Tailoring edits and gap resolutions, authored by the agent, applied through the same honesty gates.",
    ],
    wantsKey: [
      "In-app cover letters and screening answers",
      "The Companion's Saved answers + AI fill, which answers what saved answers could not",
      "The in-app Assistant, and career history capture that files free text against the right item",
      "First-start career history seeding, which defers and retries once a key is there",
    ],
  },
  localModels: {
    title: "Local model servers: configurable, untested",
    body: "The app speaks to any OpenAI-compatible endpoint, so Ollama, LM Studio or vLLM can be pointed at with OPENAI_BASE_URL. We haven't validated a local model end to end yet, and the heavy asks are exactly where small models struggle: long tailoring prompts, strict JSON, streaming tool calls. So we make no offline promise until we can stand behind one. One catch: a built-in Gemini model id always goes to Google, even with a custom server set, so give a local model an id that is not in the built-in list.",
    ask: "If you try it, tell us what worked and what broke, with the model name. That's a genuinely useful contribution.",
  },
  freshInstall: {
    title: "If your install turns up something new",
    body: "The troubleshooting table covers what real installs have hit. maestro check prints your install's facts as JSON to paste into an issue, and it makes no network call. This is early software, and it has had little testing on machines that aren't the author's, so an issue with the log is genuinely useful.",
  },
} as const;

export const faqs = [
  {
    q: "Do I need an API key?",
    a: "Recommended, yes. The parts that make Maestro fastest day to day run on it: in-app tailoring, the Companion's AI fill, cover letters and screening answers, building your career history, the Assistant. One key, OpenAI, Gemini or Claude, is a complete setup. Without one you still get scoring, PDFs and tracking, and if you drive it over MCP your assistant supplies the model.",
  },
  {
    q: "Does it need Docker?",
    a: "No. The default install is two commands with uv, on macOS, Linux and Windows (x64): uv tool install, then maestro start. Docker is the alternative for self-hosters and contributors.",
  },
  {
    q: "What does it actually cost to run?",
    a: "About a penny per tailored application on the OpenAI default, under 3¢ on Gemini. In our tests, about a penny is also possible with Claude Haiku. The OpenAI and Gemini figures come from tracing real postings with Langfuse at list prices. My whole search so far has cost under $2 in tokens. The software is Apache-2.0: no account, no subscription, no tier.",
  },
  {
    q: "Is my resume uploaded anywhere?",
    a: "Not to us. There is no Maestro server and no account, and Maestro listens on 127.0.0.1 out of the box. When you use an AI feature, the text it needs goes to the AI service you picked, with your key. If you connect an assistant over MCP, what its tools return goes to that assistant's provider. The first start downloads the scoring model from Hugging Face, and no resume text is sent. PRIVACY.md lists every place data can go.",
  },
  {
    q: "Can I use a local model?",
    a: "You can point it at any OpenAI-compatible endpoint, including Ollama, LM Studio and vLLM. We won't claim it works, because we haven't validated a local model end to end. Long tailoring prompts, strict JSON and streaming tool calls are where small models struggle. Scoring never calls an AI service at all, so that half doesn't depend on a model.",
  },
  {
    q: "Is the match score what an employer's ATS shows?",
    a: "No. It's our score: deterministic, versioned, reproducible. It doesn't predict what an employer's applicant tracking system shows them, and no consumer tool can. One caveat worth knowing: recency is part of the score and it is measured against today, so the same document can score slightly differently months apart as its work ages. Everything else holds still. Use it to compare your own drafts and to catch parsing and coverage problems. Chasing 100 gets you a keyword-stuffed resume that modern screens flag.",
  },
  {
    q: "Will it apply to jobs for me?",
    a: "By default it carries an application to the point of submission and stops. The Companion fills the form and stops, and you press Submit. With a connected agent, an apply run waits for your yes before each submit, within a daily limit you set. Nothing is submitted from the web app, and a submit click that can't be verified is never retried. The one exception is opt-in: Full automation, off by default in Settings › Connected agents, lets your own agent submit queued jobs whose final review is clean.",
  },
  {
    q: "Can I use my own resume template?",
    a: "Yes, that's the point of the template layer. Start from a bundled LaTeX or Typst design, adapt one you found, or write your own in the editor. Validation compiles a sample PDF and runs a parse gate, so a design that would break an applicant tracking system parser never ships.",
  },
  {
    q: "Which languages are supported?",
    a: "English resumes and job descriptions, with full support for accented Latin characters (Zürich, José, Nestlé, São Paulo). Non-Latin scripts are refused at ingest rather than scored misleadingly at zero coverage.",
  },
  {
    q: "How early is this, really?",
    a: "Early, and the repo says so. It has had little testing on machines that aren't mine, and Windows is the least tested platform. KNOWN_ISSUES.md lists what's solid, what's rough and what's a deliberate limitation: the Jobs page loads everything at once and stops at 500 rows, scores aren't re-scored when a base resume changes, and autofill isn't first-try-clean on every site. If something breaks, a clear bug report is the most useful thing you can send.",
  },
] as const;

export const guide = {
  hero: {
    eyebrow: "The guide",
    title: "Your first hour, once it's running.",
    lede: "Installing lives on the Get started page. This is everything after: find your way around, run one real application through it in the order that works, work postings from the Companion, and drive the whole loop from your assistant. The full manual is Using Maestro CS on GitHub.",
  },

  agentPath: {
    eyebrow: "The fastest path",
    title: "Let an agent install it",
    body: "Already using Claude Code, the Codex CLI or Cursor? Open a session anywhere and paste this. It installs uv if needed, installs Maestro and starts it.",
    prompt:
      "Install Maestro Career Studio. If uv is missing, install it from https://docs.astral.sh/uv/. Then run `uv tool install --python 3.12 maestro-career-studio` and `maestro start`. Wait until http://localhost:3000 loads, run `maestro status`, then tell me what still needs me.",
    second: "Once it is running, this adds it to your assistant:",
    secondPrompt:
      "Run `maestro connect` to see which apps already have Maestro, then run it for the app I use. Tell me when I need to restart that app.",
    limits: {
      title: "Two things an agent can't do for you",
      items: [
        "Add your API key in Settings › AI & models. Where your key goes is a judgement call, and it's yours.",
        "Load the Companion in Chrome. Loading an unpacked extension is a click in your own browser.",
      ],
    },
  },



  tour: {
    eyebrow: "First, the map",
    title: "Find your way around",
    lede: "The sidebar, top to bottom.",
    items: [
      { name: "Add job", body: "Paste a job description or link and start tailoring against it." },
      { name: "Jobs", body: "Every job you've saved, from saved to offer. Filter by Tracked, Yours or Agents." },
      { name: "Agent inbox", body: "Where jobs your agent found wait for you to Queue or Skip." },
      { name: "Automations", body: "Ready-made prompts to paste into your agent." },
      { name: "Referrals", body: "Contacts and their company careers pages." },
      { name: "Career history", body: "Your evidence: work history as approved, reusable bullets." },
      { name: "Base resumes", body: "One resume per career track, built from your career history." },
      { name: "Templates", body: "The LaTeX and Typst designs your PDFs render through." },
      { name: "Assistant", body: "The in-app chat. Pin a resume, section or bullet." },
      { name: "Analytics", body: "What the market you're applying into keeps asking for." },
      { name: "Profile", body: "Persona, job preferences, and your saved answers for forms." },
      { name: "Settings", body: "AI & models, Tailoring, Connected agents, Appearance and About." },
    ],
  },

  firstSession: {
    eyebrow: "The heart of it",
    title: "Your first session, in order",
    lede: "The order matters. Everything downstream composes from your career history, so feed that first and the rest gets easier.",
    steps: [
      { t: "Import every resume you have", b: "Up to 10 files a batch. PDF, DOCX, Markdown, text or PowerPoint. Old versions, role-specific variants, the too-long one. They all carry evidence." },
      { t: "Review your drafts", b: "Imported bullets arrive under Drafts to review. Only approved bullets ever land on a resume. Merge the duplicates once and every future application benefits." },
      { t: "Fill in your Profile", b: "Contact details, persona, and job preferences: roles, seniority, location, work authorization. Those drive scoring warnings and agent hunts." },
      { t: "Add your API key and pick models", b: "Settings › AI & models. One key from OpenAI, Gemini or Claude. Press Test on each model: it measures what the model can actually do before you depend on it." },
      { t: "Pick a default template", b: "Every render uses it unless a resume overrides it. You can switch any time without touching content." },
      { t: "Build a base resume per career track", b: "Base resumes › New base resume › From career history. Then open its Health report: fixing its findings now beats fixing them after every tailoring run." },
      { t: "Save a job", b: "Click Add job and paste the posting text or link, or use the Companion. Extraction structures it; the match score runs against every base." },
      { t: "Tailor through the gap workflow", b: "Each gap names a requirement your resume doesn't evidence. Answer honestly and true-but-unwritten material becomes permanent career history. Every AI edit is a revertible diff. Read it." },
      { t: "Set quick-tailor preferences", b: "Once you've done a few manual passes. Then Quick Tailor handles the already-know-the-answer cases in one step." },
      { t: "Generate the package and read it", b: "Cover letter, screening answers, the PDF. Every render is filed on disk in a company-and-role folder, so you can verify exactly what you sent." },
      { t: "Track it", b: "Mark applied, record outcomes. Analytics starts paying off after about ten captured jobs." },
    ],
  },

  extension: {
    eyebrow: "The Companion",
    title: "Working a posting from the Companion",
    lede: "Installed in Part 3 of the Get started page. On a job page the panel walks four steps, and each opens when the one before it has an answer, so it always shows the next thing worth doing.",
    flow: [
      { t: "Job", b: "Save the posting in front of you. Saves dedup against what you already track, so saving twice is safe. Save job also scores every base resume and picks the best match." },
      { t: "Resume", b: "Use your base resume, or tailor to this job. A job whose resume has no PDF yet gets Create PDF." },
      { t: "Fill", b: "Autofill fills the form from your saved answers and lists what it filled and what still needs you. Passwords and government IDs are skipped, and signatures and agreement boxes stay yours unless you turn on the agreement permission. It never moves to the next page or submits. You press Submit." },
      { t: "Track", b: "Mark it Draft or Applied before you close the tab, and the row on the Jobs page is already there when you get back to the app." },
    ],
    note: "If you changed the app's ports, set the backend and app addresses under Extension options (chrome://extensions, Details on the Companion card). What the Companion keeps is on the Privacy page.",
  },

  mcp: {
    eyebrow: "Your assistant",
    title: "Driving it over MCP",
    lede: "Registering the server is Part 2 of the Get started page. Once it's there, your assistant can run the whole loop by conversation. The useful skill is knowing what to ask for.",
    ideas: [
      { t: "Work a posting end to end", b: "Paste a link or the JD text into chat: capture it, score it against every base, walk the gaps, tailor, and render the PDF, all by asking." },
      { t: "Keep the record current", b: "Hand it a new resume or paste a review's wins: it drafts bullets for your career history, you approve them, and they compose into every future document." },
      { t: "Ask the market questions", b: "The explore tools answer things like \"what keeps coming up in the jobs I save that I'm not showing?\" from your own captured postings." },
    ],
    note: "Everything an agent authors passes the same honesty gates as the app: unevidenced keywords can only reach the skills list, and every edit lands as a revertible version.",
  },

  next: {
    eyebrow: "Where it can go next",
    title: "Where it can go next",
    lede: "Once the server is registered, your assistant can run the whole loop. The Automations page copies a ready-made prompt for each job; paste it into Claude Desktop, Codex or any MCP agent.",
    items: [
      { t: "A daily job hunt", b: "Find, save and score postings, and file the best as proposals. You decide in the Agent inbox." },
      { t: "Referral-first hunting", b: "Add contacts and their careers pages under Referrals, then point a hunt at those URLs specifically." },
      { t: "Attended apply runs", b: "Work the jobs you queued with a browser, with one yes per application before the final submit." },
    ],
    closing: "Whatever the agent does, the default holds: your yes before each submit, and everything is written down.",
  },

} as const;

export const makerNote = {
  title: "It's early. I'd rather hear about it.",
  body: "I built this because I needed it, and I use it every day. It is early, and early software has edges. If something breaks, tell me. A clear bug report is a contribution and right now it's the most useful kind. Pull requests welcome too.",
  signature: "Ajey Dhayashanker Loganathan",
} as const;

export const closing = {
  title: "Career tooling should be infrastructure, not a rental.",
  body: "Install it, run it, keep everything it produces. Nothing here was built to make leaving hard.",
} as const;
