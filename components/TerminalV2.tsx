"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = { id: number; role: "user" | "assistant"; text: string };
type Topic = keyof typeof KNOWLEDGE;

const QUICK_PROMPTS = [
  "What is Nityansh working on right now?",
  "Show me all of his projects",
  "What is his current tech stack?",
  "Tell me about Nivora",
  "Tell me about Nitra Chat",
  "What is he learning?",
];

const KNOWLEDGE = {
  intro: `Nityansh Rupesh Bahadur is a full-stack developer from Lucknow, India.

He started taking web development seriously in 2025. His main focus is full-stack development, while he is going deeper into Python and AI and learning more about backend systems, DevOps, Linux and Docker.

He learns mostly by building. The projects on this portfolio are the clearest picture of what he is working toward.`,

  building: `Right now the portfolio highlights four projects:

01 — Nivora
Personal finance OS · Phase 0 / Foundation
A finance app for everyday expenses, income, savings, budgets, goals and useful financial insights.

02 — CareerUpAI
AI · Full Stack · Currently building
A career platform around CV analysis, resume building, profile analysis, career guidance and personalized feedback.

03 — Nitra Chat
Real-time · Full Stack · Active development
A messaging application focused on users, conversations, persistence, authentication, search and the engineering needed for real-time communication.

04 — Personal AI Assistant
AI · Automation · Currently building
An experimental personal AI project exploring context, tools, automation, knowledge and developer workflows.

Nivora, CareerUpAI and the Personal AI Assistant are all being actively developed in different stages; Nitra Chat is also under active development.`,

  projects: `The current project list is:

01 — Nivora — FINTECH · PRODUCT ENGINEERING
Phase 0 · Foundation
React · Vite · TypeScript · Framer Motion · Lucide React · Recharts

02 — CareerUpAI — AI · FULL STACK
Currently building
React · Vite · JavaScript · Node.js · Express · MongoDB · AI

03 — Nitra Chat — REAL-TIME · FULL STACK
Active development
Next.js 15 · React 19 · TypeScript · Tailwind CSS · Motion · Lucide React · MongoDB · Mongoose · bcryptjs

04 — Personal AI Assistant — AI · AUTOMATION
Currently building
Python · AI · LLMs · React · Node.js · APIs · Linux · Docker

The portfolio is intentionally centered on a smaller set of projects that show what Nityansh is actually learning and building.`,

  careerupai: `CareerUpAI is an AI-powered career platform Nityansh is currently building.

The idea is to connect the pieces of career preparation that are normally scattered across different tools.

Current product direction:
+ AI-powered CV analysis
+ Resume workspace
+ Profile analysis
+ Career guidance
+ Personalized feedback
+ A single place for career-focused tools

The engineering scope covers the frontend, API layer, database, authentication and AI integration. The current stack is React, Vite, JavaScript, Node.js, Express, MongoDB and AI.

Status: work in progress.`,

  nivora: `Nivora is Nityansh's personal finance application and is currently in Phase 0 — Foundation.

It is being designed for everyday use rather than as a finance dashboard packed with unnecessary charts.

Core areas:
+ Expenses
+ Income
+ Savings
+ Budgets
+ Analytics
+ Goals

Current stack:
React · Vite · TypeScript · Framer Motion · Lucide React · Recharts

The roadmap is Foundation → Core data → Insights → Product. The first goal is getting the basic workflow and visual system right before adding more advanced features.`,

  nitra: `Nitra Chat is Nityansh's real-time/full-stack messaging project and is in active development.

The project currently covers the foundations around identity, messaging, discovery, persistence and interaction. Users, conversations and messages are backed by MongoDB through the backend layer.

Current stack:
Next.js 15 · React 19 · TypeScript · Tailwind CSS · Motion · Lucide React · MongoDB · Mongoose · bcryptjs

The next engineering areas include stronger authentication and authorization, REST expansion, WebSockets, presence, media, offline states and deployment.`,

  personalai: `The Personal AI Assistant is an experimental project Nityansh is currently building while going deeper into Python and AI.

The focus is not just on getting a model to answer questions. He is exploring what happens when an assistant has useful context, can work with tools and information, automate tasks, and fit into a real developer workflow.

Areas being explored:
+ Context
+ Tools
+ Automation
+ Knowledge
+ Developer workflow
+ Experimentation

Current stack/direction: Python · AI · LLMs · React · Node.js · APIs · Linux · Docker.

The project is intentionally experimental while he figures out which capabilities are genuinely useful.`,

  stack: `Nityansh's current stack, based on the latest portfolio information:

Frontend
React · TypeScript · JavaScript · Tailwind CSS · Vite · HTML · CSS · Motion

Backend
Node.js · Express · Flask · Django · REST APIs

Data
MongoDB · MySQL · Firebase

AI / Engineering
Python · AI · Docker · Linux · Git · GitHub

He does not present every item as an expert-level skill. Some are core tools he uses, while Python, AI, Docker, Linux and DevOps are important parts of his current learning direction.`,

  frontend: `For frontend work, Nityansh uses React, TypeScript, JavaScript, Tailwind CSS, Vite, HTML and CSS. He also uses Motion/Framer Motion for interaction.

He cares about responsive interfaces and spends a lot of time on interaction details, layout and making the UI feel good without adding animation everywhere.`,

  backend: `For backend development, Nityansh works with Node.js and Express and is also exploring Flask and Django.

He is interested in APIs, application logic, data flow, authentication and understanding how the backend supports the product rather than treating it as an afterthought.`,

  database: `His current data technologies include MongoDB, MySQL and Firebase.

MongoDB appears across several of his full-stack projects, including Nitra Chat and CareerUpAI.`,

  python: `Python is one of Nityansh's main learning priorities right now.

He is going deeper into it because he wants to understand AI, automation, backend systems and developer tooling more properly instead of only using ready-made APIs.`,

  ai: `AI is one of Nityansh's current areas of focus.

It is directly connected to CareerUpAI and the Personal AI Assistant. His interest is in building useful AI-powered features and understanding the engineering around them — context, tools, APIs, automation, reliability and workflow integration.`,

  devops: `Nityansh is currently learning more about DevOps and the parts of software that happen after the code is written.

His current engineering interests include Docker, Linux, deployment workflows and understanding how applications are actually run and maintained.`,

  education: `Nityansh is pursuing a Bachelor of Computer Applications (BCA) in Computer Science at Integral University, Lucknow.

The portfolio currently lists a CGPA of 7.3 / 10.

He has been actively learning and building since 2025 alongside his studies.`,

  experience: `Nityansh is still early in his professional journey, so the portfolio focuses on actual work rather than overstating years of industry experience.

Freelance Digital Services
Web · Design · Video
He has worked on web development, graphic design and video projects for clients, including requirements, revisions, communication and delivery.

College Coding Club
Technical Member
He has taken part in coding activities, technical discussions, practice sessions and group problem-solving with other students.`,

  learning: `His current learning direction is:

+ Full-stack development
+ Python
+ Artificial Intelligence
+ Backend systems
+ DevOps
+ Docker
+ Linux
+ Developer tooling

The pattern is pretty consistent: learn something, use it in a project, find what breaks, then learn the missing pieces.`,

  philosophy: `Nityansh's approach is fairly simple:

01 — Start with the problem
Understand what the thing is actually supposed to solve.

02 — Keep things understandable
Break larger problems into pieces that are easier to reason about.

03 — Build, break, fix
A lot of the learning happens when something does not work and he has to figure out why.

04 — Make it useful
He would rather finish something people could actually use than build another demo just for the sake of it.`,

  strengths: `The strongest themes in Nityansh's portfolio are:

+ Curiosity
+ Problem solving
+ Willingness to experiment
+ Learning by building
+ Persistence when figuring things out
+ Interest in larger, logic-heavy projects

He is especially comfortable with projects where there is something new to understand rather than a completely predictable implementation.`,

  goals: `The current direction is to become a stronger full-stack developer while going deeper into Python, AI, backend systems and DevOps.

The longer-term goal is to build larger software products that combine these areas instead of keeping them as isolated skills.`,

  availability: `Nityansh is currently open to internships, jobs, collaborations and software projects.

He is particularly interested in:
+ Software development
+ Full-stack engineering
+ AI-powered products
+ Backend work
+ Interesting technical problems
+ Teams where he can keep learning and contribute to real work

For professional conversations, email is the best place to start.`,

  contact: `Professional contact:

Email
Nityansh.bahadur1905@gmail.com

Phone
+91 79921 32077

GitHub
nityansh19

Instagram
@nityansh.19

Discord
kakarotsenpai

For internships, jobs or collaborations, email is the recommended first contact.`,

  location: `Nityansh is based in Lucknow, India.

He is open to opportunities that let him work on real software, learn from other developers and contribute to a team.`,

  recruiter: `If you're looking at Nityansh as a candidate, the clearest picture is his current work and learning direction.

He is a BCA Computer Science student building full-stack projects while going deeper into Python, AI, backend systems and DevOps.

The four projects currently highlighted are Nivora, CareerUpAI, Nitra Chat and the Personal AI Assistant.

He is open to internships, jobs and collaborations, especially around software development, full-stack engineering and AI-powered products.

The portfolio deliberately avoids claiming experience he does not have and instead shows the work he is doing now.`,

  contactlinks: `GitHub: github.com/nityansh19
Instagram: @nityansh.19
Discord: kakarotsenpai
Email: Nityansh.bahadur1905@gmail.com`,

  unknown: `I can answer questions using the information currently published across Nityansh's portfolio.

Try asking about:
+ Who Nityansh is
+ What he is building right now
+ Nivora
+ CareerUpAI
+ Nitra Chat
+ Personal AI Assistant
+ His current tech stack
+ Python / AI / DevOps
+ Education or experience
+ Learning direction
+ Strengths and goals
+ Internship/job availability
+ Contact details

If something is not part of the portfolio's current information, I won't guess.`,
} as const;

