"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

const systems = [
  {
    id: "01",
    title: "FULL STACK",
    subtitle: "Product engineering",
    text: "Interfaces, APIs, data, deployment — connected into one product instead of isolated pieces.",
    tools: ["React", "Next.js", "Node", "MongoDB"],
    href: "/projects",
  },
  {
    id: "02",
    title: "PYTHON + AI",
    subtitle: "Intelligent applications",
    text: "Exploring practical AI workflows, automation, assistants, and career-focused systems.",
    tools: ["Python", "AI", "Flask", "Django"],
    href: "/projects/careerupai",
  },
  {
    id: "03",
    title: "SYSTEMS",
    subtitle: "The layer underneath",
    text: "Learning how software moves, ships, scales, and stays understandable through real constraints.",
    tools: ["Docker", "Linux", "DevOps", "APIs"],
    href: "/about",
  },
];

const orbitItems = ["CODE", "AI", "UX", "API", "DATA", "SHIP"];

function SparkIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-4 w-4" aria-hidden="true">
      <path d="M4 10h11" />
      <path d="m11 5 5 5-5 5" />
    </svg>
  );
}

export default function HomeLab() {
  const reducedMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = systems[activeIndex];
  const activeTools = useMemo(() => active.tools, [active.tools]);

  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[72%] top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(circle_at_65%_50%,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/75">
              <span className="h-px w-8 bg-accent" />
              03 / System view
            </div>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.06em] sm:text-5xl md:text-6xl">
              See how I think,
              <br />
              <span className="text-white/45">not just what I use.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-ink-faint">
            Move across the systems. The interface changes with your focus.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-3 sm:grid-cols-3">
            {systems.map((system, index) => {
              const selected = index === activeIndex;
              return (
                <motion.button
                  key={system.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  whileHover={reducedMotion ? undefined : { y: -7 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.985 }}
                  className={`group relative min-h-[235px] overflow-hidden rounded-[22px] border p-6 text-left transition-all duration-400 ${selected ? "border-accent/45 bg-accent/[0.06] shadow-[0_30px_90px_rgba(40,50,120,.2)]" : "border-white/[0.08] bg-white/[0.018] hover:border-white/[0.16] hover:bg-white/[0.03]"}`}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-white/[0.05] transition-transform duration-700 group-hover:scale-125" />
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-accent">{system.id}</span>
                    <span className={`h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.85)] transition-opacity ${selected ? "opacity-100" : "opacity-25"}`} />
                  </div>
                  <div className="relative mt-10">
                    <div className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/30">{system.subtitle}</div>
                    <h3 className="mt-2 font-display text-2xl tracking-[-0.045em] text-white/85">{system.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-dim">{system.text}</p>
                  </div>
                  <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                    <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">Focus / {selected ? "active" : "inspect"}</span>
                    <ArrowIcon />
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            layout
            className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090d]/90 p-6 shadow-[0_35px_110px_rgba(0,0,0,.38)] backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(91,110,245,.16),transparent_45%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                <span>Interactive map</span>
                <span className="text-accent">{active.id} / 03</span>
              </div>

              <div className="relative mx-auto my-8 flex h-48 w-48 items-center justify-center">
                <motion.div
                  animate={reducedMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-white/[0.09]"
                >
                  {orbitItems.map((item, index) => {
                    const angle = (index / orbitItems.length) * 360;
                    return (
                      <span
                        key={item}
                        className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-accent/70"
                        style={{ transform: `rotate(${angle}deg) translateY(-94px)` }}
                      />
                    );
                  })}
                </motion.div>
                <motion.div
                  animate={reducedMotion ? undefined : { rotate: -360 }}
                  transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-7 rounded-full border border-accent/20"
                />
                <div className="absolute inset-16 flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] shadow-[0_0_60px_rgba(91,110,245,.12)]">
                  <SparkIcon className="h-6 w-6 text-accent" />
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.17em] text-accent/70">{active.subtitle}</div>
                    <h3 className="mt-2 font-display text-3xl tracking-[-0.05em] text-white/90">{active.title}</h3>
                  </div>
                  <Link href={active.href} className="group/link flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/45 transition-all hover:border-accent/30 hover:text-accent">
                    Explore
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1"><ArrowIcon /></span>
                  </Link>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {activeTools.map((tool) => (
                    <span key={tool} className="rounded-full border border-accent/15 bg-accent/[0.045] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.11em] text-white/45">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 overflow-hidden rounded-full border border-white/[0.07] bg-white/[0.018]">
          <motion.div
            className="flex min-w-max items-center gap-8 px-6 py-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20"
            animate={reducedMotion ? undefined : { x: [0, -420] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...orbitItems, ...orbitItems, ...orbitItems].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-accent/60" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
