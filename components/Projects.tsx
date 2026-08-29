"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { SectionHeading } from "./Reveal";
import MagneticButton from "./MagneticButton";

const projects = [
  {
    number: "01",
    title: "CareerUpAI",
    eyebrow: "AI CAREER PLATFORM",
    type: "FULL STACK / AI",
    year: "2026",
    status: "CURRENTLY BUILDING",

    shortDescription:
      "CareerUpAI started with a simple idea. Looking for a job is already complicated, so why not build something that can actually help people understand where they stand and what they can improve?",

    story:
      "I am building CareerUpAI as a complete career focused platform rather than just another resume generator. The goal is to bring resume analysis, profile improvement, career guidance and useful tools into one place. I want the experience to feel practical and personal instead of giving users generic advice.",

    problem:
      "A lot of career tools tell people what looks good on paper, but they do not always explain what should actually be changed or why. CareerUpAI is my attempt to make that process more understandable.",

    features: [
      "AI powered CV analysis",
      "Resume creation and editing",
      "Personalized improvement suggestions",
      "Career focused recommendations",
      "Profile and skill analysis",
      "A centralized career workspace",
    ],

    stack: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
    ],

    learning:
      "This project is also giving me the chance to understand how a real product comes together. I am working through frontend architecture, APIs, databases, authentication, AI integration and the small details that make an application feel complete.",

    theme: "blue",
  },

  {
    number: "02",
    title: "WORKSPACE AI",
    eyebrow: "PERSONAL AI SYSTEM",
    type: "AI / AUTOMATION",
    year: "2026",
    status: "CURRENTLY BUILDING",

    shortDescription:
      "A personal AI assistant that I am building for my own workspace, with the long term goal of making everyday development and computer tasks easier to manage.",

    story:
      "This is probably the most experimental project I am working on. I do not want it to be just a chatbot with a different name. I want to explore what happens when an AI actually becomes part of my workspace and can understand context, work with tools and help me get things done.",

    problem:
      "There are a lot of small tasks involved in development and everyday computer use. Finding information, managing files, remembering things, running workflows and switching between different tools can all add up. I want to build something that can sit between me and those tasks.",

    features: [
      "Personal AI assistant",
      "Context aware conversations",
      "Developer workflow assistance",
      "Task and workflow automation",
      "Tool and API integration",
      "Personal knowledge layer",
    ],

    stack: [
      "Python",
      "AI",
      "LLMs",
      "React",
      "Node.js",
      "APIs",
      "Linux",
      "Docker",
    ],

    learning:
      "The project is pushing me deeper into Python, artificial intelligence, APIs, Linux and automation. I am also learning how much engineering goes into making an AI system reliable outside of a simple chat interface.",

    theme: "violet",
  },
];

