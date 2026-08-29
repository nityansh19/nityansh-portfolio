"use client";

import { useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { SectionHeading } from "./Reveal";

type Category = "Frontend" | "Backend" | "Data" | "Exploring";

type Technology = {
  name: string;
  category: Category;
  short: string;
  description: string;
  level: string;
  related: string[];
};

const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    short: "UI",
    description:
      "My main tool for building interactive interfaces and turning ideas into usable products.",
    level: "Building with",
    related: ["JavaScript", "Vite", "CSS"],
  },
  {
    name: "JavaScript",
    category: "Frontend",
    short: "JS",
    description:
      "The language I use to bring interfaces to life and handle the logic behind the experience.",
    level: "Building with",
    related: ["React", "Node.js", "HTML"],
  },
  {
    name: "HTML",
    category: "Frontend",
    short: "Markup",
    description:
      "The foundation behind the interfaces I build, with a focus on clean and semantic structure.",
    level: "Building with",
    related: ["CSS", "JavaScript"],
  },
  {
    name: "CSS",
    category: "Frontend",
    short: "Style",
    description:
      "Used for crafting responsive layouts, visual systems, animations and polished interfaces.",
    level: "Building with",
    related: ["HTML", "React"],
  },
  {
    name: "Vite",
    category: "Frontend",
    short: "Build",
    description:
      "A fast development environment I use for modern frontend projects.",
    level: "Building with",
    related: ["React", "JavaScript"],
  },
  {
    name: "Node.js",
    category: "Backend",
    short: "Runtime",
    description:
      "My runtime for taking JavaScript beyond the browser and building backend systems.",
    level: "Building with",
    related: ["Express", "MongoDB", "JavaScript"],
  },
  {
    name: "Express",
    category: "Backend",
    short: "API",
    description:
      "Used to create APIs, backend logic and the server-side layer of my applications.",
    level: "Building with",
    related: ["Node.js", "MongoDB"],
  },
  {
    name: "MongoDB",
    category: "Data",
    short: "DB",
    description:
      "My database choice for projects that need flexible data structures and fast iteration.",
    level: "Building with",
    related: ["Node.js", "Express"],
  },
  {
    name: "Python",
    category: "Exploring",
    short: "Py",
    description:
      "Currently exploring Python for automation, backend development and AI-focused projects.",
    level: "Currently learning",
    related: ["Artificial Intelligence", "Linux"],
  },
  {
    name: "Artificial Intelligence",
    category: "Exploring",
    short: "AI",
    description:
      "Exploring how AI can become part of useful products instead of simply being another feature.",
    level: "Currently exploring",
    related: ["Python", "DevOps"],
  },
  {
    name: "Docker",
    category: "Exploring",
    short: "Containers",
    description:
      "Learning containerization and how modern applications are packaged and deployed.",
    level: "Currently learning",
    related: ["Linux", "DevOps"],
  },
  {
    name: "Linux",
    category: "Exploring",
    short: "OS",
    description:
      "Getting more comfortable with the environment underneath the applications I build.",
    level: "Currently exploring",
    related: ["Docker", "DevOps"],
  },
  {
    name: "DevOps",
    category: "Exploring",
    short: "Systems",
    description:
      "Learning the systems, deployment and infrastructure side of software development.",
    level: "Currently exploring",
    related: ["Docker", "Linux"],
  },
];

const categories: Category[] = [
  "Frontend",
  "Backend",
  "Data",
  "Exploring",
];

