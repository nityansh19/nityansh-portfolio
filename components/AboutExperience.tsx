"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const principles = [
  ["01", "Start with the problem", "Understand what is worth solving before deciding what to build."],
  ["02", "Structure the system", "Break complexity into understandable pieces, flows, and decisions."],
  ["03", "Build and test", "Write real software, challenge assumptions, and improve through iteration."],
  ["04", "Ship something useful", "The goal is a product people can actually use, not just another repository."],
];

const journey = [
  {
    year: "2025",
    title: "The foundation",
    text: "Started taking development seriously, learning the fundamentals and moving from following tutorials toward understanding how things actually work.",
    tags: ["HTML", "CSS", "JavaScript", "Programming"],
  },
  {
    year: "2026",
    title: "The building phase",
    text: "Went deeper into full stack development while experimenting with React, Node.js, MongoDB, and Vite. At the same time, started exploring Python, AI, DevOps, Docker, and Linux.",
    tags: ["React", "Node.js", "MongoDB", "Python", "AI", "DevOps"],
  },
  {
    year: "NOW",
    title: "The current chapter",
    text: "Building ambitious projects instead of collecting tutorials. CareerUpAI and a personal AI workspace are pushing me into deeper engineering territory.",
    tags: ["CareerUpAI", "Personal AI", "Full Stack", "Experimenting"],
  },
];

const technologies = [
  {
    number: "01",
    group: "Frontend",
    mode: "CORE",
    description: "Interfaces, motion, responsive systems",
    stack: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    signal: "UI / MOTION / UX",
  },
  {
    number: "02",
    group: "Backend",
    mode: "CORE",
    description: "APIs, application logic, server-side systems",
    stack: ["Node.js", "Express"],
    signal: "API / LOGIC / SERVICES",
  },
  {
    number: "03",
    group: "Database",
    mode: "CORE",
    description: "Application data and persistence",
    stack: ["MongoDB"],
    signal: "DATA / MODELS / FLOW",
  },
  {
    number: "04",
    group: "Exploring",
    mode: "BUILDING",
    description: "The next layer of the engineering stack",
    stack: ["Python", "AI", "Docker", "Linux", "DevOps"],
    signal: "AI / SYSTEMS / INFRA",
  },
];

