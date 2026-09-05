import Link from "next/link";
import Reveal, { SectionHeading } from "./Reveal";

export default function BuildingPreview() {
  return (
    <section className="relative border-t border-line bg-bg-elev py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="01 / Currently Building"
          title={
            <>
              Building tools that make
              <br />
              complex work feel simpler.
            </>
          }
        />

        <Reveal>
          <Link
            href="/projects/careerupai"
            className="group block rounded-[24px] border border-white/[0.10] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04] sm:p-8"
          >
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,0.8)]" />
                  AI Career Platform / In Development
                </div>

                <h2 className="font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                  CareerUp<span className="text-accent">AI</span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-dim sm:text-base">
                  An AI-powered career platform focused on resume analysis,
                  profile improvement, career guidance, and practical next steps.
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 transition-colors group-hover:text-accent">
                View project
                <span className="text-base">↗</span>
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
