"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { SectionHeading } from "./Reveal";

const journey = [
  {
    year: "2025",
    label: "THE BEGINNING",
    title: "Started learning seriously.",
    description:
      "This is where I started taking development seriously - learning the fundamentals, getting comfortable with code, and slowly moving from simply following tutorials to understanding why things actually work.",
    tags: ["HTML", "CSS", "JavaScript", "Programming"],
    number: "01",
    status: "FOUNDATION",
  },
  {
    year: "2026",
    label: "THE BUILDING PHASE",
    title: "Turning knowledge into real projects.",
    description:
      "Things started getting more ambitious. I went deeper into full stack development while experimenting with React, Node.js, MongoDB and Vite. At the same time, I started exploring Python, AI, DevOps, Docker and Linux.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "AI",
      "DevOps",
    ],
    number: "02",
    status: "BUILDING",
  },
  {
    year: "NOW",
    label: "CURRENT CHAPTER",
    title: "Building things I actually want to use.",
    description:
      "Right now I'm focused on building ambitious projects instead of collecting tutorials. CareerUpAI is one of them, alongside a personal AI workspace project that I'm still shaping. There's a lot left to learn - which is exactly the point.",
    tags: [
      "CareerUpAI",
      "AI Workspace",
      "Full Stack",
      "Experimenting",
    ],
    number: "03",
    status: "ACTIVE",
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.45"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.3,
  });

  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-line py-32 md:py-[160px]"
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Ambient light */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[5%] top-[25%] h-[300px] w-[300px] rounded-full bg-accent/[0.035] blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[0%] top-[50%] h-[350px] w-[350px] rounded-full bg-violet-500/[0.025] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1180px] px-8">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <SectionHeading
          eyebrow="05 / Developer Journey"
          title={
            <>
              Still early.
              <br />
              Already moving.
            </>
          }
        />

        {/* =========================================================
            TOP INFORMATION STRIP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 0.8, 0.24, 1],
          }}
          className="mb-24 border border-white/[0.08] bg-white/[0.018] backdrop-blur-xl"
        >
          <div className="grid md:grid-cols-[1.2fr_0.8fr]">

            {/* Left */}
            <div className="relative overflow-hidden border-b border-white/[0.08] p-7 md:border-b-0 md:border-r md:p-9">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full bg-accent shadow-[0_0_15px_rgba(91,110,245,0.8)]" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Current trajectory
                </span>
              </div>

              <h3 className="max-w-[650px] font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                Learning fast.
                <br />
                Building faster.
              </h3>

              <p className="mt-5 max-w-[600px] text-sm leading-7 text-ink-dim">
                I don't expect to know everything yet. The goal is to keep
                improving, keep experimenting, and keep turning ideas into
                things that actually work.
              </p>

              {/* Decorative horizontal line */}
              <div className="mt-8 h-px w-full bg-white/[0.07]" />

              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
                  DEVELOPMENT LOG
                </span>

                <span className="font-mono text-[9px] text-ink-faint">
                  2025 → NOW
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="relative p-7 md:p-9">

              <div className="mb-7 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  Status
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                  <motion.span
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-[6px] w-[6px] rounded-full bg-accent"
                  />
                  Active
                </span>
              </div>

              <div className="space-y-5">

                <div>
                  <div className="mb-2 flex justify-between font-mono text-[9px] uppercase tracking-wider">
                    <span className="text-ink-faint">
                      Curiosity
                    </span>
                    <span className="text-ink-dim">
                      ∞
                    </span>
                  </div>

                  <div className="h-[2px] overflow-hidden bg-white/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between font-mono text-[9px] uppercase tracking-wider">
                    <span className="text-ink-faint">
                      Building
                    </span>
                    <span className="text-ink-dim">
                      ACTIVE
                    </span>
                  </div>

                  <div className="h-[2px] overflow-hidden bg-white/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full bg-accent/70"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between font-mono text-[9px] uppercase tracking-wider">
                    <span className="text-ink-faint">
                      Learning
                    </span>
                    <span className="text-ink-dim">
                      ALWAYS ON
                    </span>
                  </div>

                  <div className="h-[2px] overflow-hidden bg-white/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, delay: 0.4 }}
                      className="h-full bg-violet-400/60"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            TIMELINE
        ========================================================= */}

        <div ref={ref} className="relative">

          {/* Static timeline */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/[0.07]" />

          {/* Animated timeline */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[11px] top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent via-accent/70 to-violet-500"
          />

          <div className="space-y-10">

            {journey.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.16, 0.8, 0.24, 1],
                }}
                className="group relative pl-12 md:pl-20"
              >

                {/* =================================================
                    TIMELINE NODE
                ================================================= */}

                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08 + 0.2,
                  }}
                  className="absolute left-0 top-8 z-10 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-accent/40 bg-bg"
                >
                  <motion.span
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(91,110,245,0)",
                        "0 0 18px rgba(91,110,245,0.8)",
                        "0 0 0 rgba(91,110,245,0)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="h-[7px] w-[7px] rounded-full bg-accent"
                  />
                </motion.div>

                {/* =================================================
                    CARD
                ================================================= */}

                <motion.div
                  whileHover={{
                    y: -5,
                    borderColor:
                      "rgba(91,110,245,0.25)",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative overflow-hidden border border-white/[0.08] bg-white/[0.018] backdrop-blur-xl"
                >

                  {/* Hover light */}
                  <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/[0.05] blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top bar */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 md:px-8">

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-[10px] tracking-[0.18em] text-accent">
                        {item.number}
                      </span>

                      <span className="h-px w-8 bg-white/[0.12]" />

                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                        {item.label}
                      </span>

                    </div>

                    <div className="flex items-center gap-4">

                      <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-ink-faint sm:block">
                        {item.status}
                      </span>

                      <span className="font-mono text-xs tracking-wider text-ink-dim">
                        {item.year}
                      </span>

                    </div>
                  </div>

                  {/* Main content */}
                  <div className="p-6 md:p-8">

                    <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">

                      {/* Title */}
                      <div>
                        <motion.h3
                          whileHover={{
                            x: 5,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="font-display text-2xl font-medium leading-[1.1] tracking-tight text-ink md:text-3xl"
                        >
                          {item.title}
                        </motion.h3>

                        <div className="mt-7 hidden h-px w-16 bg-accent/50 md:block" />
                      </div>

                      {/* Description */}
                      <div>

                        <p className="max-w-[620px] text-sm leading-7 text-ink-dim md:text-[15px]">
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-7 flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              initial={{
                                opacity: 0,
                                y: 8,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                duration: 0.35,
                                delay:
                                  0.25 +
                                  tagIndex * 0.05,
                              }}
                              whileHover={{
                                y: -2,
                                borderColor:
                                  "rgba(91,110,245,0.45)",
                                color: "#edeef2",
                              }}
                              className="border border-white/[0.08] bg-white/[0.015] px-3 py-1.5 font-mono text-[10px] text-ink-faint transition-colors"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Bottom information */}
                  <div className="flex items-center justify-between border-t border-white/[0.07] px-6 py-3 md:px-8">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
                      N.R.B / DEVELOPMENT LOG
                    </span>

                    <div className="flex items-center gap-3">

                      <span className="hidden font-mono text-[9px] text-ink-faint sm:block">
                        2025 — PRESENT
                      </span>

                      <motion.span
                        animate={{
                          opacity: [0.35, 1, 0.35],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                      />

                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}

          </div>
        </div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================= */}

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
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-24 border-t border-white/[0.08] pt-10"
        >
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                05.01
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
                The mindset
              </div>
            </div>

            <div>
              <p className="max-w-[720px] font-display text-xl leading-relaxed tracking-tight text-ink-dim md:text-2xl">
                I know there is a lot left to learn - and that's exactly what
                makes the journey interesting.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-faint">
                  More chapters loading
                </span>

                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="font-mono text-xs text-accent"
                >
                  →
                </motion.span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}