"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const principles = [
  ["01", "Start with the problem", "Understand what is worth solving before deciding what to build."],
  ["02", "Structure the system", "Break complexity into understandable pieces, flows, APIs, and decisions."],
  ["03", "Build and test", "Write real software, challenge assumptions, debug, and improve through iteration."],
  ["04", "Ship something useful", "The goal is a product people can actually use, not just another repository."],
];

const journey = [
  {
    year: "2025",
    title: "The foundation",
    text: "Started taking development seriously, building fundamentals and moving from following tutorials toward understanding how software actually works.",
    tags: ["HTML", "CSS", "JavaScript", "Programming"],
  },
  {
    year: "2026",
    title: "The building phase",
    text: "Went deeper into full-stack development with React, Node.js, MongoDB, and Vite while expanding into Python, AI, Docker, Linux, and DevOps.",
    tags: ["React", "Node.js", "MongoDB", "Python", "AI", "DevOps"],
  },
  {
    year: "NOW",
    title: "Building with intent",
    text: "Working on larger ideas such as CareerUpAI and a personal AI assistant while continuing to strengthen software engineering depth.",
    tags: ["CareerUpAI", "Personal AI", "Python", "Full Stack"],
  },
];

const technologies = [
  {
    number: "01",
    group: "Frontend",
    mode: "CORE",
    description: "Interfaces, motion, responsive systems, and user experience",
    stack: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind", "Bootstrap"],
    signal: "UI / MOTION / UX",
  },
  {
    number: "02",
    group: "Backend",
    mode: "CORE",
    description: "Server-side logic, APIs, integrations, and application services",
    stack: ["Node.js", "Express", "Flask", "Django", "REST APIs"],
    signal: "API / LOGIC / SERVICES",
  },
  {
    number: "03",
    group: "Data",
    mode: "CORE",
    description: "Persistence, models, and application data flows",
    stack: ["MongoDB", "MySQL", "Firebase"],
    signal: "DATA / MODELS / FLOW",
  },
  {
    number: "04",
    group: "Engineering",
    mode: "BUILDING",
    description: "The layer currently expanding into automation, AI, and infrastructure",
    stack: ["Python", "AI", "Docker", "Linux", "Git", "GitHub", "Vercel", "Netlify"],
    signal: "PYTHON / AI / INFRA",
  },
];

const strengths = [
  "Logical reasoning & problem solving",
  "Fast learning & technical curiosity",
  "Clear English communication",
  "Client requirement understanding",
  "Independent project execution",
  "Collaborative teamwork",
  "Adaptability across tools",
  "Creative problem approach",
];

const projects = [
  {
    title: "CareerUpAI",
    type: "Major college project · AI-powered career platform",
    text: "A full-stack platform designed to help users create and analyze CVs/resumes, improve their profiles, receive guidance, and get personalized job recommendations.",
    href: "/projects/careerupai",
    tags: ["Full Stack", "AI", "Career Platform"],
  },
  {
    title: "Real-Time Chat Application",
    type: "Full-stack project · Telegram-inspired",
    text: "A responsive web messaging application focused on interactive communication, a clean user experience, backend functionality, and deployment as a complete application.",
    href: "/projects",
    tags: ["React", "Backend", "Real-time"],
  },
  {
    title: "Personal AI Assistant",
    type: "Independent project · Python · In development",
    text: "An experimentation space for Python, automation, intelligent workflows, productivity tooling, and practical AI application development.",
    href: "/projects/personal-ai",
    tags: ["Python", "AI", "Automation"],
  },
];

