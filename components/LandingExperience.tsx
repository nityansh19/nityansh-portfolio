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
import ProjectStack from "@/components/ProjectStack";
import KineticHeroTitle from "@/components/KineticHeroTitle";

const expertise = [
  { label: "FULL STACK", tools: ["React", "Next.js", "Node", "MongoDB", "APIs"] },
  { label: "AI SYSTEMS", tools: ["Python", "LLM workflows", "Automation", "CareerUpAI"] },
  { label: "BACKEND", tools: ["Authentication", "REST APIs", "Databases", "Architecture", "Deployment"] },
  { label: "PRODUCT UX", tools: ["Interaction", "Motion", "Responsive UI", "Product thinking"] },
];


const systemBranches = {
  AI: ["CareerUpAI", "Python", "Automation", "AI workflows"],
  BACKEND: ["Node", "MongoDB", "APIs", "Authentication"],
  PRODUCT: ["UX", "Motion", "Architecture", "Deployment"],
  DESIGN: ["Interaction", "Hierarchy", "Responsive UI", "Systems thinking"],
};

const systemBranchMeta = {
  AI: {
    index: "01",
    label: "Intelligence layer",
    description:
      "I use AI where it improves a real workflow — analysis, guidance and automation — instead of adding it as decoration.",
    signal: "Applied intelligence",
  },
  BACKEND: {
    index: "02",
    label: "System layer",
    description:
      "APIs, authentication and data models turn polished interfaces into products that can actually behave, persist and scale.",
    signal: "Reliable systems",
  },
  PRODUCT: {
    index: "03",
    label: "Product layer",
    description:
      "I think about the complete journey: what belongs in the product, what should stay simple and how every decision connects.",
    signal: "Useful outcomes",
  },
  DESIGN: {
    index: "04",
    label: "Experience layer",
    description:
      "Hierarchy, motion and responsive interaction make complex systems feel understandable instead of overwhelming.",
    signal: "Clear interaction",
  },
} as const;


function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/75">{children}</p>;
}