function ProjectVisual({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const isBlue = project.theme === "blue";

  return (
    <div className="relative min-h-[430px] overflow-hidden bg-[#07080c]">

      {/* Background grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Cinematic light */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] ${
          isBlue ? "bg-blue-500/20" : "bg-violet-500/20"
        }`}
      />

      {/* Moving scan line */}

      <motion.div
        animate={{
          y: ["-100%", "600%"],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 z-30 h-px bg-white/[0.06]"
      />

      {/* Top metadata */}

      <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`h-1.5 w-1.5 rounded-full ${
              isBlue ? "bg-blue-400" : "bg-violet-400"
            }`}
          />

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
            {project.status}
          </span>
        </div>

        <span className="font-mono text-[8px] tracking-[0.2em] text-white/20">
          {project.year}
        </span>
      </div>

      {/* =====================================================
          CAREERUP VISUAL
      ====================================================== */}

      {isBlue ? (
        <div className="absolute inset-0 flex items-center justify-center">

          {/* orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[300px] w-[300px] rounded-full border border-blue-400/[0.07]"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,.8)]" />
          </motion.div>

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[230px] w-[230px] rounded-full border border-white/[0.05]"
          />

          {/* Product window */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 w-[72%] max-w-[430px] border border-white/[0.12] bg-[#0c0e14]/95 shadow-[0_40px_100px_rgba(0,0,0,.6)] backdrop-blur-xl"
          >

            {/* Window header */}

            <div className="flex h-9 items-center justify-between border-b border-white/[0.07] px-4">

              <div className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              </div>

              <span className="font-mono text-[6px] tracking-[0.2em] text-white/20">
                CAREERUP / DASHBOARD
              </span>
            </div>

            <div className="p-5">

              <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-blue-400/60">
                Profile analysis
              </div>

              <div className="mt-2 font-display text-xl tracking-[-0.04em] text-white/75">
                Your next move.
              </div>

              {/* Score */}

              <div className="mt-6 flex items-end justify-between">

                <div>
                  <div className="font-mono text-[6px] text-white/20">
                    PROFILE SCORE
                  </div>

                  <div className="mt-1 font-display text-4xl text-white/70">
                    82
                  </div>
                </div>

                <div className="font-mono text-[7px] text-blue-400/60">
                  ANALYSIS COMPLETE
                </div>
              </div>

              {/* Graph */}

              <div className="mt-5 flex h-16 items-end gap-1">

                {[24, 32, 27, 42, 38, 52, 47, 63, 58, 72].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                      }}
                      className="flex-1 bg-blue-400/25"
                    />
                  )
                )}

              </div>

              {/* Analysis rows */}

              <div className="mt-5 space-y-2">

                {[
                  ["Experience", "STRONG"],
                  ["Skills", "GOOD"],
                  ["Resume", "IMPROVE"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-t border-white/[0.05] pt-2"
                  >
                    <span className="font-mono text-[6px] text-white/20">
                      {label}
                    </span>

                    <span className="font-mono text-[6px] text-white/40">
                      {value}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* =====================================================
           WORKSPACE AI VISUAL
        ====================================================== */

        <div className="absolute inset-0 flex items-center justify-center">

          {/* Large orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[300px] w-[300px] rounded-full border border-violet-400/[0.06]"
          >
            <span className="absolute left-[18%] top-[4%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,.9)]" />
          </motion.div>

          {/* Inner orbit */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[210px] w-[210px] rounded-full border border-white/[0.06]"
          />

          {/* Core */}

          <motion.div
            animate={{
              scale: [0.96, 1.05, 0.96],
              boxShadow: [
                "0 0 30px rgba(139,92,246,.12)",
                "0 0 90px rgba(139,92,246,.3)",
                "0 0 30px rgba(139,92,246,.12)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-violet-300/[0.15] bg-violet-400/[0.035]"
          >

            <div className="text-center">

              <div className="font-mono text-[7px] tracking-[0.3em] text-violet-300/60">
                PERSONAL AI
              </div>

              <div className="mt-2 font-display text-2xl tracking-[-0.05em] text-white/75">
                READY
              </div>

              <div className="mt-2 font-mono text-[6px] text-white/20">
                WAITING FOR INPUT
              </div>

            </div>
          </motion.div>

          {/* System nodes */}

          {[
            ["PYTHON", "left-[12%] top-[23%]"],
            ["LLM", "right-[15%] top-[20%]"],
            ["TOOLS", "left-[15%] bottom-[22%]"],
            ["AUTOMATION", "right-[10%] bottom-[19%]"],
          ].map(([label, position], index) => (
            <motion.div
              key={label}
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute ${position} border border-white/[0.08] bg-white/[0.025] px-3 py-2 backdrop-blur-md`}
            >
              <span className="font-mono text-[6px] uppercase tracking-[0.18em] text-white/30">
                {label}
              </span>
            </motion.div>
          ))}

          {/* Connecting lines */}

          <div className="absolute left-[20%] top-[30%] h-px w-[25%] rotate-[25deg] bg-violet-400/[0.08]" />
          <div className="absolute right-[20%] top-[30%] h-px w-[25%] rotate-[-25deg] bg-violet-400/[0.08]" />
          <div className="absolute bottom-[31%] left-[20%] h-px w-[25%] rotate-[-25deg] bg-violet-400/[0.08]" />
          <div className="absolute bottom-[31%] right-[20%] h-px w-[25%] rotate-[25deg] bg-violet-400/[0.08]" />

        </div>
      )}

      {/* Bottom caption */}

      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">

        <span className="max-w-[220px] font-mono text-[7px] uppercase leading-4 tracking-[0.15em] text-white/15">
          {isBlue
            ? "Turning career data into useful decisions."
            : "Exploring what an AI can actually do."}
        </span>

        <span className="font-mono text-[7px] text-white/10">
          0{project.number}
        </span>

      </div>
    </div>
  );
}

