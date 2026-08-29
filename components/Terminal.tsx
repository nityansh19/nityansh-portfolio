"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./Reveal";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

type Intent =
  | "intro"
  | "building"
  | "career"
  | "jarvis"
  | "stack"
  | "frontend"
  | "backend"
  | "database"
  | "python"
  | "ai"
  | "devops"
  | "different"
  | "education"
  | "learning"
  | "experience"
  | "projects"
  | "philosophy"
  | "location"
  | "availability"
  | "contact"
  | "github"
  | "instagram"
  | "discord"
  | "resume"
  | "age"
  | "strengths"
  | "goals"
  | "recruiter"
  | "unknown";

const QUICK_PROMPTS = [
  "Who is Nityansh?",
  "What is he currently building?",
  "What technologies does he know?",
  "Tell me about CareerUpAI",
  "What makes him different?",
  "How can I contact him?",
];

const KNOWLEDGE = {
  intro: `
Nityansh Rupesh Bahadur is a developer from Lucknow, India who enjoys turning ambitious ideas into real digital products.

His interests sit around full-stack development, AI, developer tooling and building systems that solve actual problems.

He has been actively learning and building since 2025. Rather than simply collecting technologies, he prefers learning by actually making things.

In simple terms - he likes taking an idea, figuring out how it should work, building it, breaking it, improving it and learning from the process.
`,

  building: `
There are currently two major projects being developed.

01 — CareerUpAI

An AI-powered career platform designed to help people build stronger professional profiles and make better career decisions.

The idea includes CV analysis, resume creation, personalized career guidance, improvement suggestions and other career-focused tools.

02 — Personal AI Workspace

A private JARVIS-style AI assistant being designed for Nityansh's own workspace.

The exact name and feature set are still evolving, but the goal is to create a useful personal AI system that can interact with and assist his everyday development workflow.

Both are being approached as real products rather than simple tutorial projects.
`,

  career: `
CareerUpAI is one of Nityansh's main projects currently in development.

The idea is to make career building more useful and personalized instead of treating a resume as just a static document.

The planned direction includes:

- AI-powered CV analysis
- Resume building
- Personalized career guidance
- Smart improvement suggestions
- Career-focused tools
- Practical feedback for professional profiles

It combines full-stack development with applied AI and is one of the projects Nityansh is most interested in developing further.
`,

  jarvis: `
The second major project is a personal AI workspace assistant.

Think of it as a private JARVIS-style system designed around Nityansh's own workspace and development workflow.

The project is still evolving, so the final name and exact feature set have not been decided yet.

The interesting part is the direction - combining AI, automation, software development and personal productivity into one system.
`,

  stack: `
Nityansh's current technology ecosystem includes:

Frontend
HTML · CSS · JavaScript · React · Vite

Backend
Node.js · Express

Database
MongoDB

Currently exploring
Python · Artificial Intelligence · Docker · Linux · DevOps

His goal isn't simply to know these technologies individually. He is interested in understanding how they work together to create complete products.
`,

  frontend: `
On the frontend side, Nityansh works with:

- HTML
- CSS
- JavaScript
- React
- Vite

He is particularly interested in creating interfaces that are not only functional, but also polished, responsive and enjoyable to use.
`,

  backend: `
For backend development, Nityansh is working with:

- Node.js
- Express

His interest in backend development comes from wanting to understand what happens behind the interface - APIs, application logic, data flow and the systems that make products actually work.
`,

  database: `
Nityansh currently works with MongoDB as his primary database technology.

He is interested in understanding how application logic, APIs and databases connect together rather than treating each part of a stack as a completely separate skill.
`,

  python: `
Python is one of the technologies Nityansh is currently going deeper into.

He is exploring it particularly because of its connection to Artificial Intelligence, automation, backend systems and developer tooling.
`,

  ai: `
Artificial Intelligence is one of Nityansh's current areas of exploration.

This interest is already showing up in his projects, especially CareerUpAI and his planned personal AI workspace.

He is interested in using AI as part of useful products rather than adding AI simply because it is trendy.
`,

  devops: `
Nityansh is currently exploring DevOps alongside his full-stack development journey.

His current areas of interest include:

- Docker
- Linux
- DevOps concepts
- Deployment and development workflows

The broader goal is to understand more of the journey from writing code to actually running and maintaining software.
`,

  different: `
What stands out about Nityansh is his approach to learning.

He is less interested in collecting a huge list of technologies and more interested in building things that actually require them.

He enjoys projects with:

- A real problem to solve
- Interesting logic
- Room for experimentation
- Multiple technologies working together
- Something useful at the end

His current direction is moving toward AI-powered products, full-stack systems and developer tooling.
`,

  education: `
Nityansh is pursuing a BCA at Integral University.

Alongside his academic work, he has been actively learning and building since 2025.

His development focus is currently centered around full-stack engineering while going deeper into Python, AI and DevOps.
`,

  learning: `
Nityansh has been actively learning and building since 2025.

His current learning direction includes:

- Full-stack development
- Python
- Artificial Intelligence
- DevOps
- Docker
- Linux
- Backend development

He follows a project-driven approach, learning technologies when they help him build something meaningful.
`,

  experience: `
Nityansh is at an early stage of his professional development journey.

Rather than presenting years of industry experience that he doesn't have, his portfolio focuses on what he is actually building, learning and experimenting with.

His strongest evidence of growth is the work itself - particularly his current projects and the technologies he is actively exploring.
`,

  projects: `
The main projects currently being highlighted are:

01 — CareerUpAI
AI · Full Stack · Career Technology

02 — Personal AI Workspace
AI · Automation · Developer Tooling

More projects will be added as they become ready to showcase properly.

The portfolio is intentionally focused on quality over simply displaying a large number of small projects.
`,

  philosophy: `
BUILD.
LEARN.
BREAK.
IMPROVE.
REPEAT.

Nityansh enjoys taking an idea from something that exists only in his head and turning it into something that actually works.

He values curiosity, problem solving, experimentation and continuous improvement more than simply knowing a long list of technologies.

The mindset is simple - build something, learn from what breaks, improve it and keep going.
`,

  location: `
Nityansh is based in Lucknow, India.

He is interested in opportunities where he can work on challenging software, learn from strong developers and contribute to products that solve meaningful problems.
`,

  availability: `
Nityansh is open to conversations around:

- Software development
- Full-stack projects
- AI-powered products
- Collaborations
- Internships
- Interesting technical problems
- Opportunities to learn and contribute

For professional opportunities, email is the best way to start a conversation.
`,

  contact: `
The easiest way to reach Nityansh professionally is through email.

Email
Nityansh.bahadur1905@gmail.com

Phone
7992132077

GitHub
nityansh19

Instagram
@nityansh.19

Discord
kakarotsenpai

For professional opportunities, email is recommended.
`,

  github: `
Nityansh's GitHub is where his development work and projects can be explored.

GitHub
nityansh19

The portfolio also links directly to his GitHub for people who want to explore the code behind his projects.
`,

  instagram: `
Nityansh's Instagram handle is:

@nityansh.19
`,

  discord: `
Nityansh's Discord username is:

kakarotsenpai
`,

  resume: `
The portfolio includes a Download Resume option for recruiters who prefer a traditional CV.

For a quick overview, this portfolio assistant can also explain Nityansh's background, education, skills, projects, current focus and contact information.
`,

  age: `
That information isn't currently included in the portfolio's public knowledge base.

I don't want to guess or invent personal information. If Nityansh adds it to the portfolio later, I'll be able to answer it here.
`,

  strengths: `
Some of Nityansh's strongest qualities are:

- Curiosity
- Problem solving
- Willingness to experiment
- Learning by building
- Interest in complex technical problems
- Persistence when figuring out how something works

He is especially motivated by projects where there is something new to understand rather than simply following a tutorial.
`,

  goals: `
Nityansh's current direction is to become a stronger full-stack developer while going deeper into:

- Python
- Artificial Intelligence
- DevOps
- Backend systems
- Developer tooling

Long term, the goal is to build increasingly ambitious products and systems that combine these areas.
`,

  recruiter: `
If you're evaluating Nityansh professionally, the most useful parts of the portfolio are his current projects, technology stack, learning direction and development philosophy.

He is particularly interested in opportunities involving software development, full-stack engineering, AI-powered products, challenging technical problems and environments where he can continue learning.
`,

  unknown: `
I'm Nityansh's portfolio assistant, so I can help with questions about Nityansh, his background, education, projects, skills, current focus, development philosophy and contact information.

I don't have enough information to answer that particular question accurately.

Try asking about his:

- Background
- Projects
- CareerUpAI
- Personal AI workspace
- Tech stack
- Python / AI / DevOps
- Education
- Learning journey
- Strengths
- Availability
- Contact details

If the information isn't part of the portfolio, I won't make it up.
`,
};

