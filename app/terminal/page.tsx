import type { Metadata } from "next";
import TerminalV2 from "@/components/TerminalV2";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Terminal — Nityansh Rupesh Bahadur",
  description: "Ask questions about Nityansh's current projects, skills, experience, and direction.",
};

const signals = [
  ["01", "Current projects", "Nivora, CareerUpAI, Nitra Chat and the Personal AI Assistant."],
  ["02", "Current stack", "Full-stack tools plus Python, AI, Docker, Linux and DevOps learning."],
  ["03", "Recruiter focused", "Background, education, experience, availability and contact information without guessing."],
];

export default function TerminalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg pb-32 pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute left-[8%] top-[6%] h-[440px] w-[440px] rounded-full bg-accent/[0.055] blur-[140px] animate-pulse" /><div className="absolute right-[4%] top-[34%] h-[380px] w-[380px] rounded-full bg-violet-500/[0.04] blur-[140px]" /><div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" /></div>
      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <header className="max-w-4xl"><div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80"><span className="h-px w-8 bg-accent" />Portfolio terminal</div><div className="mt-6 flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.075em]">Talk to the<br /><span className="text-accent">portfolio.</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-ink-dim sm:text-lg">Ask about Nityansh, his current work, skills, education, experience, learning direction, or opportunities.</p></div><Link href="/projects" className="shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">Browse work ↗</Link></div></header>
        <div className="mt-14 grid gap-3 md:grid-cols-3">{signals.map(([number, title, description]) => <div key={number} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.028]"><div className="mb-7 font-mono text-[8px] uppercase tracking-[0.18em] text-accent/60">{number}</div><h2 className="font-display text-xl text-white/80">{title}</h2><p className="mt-3 text-sm leading-6 text-ink-dim">{description}</p><div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" /></div>)}</div>
        <div className="mt-12 rounded-[30px] border border-white/[0.08] bg-white/[0.012] p-1 shadow-[0_50px_150px_rgba(0,0,0,.34)] md:mt-16"><TerminalV2 /></div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6"><span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">NITYANSH / CURRENT PORTFOLIO KNOWLEDGE</span><Link href="/contact" className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-accent">Need a human? Contact Nityansh ↗</Link></div>
      </div>
    </main>
  );
}
