/**
 * Single source of truth for every piece of copy on the site.
 * Reconciled from M_Prasanna_Kumar_Resume.pdf (Oct 2026).
 * Modules read from here — never hardcode strings in components.
 */

export const IDENTITY = {
  name:      "PRASANNA KUMAR",
  role:      "FULL STACK DEVELOPER",
  tagline:   "SAAS, AI AGENTS, AND THE SYSTEMS IN BETWEEN.",
  location:  "BANGALORE, INDIA",
  reach:     "BANGALORE → WORLDWIDE",
  /**
   * Open to both full-time roles and freelance work. Three lengths because the
   * line lands in three box shapes: the identity card narrow and wide, and STATUS.
   */
  availability: {
    short: "OPEN TO WORK",
    long:  "OPEN TO FULL-TIME & FREELANCE",
    note:  "FULL-TIME ROLES & FREELANCE PROJECTS",
  },
}

export const CONTACT = {
  email:    "murahariprasannakumar0709@gmail.com",
  phone:    "+91 99639 94989",
  github:   "https://github.com/MurahariPrasannaKumar",
  linkedin: "https://www.linkedin.com/in/murahari-prasanna-kumar-0ab752279/",
  cv:       "/docs/Prasanna-Kumar-CV.pdf",
  /** The production origin — metadataBase and the link preview use it. */
  site:     "https://portfolio-nu-eosin-66.vercel.app",
} as const

export const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 1,  suffix: "+", label: "YEARS SHIPPING" },
  { value: 10, suffix: "+", label: "PROJECTS BUILT" },
]

/**
 * What a module is called when it is too small to show itself.
 *
 * A card moved into a cell much smaller than the one it was composed for
 * collapses to this title plus EXPAND, and opens full-size on tap (see
 * `isCramped()` in stage.tsx). Projects and stack categories use their own
 * titles, so they're not listed here.
 */
export const MODULE_TITLES: Record<string, string> = {
  status:       "STATUS",
  stats:        "BY THE\nNUMBERS",
  experience:   "EXPERIENCE",
  location:     "BASED",
  latest:       "MOST\nRECENT",
  "work-meta":  "SELECTED\nWORK",
  cv:           "2026 CV",
  "tech-count": "TOOLBOX",
  education:    "EDUCATION",
  headline:     "CONTACT",
  email:        "DIRECT",
  form:         "SEND A\nMESSAGE",
  socials:      "ELSEWHERE",
}

// ── Experience ────────────────────────────────────────────────────────────────
// Two roles, two employers: an internship and the current full-time seat.
// `level` drives the height of each rung in the timeline module.

export type Role = {
  title:   string
  company: string
  type:    string
  from:    string
  to:      string
  months:  number
  /** 0 = entry, 3 = current. Drives rung height in the timeline. */
  level:   number
  blurb:   string
  skills:  string[]
}

/** The current, most prominent employer — the one the Experience module headlines with. */
export const EMPLOYER = {
  name:     "F9 CYBRISK",
  location: "BANGALORE, INDIA",
  span:     "JAN 2026 — PRESENT",
  summary:  "AI-POWERED SAAS PLATFORMS — PROPERTY INTELLIGENCE, MISINFORMATION DETECTION, AND SEO AUTOMATION.",
}

export const ROLES: Role[] = [
  {
    title:   "FULL STACK DEVELOPER",
    company: "F9 CYBRISK PRIVATE LIMITED",
    type:    "FULL-TIME",
    from:    "JAN 2026",
    to:      "PRESENT",
    months:  9,
    level:   3,
    blurb:
      "Contributing to Brewkspace AI, an AI-powered SaaS platform for property intelligence and document analysis, engineering scalable React.js / Next.js / Node.js / PostgreSQL services and integrating Razorpay for subscription billing. Built backend verification workflows for CtrlFake, an AI misinformation-detection platform, and partnered on Seovate, an AI-driven SEO automation SaaS, across frontend, backend, database design and analytics dashboards.",
    skills: ["REACT.JS", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "POSTGRESQL", "RAZORPAY"],
  },
  {
    title:   "FULL STACK DEVELOPER INTERN",
    company: "KODNEST",
    type:    "INTERNSHIP",
    from:    "JAN 2025",
    to:      "JUL 2025",
    months:  7,
    level:   0,
    blurb:
      "Built and deployed dynamic, responsive MERN-stack applications within two-week Agile sprint cycles. Designed and integrated 15+ RESTful APIs, cutting data-retrieval latency by ~20%, and built a centralized library of reusable UI components under strict Git/GitHub version control — accelerating team delivery by 15%.",
    skills: ["MONGODB", "EXPRESS", "REACT", "NODE.JS", "GIT"],
  },
]

// ── Work ──────────────────────────────────────────────────────────────────────

