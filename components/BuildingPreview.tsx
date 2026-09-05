import Link from "next/link";
import { Reveal, SectionHeading } from "./Reveal";

export default function BuildingPreview() {
  return (
    <section className="relative border-t border-line bg-bg-elev py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="01 / In the lab"
          title={
            <>
              Exploring what comes
              <br />
              after the full stack.
            </>
          }
        />

        <Reveal>
          <Link
            href="/projects/personal-ai"
            className="group block overflow-hidden rounded-[24px] border border-white/[0.10] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04] sm:p-8"
          >
            <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,0.8)]" />
                  Independent build / Python · AI · Automation
                </div>
                <h2 className="font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                  Personal AI <span className="text-accent">Assistant</span>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-dim sm:text-base">
                  An ongoing experimentation space for Python, intelligent workflows,
                  automation, productivity tooling, and practical AI application development.
                </p>
              </div>

              <div className="rounded-[20px] border border-white/[0.08] bg-[#090a0e] p-5 transition-colors duration-500 group-hover:border-accent/20">
                <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
                  <span>System areas</span>
                  <span className="text-accent">04</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {["Context", "Tools", "Automation", "Knowledge"].map((item, index) => (
                    <span key={item} className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35 transition-colors group-hover:text-white/50">
                      0{index + 1} / {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
                  <span>Current state</span>
                  <span className="flex items-center gap-2 text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Learning</span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
              <span>Python · AI · Automation · Productivity</span>
              <span className="transition-colors group-hover:text-accent">Explore project ↗</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
