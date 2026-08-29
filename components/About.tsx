"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { SectionHeading } from "./Reveal";

const pipeline = [
  {
    number: "01",
    title: "Ideas",
    short: "THINK",
    description:
      "Start with a problem worth solving. I like exploring ambitious ideas before jumping straight into code.",
  },
  {
    number: "02",
    title: "Logic",
    short: "STRUCTURE",
    description:
      "Break complexity into systems, understand the moving pieces, and figure out how everything should actually work.",
  },
  {
    number: "03",
    title: "Code",
    short: "BUILD",
    description:
      "Turn the system into clean, functional software with attention to performance, usability, and detail.",
  },
  {
    number: "04",
    title: "Product",
    short: "SHIP",
    description:
      "The final goal isn't just code. It's creating something people can actually use.",
  },
];

const facts = [
  {
    label: "AGE",
    value: "21",
  },
  {
    label: "BASED IN",
    value: "LUCKNOW",
  },
  {
    label: "FOCUS",
    value: "FULL STACK",
  },
  {
    label: "STATUS",
    value: "BUILDING",
  },
];

const exploring = [
  "Python",
  "Artificial Intelligence",
  "DevOps",
  "Docker",
  "Linux",
];

export default function About() {
  const reducedMotion = useReducedMotion();

  const [activePipeline, setActivePipeline] = useState(0);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line bg-bg py-32 md:py-[170px]"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* subtle radial light */}

        <div className="absolute left-[35%] top-[25%] h-[500px] w-[500px] rounded-full bg-accent/[0.025] blur-[140px]" />

        {/* grid */}

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <SectionHeading
          eyebrow="01 / About"
          title={
            <>
              More than
              <br />
              just code.
            </>
          }
        />

        {/* =====================================================
            INTRO / PROFILE
        ====================================================== */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* LEFT COLUMN */}

          <div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="max-w-[520px] text-[17px] leading-8 text-ink-dim">
                I&apos;m{" "}
                <span className="text-white">Nityansh</span>, a
                21-year-old developer from Lucknow, India, focused
                on building ambitious digital products where
                engineering meets creativity.
              </p>

              <p className="mt-7 max-w-[520px] text-[15px] leading-7 text-ink-faint">
                I enjoy projects that force me to think deeply,
                solve difficult problems, understand systems, and
                learn something new along the way.
              </p>

              <p className="mt-7 max-w-[520px] text-[15px] leading-7 text-ink-faint">
                I&apos;m not interested in building projects just
                to add another repository to GitHub. I want to
                understand <span className="text-ink-dim">why</span>{" "}
                something works, make it better, and eventually turn
                the idea into something people can actually use.
              </p>
            </motion.div>

            {/* =================================================
                PERSONAL IDENTITY PANEL
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-12 overflow-hidden border border-white/[0.08] bg-white/[0.018]"
            >

              {/* panel header */}

              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent">
                  Developer profile
                </div>

                <div className="font-mono text-[8px] text-white/15">
                  NRB / 001
                </div>
              </div>

              {/* facts */}

              <div className="grid grid-cols-2 sm:grid-cols-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    whileHover={{
                      backgroundColor:
                        "rgba(91,110,245,0.045)",
                    }}
                    className={`group relative p-5 transition-colors duration-300 ${
                      index !== facts.length - 1
                        ? "border-r border-white/[0.07]"
                        : ""
                    }`}
                  >
                    <div className="font-mono text-[8px] tracking-[0.18em] text-white/20">
                      {fact.label}
                    </div>

                    <div className="mt-3 font-display text-[17px] font-medium tracking-tight text-white/75 transition-colors duration-300 group-hover:text-white">
                      {fact.value}
                    </div>

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* =================================================
                CURRENTLY EXPLORING
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-10"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-accent/50" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Currently exploring
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {exploring.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="cursor-default border border-white/[0.08] bg-white/[0.015] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE — INTERACTIVE PIPELINE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >

            {/* decorative coordinates */}

            <div className="mb-4 flex justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-white/15">
              <span>Development pipeline</span>

              <span>IDEA → PRODUCT</span>
            </div>

            {/* MAIN PANEL */}

            <div className="relative overflow-hidden border border-white/[0.1] bg-[#090a0e]/80 shadow-[0_40px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">

              {/* top bar */}

              <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-5">

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(91,110,245,0.8)]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                    system / workflow
                  </span>
                </div>

                <div className="flex gap-1">
                  <span className="h-1 w-1 rounded-full bg-white/10" />
                  <span className="h-1 w-1 rounded-full bg-white/10" />
                  <span className="h-1 w-1 rounded-full bg-white/10" />
                </div>
              </div>

              {/* pipeline */}

              <div>
                {pipeline.map((item, index) => {
                  const active = activePipeline === index;

                  return (
                    <motion.button
                      key={item.title}
                      type="button"
                      onMouseEnter={() =>
                        setActivePipeline(index)
                      }
                      onFocus={() =>
                        setActivePipeline(index)
                      }
                      whileHover={{
                        x: 5,
                      }}
                      className={`group relative block w-full border-b border-white/[0.07] text-left transition-all duration-500 ${
                        active
                          ? "bg-accent/[0.045]"
                          : "bg-transparent"
                      }`}
                    >
                      {/* active indicator */}

                      <motion.span
                        animate={{
                          width: active ? 3 : 0,
                        }}
                        className="absolute left-0 top-0 h-full bg-accent"
                      />

                      <div className="flex items-center gap-5 px-5 py-7 sm:px-7">

                        {/* number */}

                        <span
                          className={`font-mono text-[8px] transition-colors duration-300 ${
                            active
                              ? "text-accent"
                              : "text-white/15"
                          }`}
                        >
                          {item.number}
                        </span>

                        {/* title */}

                        <div className="min-w-0 flex-1">

                          <div
                            className={`font-display text-[19px] font-medium tracking-tight transition-colors duration-300 ${
                              active
                                ? "text-white"
                                : "text-white/45"
                            }`}
                          >
                            {item.title}
                          </div>

                          <motion.div
                            initial={false}
                            animate={{
                              height: active ? "auto" : 0,
                              opacity: active ? 1 : 0,
                              marginTop: active ? 8 : 0,
                            }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-[390px] text-[12px] leading-5 text-white/30">
                              {item.description}
                            </p>
                          </motion.div>
                        </div>

                        {/* status */}

                        <div className="hidden text-right sm:block">
                          <div
                            className={`font-mono text-[7px] uppercase tracking-[0.16em] transition-colors ${
                              active
                                ? "text-accent/70"
                                : "text-white/10"
                            }`}
                          >
                            {item.short}
                          </div>

                          <div className="mt-2 font-mono text-[7px] text-white/10">
                            →
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* =================================================
                  PIPELINE FOOTER
              ================================================== */}

              <div className="flex items-center justify-between px-5 py-5 sm:px-7">

                <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/15">
                  Always learning
                </div>

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    {!reducedMotion && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                    )}

                    <span className="relative h-1 w-1 rounded-full bg-accent" />
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-accent/60">
                    System active
                  </span>
                </div>
              </div>

              {/* decorative center glow */}

              <div className="pointer-events-none absolute bottom-[18%] right-[-100px] h-[220px] w-[220px] rounded-full bg-accent/[0.035] blur-[80px]" />
            </div>

            {/* =================================================
                MINI PHILOSOPHY
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-7 flex items-start gap-4"
            >
              <span className="mt-2 h-px w-8 shrink-0 bg-accent/40" />

              <p className="max-w-[430px] font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-white/20">
                Think deeply.
                <br />
                Build intentionally.
                <br />
                Keep improving.
              </p>
            </motion.div>

          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-28 border-t border-white/[0.07] pt-8 md:mt-36"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/60">
                The goal
              </div>

              <div className="mt-4 max-w-[760px] font-display text-[clamp(1.7rem,3.5vw,3.3rem)] leading-[1.05] tracking-[-0.045em] text-white/70">
                Don&apos;t just learn the technology.
                <span className="text-white">
                  {" "}
                  Learn how to create with it.
                </span>
              </div>
            </div>

            <div className="shrink-0 font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
              N.R.B / 2026
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}