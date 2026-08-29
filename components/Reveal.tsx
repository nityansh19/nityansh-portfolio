"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  scale = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });

  const y = useTransform(
    smoothProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [55, 0]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.18, 1],
    [0, 0.65, 1]
  );

  const blur = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    reducedMotion ? ["0px", "0px", "0px"] : ["8px", "2px", "0px"]
  );

  const scaleValue = useTransform(
    smoothProgress,
    [0, 1],
    scale ? [0.94, 1] : [0.985, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale: scaleValue,
        filter: blur,
      }}
      initial={false}
      transition={{
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PREMIUM SECTION HEADING
========================================================= */

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0, 0.7],
    [0, 1]
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [30, 0]
  );

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0, 0.7, 1]
  );

  return (
    <div ref={ref} className="mb-16 md:mb-20">
      {/* Eyebrow */}

      <div className="flex items-center gap-3">
        <motion.span
          style={{
            scaleX: lineScale,
            transformOrigin: "left",
          }}
          className="block h-px w-[28px] bg-accent"
        />

        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
      </div>

      {/* Title */}

      <motion.h2
        style={{
          y: titleY,
          opacity: titleOpacity,
        }}
        className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]"
      >
        {title}
      </motion.h2>
    </div>
  );
}