/* -------------------------------------------------------
   NORMALIZATION
------------------------------------------------------- */

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function words(text: string) {
  return new Set(normalize(text).split(" ").filter(Boolean));
}

/* -------------------------------------------------------
   INTENT DETECTION
   Uses weighted keywords instead of exact phrase matching.
------------------------------------------------------- */

const INTENT_RULES: Record<
  Exclude<Intent, "unknown">,
  { keywords: string[]; phrases?: string[] }
> = {
  intro: {
    keywords: [
      "who",
      "about",
      "background",
      "introduction",
      "introduce",
      "profile",
      "bio",
      "person",
    ],
    phrases: [
      "who is he",
      "who is nityansh",
      "tell me about him",
      "tell me about nityansh",
      "give me an introduction",
      "give me a quick introduction",
      "what does he do",
    ],
  },

  building: {
    keywords: [
      "building",
      "working",
      "developing",
      "creating",
      "currently",
      "ongoing",
      "progress",
    ],
    phrases: [
      "what is he building",
      "what is he working on",
      "currently working",
      "currently building",
      "what is nityansh building",
    ],
  },

  career: {
    keywords: [
      "careerupai",
      "careerup",
      "career",
      "resume",
      "cv",
      "job",
      "professional",
    ],
    phrases: [
      "tell me about careerupai",
      "what is careerupai",
      "career up ai",
      "resume project",
      "cv project",
    ],
  },

  jarvis: {
    keywords: [
      "jarvis",
      "workspace",
      "assistant",
      "automation",
      "personal",
      "ai assistant",
    ],
    phrases: [
      "personal ai",
      "personal assistant",
      "ai workspace",
      "jarvis project",
      "workspace assistant",
    ],
  },

  stack: {
    keywords: [
      "stack",
      "technology",
      "technologies",
      "tech",
      "skills",
      "languages",
      "framework",
      "tools",
      "coding",
    ],
    phrases: [
      "tech stack",
      "technology stack",
      "what does he know",
      "what technologies does he use",
      "what can he code",
    ],
  },

  frontend: {
    keywords: [
      "frontend",
      "front",
      "react",
      "vite",
      "html",
      "css",
      "javascript",
      "interface",
      "ui",
    ],
    phrases: [
      "frontend skills",
      "front end",
      "frontend technologies",
    ],
  },

  backend: {
    keywords: [
      "backend",
      "back",
      "node",
      "express",
      "api",
      "server",
    ],
    phrases: [
      "backend skills",
      "back end",
      "backend technologies",
    ],
  },

  database: {
    keywords: [
      "database",
      "mongodb",
      "mongo",
      "data",
      "storage",
    ],
    phrases: [
      "database skills",
      "what database",
      "which database",
    ],
  },

  python: {
    keywords: ["python"],
    phrases: [
      "does he know python",
      "is he learning python",
      "python skills",
    ],
  },

  ai: {
    keywords: [
      "ai",
      "artificial",
      "intelligence",
      "machine",
      "ml",
      "automation",
    ],
    phrases: [
      "artificial intelligence",
      "does he know ai",
      "is he learning ai",
      "ai experience",
    ],
  },

  devops: {
    keywords: [
      "devops",
      "docker",
      "linux",
      "deployment",
      "infrastructure",
      "container",
    ],
    phrases: [
      "devops skills",
      "is he learning devops",
      "does he know docker",
    ],
  },

  different: {
    keywords: [
      "different",
      "unique",
      "special",
      "standout",
      "stand",
      "out",
      "hire",
      "hiring",
      "value",
      "strength",
    ],
    phrases: [
      "what makes him different",
      "what makes him unique",
      "why hire him",
      "why should i hire him",
      "what makes him stand out",
      "why should we hire him",
    ],
  },

  education: {
    keywords: [
      "education",
      "college",
      "university",
      "bca",
      "degree",
      "study",
      "studies",
      "academic",
      "student",
    ],
    phrases: [
      "where does he study",
      "where is he studying",
      "what does he study",
      "educational background",
      "college name",
    ],
  },

  learning: {
    keywords: [
      "learning",
      "learn",
      "exploring",
      "currently",
      "focus",
      "studying",
      "improving",
    ],
    phrases: [
      "what is he learning",
      "what is he currently learning",
      "current focus",
      "what is he exploring",
    ],
  },

  experience: {
    keywords: [
      "experience",
      "experienced",
      "work",
      "professional",
      "industry",
      "internship",
      "intern",
    ],
    phrases: [
      "how much experience",
      "work experience",
      "professional experience",
      "industry experience",
    ],
  },

  projects: {
    keywords: [
      "projects",
      "project",
      "portfolio",
      "work",
      "built",
      "build",
    ],
    phrases: [
      "show me his projects",
      "what projects has he built",
      "what has he built",
      "tell me about his projects",
    ],
  },

  philosophy: {
    keywords: [
      "philosophy",
      "mindset",
      "approach",
      "believe",
      "thinking",
      "method",
      "process",
    ],
    phrases: [
      "how does he approach development",
      "what is his mindset",
      "development philosophy",
      "how does he learn",
    ],
  },

  location: {
    keywords: [
      "location",
      "located",
      "based",
      "lucknow",
      "india",
      "city",
      "where",
    ],
    phrases: [
      "where is he from",
      "where does he live",
      "where is nityansh from",
      "where is he based",
    ],
  },

  availability: {
    keywords: [
      "available",
      "availability",
      "opportunity",
      "opportunities",
      "collaboration",
      "collaborate",
      "internship",
      "internships",
      "freelance",
    ],
    phrases: [
      "is he available",
      "is he looking for work",
      "is he open to opportunities",
      "can i work with him",
      "can we collaborate",
    ],
  },

  contact: {
    keywords: [
      "contact",
      "email",
      "phone",
      "number",
      "reach",
      "message",
      "call",
      "connect",
    ],
    phrases: [
      "how can i contact him",
      "how do i contact him",
      "how can i reach him",
      "how do i reach nityansh",
      "contact details",
    ],
  },

  github: {
    keywords: ["github", "repository", "repo", "code"],
    phrases: [
      "github profile",
      "github account",
      "where is his code",
    ],
  },

  instagram: {
    keywords: ["instagram", "insta", "social"],
    phrases: ["instagram handle", "instagram username"],
  },

  discord: {
    keywords: ["discord"],
    phrases: ["discord username", "discord handle"],
  },

  resume: {
    keywords: ["resume", "cv", "curriculum"],
    phrases: [
      "download resume",
      "see his resume",
      "his cv",
      "where is his resume",
    ],
  },

  age: {
    keywords: ["age", "old", "years"],
    phrases: [
      "how old is he",
      "how old is nityansh",
      "what is his age",
    ],
  },

  strengths: {
    keywords: [
      "strength",
      "strengths",
      "good",
      "best",
      "qualities",
      "quality",
      "strong",
      "strongest",
    ],
    phrases: [
      "what are his strengths",
      "what is he good at",
      "what are his best qualities",
    ],
  },

  goals: {
    keywords: [
      "goal",
      "goals",
      "future",
      "direction",
      "ambition",
      "ambitions",
      "longterm",
      "long",
    ],
    phrases: [
      "what are his goals",
      "what does he want to do",
      "where is he headed",
      "what is his future direction",
    ],
  },

  recruiter: {
    keywords: [
      "recruiter",
      "candidate",
      "suitable",
      "role",
      "position",
      "company",
      "team",
      "developer",
    ],
    phrases: [
      "tell me about him as a candidate",
      "would he be a good fit",
      "is he suitable for a role",
      "why should we consider him",
    ],
  },
};