const TOPIC_RULES: Array<{ topic: Topic; terms: string[] }> = [
  { topic: "nivora", terms: ["nivora", "finance app", "finance project", "money app", "budget app", "savings app"] },
  { topic: "careerupai", terms: ["careerupai", "career up ai", "career platform", "career project"] },
  { topic: "nitra", terms: ["nitra", "nitra chat", "chat app", "messaging app", "messaging project"] },
  { topic: "personalai", terms: ["personal ai", "personal assistant", "ai assistant", "jarvis", "ai workspace"] },
  { topic: "building", terms: ["currently building", "building right now", "working on", "what is he building", "what is nityansh building", "current projects"] },
  { topic: "projects", terms: ["projects", "all projects", "project list", "what has he built"] },
  { topic: "stack", terms: ["tech stack", "technology stack", "technologies", "tech", "skills", "what does he use", "what does he know", "programming languages"] },
  { topic: "frontend", terms: ["frontend", "front end", "react", "vite", "tailwind", "html", "css", "javascript", "ui"] },
  { topic: "backend", terms: ["backend", "back end", "node", "express", "flask", "django", "api", "server"] },
  { topic: "database", terms: ["database", "mongodb", "mongo", "mysql", "firebase"] },
  { topic: "python", terms: ["python"] },
  { topic: "ai", terms: ["artificial intelligence", " ai ", "machine learning", "machine learning", "llm", "llms"] },
  { topic: "devops", terms: ["devops", "docker", "linux", "deployment", "infrastructure"] },
  { topic: "education", terms: ["education", "college", "university", "bca", "degree", "student", "cgpa", "study"] },
  { topic: "experience", terms: ["experience", "freelance", "client", "work experience", "coding club"] },
  { topic: "learning", terms: ["learning", "learn", "studying", "focus", "learning direction"] },
  { topic: "philosophy", terms: ["how does he work", "how he works", "approach", "philosophy", "work style"] },
  { topic: "strengths", terms: ["strength", "strengths", "good at", "best at", "qualities"] },
  { topic: "goals", terms: ["goals", "goal", "future", "direction", "long term", "long-term"] },
  { topic: "availability", terms: ["available", "availability", "internship", "internships", "job", "jobs", "hire", "hiring", "opportunity", "opportunities", "collaboration"] },
  { topic: "contact", terms: ["contact", "email", "phone", "reach him", "reach nityansh"] },
  { topic: "location", terms: ["where is he", "where does he live", "location", "based"] },
  { topic: "recruiter", terms: ["recruiter", "candidate", "fit for a role", "good fit", "why hire", "consider him"] },
  { topic: "intro", terms: ["who is nityansh", "who is he", "tell me about nityansh", "about him", "introduction", "background"] },
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9+@.# -]/g, " ").replace(/\s+/g, " ").trim();
}

