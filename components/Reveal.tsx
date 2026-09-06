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
    offset: ["start 0.96", "start 0.18"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.35,
  });

  const y = useTransform(smoothProgress, [0, 0.35, 1], reducedMotion ? [0, 0, 0] : [72, 12, 0]);
  const x = useTransform(smoothProgress, [0, 0.45, 1], reducedMotion ? [0, 0, 0] : [18, 4, 0]);
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], reducedMotion ? [0, 0, 0] : [1.8, 0.4, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.16, 0.5, 1], [0, 0.35, 0.82, 1]);
  const blur = useTransform(smoothProgress, [0, 0.35, 0.75, 1], reducedMotion ? ["0px", "0px", "0px", "0px"] : ["12px", "5px", "1px", "0px"]);
  const scaleValue = useTransform(smoothProgress, [0, 0.55, 1], scale ? [0.91, 0.975, 1] : [0.97, 0.992, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, x, opacity, scale: scaleValue, rotate, filter: blur }}
      initial={false}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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
    offset: ["start 0.94", "start 0.25"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.62], [0, 1]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.7], [28, 110]);
  const titleY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [42, 0]);
  const titleX = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-12, 0]);
  const titleRotate = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-1.2, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.8, 1], [0, 0.5, 0.9, 1]);

  return (
    <div ref={ref} className="relative mb-16 md:mb-20">
      <div className="flex items-center gap-3">
        <motion.span
          style={{ scaleX: lineScale, width: lineWidth, transformOrigin: "left" }}
          className="block h-px bg-accent shadow-[0_0_14px_rgba(123,136,255,.45)]"
        />
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent"
        >
          {eyebrow}
        </motion.span>
      </div>

      <motion.h2
        style={{ y: titleY, x: titleX, opacity: titleOpacity, rotate: titleRotate }}
        className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]"
      >
        {title}
      </motion.h2>
    </div>
  );
}
