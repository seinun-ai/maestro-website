/**
 * Every claim here is traceable to the product repo (README.md, SYSTEM.md,
 * KNOWN_ISSUES.md, docs/reports/2026-08-11-launch-content-kit.md). If a number
 * changes there, change it here. This is the only place any of them are written.
 *
 * Positioning (owner's call, 2026-08-23): the recommended setup is BRING A KEY.
 * "No key" is two honest tiers — the deterministic core always works, and over
 * MCP the client agent supplies the model. Local model servers are
 * "configurable but untested". Never claim "fully offline" anywhere.
 *
 * Voice: short sentences, concrete nouns, second person. No em-dash pile-ups,
 * no "not X but Y" scaffolding, no throat-clearing.
 */

export const site = {
  name: "Maestro Career Studio",
  short: "Maestro CS",
  tagline: "A local-first, evidence-backed job-application studio.",
  description:
    "Write down what you did once. Maestro builds every tailored resume, cover letter and screening answer from that record, scores it with an engine that never guesses, and typesets it locally into a real PDF. About a penny an application.",
  repo: "https://github.com/seinun-ai/maestro-career-studio",
  issues: "https://github.com/seinun-ai/maestro-career-studio/issues",
  contact: "ajey@seinun.com",
  license: "Apache-2.0",
  author: "Ajey Dhayashanker Loganathan",
  // Set NEXT_PUBLIC_SITE_URL at build time before deploying. Canonical URLs,
  // Open Graph, sitemap.xml and robots.txt all derive from it.
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
  lede: "Write down what you did, once. Maestro builds every tailored resume, cover letter and screening answer from that record. Scored by an engine that never guesses. Typeset locally into a real PDF. About a penny an application.",
  primaryCta: { label: "Get started", href: "/start" },
  secondaryCta: { label: "Why you'd want this", href: "/why" },
  mediaAlt: "Capture a job description, score it, tailor the resume, review every AI edit as a diff, and render a typeset PDF",
  mediaCaption: "One real run: 49.2 to 70.8, every AI edit shown as a diff you can revert, and a typeset PDF at the end.",
} as const;

export const heroStats = [
  {
    value: "≈1¢",
    label: "per application",
    detail: "Measured on real applications. Not guessed at.",
    accent: true,
  },
  { value: "83", label: "MCP tools", detail: "Run the whole pipeline from Claude, Codex or ChatGPT desktop." },
  { value: "3", label: "local containers", detail: "Bound to 127.0.0.1. No account, no cloud, no upload." },
  { value: "4,023", label: "tests passing", detail: "Scoring determinism is enforced in CI, not claimed in a README." },
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
    body: "Most checkers ask an LLM. One popular tool scored the same resume anywhere from 66 to 99 across a hundred runs. Maestro has no LLM in the scoring path at all, so the same resume and posting score the same, run after run. Recency is part of the score, so a document scored months apart can move as its work ages. Nothing else does.",
    source: { label: "the 66–99 test", href: "https://danunparsed.com/p/hackerrank-open-source-ats" },
    feature: "Deterministic ATS engine",
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
    body: "The Health Report checks one resume on its own merits: parsing, dates, evidence quality, format gates. You get a letter grade and a fix list ranked by impact. Fail a fatal gate and tailoring is blocked, because reordering a broken document doesn't repair it.",
    feature: "Health Report",
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
    body: "Cover letters and screening answers come from your Career KB and the answers you've already given. The extension fills forms from your Autofill Profile. Credentials, signatures, consent boxes and government IDs are deny-listed and stay yours to type.",
    feature: "Q&A and autofill",
    href: "/features#extension",
  },
  {
    pain: "You do the work. You never find time to write it down.",
    answer: "Drop the raw material in. Get structure back.",
    body: "Every resume variant you own, plus project write-ups, certifications, review notes. Maestro resolves duplicate entities across them, clusters the bullets and synthesises one Career Knowledge Base. That becomes the evidence base for everything downstream.",
    feature: "Career KB",
    href: "/features#career-kb",
  },
  {
    pain: "You don't actually know what the market wants for your roles.",
    answer: "Your own postings, quantified.",
    body: "Every job you capture feeds a picture of the market you're really applying into: top skills, a skill heatmap, role mix over time. Gaps sort into missing, already in your KB, or already on a resume. Frequent and missing is what to learn next. Frequent but already yours is what you keep forgetting to say.",
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
    body: "Maestro hands your agent a brief: your preferences, your work-authorization answers word for word, the guardrails you set. Claude or Codex reads the boards, captures what fits, scores it against your bases and comes back with a ranked shortlist. No integrations to break.",
    feature: "Hunt over MCP",
    href: "/agents",
  },
  {
    pain: "You wish the form-filler knew everything your resume knows.",
    answer: "It does, per application.",
    body: "The extension fills from your Autofill Profile and grounds each answer in the application on screen, not a generic saved blob. Its telemetry logs which fields it met and whether they filled. It can't log what you typed, because the table has no column for it.",
    feature: "AI-grounded autofill",
    href: "/features#extension",
  },
] as const;

