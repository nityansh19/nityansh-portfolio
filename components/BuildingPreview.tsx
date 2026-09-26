import Link from "next/link";
import { Reveal } from "./Reveal";

export default function BuildingPreview() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-bg-elev py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_50%,rgba(91,110,245,.06),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <Reveal>
          <div className="grid gap-8 border-y border-white/[0.07] py-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-10">
            <div>
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.7)]" />
                01 / Currently building
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Building toward intelligent products.
              </h2>
            </div>

            <div className="flex flex-col gap-5 md:items-end md:text-right">
              <p className="max-w-2xl text-sm leading-7 text-ink-dim sm:text-base">
                My main focus is CareerUpAI and a personal AI workspace — projects where I can combine full-stack engineering, product design and applied AI instead of treating them as separate skills.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.17em] text-white/40 transition-colors hover:text-white"
              >
                See what I&apos;m building <span>↗</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