function detectTopic(question: string): Topic {
  const q = ` ${normalize(question)} `;
  let best: { topic: Topic; score: number } = { topic: "unknown", score: 0 };

  for (const rule of TOPIC_RULES) {
    let score = 0;
    for (const term of rule.terms) {
      const normalizedTerm = normalize(term).trim();
      if (normalizedTerm && q.includes(` ${normalizedTerm} `)) score += normalizedTerm.includes(" ") ? 6 : 4;
    }
    if (score > best.score) best = { topic: rule.topic, score };
  }

  if (best.score === 0) return "unknown";
  return best.topic;
}

function formatText(text: string) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={index} className="h-2" />;
    if (/^\d{2} —/.test(trimmed)) return <div key={index} className="mt-4 font-medium text-white/85">{trimmed}</div>;
    if (trimmed.startsWith("+ ")) return <div key={index} className="flex gap-2 text-white/55"><span className="text-accent">+</span><span>{trimmed.slice(2)}</span></div>;
    if (["Frontend", "Backend", "Data", "AI / Engineering", "Nivora", "CareerUpAI", "Nitra Chat", "Personal AI Assistant", "Email", "Phone", "GitHub", "Instagram", "Discord"].includes(trimmed)) return <div key={index} className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/75">{trimmed}</div>;
    return <div key={index}>{line}</div>;
  });
}