export const whyClose = {
  title: "And if you walk away, you keep everything.",
  body: "Your Career KB exports to one career.md. Plain Markdown, no model involved, readable and diffable. Resumes are JSON on your disk. Every render sits in its own company-and-role folder with the source and the exact PDF you sent.",
  kicker: "Here, all you have is control.",
} as const;

/* --------------------------- premise --------------------------- */

export const problem = {
  eyebrow: "The premise",
  title: "Your effort should compound. Right now it evaporates.",
  body: [
    "You rebuild your resume for every role. You rewrite the cover letter from memory. You answer “tell us about a time you…” for the fourth time. Then the next posting arrives and you start from nothing.",
    "Meanwhile the average opening draws around 240 applications, and screens increasingly flag resumes that read like a machine wrote them. Volume stopped working. Depth is the only lever left, and depth is only affordable when last month's work is still sitting there.",
  ],
  pull: "Write it once. Reuse it forever.",
} as const;

export const pillars = [
  {
    icon: "determinism",
    title: "Scoring that can't drift",
    body: "No LLM anywhere in the scoring path. Deterministic lexical layers plus a pinned embedding model running on your CPU. Same resume, same posting, same config: the same number and the same breakdown, run after run.",
    proof: "One popular LLM-judged checker scored the same resume 66–99 across a hundred runs.",
    proofHref: "https://danunparsed.com/p/hackerrank-open-source-ats",
  },
  {
    icon: "evidence",
    title: "Evidence, not invention",
    body: "Resumes compose from approved points in your Career KB, word for word. Rewriting a bullet is a separate step that asks first. A keyword with no evidence behind it reaches your skills list and nowhere else.",
    proof: "Every edit is a version. Nothing is lost, nothing is one-way.",
  },
  {
    icon: "ownership",
    title: "It leaves with you",
    body: "Apache-2.0. No account, no subscription, no usage tier. You pay for the tokens you spend and nothing else. Your KB exports to one career.md you can read and diff.",
    proof: "About a penny an application, against $15–75 a month.",
  },
] as const;

/* -------------------------- economics -------------------------- */

export const economics = {
  eyebrow: "What it costs",
  title: "A tailored application costs about a penny.",
  lede: "We traced real applications end to end with Langfuse in August 2026, on the model profile a fresh install ships with, priced at list. Your payloads will vary. Not by an order of magnitude.",
  headline: {
    stat: "≈1¢",
    label: "per tailored application",
    body: "Capture the posting, score it, close the gaps, tailor, render the PDF, and write the cover letter and screening answers. All of it.",
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
    { op: "Career KB consolidation, per resume (one-time)", tokensIn: "~7k", tokensOut: "~1.5k", cost: "~⅓¢" },
  ],
  total: { op: "Capture → tailored resume → full apply package", cost: "≈1.3¢" },
  note: "Priced against GPT-5.6 Luna at $0.20 per million input tokens and $1.20 per million output. Multiply it out yourself — that is the point of showing the split.",
} as const;

