import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal AI — Nityansh Rupesh Bahadur",
  description: "A deeper look at Nityansh's experimental personal AI and automation project.",
};

const systems = [
  ["01", "Context", "Keep track of what the user is trying to do instead of treating every message as a completely separate task."],
  ["02", "Tools", "Explore how an assistant can work with APIs, files, developer tools, and other useful capabilities."],
  ["03", "Automation", "Use Python and workflows to remove repetitive tasks from the developer workspace."],
  ["04", "Knowledge", "Experiment with a personal knowledge layer so the assistant can become more useful over time."],
  ["05", "Developer workflow", "Use the project as a place to learn how AI can fit into the actual process of building software."],
  ["06", "Experimentation", "Keep the architecture flexible while I figure out which ideas are genuinely useful and which are not."],
];

const stack = ["Python", "AI", "LLMs", "React", "Node.js", "APIs", "Linux", "Docker"];

export default function PersonalAIPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link href="/projects" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">← Back to projects</Link>
        <header className="mt-16 max-w-6xl"><p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">04 / AI · Automation · Experimental</p><h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">Personal <span className="text-accent">AI</span></h1><p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">This is my experimental AI project. I’m using it to understand what happens when an assistant has more context, can use tools, and can actually help with work instead of only answering questions.</p></header>

        <div className="relative mt-20 min-h-[420px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090d] md:mt-28 md:min-h-[540px]"><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:52px_52px]" /><div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[120px]" /><div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.12]" /><div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-violet-300/[0.16] bg-violet-400/[0.035] text-center shadow-[0_0_90px_rgba(139,92,246,.18)]"><span className="font-mono text-[7px] tracking-[0.25em] text-violet-300/60">PERSONAL AI</span><span className="mt-2 font-display text-2xl text-white/75">LAB</span></div>{["PYTHON","CONTEXT","TOOLS","AUTOMATION"].map((label,index)=><div key={label} className={`absolute border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.16em] text-white/30 ${["left-[12%] top-[22%]","right-[14%] top-[19%]","left-[15%] bottom-[20%]","right-[10%] bottom-[18%]"][index]}`}>{label}</div>)}</div>

        <section className="mt-24 grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:mt-32"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Why I’m building it</p><div className="space-y-6 text-lg leading-9 text-ink-dim"><p>I’m spending more time with Python and AI, and I wanted a project where I could go beyond calling a model and printing the response.</p><p>The interesting part for me is everything around the model: context, tools, memory, automation, APIs, permissions, failure cases, and the interface that ties it together.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">The system I’m exploring</p><div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">{systems.map(([n,t,d])=><div key={t} className="bg-bg p-7"><span className="font-mono text-[9px] text-accent/60">{n}</span><h2 className="mt-5 font-display text-xl text-white/80">{t}</h2><p className="mt-3 text-sm leading-7 text-ink-dim">{d}</p></div>)}</div></section>

        <section className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">What makes this different from a chatbot</p><p className="mt-5 text-base leading-8 text-ink-dim">A chatbot mainly gives you a response. I’m interested in an assistant that can understand the current task, decide when a tool is useful, work with information, and fit into the way I already work.</p></div><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">The hard part</p><p className="mt-5 text-base leading-8 text-ink-dim">The model is only one piece. Making the rest reliable is where most of the engineering comes in: keeping context useful, handling failures, deciding what the system is allowed to do, and keeping the experience understandable.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Stack & learning direction</p><div className="mt-6 flex flex-wrap gap-2">{stack.map(item=><span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">{item}</span>)}</div><p className="mt-7 max-w-3xl text-base leading-8 text-ink-dim">This project is one of the main reasons I’m going deeper into Python. I’m also using it to learn more about AI systems, APIs, Linux, Docker, automation, and the engineering around LLM-based applications.</p></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Current status</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Still experimental. I’m keeping it open on purpose.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-ink-dim">I don’t want to lock the project into a big feature list before I understand what is actually useful. I’m treating each new capability as an experiment and keeping the parts that genuinely improve the workflow.</p></section>

        <div className="mt-20 flex flex-wrap gap-4"><Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-accent/30 hover:text-white">All projects ↗</Link><Link href="/terminal" className="border border-accent/25 bg-accent/[0.08] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-accent/[0.14]">Talk to the portfolio ↗</Link></div>
      </article>
    </main>
  );
}