export type Project = {
  num:      string
  title:    string
  subtitle: string
  role:     string
  year:     string
  url:      string | null
  /** Set when the live site is gone — renders an ARCHIVED chip instead of a link. */
  archived?: boolean
  images:   string[]
  stack:    string[]
  detail:   string[]
}

export const PROJECTS: Project[] = [
  {
    num:      "01",
    title:    "BREWKSPACE\nAI",
    subtitle: "SAAS / PROPERTY INTELLIGENCE",
    role:     "FULL STACK DEVELOPER",
    year:     "2026",
    url:      null,
    images:   [],
    stack:  ["REACT.JS", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "POSTGRESQL", "RAZORPAY"],
    detail: [
      "AI-powered SaaS platform for property intelligence and document analysis, built around AI agents, automated workflows and data-extraction pipelines.",
      "Engineered scalable frontend and backend modules with React.js, Next.js, TypeScript, Node.js and PostgreSQL.",
      "Integrated Razorpay for subscription billing, payment processing and SaaS monetization.",
    ],
  },
  {
    num:      "02",
    title:    "CTRLFAKE",
    subtitle: "AI / MISINFORMATION DETECTION",
    role:     "BACKEND DEVELOPER",
    year:     "2026",
    url:      null,
    images:   [],
    stack:  ["NODE.JS", "EXPRESS", "REST APIS", "POSTGRESQL"],
    detail: [
      "AI-powered misinformation-detection platform — engineered backend services and content-verification workflows for high-fidelity data processing.",
      "Built the pipelines that verify and score submitted content before it reaches the platform's detection layer.",
    ],
  },
  {
    num:      "03",
    title:    "SEOVATE",
    subtitle: "SAAS / SEO AUTOMATION",
    role:     "FULL STACK DEVELOPER",
    year:     "2026",
    url:      null,
    images:   [],
    stack:  ["REACT.JS", "NEXT.JS", "NODE.JS", "POSTGRESQL"],
    detail: [
      "AI-driven SEO automation SaaS platform — partnered across frontend and backend architecture, database design, analytics dashboards and data-visualization workflows.",
    ],
  },
  {
    num:      "04",
    title:    "POSTPILOT\nAI",
    subtitle: "SAAS / SOCIAL MEDIA AUTOMATION",
    role:     "SOLO DEVELOPER",
    year:     "2026 — PRESENT",
    url:      null,
    images:   [],
    stack:  ["REACT.JS", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "POSTGRESQL", "RAZORPAY"],
    detail: [
      "SaaS-based social media automation platform streamlining content scheduling, publishing workflows, campaign management and performance tracking across multiple channels.",
      "Architected scalable full-stack modules with React.js, Next.js, TypeScript, Node.js and PostgreSQL, including secure authentication and user management.",
      "Designed secure REST APIs, automated workflows and interactive analytics dashboards, and integrated Razorpay for subscription management and billing.",
    ],
  },
]

// ── Stack ─────────────────────────────────────────────────────────────────────

/** `id` is stable across languages — the stage maps `cat-<id>` modules by it. */
export type StackCategory = { id: string; label: string; skills: string[] }

export const STACK: StackCategory[] = [
  {
    id:    "languages",
    label: "LANGUAGES",
    skills: ["JAVASCRIPT (ES6+)", "TYPESCRIPT", "PYTHON", "C++"],
  },
  {
    id:    "frameworks",
    label: "FRAMEWORKS & LIBRARIES",
    skills: [
      "REACT.JS", "NEXT.JS", "NODE.JS", "EXPRESS.JS", "DJANGO", "REST APIS",
      "HTML5", "CSS3", "TAILWIND CSS", "BOOTSTRAP", "SHADCN",
    ],
  },
  {
    id:    "tools",
    label: "TOOLS & PLATFORMS",
    skills: [
      "GIT", "GITHUB", "POSTMAN", "VS CODE", "JIRA", "JWT AUTH",
      "AWS EC2", "AWS S3", "AWS SES", "AWS LAMBDA", "RAZORPAY", "FIREBASE",
    ],
  },
  { id: "databases", label: "DATABASES", skills: ["MONGODB", "POSTGRESQL", "SQL"] },
]

export const TECH_COUNT = STACK.reduce((n, c) => n + c.skills.length, 0)

/**
 * BY THE NUMBERS, expanded. The card shows STATS; the full view adds the
 * figures behind them. Derived wherever the data already exists here, so they
 * can't drift from the rest of the site.
 */
