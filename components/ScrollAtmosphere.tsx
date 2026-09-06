"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const glyphs = ["//", "+", "×", "⌁", "01", "∞"];

export default function ScrollAtmosphere({ index = 0 }: { index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const beamY = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 0.75, 0.55, 0]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["20%", "78%"]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: beamY, opacity: beamOpacity }}
        className="absolute left-[-10%] top-0 h-px w-[120%] rotate-[-7deg] bg-accent shadow-[0_0_18px_rgba(91,110,245,.75)]"
      />
      <motion.div
        style={{ left: glowX }}
        className="absolute top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-accent/[0.045] blur-[100px]"
      />

      {!reducedMotion && (
        <>
          {[0, 1, 2].map((line) => (
            <motion.span
              key={line}
              initial={{ x: "-15vw", opacity: 0 }}
              whileInView={{ x: "115vw", opacity: [0, 0.4, 0] }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 2.8 + line * 0.7,
                delay: index * 0.18 + line * 0.5,
                repeat: Infinity,
                repeatDelay: 4 + line,
                ease: "easeInOut",
              }}
              className="absolute left-0 h-px w-24 bg-white/20 blur-[0.5px]"
              style={{ top: `${34 + line * 8}%`, rotate: `${-8 + line * 1.5}deg` }}
            />
          ))}

          {glyphs.map((glyph, i) => (
            <motion.span
              key={`${glyph}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: [0, 0.28, 0], y: [18, 0, -14] }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 4.5, delay: i * 0.45 + index * 0.12, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
              className="absolute font-mono text-[9px] tracking-[0.2em] text-accent/30"
              style={{ left: `${12 + ((i * 17 + index * 9) % 74)}%`, top: `${20 + ((i * 13) % 62)}%` }}
            >
              {glyph}
            </motion.span>
          ))}
        </>
      )}
    </div>
  );
}
