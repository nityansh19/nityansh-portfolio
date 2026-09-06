import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nitra Chat — Nityansh Rupesh Bahadur",
  description: "A deeper look at Nitra Chat, a full-stack messaging project by Nityansh.",
};

const areas = [
  ["01", "Identity", "Nitra IDs, profile information, status, privacy controls, and user discovery give the app its own identity layer."],
  ["02", "Messaging", "The interface is designed around conversations, message states, reactions, emoji controls, and responsive feedback."],
  ["03", "Discovery", "Search and command-style flows make it easier to move around users, profiles, and conversations."],
  ["04", "Persistence", "Users, conversations, and messages are backed by MongoDB and exposed through the application's backend layer."],
  ["05", "Interaction", "Motion is used to make the product feel responsive without turning every action into an animation."],
  ["06", "Next steps", "The project is moving toward real-time delivery, presence, media, offline handling, and a stronger production backend."],
];

const stack = ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Motion", "Lucide React", "MongoDB", "Mongoose", "bcryptjs"];

export default function NitraChatPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link href="/projects" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">← Back to projects</Link>
        <header className="mt-16 max-w-6xl"><p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">03 / Real-time product · Active development</p><h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em]">Nitra <span className="text-accent">Chat</span></h1><p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">Nitra Chat started as a messaging idea and turned into one of my deeper full-stack projects. I’m using it to work through what a real communication product needs beyond just a chat screen.</p></header>

        <div className="relative mt-20 min-h-[420px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#08090d] md:mt-28 md:min-h-[540px]"><div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:52px_52px]" /><div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]" /><div className="absolute left-1/2 top-1/2 w-[min(88%,700px)] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/[0.10] bg-[#101118]/95 p-5 shadow-[0_35px_110px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-7"><div className="flex items-center justify-between border-b border-white/[0.07] pb-4"><span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">Nitra / Conversation</span><span className="font-mono text-[7px] uppercase tracking-[0.16em] text-accent/60">Connected</span></div><div className="mt-5 grid gap-3 sm:grid-cols-[0.65fr_1.35fr]"><div className="hidden rounded-xl border border-white/[0.07] bg-white/[0.018] p-4 sm:block"><div className="h-2 w-20 rounded bg-white/[0.08]" /><div className="mt-4 h-2 w-full rounded bg-white/[0.05]" /><div className="mt-2 h-2 w-4/5 rounded bg-white/[0.05]" /></div><div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-4"><div className="flex gap-2"><span className="h-7 w-7 rounded-full bg-accent/20" /><div className="flex-1"><div className="h-2 w-24 rounded bg-white/[0.08]" /><div className="mt-3 ml-auto h-8 w-3/5 rounded-xl bg-accent/[0.10]" /><div className="mt-2 h-8 w-2/5 rounded-xl bg-white/[0.05]" /></div></div></div></div></div></div>

        <section className="mt-24 grid gap-16 md:grid-cols-[0.75fr_1.25fr] md:mt-32"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Why I built it</p><div className="space-y-6 text-lg leading-9 text-ink-dim"><p>I wanted a project where the backend actually matters. A messaging app has users, relationships, conversations, messages, authentication, search, state, and eventually real-time delivery.</p><p>That makes it a good place to learn how all those pieces fit together instead of building another frontend-only demo.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">What’s in the project</p><div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">{areas.map(([n,t,d])=><div key={t} className="bg-bg p-7"><span className="font-mono text-[9px] text-accent/60">{n}</span><h2 className="mt-5 font-display text-xl text-white/80">{t}</h2><p className="mt-3 text-sm leading-7 text-ink-dim">{d}</p></div>)}</div></section>

        <section className="mt-24 grid gap-16 border-t border-line pt-16 md:grid-cols-2 md:mt-32 md:pt-24"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">What I learned</p><p className="mt-5 text-base leading-8 text-ink-dim">The interesting part has been thinking about data ownership and product behaviour together. A conversation is not just a UI component; it has users, persistence, permissions, states, and a lifecycle.</p></div><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Where it gets harder</p><p className="mt-5 text-base leading-8 text-ink-dim">Real-time delivery changes the problem. Presence, reconnects, message ordering, optimistic UI, and failure states all need to be handled without making the interface feel complicated.</p></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Stack</p><div className="mt-6 flex flex-wrap gap-2">{stack.map((item)=><span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">{item}</span>)}</div><p className="mt-7 max-w-3xl text-base leading-8 text-ink-dim">Next.js and React handle the application, TypeScript keeps the codebase predictable, Tailwind handles the interface, Motion handles interaction, and MongoDB/Mongoose provide persistence.</p></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">Current status</p><h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">A solid base. The real-time layer is the next big step.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-ink-dim">The current project already has a real database-backed foundation. I’m continuing with the parts that make it closer to a production communication product: stronger auth and authorization, REST expansion, WebSockets, presence, media, offline states, and deployment.</p></section>

        <div className="mt-20 flex flex-wrap gap-4"><Link href="/projects" className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-accent/30 hover:text-white">All projects ↗</Link><a href="https://github.com/nityansh19/Nitra-chat" target="_blank" rel="noreferrer" className="border border-accent/25 bg-accent/[0.08] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-accent/[0.14]">View source ↗</a></div>
      </article>
    </main>
  );
}