export const STATS_DETAIL: { value: number; suffix?: string; label: string; note: string }[] = [
  { ...STATS[0], note: "REACT.JS, NEXT.JS, NODE.JS" },
  { ...STATS[1], note: `${PROJECTS.length} OF THEM UNDER WORK` },
  {
    value: ROLES.reduce((n, r) => n + r.months, 0),
    label: "MONTHS OF EXPERIENCE",
    note:  `${ROLES.length} ROLES, INTERN → FULL-TIME`,
  },
  { value: 15, suffix: "+", label: "REST APIS SHIPPED", note: "KODNEST INTERNSHIP" },
  { value: 20, suffix: "%", label: "FASTER DATA RETRIEVAL", note: "API OPTIMIZATION AT KODNEST" },
  { value: TECH_COUNT, label: "TECHNOLOGIES", note: `ACROSS ${STACK.length} CATEGORIES` },
]

export const EDUCATION = [
  {
    school: "G. PULLA REDDY ENGINEERING COLLEGE",
    short:  "GPREC",
    place:  "KURNOOL, INDIA",
    award:  "B.TECH COMPUTER SCIENCE & TECHNOLOGY · CGPA 7.9/10",
    years:  "2021 — 2025",
  },
]

/**
 * The static CV is the one place on the site these belong — not part of
 * `Content`/`EN`, since there is no module/grid slot for it.
 */
export const ACHIEVEMENTS: string[] = [
  "Global Nominee, NASA Space Apps Challenge",
  "Team Lead, XR Fusion Hackathon Sponsorship Team (250+ participants)",
  "Award Winner, Best Innovative Business Idea — Centre of Innovation and Entrepreneurship Club",
]

/**
 * Interface copy — every label, button and caption the modules draw that isn't
 * part of the content above. Arrows are not in these strings: components draw
 * them as separate glyphs.
 */
export const UI = {
  identity: { portfolio: "PORTFOLIO — 2026", home: "INDEX", homeAria: "Go to index" },
  status:   { label: "STATUS", value: "OPEN" },
  stats:    { label: "BY THE NUMBERS", figures: (n: number) => `${n} FIGURES` },
  location: { label: "BASED", city: "BANGALORE", note: "GMT+5:30 · REMOTE-READY" },
  latest:   { label: "MOST RECENT", cta: "ALL WORK" },
  experience: { label: "EXPERIENCE", months: "MOS" },
  workMeta: { label: "SELECTED", line: "PROJECTS · 2025—2026", tags: "SAAS · AI AGENTS · AUTOMATION" },
  cv: {
    label: "CURRICULUM VITAE", top: "2026", bottom: "CV",
    contents: "EXPERIENCE · STACK · EDUCATION", download: "DOWNLOAD",
  },
  project: {
    label: "WORK", archivedView: "ARCHIVED — VIEW", views: "VIEWS",
    visit: "VISIT SITE", offline: "PRIVATE — NO PUBLIC LINK",
  },
  toolbox:   { label: "TOOLBOX", technologies: "TECHNOLOGIES", categories: (n: number) => `${n} CATEGORIES` },
  education: { label: "EDUCATION" },
  contact: {
    label: "CONTACT", headline: ["LET'S", "WORK."] as [string, string],
    direct: "DIRECT",
    form: "SEND A MESSAGE", formTag: "FORM", sentTag: "SENT",
    received: "RECEIVED.", reply: "I'LL BE IN TOUCH SHORTLY.",
    name: "YOUR NAME", email: "YOUR EMAIL", message: "YOUR MESSAGE",
    error: "SOMETHING WENT WRONG — EMAIL ME DIRECTLY.",
    sending: "SENDING...", send: "SEND MESSAGE",
    github: "GITHUB", linkedin: "LINKEDIN", cv: "CV",
    footer: "© 2026 Prasanna Kumar", colophon: "· NEXT.JS",
  },
  expand: "EXPAND",
  close: "CLOSE",
  esc: "ESC",
  step: "TO STEP THROUGH",
  expanded: "EXPANDED",
  roles: (n: number) => `${n} ROLES`,
  tabs: { index: "INDEX", work: "WORK", stack: "STACK", contact: "CONTACT" },
  dock: {
    hints: "DRAG · FLING · 1—4 · ← → · ESC",
    reset: "RESET GRID", resetAria: "Put the cards back",
    toLight: "Switch to light mode", toDark: "Switch to dark mode",
  },
  demo: {
    tabsPhone: "TAP A TAB TO SWITCH PAGE",
    tabsDesktop: "TABS SWITCH PAGE · OR PRESS 1–4",
    open: "TAP A CARD TO OPEN IT",
    swap: "DRAG ONTO ANOTHER TO SWAP",
    fling: "FLING TO THROW",
    shake: "SHAKE TO RESET",
    shakeOffer: "SHAKE YOUR PHONE TO RESET THE GRID",
    shakeEnable: "ENABLE", shakeLater: "NOT NOW",
    skip: "SKIP DEMO", skipAria: "Close the demonstration",
  },
}

export const EN = {
  IDENTITY, STATS, MODULE_TITLES, EMPLOYER, ROLES, PROJECTS, STACK, TECH_COUNT,
  STATS_DETAIL, EDUCATION, UI,
}
export type Content = typeof EN
