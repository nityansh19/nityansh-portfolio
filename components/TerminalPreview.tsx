import Link from "next/link";
import { Reveal } from "./Reveal";

const prompts = [
  "Who is Nityansh?",
  "What is he building?",
  "What does he use?",
  "CareerUpAI?",
];

export default function TerminalPreview() {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(91,110,245,0.07),transparent_38%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="mb-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
            04 / Ask the portfolio
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            Less browsing. More answers.
          </h2>
        </div>

        <Reveal>
          <Link
            href="/terminal"
            className="group relative block overflow-hidden rounded-[26px] border border-white/[0.10] bg-[#090a0e] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.20em] text-accent/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Interactive portfolio terminal
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  Ask instead of searching.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-dim">
                  Open the terminal and ask about my projects, stack, current focus, or what I&apos;m building.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {prompts.map((prompt) => (
                    <span
                      key={prompt}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.10em] text-white/30 transition-colors duration-300 group-hover:border-accent/20 group-hover:text-white/45"
                    >
                      {prompt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-accent">
                Try terminal
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