export const modelProfiles = {
  eyebrow: "Choose your models",
  title: "Two setups we measured. Both work well.",
  lede: "Any OpenAI-compatible model can be configured. These are simply the two we benchmarked on real postings with every call traced, one per API key, so you can start from a known-good setup instead of guessing. The Fast tier turned out to decide almost everything — how much of a posting gets extracted, how honest your base score is, and most of the waiting — while the Smart tier barely moved the result.",
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
  ],
  why: "A fresh install ships with the OpenAI one already set, because honest scoring starts at extraction: a fast model that misses requirements inflates your fit score, in our tests by about nine points. Neither is a tier above the other, and switching is three dropdowns in Settings → Models. Mixing tiers across providers works too; it just bought us nothing these two don't already give you.",
} as const;

/* ---------------------------- steps ---------------------------- */

export const steps = [
  {
    n: "01",
    title: "Feed the Career KB, once",
    summary: "Every resume variant you own. The old ones, the role-specific ones, the one that runs to three pages.",
    body: "Maestro resolves duplicate entities across them, clusters the bullets and builds one Career Knowledge Base. This is the step that keeps paying: everything downstream composes from it, so its quality is the ceiling on everything else.",
    note: "Bullets that arrive unchanged from a file you wrote are approved on import. Anything merged across resumes, or written by a model, waits in the review inbox for you. Fix a duplicate once and it is fixed for every future application.",
    image: "/media/kb-onboarding.png",
    imageAlt: "The Career KB import dialog consolidating several resume variants into one knowledge base",
  },
  {
    n: "02",
    title: "Build a base resume per track",
    summary: "One per track you actually target. Not one per job.",
    body: "“New base resume → From Career KB” proposes what belongs and tells you why it left the rest out, with a drafted summary. The instruction box steers shape, not facts: “lead with pipeline and cloud work, keep it mid-level, drop the teaching.”",
    note: "Bullets are never rewritten here. Approved KB points compose word for word, which is what keeps a generated resume defensible.",
    image: "/media/base-resume.png",
    imageAlt: "The base resume studio with its health grade and a live typeset preview",
  },
  {
    n: "03",
    title: "Capture the job, then pre-scan it",
    summary: "Paste the posting, or grab it with the extension from the board you're already reading.",
    body: "Score it against every base. Then the knock-out pre-scan checks what the posting actually states — work authorization, OPT policy, salary, years of experience — against your profile.",
    note: "You find out about a disqualifier before you spend the evening, not at the screening call.",
    image: "/media/job-overview.png",
    imageAlt: "A captured job with its extracted fields and a knock-out pre-scan of the stated requirements",
  },
  {
    n: "04",
    title: "Work the gaps",
    summary: "A gap is a requirement your resume doesn't evidence yet.",
    body: "The workflow asks pointed questions to surface things that are true but unwritten. Close one and you've either produced new evidence that's yours permanently, or it stays a gap. That's the difference between tailoring and drifting.",
    note: "Already know the answer? Quick Tailor does it in one request, same honesty rules, no session to open.",
    image: "/media/kb-import.png",
    imageAlt: "Importing KB evidence into a resume, with the drawer showing what is already present",
  },
  {
    n: "05",
    title: "Render it, read it, track it",
    summary: "Cover letter, screening answers, and a real LaTeX or Typst PDF compiled on your machine.",
    body: "Read the output before it goes anywhere. Your name is on it. Then the tracker carries the application from Saved to Accepted, with inline status, filters for what you did versus what an agent did, and every render filed on disk.",
    note: "Every AI edit is a per-hunk diff you can revert, so “what changed” is never a guess.",
    image: "/media/applications.png",
    imageAlt: "The application tracker, from saved jobs through to signed offers",
  },
] as const;

/* --------------------------- features -------------------------- */

