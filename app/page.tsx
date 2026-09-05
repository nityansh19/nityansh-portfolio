import Link from "next/link";
import Hero from "@/components/Hero";
import BuildingPreview from "@/components/BuildingPreview";
import FeaturedProject from "@/components/FeaturedProject";
import HomeLab from "@/components/HomeLab";
import TerminalPreview from "@/components/TerminalPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <BuildingPreview />
      <FeaturedProject />
      <HomeLab />
      <TerminalPreview />

      <section className="relative overflow-hidden border-t border-line py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(91,110,245,0.055),transparent_38%)]" />
        <div className="relative mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 px-6 sm:px-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
              05 / Keep exploring
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              The homepage is only the beginning.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink-dim">
              Dive deeper into the person, the work, or the systems behind the
              portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 font-mono text-[9px] uppercase tracking-[0.16em]">
            <Link
              href="/about"
              className="border border-white/[0.12] px-5 py-3 text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:text-white"
            >
              About ↗
            </Link>
            <Link
              href="/projects"
              className="border border-white/[0.12] px-5 py-3 text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:text-white"
            >
              Work ↗
            </Link>
            <Link
              href="/contact"
              className="border border-accent/20 bg-accent/[0.06] px-5 py-3 text-white/65 transition-all duration-300 hover:-translate-y-1 hover:bg-accent/[0.10] hover:text-white"
            >
              Contact ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
