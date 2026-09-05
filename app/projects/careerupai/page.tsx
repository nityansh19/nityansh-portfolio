import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CareerUpAI — Nityansh Rupesh Bahadur",
  description: "Case study for CareerUpAI, an AI-powered career platform.",
};

const features = [
  "AI-powered CV analysis",
  "Resume creation and editing",
  "Personalized improvement suggestions",
  "Career-focused recommendations",
  "Profile and skill analysis",
  "Centralized career workspace",
];

export default function CareerUpAIPage() {
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
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
            01 / AI Career Platform / In Development
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            CareerUp<span className="text-accent">AI</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            Career infrastructure designed to help people understand where they
            stand professionally and what they can improve next.
          </p>
        </header>

        <div className="relative mt-20 min-h-[360px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090d] md:mt-28 md:min-h-[500px]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[0.16]" />
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

          <div className="absolute left-1/2 top-1/2 w-[min(78%,440px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/[0.12] bg-[#0d0f15]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                Career Intelligence
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,.9)]" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["82", "Profile"],
                ["AI", "Analysis"],
                ["06", "Signals"],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="font-display text-2xl text-white/75">{value}</div>
                  <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:mt-32">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">The Problem</p>
          </div>
          <p className="text-lg leading-9 text-ink-dim">
            Career tools often tell people what looks good on paper without
            making the next action obvious. CareerUpAI is being built around a
            simpler idea: turn career information into useful, understandable
            decisions instead of generic advice.
          </p>
        </div>

        <div className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-[0.8fr_1.2fr] md:mt-32 md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">The Idea</p>
          </div>
          <p className="text-lg leading-9 text-ink-dim">
            Build one focused career workspace that combines resume analysis,
            profile improvement, career guidance, and practical suggestions.
            The product should feel personal, useful, and clear.
          </p>
        </div>

        <div className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Key Features</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={feature} className="bg-bg p-7">
                <span className="font-mono text-[9px] text-accent/60">0{index + 1}</span>
                <h2 className="mt-5 font-display text-lg text-white/80">{feature}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">AI System</p>
            <p className="mt-5 text-sm leading-7 text-ink-dim">
              AI is being treated as part of the product workflow rather than
              a decorative chatbot layer: analyze information, identify useful
              signals, and turn them into concrete suggestions.
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Tech Stack</p>
            <p className="mt-5 font-mono text-xs leading-7 text-white/45">
              React · Vite · JavaScript · Node.js · Express · MongoDB · AI
            </p>
          </div>
        </div>

        <div className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Current Status</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            Still being built. Getting deeper with every iteration.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-dim">
            The project is also a practical engineering laboratory for frontend
            architecture, APIs, databases, authentication, AI integration, and
            the details that make a product feel complete.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-accent/30 hover:text-white">
            All projects ↗
          </Link>
          <Link href="/contact" className="border border-accent/25 bg-accent/[0.08] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-accent/[0.14]">
            Start a conversation ↗
          </Link>
        </div>
      </article>
    </main>
  );
}
