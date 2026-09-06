import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CareerUpAI — Nityansh Rupesh Bahadur",
  description: "A deeper look at CareerUpAI, an AI-powered career platform Nityansh is building.",
};

const features = [
  ["01", "CV analysis", "Use AI to inspect a CV and surface useful strengths, gaps, and areas that need work."],
  ["02", "Resume workspace", "Create, edit, and improve career documents without jumping between different tools."],
  ["03", "Profile analysis", "Look at skills, experience, and profile information together instead of as isolated fields."],
  ["04", "Career guidance", "Turn profile information into clearer suggestions about what to work on next."],
  ["05", "Personalized feedback", "The goal is useful feedback based on the person's information, not generic career advice."],
  ["06", "One workspace", "Keep the important parts of the career journey in one place as the product grows."],
];

const stack = ["React", "Vite", "JavaScript", "Node.js", "Express", "MongoDB", "AI"];

export default function CareerUpAIPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link href="/projects" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">← Back to projects</Link>

        <header className="mt-16 max-w-6xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">01 / AI Career Platform · In development</p>
          <h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">CareerUp<span className="text-accent">AI</span></h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">I’m building CareerUpAI around a simple problem: career information is scattered everywhere, but knowing what to do next is still difficult.</p>
        </header>

        <div className="relative mt-20 min-h-[420px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090d] md:mt-28 md:min-h-[540px]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[110px]" />
          <div className="absolute left-1/2 top-1/2 w-[min(86%,560px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/[0.11] bg-[#0d0f15]/95 p-5 shadow-[0_35px_110px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4"><span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">Career workspace</span><span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.9)]" /></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[["CV", "Analysis"], ["PROFILE", "Skills"], ["NEXT", "Actions"]].map(([a,b]) => <div key={a} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5"><div className="font-mono text-[8px] text-accent/70">{a}</div><div className="mt-3 font-display text-xl text-white/75">{b}</div></div>)}
            </div>
            <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.018] p-5"><div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">AI feedback</div><div className="mt-3 h-2 w-4/5 rounded-full bg-white/[0.08]" /><div className="mt-2 h-2 w-3/5 rounded-full bg-white/[0.05]" /></div>
          </div>
        </div>

        <section className="mt-24 grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:mt-32">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Why I started it</p>
          <div className="space-y-6 text-lg leading-9 text-ink-dim"><p>When you’re applying for internships or jobs, there are usually a lot of small things to figure out: is the resume clear, are the skills relevant, what is missing, and what should you improve first?</p><p>I wanted to build something that connects those pieces instead of giving someone another page of generic tips.</p></div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">What’s inside</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([n,t,d]) => <div key={t} className="bg-bg p-7"><span className="font-mono text-[9px] text-accent/60">{n}</span><h2 className="mt-5 font-display text-xl text-white/80">{t}</h2><p className="mt-3 text-sm leading-7 text-ink-dim">{d}</p></div>)}
          </div>
        </section>

        <section className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">How the AI fits</p><p className="mt-5 text-base leading-8 text-ink-dim">The AI part is meant to sit inside the actual workflow. A user's career information goes in, the system looks for useful signals, and the output should be something the person can act on.</p></div>
          <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Engineering</p><p className="mt-5 text-base leading-8 text-ink-dim">The project is giving me room to work across the frontend, API layer, database, authentication, and AI integration rather than treating each piece as a separate demo.</p></div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Stack</p>
          <div className="mt-6 flex flex-wrap gap-2">{stack.map((item) => <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">{item}</span>)}</div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Current status</p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">It’s still a work in progress — and that’s part of the project.</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-ink-dim">I’m using CareerUpAI to get better at turning a larger idea into an actual product: deciding what belongs in the first version, connecting the pieces, testing what works, and leaving room for the next version.</p>
        </section>

        <div className="mt-20 flex flex-wrap gap-4"><Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-accent/30 hover:text-white">All projects ↗</Link><Link href="/contact" className="border border-accent/25 bg-accent/[0.08] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-accent/[0.14]">Start a conversation ↗</Link></div>
      </article>
    </main>
  );
}
