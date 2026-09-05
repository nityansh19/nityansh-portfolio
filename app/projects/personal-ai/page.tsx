import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal AI — Nityansh Rupesh Bahadur",
  description: "An experimental personal AI and automation system being explored by Nityansh.",
};

const systems = [
  ["01", "Context", "Understand the current task instead of treating every interaction as isolated."],
  ["02", "Tools", "Explore how an AI can work with useful tools, APIs, files, and workflows."],
  ["03", "Automation", "Reduce repetitive developer and workspace tasks through reliable workflows."],
  ["04", "Knowledge", "Build a personal knowledge layer that can make the assistant more useful over time."],
];

export default function PersonalAIPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link href="/projects" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">
          ← Back to projects
        </Link>

        <header className="mt-16 max-w-5xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
            02 / Personal AI System / Experimental
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            Personal <span className="text-accent">AI</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            An experimental workspace assistant exploring what happens when AI
            becomes part of the tools and workflows around development.
          </p>
        </header>

        <div className="relative mt-20 min-h-[360px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090d] md:mt-28 md:min-h-[500px]">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[110px]" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.12]" />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-violet-300/[0.16] bg-violet-400/[0.035] text-center shadow-[0_0_90px_rgba(139,92,246,.18)]">
            <span className="font-mono text-[7px] tracking-[0.25em] text-violet-300/60">PERSONAL AI</span>
            <span className="mt-2 font-display text-2xl text-white/75">READY</span>
          </div>

          {["PYTHON", "LLM", "TOOLS", "AUTOMATION"].map((label, index) => (
            <div
              key={label}
              className={`absolute border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.16em] text-white/30 ${
                ["left-[12%] top-[22%]", "right-[14%] top-[19%]", "left-[15%] bottom-[20%]", "right-[10%] bottom-[18%]"][index]
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:mt-32">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">The Idea</p>
          </div>
          <p className="text-lg leading-9 text-ink-dim">
            I do not want this to be just another chatbot with a different
            name. The experiment is about context, tools, automation, and the
            engineering required to make an AI useful outside a simple chat box.
          </p>
        </div>

        <div className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">System Areas</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {systems.map(([number, title, description]) => (
              <div key={title} className="bg-bg p-8">
                <span className="font-mono text-[9px] text-accent/60">{number}</span>
                <h2 className="mt-5 font-display text-2xl text-white/80">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-dim">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Technology</p>
            <p className="mt-5 font-mono text-xs leading-7 text-white/45">
              Python · AI · LLMs · React · Node.js · APIs · Linux · Docker
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">What I&apos;m Learning</p>
            <p className="mt-5 text-sm leading-7 text-ink-dim">
              The project is pushing me deeper into Python, artificial
              intelligence, APIs, Linux, automation, and reliable AI systems.
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Status</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            An open-ended experiment in building useful AI.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-dim">
            This system will evolve as the underlying ideas, tools, and
            engineering patterns become clearer.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-accent/30 hover:text-white">
            All projects ↗
          </Link>
          <Link href="/terminal" className="border border-accent/25 bg-accent/[0.08] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-accent/[0.14]">
            Talk to the portfolio ↗
          </Link>
        </div>
      </article>
    </main>
  );
}