export const features = [
  {
    id: "career-kb",
    eyebrow: "The record",
    title: "A Career KB that resolves your history",
    body: "Add your resume variants and Maestro performs entity resolution, deduplication, bullet clustering and profile synthesis. What comes out is one structured record of your work, projects and skills. Certifications, project write-ups and review notes belong in there too.",
    bullets: [
      "Approved points compose word for word into resumes and applications",
      "Verbatim bullets from your own files import approved; merged and model-written points wait for review",
      "Every point keeps provenance back to the document it came from",
      "Seeding defers cleanly with no API key and retries on a later boot",
    ],
    image: "/media/kb-onboarding.png",
    imageAlt: "Career KB onboarding: drop in your resumes, get a knowledge base",
  },
  {
    id: "scoring",
    eyebrow: "The measurement",
    title: "Deterministic scoring, and a measured lift",
    body: "Deterministic lexical layers plus a pinned embedding model for semantics. Soft matches need both a shared lexical anchor and embedding proximity, so “container orchestration” earns credit against Kubernetes without inventing a skill you don't have.",
    bullets: [
      "Same resume, posting and config version gives an identical score and breakdown, run after run",
      "Recency is one of the inputs, so a document scored months apart can move as its work ages — the only thing that does",
      "Base-to-tailored delta recorded per application, so you can see if tailoring did anything",
      "Runs offline on CPU. Scoring never calls a model.",
    ],
    image: "/media/job-overview.png",
    imageAlt: "A job overview with the deterministic score breakdown and knock-out pre-scan",
  },
  {
    id: "health",
    eyebrow: "The pre-flight",
    title: "Health Report: is this document sound at all?",
    body: "A gap needs a job description. A Health Report doesn't. It checks one resume on its own merits — parsing, dates, evidence quality, format gates — and hands back a letter grade with a fix list ranked by what each flaw costs you.",
    bullets: [
      "A failing fatal gate blocks tailoring outright",
      "Tailoring reorders a healthy document. It can't repair a broken one.",
      "Overrule any finding, with your reason on the record",
    ],
    image: "/media/health-report.png",
    imageAlt: "A job-independent resume health grade with the cost of each defect",
  },
  {
    id: "templates",
    eyebrow: "The output",
    title: "Real typesetting, without the typesetting",
    body: "Two engines compiled locally: LaTeX and Typst. You edit content in a structured editor and layout stays the template's job, so changing a word can't break your formatting. A template owns presentation and nothing else, which is why switching one never touches your content.",
    bullets: [
      "Changing your design is a button, not a rebuild",
      "Start from a bundled design, adapt one you found, or write your own",
      "Validation compiles a sample PDF and runs a parse gate, so a design that breaks ATS parsers never ships",
    ],
    image: "/media/templates.png",
    imageAlt: "The template gallery, with LaTeX and Typst designs compiled locally",
  },
  {
    id: "extension",
    eyebrow: "The capture",
    title: "An extension that never stores what you typed",
    body: "A floating widget on the job page. Capture the posting, score it against every base resume, tailor on the spot, fill the form from your Autofill Profile. Its telemetry records which fields it met and whether they filled. It cannot record a value you typed, because the table has no column for one.",
    bullets: [
      "Zero-config install. The extension pins its identity, so the backend already trusts it.",
      "Signatures, attestations, consent boxes, credentials and government IDs are deny-listed",
      "It posts to your own backend on localhost. There's no collector on the other end.",
    ],
    image: "/media/extension.gif",
    imageAlt: "The extension widget capturing a job posting and scoring it against four base resumes",
  },
  {
    id: "analytics",
    eyebrow: "The feedback loop",
    title: "What the market keeps asking you for",
    body: "Every captured job builds a picture of the market you're really applying into: top skills, a skill heatmap, role mix over time. Filter by role category, seniority and employment type.",
    bullets: [
      "Gaps sort into missing, already in your KB, or already on a resume",
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
    title: "Chat scoped by what you pin",
    body: "Pin a resume and chat works on that one. Pin a section, an entry or a single bullet and edits outside that scope get refused, not just discouraged. Proposed edits arrive as a card you accept or discard.",
  },
  {
    id: "quick-tailor",
    title: "Quick Tailor",
    body: "For when you already know the answer. One request against a job, resolutions planned from your saved preferences, tailored and rendered without opening a session. Same honesty rules.",
  },
  {
    id: "knockout",
    title: "Knock-out pre-scan",
    body: "Work authorization, OPT policy, salary and years of experience, checked against your profile at capture time. Disqualifiers surface before you spend the evening.",
  },
  {
    id: "export",
    title: "career.md export",
    body: "Your whole career record as one Markdown file, no model involved. Download it from the Career KB page or over MCP. Every render is filed on disk in its own company-and-role folder.",
  },
] as const;

export const comparison = {
  columns: ["Typical AI resume builders", "CLI skill frameworks", "Maestro CS"],
  rows: [
    {
      label: "ATS scoring",
      cells: ["LLM or black-box. Same input, different score per run.", "LLM judgment", "Deterministic and LLM-free. Same input, same score."],
    },
    { label: "Measured tailoring lift", cells: ["Static score only", "Not scored as a lift", "Base-to-tailored delta, per application"] },
    { label: "See what the AI changed", cells: ["No audit trail", "No", "Per-hunk diff, revertible"] },
    { label: "Typeset output", cells: ["House web templates", "HTML to PDF", "Real LaTeX and Typst, bring your own"] },
    { label: "Career record", cells: ["None, per document", "Flat markdown/YAML files", "Structured, versioned, exports to one career.md"] },
    { label: "Agent access", cells: ["No", "CLI skill files", "MCP server, 83 tools, on your machine"] },
    { label: "Auto-submits for you", cells: ["N/A", "Never (stated)", "Never. Consent ledger, enforced."] },
    { label: "Cost", cells: ["$15–75/month", "Free + tokens", "Free, Apache-2.0, plus ≈1¢ an application in tokens"] },
  ],
  footnote: "Only checkable claims. Verify any row yourself. Columns describe the categories as of August 2026; tell us if one has gone stale.",
} as const;

/* ---------------------------- agents --------------------------- */

export const agents = {
  hero: {
    eyebrow: "Agent surfaces",
    title: "The assistant you already use can drive all of it",
    lede: "Maestro ships an MCP server. Extract a posting, score it, walk the gaps, render the PDF, all without leaving Claude, the ChatGPT desktop app or the Codex CLI. Unlike SaaS-backed job-search servers, it runs on your machine against your database.",
    image: "/media/mcp-dashboard.png",
    imageAlt: "Claude pulling the whole pipeline over MCP and building its own view of it",
  },
  setup: {
    title: "One script, then one paste",
    body: "MCP clients need an absolute path to the server binary, and GUI apps don't inherit your shell PATH. The script handles that: it creates the host venv, reads your backend port out of .env, and registers the server with Claude Code directly.",
    manual:
      "Claude Desktop and the ChatGPT desktop app / Codex CLI get a ready-to-paste block instead, every path already filled in. Those two you paste yourself, because both config files are shared with your other MCP servers and the script won't edit them behind your back.",
    targets: [
      { client: "Claude Code", how: "Registered automatically", auto: true },
      { client: "Claude Desktop", how: "Prints a block for claude_desktop_config.json", auto: false },
      { client: "ChatGPT desktop / Codex CLI", how: "Prints a block for ~/.codex/config.toml", auto: false },
    ],
    flags: "Add --profile hunt for a scoped profile, or --print-only to change nothing and just see the config. Restart Claude Desktop with Cmd+Q after pasting. Closing the window isn't enough.",
    delegate: {
      title: "Or just ask the assistant to do it",
      body: "Agents that can edit files and run commands are perfectly capable of wiring this up themselves. Run the script with --print-only, hand the output to Claude Code or the Codex CLI, and ask it to add the server to your config. It knows where those files live and it can merge into them without clobbering your other MCP servers.",
      prompt: "Run ./scripts/setup-mcp.sh --print-only, then add the maestro-career-studio server to my MCP config. Merge it in — don't overwrite the servers already there.",
      caveat: "Read the diff before you accept it. It is editing a config file that other tools depend on.",
    },
  },
  keyless: {
    title: "No API key? Your assistant is the model.",
    body: "Over MCP, Claude or Codex extracts the posting and authors the tailoring edits, and the server applies them through the same honesty gates. The whole capture, score, tailor, render arc plus Career KB and resume upkeep, with no in-house LLM calls at all. If that's how you work anyway, it's a complete setup on its own.",
  },
  profiles: [
    { name: "full", detail: "All 83 tools" },
    { name: "hunt", detail: "Find, capture, triage, propose" },
    { name: "apply", detail: "Tailor, render, package" },
    { name: "explore", detail: "Analytics and market questions" },
    { name: "templates", detail: "Author and validate designs" },
    { name: "career", detail: "Career KB reads and writes" },
  ],
  hunt: {
    title: "Hunt with the agent you already use",
    body: "get_job_search_brief hands your agent your preferences, your work-authorization answers word for word, and the guardrails you configured. A Claude or Codex session then finds postings on whatever boards it can read, captures them, scores them against your bases and hands back a ranked shortlist.",
    kicker: "No board integration to get locked into. No scraper to break. The agent reads what you would have read.",
    image: "/media/hunt-digest.png",
    imageAlt: "A scheduled hunt reporting back, and stopping at your review",
  },
  ledger: {
    title: "The proposal ledger",
    body: "A hunted job becomes a proposal in a staged lane: tailored, rendered and filled without interrupting you at every page. Then it stops. You triage proposals in bulk, and apply runs only touch the ones you accepted. Nothing is ever executed from the web app. Filling and submitting happen inside a live agent session holding a browser, and consent lives in that session, one turn before the click.",
    guards: [
      "Consent is an append-only event, capped daily at a number you set",
      "An agent can't self-certify. Marking a proposal submitted needs a receipt or your own attestation.",
      "A submit click that can't be verified ends as submission_uncertain. Never retried, never re-clicked.",
    ],
    caveat:
      "Be clear-eyed about that consent event: the agent writes it when it calls the tool, so it records that the agent said you agreed. It gives you attribution afterwards and a hard ceiling on volume. It isn't a lock a prompt-injected agent can't pick. Run the lane while you watch it.",
  },
  risks: {
    title: "The risks, plainly",
    lede: "Letting an agent read job pages and drive a browser means three real exposures. The consent gate exists because they're real and unfixable.",
    items: [
      { title: "Prompt injection", body: "A job posting is untrusted text. Text inside one can try to instruct the agent reading it." },
      { title: "Unverified employers", body: "A hunted posting isn't a vetted one, and an application carries your contact details and work history to whoever posted it." },
      { title: "Bot detection", body: "Some employers filter applications that look automated, and we won't help you hide. No stealth automation, no CAPTCHA bypass, no headless submitting." },
    ],
    closing: "Use the lane on jobs you've looked at yourself. Everything it does is written down.",
  },
} as const;

/* ---------------------------- privacy -------------------------- */

export const privacy = {
  hero: {
    eyebrow: "Privacy & security",
    title: "Local-first isn't a marketing word here. It's the architecture.",
    lede: "Three containers on your machine, every port on 127.0.0.1. No account, no tenancy, no server holding your career history. One hard rule follows from that.",
  },
  facts: [
    {
      title: "Nothing is uploaded",
      body: "Scoring, rendering, tracking and export run locally. The only outbound traffic goes to the one LLM provider you configure.",
    },
    {
      title: "Your key stays yours",
      body: "It lives in your .env or your local database and goes to exactly one place: the provider endpoint you set. The API never echoes a stored key back out; the settings endpoint reports only whether one is configured. A non-http(s) model endpoint is refused outright, because that URL decides where your key is sent.",
    },
    {
      title: "No telemetry leaves your machine",
      body: "The extension's one telemetry endpoint posts to your own backend on localhost. There is no collector at the other end, in this repo or anywhere else.",
    },
    {
      title: "Your data is files you own",
      body: "Resumes are JSON on your disk. Renders land in company-and-role folders. Your KB exports to one career.md with no model involved.",
    },
  ],
  trade: {
    title: "The trade that buys all this: no authentication",
    body: [
      "Single-user and local-first means no login, and no authentication on any HTTP or MCP endpoint. That absence is what removes the accounts, the tenancy and the server holding your career history.",
      "So: don't expose it to a network. Not the internet, not your LAN, not a tunnel. Anything that can reach the API has full read and write access to your entire career record and your saved API keys.",
    ],
    kicker: "Running it locally is safe by construction. Publishing it isn't, and no setting makes it so.",
  },
  extension: {
    title: "What the extension keeps, and what it can't",
    keeps: ["Which fields it met: label, kind, rule, outcome", "The page's hostname and a first-seen timestamp"],
    never: [
      "Any value you typed. The models have no column for one.",
      "Signatures, attestations, consent boxes, credentials, government IDs",
    ],
    honest:
      "“No values” isn't the same as “nothing personal”. What that table accumulates is a record of which companies you applied to and when. Three things bound it: it never leaves your machine, capture is a toggle in the widget's ⋯ menu, and Clear data wipes all of it whenever you want without turning capture off.",
  },
  tracing: {
    title: "Optional tracing, and why compose won't forward it",
    body: "Every LLM call can be traced to a Langfuse instance you already run. All three variables are required, and the compose stack deliberately does not forward them. Traces contain your prompts, which means your resume text, and a stale key pair passed through silently would ship that to a third party. To trace, run the backend yourself outside compose. Tracing is off whenever any of the three is unset.",
  },
} as const;

/* --------------------------- quickstart ------------------------ */

export const quickstart = {
  pieces: [
    {
      n: "1",
      title: "The stack",
      required: true,
      body: "One docker compose up -d. Three containers, all on localhost. The first build takes a few minutes because it installs TeX Live and downloads the embedding model.",
    },
    {
      n: "2",
      title: "One API key",
      required: false,
      body: "Paste it into .env or Settings → Models. OpenAI or Gemini. Either one alone is a complete setup, and each maps to a profile we measured.",
    },
    {
      n: "3",
      title: "MCP for your assistant",
      required: false,
      body: "One script registers Claude Code for you and prints ready-to-paste config for Claude Desktop and ChatGPT desktop / Codex CLI.",
    },
    {
      n: "4",
      title: "The browser extension",
      required: false,
      body: "chrome://extensions → Developer mode → Load unpacked → the repo's extension/ folder. No ID to copy, nothing to configure.",
    },
  ],
  clone: `git clone ${site.repo}.git
cd maestro-career-studio
cp .env.example .env

# Recommended: open .env and paste an OPENAI_API_KEY (or GEMINI_API_KEY).
# The deterministic core runs without one. The AI lanes want one.

docker compose up -d --build`,
  mcp: "./scripts/setup-mcp.sh",
  prerequisites: [
    { title: "Docker Desktop", body: "Or Docker Engine with Compose v2." },
    {
      title: "About 4 GB of disk",
      body: "Backend ~1.9 GB (it carries a minimal TeX Live, Typst and the embedding model), frontend ~1.6 GB, PostgreSQL ~0.4 GB.",
    },
    {
      title: "One API key, recommended",
      body: "OpenAI or Gemini. Without one you still get the deterministic core, and over MCP your assistant supplies the model.",
    },
  ],
  keyless: {
    title: "What runs with no key at all",
    works: [
      "Deterministic ATS scoring across every base resume",
      "Gap diagnostics, health reports, full manual tailoring",
      "The raw LaTeX and Typst editors, and PDF compilation",
      "Application tracking and analytics",
    ],
    defers: [
      "Career KB seeding defers and retries on a later boot",
      "Automatic JD field extraction falls back to manual entry",
      "Cover letters, Q&A, guided gap resolution and chat ask for a key first",
    ],
  },
  localModels: {
    title: "Local model servers: configurable, untested",
    body: "The client speaks to any OpenAI-compatible endpoint, so Ollama, LM Studio or vLLM can be pointed at with OPENAI_BASE_URL. We haven't validated a local model end to end yet, and the heavy asks — long tailoring prompts, strict JSON, streaming tool calls — are exactly where small models struggle. So we make no offline promise until we can stand behind one.",
    ask: "If you try it, tell us what worked and what broke, with the model name. That's a genuinely useful contribution.",
  },
  earlyRelease: {
    title: "The compose path is the least-tested part of this release",
    body: "The stack runs daily on my machine, but a fresh-clone first boot has had little outside testing. If it fails on yours, open an issue with the log. Right now that's one of the most valuable things anyone can send.",
  },
} as const;

export const faqs = [
  {
    q: "Do I need an API key?",
    a: "Recommended, yes. The parts that make Maestro fastest day to day run on it: in-app tailoring, the extension's tailor-on-the-go and form filling, cover letters and screening answers, KB consolidation, chat. One key, OpenAI or Gemini, is a complete setup. Without one you still get the deterministic core, and if you drive it over MCP your assistant supplies the model.",
  },
  {
    q: "What does it actually cost to run?",
    a: "About a penny per tailored application on the default profile, under 3¢ on the fast one. Measured with Langfuse on real postings at list prices. My whole search so far has cost under $2 in tokens. The software is Apache-2.0: no account, no subscription, no tier.",
  },
  {
    q: "Is my resume uploaded anywhere?",
    a: "No. Three containers on your machine, bound to 127.0.0.1. The only outbound traffic goes to whichever LLM provider you configure, and your key goes to exactly that endpoint. It lives in your .env or your local database, and the API never echoes it back out.",
  },
  {
    q: "Can I run it fully offline on a local model?",
    a: "You can point it at any OpenAI-compatible endpoint, including Ollama, LM Studio and vLLM. We won't claim it works, because we haven't validated a local model end to end. Long tailoring prompts, strict JSON and streaming tool calls are where small models struggle. The deterministic core never calls a model at all, so that half is genuinely offline today.",
  },
  {
    q: "Is the score a real ATS score?",
    a: "It's our score: deterministic, versioned, reproducible. It doesn't predict what an employer's ATS shows them, and no consumer tool can. One caveat worth knowing: recency is part of the score and it is measured against today, so the same document can score slightly differently months apart as its work ages. Everything else holds still. Use it to compare your own drafts and to catch parsing and coverage problems — chasing 100 gets you a keyword-stuffed resume that modern screens flag.",
  },
  {
    q: "Will it apply to jobs for me?",
    a: "It carries an application to the point of submission and stops. Filling and submitting happen only inside a live agent session you're running, with consent recorded one turn before the click and a daily cap you set. Nothing is submitted from the web app, and a submit click that can't be verified ends there rather than being retried.",
  },
  {
    q: "Can I use my own resume template?",
    a: "Yes, that's the point of the template layer. Start from a bundled LaTeX or Typst design, adapt one you found, or write your own in the editor. Validation compiles a sample PDF and runs a parse gate, so a design that would break an ATS parser never ships.",
  },
  {
    q: "Which languages are supported?",
    a: "English resumes and job descriptions, with full support for accented Latin characters (Zürich, José, Nestlé, São Paulo). Non-Latin scripts are refused at ingest rather than scored misleadingly at zero coverage.",
  },
  {
    q: "How early is this, really?",
    a: "Early, and the repo says so. The fresh-clone compose boot especially. KNOWN_ISSUES.md lists what's solid, what's rough and what's a deliberate limitation: the tracker doesn't paginate server-side, scores aren't re-derived when a base resume changes, and autofill isn't first-try-clean on every ATS. If something breaks, a clear bug report is the most useful thing you can send.",
  },
] as const;

export const makerNote = {
  title: "It's early. I'd rather hear about it.",
  body: "I built this because I needed it, and I use it every day. It also has the rough edges of software with one user, especially that first boot from a fresh clone. If something breaks, tell me. A clear bug report is a contribution and right now it's the most useful kind. Pull requests welcome too.",
  signature: "Ajey Dhayashanker Loganathan",
} as const;

export const closing = {
  title: "Career tooling should be infrastructure, not a rental.",
  body: "Clone it, run it, keep everything it produces. Nothing here was built to make leaving hard.",
} as const;
