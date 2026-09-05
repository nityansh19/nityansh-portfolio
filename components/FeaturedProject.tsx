import Link from "next/link";
import { Reveal } from "./Reveal";

export default function FeaturedProject() {
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
              02 / Selected Work
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              One project. More depth.
            </h2>
          </div>

          <Link href="/projects" className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-accent sm:block">
            View all work ↗
          </Link>
        </div>

        <Reveal>
          <Link href="/projects/careerupai" className="group relative block overflow-hidden rounded-[24px] border border-white/[0.10] bg-[#08090d] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(91,110,245,0.12),transparent_35%)] opacity-80" />
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:44px_44px]" />

            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                  01 / AI · FULL STACK · 2026
                </span>
                <h3 className="mt-5 font-display text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
                  CareerUp<span className="text-accent">AI</span>
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-ink-dim sm:text-base">
                  A career platform designed to turn resume and profile data into clearer, more useful career decisions.
                </p>
              </div>

              <div className="md:text-right">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
                  Explore case study
                </p>
                <div className="mt-4 font-display text-3xl text-white/70 transition-colors group-hover:text-accent">
                  Open project <span>↗</span>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>

        <Link href="/projects" className="mt-6 block text-center font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-accent sm:hidden">
          View all work ↗
        </Link>
      </div>
    </section>
  );
}
