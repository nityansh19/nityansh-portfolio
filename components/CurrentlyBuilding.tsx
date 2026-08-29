"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { SectionHeading } from "./Reveal";
import MagneticButton from "./MagneticButton";
import { careerUpFeatures } from "@/lib/data";

export default function CurrentlyBuilding() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  /* =========================================================
     MOUSE / 3D INTERACTION
  ========================================================= */

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const sx = useSpring(mx, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const sy = useSpring(my, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const rotateX = useTransform(
    sy,
    [0, 1],
    reducedMotion ? [0, 0] : [4, -4]
  );

  const rotateY = useTransform(
    sx,
    [0, 1],
    reducedMotion ? [0, 0] : [-4, 4]
  );

  const glowX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(sy, [0, 1], ["0%", "100%"]);

  /* =========================================================
     SCROLL ANIMATION
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });

  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [70, -25]
  );

  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reducedMotion ? [1, 1, 1] : [0.96, 1, 0.985]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.9, 1],
    [0.3, 1, 1, 0.85]
  );

  const previewY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [35, -20]
  );

  /* =========================================================
     MOUSE HANDLERS
  ========================================================= */

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section
      id="building"
      className="relative overflow-hidden border-t border-line bg-bg-elev py-32 md:py-[170px]"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [-30, 30, -30],
                  y: [20, -20, 20],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[20%] h-[420px] w-[420px] rounded-full bg-accent/[0.035] blur-[120px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(91,110,245,0.035),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        {/* ===================================================
            SECTION HEADING
        =================================================== */}

        <SectionHeading
          eyebrow="02 / Currently Building"
          title={
            <>
              A career platform,
              <br />
              built with AI at its core.
            </>
          }
        />

        {/* ===================================================
            MAIN PRODUCT FRAME
        =================================================== */}

        <motion.div
          ref={ref}
          style={{
            y: cardY,
            scale: cardScale,
            opacity: cardOpacity,
            perspective: 1400,
          }}
        >
          <motion.div
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="group relative overflow-hidden rounded-[26px] border border-white/[0.11] bg-white/[0.025] shadow-[0_50px_140px_rgba(0,0,0,0.42)] backdrop-blur-2xl"
          >
            {/* =================================================
                MOUSE FOLLOWING LIGHT
            ================================================= */}

            <motion.div
              className="pointer-events-none absolute inset-0 z-0 opacity-70"
              style={{
                background: useTransform(
                  [glowX, glowY],
                  ([gx, gy]) =>
                    `radial-gradient(420px circle at ${gx} ${gy}, rgba(91,110,245,0.13), transparent 70%)`
                ),
              }}
            />

            {/* =================================================
                PREMIUM GLASS REFLECTION
            ================================================= */}

            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.035)_45%,transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* =================================================
                TOP BAR
            ================================================= */}

            <div className="relative z-20 flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                  PRODUCT / 001
                </span>

                <span className="h-px w-8 bg-white/10" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                  AI PLATFORM
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-2 w-2 rounded-full bg-accent/30 animate-ping" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,0.9)]" />
                </span>

                Active
              </div>
            </div>

            {/* =================================================
                PROJECT INTRO
            ================================================= */}

            <div className="relative z-20 flex flex-wrap items-start justify-between gap-8 px-7 pb-7 pt-10 sm:px-12 sm:pb-8 sm:pt-12">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="font-display text-[clamp(2.7rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
                >
                  CareerUp
                  <span className="text-accent">AI</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25"
                >
                  Intelligent career infrastructure
                </motion.div>
              </div>

              <div className="max-w-[300px] text-sm leading-6 text-ink-dim sm:text-right">
                An AI-powered career platform designed to help users build
                stronger professional profiles and make better career
                decisions.
              </div>
            </div>

            {/* =================================================
                PRODUCT PREVIEW
            ================================================= */}

            <motion.div
              style={{ y: previewY }}
              className="relative z-20 mx-5 mb-8 h-[320px] overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30 sm:mx-10 sm:mb-10 md:h-[390px]"
            >
              {/* Grid */}

              <div className="pointer-events-none absolute inset-0 opacity-50">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                    maskImage:
                      "radial-gradient(circle at center, black, transparent 78%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at center, black, transparent 78%)",
                  }}
                />
              </div>

              {/* Central atmosphere */}

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[70px]" />

              {/* Rotating orbital ring */}

              <motion.div
                animate={reducedMotion ? undefined : { rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[0.14] md:h-[290px] md:w-[290px]"
              >
                <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_18px_rgba(91,110,245,0.9)]" />
              </motion.div>

              {/* Inner ring */}

              <motion.div
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
              >
                <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/40" />
              </motion.div>

              {/* Center interface */}

              <motion.div
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        y: [0, -7, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-10 w-[220px] -translate-x-1/2 -translate-y-1/2 sm:w-[270px]"
              >
                <div className="rounded-xl border border-white/[0.12] bg-[#0b0c11]/80 p-4 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                      Career Intelligence
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(91,110,245,0.8)]" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-[82%] rounded-full bg-white/[0.08]" />
                    <div className="h-2 w-[64%] rounded-full bg-white/[0.055]" />
                    <div className="h-2 w-[72%] rounded-full bg-white/[0.055]" />
                  </div>

                  <div className="mt-5 flex items-end gap-1">
                    {[35, 55, 42, 70, 58, 84, 68, 92].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 4 }}
                          whileInView={{ height }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.06,
                          }}
                          className="flex-1 rounded-t-sm bg-accent/40"
                        />
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Preview label */}

              <div className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                Interface preview / in development
              </div>

              <div className="absolute bottom-5 right-5 font-mono text-[8px] uppercase tracking-[0.2em] text-accent/60">
                01
              </div>
            </motion.div>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="relative z-20 mx-5 grid overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.015] sm:mx-10 sm:grid-cols-2 lg:grid-cols-4">
              {careerUpFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 20,
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
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(91,110,245,0.055)",
                  }}
                  className="group/feature border-b border-white/[0.07] p-6 transition-colors duration-500 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-accent/60">
                      0{index + 1}
                    </span>

                    <span className="translate-x-[-4px] font-mono text-xs text-white/10 transition-all duration-500 group-hover/feature:translate-x-0 group-hover/feature:text-accent">
                      ↗
                    </span>
                  </div>

                  <b className="mb-2 block font-body text-[13px] font-medium text-ink">
                    {feature.title}
                  </b>

                  <p className="font-mono text-[11px] leading-5 text-ink-faint">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                BOTTOM ACTION BAR
            ================================================= */}

            <div className="relative z-20 flex flex-wrap items-center justify-between gap-6 px-7 pb-9 pt-9 sm:px-12 sm:pb-12">
              <div className="max-w-[380px] font-mono text-[9px] uppercase leading-5 tracking-[0.14em] text-white/20">
                Building an intelligent layer between
                <span className="text-white/35"> people </span>
                and
                <span className="text-white/35"> opportunity.</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <MagneticButton href="#projects">
                  View Project →
                </MagneticButton>

                <MagneticButton
                  href={"https://github.com/" + "nityansh19"}
                  target="_blank"
                  variant="ghost"
                >
                  GitHub →
                </MagneticButton>
              </div>
            </div>

            {/* =================================================
                EDGE HIGHLIGHT
            ================================================= */}

            <div className="pointer-events-none absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}