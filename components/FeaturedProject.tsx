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
import { useRef } from "react";

type FlagshipProps = {
  href: string;
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  accent: "indigo" | "violet";
  tags: string[];
};

function FlagshipProject({
  href,
  number,
  eyebrow,
  title,
  description,
  accent,
  tags,
}: FlagshipProps) {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 24, mass: 0.45 });
  const sy = useSpring(my, { stiffness: 120, damping: 24, mass: 0.45 });

  const rotateX = useTransform(sy, [0, 1], reducedMotion ? [0, 0] : [2.6, -2.6]);
  const rotateY = useTransform(sx, [0, 1], reducedMotion ? [0, 0] : [-2.6, 2.6]);
  const glowX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(sy, [0, 1], ["0%", "100%"]);

  const glow =
    accent === "violet"
      ? "rgba(142,105,255,0.16)"
      : "rgba(91,110,245,0.16)";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 42, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1400 }}
    >
      <Link href={href} className="group block">
        <motion.div
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            mx.set((event.clientX - rect.left) / rect.width);
            my.set((event.clientY - rect.top) / rect.height);
          }}
          onMouseLeave={() => {
            mx.set(0.5);
            my.set(0.5);
          }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-[30px] border border-white/[0.10] bg-[#090a0e] transition-all duration-500 group-hover:border-white/[0.17] group-hover:shadow-[0_40px_130px_rgba(0,0,0,.44)]"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([gx, gy]) =>
                  `radial-gradient(520px circle at ${gx} ${gy}, ${glow}, transparent 68%)`
              ),
            }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:54px_54px]" />

          <div className="relative z-10 grid min-h-[420px] gap-10 p-7 sm:p-10 md:grid-cols-[1.08fr_0.92fr] md:items-end md:p-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/28">
                <span className="text-accent/80">{number}</span>
                <span className="h-px w-7 bg-white/10" />
                <span>{eyebrow}</span>
              </div>

              <div className="mt-7 overflow-hidden">
                <motion.h3
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
                >
                  {title}
                </motion.h3>
              </div>

              <p className="mt-6 max-w-xl text-sm leading-7 text-ink-dim sm:text-base">
                {description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-[24px] border border-white/[0.08] bg-black/20">
              <motion.div
                animate={reducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute h-[190px] w-[190px] rounded-full border border-white/[0.07]"
              />
              <motion.div
                animate={reducedMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
                className="absolute h-[128px] w-[128px] rounded-full border border-dashed border-white/[0.09]"
              />
              <div className="relative z-10 rounded-[20px] border border-white/[0.10] bg-[#0d0e13]/85 px-6 py-5 text-center shadow-[0_24px_70px_rgba(0,0,0,.4)] backdrop-blur-xl">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Interactive case study
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white/80">
                  Open project
                </p>
                <motion.span
                  className="mt-3 inline-block text-xl text-accent"
                  animate={reducedMotion ? undefined : { x: [0, 5, 0], y: [0, -4, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  ↗
                </motion.span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reducedMotion ? [0, 0, 0] : [42, 0, -24]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-line py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(91,110,245,.07),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <motion.div
          style={{ y: headingY }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
              02 / Flagship work
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Two products that define where I&apos;m going.
            </h2>
          </div>

          <Link
            href="/projects"
            className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
          >
            View complete archive ↗
          </Link>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          <FlagshipProject
            href="/projects/careerupai"
            number="01"
            eyebrow="AI · FULL STACK · PRODUCT"
            title={
              <>
                CareerUp<span className="text-accent">AI</span>
              </>
            }
            description="An AI-powered career platform built around resumes, profiles, guidance and smarter career decisions — combining product thinking, full-stack engineering and applied AI."
            accent="indigo"
            tags={["AI workflows", "Career intelligence", "Full stack", "Product UX"]}
          />

          <FlagshipProject
            href="/projects/personal-ai"
            number="02"
            eyebrow="AI · AUTOMATION · WORKSPACE"
            title={
              <>
                Personal AI
                <span className="text-white/28"> / JARVIS</span>
              </>
            }
            description="A personal workspace AI exploring context, automation, developer workflows and useful tools in one place — my long-term experiment in building a system that can actually assist."
            accent="violet"
            tags={["Context", "Automation", "Developer tools", "AI systems"]}
          />
        </div>
      </div>
    </section>
  );
}