export default function AboutExperience() {
  const reducedMotion = useReducedMotion();
  const [activeTech, setActiveTech] = useState("Frontend");
  const active = technologies.find((item) => item.group === activeTech) ?? technologies[0];

  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <div className="mx-auto max-w-[1180px]">
        <header className="max-w-5xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">About / Profile</p>
          <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            More than
            <br />
            just code.
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            I&apos;m Nityansh — a Full-Stack Web Developer, Python Developer, and AI Application
            Enthusiast focused on turning ideas into practical digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Full-Stack Web Developer", "Python Developer", "AI Application Enthusiast", "Lucknow, India"].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/35"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </header>

        <section className="mt-20 grid gap-12 border-t border-line pt-12 md:mt-28 md:grid-cols-[0.85fr_1.15fr] md:gap-24 md:pt-16">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">WHO I AM</p>
            <p className="mt-6 font-display text-2xl leading-tight tracking-[-0.04em] text-white/85 sm:text-3xl">
              Curious by default. Ambitious by choice.
            </p>
          </div>
          <div className="space-y-6 text-[15px] leading-8 text-ink-dim sm:text-base sm:leading-9">
            <p>
              I enjoy projects that force me to think deeply, understand systems, solve difficult
              problems, and learn something new along the way.
            </p>
            <p>
              My focus is full-stack development, with Python becoming a primary language as I move
              deeper into AI applications, automation, and software engineering.
            </p>
            <p>
              I also have practical experience delivering freelance web development, graphic design,
              and video editing work, which taught me to understand client requirements, communicate
              clearly, work independently, and deliver on deadlines.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">HOW I BUILD</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">From idea to something real.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink-faint">Think clearly, structure the system, build it, test it, learn from it, and keep improving.</p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                className="bg-bg p-7 transition-colors duration-300 hover:bg-white/[0.025]"
              >
                <span className="font-mono text-[9px] text-accent/60">{number}</span>
                <h3 className="mt-7 font-display text-xl tracking-[-0.03em] text-white/80">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-dim">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">EXPERIENCE</p>
              <h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">Real work behind the projects.</h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-ink-faint">Technical work, creative work, client communication, collaboration, and shipping.</p>
            </div>

            <div className="space-y-5">
              <motion.article whileHover={reducedMotion ? undefined : { y: -4 }} className="rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em]">
                  <span className="text-accent">01 / Freelance Digital Services</span>
                  <span className="text-white/20">Web · Design · Video</span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-[-0.035em] text-white/85">Freelance Web Developer / Graphic Designer / Video Editor</h3>
                <p className="mt-3 text-sm leading-7 text-ink-dim">Delivered web development, graphic design, and video editing projects based on client requirements while handling communication, independent execution, deadlines, and final delivery.</p>
              </motion.article>

              <motion.article whileHover={reducedMotion ? undefined : { y: -4 }} className="rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em]">
                  <span className="text-accent">02 / College Coding Club</span>
                  <span className="text-white/20">Technical Member</span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-[-0.035em] text-white/85">Learning with other builders</h3>
                <p className="mt-3 text-sm leading-7 text-ink-dim">Participated in coding activities, technical discussions, collaborative development efforts, programming practice, idea sharing, and problem-solving sessions with peers.</p>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">FEATURED PROJECTS</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">The work I&apos;m learning through.</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.07, duration: 0.6 }}
                whileHover={reducedMotion ? undefined : { y: -6 }}
                className="group flex min-h-[315px] flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-7"
              >
                <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/70">0{index + 1}</div>
                <h3 className="mt-7 font-display text-2xl tracking-[-0.04em] text-white/85">{project.title}</h3>
                <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">{project.type}</div>
                <p className="mt-5 text-sm leading-7 text-ink-dim">{project.text}</p>
                <div className="mt-auto pt-7">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-white/30">{tag}</span>)}
                  </div>
                  <Link href={project.href} className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-accent">Explore ↗</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">EDUCATION</p>
              <h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">The academic track.</h2>
            </div>
            <div className="space-y-4">
              <div className="rounded-[22px] border border-accent/20 bg-accent/[0.035] p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent">Current</div>
                    <h3 className="mt-3 font-display text-2xl text-white/85">Integral University, Lucknow</h3>
                    <p className="mt-2 text-sm text-ink-dim">Bachelor of Computer Applications (BCA) — Computer Science</p>
                  </div>
                  <div className="text-right font-mono text-[8px] uppercase tracking-[0.14em] text-white/25">3rd Year<br />Expected May 2027</div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35">CGPA 7.3 / 10</span>
                  <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35">Computer Science</span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6"><div className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/70">Class XII</div><div className="mt-3 font-display text-xl text-white/75">NIOS</div><div className="mt-2 font-mono text-[9px] text-white/25">70%</div></div>
                <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6"><div className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/70">Class X</div><div className="mt-3 font-display text-xl text-white/75">Bal Vidya Mandir</div><div className="mt-2 font-mono text-[9px] text-white/25">80%</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70"><span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(91,110,245,.75)]" />Technology / Live map</div>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">The current toolkit.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-faint">Hover a system to inspect it. The stack is a living surface, not a static list.</p>
            </div>
            <div className="hidden items-end gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/20 sm:flex"><span>Cursor</span><span className="text-accent/60">→</span><span>Inspect</span></div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1.45fr_0.55fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {technologies.map((item) => {
                const isActive = activeTech === item.group;
                return (
                  <motion.button
                    type="button"
                    key={item.group}
                    onMouseEnter={() => setActiveTech(item.group)}
                    onFocus={() => setActiveTech(item.group)}
                    whileHover={reducedMotion ? undefined : { y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`group relative min-h-[235px] overflow-hidden rounded-[22px] border p-6 text-left transition-all duration-300 ${isActive ? "border-accent/45 bg-accent/[0.055] shadow-[0_24px_70px_rgba(40,50,120,.18)]" : "border-white/[0.08] bg-white/[0.018] hover:border-white/[0.16] hover:bg-white/[0.03]"}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(91,110,245,.18),transparent_38%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-accent/20 transition-transform duration-500 group-hover:scale-125" />
                    <div className="relative z-10 flex items-center justify-between"><span className="font-mono text-[9px] tracking-[0.16em] text-accent">{item.number}</span><span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/30">{item.mode}</span></div>
                    <div className="relative z-10 mt-9"><div className="flex items-end justify-between gap-4"><h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-white/85 sm:text-3xl">{item.group}</h3><span className={`font-mono text-[8px] uppercase tracking-[0.16em] ${isActive ? "text-accent/80" : "text-white/15"}`}>scan</span></div><p className="mt-3 max-w-xs text-sm leading-6 text-ink-dim">{item.description}</p></div>
                    <div className="relative z-10 mt-7 flex flex-wrap gap-2">{item.stack.map((tool, toolIndex) => <span key={tool} className={`rounded-full border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.11em] ${isActive ? "border-accent/20 bg-accent/[0.06] text-white/55" : "border-white/[0.07] bg-white/[0.015] text-white/30"}`}>{tool}<span className="ml-1 text-white/15">{String(toolIndex + 1).padStart(2, "0")}</span></span>)}</div>
                    <div className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  </motion.button>
                );
              })}
            </div>

            <motion.aside key={active.group} initial={reducedMotion ? undefined : { opacity: 0, y: 8 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} className="relative min-h-[235px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0a0b10] p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,110,245,.16),transparent_45%)]" />
              <div className="relative flex h-full min-h-[203px] flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.17em] text-white/20"><span>Active system</span><span className="text-accent">{active.number}</span></div>
                  <div className="mt-8 flex items-center justify-center"><div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-accent/20 bg-accent/[0.035]"><div className="absolute inset-3 rounded-full border border-white/[0.07]" /><div className="absolute inset-7 rounded-full border border-accent/30" /><div className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_20px_rgba(91,110,245,.9)]" />{!reducedMotion && <motion.div className="absolute inset-[-9px] rounded-full border border-accent/20 border-t-accent/70" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 7, ease: "linear" }} />}</div></div>
                </div>
                <div><div className="font-display text-xl tracking-[-0.035em] text-white/80">{active.group}</div><div className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-accent/65">{active.signal}</div><div className="mt-4 h-px w-full bg-white/[0.08]" /><div className="mt-3 flex justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-white/20"><span>State</span><span className="text-white/40">ACTIVE</span></div></div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="mt-24 grid gap-12 border-t border-line pt-16 md:mt-32 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:pt-24">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">STRENGTHS</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">How I show up.</h2></div>
          <div className="flex flex-wrap gap-2.5">{strengths.map((strength) => <span key={strength} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-4 py-2.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35 transition-all hover:border-accent/25 hover:bg-accent/[0.04] hover:text-white/55">{strength}</span>)}</div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">LANGUAGES</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">Communication matters.</h2></div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["English / Fluent · Professional", "Spanish / Knowledge", "Japanese / Knowledge"].map((item, index) => <div key={item} className="rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6"><div className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/70">0{index + 1}</div><div className="mt-5 font-display text-xl text-white/75">{item.split(" / ")[0]}</div><div className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">{item.split(" / ")[1]}</div></div>)}
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="rounded-[28px] border border-accent/20 bg-accent/[0.035] p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-accent"><span className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_16px_rgba(91,110,245,.8)]" />Open for jobs & opportunities</div>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Looking for the next place to build, learn, and contribute.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-dim">Available for web development, full-stack, Python, software development, and AI internships.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/cv" className="rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-all hover:-translate-y-1 hover:border-accent/30 hover:text-white">View CV ↗</Link>
                <Link href="/contact" className="rounded-full border border-accent/25 bg-accent/[0.08] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65 transition-all hover:-translate-y-1 hover:bg-accent/[0.14] hover:text-white">Contact ↗</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-10 border-t border-line pt-16 md:mt-32 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">PHILOSOPHY</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Think deeply.<br />Build intentionally.</h2></div>
          <p className="max-w-2xl text-base leading-8 text-ink-dim sm:text-lg sm:leading-9">There will always be more frameworks, more tools, and more things to learn. I&apos;d rather understand the systems underneath what I build, keep improving, and turn ideas into software people can use.</p>
        </section>

        <section className="mt-24 flex flex-col justify-between gap-8 border-t border-line pt-12 sm:flex-row sm:items-center md:mt-32">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">Ready to go deeper?</p><p className="mt-3 font-display text-2xl text-white/70">Explore the work behind the story.</p></div>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="border border-white/[0.12] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:border-accent/30 hover:text-white">Projects ↗</Link>
            <Link href="/terminal" className="border border-accent/25 bg-accent/[0.08] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:bg-accent/[0.14]">Terminal ↗</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
