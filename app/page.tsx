import Hero from "@/components/Hero";
import BuildingPreview from "@/components/BuildingPreview";
import FeaturedProject from "@/components/FeaturedProject";

export default function Home() {
  return (
    <main>
      <Hero />
      <BuildingPreview />
      <FeaturedProject />

      <section className="border-t border-line py-20 md:py-24">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 px-6 sm:px-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
              03 / Keep exploring
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
              Want the full picture?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink-dim">
              Explore the person behind the work, the systems I am building,
              and the thinking behind them.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 font-mono text-[9px] uppercase tracking-[0.16em]">
            <a
              href="/about"
              className="border border-white/[0.12] px-5 py-3 text-white/55 transition-colors hover:border-accent/30 hover:text-white"
            >
              About ↗
            </a>
            <a
              href="/terminal"
              className="border border-white/[0.12] px-5 py-3 text-white/55 transition-colors hover:border-accent/30 hover:text-white"
            >
              Terminal ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
