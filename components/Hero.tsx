"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const animeMarks = ["閃", "創", "01", "AI", "夢"];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 700], [0, 55]);
  const heroY = useSpring(rawY, { stiffness: 80, damping: 30 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#07080a] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(103,120,255,0.16),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(145,92,255,0.08),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(circle at center,black,transparent 78%)", WebkitMaskImage: "radial-gradient(circle at center,black,transparent 78%)" }} />
        <motion.div animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }} className="absolute -right-28 top-[18%] h-[520px] w-[520px] rounded-full border border-white/[0.035]">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8590ff] shadow-[0_0_24px_8px_rgba(133,144,255,.25)]" />
        </motion.div>
        <motion.div animate={reducedMotion ? undefined : { rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute -right-10 top-[25%] h-[340px] w-[340px] rounded-full border border-dashed border-white/[0.045]" />
        <div className="absolute left-[8%] top-[30%] hidden h-28 w-1 overflow-hidden md:block">
          <motion.div animate={reducedMotion ? undefined : { y: [0, -112] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} className="h-28 w-px bg-gradient-to-b from-transparent via-[#8590ff]/70 to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />
      </div>

      <motion.div style={{ y: heroY }} className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1380px] flex-col px-6 pb-8 pt-28 md:px-10 md:pt-32 lg:px-14">
        <header className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">NRB / 2026</span>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/45">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7b88ff] shadow-[0_0_14px_rgba(123,136,255,.8)]" />
            Available for opportunities
          </div>
        </header>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[minmax(0,1.35fr)_330px] lg:gap-20 lg:py-16">
          <div className="max-w-[900px]">
            <motion.p initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8590ff]">
              <span className="h-px w-8 bg-[#8590ff]" />
              Full Stack · AI · Product Engineering
            </motion.p>

            <div className="relative">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1.15, duration: 1.8, repeat: Infinity, repeatDelay: 5 }} className="pointer-events-none absolute -left-5 top-1/2 hidden -translate-y-1/2 font-mono text-[9px] tracking-[0.35em] text-[#8590ff]/50 lg:block">斬</motion.div>
              <h1 className="font-display font-semibold tracking-[-0.075em]">
                <span className="block overflow-hidden">
                  <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.18, duration: 0.95, ease: [0.16, 1, 0.3, 1] }} className="block text-[clamp(4.6rem,11vw,9.5rem)] leading-[0.78] text-[#f0f1f4]">NITYANSH</motion.span>
                </span>
                <span className="mt-4 flex items-center gap-4 overflow-hidden">
                  <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.28, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block text-[clamp(1.35rem,3vw,2.6rem)] leading-none text-white/30">RUPESH BAHADUR</motion.span>
                  <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.85, type: "spring", stiffness: 180 }} className="hidden h-px w-20 bg-gradient-to-r from-[#8590ff] to-transparent sm:block" />
                </span>
              </h1>
            </div>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }} className="mt-7 max-w-[610px] text-[15px] leading-7 text-white/48 md:text-base md:leading-7">
              I build polished digital products, intelligent systems, and strong backends — turning ambitious ideas into useful software.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68, duration: 0.65 }} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
              {[["01", "Full Stack"], ["02", "AI Systems"], ["03", "Backend"], ["04", "Product UX"]].map(([number, label]) => (
                <span key={number}><span className="mr-2 text-[#7b88ff]">{number}</span>{label}</span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.65 }} className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex items-center gap-7 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1">Explore my work<span className="transition-transform duration-300 group-hover:translate-x-1">↗</span></Link>
              <Link href="/contact" className="group inline-flex items-center gap-7 rounded-full border border-white/[0.13] bg-white/[0.035] px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">Let’s connect<span className="transition-transform duration-300 group-hover:translate-x-1">→</span></Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 35, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.42, duration: 0.95, ease: [0.16, 1, 0.3, 1] }} className="mx-auto w-full max-w-[330px] lg:mx-0 lg:justify-self-end">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.035] p-2 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#111216]">
                <div className="absolute inset-0 flex items-center justify-center"><span className="font-display text-5xl font-semibold tracking-[-0.06em] text-white/[0.08]">NRB</span></div>
                <img src="/profile.jpg" alt="Portrait of Nityansh Rupesh Bahadur" onLoad={() => setImageLoaded(true)} className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"} grayscale-[12%] group-hover:scale-[1.025]`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/[0.04]" />
                <div className="absolute right-0 top-0 h-32 w-32 overflow-hidden opacity-40">
                  {[...Array(6)].map((_, i) => <motion.span key={i} initial={{ x: 60, opacity: 0 }} animate={reducedMotion ? undefined : { x: 0, opacity: [0, 1, 0] }} transition={{ delay: 0.8 + i * 0.08, duration: 1.8, repeat: Infinity, repeatDelay: 4 }} className="absolute right-0 h-px w-16 bg-white/40" style={{ top: `${18 + i * 12}%`, transform: `rotate(-${12 + i * 2}deg)` }} />)}
                </div>
                <div className="absolute left-4 top-4 flex gap-1.5">
                  {animeMarks.map((mark, i) => <motion.span key={mark} animate={reducedMotion ? undefined : { y: [0, -4, 0] }} transition={{ delay: i * 0.12, duration: 2.4, repeat: Infinity }} className="rounded-full border border-white/10 bg-black/25 px-2 py-1 font-mono text-[7px] text-white/45 backdrop-blur-md">{mark}</motion.span>)}
                </div>
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <div><p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/45">Based in</p><p className="mt-1 text-sm text-white/85">Lucknow, India</p></div>
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/55 backdrop-blur-md">Open to build</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="flex items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
          <span>Building useful software</span><span className="hidden md:block">Scroll to explore ↓</span><span>01 / 05</span>
        </footer>
      </motion.div>
    </section>
  );
}
