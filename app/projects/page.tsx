"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "CareerUpAI",
    category: "AI · FULL STACK",
    status: "CURRENTLY BUILDING",
    description:
      "An AI-powered career platform turning resume and profile information into clearer, more useful career decisions.",
    href: "/projects/careerupai",
    accent: "blue",
  },
  {
    number: "02",
    title: "Personal AI",
    category: "AI · AUTOMATION",
    status: "EXPERIMENTAL",
    description:
      "A personal workspace system exploring context, tools, automation, and useful AI beyond a simple chat interface.",
    href: "/projects/personal-ai",
    accent: "violet",
  },
];

export const metadata: Metadata = {
  title: "Projects — Nityansh Rupesh Bahadur",
  description: "Selected projects and systems built by Nityansh Rupesh Bahadur.",
};

function ProjectVisual({ accent, number }: { accent: string; number: string }) {
  const reducedMotion = useReducedMotion();
  const violet = accent === "violet";

  return (
    <div className="relative h-[280px] overflow-hidden border-b border-white/[0.08] bg-[#07080c] md:h-[360px] md:border-b-0 md:border-r">
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div
        className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] ${
          violet ? "bg-violet-500/15" : "bg-blue-500/15"
        }`}
      />

      <motion.div
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: violet ? 18 : 24, repeat: Infinity, ease: "linear" }}
        className={`absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
          violet ? "border-violet-300/[0.10]" : "border-blue-300/[0.10]"
        } md:h-60 md:w-60`}
      >
        <span
          className={`absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full ${
            violet ? "bg-violet-300" : "bg-blue-300"
          }`}
        />
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: violet ? 14 : 20, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] md:h-40 md:w-40"
      />

      <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
        <span>Project / {number}</span>
        <span>{violet ? "AI SYSTEM" : "AI PLATFORM"}</span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
        <span>{violet ? "Context / Tools / Automation" : "Career / Profile / Intelligence"}</span>
        <span className={violet ? "text-violet-300/50" : "text-blue-300/50"}>↗</span>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <div className="mx-auto max-w-[1180px]">
        <header className="max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
            Selected Work / 2026
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            Projects
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-ink-dim sm:text-lg">
            Two systems I&apos;m building with the same goal: solve something
            meaningful, then go deep enough to understand how it works.
          </p>
        </header>

        <section className="mt-20 md:mt-28">
          <div className="mb-7 flex items-center justify-between border-b border-line pb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              The current portfolio
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-accent/60">
              02 systems
            </span>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={project.href}
                  className="group block overflow-hidden rounded-[26px] border border-white/[0.10] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.03]"
                >
                  <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                    <ProjectVisual accent={project.accent} number={project.number} />

                    <div className="relative flex min-h-[280px] flex-col justify-between p-7 sm:p-10 md:min-h-[360px]">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                          <span>{project.number}</span>
                          <span className="text-accent/50">·</span>
                          <span>{project.category}</span>
                          <span className="text-accent/50">·</span>
                          <span>{project.status}</span>
                        </div>

                        <h2 className="mt-6 font-display text-5xl font-semibold tracking-[-0.065em] sm:text-6xl md:text-7xl">
                          {project.title === "CareerUpAI" ? (
                            <>CareerUp<span className="text-accent">AI</span></>
                          ) : (
                            <>Personal <span className="text-accent">AI</span></>
                          )}
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-ink-dim sm:text-base">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-5">
                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                          Read the case study
                        </span>
                        <span className="font-mono text-sm text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="mt-20 flex items-center justify-between border-t border-line pt-6">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
            More work will appear when it has something worth showing.
          </span>
          <Link href="/contact" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">
            Collaborate ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
