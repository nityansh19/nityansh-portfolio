"use client";

import { motion, useReducedMotion } from "framer-motion";

const items = [
  "CAREERUPAI",
  "FULL STACK",
  "AI SYSTEMS",
  "NEXT.JS",
  "PYTHON",
  "BACKEND",
  "PRODUCT DESIGN",
  "MONGODB",
];

export default function SignalStrip() {
  const reducedMotion = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <section className="overflow-hidden border-b border-white/[0.07] bg-[#090a0d] py-4">
      <motion.div
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center whitespace-nowrap"
      >
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-7 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35 sm:px-10">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-[#7b88ff]/70" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