export default function TechStack() {
  const [selected, setSelected] = useState<Technology>(technologies[0]);
  const [activeCategory, setActiveCategory] = useState<Category | "All">(
    "All"
  );

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
  });

  const rotateX = useTransform(smoothY, [0, 1], [3, -3]);
  const rotateY = useTransform(smoothX, [0, 1], [-3, 3]);

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === "All") return technologies;

    return technologies.filter(
      (technology) => technology.category === activeCategory
    );
  }, [activeCategory]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-line bg-bg py-32 md:py-[160px]"
    >
      {/* Ambient background */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.08, 0.15, 0.08],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[38%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[140px]"
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 md:px-8">
        <SectionHeading
          eyebrow="04 / Tech Stack"
          title={
            <>
              The tools behind
              <br />
              the things I build.
            </>
          }
        />

        {/* Intro */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <p className="max-w-[520px] text-[15px] leading-7 text-ink-dim">
            I don't see a tech stack as a checklist. Each tool has a purpose -
            some I use every day, some I am actively learning, and others are
            waiting for the right problem to solve.
          </p>

          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Always learning
          </div>
        </motion.div>

        {/* Category navigation */}

        <div className="mb-8 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative overflow-hidden border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${
                  active
                    ? "border-accent/50 bg-accent/[0.08] text-ink"
                    : "border-white/[0.08] text-ink-faint hover:border-white/[0.18] hover:text-ink-dim"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-accent/[0.06]"
                  />
                )}

                <span className="relative">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Main ecosystem */}

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1400,
          }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 0.8, 0.24, 1],
          }}
          className="relative overflow-hidden border border-white/[0.09] bg-white/[0.018] shadow-[0_50px_140px_rgba(0,0,0,0.35)]"
        >
          {/* Top bar */}

          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-7">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">
                developer.stack
              </span>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-faint">
              2026 / active
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px]">
            {/* Technology canvas */}

            <div className="relative min-h-[560px] overflow-hidden border-b border-white/[0.07] lg:border-b-0 lg:border-r">
              {/* Center node */}

              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(91,110,245,0)",
                      "0 0 50px rgba(91,110,245,0.10)",
                      "0 0 0 rgba(91,110,245,0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-28 w-28 flex-col items-center justify-center border border-accent/30 bg-bg-elev/90 backdrop-blur-xl"
                >
                  <span className="font-display text-xl font-semibold text-ink">
                    NRB
                  </span>

                  <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-accent">
                    developer
                  </span>
                </motion.div>
              </div>

              {/* Decorative rings */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 55,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]"
              />

              {/* Connection lines */}

              <div className="pointer-events-none absolute inset-0">
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                >
                  <line
                    x1="50%"
                    y1="50%"
                    x2="18%"
                    y2="19%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="12%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="82%"
                    y2="20%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="88%"
                    y2="50%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="82%"
                    y2="80%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="50%"
                    y2="88%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="18%"
                    y2="80%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                  <line
                    x1="50%"
                    y1="50%"
                    x2="12%"
                    y2="50%"
                    stroke="rgba(91,110,245,0.12)"
                  />
                </svg>
              </div>

              {/* Technology nodes */}

              <div className="absolute inset-0">
                {filteredTechnologies.map((technology, index) => {
                  const positions = [
                    { left: "12%", top: "14%" },
                    { left: "43%", top: "9%" },
                    { left: "73%", top: "14%" },
                    { left: "82%", top: "43%" },
                    { left: "73%", top: "72%" },
                    { left: "43%", top: "82%" },
                    { left: "12%", top: "72%" },
                    { left: "5%", top: "43%" },
                    { left: "27%", top: "27%" },
                    { left: "62%", top: "28%" },
                    { left: "66%", top: "60%" },
                    { left: "29%", top: "64%" },
                    { left: "47%", top: "50%" },
                  ];

                  const position =
                    positions[index % positions.length];

                  const isSelected = selected.name === technology.name;

                  return (
                    <motion.button
                      key={technology.name}
                      layout
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.04,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      onClick={() => setSelected(technology)}
                      style={position}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 border px-3 py-2 backdrop-blur-md transition-all duration-300 ${
                        isSelected
                          ? "border-accent/60 bg-accent/[0.12] text-ink shadow-[0_0_30px_rgba(91,110,245,0.12)]"
                          : "border-white/[0.09] bg-bg-elev/70 text-ink-dim hover:border-white/[0.22] hover:text-ink"
                      }`}
                    >
                      <span className="font-mono text-[10px] tracking-wide">
                        {technology.name}
                      </span>

                      {isSelected && (
                        <motion.span
                          layoutId="selected-dot"
                          className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-accent"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Canvas label */}

              <div className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.18em] text-ink-faint">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Select a technology
              </div>
            </div>

            {/* Information panel */}

            <div className="relative flex min-h-[560px] flex-col justify-between bg-white/[0.012] p-6 md:p-8">
              <div>
                <div className="mb-12 flex items-start justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">
                    Selected technology
                  </span>

                  <span className="font-mono text-[9px] text-accent">
                    {selected.short}
                  </span>
                </div>

                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                    {selected.level}
                  </p>

                  <h3 className="font-display text-4xl font-semibold tracking-tight text-ink">
                    {selected.name}
                  </h3>

                  <div className="my-7 h-px bg-white/[0.08]" />

                  <p className="text-sm leading-7 text-ink-dim">
                    {selected.description}
                  </p>

                  <div className="mt-8">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
                      Works well with
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selected.related.map((item) => (
                        <span
                          key={item}
                          className="border border-white/[0.08] px-3 py-2 font-mono text-[9px] text-ink-faint"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom stats */}

              <div className="mt-12 grid grid-cols-2 gap-px bg-white/[0.08]">
                <div className="bg-bg-elev p-4">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint">
                    Technologies
                  </span>

                  <span className="mt-2 block font-display text-2xl text-ink">
                    {technologies.length}
                  </span>
                </div>

                <div className="bg-bg-elev p-4">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint">
                    Focus
                  </span>

                  <span className="mt-2 block font-display text-2xl text-ink">
                    Full Stack
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom status bar */}

          <div className="flex flex-col gap-3 border-t border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-7">
            <div className="flex flex-wrap gap-5 font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint">
              <span>
                <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Frontend
              </span>

              <span>
                <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Backend
              </span>

              <span>
                <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Data
              </span>

              <span>
                <i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Exploring
              </span>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-ink-faint">
              Stack evolves with every project →
            </span>
          </div>
        </motion.div>

        {/* Small closing statement */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex items-center justify-between border-b border-white/[0.07] pb-5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-faint">
            Tools change. The ability to learn doesn't.
          </p>

          <span className="hidden font-mono text-[9px] text-accent sm:block">
            04
          </span>
        </motion.div>
      </div>
    </section>
  );
}