function Project({
  project,
  index,
  active,
  onActivate,
}: {
  project: (typeof projects)[number];
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
  });

  const rotateX = useTransform(
    springY,
    [0, 1],
    [2.5, -2.5]
  );

  const rotateY = useTransform(
    springX,
    [0, 1],
    [-2.5, 2.5]
  );

  function handleMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height
    );
  }

  function handleLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  const blue = project.theme === "blue";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={onActivate}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1400,
      }}
      className={`group relative overflow-hidden border transition-all duration-700 ${
        active
          ? "border-white/[0.15] bg-white/[0.025]"
          : "border-white/[0.07] bg-white/[0.012]"
      }`}
    >

      {/* Active glow */}

      <motion.div
        animate={{
          opacity: active ? 1 : 0,
        }}
        className={`pointer-events-none absolute inset-0 ${
          blue
            ? "bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,.07),transparent_40%)]"
            : "bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,.07),transparent_40%)]"
        }`}
      />

      {/* Project header */}

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-6 py-5 md:px-8">

        <div className="flex items-center gap-5">

          <span
            className={`font-mono text-[10px] ${
              blue
                ? "text-blue-400"
                : "text-violet-400"
            }`}
          >
            {project.number}
          </span>

          <div className="h-px w-8 bg-white/[0.1]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
            {project.type}
          </span>

        </div>

        <div
          className={`font-mono text-[7px] uppercase tracking-[0.16em] ${
            blue
              ? "text-blue-400/60"
              : "text-violet-400/60"
          }`}
        >
          {project.status}
        </div>

      </div>

      {/* Main content */}

      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

        {/* Information */}

        <div className="relative z-10 flex flex-col justify-between p-7 md:p-10 lg:p-12">

          <div>

            <div className="mb-5 font-mono text-[7px] uppercase tracking-[0.22em] text-white/20">
              {project.eyebrow}
            </div>

            <motion.h3
              animate={{
                x: active ? 5 : 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="font-display text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-white"
            >
              {project.title}
            </motion.h3>

            <p className="mt-8 max-w-[520px] text-[14px] leading-7 text-white/40 md:text-[15px]">
              {project.shortDescription}
            </p>

            {/* Personal project story */}

            <div className="mt-8 border-l border-white/[0.08] pl-5">

              <div className="mb-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                Why I am building it
              </div>

              <p className="max-w-[500px] text-[13px] leading-6 text-white/25">
                {project.story}
              </p>

            </div>

            {/* Problem */}

            <div className="mt-7">

              <div className="mb-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                The idea
              </div>

              <p className="max-w-[500px] text-[13px] leading-6 text-white/25">
                {project.problem}
              </p>

            </div>

          </div>

          {/* Lower information */}

          <div className="mt-12">

            <div className="mb-4 font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
              What is inside
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="flex items-start gap-3 border border-white/[0.05] px-3 py-2.5 transition-colors duration-300 group-hover:border-white/[0.09]"
                >

                  <span
                    className={`mt-1 h-1 w-1 shrink-0 rounded-full ${
                      blue
                        ? "bg-blue-400"
                        : "bg-violet-400"
                    }`}
                  />

                  <span className="font-mono text-[8px] leading-4 text-white/30">
                    {feature}
                  </span>

                </motion.div>
              ))}

            </div>

            {/* Stack */}

            <div className="mt-8 flex flex-wrap gap-2">

              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/[0.06] px-2.5 py-1.5 font-mono text-[7px] uppercase tracking-[0.1em] text-white/20 transition-all duration-300 group-hover:border-white/[0.1] group-hover:text-white/35"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <MagneticButton href="#contact">
                Ask me about it →
              </MagneticButton>

              <MagneticButton
                href="https://github.com/nityansh19"
                target="_blank"
                variant="ghost"
              >
                GitHub →
              </MagneticButton>

            </div>

          </div>
        </div>

        {/* Visual */}

        <div className="relative border-t border-white/[0.07] lg:border-l lg:border-t-0">

          <ProjectVisual project={project} />

        </div>
      </div>

      {/* Learning footer */}

      <div className="relative z-10 border-t border-white/[0.06] px-7 py-7 md:px-10 lg:px-12">

        <div className="grid gap-5 md:grid-cols-[130px_1fr]">

          <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/15">
            What I am learning
          </div>

          <p className="max-w-[720px] text-[12px] leading-6 text-white/20">
            {project.learning}
          </p>

        </div>

      </div>

      {/* Bottom active line */}

      <motion.div
        animate={{
          scaleX: active ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`absolute bottom-0 left-0 right-0 h-px origin-left ${
          blue
            ? "bg-blue-400"
            : "bg-violet-400"
        }`}
      />

    </motion.article>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] =
    useState(0);

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-line bg-bg py-32 md:py-[170px]"
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[15%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-accent/[0.018] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <SectionHeading
          eyebrow="03 / Work"
          title={
            <>
              Things I am
              <br />
              <span className="text-white/35">
                building.
              </span>
            </>
          }
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-[600px] text-[14px] leading-7 text-white/30"
          >
            I like projects that give me a reason to learn
            something new. These are the two systems I am
            spending most of my time thinking about and
            building right now.
          </motion.p>

          <div className="flex items-center gap-3">

            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,.7)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              2 active builds
            </span>

          </div>

        </div>

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <div className="mt-16 space-y-10">

          {projects.map((project, index) => (
            <Project
              key={project.number}
              project={project}
              index={index}
              active={activeProject === index}
              onActivate={() =>
                setActiveProject(index)
              }
            />
          ))}

        </div>

        {/* =====================================================
            BUILDING PHILOSOPHY
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mt-20 overflow-hidden border-y border-white/[0.06] py-16"
        >

          {/* Decorative number */}

          <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[180px] font-semibold leading-none tracking-[-0.1em] text-white/[0.015]">
            02
          </div>

          <div className="relative max-w-[720px]">

            <div className="font-mono text-[7px] uppercase tracking-[0.25em] text-accent/50">
              BUILDING PHILOSOPHY
            </div>

            <h4 className="mt-5 font-display text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.055em] text-white/70">
              I would rather build
              <br />
              one difficult thing
              <br />
              than ten easy ones.
            </h4>

            <p className="mt-7 max-w-[580px] text-[13px] leading-7 text-white/25">
              The projects I enjoy most are the ones where
              I do not know everything at the beginning.
              They force me to research, experiment, break
              things, rebuild them and understand what is
              actually happening underneath.
            </p>

          </div>

        </motion.div>

        {/* =====================================================
            SECTION FOOTER
        ====================================================== */}

        <div className="mt-10 flex items-center justify-between">

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/10">
            N.R.B / PROJECT ARCHIVE
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/10">
            NEXT / STACK →
          </span>

        </div>

      </div>
    </section>
  );
}