function detectIntent(question: string): Intent {
  const q = normalize(question);

  if (!q) return "unknown";

  const scores: Record<string, number> = {};

  for (const [intent, rule] of Object.entries(INTENT_RULES)) {
    let score = 0;

    for (const phrase of rule.phrases ?? []) {
      if (q.includes(normalize(phrase))) {
        score += 8;
      }
    }

    const qWords = words(q);

    for (const keyword of rule.keywords) {
      const keywordWords = normalize(keyword).split(" ");

      if (keywordWords.length === 1 && qWords.has(keyword)) {
        score += 3;
      }

      if (keywordWords.length > 1 && q.includes(normalize(keyword))) {
        score += 4;
      }
    }

    if (score > 0) {
      scores[intent] = score;
    }
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  if (!sorted.length) return "unknown";

  const [bestIntent, bestScore] = sorted[0];

  /*
   * Avoid weak matches.
   *
   * Example:
   * "what is his favorite movie?"
   *
   * should NOT accidentally become "projects"
   * just because the question contains "his".
   */
  if (bestScore < 3) {
    return "unknown";
  }

  return bestIntent as Intent;
}

/* -------------------------------------------------------
   RESPONSE ENGINE
------------------------------------------------------- */

function getResponse(question: string): string {
  const intent = detectIntent(question);

  /*
   * Contact-specific routing gets priority.
   */
  if (
    intent === "github" ||
    intent === "instagram" ||
    intent === "discord"
  ) {
    return KNOWLEDGE[intent];
  }

  return KNOWLEDGE[intent];
}

/* -------------------------------------------------------
   TYPING EFFECT
------------------------------------------------------- */

function TypingText({
  text,
  speed = 5,
}: {
  text: string;
  speed?: number;
}) {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    setVisible("");

    let index = 0;

    const interval = window.setInterval(() => {
      index += 1;

      setVisible(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="whitespace-pre-wrap leading-7 text-[13px] text-ink-dim">
      {visible}
      <span className="ml-1 inline-block h-3 w-[2px] translate-y-[2px] animate-pulse bg-accent" />
    </div>
  );
}

/* -------------------------------------------------------
   MESSAGE FORMATTER
------------------------------------------------------- */

function formatMessage(text: string) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();

    if (
      trimmed.startsWith("01 —") ||
      trimmed.startsWith("02 —") ||
      trimmed.startsWith("03 —") ||
      trimmed.startsWith("04 —")
    ) {
      return (
        <div
          key={index}
          className="mb-2 mt-4 font-medium tracking-tight text-ink"
        >
          {line}
        </div>
      );
    }

    if (trimmed.startsWith("- ")) {
      return (
        <div key={index} className="flex gap-2 pl-1 text-ink-dim">
          <span className="text-accent">+</span>
          <span>{trimmed.slice(2)}</span>
        </div>
      );
    }

    if (
      trimmed === "Frontend" ||
      trimmed === "Backend" ||
      trimmed === "Database" ||
      trimmed === "Currently exploring" ||
      trimmed === "Email" ||
      trimmed === "Phone" ||
      trimmed === "GitHub" ||
      trimmed === "Instagram" ||
      trimmed === "Discord"
    ) {
      return (
        <div
          key={index}
          className="mt-4 font-medium uppercase tracking-[0.08em] text-[11px] text-ink"
        >
          {trimmed}
        </div>
      );
    }

    if (
      trimmed === "BUILD." ||
      trimmed === "LEARN." ||
      trimmed === "BREAK." ||
      trimmed === "IMPROVE." ||
      trimmed === "REPEAT."
    ) {
      return (
        <div
          key={index}
          className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl"
        >
          {trimmed}
        </div>
      );
    }

    if (!trimmed) {
      return <div key={index} className="h-2" />;
    }

    return (
      <div key={index} className="min-h-[1.65rem]">
        {line}
      </div>
    );
  });
}