function TypingText({ text }: { text: string }) {
  const [visible, setVisible] = useState("");
  useEffect(() => {
    let i = 0;
    setVisible("");
    const timer = window.setInterval(() => {
      i += 1;
      setVisible(text.slice(0, i));
      if (i >= text.length) window.clearInterval(timer);
    }, 4);
    return () => window.clearInterval(timer);
  }, [text]);
  return <div className="whitespace-pre-wrap text-[13px] leading-7 text-ink-dim">{formatText(visible)}<span className="ml-1 inline-block h-3 w-[2px] translate-y-[2px] animate-pulse bg-accent" /></div>;
}

export default function TerminalV2() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", text: "Hi. I’m the portfolio assistant.\n\nAsk me about Nityansh, his current projects, tech stack, education, experience, learning direction, or opportunities.\n\nThe information here is kept aligned with the latest portfolio content, and I won’t invent details that aren’t published." },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const latest = useMemo(() => [...messages].reverse().find((m) => m.role === "assistant"), [messages]);

  function ask(question: string) {
    const clean = question.trim();
    if (!clean || thinking) return;
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: clean }]);
    setInput("");
    setThinking(true);
    window.setTimeout(() => {
      const topic = detectTopic(clean);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", text: KNOWLEDGE[topic] }]);
      setThinking(false);
    }, Math.min(900, Math.max(350, clean.length * 8)));
  }

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  return (
    <section id="terminal" className="relative overflow-hidden border-t border-line bg-bg-elev py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0"><div className="absolute left-[10%] top-[12%] h-[420px] w-[420px] rounded-full bg-accent/[0.04] blur-[130px]" /><div className="absolute bottom-[4%] right-[8%] h-[360px] w-[360px] rounded-full bg-accent-2/[0.035] blur-[130px]" /><div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px]" /></div>
      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="max-w-4xl"><p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80">06 / Portfolio Intelligence</p><h2 className="mt-5 font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.86] tracking-[-0.07em]">Ask the<br /><span className="text-white/40">portfolio.</span></h2><p className="mt-7 max-w-2xl text-base leading-8 text-ink-dim sm:text-lg">A small interactive terminal with the current information from my portfolio — projects, stack, education, experience, learning direction and ways to get in touch.</p></div>
        <div className="mt-10 flex flex-wrap gap-2">{QUICK_PROMPTS.map((prompt) => <button key={prompt} type="button" onClick={() => ask(prompt)} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-white/35 transition-all hover:border-accent/25 hover:bg-accent/[0.05] hover:text-white/60">{prompt}</button>)}</div>
        <div className="mt-10 overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#08090d] shadow-[0_40px_120px_rgba(0,0,0,.35)]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.8)]" /><span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">nityansh / portfolio-assistant</span></div><span className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/60">Knowledge synced</span></div>
          <div ref={messagesRef} className="max-h-[540px] space-y-5 overflow-y-auto p-5 sm:p-7">
            <AnimatePresence initial={false}>{messages.map((message) => <motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={message.role === "user" ? "ml-auto max-w-[85%] rounded-2xl border border-accent/20 bg-accent/[0.07] p-4 text-sm text-white/70" : "max-w-[90%] rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5"}>{message.role === "user" ? message.text : <TypingText text={message.text} />}</motion.div>)}</AnimatePresence>
            {thinking && <div className="flex items-center gap-2 px-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/25"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Looking through the portfolio…</div>}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); ask(input); }} className="border-t border-white/[0.07] p-4 sm:p-5"><div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.018] px-4 py-3 focus-within:border-accent/30"><span className="font-mono text-xs text-accent">›</span><input aria-label="Ask the portfolio" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something about Nityansh…" className="min-w-0 flex-1 bg-transparent font-mono text-xs text-white/70 outline-none placeholder:text-white/20" disabled={thinking} /><button type="submit" disabled={thinking || !input.trim()} className="rounded-full border border-white/[0.08] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/40 transition-all hover:border-accent/30 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30">Ask</button></div></form>
          <div className="flex flex-col gap-2 border-t border-white/[0.06] px-5 py-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/15 sm:flex-row sm:items-center sm:justify-between"><span>Source: current public portfolio content</span><span>{latest ? "Assistant ready" : "Ready"}</span></div>
        </div>
      </div>
    </section>
  );
}
