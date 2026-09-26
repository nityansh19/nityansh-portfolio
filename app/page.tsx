import Link from "next/link";
import Hero from "@/components/Hero";
import SignalStrip from "@/components/SignalStrip";
import BuildingPreview from "@/components/BuildingPreview";
import FeaturedProject from "@/components/FeaturedProject";
import HomeLab from "@/components/HomeLab";
import TerminalPreview from "@/components/TerminalPreview";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#07080a]">
      <Hero />
      <SignalStrip />

      <div className="relative">
        <BuildingPreview />
        <FeaturedProject />

        <section className="relative border-t border-line py-20 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                03 / Playground
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                Small experiments.
                <br />
                Serious intent.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-ink-dim">
                Interfaces, AI experiments, backend ideas and interaction studies that help me sharpen how I build.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-white"
              >
                More about me <span>↗</span>
              </Link>
            </div>

            <HomeLab />
          </div>
        </section>

        <section className="relative border-t border-line py-20 md:py-24">
          <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
            <div className="mb-10 max-w-xl">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                04 / Ask the portfolio
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                Less browsing. More answers.
              </h2>
            </div>
            <TerminalPreview />
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,110,245,0.10),transparent_34%)]" />
          <div className="relative mx-auto max-w-[1180px] px-6 text-center sm:px-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
              05 / Let&apos;s build
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              Have an ambitious idea?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ink-dim md:text-base">
              I&apos;m open to internships, collaborations and product-focused opportunities.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
              >
                Start a conversation ↗
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-white/[0.12] bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
              >
                View all work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
