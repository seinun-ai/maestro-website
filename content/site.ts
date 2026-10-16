/**
 * Every claim here is traceable to the product repo (README.md, docs/
 * USING_MAESTRO.md, PRIVACY.md, KNOWN_ISSUES.md, CHANGELOG.md). If a number
 * changes there, change it here. This is the only place any of them are written.
 *
 * The site is a short promo (owner's call, 2026-10-12): Home, Get started and
 * Privacy. Detail and how-to live on GitHub, and every teaser links there.
 *
 * Numbers: three headline figures only (under a minute, about $0.01, same
 * score every time), plus the tool count once in the use-cases section. No cost
 * tables, token traces or benchmarks: they live in the app's docs.
 *
 * Positioning: the recommended setup is BRING A KEY: OpenAI, Gemini or Claude.
 * "No key" is two honest tiers: the deterministic core always works, and over
 * MCP the client agent supplies the model. Never claim "fully offline".
 * Costs are written in dollars: "about $0.01" (OpenAI default), "under $0.03"
 * (Gemini), "about $0.01" with Claude Haiku, "in our tests", never with a
 * sample count. Dollars read more easily than cents (owner, 2026-10-16).
 *
 * Vocabulary is the app's: Match score (never "ATS score"; "ATS" only where
 * applicant tracking systems are explained), Career history, Target, Jobs,
 * Agent inbox, Settings › AI & models, the Companion. Submitting: the
 * Companion fills the form and stops, you press Submit. The opt-in Full
 * automation is stated in the use-cases section and in the FAQ answer. It also
 * turns on the Companion's Apply (0.11.0), which the Companion card names:
 * it fills a page, clicks Next, signs in on known application sites with the
 * saved job-site login, and stops on the review page. The Companion never presses
 * Submit, at any setting. Autofill alone never clicks Next. Never write a
 * product-wide "never auto-submits": an agent with Full automation can.
 *
 * Headline markup: one key phrase per title sits in [brackets]. <Highlight>
 * renders it in app blue on the tint band, as the hero GIF does, and a "\n"
 * is a line break on wide screens only. Brackets never reach the page.
 *
 * Voice: short sentences, concrete nouns, second person. NO EM DASHES in
 * rendered copy, ever (readers filter AI text by them, and the product scrubs
 * them from its own output); en dashes in numeric ranges are fine. No
 * "not X but Y" scaffolding, no throat-clearing, no hype words.
 */

import type { Accent } from "@/lib/tokens";

const repo = "https://github.com/seinun-ai/maestro-career-studio";
const blob = `${repo}/blob/main`;

export const site = {
  name: "Maestro Career Studio",
  short: "Maestro CS",
  tagline: "Stop rewriting your resume for every job",
  description:
    "Maestro tailors your resume to each job from your whole career history in under a minute. Every bullet is something you actually did. Free, open source, and it runs on your computer.",
  repo,
  // The release the copy was checked against. Bump it with the copy, not alone.
  version: "0.11.0",
  privacyPolicy: `${blob}/PRIVACY.md`,
  security: `${blob}/SECURITY.md`,
  video: "https://www.youtube.com/watch?v=TvNTzPxPNnc",
  contact: "ajey@seinun.com",
  license: "Apache-2.0",
  author: "Ajey Dhayashanker Loganathan",
  company: "Seinun LLC",
  companyUrl: "https://seinun.com",
  // Set NEXT_PUBLIC_SITE_URL at build time before deploying. Canonical URLs,
  // Open Graph, sitemap.xml and robots.txt all derive from it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maestro-career-studio.example",
} as const;

/** Where the detail lives. Every "More on GitHub" link points into this list. */
export const docs = {
  readme: `${repo}#readme`,
  quickstart: `${repo}#quickstart`,
  score: `${repo}#why-it-works-this-way`,
  gettingStarted: `${blob}/docs/GETTING_STARTED.md`,
  setupReference: `${blob}/docs/SETUP_REFERENCE.md`,
  mcpGuide: `${blob}/backend/mcp_server/README.md`,
  using: `${blob}/docs/USING_MAESTRO.md`,
  models: `${blob}/docs/USING_MAESTRO.md#5-choose-your-models-deliberately`,
  knownIssues: `${blob}/KNOWN_ISSUES.md`,
  contributing: `${blob}/CONTRIBUTING.md`,
} as const;

