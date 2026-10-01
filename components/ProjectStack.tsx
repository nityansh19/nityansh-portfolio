"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import CareerUpLivePreview from "@/components/CareerUpLivePreview";

const stack = ["React", "Vite", "Node.js", "Express", "MongoDB", "AI"];

const productSignals = [
  {
    number: "01",
    title: "Resume intelligence",
    text: "Analyze a resume, surface strengths and gaps, and turn it into clearer next steps.",
  },
  {
    number: "02",
    title: "Career profile",
    text: "Bring skills, experience and career information into one connected workspace.",
  },
  {
    number: "03",
    title: "Guided action",
    text: "Translate profile data into practical feedback instead of generic career advice.",
  },
];

export default function ProjectStack() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#07080a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[8%] h-[520px] w-[520px] rounded-full bg-accent/[0.035] blur-[110px]" />
        <div className="absolute left-[-14%] top-[46%] h-[420px] w-[420px] rounded-full bg-[#8b6ef5]/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 pb-24 pt-24 sm:px-8 md:pb-32 md:pt-32">
        <div className="grid gap-8 md:grid-cols-[1fr_.72fr] md:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/75">
              02 / Featured work
            </p>

            <motion.h2
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.35rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
            >
              Built to solve
              <br />
              <span className="text-white/28">something real.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="max-w-md text-sm leading-7 text-white/42 md:pb-2"
          >
            CareerUpAI is the project where I am combining product thinking,
            full-stack engineering and applied AI into one complete experience.
          </motion.p>
        </div>

        <motion.article
          initial={reducedMotion ? false : { opacity: 0, y: 36, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 overflow-hidden border border-white/[0.10] bg-[#090a0e] shadow-[0_45px_130px_rgba(0,0,0,.42)] md:mt-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.025),transparent_38%)]" />

          <div className="relative grid gap-10 p-5 sm:p-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-10 lg:p-10 xl:p-12">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/24">
                  Flagship / 01
                </span>
                <span className="border border-accent/20 bg-accent/[0.05] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.13em] text-white/40">
                  Live beta · Nearly complete
                </span>
              </div>

              <p className="mt-9 font-mono text-[8px] uppercase tracking-[0.18em] text-accent/72">
                AI career platform
              </p>

              <h3 className="mt-4 max-w-full font-display text-[clamp(3.15rem,10vw,5.3rem)] font-semibold leading-[0.84] tracking-[-0.072em] sm:text-[clamp(3.8rem,6vw,5.4rem)]">
                CareerUp<span className="text-accent">AI</span>
              </h3>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/48 sm:text-base">
                An AI-powered career platform designed to help people understand
                their profile, improve their resume and make clearer decisions
                about what to work on next.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="border border-white/[0.07] bg-white/[0.018] px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-white/30"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects/careerupai"
                  data-cursor-label="VIEW"
                  className="group inline-flex items-center justify-between gap-5 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
                >
                  View case study
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>

                <a
                  href="https://career-up-ai-delta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-label="LIVE"
                  className="group inline-flex items-center justify-between gap-5 rounded-full border border-accent/30 bg-accent/[0.08] px-5 py-3 text-sm font-medium text-white/82 transition-all duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-accent/[0.14]"
                >
                  Visit live product
                  <span className="text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <CareerUpLivePreview />
            </div>
          </div>

          <div className="relative border-t border-white/[0.08] bg-black/[0.13] px-5 py-7 sm:px-8 lg:px-10 xl:px-12">
            <div className="grid gap-3 md:grid-cols-3">
              {productSignals.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.55 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="border border-white/[0.07] bg-white/[0.018] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[7px] tracking-[0.16em] text-accent/60">
                      {item.number}
                    </span>
                    <span className="h-px w-8 bg-gradient-to-r from-accent/45 to-transparent" />
                  </div>
                  <h4 className="mt-4 font-display text-xl font-semibold tracking-[-0.035em] text-white/78">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-xs leading-6 text-white/36 sm:text-sm">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>

        <div className="mt-20 border-y border-white/[0.08] py-10 md:mt-28 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/24">
                More work
              </p>
              <h3 className="mt-4 max-w-3xl font-display text-[clamp(2.3rem,5vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                The rest of my work
                <br className="hidden sm:block" />
                <span className="text-white/28"> lives here.</span>
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/38">
                Explore the other products, experiments and systems I&apos;ve
                designed and built.
              </p>
            </div>

            <Link
              href="/projects"
              data-cursor-label="MORE"
              className="group inline-flex w-fit items-center gap-8 rounded-full border border-white/[0.12] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/82 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/[0.06]"
            >
              Explore all work
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
