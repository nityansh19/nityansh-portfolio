"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const journey = [
  ["2025", "Foundation", "Moved from tutorials into understanding how software actually works.", "HTML · CSS · JavaScript"],
  ["2026", "Building phase", "Went deeper into full-stack development while expanding into Python, AI, Docker, Linux, and DevOps.", "React · Node · MongoDB · Python · AI"],
  ["NOW", "Building with intent", "Turning larger ideas into products such as Nivora and CareerUpAI.", "Nivora · CareerUpAI · Full Stack"],
];

const work = [
  ["Nivora", "PERSONAL FINANCE OS", "A calm finance product for spending, income, savings, budgets, goals, and useful financial insights.", "/projects/nivora", "React · Vite · TypeScript"],
  ["CareerUpAI", "AI · FULL STACK", "A career platform built around resume intelligence, profile improvement, guidance, and personalized opportunities.", "/projects/careerupai", "Full Stack · AI"],
  ["Nitra Chat", "REAL-TIME · FULL STACK", "A messaging product exploring real-time communication, interaction design, backend systems, and deployment.", "/projects", "React · Backend · Real-time"],
];

const stack = [
  ["Frontend", "React · TypeScript · JavaScript · Tailwind", "UI / MOTION / UX"],
  ["Backend", "Node.js · Express · Flask · Django · REST APIs", "API / LOGIC / SERVICES"],
  ["Data", "MongoDB · MySQL · Firebase", "DATA / MODELS / FLOW"],
  ["Engineering", "Python · AI · Docker · Linux · Git · GitHub", "PYTHON / AI / INFRA"],
];

const principles = [
  ["01", "Problem first", "Understand what is worth solving."],
  ["02", "System thinking", "Break complexity into clear pieces."],
  ["03", "Iteration", "Build, test, debug, and improve."],
  ["04", "Useful software", "Ship things people can actually use."],
];

export default function AboutExperienceV2() {
  const reducedMotion = useReducedMotion();
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <div className="mx-auto max-w-[1180px]">
        <header className="max-w-5xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">About / Profile</p>
          <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">More than<br />just code.</h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">I&apos;m Nityansh — a Full-Stack Developer, Python Developer, and AI Application Enthusiast focused on turning ambitious ideas into practical digital products.</p>
          <div className="mt-8 flex flex-wrap gap-3">{["Full-Stack Developer", "Python Developer", "AI Applications", "Lucknow, India"].map((item) => <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">{item}</span>)}</div>
        </header>

        <section className="mt-20 grid gap-12 border-t border-line pt-12 md:mt-28 md:grid-cols-[0.8fr_1.2fr] md:gap-24 md:pt-16">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">WHO I AM</p><p className="mt-6 font-display text-2xl leading-tight tracking-[-0.04em] text-white/85 sm:text-3xl">Curious by default. Ambitious by choice.</p></div>
          <div className="space-y-6 text-[15px] leading-8 text-ink-dim sm:text-base sm:leading-9"><p>I enjoy projects that force me to think deeply, understand systems, solve difficult problems, and learn something new along the way.</p><p>My focus is full-stack development, with Python becoming a primary language as I move deeper into AI applications, automation, and software engineering.</p><p>Freelance web, design, and video work has also taught me how to understand requirements, communicate clearly, work independently, and deliver.</p></div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">THE JOURNEY</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Learning by building.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-ink-faint">A timeline of increasing depth, not just a list of technologies.</p></div><div className="space-y-3">{journey.map(([year, title, text, tags], i) => <motion.article key={year} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={reducedMotion ? undefined : { y: -4 }} className="grid gap-5 rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-6 sm:grid-cols-[80px_1fr] sm:p-7"><span className="font-mono text-[9px] tracking-[0.16em] text-accent/75">{year}</span><div><h3 className="font-display text-2xl tracking-[-0.04em] text-white/85">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-dim">{text}</p><p className="mt-4 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">{tags}</p></div></motion.article>)}</div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">HOW I BUILD</p><h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">From idea to something real.</h2><div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">{principles.map(([n, title, text]) => <div key={n} className="bg-bg p-7"><span className="font-mono text-[9px] text-accent/60">{n}</span><h3 className="mt-7 font-display text-xl text-white/80">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-dim">{text}</p></div>)}</div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">EXPERIENCE</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">Real work behind the projects.</h2></div><div className="space-y-4">{[["01", "Freelance Digital Services", "Web · Design · Video", "Delivered client-focused digital work while handling requirements, communication, independent execution, deadlines, and final delivery."], ["02", "College Coding Club", "Technical Member", "Participated in coding activities, technical discussions, collaborative development, programming practice, and problem-solving sessions."]].map(([n, title, meta, text]) => <motion.article key={n} whileHover={reducedMotion ? undefined : { y: -4 }} className="rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-7"><div className="flex flex-wrap justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em]"><span className="text-accent">{n} / {title}</span><span className="text-white/20">{meta}</span></div><p className="mt-5 text-sm leading-7 text-ink-dim">{text}</p></motion.article>)}</div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">SELECTED WORK</p><h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">The products I&apos;m learning through.</h2><div className="mt-10 grid gap-4 lg:grid-cols-3">{work.map(([title, type, text, href, tags], i) => <motion.article key={title} whileHover={reducedMotion ? undefined : { y: -6 }} className="group flex min-h-[310px] flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-7"><span className="font-mono text-[8px] tracking-[0.16em] text-accent/70">0{i + 1}</span><h3 className="mt-7 font-display text-2xl tracking-[-0.04em] text-white/85">{title}</h3><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">{type}</p><p className="mt-5 text-sm leading-7 text-ink-dim">{text}</p><div className="mt-auto pt-7"><p className="mb-5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">{tags}</p><Link href={href} className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-accent">Explore ↗</Link></div></motion.article>)}</div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">STACK</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">The current toolkit.</h2></div><div className="grid gap-3 sm:grid-cols-2">{stack.map(([title, items, signal]) => <div key={title} className="rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6 transition-colors hover:border-accent/20"><p className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/70">{signal}</p><h3 className="mt-4 font-display text-xl text-white/80">{title}</h3><p className="mt-3 text-sm leading-6 text-ink-dim">{items}</p></div>)}</div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">EDUCATION</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">The academic track.</h2></div><div className="rounded-[22px] border border-accent/20 bg-accent/[0.035] p-7"><p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent">Current</p><h3 className="mt-3 font-display text-2xl text-white/85">Integral University, Lucknow</h3><p className="mt-2 text-sm text-ink-dim">Bachelor of Computer Applications (BCA) — Computer Science</p><div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35">CGPA 7.3 / 10</span><span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35">Computer Science</span></div></div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="rounded-[28px] border border-accent/20 bg-accent/[0.035] p-8 sm:p-10"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/75">OPEN TO OPPORTUNITIES</p><h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Looking for places to learn fast, contribute seriously, and build useful software.</h2><div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="rounded-full bg-white px-5 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-black">View work ↗</Link><Link href="/contact" className="rounded-full border border-white/[0.12] px-5 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/60 hover:border-accent/40 hover:text-white">Let&apos;s connect ↗</Link></div></div></section>
      </div>
    </main>
  );
}