/** The site's three pages. The sitemap reads this. */
export const pages = ["/", "/start", "/privacy"] as const;

export const headerCta = { label: "Get started", href: "/start" } as const;

/** Header and footer. Home sections are anchors; the old pages redirect to them. */
export const nav = [
  { label: "Use cases", href: "/#use-cases" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Privacy", href: "/privacy" },
] as const;

/* ----------------------------- hero ----------------------------- */

export const hero = {
  eyebrow: "Works with Claude, ChatGPT and Codex · free and open source",
  title: "Stop rewriting your resume\nfor [every job].",
  lede: "Maestro tailors it from your whole career history in under a minute, and every bullet is something you actually did. So when an interviewer asks about one, you already have the story.",
  under: "Two commands to install on macOS, Linux and Windows. No account.",
  primaryCta: { label: "Install in two commands", href: "/start" },
  secondaryCta: { label: "Star on GitHub", href: repo },
  mediaAlt:
    "A pile of resume files such as resume_FINAL(3).docx becomes one career history, then a specialist resume for each role, company and country. One is matched to a job, with its match score going from 82.4 to 87.3, and the application form waits for you to press Submit.",
  mediaCaption:
    "A short animation made from real captures of the app. The person, the employers and the job are made up.",
} as const;

/* ---------------------------- premise ---------------------------- */

export const premise = {
  eyebrow: "The premise",
  title: "Your best bullet is stuck in [last month's copy].",
  body: [
    "One job asks for “data pipelines”, so you copy the file and change a few lines. The next wants “stakeholder communication”, so you copy again. Somewhere in the third copy an AI “makes it stronger” and rewrites a bullet you spent an evening getting right. Six applications later you have six resumes, and no idea which one still says what you meant.",
    "Every tool I tried made a fresh document for every job, and documents drift. The AI ones drift faster, because every pass rephrases a bit more of you out of it.",
    "Maestro pulls apart what you've been keeping in one file. What you did lives in one career history. What this employer should notice becomes a specialist resume, matched to the job in under a minute, with every change shown as a diff you accept or undo, like reviewing code. How it looks is a template, so a new look never touches a fact.",
  ],
  pull: "Your time should go into your career, not into maintaining copies of a document about your career.",
  // Decoration beside the title, from the hero GIF's opening frame.
  chips: [
    "resume_v2.docx",
    "resume_FINAL(3).docx",
    "resume_new_NEW.pdf",
    "resume_v9_USE_THIS.pdf",
    "resume_bigtech_v4.pdf",
    "resume_v2_FINAL.docx",
  ],
} as const;

/* ------------------------- how it works ------------------------- */

export type StepIcon = "record" | "specialist" | "match";

export const howItWorks = {
  eyebrow: "How it works",
  title: "One record in. A [matched resume] out.",
  steps: [
    {
      accent: "violet" as Accent,
      icon: "record" as StepIcon,
      label: "Step 1",
      title: "One career history",
      body: "Drop in every resume you own. Maestro merges them into one record of what you actually did.",
    },
    {
      accent: "tangerine" as Accent,
      icon: "specialist" as StepIcon,
      label: "Step 2",
      title: "A specialist resume for every role, company and country",
      body: "One base resume per track, each with a Target: the role, a company, the countries it may go to.",
    },
    {
      accent: "teal" as Accent,
      icon: "match" as StepIcon,
      label: "Step 3",
      title: "Matched to the job, every change a diff you accept or undo",
      body: "Save the job, answer the gaps, tailor. Each edit shows as a diff you keep or undo.",
    },
  ],
} as const;

/* ------------------------- what you get ------------------------- */

// The Health report teaser was cut on 2026-10-16: the use-cases prompt "Is my
// resume ready to send?" now sells it, and five cards keep the page shorter.
export type CardIcon = "target" | "score" | "diff" | "template" | "companion";

export const capabilities = {
  eyebrow: "What you get",
  title: "From the first import to the [Submit button].",
  lede: "Real captures from the app. Each one has the longer story on GitHub.",
  more: "More on GitHub",
  cards: [
    {
      accent: "violet" as Accent,
      icon: "target" as CardIcon,
      pill: "Targets",
      title: "A specialist resume for each track",
      body: "Keep one base resume per kind of role you go after. Give each a Target: the role, a company, the countries it may go to. A resume set for other countries isn't scored or recommended for a job somewhere else.",
      image: "/media/base-gallery.png",
      imageAlt: "Three base resumes in the app, grouped by role, each card in its own colour with a page preview, a health grade and its Target pill: Data Scientist (UK) for GB, ML Engineer (US) for the US, and ML Engineer for Woodgrove Bank",
      href: `${docs.using}#2-build-a-base-resume-per-career-track`,
    },
    {
      accent: "tangerine" as Accent,
      icon: "score" as CardIcon,
      pill: "Match score",
      title: "It asks instead of inventing",
      body: "Every job is scored against your base resumes when you save it. The Match score shows what a job wants that your resume doesn't show yet. Maestro asks you about each gap. If it's true, it's saved for every future application. If it isn't, it stays a gap.",
      image: "/media/job-score.png",
      imageAlt: "A saved job's page with its four numbered steps, Job, Resume and gaps, Tailored resume and Apply, open on Resume and gaps: two base resumes as chips, both at 82.4, a note that one resume for another country wasn't scored, the Score breakdown open with five subscores and skills covered, and a Gap analysis done card: 7 gaps answered, 1 skipped",
      href: `${docs.using}#3-save-the-job-then-close-the-gaps`,
    },
    {
      accent: "teal" as Accent,
      icon: "diff" as CardIcon,
      pill: "Diffs",
      title: "Every AI edit is a diff",
      body: "Every change arrives as a diff, line by line, the way a developer reviews a code change before accepting it. Accept it or undo it.",
      quote: "The AI fills in emphasis. It doesn't invent a new person.",
      image: "/media/tailor-review.png",
      imageAlt: "The same job's Tailored resume step: the Match score going from 82.4 to 87.3, three changes from the base resume, each shown struck through and rewritten with a Revert button and marked From your career history or You, then the PDF and its one-page preview",
      href: `${docs.using}#how-it-works`,
    },
    {
      accent: "violet" as Accent,
      icon: "template" as CardIcon,
      pill: "Templates",
      title: "How many resume templates have you changed in your life?",
      body: "One or two. Here it's a button. LaTeX and Typst PDFs are built on your computer, and Typst needs no TeX.",
      quote: "Template change is not a decision of life anymore.",
      image: "/media/base-resume.png",
      imageAlt: "A base resume in the app, ML Engineer (US), with its colour square, health grade A and Template control in the toolbar, and the full one-page PDF preview beside the editor",
      href: `${docs.using}#templates-you-actually-own`,
    },
    {
      accent: "tangerine" as Accent,
      icon: "companion" as CardIcon,
      pill: "The Companion",
      title: "It fills the form. You press Submit.",
      body: "A Chrome side panel saves the job from the board you're on, picks your best-matching resume and fills the page you're on from your saved answers. Then it stops. Turn on full automation and Apply takes the job through its application: it fills a page, clicks Next, and stops on the review page. Submit is always your click.",
      image: "/media/extension.gif",
      imageAlt: "The Companion beside a made-up employer's careers page: Add job saves and scores the job, a resume is picked, and Apply tailors it, fills two pages of the application, clicks Next after each, and stops on the review page with Ready to submit. The cursor rests on Submit application, which is never pressed",
      href: `${docs.using}#the-companion-browser-extension`,
    },
  ],
} as const;

/* ------------------------- use cases: your AI ------------------------- */

export type VerbIcon = "extract" | "maintain" | "hunt" | "apply";

/**
 * The core pitch since 2026-10-16: what you can ask your own assistant once it
 * is connected. Every prompt maps to real tools or skills in the app's
 * backend/mcp_server/README.md (checked against 0.11.0):
 *   posting: store_extracted_jd (scores the resumes you can pick for the job's
 *     country, so never "every resume") + get_job's knock-out scan (work
 *     authorization, OPT, salary, on-site, years of experience)
 *   old resumes/notes: kb_ingest_resume, kb_capture (DRAFT points)
 *   new bullet: kb_capture; approved points resolve gaps when tailoring any resume
 *   new resume: create_base_resume_from_kb + set_base_resume_identity
 *   ready to send: run_health_check (grade, findings ranked by cost)
 *   every morning: job-hunt skill, propose_application, record_triage (Queue/Skip)
 *   recurring gaps: explore_gap_frequency
 *   tailor: create_tailoring_session, resolve_gaps, tailor_session, render_pdf
 *   screening/cover letter: generate_qa_answers, generate_cover_letter
 *   fill queued: apply-session skill, record_consent; apply-auto only with Full automation
 *   heard back: mail-status skill (needs the assistant's own mail access)
 */
export const useCases = {
  eyebrow: "Works with your AI",
  title: "Give your AI [your career].",
  lede: "Connect Claude, Codex or the ChatGPT desktop app, and your assistant gets 88 tools on your career history, your resumes and your jobs. Then you just ask.",
  groups: [
    {
      verb: "Extract",
      accent: "violet" as Accent,
      icon: "extract" as VerbIcon,
      blurb: "Get the facts out of postings and old files.",
      prompts: [
        {
          ask: "Here's a posting. Should I even apply?",
          does: "It saves the job, scores your resumes against it, and flags knock-outs like visa or years of experience.",
        },
        {
          ask: "Turn my old resumes and review notes into my career history.",
          does: "Every bullet and note becomes a draft you approve.",
        },
      ],
    },
    {
      verb: "Maintain",
      accent: "tangerine" as Accent,
      icon: "maintain" as VerbIcon,
      blurb: "Keep your career history and resumes current.",
      prompts: [
        {
          ask: "I shipped the fraud model this quarter. Add it.",
          does: "A new bullet in your career history, as a draft you approve. Every resume can use it.",
        },
        {
          ask: "Make me a resume for fintech ML roles in the UK.",
          does: "A specialist resume built from your history, targeted to that role and country.",
        },
        {
          ask: "Is my resume ready to send?",
          does: "A grade and a fix list, ranked by what each flaw costs you.",
        },
      ],
    },
    {
      verb: "Hunt",
      accent: "teal" as Accent,
      icon: "hunt" as VerbIcon,
      blurb: "Find roles that fit while you do something else.",
      prompts: [
        {
          ask: "Every morning, find new ML roles that fit and file the good ones.",
          does: "The job-hunt skill files them to your Agent inbox. You queue or skip each one.",
        },
        {
          ask: "Which skills keep showing up that I don't have?",
          does: "The gaps across every job you saved, most frequent first.",
        },
      ],
    },
    {
      verb: "Apply",
      accent: "blue" as Accent,
      icon: "apply" as VerbIcon,
      blurb: "Go from a saved job to a finished application.",
      prompts: [
        {
          ask: "Tailor this one, walk me through the gaps, then make the PDF.",
          does: "It asks about each gap instead of inventing, keeps every change as a diff you can undo, and renders the PDF.",
        },
        {
          ask: "Answer these screening questions and write a short cover letter.",
          does: "Both drafted from your own record.",
        },
        {
          ask: "Fill the applications I queued. Show me each one before it goes.",
          does: "The apply-session skill fills them in a browser. Nothing is submitted without your yes, unless you turn on full automation.",
        },
        {
          ask: "Did I hear back from anyone?",
          does: "If your assistant can read your mail, the mail-status skill moves each job to applied, interviewing, rejected or offered.",
        },
      ],
    },
  ],
  more: "Ask in your own words. These are only a start.",
  connect: {
    title: "Connect it once",
    code: "maestro connect",
    body: "Adds Maestro to Claude Desktop, Claude Code, Codex, Cursor or VS Code. No config file to write by hand.",
  },
  attended: "By default, an apply run waits for your yes before each submit.",
  automation:
    "Full automation is opt-in and off by default: when you turn it on, your own agent may submit the jobs you queued whose final review is clean, within your daily limit. It also turns on the Companion's Apply, which fills the application page by page and leaves Submit to you.",
  link: { label: "See every tool", href: docs.mcpGuide },
} as const;

/* ---------------------------- numbers ---------------------------- */

export const numbers = {
  eyebrow: "The numbers",
  title: "Three numbers you can [check yourself].",
  items: [
    {
      figure: "Under a minute",
      label: "to save a job and tailor your resume to it",
      detail: "About 10 seconds on Gemini and about 40 on the OpenAI default, in our tests.",
      link: { label: "How we measured it", href: docs.models },
    },
    {
      figure: "About $0.01",
      label: "per application on the OpenAI default",
      detail: "Under $0.03 on Gemini, and about $0.01 with Claude Haiku, in our tests.",
      link: { label: "How we measured it", href: docs.models },
    },
    {
      figure: "Same score, every time",
      label: "for the same resume and the same job",
      detail: "The Match score runs on fixed rules and a small model on your computer, with no AI service involved.",
      link: { label: "How the score works", href: docs.score },
    },
  ],
} as const;

/* ------------------------------ faq ------------------------------ */

export const faqIntro = { eyebrow: "Questions", title: "Before you [install]." } as const;

export const faqs = [
  {
    q: "Do I need an API key?",
    a: "Recommended, yes. The parts that make Maestro fastest day to day run on it: in-app tailoring, the Companion's AI fill, cover letters and screening answers, building your career history, the Assistant. One key, OpenAI, Gemini or Claude, is a complete setup. Without one you still get scoring, PDFs and tracking, and if you drive it over MCP your assistant supplies the model.",
  },
  {
    q: "Is my resume uploaded anywhere?",
    a: "Not to us. There is no Maestro server and no account, and Maestro listens on 127.0.0.1 out of the box. When you use an AI feature, the text it needs goes to the AI service you picked, with your key. If you connect an assistant over MCP, what its tools return goes to that assistant's provider. The first start downloads the scoring model from Hugging Face, and no resume text is sent. PRIVACY.md lists every place data can go.",
  },
  {
    q: "Will it apply to jobs for me?",
    a: "By default it carries an application to the point of submission and stops. The Companion fills the page you're on and stops, and you press Submit. With a connected agent, an apply run waits for your yes before each submit, within a daily limit you set. Nothing is submitted from the web app, and a submit click that can't be verified is never retried. Full automation is opt-in, off by default in Settings › Connected agents, and it changes two things. Your own agent may submit queued jobs whose final review is clean. And the Companion's Apply takes one job through its application in the tab: it fills each page, clicks Next, signs in or makes an account on known application sites with the job-site login you saved, and stops on the review page. The Companion never presses Submit. When the confirmation page shows after your Submit, it marks the job applied.",
  },
  {
    q: "Is the match score what an employer's ATS shows?",
    a: "No. It's our score: deterministic, versioned, reproducible. It doesn't predict what an employer's applicant tracking system shows them, and no consumer tool can. One caveat worth knowing: recency is part of the score and it is measured against today, so the same document can score slightly differently months apart as its work ages. Everything else holds still. Use it to compare your own drafts and to catch parsing and coverage problems.",
  },
  {
    q: "How early is this, really?",
    a: "Early, and the repo says so. It has had little testing on machines that aren't mine, and Windows is the least tested platform. KNOWN_ISSUES.md lists what's solid, what's rough and what's a deliberate limitation. If something breaks, a clear bug report is the most useful thing you can send.",
  },
] as const;

/* ------------------------------ cta ------------------------------ */

export const cta = {
  // The owner's kicker, kept near the closing line.
  kicker: "The record is yours. Here, control is the whole point.",
  title: "Your career has one history.\nYour resume [should too].",
  // "Local", said once and simply. The detail is the Privacy page.
  body: "Two commands to install. Free and open source. Your career history lives on your computer, not in someone else's cloud. No account.",
  primary: { label: "Install in two commands", href: "/start" },
  secondary: { label: "Star on GitHub", href: repo },
  video: { label: "Watch the 37-second tour", href: site.video },
  export: "Take it with you any time: your whole history exports to one career.md.",
  privacy: { label: "What leaves your computer, and when", href: "/privacy" },
} as const;

/* --------------------------- get started --------------------------- */

export const start = {
  hero: {
    eyebrow: "Get started",
    title: "[Two commands.] Then add what you want.",
    lede: "Install uv once, then install Maestro and start it. No Docker, no Git, no clone. It runs on macOS, Linux and Windows (x64).",
  },
  uv: {
    title: "Install uv, once",
    body: "uv installs Maestro as a single command and fetches the Python it needs. The package brings its own web app and its own Node. Open a new terminal afterwards so uv is found.",
    mac: "curl -LsSf https://astral.sh/uv/install.sh | sh",
    windows: `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`,
  },
  install: {
    title: "Install Maestro and start it",
    code: `uv tool install --python 3.12 maestro-career-studio
maestro start`,
    body: "maestro start runs Maestro in the background and opens http://localhost:3000. Closing the terminal does not stop it. The first start downloads the scoring model (about 100 MB, once) from Hugging Face, so allow a minute or two. If the terminal says maestro is not found, run uv tool update-shell and open a new terminal.",
  },
  next: {
    title: "Then, in the app",
    steps: [
      {
        accent: "violet" as Accent,
        t: "Open the app",
        b: "maestro start opens http://localhost:3000 for you. maestro status tells you whether it's running.",
      },
      {
        accent: "tangerine" as Accent,
        t: "Add your AI key",
        b: "Settings › AI & models: paste one key, from OpenAI, Gemini or Claude, and press Test on each model. Without one, scoring, PDFs and tracking still work.",
      },
      {
        accent: "teal" as Accent,
        t: "Import your resumes",
        b: "On the Career history page, add every resume you have, old ones included. PDF, DOCX, Markdown, text or PowerPoint, up to 10 files a batch.",
      },
    ],
  },
  connect: {
    title: "Connect your AI",
    code: "maestro connect",
    body: "Adds Maestro to Claude Desktop, Claude Code, Codex, Cursor or VS Code. Restart that app so it sees the tools.",
  },
  docker: {
    eyebrow: "Alternative · self-hosters",
    title: "Run it with Docker instead",
    lede: "Docker stays the route for servers and for working on the code. It needs Docker, Git and about a 1 GB download. On Windows, run it under WSL. Docker and uv keep separate data, so run one at a time.",
    code: `git clone ${repo}.git
cd maestro-career-studio
cp .env.example .env
docker compose up -d`,
    after: "Open http://localhost:3000, then add your key in Settings › AI & models.",
  },
  docs: {
    title: "Everything else is on GitHub",
    links: [
      { t: "Quickstart", b: "The install in the README, with the command table and the Docker route.", href: docs.quickstart },
      {
        t: "Getting started",
        b: "Your first tailored resume step by step, the Companion for Chrome, and keeping it up to date.",
        href: docs.gettingStarted,
      },
      {
        t: "Setup reference",
        b: "Every maestro command, prerequisites, where your files live, and troubleshooting.",
        href: docs.setupReference,
      },
      { t: "MCP guide", b: "Setup per app, tool sets, every tool and example prompts.", href: docs.mcpGuide },
    ],
  },
} as const;

/* ---------------------------- privacy -------------------------- */

export const privacy = {
  hero: {
    eyebrow: "Privacy & security",
    title: "Local-first isn't a marketing word here. [It's the architecture.]",
    lede: "Maestro runs on your machine and listens only on 127.0.0.1 out of the box. No account, no tenancy, no server holding your career history. One hard rule follows from that.",
  },
  facts: [
    {
      title: "Your record stays here",
      body: "Scoring, rendering, tracking and export run on your machine. Your career record leaves it only for the AI service you choose, when you use an AI feature, for the assistant you connect over MCP, when it calls a tool, and for the employer's site, when you fill in an application there. With no key and no assistant, nothing else about your career goes anywhere.",
    },
    {
      title: "Your key stays yours",
      body: "Keys sit in plain text in maestro.env (.env on Docker) and your local database, and each one goes only to its own provider's endpoint: OpenAI, Gemini, Claude or OpenRouter, or a server you name. The API never echoes a stored key back out; the settings endpoint reports only whether one is configured. A non-http(s) model endpoint is refused outright, because that URL decides where your key is sent.",
    },
    {
      title: "Nothing phones home",
      body: "The code has no analytics, crash reporting or ads. The Companion's one usage log, the fill log, is off until you turn it on, and it posts only to your own backend on localhost, with no collector at the other end. Updates happen only when you run maestro update or update.sh, and the maestro command names each request it makes.",
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
      "So: don't expose it to a network. Not the internet, not your LAN, not a tunnel. Anything that can reach the API has full read and write access to your entire career record and your saved API keys, and while full automation is on, your saved job-site login.",
      "There is one narrow, documented exception. The optional second copy publishes only /api/sync, sealed, and only as the sync setup guide describes.",
    ],
    kicker: "Running it locally is safe by construction. Publishing it isn't, and no setting makes it so.",
  },
  extension: {
    eyebrow: "The Companion",
    title: "What the Companion keeps, and what it leaves out",
    keeps: [
      "Only after you tick Keep a fill log in the Companion's options: which fields it met (label, kind, rule, outcome), with the page's hostname and a timestamp.",
      "With the fill log on, for an AI fill, a run trace: the page's own option texts and which one was chosen, diversity questions included. The last 50 runs.",
      "With the fill log on, each page Think when stuck looked at, as the snapshot the model saw, and a list of fields it could not work. Neither holds an answer.",
      "On each job, a What was submitted record: every answer filled, page by page. Diversity answers are kept only with your consent.",
      "In this browser only: which clicks and keys worked on each kind of form control, never what you typed, and which job each tab is on, until you close the tab or the browser.",
    ],
    never: [
      "Any value you typed or a field held, in the fill log, the run traces or the page snapshots.",
      "Password boxes, at every setting. The one exception is Apply's sign-in or account step on known application sites, which types the job-site login you saved.",
      "Signatures, initials, government ID numbers, salary history and agreement boxes, unless you turn on the agreement permission in Profile.",
      "Voluntary diversity questions, unless you turn on the standing consent in Profile.",
    ],
    // What leaves the machine during a fill. Literal, and in step with the
    // app's PRIVACY.md (effective 2026-10-16, 0.11.0).
    outboundTitle: "What leaves your computer during a fill",
    outbound: [
      "What the Companion types into an application goes to that site. With Apply, each page it moves past with Next, and the job-site login it signs in or makes an account with, reach the site before you press Submit, because many application sites save each page as you leave it.",
      "Your job-site login stays in a local secrets file in your Maestro folder. The Companion fetches it from your own backend only while full automation is on, types it only on known application sites, and never retries a failed sign-in. It never reaches the developer, an AI model, a log, the fill log or the panel.",
      "When an Apply run is stuck and Think when stuck is on, a snapshot of the page goes to your Reasoning model, at the AI service you chose: its questions, whether each is filled, the options, the buttons, the error lines and the site name of a tab the application opened, with no answer in it.",
    ],
    honest:
      "“No values” isn't the same as “nothing personal”. The fill log accumulates a record of which companies you applied to and when. Three things bound it: it is off until you tick Keep a fill log in the Companion's options, it never leaves your machine, and Clear data under Analytics › Autofill coverage deletes the records, the run traces and the list of fields whenever you want.",
  },
  tracing: {
    eyebrow: "Tracing",
    title: "Optional tracing, and why compose won't forward it",
    body: "Every LLM call can be traced to a Langfuse instance you already run. It needs an optional tracing extra that the Docker and native installs include and the uv install leaves out, and all three variables set by you. The compose stack deliberately does not forward them. Traces contain your prompts, which means your resume text, and a stale key pair passed through silently would ship that to a third party. To trace, run the backend yourself outside compose. Tracing is off whenever any of the three is unset.",
  },
  leavingIntro: {
    eyebrow: "Leaving",
    title: "Nothing about leaving is engineered to be difficult.",
    lede: "Because nothing here was ever monetized by making it so.",
  },
  leaving: [
    { t: "career.md", b: "Your whole career history as one deterministic Markdown file. No model involved, readable and diffable, downloadable from the Career history page or over MCP." },
    { t: "Your PDFs", b: "Every render is filed in its own company-and-role folder with the typeset source and the exact PDF you sent. On the uv install, finished PDFs are also copied to Documents/Maestro Career Studio/Applications." },
    { t: "base_resumes/", b: "Your resumes are JSON files on your disk, not rows in someone else's database." },
    { t: "The database", b: "One SQLite file in your data folder. Delete the folder and everything is gone, which is the point." },
  ],
  readSecurity: "Read SECURITY.md and the threat model",
  readPolicy: "Read PRIVACY.md, the full policy",
} as const;
