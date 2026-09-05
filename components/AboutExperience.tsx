"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

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
  ["Frontend", "HTML · CSS · JavaScript · React · Vite"],
  ["Backend", "Node.js · Express"],
  ["Database", "MongoDB"],
  ["Exploring", "Python · AI · Docker · Linux · DevOps"],
];

export default function AboutExperience() {
  const reducedMotion = useReducedMotion();

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
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                TECHNOLOGY
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                The current toolkit.
              </h2>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
              Always evolving
            </span>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {technologies.map(([group, stack], index) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.07, duration: 0.6 }}
                className="border border-white/[0.08] bg-white/[0.018] p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent/70">0{index + 1}</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">{group}</span>
                </div>
                <p className="mt-7 font-mono text-sm leading-7 text-white/50">{stack}</p>
              </motion.div>
            ))}
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
