import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 65, damping: 24, mass: 0.35 });
  const rotate = useTransform(smooth, [0, 0.5, 1], reducedMotion ? [0, 0, 0] : [-2.5, 0, 2.5]);
  const y = useTransform(smooth, [0, 0.5, 1], reducedMotion ? [0, 0, 0] : [28, 0, -18]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ y }} className="absolute left-[72%] top-[18%] h-80 w-80 -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[110px]" />
        <motion.div style={{ rotate }} className="absolute right-[-8%] top-[20%] h-px w-[42%] bg-accent/25 shadow-[0_0_24px_rgba(91,110,245,.35)]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">02 / Selected Work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">One project. More depth.</h2>
          </div>
          <Link href="/projects" className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-accent sm:block">View all work ↗</Link>
        </div>

        <Reveal scale>
          <Link href="/projects/careerupai" className="group relative block overflow-hidden rounded-[24px] border border-white/[0.10] bg-[#08090d] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_35px_110px_rgba(0,0,0,.35)] sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(91,110,245,0.12),transparent_35%)] opacity-80 transition-transform duration-1000 group-hover:scale-110" />
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:44px_44px]" />
            <motion.div
              className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
              animate={reducedMotion ? undefined : { x: [0, 900] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            />

            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">01 / AI · FULL STACK · 2026</span>
                <h3 className="mt-5 font-display text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">CareerUp<span className="text-accent">AI</span></h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-ink-dim sm:text-base">A career platform designed to turn resume and profile data into clearer, more useful career decisions.</p>
              </div>
              <div className="md:text-right">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">Explore case study</p>
                <div className="mt-4 font-display text-3xl text-white/70 transition-colors group-hover:text-accent">Open project <span className="inline-block transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1">↗</span></div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Link href="/projects" className="mt-6 block text-center font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-accent sm:hidden">View all work ↗</Link>
      </div>
    </section>
  );
}
