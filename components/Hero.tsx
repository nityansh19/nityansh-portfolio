"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 700], [0, 70]);
  const heroY = useSpring(rawY, { stiffness: 80, damping: 30 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#07080a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(103,120,255,0.13),transparent_32%),radial-gradient(circle_at_18%_78%,rgba(145,92,255,0.06),transparent_28%)]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(circle at center,black,transparent 78%)",
            WebkitMaskImage: "radial-gradient(circle at center,black,transparent 78%)",
          }}
        />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.045] to-transparent" />
      </div>

      <motion.div style={{ y: heroY }} className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1380px] flex-col px-6 pb-10 pt-28 md:px-10 md:pt-32 lg:px-14">
        <header className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">NRB / 2026</span>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7b88ff] shadow-[0_0_14px_rgba(123,136,255,.8)]" />
            Available for opportunities
          </div>
        </header>

        <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[minmax(0,1.35fr)_360px] lg:gap-20 lg:py-20">
          <div className="max-w-[920px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8590ff]"
            >
              <span className="h-px w-8 bg-[#8590ff]" />
              Full Stack Developer · AI · Backend
            </motion.p>

            <h1 className="font-display font-semibold tracking-[-0.065em]">
              <span className="block overflow-hidden">
                <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block text-[clamp(4.2rem,11vw,10rem)] leading-[0.8] text-[#f0f1f4]">
                  NITYANSH
                </motion.span>
              </span>
              <span className="mt-4 block overflow-hidden">
                <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.88] text-white/35">
                  RUPESH BAHADUR
                </motion.span>
              </span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.75 }} className="mt-9 max-w-[650px] text-base leading-7 text-white/50 md:text-lg md:leading-8">
              I build thoughtful digital products where clean interfaces, strong engineering, and intelligent systems meet. Currently exploring full-stack development, AI, and ideas worth turning into real products.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7 }} className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex items-center gap-8 rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1">
                Explore my work
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>
              <Link href="/contact" className="group inline-flex items-center gap-8 rounded-full border border-white/[0.13] bg-white/[0.035] px-5 py-3.5 text-sm font-medium text-white/85 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
                Let’s connect
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-[360px] lg:mx-0 lg:justify-self-end"
          >
            <div className="group relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.035] p-2 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#111216]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-semibold tracking-[-0.06em] text-white/[0.08]">NRB</span>
                </div>
                <img src="/profile.jpg" alt="Portrait of Nityansh Rupesh Bahadur" onLoad={() => setImageLoaded(true)} className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"} grayscale-[12%] group-hover:scale-[1.025]`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/[0.04]" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/45">Based in</p>
                    <p className="mt-1 text-sm text-white/85">Lucknow, India</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/55 backdrop-blur-md">Open to build</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className="flex items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
          <span>Product-minded developer</span>
          <span className="hidden md:block">Scroll to explore</span>
          <span>01 / 05</span>
        </footer>
      </motion.div>
    </section>
  );
}
