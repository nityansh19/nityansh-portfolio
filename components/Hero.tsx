"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";

const particles = [
  { x: "7%", y: "18%", size: 2, delay: 0 },
  { x: "16%", y: "72%", size: 1, delay: 0.8 },
  { x: "29%", y: "13%", size: 2, delay: 1.4 },
  { x: "47%", y: "82%", size: 1, delay: 0.4 },
  { x: "62%", y: "17%", size: 1, delay: 1.1 },
  { x: "76%", y: "68%", size: 2, delay: 1.8 },
  { x: "89%", y: "24%", size: 1, delay: 0.6 },
  { x: "94%", y: "82%", size: 2, delay: 1.6 },
  { x: "5%", y: "45%", size: 1, delay: 2 },
  { x: "69%", y: "42%", size: 1, delay: 1.2 },
  { x: "84%", y: "55%", size: 1, delay: 0.9 },
  { x: "38%", y: "31%", size: 1, delay: 1.7 },
];

function AnimatedLine({
  delay,
  width = "100%",
}: {
  delay: number;
  width?: string;
}) {
  return (
    <motion.span
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        width,
        transformOrigin: "left",
      }}
      className="block h-px bg-white/[0.09]"
    />
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 650], [1, 0.18]);
  const photoY = useTransform(scrollY, [0, 700], [0, -70]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 25,
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;

    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#08090b] px-0 pb-16 pt-28 md:pt-32"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Cursor glow */}
        {!reducedMotion && (
          <motion.div
            style={{
              left: smoothX,
              top: smoothY,
            }}
            className="fixed z-0 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6675ff]/[0.045] blur-[120px]"
          />
        )}

        {/* Central atmosphere */}
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.04, 1],
                  opacity: [0.055, 0.08, 0.055],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[48%] h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(93,105,255,0.26) 0%, rgba(93,105,255,0.07) 30%, transparent 68%)",
          }}
        />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 74%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 74%)",
          }}
        />

        {/* Soft horizontal light */}
        <div
          className="absolute left-0 right-0 top-[42%] h-px opacity-[0.07]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(105,120,255,0.8), transparent)",
          }}
        />

        {/* Particles */}
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white/30"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            animate={
              reducedMotion
                ? undefined
                : {
                    opacity: [0.12, 0.55, 0.12],
                    y: [0, -9, 0],
                  }
            }
            transition={{
              duration: 4 + index * 0.25,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Coordinates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute left-[4%] top-[36%] hidden font-mono text-[8px] uppercase tracking-[0.25em] text-white/[0.13] md:block"
        >
          26.8467° N
          <br />
          80.9462° E
          <br />
          <span className="text-[#6978ff]/40">LUCKNOW / INDIA</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute right-[5%] top-[31%] hidden font-mono text-[8px] uppercase tracking-[0.25em] text-white/[0.12] md:block"
        >
          2026
          <br />
          SYSTEM / 01
          <br />
          <span className="text-[#6978ff]/40">PORTFOLIO ONLINE</span>
        </motion.div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
        className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10"
      >
        {/* =================================================
            TOP META
        ================================================== */}

        <div className="mb-10 flex items-center justify-between md:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.7,
            }}
            className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35"
          >
            NRB <span className="mx-2 text-white/10">/</span> 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.3,
              duration: 0.7,
            }}
            className="hidden items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/25 md:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6978ff] shadow-[0_0_12px_rgba(105,120,255,0.8)]" />
            Digital portfolio
          </motion.div>
        </div>

        {/* =================================================
            IDENTITY
        ================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-20">
          {/* =================================================
              PORTRAIT
          ================================================== */}

          <motion.div
            style={{ y: photoY }}
            initial={{
              opacity: 0,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.4,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-[185px] sm:w-[215px] lg:mx-0 lg:w-[225px]"
          >
            {/* Outer orbit */}
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-6 rounded-full border border-white/[0.07]"
            />

            {/* Dashed orbit */}
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-10 rounded-full border border-dashed border-white/[0.035]"
            />

            {/* Accent orbit */}
            <div className="absolute -inset-6 rounded-full border border-transparent border-r-[#8a6cff]/30 border-t-[#6978ff]/70" />

            {/* Orbiting point */}
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-6"
            >
              <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#6978ff] shadow-[0_0_18px_rgba(105,120,255,0.9)]" />
            </motion.div>

            {/* Portrait frame */}
            <motion.div
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      scale: 1.025,
                    }
              }
              transition={{
                duration: 0.5,
              }}
              className="relative aspect-square overflow-hidden rounded-full border border-white/[0.14] bg-[#101116] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-display text-3xl font-semibold tracking-[-0.04em] text-white/[0.14]">
                  NRB
                </div>

                <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.3em] text-white/[0.14]">
                  Portrait
                </div>
              </div>

              {/* Image */}
              <img
                src="/profile.jpg"
                alt="Portrait of Nityansh Rupesh Bahadur"
                onLoad={() => setImageLoaded(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  imageLoaded
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.05]" />

              {/* Subtle scanning line */}
              {!reducedMotion && (
                <motion.div
                  animate={{
                    y: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 3,
                  }}
                  className="pointer-events-none absolute left-0 right-0 h-[25%] bg-gradient-to-b from-transparent via-white/[0.035] to-transparent"
                />
              )}
            </motion.div>

            {/* Portrait metadata */}
            <div className="absolute -bottom-10 left-0 right-0 flex justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
              <span>NRB / 01</span>
              <span>26.84°N</span>
            </div>
          </motion.div>

          {/* =================================================
              INTRO
          ================================================== */}

          <div>
            {/* =================================================
                AVAILABILITY
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.55,
                duration: 0.7,
              }}
              className="mb-7 flex flex-wrap items-center gap-3"
            >
              {/* Main availability pill */}
              <motion.div
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-[#6978ff]/20 bg-[#6978ff]/[0.055] px-4 py-2.5 backdrop-blur-xl"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-[#6978ff]/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Status dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6978ff] opacity-40" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#6978ff] shadow-[0_0_15px_rgba(105,120,255,0.9)]" />
                </span>

                <span className="relative font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-white/80">
                  Open to opportunities
                </span>

                <span className="relative text-[11px] text-[#6978ff]">
                  →
                </span>
              </motion.div>

              {/* Opportunity types */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-[8px] uppercase tracking-[0.13em] text-white/25">
                <span>Internships</span>
                <span className="text-[#6978ff]/50">•</span>
                <span>Jobs</span>
                <span className="text-[#6978ff]/50">•</span>
                <span>Collaborations</span>
              </div>
            </motion.div>

            {/* =================================================
                ROLE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.7,
                duration: 0.7,
              }}
              className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[0.24em] text-[#7784ff]"
            >
              <span className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#7784ff]" />
                Product Engineer
              </span>

              <span className="text-white/15">/</span>

              <span className="text-white/30">
                Lucknow, India
              </span>
            </motion.div>

            {/* =================================================
                NAME
            ================================================== */}

            <h1 className="font-display font-semibold tracking-[-0.055em]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.75,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block text-[clamp(3.1rem,7vw,6.6rem)] leading-[0.88] text-[#edeef2]"
                >
                  NITYANSH
                </motion.span>
              </span>

              <span className="mt-3 block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.88,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block text-[clamp(2.5rem,5.8vw,5.5rem)] leading-[0.9] text-[#6978ff]"
                >
                  RUPESH BAHADUR
                </motion.span>
              </span>
            </h1>

            {/* =================================================
                POSITIONING
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.15,
                duration: 0.65,
              }}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35"
            >
              <span>
                <span className="mr-2 text-[#6978ff]">01</span>
                Builder
              </span>

              <span>
                <span className="mr-2 text-[#6978ff]">02</span>
                Problem Solver
              </span>

              <span>
                <span className="mr-2 text-[#6978ff]">03</span>
                Lifelong Learner
              </span>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.3,
                duration: 0.7,
              }}
              className="mt-8 max-w-[610px] text-[15px] leading-7 text-white/50 md:text-[17px] md:leading-8"
            >
              I build ambitious digital experiences where logic,
              creativity, and technology meet.
            </motion.p>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.45,
                duration: 0.7,
              }}
              className="mt-9 flex flex-wrap items-center gap-7"
            >
              {/* Explore work */}
              <motion.a
                href="#projects"
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative flex items-center gap-5 overflow-hidden bg-[#edeef2] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#08090b] transition-shadow duration-500 hover:shadow-[0_15px_50px_rgba(105,120,255,0.18)]"
              >
                <span className="relative z-10">
                  Explore Work
                </span>

                <motion.span
                  className="relative z-10 text-[#6978ff]"
                  whileHover={{
                    x: 4,
                    y: -3,
                  }}
                >
                  ↗
                </motion.span>

                <motion.span
                  className="absolute inset-0 bg-[#6978ff]"
                  initial={{
                    x: "-100%",
                  }}
                  whileHover={{
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </motion.a>

              {/* Resume */}
              <motion.a
                href="/Nityansh-Rupesh-Bahadur-Resume.pdf"
                download
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        x: 4,
                      }
                }
                className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
              >
                Download Resume

                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            RECRUITER INFORMATION STRIP
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.7,
            duration: 0.8,
          }}
          className="mt-20 md:mt-24"
        >
          <AnimatedLine delay={2.7} />

          <div className="grid md:grid-cols-3">
            {/* CURRENTLY BUILDING */}

            <motion.div
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              className="border-b border-white/[0.08] py-6 md:border-b-0 md:border-r md:pr-8"
            >
              <div className="mb-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                <motion.span
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: [0.35, 1, 0.35],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-[#6978ff] shadow-[0_0_12px_rgba(105,120,255,0.8)]"
                />

                Currently Building
              </div>

              <div className="font-display text-[16px] text-white/80">
                CareerUpAI
              </div>

              <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                AI-powered career platform
              </div>
            </motion.div>

            {/* CURRENT FOCUS */}

            <motion.div
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              className="border-b border-white/[0.08] py-6 md:border-b-0 md:border-r md:px-8"
            >
              <div className="mb-3 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                Current Focus
              </div>

              <div className="font-mono text-[9px] uppercase tracking-[0.12em] leading-5 text-white/45">
                Python
                <span className="mx-2 text-[#6978ff]/50">·</span>
                AI
                <span className="mx-2 text-[#6978ff]/50">·</span>
                Full Stack
                <span className="mx-2 text-[#6978ff]/50">·</span>
                DevOps
              </div>
            </motion.div>

            {/* OPEN TO */}

            <motion.div
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              className="py-6 md:pl-8"
            >
              <div className="mb-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                Open To
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[9px] uppercase tracking-[0.12em] leading-5 text-white/45">
                <span>Internships</span>
                <span className="text-[#6978ff]/50">·</span>
                <span>Jobs</span>
                <span className="text-[#6978ff]/50">·</span>
                <span>Collaborations</span>
              </div>
            </motion.div>
          </div>

          <AnimatedLine delay={2.8} />
        </motion.div>
      </motion.div>

      {/* =====================================================
          BOTTOM LEFT SECTION MARKER
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="pointer-events-none absolute bottom-9 left-6 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 md:left-10 md:block"
      >
        <div className="mb-2 text-[#6978ff]/70">
          01 / 06
        </div>

        INTRODUCTION
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2.9,
          duration: 0.7,
        }}
        className="absolute bottom-8 right-6 hidden items-center gap-4 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 transition-colors hover:text-white/60 md:right-10 md:flex"
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, 5, 0],
                }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#6978ff]"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}