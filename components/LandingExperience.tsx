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


const techProfiles = [
  {
    name: "JavaScript",
    mark: "JS",
    type: "Language",
    level: "Core",
    blurb: "The language behind most of my web work — interfaces, APIs and product logic.",
    uses: ["React UI", "APIs", "App logic"],
    projects: ["CareerUpAI", "Health Tracker", "Nitra Chat"],
  },
  {
    name: "TypeScript",
    mark: "TS",
    type: "Language",
    level: "Building with",
    blurb: "What I use when a codebase gets bigger and I want the data and components to stay predictable.",
    uses: ["Typed UI", "Data models", "Safer refactors"],
    projects: ["Portfolio", "Nivora", "Health Tracker"],
  },
  {
    name: "Python",
    mark: "PY",
    type: "Language",
    level: "Deepening",
    blurb: "My main focus right now for problem solving, backend work and the path into AI.",
    uses: ["Scripting", "Backend", "AI foundations"],
    projects: ["Learning builds", "AI experiments"],
  },
  {
    name: "React",
    mark: "R",
    type: "Frontend",
    level: "Core",
    blurb: "My default way to build interactive product interfaces and reusable frontend systems.",
    uses: ["Components", "State", "Product UI"],
    projects: ["Health Tracker", "Nivora", "CareerUpAI"],
  },
  {
    name: "Next.js",
    mark: "N",
    type: "Frontend",
    level: "Building with",
    blurb: "I use it when a React project needs routing, server features and a stronger application structure.",
    uses: ["Routing", "App structure", "Full-stack React"],
    projects: ["Portfolio", "Nitra Chat"],
  },
  {
    name: "Node.js",
    mark: "ND",
    type: "Backend",
    level: "Core",
    blurb: "Where I build API logic, authentication flows and the backend parts that make a frontend useful.",
    uses: ["REST APIs", "Auth", "Server logic"],
    projects: ["CareerUpAI", "Full-stack builds"],
  },
  {
    name: "MongoDB",
    mark: "DB",
    type: "Database",
    level: "Building with",
    blurb: "A practical document database I use for application data, profiles and backend-driven features.",
    uses: ["Persistence", "Models", "Queries"],
    projects: ["CareerUpAI", "Nitra Chat"],
  },
  {
    name: "Supabase",
    mark: "SB",
    type: "Cloud / Data",
    level: "Building with",
    blurb: "My go-to when I want authentication, PostgreSQL and secure cloud persistence without overbuilding the backend.",
    uses: ["Auth", "PostgreSQL", "RLS"],
    projects: ["Health Tracker", "Nivora"],
  },
  {
    name: "HTML / CSS",
    mark: "</>",
    type: "Web",
    level: "Core",
    blurb: "Still the base of everything: structure, responsive layout, visual polish and the details people actually feel.",
    uses: ["Semantic UI", "Responsive layout", "Motion"],
    projects: ["Every web project"],
  },
  {
    name: "C / C++",
    mark: "C+",
    type: "Language",
    level: "Foundation",
    blurb: "Where I built programming fundamentals and got comfortable thinking about logic before frameworks.",
    uses: ["Logic", "Problem solving", "Fundamentals"],
    projects: ["Academic + practice work"],
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/75">{children}</p>;
}

export default function LandingExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [activeTech, setActiveTech] = useState(0);
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
  const selectedTech = techProfiles[activeTech];

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

      <section className="relative overflow-hidden border-t border-line py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[18%] top-[20%] h-[420px] w-[420px] rounded-full bg-accent/[0.055] blur-[150px]" />
          <div className="absolute right-[10%] bottom-[5%] h-[360px] w-[360px] rounded-full bg-violet-500/[0.035] blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>04 / Stack playground</SectionLabel>
              <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                The tools I
                <span className="text-white/28"> actually use.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/38">
              Tap one. See what I do with it.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-2">
              {techProfiles.map((tech, index) => {
                const active = activeTech === index;
                return (
                  <motion.button
                    key={tech.name}
                    type="button"
                    onMouseEnter={() => setActiveTech(index)}
                    onFocus={() => setActiveTech(index)}
                    onClick={() => setActiveTech(index)}
                    whileHover={reducedMotion ? undefined : { y: -3 }}
                    className={
                      "group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 " +
                      (active
                        ? "border-accent/45 bg-accent/[0.085] shadow-[0_18px_55px_rgba(91,110,245,.12)]"
                        : "border-white/[0.08] bg-white/[0.018] hover:border-white/[0.16] hover:bg-white/[0.035]")
                    }
                  >
                    {active && (
                      <motion.div
                        layoutId="stack-active-glow"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(91,110,245,.18),transparent_52%)]"
                      />
                    )}
                    <div className="relative flex items-start justify-between gap-3">
                      <span
                        className={
                          "font-display text-2xl font-semibold tracking-[-0.05em] sm:text-3xl " +
                          (active ? "text-white" : "text-white/52")
                        }
                      >
                        {tech.mark}
                      </span>
                      <span
                        className={
                          "rounded-full border px-2 py-1 font-mono text-[6px] uppercase tracking-[0.13em] " +
                          (active
                            ? "border-accent/25 text-accent"
                            : "border-white/[0.08] text-white/20")
                        }
                      >
                        {tech.level}
                      </span>
                    </div>
                    <div className="relative mt-7">
                      <p className="font-display text-lg font-semibold tracking-[-0.035em] text-white/82">
                        {tech.name}
                      </p>
                      <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/22">
                        {tech.type}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              layout
              className="relative min-h-[430px] overflow-hidden rounded-[26px] border border-white/[0.10] bg-[#0a0b10]/92 p-6 shadow-[0_35px_120px_rgba(0,0,0,.38)] sm:p-8 lg:sticky lg:top-24 lg:min-h-[520px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(91,110,245,.12),transparent_36%)]" />
              <motion.div
                key={"ghost-tech-" + selectedTech.name}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="pointer-events-none absolute -right-4 top-5 select-none font-display text-[clamp(7rem,16vw,12rem)] font-bold leading-none tracking-[-0.09em] text-white/[0.025]"
              >
                {selectedTech.mark}
              </motion.div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/22">
                    Selected / {String(activeTech + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.16em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,.9)]" />
                    {selectedTech.level}
                  </span>
                </div>

                <motion.div
                  key={"tech-copy-" + selectedTech.name}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32 }}
                  className="mt-8"
                >
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">
                    {selectedTech.type}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(3.2rem,6vw,5.2rem)] font-semibold leading-none tracking-[-0.07em]">
                    {selectedTech.name}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-white/46">
                    {selectedTech.blurb}
                  </p>
                </motion.div>

                <div className="mt-7">
                  <p className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/22">
                    I use it for
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedTech.uses.map((item, index) => (
                      <motion.span
                        key={selectedTech.name + item}
                        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.055 }}
                        className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-xs text-white/55"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <p className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/22">
                    Used in
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selectedTech.projects.map((project, index) => (
                      <motion.div
                        key={selectedTech.name + project}
                        initial={reducedMotion ? false : { opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.055 }}
                        className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3"
                      >
                        <span className="text-sm text-white/62">{project}</span>
                        <span className="text-accent/60">↗</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
            <span>Hover on desktop · tap on mobile</span>
            <span>{techProfiles.length} tools in the mix</span>
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
