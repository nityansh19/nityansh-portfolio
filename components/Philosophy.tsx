"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Reveal } from "./Reveal";

const words = ["BUILD.", "LEARN.", "BREAK.", "IMPROVE.", "REPEAT."];

function Word({ progress, index, total, children }: { progress: MotionValue<number>; index: number; total: number; children: string }) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const scale = useTransform(progress, [start, end], [0.85, 1]);
  const blur = useTransform(progress, [start, end], [8, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span style={{ opacity, scale, filter }} className="inline-block mr-4">
      {children}
    </motion.span>
  );
}

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "start 0.15"] });

  return (
    <section id="philosophy" className="py-[180px] text-center">
      <div className="max-w-[1180px] mx-auto px-8">
        <div
          ref={ref}
          className="font-display font-bold text-[clamp(2.6rem,9vw,6rem)] leading-[1.02] tracking-tight"
        >
          {words.map((w, i) => (
            <Word key={w} progress={scrollYProgress} index={i} total={words.length}>
              {w}
            </Word>
          ))}
        </div>
        <Reveal delay={0.1} className="max-w-[560px] mx-auto mt-11 text-ink-dim text-[17px]">
          Great developers are not defined by the number of technologies they know, but by their ability to think,
          adapt, solve, and create.
        </Reveal>
      </div>
    </section>
  );
}
