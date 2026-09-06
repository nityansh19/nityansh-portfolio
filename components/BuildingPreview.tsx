import Link from "next/link";
import { Reveal, SectionHeading } from "./Reveal";

export default function BuildingPreview() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-bg-elev py-24 md:py-32">
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-emerald-500/[0.045] blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_75%_50%,black,transparent_62%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="01 / Currently building"
          title={
            <>
              Building products with
              <br />
              real-world utility.
            </>
          }
        />

        <Reveal>
          <Link
            href="/projects/nivora"
            className="group relative block overflow-hidden rounded-[26px] border border-white/[0.10] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/[0.04] sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(52,211,153,.10),transparent_36%)] opacity-80" />

            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                  Nivora / Phase 0 foundation
                </div>
                <h2 className="font-display text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
                  Nivora<span className="text-emerald-400">.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-dim sm:text-base">
                  A calm personal finance OS for tracking daily spending, income, savings, budgets, goals, and the financial patterns that matter.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#090a0e]/90 p-5 transition-all duration-500 group-hover:border-emerald-400/20 group-hover:shadow-[0_20px_70px_rgba(20,100,70,.12)]">
                <div className="relative flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
                  <span>Product foundation</span>
                  <span className="text-emerald-400">01</span>
                </div>
                <div className="relative mt-5 grid grid-cols-2 gap-2">
                  {["Transactions", "Savings", "Budgets", "Analytics"].map((item, index) => (
                    <span key={item} className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/35 transition-all duration-300 group-hover:border-emerald-400/10 group-hover:text-white/50">
                      0{index + 1} / {item}
                    </span>
                  ))}
                </div>
                <div className="relative mt-5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
                  <span>Current state</span>
                  <span className="flex items-center gap-2 text-emerald-400"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />Foundation</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
              <span>React · Vite · TypeScript · Framer Motion · Recharts</span>
              <span className="flex items-center gap-2 transition-colors group-hover:text-emerald-400">View project <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span></span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
