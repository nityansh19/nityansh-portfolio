import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nivora — Nityansh Rupesh Bahadur",
  description: "Case study for Nivora, a personal finance operating system designed for calm, data-led daily money management.",
};

const capabilities = [
  "Daily expense and income tracking",
  "Savings entries, goals, progress, and history",
  "Monthly and category budgeting",
  "Financial analytics and comparisons",
  "Responsive desktop and mobile navigation",
  "Accessible, reduced-motion product foundation",
];

const principles = [
  ["Calm", "Finance should feel understandable, not overwhelming."],
  ["Trustworthy", "Financial states should be clear, semantic, and honest about available data."],
  ["Useful", "Every chart, control, and surface should answer a real financial question."],
  ["Extensible", "The foundation is designed to grow into sync, exports, PWA, multi-user, and future AI capabilities."],
];

export default function NivoraPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link
          href="/projects"
          className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent"
        >
          ← Back to projects
        </Link>

        <header className="mt-16 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-400/80">
            <span>01 / Personal Finance OS</span>
            <span className="text-white/15">·</span>
            <span>Phase 0 / Foundation</span>
          </div>
          <h1 className="mt-5 font-display text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.08em]">
            Nivora<span className="text-emerald-400">.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            A calm personal finance operating system for understanding where your money goes, building savings habits, planning ahead, and turning financial data into useful decisions.
          </p>
        </header>

        <div className="relative mt-20 min-h-[380px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#080d0b] md:mt-28 md:min-h-[500px]">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.06] blur-[110px]" />

          <div className="absolute left-1/2 top-1/2 w-[min(88%,650px)] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/[0.10] bg-[#101512]/95 p-5 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">Nivora / Financial overview</span>
                <p className="mt-2 font-display text-xl text-white/80">Your money, with less noise.</p>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Expenses", "Daily"],
                ["Income", "Monthly"],
                ["Savings", "Goals"],
                ["Budget", "Planned"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="font-display text-base text-white/70">{value}</div>
                  <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:mt-32">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">The Problem</p>
          </div>
          <p className="text-lg leading-9 text-ink-dim">
            Most expense trackers make money management feel like data entry. Nivora is being designed around the opposite experience: a focused daily workflow where recording a transaction is fast, financial context is easy to understand, and insights become useful only when there is real data behind them.
          </p>
        </div>

        <div className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-[0.8fr_1.2fr] md:mt-32 md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">The Product</p>
          </div>
          <p className="text-lg leading-9 text-ink-dim">
            Nivora starts with a reusable product foundation: a premium responsive shell, desktop sidebar, mobile bottom navigation, financial snapshot cards, a quick transaction composer, meaningful empty states, and a visual system built for future real financial data.
          </p>
        </div>

        <div className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Core Capabilities</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((feature, index) => (
              <div key={feature} className="bg-bg p-7">
                <span className="font-mono text-[9px] text-emerald-400/60">0{index + 1}</span>
                <h2 className="mt-5 font-display text-lg text-white/80">{feature}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-6 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24">
          {principles.map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">{title}</p>
              <p className="mt-4 text-sm leading-7 text-ink-dim">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Tech Stack</p>
            <p className="mt-5 font-mono text-xs leading-7 text-white/45">
              React · Vite · TypeScript · Framer Motion · Lucide React · Recharts
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Design Direction</p>
            <p className="mt-5 text-sm leading-7 text-ink-dim">
              Restrained fintech minimalism, warm surfaces, evergreen semantic accents, strong financial typography, quiet depth, purposeful motion, accessible focus states, and honest empty states.
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Roadmap</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            Foundation first. Real financial intelligence next.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-dim">
            The next phases introduce persisted transactions, savings and goals, budgets, real analytics, accessibility and performance refinement, followed by productization such as sync, exports, PWA support, multi-user capabilities, and future AI features.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-emerald-400/30 hover:text-white">
            All projects ↗
          </Link>
          <Link href="/contact" className="border border-emerald-400/20 bg-emerald-400/[0.07] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-emerald-400/[0.12]">
            Start a conversation ↗
          </Link>
        </div>
      </article>
    </main>
  );
}
