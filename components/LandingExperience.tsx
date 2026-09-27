"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";

const expertise = [
  { label: "FULL STACK", tools: ["React", "Next.js", "Node", "MongoDB", "APIs"] },
  { label: "AI SYSTEMS", tools: ["Python", "LLM workflows", "Automation", "CareerUpAI", "Personal AI"] },
  { label: "BACKEND", tools: ["Authentication", "REST APIs", "Databases", "Architecture", "Deployment"] },
  { label: "PRODUCT UX", tools: ["Interaction", "Motion", "Responsive UI", "Product thinking"] },
];

const metrics = [
  ["Resume Score", "87"],
  ["Skill Match", "92%"],
  ["Career Direction", "AI Engineer"],
  ["Profile Strength", "Improving"],
];

const systemBranches = {
  AI: ["CareerUpAI", "Personal AI", "Python", "Automation"],
  BACKEND: ["Node", "MongoDB", "APIs", "Authentication"],
  PRODUCT: ["UX", "Motion", "Architecture", "Deployment"],
  DESIGN: ["Interaction", "Hierarchy", "Responsive UI", "Systems thinking"],
};

const selectedWork = [
  {
    number: "03",
    title: "Nivora",
    subtitle: "Personal Finance OS",
    description: "A complete finance product for expenses, income, savings, budgets, goals, analytics, authentication and cloud persistence.",
    status: "v1.0 · Complete",
    stack: ["React", "TypeScript", "Supabase", "Capacitor"],
    href: "/projects/nivora",
    tone: "emerald",
  },
  {
    number: "04",
    title: "Nitra Chat",
    subtitle: "Real-time communication",
    description: "A messaging product focused on identity, conversations, persistence, backend logic and the real-time layer that comes next.",
    status: "Active development",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose"],
    href: "/projects/nitra-chat",
    tone: "indigo",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/75">{children}</p>;
}

export default function LandingExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [activeBranch, setActiveBranch] = useState<keyof typeof systemBranches>("AI");

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 20, mass: 0.45 });
  const sy = useSpring(py, { stiffness: 90, damping: 20, mass: 0.45 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 84]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 0.97]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 0.9, 0.16]);

  const textX = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-5, 5]);
  const textY = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [-4, 4]);
  const portraitX = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [8, -8]);
  const portraitY = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [7, -7]);
  const rotateY = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-4, 4]);
  const rotateX = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [4, -4]);
  const gridX = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-12, 12]);
  const gridY = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [-10, 10]);
  const glowX = useTransform(sx, [-1, 1], ["30%", "70%"]);
  const glowY = useTransform(sy, [-1, 1], ["28%", "72%"]);

  const activeTools = useMemo(() => expertise[activeExpertise].tools, [activeExpertise]);
  const branchItems = systemBranches[activeBranch];

  function handleHeroPointer(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  return (
    <main className="relative overflow-hidden bg-[#07080a] text-white">
      <section
        ref={heroRef}
        onPointerMove={handleHeroPointer}
        onPointerLeave={() => {
          px.set(0);
          py.set(0);
        }}
        className="relative min-h-[100svh] overflow-hidden border-b border-white/[0.07]"
      >
        <motion.div
          style={{ x: gridX, y: gridY }}
          className="pointer-events-none absolute -inset-8 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        />
        <motion.div
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                "radial-gradient(650px circle at " +
                x +
                " " +
                y +
                ", rgba(99,112,255,.16), transparent 64%)"
            ),
          }}
          className="pointer-events-none absolute inset-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(116,92,255,.09),transparent_28%),linear-gradient(to_bottom,transparent_72%,rgba(91,110,245,.045))]" />

        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1380px] flex-col px-6 pb-7 pt-7 sm:px-8 lg:px-14"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between border-b border-white/[0.07] pb-5"
          >
            <Link href="/" className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/38 transition-colors hover:text-white">
              NRB / 2026
            </Link>
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.9)]" />
              Open to opportunities
            </div>
          </motion.div>

          <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[minmax(0,1.38fr)_360px] lg:gap-16">
            <motion.div style={{ x: textX, y: textY }}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/90"
              >
                <span className="h-px w-8 bg-accent" />
                Full-stack developer building intelligent products
              </motion.p>

              <h1 className="font-display font-semibold tracking-[-0.078em]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "108%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.14, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[clamp(4.2rem,11.5vw,10rem)] leading-[0.79] text-[#f2f3f7]"
                  >
                    NITYANSH
                  </motion.span>
                </span>

                <span className="mt-4 flex items-end gap-4 overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.22, duration: 0.88, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-[clamp(1.2rem,2.5vw,2.3rem)] leading-none text-white/26"
                  >
                    RUPESH BAHADUR
                  </motion.span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="mb-1 hidden h-px w-24 origin-left bg-gradient-to-r from-accent to-transparent sm:block"
                  />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.6 }}
                className="mt-7 max-w-[650px] text-[15px] leading-7 text-white/48 md:text-base"
              >
                I build polished digital products, backend systems and intelligent experiences — combining engineering depth with product thinking and interaction design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56, duration: 0.6 }}
                className="mt-7 grid max-w-[760px] gap-3 lg:grid-cols-[1fr_1.05fr]"
              >
                <div className="grid grid-cols-2 gap-2">
                  {expertise.map((item, index) => (
                    <button
                      key={item.label}
                      type="button"
                      onMouseEnter={() => setActiveExpertise(index)}
                      onFocus={() => setActiveExpertise(index)}
                      onClick={() => setActiveExpertise(index)}
                      className={
                        "group flex items-center justify-between border px-3 py-3 text-left font-mono text-[8px] uppercase tracking-[0.14em] transition-all duration-300 " +
                        (activeExpertise === index
                          ? "border-accent/40 bg-accent/[0.07] text-white"
                          : "border-white/[0.07] bg-white/[0.015] text-white/34 hover:border-white/15 hover:text-white/70")
                      }
                    >
                      <span>{item.label}</span>
                      <span className={activeExpertise === index ? "text-accent" : "text-white/15"}>
                        0{index + 1}
                      </span>
                    </button>
                  ))}
                </div>

                <motion.div layout className="min-h-[116px] border border-white/[0.08] bg-black/20 p-4">
                  <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-white/24">
                    <span>Focus layer</span>
                    <span className="text-accent">{expertise[activeExpertise].label}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeTools.map((tool) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[8px] tracking-[0.08em] text-white/58"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.66, duration: 0.55 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  data-cursor-label="VIEW"
                  href="/projects"
                  className="group inline-flex items-center gap-8 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore work
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                </Link>
                <Link
                  data-cursor-label="HELLO"
                  href="/contact"
                  className="group inline-flex items-center gap-8 rounded-full border border-white/[0.13] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/82 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Contact me
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: portraitX, y: portraitY, rotateX, rotateY, transformPerspective: 1200 }}
              className="mx-auto w-full max-w-[360px] lg:mx-0 lg:justify-self-end"
            >
              <div className="relative">
                <div className="absolute -left-8 top-10 hidden h-px w-20 bg-gradient-to-r from-transparent to-accent/60 md:block" />
                <div className="absolute -right-8 bottom-16 hidden h-px w-20 bg-gradient-to-r from-accent/60 to-transparent md:block" />

                <div className="relative overflow-hidden border border-white/[0.11] bg-[#0b0c10]/72 p-2 shadow-[0_35px_100px_rgba(0,0,0,.48)] backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111216]">
                    <motion.img
                      src="/profile.jpg"
                      alt="Portrait of Nityansh Rupesh Bahadur"
                      className="absolute inset-0 h-full w-full object-cover grayscale-[8%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-white/[0.02]" />
                    <div className="absolute left-4 top-4 border border-white/10 bg-black/28 px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.15em] text-white/52 backdrop-blur-md">
                      Lucknow / India
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/34">Currently building</p>
                      <div className="mt-2 flex items-end justify-between gap-4">
                        <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white/92">CareerUpAI</p>
                        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(91,110,245,.9)]" />
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-4 hidden border border-white/[0.10] bg-[#0a0b0f]/86 px-4 py-3 backdrop-blur-xl md:block"
                >
                  <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/25">Focus</p>
                  <p className="mt-1 text-sm text-white/72">AI × Product × Backend</p>
                </motion.div>

                <div className="absolute -right-3 top-16 hidden border-l border-accent/40 pl-3 font-mono text-[7px] uppercase tracking-[0.14em] text-white/28 md:block">
                  building<br />since 2025
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/22">
            <span>Full stack → AI systems</span>
            <motion.span
              animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:block"
            >
              Scroll to explore ↓
            </motion.span>
            <span>01 / 06</span>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(91,110,245,.08),transparent_34%)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>02 / Currently building</SectionLabel>
              <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                Two systems.<br /><span className="text-white/34">Two different worlds.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ink-dim">
              The goal is not to collect projects. It is to build products that force me to think deeper about engineering, AI and product decisions.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            <motion.article
              data-cursor-label="EXPLORE"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden border border-white/[0.10] bg-[#090a0e]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(91,110,245,.12),transparent_32%)]" />
              <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-accent/80">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      Flagship / AI career platform
                    </div>
                    <h3 className="mt-6 font-display text-[clamp(3.7rem,8vw,7.2rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
                      CareerUp<span className="text-accent">AI</span>
                    </h3>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-ink-dim sm:text-base">
                      An AI-powered career platform designed to help users understand their profile, improve their resume, explore career paths and make smarter career decisions.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/projects/careerupai"
                      className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-1"
                    >
                      Explore case study ↗
                    </Link>
                    <Link
                      href="/projects"
                      className="rounded-full border border-white/[0.12] px-5 py-3 text-sm text-white/70 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      View project
                    </Link>
                  </div>
                </div>

                <div className="relative overflow-hidden border border-white/[0.09] bg-[#0d0f16]/92 p-5 shadow-[0_30px_90px_rgba(0,0,0,.38)] sm:p-6">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                    <div>
                      <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">CareerUpAI / Profile intelligence</p>
                      <p className="mt-2 text-sm text-white/62">Candidate intelligence dashboard</p>
                    </div>
                    <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-accent">Live model</span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {metrics.map(([label, value], index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 * index }}
                        className="border border-white/[0.07] bg-white/[0.018] p-4"
                      >
                        <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/23">{label}</p>
                        <p
                          className={
                            "mt-3 font-display tracking-[-0.04em] " +
                            (index < 2 ? "text-3xl text-white/88" : "text-xl text-white/78")
                          }
                        >
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-3 border border-white/[0.07] bg-white/[0.018] p-4">
                    <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.14em] text-white/22">
                      <span>Profile readiness</span>
                      <span className="text-accent">87 / 100</span>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "87%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              data-cursor-label="OPEN"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden border border-white/[0.09] bg-[#08090d]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_23%_50%,rgba(132,88,255,.10),transparent_35%)]" />
              <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-12">
                <div className="relative min-h-[300px] overflow-hidden border border-violet-400/[0.12] bg-[#0a0810] p-5">
                  <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:42px_42px]" />
                  <div className="relative flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-white/22">
                    <span>JARVIS / Runtime</span>
                    <span className="text-violet-300/70">system online</span>
                  </div>

                  <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {["CONTEXT", "AUTOMATION", "TOOLS", "WORKFLOWS", "MEMORY"].map((node, index) => (
                      <motion.div
                        key={node}
                        animate={reducedMotion ? undefined : { y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                        transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        className={"border border-white/[0.07] bg-white/[0.02] p-4 " + (index === 4 ? "sm:col-start-2" : "")}
                      >
                        <span className="font-mono text-[7px] text-violet-300/55">0{index + 1}</span>
                        <p className="mt-4 text-sm tracking-[0.08em] text-white/68">{node}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative mt-4 border-l border-violet-400/30 pl-4 font-mono text-[8px] leading-6 text-white/32">
                    context → tools → action → feedback → memory
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-violet-300/70">Personal AI / JARVIS</p>
                  <h3 className="mt-5 font-display text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                    A workspace that can actually assist.
                  </h3>
                  <p className="mt-6 max-w-xl text-sm leading-7 text-ink-dim sm:text-base">
                    A personal AI workspace exploring context, automation, developer tools and useful workflows in one system.
                  </p>
                  <Link
                    href="/projects/personal-ai"
                    className="mt-8 inline-flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/46 transition-colors hover:text-violet-300"
                  >
                    Explore JARVIS <span>↗</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="flex items-end justify-between gap-8">
            <div>
              <SectionLabel>03 / Selected work</SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                Built beyond the flagship.
              </h2>
            </div>
            <Link href="/projects" className="hidden font-mono text-[8px] uppercase tracking-[0.16em] text-white/32 transition-colors hover:text-white md:block">
              All projects ↗
            </Link>
          </div>

          <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {selectedWork.map((project) => (
              <Link key={project.title} data-cursor-label="VIEW" href={project.href} className="group block">
                <motion.article
                  whileHover={reducedMotion ? undefined : { x: 6 }}
                  className="grid gap-8 py-10 transition-colors hover:bg-white/[0.012] md:grid-cols-[90px_1fr_0.7fr] md:items-center md:px-2"
                >
                  <div className="font-mono text-[9px] text-white/22">{project.number}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-4xl font-semibold tracking-[-0.055em] text-white/86 sm:text-5xl">{project.title}</h3>
                      <span
                        className={
                          "border px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.13em] " +
                          (project.tone === "emerald"
                            ? "border-emerald-400/20 text-emerald-300/70"
                            : "border-accent/20 text-accent/80")
                        }
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/24">{project.subtitle}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-dim">{project.description}</p>
                  </div>

                  <div className="md:text-right">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {project.stack.map((item) => (
                        <span key={item} className="border border-white/[0.07] px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.10em] text-white/28">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30 transition-colors group-hover:text-accent">
                      Case study <span className="transition-transform group-hover:translate-x-1">↗</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(91,110,245,.07),transparent_42%)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>04 / System view</SectionLabel>
              <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                How I build.<br /><span className="text-white/32">Not just what I use.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-ink-dim">
              Explore the layers. Each branch connects skills to the kind of product work I care about.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[470px] overflow-hidden border border-white/[0.09] bg-[#08090d] p-6 sm:p-10">
              <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:46px_46px]" />
              <div className="relative flex h-full min-h-[390px] items-center justify-center">
                <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                <div className="absolute left-1/2 top-1/2 h-[68%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent" />

                {([
                  ["AI", "left-1/2 top-[8%] -translate-x-1/2"],
                  ["DESIGN", "left-[5%] top-1/2 -translate-y-1/2"],
                  ["BACKEND", "right-[5%] top-1/2 -translate-y-1/2"],
                  ["PRODUCT", "bottom-[8%] left-1/2 -translate-x-1/2"],
                ] as const).map(([branch, position]) => (
                  <motion.button
                    key={branch}
                    whileHover={reducedMotion ? undefined : { scale: 1.04 }}
                    onMouseEnter={() => setActiveBranch(branch)}
                    onFocus={() => setActiveBranch(branch)}
                    onClick={() => setActiveBranch(branch)}
                    className={
                      "absolute " +
                      position +
                      " border px-4 py-2 font-mono text-[8px] uppercase tracking-[0.16em] transition-colors " +
                      (activeBranch === branch
                        ? "border-accent/45 bg-accent/[0.08] text-white"
                        : "border-white/[0.09] text-white/35")
                    }
                  >
                    {branch}
                  </motion.button>
                ))}

                <div className="relative z-10 border border-white/[0.11] bg-[#0d0e13] px-6 py-5 text-center shadow-[0_22px_70px_rgba(0,0,0,.45)]">
                  <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/22">Core</p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em]">NITYANSH</p>
                </div>
              </div>
            </div>

            <motion.div layout className="border border-white/[0.09] bg-white/[0.018] p-7 sm:p-8">
              <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-white/22">
                <span>Active branch</span>
                <span className="text-accent">{activeBranch}</span>
              </div>

              <h3 className="mt-8 font-display text-4xl font-semibold tracking-[-0.055em]">{activeBranch}</h3>

              <div className="mt-8 space-y-2">
                {branchItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between border-b border-white/[0.07] py-3"
                  >
                    <span className="text-sm text-white/65">{item}</span>
                    <span className="font-mono text-[7px] text-white/18">0{index + 1}</span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-7 text-ink-dim">
                The portfolio is strongest when these layers overlap — product choices influencing architecture, backend constraints shaping UX, and AI becoming part of a real workflow rather than a decoration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_50%,rgba(91,110,245,.07),transparent_38%)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <SectionLabel>05 / Ask the portfolio</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                Less browsing.<br /><span className="text-white/34">More answers.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-ink-dim">
                A recruiter-friendly terminal that answers questions about my projects, stack, current focus and what I am building.
              </p>
              <Link
                data-cursor-label="OPEN"
                href="/terminal"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-3 text-sm text-white/76 transition-all hover:-translate-y-1 hover:border-accent/35"
              >
                Open interactive terminal <span>→</span>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="overflow-hidden border border-white/[0.10] bg-[#08090d] shadow-[0_30px_100px_rgba(0,0,0,.38)]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
                <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">portfolio@nityansh</span>
              </div>

              <div className="space-y-5 p-6 font-mono text-[11px] leading-6 sm:p-8 sm:text-xs">
                <p className="text-white/32">portfolio@nityansh:~$ <span className="text-white/75">what are you building?</span></p>
                <p className="border-l border-accent/35 pl-4 text-white/52">
                  Currently building CareerUpAI — an AI-powered career platform focused on smarter career decisions.
                </p>
                <p className="text-white/32">portfolio@nityansh:~$ <span className="text-white/75">what technologies do you use?</span></p>
                <p className="border-l border-accent/35 pl-4 text-white/52">
                  React, Next.js, Node, MongoDB, Python and modern AI workflows.
                </p>
                <p className="text-white/32">
                  portfolio@nityansh:~ 
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block h-4 w-[7px] translate-y-[3px] bg-accent"
                  />
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,110,245,0.10),transparent_34%)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 text-center sm:px-8">
          <SectionLabel>06 / Let&apos;s build</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            Have an ambitious idea?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ink-dim md:text-base">
            I&apos;m open to internships, collaborations and product-focused opportunities.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              data-cursor-label="HELLO"
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
            >
              Start a conversation ↗
            </Link>
            <Link
              data-cursor-label="VIEW"
              href="/projects"
              className="rounded-full border border-white/[0.12] bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
