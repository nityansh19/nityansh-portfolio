import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nivora — Nityansh Rupesh Bahadur",
  description: "Nivora is a complete personal finance OS built by Nityansh for tracking, planning and understanding everyday money.",
};

const capabilities = [
  ["01", "Transactions", "Track expenses and income with categories, notes, accounts, search, filtering, and recurring activity."],
  ["02", "Accounts", "Manage cash, bank, UPI, cards, wallets and transfers from one financial workspace."],
  ["03", "Savings", "Create savings goals, add entries, and make long-term progress visible."],
  ["04", "Budgets", "Plan monthly and category spending, then compare targets with actual activity."],
  ["05", "Analytics", "Understand cash flow, spending categories, trends and monthly financial patterns."],
  ["06", "Cloud Sync", "Secure Supabase authentication and user-scoped cloud persistence keep each workspace recoverable across devices."],
];

const stack = ["React", "Vite", "TypeScript", "Capacitor", "Supabase", "Framer Motion", "Lucide React", "Recharts"];

export default function NivoraPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link href="/projects" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">← Back to projects</Link>

        <header className="mt-16 max-w-6xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-emerald-400/80">01 / Personal Finance OS</p>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-emerald-300">v1.0 · Complete</span>
          </div>
          <h1 className="mt-5 font-display text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.82] tracking-[-0.08em]">Nivora<span className="text-emerald-400">.</span></h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">Nivora is a complete personal finance application I built to make everyday money easier to track and understand — expenses, income, accounts, budgets, savings, goals, analytics, recurring activity, authentication, cloud persistence, and Android support in one calm product.</p>
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

        <section className="mt-24 grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:mt-32"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Why I built it</p><div className="space-y-6 text-lg leading-9 text-ink-dim"><p>I wanted a finance app that felt simple enough to use every day but still had enough depth to become a real financial workspace. The challenge was not just storing numbers — it was making the experience clear, fast, responsive, and useful on both desktop and mobile.</p><p>Nivora became one of my largest product builds so far, covering frontend architecture, finance domain logic, persistence, authentication, cloud sync, PWA behavior, and Android delivery.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">What shipped in v1</p><div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(([n,t,d])=><div key={t} className="bg-bg p-7"><span className="font-mono text-[9px] text-emerald-400/60">{n}</span><h2 className="mt-5 font-display text-xl text-white/80">{t}</h2><p className="mt-3 text-sm leading-7 text-ink-dim">{d}</p></div>)}</div></section>

        <section className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Product decisions</p><p className="mt-5 text-base leading-8 text-ink-dim">I kept the interface calm and finance-first: compact navigation, strong hierarchy, restrained motion, real empty states, and charts only when they answer an actual question.</p></div><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Mobile + cloud</p><p className="mt-5 text-base leading-8 text-ink-dim">Nivora runs as a responsive web app and an Android app through Capacitor. Supabase handles authentication and user-scoped cloud persistence so a signed-in workspace can be restored instead of living only on one device.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Stack</p><div className="mt-6 flex flex-wrap gap-2">{stack.map((item)=><span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">{item}</span>)}</div><p className="mt-7 max-w-3xl text-base leading-8 text-ink-dim">React and TypeScript power the product layer, Supabase handles authentication and cloud persistence, Capacitor packages the Android experience, Recharts handles analytics, and Framer Motion keeps interactions polished without overwhelming the interface.</p></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/70">Current status</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Nivora v1.0 is complete.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-ink-dim">The current product scope is finished and usable. Future work would be expansion rather than unfinished core functionality — things like Play Store distribution, stronger native integrations, and deeper production-scale cloud architecture.</p></section>

        <div className="mt-20 flex flex-wrap gap-4"><a href="https://github.com/nityansh19/Nivora" target="_blank" rel="noreferrer" className="border border-emerald-400/20 bg-emerald-400/[0.07] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-emerald-400/[0.12]">View source ↗</a><Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-emerald-400/30 hover:text-white">All projects ↗</Link></div>
      </article>
    </main>
  );
}
