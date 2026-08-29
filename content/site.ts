/**
 * Every claim here is traceable to the product repo (README.md, SYSTEM.md,
 * KNOWN_ISSUES.md, docs/reports/2026-08-11-launch-content-kit.md). If a number
 * changes there, change it here. This is the only place any of them are written.
 *
 * Positioning (owner's call, 2026-08-23): the recommended setup is BRING A KEY.
 * "No key" is two honest tiers. The deterministic core always works, and over
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
    body: "Most checkers ask an LLM. One popular tool scored the same resume anywhere from 66 to 99 across a hundred runs. Maestro has no LLM in the scoring path at all, so the same resume against the same posting returns the same number and the same breakdown. Every time.",
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
    body: "The side panel fills from your Autofill Profile and grounds each answer in the application on screen, not a generic saved blob. Its telemetry logs which fields it met and whether they filled. It can't log what you typed, because the table has no column for it.",
    feature: "AI-grounded autofill",
    href: "/features#extension",
  },
] as const;

export const whyClose = {
  title: "And if you walk away, you keep everything.",
  body: "Your Career KB exports to one career.md. Plain Markdown, no model involved, readable and diffable. Resumes are JSON on your disk. Every render sits in its own company-and-role folder with the source and the exact PDF you sent.",
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
  note: "Priced against GPT-5.6 Luna at $0.20 per million input tokens and $1.20 per million output. Multiply it out yourself. That is the point of showing the split.",
} as const;

export const modelsPage = {
  eyebrow: "Models",
  title: "Which model, and what it costs you.",
  lede: "One key, OpenAI or Gemini, is a complete setup. This page is the reference behind that sentence: the two profiles benchmarked on real postings, what a tailored application actually costs, and where local models stand.",
} as const;

export const modelProfiles = {
  eyebrow: "Choose your models",
  title: "Two setups, measured on real postings.",
  lede: "Any OpenAI-compatible model can be configured. These two are benchmarked end to end with every call traced, one per API key, so you can start from a known-good setup instead of guessing. The Fast tier decides almost everything: how much of a posting gets extracted, how honest your base score is, and most of the waiting.",
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
  why: "A fresh install ships with the OpenAI one already set, because honest scoring starts at extraction: a fast model that misses requirements inflates your fit score, in our tests by about nine points. Neither is a tier above the other, and switching is three dropdowns in Settings → Models. Mixing tiers across providers works too. These two already cover what it would buy you.",
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
    body: "Score it against every base. Then the knock-out pre-scan checks your profile against what the posting actually states: work authorization, OPT policy, salary, years of experience.",
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
      "Recency is one of the inputs, so a document scored months apart can move as its work ages. Nothing else does.",
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
    body: "A gap needs a job description. A Health Report doesn't. It checks one resume on its own merits: parsing, dates, evidence quality, format gates. Back comes a letter grade with a fix list ranked by what each flaw costs you.",
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
    body: "A browser side panel. Capture the posting, score it against every base resume, tailor on the spot, fill the form from your Autofill Profile, and mark it applied, without leaving the tab. Its telemetry records which fields it met and whether they filled. It cannot record a value you typed, because the table has no column for one.",
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
  footnote: "Only checkable claims. Verify any row yourself. Columns describe the categories as of August 2026.",
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
    title: "Installed from your client's settings",
    body: "The server runs inside the backend container you already started, which is why the two big clients need no terminal, no config file and no host Python: you pick something in their own settings, and the same declaration is correct on every machine.",
    manual:
      "If an install misbehaves, both apps also take a hand-written entry — claude_desktop_config.json for Claude Desktop (quit the app fully first: it rewrites that file on exit and silently drops your edit) or ~/.codex/config.toml for Codex. If the hand-written entry connects, the server is fine and the packaging was the problem.",
    targets: [
      { client: "Claude Desktop & Claude Code", how: "Settings → Extensions → Install Extension → pick mcpb/maestro-career-studio.mcpb inside the cloned folder. One install covers both", auto: true },
      { client: "Codex / ChatGPT desktop", how: "Settings → Plugins → add seinun-ai/maestro-career-studio as a marketplace, then Install", auto: true },
      { client: "Cursor, Windsurf, other stdio clients", how: "./scripts/setup-mcp.sh prints a paste-ready block per client — the one route that needs a host Python 3.12+", auto: false },
    ],
    flags: "Every route defaults to the full profile, and staying there is fine. Scoped profiles are an opt-in trim: the Claude extension's Tool profile field, the MAESTRO_CS_MCP_PROFILE value in a hand-written entry, or --profile hunt on the script. One profile at a time.",
    paths: [
      {
        name: "Claude",
        covers: "Claude Desktop, and Claude Code inside the Claude app — one install covers both",
        steps: [
          "Settings → Extensions → Install Extension",
          "Pick mcpb/maestro-career-studio.mcpb inside the folder Part 1 created",
          "Leave the fields at their defaults and install",
        ],
        note: "The Tool profile field stays full unless you later want a scoped set.",
      },
      {
        name: "Codex / ChatGPT desktop",
        covers: "The ChatGPT desktop app and the Codex CLI share this install",
        steps: [
          "Settings → Plugins → Add plugin marketplace",
          "Source seinun-ai/maestro-career-studio · git ref main · sparse paths empty",
          "Open the Maestro Career Studio entry and press Install",
        ],
        note: "The plugin is pinned to the full profile; scoping it means the hand-written entry below.",
      },
    ],
    profilesNote:
      "Both installs load all 83 tools — the full profile, and the right default. The five scoped trims (hunt, apply, explore, templates, career) are a customization you add by editing the config directly: change MAESTRO_CS_MCP_PROFILE in the JSON or TOML below, or set the Claude extension's Tool profile field. One profile at a time.",
    fallback: {
      title: "If an install misbehaves, write the config by hand",
      body: "Both apps read a plain config file, and a hand-written entry always works: if it connects, the server is fine and the packaging was the problem. Both entries run the server inside the backend container, so neither needs a host Python.",
      claude: {
        title: "Claude Desktop · claude_desktop_config.json",
        note: "Fully quit Claude first (Cmd+Q — closing the window is not enough): the running app rewrites this file on exit and silently drops your edit. Reach it via Settings → Developer → Edit Config, add the entry under mcpServers, save, reopen.",
        code: `"maestro-career-studio": {
  "command": "docker",
  "args": ["exec", "-i",
           "-e", "BACKEND_URL=http://localhost:8000",
           "-e", "MAESTRO_CS_MCP_PROFILE=full",
           "maestro-career-studio-backend-1",
           "python", "-m", "mcp_server.server"]
}`,
      },
      codex: {
        title: "Codex / ChatGPT desktop · ~/.codex/config.toml",
        note: "Append the block, then restart the app. The file is shared by the ChatGPT desktop app and the Codex CLI; Codex also takes the same command through Settings → MCPs → Connect a custom MCP, type STDIO.",
        code: `[mcp_servers.maestro-career-studio]
command = "docker"
args = ["exec", "-i",
        "-e", "BACKEND_URL=http://localhost:8000",
        "-e", "MAESTRO_CS_MCP_PROFILE=full",
        "maestro-career-studio-backend-1",
        "python", "-m", "mcp_server.server"]
enabled = true`,
      },
    },
    otherClients:
      "Cursor, Windsurf, another stdio client, or a backend outside Docker? ./scripts/setup-mcp.sh prints a paste-ready block per client — the one route that needs a host Python 3.12+.",
    delegate: {
      title: "Or just ask the assistant to do it",
      body: "Agents that can edit files and run commands are perfectly capable of wiring this up themselves. Run the script with --print-only, hand the output to Claude Code or the Codex CLI, and ask it to add the server to your config. It knows where those files live and it can merge into them without clobbering your other MCP servers.",
      prompt: "Run ./scripts/setup-mcp.sh --print-only, then add the maestro-career-studio server to my MCP config. Merge it in. Don't overwrite the servers already there.",
      caveat: "Read the diff before you accept it. It is editing a config file that other tools depend on.",
    },
  },
  keyless: {
    title: "No API key? Your assistant is the model.",
    body: "Over MCP, Claude or Codex extracts the posting and authors the tailoring edits, and the server applies them through the same honesty gates. The whole capture, score, tailor, render arc plus Career KB and resume upkeep, with no in-house LLM calls at all. If that is how you already work, it is a complete setup on its own.",
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
      title: "The app",
      required: true,
      body: "git clone, then one docker compose up -d — about a 1 GB image download, three containers, all on localhost. Your API key goes in afterwards, inside the app: Settings → Models. OpenAI or Gemini, either alone is a complete setup.",
    },
    {
      n: "2",
      title: "Your assistant",
      required: false,
      body: "An MCP server, installed from your client's own settings: Claude takes an extension file from the cloned folder, Codex and the ChatGPT desktop app take a plugin marketplace. No terminal, no config file, no host Python.",
    },
    {
      n: "3",
      title: "The browser panel",
      required: false,
      body: "chrome://extensions → Developer mode → Load unpacked → the repo's extension/ folder. No ID to copy, nothing to configure.",
    },
  ],
  clone: `git clone ${site.repo}.git
cd maestro-career-studio
cp .env.example .env

# Downloads prebuilt images, about 1 GB. Your API key comes later,
# inside the app: Settings -> Models after first boot.

docker compose up -d`,
  mcp: "./scripts/setup-mcp.sh",
  appSteps: [
    {
      t: "Clone and start",
      b: "Three commands. The images arrive prebuilt — about a 1 GB download, a few minutes on a normal connection.",
    },
    {
      t: "Open the app",
      b: "http://localhost:3000. First boot runs migrations and seeds a demo resume with rendered previews; give it a moment.",
    },
    {
      t: "Add your API key, inside the app",
      b: "Settings → Models: paste one key, OpenAI or Gemini, and press Test on each model. A key saved in the app always wins over one in .env, so pick one place and stay there.",
    },
  ],
  update: "./scripts/update.sh",
  troubleshooting: {
    title: "If something goes wrong",
    columns: ["You see", "It means", "Do"],
    rows: [
      ["Cannot connect to the Docker daemon", "Docker isn't running", "Start Docker Desktop, wait for “running”, re-run the command"],
      ["port is already allocated", "Another app owns 3000, 8001 or 55432", "Change the matching *_HOST_PORT in .env"],
      ["Build sits at TeX Live or the model download", "Normal on a first build", "Wait it out. Later builds are fast."],
      ["Page loads but everything errors", "Backend still starting", "curl -s localhost:8001/health answers {\"status\":\"ok\"} when it's ready"],
      ["Added a key to .env after starting", "Keys are read at process start", "docker compose restart backend. Remember that an in-app key overrides .env"],
      ["Calls fail 401 though Settings says Configured", "A stale key. The label says where it lives.", "Re-enter it in Settings → Models and press Test"],
    ],
  },
  updateFacts: [
    { t: "Your data is not involved", b: "Resumes, applications, KB documents and settings are files on disk no update step touches, and the database lives in a Docker volume that survives all of this. The backup guards the migration specifically." },
    { t: "Migrations run themselves", b: "They run when the backend starts, so the first boot after an update takes longer than usual. The script tells you it's waiting." },
    { t: "Two things stay manual", b: "Docker can't reach them: reload the extension at chrome://extensions and reload any open job tab, then restart your MCP client. The script prints both reminders when it finishes." },
  ],
  prerequisites: [
    { title: "Docker Desktop", body: "Or Docker Engine with Compose v2. Start it and leave it running." },
    {
      title: "Git",
      body: "It's how you install, and later update. macOS offers to install it on first use; Windows takes Git for Windows.",
    },
    {
      title: "About a 1 GB download",
      body: "The three images, compressed. They unpack to roughly 3–4 GB; the backend is the big one, carrying a minimal TeX Live, Typst and the embedding model.",
    },
    {
      title: "One API key, recommended",
      body: "OpenAI or Gemini, added in Settings → Models after first boot. Without one you still get the deterministic core, and over MCP your assistant supplies the model.",
    },
  ],
  // Three tiers, not two. The middle one is the easiest to undersell: over MCP
  // the assistant is the model, and the server takes what it authored through
  // the same gates. kb_ingest_resume says "No in-house LLM" in as many words.
  keyless: {
    title: "What runs with no key at all",
    works: [
      "Deterministic ATS scoring across every base resume",
      "Health reports, gap diagnostics and full manual tailoring",
      "The raw LaTeX and Typst editors, and PDF compilation",
      "Application tracking and analytics",
      "Extension autofill in Rules-only mode, straight from your Autofill Profile",
    ],
    overMcp: [
      "Career KB building. Your assistant parses the resume, the server stores it with no in-house LLM.",
      "Job capture. The agent reads the posting and stores the structured fields.",
      "Tailoring edits and gap resolutions, authored by the agent, applied through the same honesty gates.",
    ],
    wantsKey: [
      "In-app cover letters and screening answers",
      "The extension's AI-assisted pass, which answers what the rules could not",
      "In-app chat, and KB capture that files free text against the right entity",
      "First-boot KB seeding, which defers and retries once a key is there",
    ],
  },
  localModels: {
    title: "Local model servers: configurable, untested",
    body: "The client speaks to any OpenAI-compatible endpoint, so Ollama, LM Studio or vLLM can be pointed at with OPENAI_BASE_URL. We haven't validated a local model end to end yet, and the heavy asks are exactly where small models struggle: long tailoring prompts, strict JSON, streaming tool calls. So we make no offline promise until we can stand behind one.",
    ask: "If you try it, tell us what worked and what broke, with the model name. That's a genuinely useful contribution.",
  },
  freshInstall: {
    title: "If your install turns up something new",
    body: "The troubleshooting table in the guide covers what real installs have hit. This is early software, so if yours finds something that isn't in there, an issue with the log is genuinely useful.",
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
    a: "It's our score: deterministic, versioned, reproducible. It doesn't predict what an employer's ATS shows them, and no consumer tool can. One caveat worth knowing: recency is part of the score and it is measured against today, so the same document can score slightly differently months apart as its work ages. Everything else holds still. Use it to compare your own drafts and to catch parsing and coverage problems. Chasing 100 gets you a keyword-stuffed resume that modern screens flag.",
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

export const guide = {
  hero: {
    eyebrow: "The guide",
    title: "Your first hour, once it's running.",
    lede: "Installing lives on the Get started page. This is everything after: find your way around, run one real application through it in the order that works, work postings from the browser panel, and drive the whole loop from your assistant.",
  },

  agentPath: {
    eyebrow: "The fastest path",
    title: "Let an agent install it",
    body: "Already using Claude Code, the Codex CLI or Cursor? Open a session in the folder you want it in and paste this. It clones, configures and starts the stack for you.",
    prompt:
      "Clone https://github.com/seinun-ai/maestro-career-studio, check that the prerequisites in docs/GETTING_STARTED.md are present on this machine, set up the .env, and start the stack with docker compose. Then tell me what still needs me.",
    second: "From a session opened inside the cloned repo, this wires the server into your assistant for you:",
    secondPrompt:
      "Set up this repo's MCP server for my assistant. Run ./scripts/setup-mcp.sh and apply its output; docs/GETTING_STARTED.md §6 has the per-client paths.",
    limits: {
      title: "Two things an agent can't do for you",
      items: [
        "Install and start Docker Desktop (and Git). They need an admin password and a GUI first run.",
        "Decide where your API key goes. That one is a judgement call, and it's yours.",
      ],
    },
  },






  tour: {
    eyebrow: "First, the map",
    title: "Find your way around",
    lede: "The sidebar, top to bottom.",
    items: [
      { name: "New application", body: "Capture a job and start tailoring against it." },
      { name: "Applications", body: "Every job you've captured, from saved to signed." },
      { name: "Agent Proposals", body: "The triage inbox for jobs an agent hunted." },
      { name: "Referrals", body: "Contacts and their company careers pages." },
      { name: "Career KB", body: "Your evidence: work history as approved, reusable points." },
      { name: "Base Resumes", body: "One resume per career track, composed from the KB." },
      { name: "Templates", body: "The LaTeX and Typst designs your PDFs render through." },
      { name: "Chat", body: "The scoped in-app assistant. Pin a resume, section or bullet." },
      { name: "Analytics", body: "What the market you're applying into keeps asking for." },
      { name: "Profile", body: "Persona, job preferences, and your autofill contact details." },
      { name: "Settings", body: "Models and keys, prompts, quick-tailor defaults, hunt caps." },
    ],
  },

  firstSession: {
    eyebrow: "The heart of it",
    title: "Your first session, in order",
    lede: "The order matters. Everything downstream composes from the Career KB, so feed that first and the rest gets easier.",
    steps: [
      { t: "Import every resume you have", b: "Up to 10 files a batch. Old versions, role-specific variants, the too-long one. They all carry evidence." },
      { t: "Approve the KB inbox", b: "Imported points arrive as drafts. Only approved points ever land on a resume. Merge the duplicates once and every future application benefits." },
      { t: "Fill in your Profile", b: "Contact details, persona, and job preferences: roles, seniority, location, work authorization. Those drive scoring warnings and agent hunts." },
      { t: "Add your API key and pick models", b: "Settings → Models. Press Test on each: it measures what the model can actually do before you depend on it." },
      { t: "Pick a default template", b: "Every render uses it unless a resume overrides it. You can switch any time without touching content." },
      { t: "Build a base resume per career track", b: "Base Resumes → New → From Career KB. Then run the Health check: fixing its findings now beats fixing them after every tailoring run." },
      { t: "Capture a job", b: "Paste the posting text or URL, or use the side panel. Extraction structures it; the deterministic engine scores it against every base." },
      { t: "Tailor through the gap workflow", b: "Each gap names a requirement your resume doesn't evidence. Answer honestly and true-but-unwritten material becomes permanent KB evidence. Every AI edit is a revertible diff. Read it." },
      { t: "Set quick-tailor preferences", b: "Once you've done a few manual passes. Then Quick Tailor handles the already-know-the-answer cases in one step." },
      { t: "Generate the package and read it", b: "Cover letter, screening answers, the PDF. Every render is filed on disk under applications/ in a company-and-role folder, so you can verify exactly what you sent." },
      { t: "Track it", b: "Mark applied, record outcomes. Analytics starts paying off after about ten captured jobs." },
    ],
  },

  extension: {
    eyebrow: "The browser panel",
    title: "Working a posting from the side panel",
    lede: "Installed in Part 3 of the Get started page. On a job page the panel walks one ladder, and each stage opens when the one before it has an answer — so it always shows the next thing worth doing.",
    flow: [
      { t: "Job", b: "Capture the posting in front of you. Captures dedup against what you already track, so saving twice is safe." },
      { t: "Score", b: "Every base resume scored against it, deterministically, without leaving the tab." },
      { t: "Resume", b: "Pick the base to send — or tailor on the spot and render the PDF right there." },
      { t: "Fill", b: "Fill the application form from your Autofill Profile. Signatures, credentials, government IDs and consent boxes sit on a deny-list the fill never touches; navigation and submit stay yours." },
      { t: "Track", b: "Mark it applied before you close the tab, and the tracker row is already there when you get back to the app." },
    ],
    note: "If you changed the app's ports in .env, set the backend and app URLs under the panel's ⋯ menu. What its telemetry does and doesn't store is on the Privacy page.",
  },

  mcp: {
    eyebrow: "Your assistant",
    title: "Driving it over MCP",
    lede: "Registering the server is Part 2 of the Get started page. Once it's there, your assistant can run the whole loop by conversation — the useful skill is knowing what to ask for.",
    ideas: [
      { t: "Work a posting end to end", b: "Paste a link or the JD text into chat: capture it, score it against every base, walk the gaps, tailor, and render the PDF — all by asking." },
      { t: "Keep the record current", b: "Hand it a new resume or paste a review's wins: it drafts KB points, you approve them, and they compose into every future document." },
      { t: "Ask the market questions", b: "The explore tools answer things like \"what keeps coming up in the jobs I save that I'm not showing?\" from your own captured postings." },
    ],
    note: "Everything an agent authors passes the same honesty gates as the app: unevidenced keywords can only reach the skills list, and every edit lands as a revertible version.",
  },

  next: {
    eyebrow: "Where it can go next",
    title: "Where it can go next",
    lede: "Once the server is registered, your assistant can run the whole loop. The repo ships the author's own prompts as adaptable starting points.",
    items: [
      { t: "A scheduled daily hunt", b: "Capture, score and propose only. You triage the results on Agent Proposals." },
      { t: "Referral-first hunting", b: "Add contacts and their careers pages under Referrals, then point a hunt at those URLs specifically." },
      { t: "Attended apply runs", b: "Working the accepted-proposal queue with a browser, one consent per application, always stopping before submit." },
    ],
    closing: "Whatever the agent does, the consent posture holds: nothing is submitted without your explicit per-application yes, and everything is written down.",
  },

} as const;

export const makerNote = {
  title: "It's early. I'd rather hear about it.",
  body: "I built this because I needed it, and I use it every day. It is early, and early software has edges. If something breaks, tell me. A clear bug report is a contribution and right now it's the most useful kind. Pull requests welcome too.",
  signature: "Ajey Dhayashanker Loganathan",
} as const;

export const closing = {
  title: "Career tooling should be infrastructure, not a rental.",
  body: "Clone it, run it, keep everything it produces. Nothing here was built to make leaving hard.",
} as const;
