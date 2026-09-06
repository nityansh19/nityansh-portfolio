import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nivora — Nityansh Rupesh Bahadur",
  description: "A deeper look at Nivora, Nityansh's personal finance application.",
};

const capabilities = [
  ["01", "Expenses", "Record everyday spending and keep a simple history of where money goes."],
  ["02", "Income", "Track incoming money alongside expenses so the bigger picture is easier to see."],
  ["03", "Savings", "Keep savings separate, set goals, and make progress visible instead of treating saving as an afterthought."],
  ["04", "Budgets", "Plan monthly spending and eventually compare planned amounts with what actually happened."],
  ["05", "Analytics", "Turn transaction history into useful comparisons and patterns rather than filling the dashboard with charts."],
  ["06", "Goals", "Give longer-term targets their own place so progress can be checked over time."],
];

const stack = ["React", "Vite", "TypeScript", "Framer Motion", "Lucide React", "Recharts"];

export default function NivoraPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link href="/projects" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">← Back to projects</Link>

        <header className="mt-16 max-w-6xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-400/80">01 / Personal Finance OS · Phase 0</p>
          <h1 className="mt-5 font-display text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.08em]">Nivora<span className="text-emerald-400">.</span></h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">Nivora is the finance app I’m building for the everyday stuff: expenses, income, savings, budgets, goals, and eventually the patterns that help make those numbers easier to understand.</p>
        </header>

        <div className="relative mt-20 min-h-[420px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#080d0b] md:mt-28 md:min-h-[540px]">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.06] blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 w-[min(90%,720px)] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/[0.10] bg-[#101512]/95 p-5 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4"><div><span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">Nivora / Overview</span><p className="mt-2 font-display text-xl text-white/80">Your money, without the spreadsheet feeling.</p></div><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" /></div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["Expenses","Daily"],["Income","Monthly"],["Savings","Goals"],["Budget","Planned"]].map(([a,b])=><div key={a} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"><div className="font-display text-base text-white/70">{a}</div><div className="mt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">{b}</div></div>)}</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1.4fr_0.6fr]"><div className="h-20 rounded-xl border border-white/[0.07] bg-white/[0.018] p-4"><div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">Spending trend</div><div className="mt-5 h-px w-full bg-emerald-400/30" /></div><div className="h-20 rounded-xl border border-white/[0.07] bg-white/[0.018] p-4"><div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">Saving goal</div><div className="mt-4 h-1.5 rounded-full bg-white/[0.06]"><div className="h-full w-2/3 rounded-full bg-emerald-400/60" /></div></div></div>
          </div>
        </div>

        <section className="mt-24 grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:mt-32"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Why I started it</p><div className="space-y-6 text-lg leading-9 text-ink-dim"><p>I wanted something I would actually use every day. A finance app can have a huge feature list, but if adding an expense takes too much effort or the dashboard is difficult to read, the whole thing becomes pointless.</p><p>So I’m starting with the foundation and the everyday workflow first. The more advanced analytics can come once there is real data to work with.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">What I’m building</p><div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(([n,t,d])=><div key={t} className="bg-bg p-7"><span className="font-mono text-[9px] text-emerald-400/60">{n}</span><h2 className="mt-5 font-display text-xl text-white/80">{t}</h2><p className="mt-3 text-sm leading-7 text-ink-dim">{d}</p></div>)}</div></section>

        <section className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Product decisions</p><p className="mt-5 text-base leading-8 text-ink-dim">I’m deliberately keeping the first version calm. The interface uses a compact navigation system, clear financial hierarchy, restrained motion, useful empty states, and charts only where they answer a question.</p></div><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Responsive from the start</p><p className="mt-5 text-base leading-8 text-ink-dim">The layout is being designed for both desktop and mobile, with a desktop rail and a mobile bottom navigation so the main actions stay easy to reach.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Stack</p><div className="mt-6 flex flex-wrap gap-2">{stack.map((item)=><span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">{item}</span>)}</div><p className="mt-7 max-w-3xl text-base leading-8 text-ink-dim">Recharts handles the data visualisation layer, Framer Motion handles interaction and transitions, Lucide keeps iconography consistent, and TypeScript keeps the application easier to reason about as it grows.</p></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Roadmap</p><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["01","Foundation","Shell, navigation, visual system"],["02","Core data","Transactions, savings, goals"],["03","Insights","Budgets, analytics, comparisons"],["04","Product","Sync, exports, PWA, future AI"]].map(([n,t,d])=><div key={n} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"><span className="font-mono text-[8px] text-emerald-400/60">{n}</span><h2 className="mt-4 font-display text-lg text-white/75">{t}</h2><p className="mt-2 text-sm leading-6 text-ink-dim">{d}</p></div>)}</div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Current status</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Phase 0 is about getting the base right.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-ink-dim">Nivora is currently in its foundation phase. I’m treating this as a product I want to keep improving, not a one-off dashboard that gets abandoned after the first demo.</p></section>

        <div className="mt-20 flex flex-wrap gap-4"><Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-emerald-400/30 hover:text-white">All projects ↗</Link><Link href="/contact" className="border border-emerald-400/20 bg-emerald-400/[0.07] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-emerald-400/[0.12]">Start a conversation ↗</Link></div>
      </article>
    </main>
  );
}
