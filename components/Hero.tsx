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

const expertise = ["FULL STACK", "AI SYSTEMS", "BACKEND", "PRODUCT UX"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.94, 0.68]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 1.08]);

  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.4 });

  function onPointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      className="relative min-h-[92svh] overflow-hidden border-b border-white/[0.07] bg-[#07080a] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{
            background: useTransform(
              [smoothX, smoothY],
              ([x, y]) =>
                `radial-gradient(600px circle at ${x}% ${y}%, rgba(104,118,255,0.14), transparent 62%)`
            ),
          }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(110,90,255,0.10),transparent_26%),radial-gradient(circle_at_18%_82%,rgba(69,103,255,0.08),transparent_28%)]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(circle at center,black,transparent 78%)",
            WebkitMaskImage: "radial-gradient(circle at center,black,transparent 78%)",
          }}
        />

        <motion.div
          animate={reducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="absolute right-[-120px] top-[15%] h-[480px] w-[480px] rounded-full border border-white/[0.04]"
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8590ff] shadow-[0_0_26px_8px_rgba(133,144,255,.25)]" />
        </motion.div>

        <motion.div
          animate={reducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute right-[-10px] top-[24%] h-[270px] w-[270px] rounded-full border border-dashed border-white/[0.055]"
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-[1380px] flex-col px-6 pb-7 pt-8 sm:px-8 lg:px-14"
      >
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45 transition-colors hover:text-white"
          >
            NRB / 2026
          </Link>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7b88ff] shadow-[0_0_14px_rgba(123,136,255,.8)]" />
            Open to opportunities
          </div>
        </div>

        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.4fr)_340px] lg:gap-20 lg:py-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.23em] text-[#8993ff]"
            >
              <span className="h-px w-8 bg-[#8993ff]" />
              Full-stack developer building toward AI
            </motion.p>

            <h1 className="font-display font-semibold tracking-[-0.075em]">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.12, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[clamp(4.1rem,10.8vw,9.3rem)] leading-[0.8] text-[#f1f2f5]"
                >
                  NITYANSH
                </motion.span>
              </span>

              <span className="mt-4 flex items-end gap-4 overflow-hidden">
                <motion.span
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[clamp(1.25rem,2.8vw,2.45rem)] leading-none text-white/28"
                >
                  RUPESH BAHADUR
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.68, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-1 hidden h-px w-24 origin-left bg-gradient-to-r from-[#8590ff] to-transparent sm:block"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.7 }}
              className="mt-7 max-w-[620px] text-[15px] leading-7 text-white/48 md:text-base"
            >
              I design and build polished web products, intelligent experiences and strong backend systems — with a focus on products that feel as good as they work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.65 }}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/28"
            >
              {expertise.map((item, index) => (
                <span key={item}>
                  <span className="mr-2 text-[#7b88ff]">0{index + 1}</span>
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.65 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-8 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Explore work
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-8 rounded-full border border-white/[0.13] bg-white/[0.035] px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
              >
                Contact me
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.32, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[340px] lg:mx-0 lg:justify-self-end"
          >
            <div className="group relative">
              <div className="absolute -inset-5 rounded-[34px] bg-[#7d87ff]/[0.05] blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-white/[0.035] p-2 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#111216]">
                  <motion.img
                    style={{ scale: imageScale }}
                    src="/profile.jpg"
                    alt="Portrait of Nityansh Rupesh Bahadur"
                    className="absolute inset-0 h-full w-full object-cover grayscale-[10%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-white/[0.03]" />

                  <motion.div
                    animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/55 backdrop-blur-md"
                  >
                    Lucknow / India
                  </motion.div>

                  <div className="absolute inset-x-5 bottom-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/40">
                      Currently building
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white/90">
                      CareerUpAI
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/[0.10] bg-[#0b0c10]/80 px-4 py-3 backdrop-blur-xl md:block"
              >
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/28">Focus</p>
                <p className="mt-1 text-sm text-white/75">AI × Product × Backend</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
          <span>Building since 2025</span>
          <motion.span
            animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block"
          >
            Scroll to explore ↓
          </motion.span>
          <span>01 / 05</span>
        </div>
      </motion.div>
    </section>
  );
}
