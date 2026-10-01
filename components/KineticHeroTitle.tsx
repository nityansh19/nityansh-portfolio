"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

const NAME = "NITYANSH";

export default function KineticHeroTitle() {
  const reducedMotion = useReducedMotion() ?? false;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.35 });

  const rotateY = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-8, 8]);
  const rotateX = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [6, -6]);
  const depthX = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-10, 10]);
  const depthY = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [-7, 7]);

  return (
    <div
      className="relative w-full max-w-[920px] [perspective:1400px]"
      onMouseMove={(event) => {
        if (reducedMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
        my.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <motion.div
          aria-hidden
          style={{ x: depthX, y: depthY, z: -36 }}
          className="pointer-events-none absolute -left-1 top-1 select-none whitespace-nowrap font-display text-[clamp(2.75rem,12vw,6.6rem)] font-extrabold leading-[0.82] tracking-[-0.075em] sm:text-[clamp(3.5rem,8vw,6.6rem)] lg:text-[clamp(4.25rem,6vw,6.6rem)] text-accent/[0.12] blur-[1px] "
        >
          {NAME}
        </motion.div>

        <h1 className="relative font-display font-extrabold tracking-[-0.075em]">
          <span className="block whitespace-nowrap">
            {NAME.split("").map((letter, index) => (
              <span key={letter + index} className="inline-block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={reducedMotion ? false : { y: "115%", rotateX: -82, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + index * 0.045,
                    duration: 0.82,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
                  className="inline-block bg-gradient-to-b from-white via-[#f4f5ff] to-white/55 bg-clip-text text-[clamp(3rem,15vw,7.6rem)] leading-[0.82] text-transparent drop-shadow-[0_12px_32px_rgba(0,0,0,.38)] "
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </span>

          <span className="mt-3 flex items-end gap-4 overflow-hidden">
            <motion.span
              initial={reducedMotion ? false : { y: "115%", rotateX: -40, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.48, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(1.05rem,5vw,2.35rem)] font-semibold leading-none tracking-[-0.045em] text-white/38 sm:text-white/28"
            >
              RUPESH BAHADUR
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.78, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-1 hidden h-px w-24 origin-left bg-gradient-to-r from-accent via-[#8f78ff] to-transparent sm:block"
            />
          </span>
        </h1>

        <motion.div
          aria-hidden
          animate={reducedMotion ? undefined : { y: [0, -7, 0], rotateZ: [-1.5, 1.2, -1.5] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ z: 50 }}
          className="pointer-events-none absolute right-0 top-[-28px] hidden border border-white/[0.08] bg-black/30 px-3 py-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/35 backdrop-blur-md xl:block"
        >
          engineer / builder
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute -left-[72px] top-[68%] hidden -translate-y-1/2 -rotate-90 font-mono text-[7px] uppercase tracking-[0.32em] text-white/[0.10] 2xl:block">
        full stack · artificial intelligence · product systems
      </div>
    </div>
  );
}
