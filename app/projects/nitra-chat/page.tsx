import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nitra Chat — Nityansh Rupesh Bahadur",
  description:
    "Nitra Chat is a premium messaging platform built with Next.js, TypeScript, Tailwind CSS, Motion, MongoDB, and Mongoose.",
};

const highlights = [
  ["01", "Nitra identity", "A dedicated identity system built around Nitra IDs, profile data, status, privacy controls, and user discovery."],
  ["02", "Playful interaction", "Motion-rich chat interactions, animated message states, command palette flows, reactions, emoji controls, and responsive feedback."],
  ["03", "Real product foundation", "Database-backed users, conversations, and messages with API routes and a MongoDB connection layer instead of a static mockup."],
  ["04", "Built to evolve", "The architecture is being extended toward REST APIs, WebSocket messaging, presence, media, offline states, and production deployment."],
];

const stack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Lucide React",
  "MongoDB",
  "Mongoose",
  "bcryptjs",
];

export default function NitraChatPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link
          href="/projects"
          className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent"
        >
          ← Back to projects
        </Link>

        <header className="mt-16 max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
            <span>02 / Nitra Chat</span>
            <span className="text-white/15">·</span>
            <span>Active Development</span>
          </div>
          <h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
            Nitra <span className="text-accent">Chat</span>
          </h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            A premium communication workspace inspired by the familiarity of modern
            messaging apps, but designed around a more expressive Nitra identity,
            richer motion, playful interactions, and a real full-stack foundation.
          </p>
        </header>

        <div className="relative mt-20 min-h-[420px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090d] md:mt-28 md:min-h-[540px]">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[0.14] shadow-[0_0_100px_rgba(91,110,245,.12)]" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] bg-white/[0.025]" />

          <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/20 bg-accent/[0.045] text-center">
            <span className="font-mono text-[7px] tracking-[0.28em] text-accent/65">NITRA NETWORK</span>
            <span className="mt-2 font-display text-3xl text-white/80">CHAT</span>
            <span className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">Database ready</span>
          </div>

          {["NITRA ID", "MESSAGES", "PROFILE", "SEARCH"].map((label, index) => (
            <div
              key={label}
              className={`absolute rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.16em] text-white/30 ${
                [
                  "left-[10%] top-[21%]",
                  "right-[11%] top-[18%]",
                  "left-[12%] bottom-[19%]",
                  "right-[14%] bottom-[18%]",
                ][index]
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <section className="mt-24 grid gap-16 border-t border-line pt-16 md:mt-32 md:grid-cols-[0.75fr_1.25fr] md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">The idea</p>
          </div>
          <div className="space-y-6 text-lg leading-9 text-ink-dim">
            <p>
              Nitra Chat takes inspiration from familiar communication products without
              trying to become another copy of them. The goal is to keep the clarity and
              usefulness people expect from chat while giving the product its own visual
              language and interaction model.
            </p>
            <p>
              The difference is in the experience: Nitra is being built as a lively product
              with a dedicated identity layer, richer motion, command-style discovery, and
              interfaces designed to make everyday communication feel more expressive.
            </p>
            <p>
              Under the surface, it is also moving beyond a frontend prototype. The current
              codebase includes MongoDB-backed users, conversations, and messages, registration,
              Nitra user search, profile and privacy data, and a reusable foundation for the next
              real-time messaging phases.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">What makes it different</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {highlights.map(([number, title, description]) => (
              <div key={title} className="bg-bg p-8">
                <span className="font-mono text-[9px] text-accent/60">{number}</span>
                <h2 className="mt-5 font-display text-2xl text-white/80">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-dim">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-12 border-t border-line pt-16 md:mt-32 md:grid-cols-[0.65fr_1.35fr] md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Technology</p>
            <h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">A modern full-stack base.</h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-3xl text-base leading-8 text-ink-dim">
              The current implementation uses Next.js and React for the application layer,
              TypeScript for the codebase, Tailwind CSS for the interface, Motion for interaction,
              Lucide for iconography, MongoDB and Mongoose for persistence, and bcryptjs for password
              hashing in the registration flow.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Current state</p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            The database foundation is in. Real-time communication is next.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-ink-dim">
            Nitra currently has the frontend experience, identity flows, profile workspace, and
            database-backed discovery foundation in place. Production authentication, authorization,
            REST expansion, WebSockets, presence synchronization, media, and final deployment are
            planned as the project continues.
          </p>
        </section>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-accent/30 hover:text-white"
          >
            All projects ↗
          </Link>
          <a
            href="https://github.com/nityansh19/Nitra-chat"
            target="_blank"
            rel="noreferrer"
            className="border border-accent/25 bg-accent/[0.08] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-accent/[0.14]"
          >
            View source ↗
          </a>
        </div>
      </article>
    </main>
  );
}