export default function AboutExperience() {
  const reducedMotion = useReducedMotion();
  const [activeTech, setActiveTech] = useState<string>("Frontend");
  const active = technologies.find((item) => item.group === activeTech) ?? technologies[0];

  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <div className="mx-auto max-w-[1180px]">
        <header className="max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
            About / 2026
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
            More than
            <br />
            just code.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            I&apos;m Nityansh, a developer focused on building ambitious digital
            products where engineering, systems thinking, and creativity meet.
          </p>
        </header>

        <section className="mt-20 grid gap-12 border-t border-line pt-12 md:mt-28 md:grid-cols-[0.9fr_1.1fr] md:gap-24 md:pt-16">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
              WHO I AM
            </p>
            <p className="mt-6 font-display text-2xl leading-tight tracking-[-0.04em] text-white/80 sm:text-3xl">
              Curious by default. Ambitious by choice.
            </p>
          </div>

          <div className="space-y-6 text-[15px] leading-8 text-ink-dim sm:text-base sm:leading-9">
            <p>
              I enjoy projects that force me to think deeply, understand systems,
              solve difficult problems, and learn something new along the way.
            </p>
            <p>
              I&apos;m not interested in building something just to add another
              repository to GitHub. I want to understand why it works, make it
              better, and eventually turn the idea into something people can use.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                HOW I BUILD
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                From idea to something real.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink-faint">
              A simple loop: think clearly, structure the system, build it,
              break it, learn from it, and keep improving.
            </p>
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
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                MY JOURNEY
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-ink-faint">
                Still early in the journey. Already moving with intention.
              </p>
            </div>

            <div className="relative border-l border-white/[0.08] pl-7 md:pl-10">
              <div className="absolute bottom-0 left-[-1px] top-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />
              <div className="space-y-12">
                {journey.map((item, index) => (
                  <motion.article
                    key={item.year}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.08, duration: 0.65 }}
                    className="relative"
                  >
                    <span className="absolute -left-[35px] top-1 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent shadow-[0_0_14px_rgba(91,110,245,.7)] md:-left-[48px]" />
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[8px] uppercase tracking-[0.18em]">
                      <span className="text-accent">{item.year}</span>
                      <span className="text-white/15">/</span>
                      <span className="text-white/25">Chapter {index + 1}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl tracking-[-0.04em] text-white/80 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-dim sm:text-base">
                      {item.text}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="border border-white/[0.08] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                WHAT I&apos;M LEARNING
              </p>
              <h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">
                Going deeper, not wider.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Python", "Building a stronger foundation for automation, data, and AI."],
                ["Artificial Intelligence", "Understanding how useful AI systems are designed and integrated."],
                ["DevOps", "Learning how software moves from local development to reliable environments."],
                ["Systems", "Thinking more about architecture, APIs, workflows, and the connections between them."],
              ].map(([title, text]) => (
                <div key={title} className="border border-white/[0.08] bg-white/[0.018] p-6">
                  <h3 className="font-display text-xl text-white/75">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-dim">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(91,110,245,.75)]" />
                Technology / Live map
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                The current toolkit.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-faint">
                Hover a system to inspect it. The stack is a living surface, not a static list.
              </p>
            </div>

            <div className="hidden items-end gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/20 sm:flex">
              <span>Cursor</span>
              <span className="text-accent/60">→</span>
              <span>Inspect</span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1.45fr_0.55fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {technologies.map((item, index) => {
                const isActive = activeTech === item.group;

                return (
                  <motion.button
                    type="button"
                    key={item.group}
                    onMouseEnter={() => setActiveTech(item.group)}
                    onFocus={() => setActiveTech(item.group)}
                    whileHover={reducedMotion ? undefined : { y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`group relative min-h-[220px] overflow-hidden rounded-[22px] border p-6 text-left transition-all duration-300 ${
                      isActive
                        ? "border-accent/45 bg-accent/[0.055] shadow-[0_24px_70px_rgba(40,50,120,.18)]"
                        : "border-white/[0.08] bg-white/[0.018] hover:border-white/[0.16] hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(91,110,245,.18),transparent_38%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-accent/20 transition-transform duration-500 group-hover:scale-125" />
                    <div className="pointer-events-none absolute -right-4 top-4 h-1.5 w-1.5 rounded-full bg-accent opacity-70 shadow-[0_0_14px_rgba(91,110,245,.9)]" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[0.16em] text-accent">{item.number}</span>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/30">
                        {item.mode}
                      </span>
                    </div>

                    <div className="relative z-10 mt-10">
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="font-display text-2xl font-medium tracking-[-0.04em] text-white/85 sm:text-3xl">
                          {item.group}
                        </h3>
                        <span className={`font-mono text-[8px] uppercase tracking-[0.16em] transition-colors ${isActive ? "text-accent/80" : "text-white/15"}`}>
                          scan
                        </span>
                      </div>
                      <p className="mt-3 max-w-xs text-sm leading-6 text-ink-dim">{item.description}</p>
                    </div>

                    <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                      {item.stack.map((tool, toolIndex) => (
                        <span
                          key={tool}
                          className={`rounded-full border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.11em] transition-all duration-300 ${
                            isActive
                              ? "border-accent/20 bg-accent/[0.06] text-white/55"
                              : "border-white/[0.07] bg-white/[0.015] text-white/30"
                          }`}
                        >
                          {tool}
                          <span className="ml-1 text-white/15">{String(toolIndex + 1).padStart(2, "0")}</span>
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.button>
                );
              })}
            </div>

            <motion.aside
              key={active.group}
              initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              className="relative min-h-[220px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0a0b10] p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,110,245,.16),transparent_45%)]" />
              <div className="relative flex h-full min-h-[188px] flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.17em] text-white/20">
                    <span>Active system</span>
                    <span className="text-accent">{active.number}</span>
                  </div>
                  <div className="mt-8 flex items-center justify-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-accent/20 bg-accent/[0.035]">
                      <div className="absolute inset-3 rounded-full border border-white/[0.07]" />
                      <div className="absolute inset-7 rounded-full border border-accent/30" />
                      <div className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_20px_rgba(91,110,245,.9)]" />
                      {!reducedMotion && (
                        <motion.div
                          className="absolute inset-[-9px] rounded-full border border-accent/20 border-t-accent/70"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-display text-xl tracking-[-0.035em] text-white/80">{active.group}</div>
                  <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-accent/65">{active.signal}</div>
                  <div className="mt-4 h-px w-full bg-white/[0.08]" />
                  <div className="mt-3 flex justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">
                    <span>State</span>
                    <span className="text-white/40">ACTIVE</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">PHILOSOPHY</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                Think deeply.
                <br />
                Build intentionally.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-ink-dim sm:text-lg sm:leading-9">
              There will always be more frameworks, more tools, and more things
              to learn. I&apos;d rather build fewer things with more intention,
              understand the systems underneath them, and keep getting better at
              turning ideas into useful software.
            </p>
          </div>
        </section>

        <section className="mt-24 flex flex-col justify-between gap-8 border-t border-line pt-12 sm:flex-row sm:items-center md:mt-32">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">Ready to go deeper?</p>
            <p className="mt-3 font-display text-2xl text-white/70">Explore the work behind the story.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="border border-white/[0.12] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:border-accent/30 hover:text-white">
              Projects ↗
            </Link>
            <Link href="/terminal" className="border border-accent/25 bg-accent/[0.08] px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/60 transition-colors hover:bg-accent/[0.14]">
              Terminal ↗
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