export default function LandingExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [activeBranch, setActiveBranch] = useState<keyof typeof systemBranches>("AI");
  const [profileSrc, setProfileSrc] = useState("https://avatars.githubusercontent.com/u/257083668?v=4");

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
        className="relative overflow-hidden border-b border-white/[0.07] lg:min-h-[94svh]"
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

        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <motion.div
            aria-hidden
            animate={reducedMotion ? undefined : { y: [0, -18, 0], rotateZ: [-2.2, -1.2, -2.2] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-[7vw] top-[14%] select-none font-display text-[9rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.018] [transform:rotateY(-24deg)_rotateZ(-2deg)]"
          >
            BUILD
          </motion.div>
          <motion.div
            aria-hidden
            animate={reducedMotion ? undefined : { y: [0, 15, 0], x: [0, -8, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-[4vw] bottom-[7%] select-none font-display text-[7rem] font-extrabold leading-none tracking-[-0.07em] text-accent/[0.026] [transform:rotateY(28deg)_rotateZ(4deg)]"
          >
            CREATE
          </motion.div>
          <div className="absolute right-[18%] top-[18%] h-[44%] w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
        </div>

        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-col px-5 pb-24 pt-5 sm:px-8 sm:pb-28 lg:min-h-[94svh] lg:px-10 lg:pb-12 lg:pt-6 xl:px-14"
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

          <div className="grid flex-1 items-start gap-8 py-7 sm:py-9 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_310px] xl:gap-14">
            <motion.div style={{ x: textX, y: textY }} className="min-w-0 lg:pr-2 xl:pr-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="mb-4 flex max-w-[330px] items-start gap-3 font-mono text-[8px] uppercase leading-4 tracking-[0.18em] text-accent/90 sm:max-w-none sm:items-center sm:text-[9px] sm:tracking-[0.22em]"
              >
                <span className="h-px w-8 bg-accent" />
                Full-stack developer building intelligent products
              </motion.p>

              <KineticHeroTitle />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.6 }}
                className="mt-5 max-w-[590px] text-[13px] leading-6 text-white/58 sm:text-[14px] md:text-[15px]"
              >
                I build polished digital products, backend systems and intelligent experiences — combining engineering depth with product thinking and interaction design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56, duration: 0.6 }}
                className="mt-5 grid max-w-[700px] gap-2.5 md:grid-cols-[1fr_1.05fr]"
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
                        "group flex items-center justify-between border px-3 py-2.5 text-left font-mono text-[8px] uppercase tracking-[0.14em] transition-all duration-300 " +
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

                <motion.div layout className="min-h-[102px] border border-white/[0.08] bg-black/20 p-3.5">
                  <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-white/24">
                    <span>Focus layer</span>
                    <span className="text-accent">{expertise[activeExpertise].label}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
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
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link
                  data-cursor-label="VIEW"
                  href="/projects"
                  className="group inline-flex items-center justify-between gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1 sm:gap-8"
                >
                  Explore work
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                </Link>
                <Link
                  data-cursor-label="HELLO"
                  href="/contact"
                  className="group inline-flex items-center justify-between gap-3 rounded-full border border-white/[0.13] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/82 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] sm:gap-8"
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
              className="relative z-10 mx-auto hidden w-full max-w-[255px] lg:mx-0 lg:block lg:justify-self-end xl:max-w-[310px]"
            >
              <div className="relative">
                <div className="absolute -left-8 top-10 hidden h-px w-20 bg-gradient-to-r from-transparent to-accent/60 md:block" />
                <div className="absolute -right-8 bottom-16 hidden h-px w-20 bg-gradient-to-r from-accent/60 to-transparent md:block" />

                <div className="relative overflow-hidden border border-white/[0.11] bg-[#0b0c10]/72 p-2 shadow-[0_35px_100px_rgba(0,0,0,.48)] backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111216]">
                    <motion.img
                      src={profileSrc}
                      alt="Portrait of Nityansh Rupesh Bahadur"
                      className="absolute inset-0 h-full w-full object-cover object-[50%_18%] grayscale-[8%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-white/[0.02]" />
                    <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-white/68 shadow-[0_8px_24px_rgba(0,0,0,.25)] backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(91,110,245,.8)]" />
                      Lucknow, India
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

              </div>
            </motion.div>
          </div>

          <div className="hidden items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/22 lg:flex">
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

      <ProjectStack />

      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[42%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.045] blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <SectionLabel>04 / Build system</SectionLabel>
              <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                Ideas become systems.
                <br />
                <span className="text-white/28">Systems become products.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink-dim lg:pb-2">
              Explore the layers behind the work. Hover or tap a branch to see
              how engineering, AI, product thinking and design connect.
            </p>
          </div>

          <div className="mt-14 overflow-hidden border border-white/[0.10] bg-[#08090d]/80 shadow-[0_40px_140px_rgba(0,0,0,.35)] backdrop-blur-sm md:mt-16">
            <div className="grid lg:grid-cols-[1.15fr_.85fr]">
              <div className="relative min-h-[520px] overflow-hidden border-b border-white/[0.08] p-5 sm:min-h-[610px] sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(91,110,245,.12),transparent_34%),radial-gradient(circle_at_18%_20%,rgba(139,110,245,.05),transparent_24%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px]" />

                <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
                  <div className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/26 sm:text-[8px]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,.9)]" />
                    Interactive architecture map
                  </div>
                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
                    04 connected layers
                  </span>
                </div>

                <div className="relative mx-auto mt-6 h-[410px] max-w-[680px] sm:mt-8 sm:h-[470px]">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[340px] sm:w-[340px]" />
                  <motion.div
                    aria-hidden
                    animate={reducedMotion ? undefined : { rotate: 360 }}
                    transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/[0.16] sm:h-[270px] sm:w-[270px]"
                  >
                    <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_18px_rgba(91,110,245,.9)]" />
                  </motion.div>

                  <svg
                    aria-hidden
                    viewBox="0 0 680 470"
                    className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
                    preserveAspectRatio="none"
                  >
                    {[
                      ["AI", "M340 235 L340 55"],
                      ["DESIGN", "M340 235 L90 235"],
                      ["BACKEND", "M340 235 L590 235"],
                      ["PRODUCT", "M340 235 L340 415"],
                    ].map(([branch, d]) => (
                      <motion.path
                        key={branch}
                        d={d}
                        fill="none"
                        stroke={activeBranch === branch ? "rgba(91,110,245,.68)" : "rgba(255,255,255,.08)"}
                        strokeWidth={activeBranch === branch ? 1.4 : 1}
                        strokeDasharray={activeBranch === branch ? "6 8" : "2 10"}
                        initial={false}
                        animate={{
                          opacity: activeBranch === branch ? 1 : 0.7,
                          pathLength: activeBranch === branch ? 1 : 0.72,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    ))}
                  </svg>

                  {([
                    ["AI", "left-1/2 top-[3%] -translate-x-1/2"],
                    ["DESIGN", "left-[1%] top-1/2 -translate-y-1/2"],
                    ["BACKEND", "right-[1%] top-1/2 -translate-y-1/2"],
                    ["PRODUCT", "bottom-[3%] left-1/2 -translate-x-1/2"],
                  ] as const).map(([branch, position]) => {
                    const active = activeBranch === branch;
                    const meta = systemBranchMeta[branch];
                    return (
                      <motion.button
                        key={branch}
                        type="button"
                        whileHover={reducedMotion ? undefined : { scale: 1.045, y: -2 }}
                        onMouseEnter={() => setActiveBranch(branch)}
                        onFocus={() => setActiveBranch(branch)}
                        onClick={() => setActiveBranch(branch)}
                        className={
                          "absolute z-20 " +
                          position +
                          " min-w-[96px] border px-3 py-2.5 text-left transition-all duration-300 sm:min-w-[126px] sm:px-4 sm:py-3 " +
                          (active
                            ? "border-accent/55 bg-accent/[0.11] shadow-[0_0_35px_rgba(91,110,245,.14)]"
                            : "border-white/[0.09] bg-[#0a0b10]/85 hover:border-white/20 hover:bg-white/[0.035]")
                        }
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className={"font-mono text-[7px] tracking-[0.16em] " + (active ? "text-accent" : "text-white/22")}>
                            {meta.index}
                          </span>
                          <span className={"h-1.5 w-1.5 rounded-full " + (active ? "bg-accent shadow-[0_0_12px_rgba(91,110,245,.9)]" : "bg-white/12")} />
                        </div>
                        <p className={"mt-2 font-mono text-[8px] uppercase tracking-[0.14em] sm:text-[9px] " + (active ? "text-white" : "text-white/42")}>
                          {branch}
                        </p>
                      </motion.button>
                    );
                  })}

                  <motion.div
                    animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 z-10 w-[150px] -translate-x-1/2 -translate-y-1/2 sm:w-[190px]"
                  >
                    <div className="absolute -inset-8 rounded-full bg-accent/[0.08] blur-3xl" />
                    <div className="relative overflow-hidden border border-white/[0.13] bg-[#0d0f16]/94 px-5 py-6 text-center shadow-[0_26px_90px_rgba(0,0,0,.55)] backdrop-blur-xl sm:px-7 sm:py-8">
                      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                      <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-accent/65">
                        Core system
                      </p>
                      <p className="mt-3 font-display text-xl font-semibold tracking-[-0.045em] text-white sm:text-2xl">
                        NITYANSH
                      </p>
                      <p className="mt-2 font-mono text-[6px] uppercase tracking-[0.15em] text-white/22 sm:text-[7px]">
                        Build · Connect · Refine
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">
                  <span>Hover / tap a node</span>
                  <span className="text-accent/60">Active: {activeBranch}</span>
                </div>
              </div>

              <motion.div
                layout
                className="relative min-h-[520px] overflow-hidden bg-[linear-gradient(145deg,rgba(255,255,255,.025),transparent_42%)] p-6 sm:min-h-[610px] sm:p-8 lg:p-10"
              >
                <motion.div
                  key={"ghost-" + activeBranch}
                  initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="pointer-events-none absolute -right-3 top-14 select-none font-display text-[clamp(5rem,9vw,8.5rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]"
                >
                  {activeBranch}
                </motion.div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4 font-mono text-[7px] uppercase tracking-[0.18em] text-white/24 sm:text-[8px]">
                    <span>Active layer / {systemBranchMeta[activeBranch].index}</span>
                    <span className="flex items-center gap-2 text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,.9)]" />
                      Connected
                    </span>
                  </div>

                  <motion.div
                    key={"heading-" + activeBranch}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-8"
                  >
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/72">
                      {systemBranchMeta[activeBranch].label}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(3.1rem,5vw,4.8rem)] font-semibold leading-none tracking-[-0.065em]">
                      {activeBranch}
                    </h3>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/44">
                      {systemBranchMeta[activeBranch].description}
                    </p>
                  </motion.div>

                  <div className="mt-8 grid gap-2">
                    {branchItems.map((item, index) => (
                      <motion.div
                        key={activeBranch + item}
                        initial={reducedMotion ? false : { opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.055, duration: 0.35 }}
                        className="group relative overflow-hidden border border-white/[0.07] bg-white/[0.015] px-4 py-3.5 transition-colors hover:border-accent/25 hover:bg-accent/[0.035]"
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.08 + index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-accent/55 via-accent/12 to-transparent"
                        />
                        <div className="relative flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[7px] text-accent/55">
                              0{index + 1}
                            </span>
                            <span className="text-sm text-white/66">
                              {item}
                            </span>
                          </div>
                          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/16 transition-colors group-hover:text-accent/60">
                            linked
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="border border-white/[0.08] bg-black/20 p-5">
                      <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-white/22">
                        <span>System signal</span>
                        <span className="text-accent">{systemBranchMeta[activeBranch].signal}</span>
                      </div>
                      <div className="mt-4 h-1 overflow-hidden bg-white/[0.05]">
                        <motion.div
                          key={"signal-" + activeBranch}
                          initial={{ width: "18%" }}
                          animate={{ width: "86%" }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-gradient-to-r from-accent via-[#8b6ef5] to-transparent"
                        />
                      </div>
                      <p className="mt-4 text-xs leading-6 text-white/30">
                        The strongest work happens when this layer overlaps with the other three instead of operating by itself.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