/* -------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------- */

export default function Terminal() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: `Hi. I'm Nityansh's portfolio assistant.

I'm here to help recruiters, collaborators and anyone curious about Nityansh understand his background, projects, skills and current direction.

You can ask naturally - you don't need to use a specific command.`,
    },
  ]);

  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  const latestAssistantMessage = useMemo(
    () =>
      [...messages]
        .reverse()
        .find((message) => message.role === "assistant"),
    [messages]
  );

  function askQuestion(question: string) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion || isThinking) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: cleanQuestion,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsThinking(true);

    const thinkingTime = Math.min(
      1100,
      Math.max(450, cleanQuestion.length * 10)
    );

    window.setTimeout(() => {
      const answer = getResponse(cleanQuestion);

      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: answer,
        },
      ]);

      setIsThinking(false);
    }, thinkingTime);
  }

  useEffect(() => {
    if (!messagesRef.current) return;

    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isThinking]);

  return (
    <section
      id="terminal"
      className="relative overflow-hidden border-t border-line bg-bg-elev py-32 md:py-[150px]"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-accent/[0.035] blur-[120px]" />

        <div className="absolute bottom-[5%] right-[8%] h-[360px] w-[360px] rounded-full bg-accent-2/[0.035] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="06 / NITYANSH ASSISTANT"
          title={
            <>
              Ask the portfolio.
              <br />
              Get to know the developer.
            </>
          }
        />

        {/* Assistant shell */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 0.8, 0.24, 1],
          }}
          className="relative mt-16"
        >
          {/* Outer aura */}
          <motion.div
            animate={{
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-accent-2/10 blur-[1px]"
          />

          <div className="relative overflow-hidden rounded-[26px] border border-white/[0.11] bg-[#0a0b0e]/90 shadow-[0_50px_140px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.07]">
                  <motion.span
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(91,110,245,0.8)]"
                  />

                  <span className="absolute inset-0 rounded-full border border-accent/20 animate-ping" />
                </div>

                <div>
                  <div className="font-mono text-[11px] tracking-[0.16em] text-ink">
                    NITYANSH.AI
                  </div>

                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-faint">
                    Personal portfolio intelligence
                  </div>
                </div>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-faint">
                  Recruiter mode
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[9px] text-ink-dim">
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]"
                  />
                  ONLINE
                </span>
              </div>
            </div>

            {/* System bar */}
            <div className="border-b border-white/[0.06] bg-white/[0.015] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-accent">
                  SYSTEM
                </span>

                <div className="h-px flex-1 bg-white/[0.06]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-faint">
                  Ask anything about Nityansh
                </span>
              </div>
            </div>

            {/* Conversation */}
            <div
              ref={messagesRef}
              className="max-h-[500px] min-h-[390px] space-y-7 overflow-y-auto px-5 py-7 sm:px-8 sm:py-9"
            >
              <AnimatePresence initial={false}>
                {messages.map((message, index) => {
                  const isAssistant = message.role === "assistant";

                  return (
                    <motion.div
                      key={message.id}
                      initial={{
                        opacity: 0,
                        y: 14,
                        scale: 0.985,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 0.8, 0.24, 1],
                      }}
                      className={`flex ${
                        isAssistant ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-[850px] ${
                          isAssistant ? "w-full sm:w-[82%]" : "w-auto"
                        }`}
                      >
                        <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em]">
                          <span
                            className={
                              isAssistant
                                ? "text-accent"
                                : "text-ink-faint"
                            }
                          >
                            {isAssistant ? "NITYANSH.AI" : "YOU"}
                          </span>

                          <span className="text-ink-faint">/</span>

                          <span className="text-ink-faint">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div
                          className={`relative rounded-2xl border px-5 py-5 transition-all duration-300 ${
                            isAssistant
                              ? "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.12]"
                              : "border-accent/20 bg-accent/[0.055]"
                          }`}
                        >
                          {isAssistant &&
                          message.id === latestAssistantMessage?.id ? (
                            <TypingText text={message.text} />
                          ) : (
                            <div className="whitespace-pre-wrap text-[13px] leading-7 text-ink-dim">
                              {isAssistant
                                ? formatMessage(message.text)
                                : message.text}
                            </div>
                          )}

                          {isAssistant && (
                            <div className="absolute bottom-3 right-4 font-mono text-[8px] text-ink-faint">
                              N.R.B
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Thinking */}
              <AnimatePresence>
                {isThinking && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 font-mono text-[10px] text-ink-faint"
                  >
                    <span className="text-accent">NITYANSH.AI</span>

                    <span className="flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          animate={{
                            opacity: [0.25, 1, 0.25],
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: dot * 0.15,
                          }}
                          className="h-1 w-1 rounded-full bg-accent"
                        />
                      ))}
                    </span>

                    <span>processing portfolio knowledge...</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick questions */}
            <div className="border-t border-white/[0.07] px-5 py-5 sm:px-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-faint">
                  Suggested questions
                </span>

                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <motion.button
                    key={prompt}
                    type="button"
                    disabled={isThinking}
                    onClick={() => askQuestion(prompt)}
                    whileHover={{
                      y: -2,
                      borderColor: "rgba(91,110,245,0.55)",
                      backgroundColor: "rgba(91,110,245,0.05)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-full border border-white/[0.08] bg-white/[0.015] px-3.5 py-2 font-mono text-[10px] text-ink-dim transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.07] bg-black/20 p-4 sm:p-5">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  askQuestion(input);
                }}
                className="group relative flex items-center rounded-xl border border-white/[0.09] bg-white/[0.025] transition-all duration-300 focus-within:border-accent/40 focus-within:bg-white/[0.04] focus-within:shadow-[0_0_40px_rgba(91,110,245,0.07)]"
              >
                <motion.span
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="pl-4 font-mono text-sm text-accent"
                >
                  ›
                </motion.span>

                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask anything about Nityansh..."
                  disabled={isThinking}
                  className="h-14 min-w-0 flex-1 bg-transparent px-3 font-mono text-[12px] text-ink outline-none placeholder:text-ink-faint disabled:cursor-not-allowed"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isThinking}
                  className="mr-2 flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim transition-all hover:border-accent/40 hover:bg-accent/[0.08] hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Ask
                  <span className="text-accent">↗</span>
                </button>
              </form>

              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink-faint">
                  Answers are based on portfolio information
                </span>

                <span className="hidden font-mono text-[8px] text-ink-faint sm:block">
                  ENTER ↵
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-7 grid gap-3 sm:grid-cols-3"
        >
          {[
            [
              "01",
              "Ask naturally",
              "No commands required. Ask questions like you would ask a person.",
            ],
            [
              "02",
              "Recruiter focused",
              "Explore projects, skills, education, strengths and availability.",
            ],
            [
              "03",
              "No guessing",
              "If the portfolio doesn't contain an answer, the assistant says so.",
            ],
          ].map(([num, title, desc]) => (
            <div
              key={num}
              className="border-t border-white/[0.07] pt-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-accent">
                  {num}
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink-faint">
                  {title}
                </span>
              </div>

              <p className="mt-2 text-[11px] leading-5 text-ink-faint">
                {desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}