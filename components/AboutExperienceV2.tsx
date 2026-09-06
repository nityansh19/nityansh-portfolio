"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const journey = [
  ["2025", "Getting started", "I started taking web development seriously and spent a lot of time figuring out how things worked instead of just copying tutorials.", "HTML · CSS · JavaScript"],
  ["2026", "Going deeper", "I moved into full-stack work and started spending more time with React, Node, MongoDB, Python, AI, Docker, Linux, and DevOps.", "React · Node · MongoDB · Python · AI"],
  ["NOW", "Building", "These days I’m putting what I’ve learned into bigger projects like Nivora and CareerUpAI, while continuing to get better at the parts of software I still don’t know.", "Nivora · CareerUpAI · Full Stack"],
];

const work = [
  ["Nivora", "PERSONAL FINANCE OS", "A finance app I’m building to keep track of everyday spending, income, savings, budgets, goals, and the numbers behind them.", "/projects/nivora", "React · Vite · TypeScript"],
  ["CareerUpAI", "AI · FULL STACK", "A career platform I’m building around resumes, profiles, career guidance, and helping people find opportunities that fit them better.", "/projects/careerupai", "Full Stack · AI"],
  ["Nitra Chat", "REAL-TIME · FULL STACK", "A chat application where I’ve been working through real-time communication, backend logic, interface details, and what it takes to put a full app together.", "/projects", "React · Backend · Real-time"],
];

const stack = [
  ["Frontend", "React · TypeScript · JavaScript · Tailwind", "UI / MOTION / UX"],
  ["Backend", "Node.js · Express · Flask · Django · REST APIs", "API / LOGIC / SERVICES"],
  ["Data", "MongoDB · MySQL · Firebase", "DATA / MODELS / FLOW"],
  ["Engineering", "Python · AI · Docker · Linux · Git · GitHub", "PYTHON / AI / INFRA"],
];

const principles = [
  ["01", "Start with the problem", "Before building anything, I want to know what it is actually supposed to solve."],
  ["02", "Keep things understandable", "I try to break a big problem into smaller pieces that I can reason about."],
  ["03", "Build, break, fix", "A lot of learning happens when something doesn’t work and I have to figure out why."],
  ["04", "Make it useful", "I’d rather finish something people could actually use than build another demo just for the sake of it."],
];

export default function AboutExperienceV2() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <div className="mx-auto max-w-[1180px]">
        <header className="max-w-5xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">About / Me</p>
          <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">A developer<br />who likes to build.</h1>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">I’m Nityansh. I build web applications, spend a lot of time learning, and lately I’ve been getting deeper into Python and AI. I like taking an idea and seeing how far I can take it.</p>
          <div className="mt-8 flex flex-wrap gap-3">{["Full-Stack Developer", "Python", "AI", "Lucknow, India"].map((item) => <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">{item}</span>)}</div>
        </header>

        <section className="mt-20 grid gap-12 border-t border-line pt-12 md:mt-28 md:grid-cols-[0.8fr_1.2fr] md:gap-24 md:pt-16">
          <div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">A LITTLE ABOUT ME</p><p className="mt-6 font-display text-2xl leading-tight tracking-[-0.04em] text-white/85 sm:text-3xl">I’m happiest when I’m figuring something out.</p></div>
          <div className="space-y-6 text-[15px] leading-8 text-ink-dim sm:text-base sm:leading-9"><p>I’ve always liked projects where there’s something I don’t completely understand yet. That usually means more debugging, more reading, and a lot of trial and error — but that’s also the part I enjoy.</p><p>My main focus is full-stack development. I’m also putting more time into Python because I want to understand AI beyond simply using an API and build useful things with it.</p><p>I’ve done freelance web, design, and video work too. It taught me a different side of development: listening to what someone actually wants, communicating when things change, and making sure the final result gets delivered.</p></div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">THE JOURNEY</p><h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">How I got here.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-ink-faint">I’m still early in the journey, but the projects are getting bigger and the problems are getting more interesting.</p></div><div className="space-y-3">{journey.map(([year, title, text, tags], i) => <motion.article key={year} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={reducedMotion ? undefined : { y: -4 }} className="grid gap-5 rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-6 sm:grid-cols-[80px_1fr] sm:p-7"><span className="font-mono text-[9px] tracking-[0.16em] text-accent/75">{year}</span><div><h3 className="font-display text-2xl tracking-[-0.04em] text-white/85">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-dim">{text}</p><p className="mt-4 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">{tags}</p></div></motion.article>)}</div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">HOW I WORK</p><h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">My usual approach.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-ink-faint">There’s no complicated formula. I usually start by understanding the problem, then figure things out as I build.</p><div className="mt-10 grid gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">{principles.map(([n, title, text]) => <div key={n} className="bg-bg p-7"><span className="font-mono text-[9px] text-accent/60">{n}</span><h3 className="mt-7 font-display text-xl text-white/80">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-dim">{text}</p></div>)}</div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">EXPERIENCE</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">Work outside the projects.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-ink-faint">Some of my best lessons have come from working with other people, not just writing code by myself.</p></div><div className="space-y-4">{[["01", "Freelance Digital Services", "Web · Design · Video", "I’ve worked on web development, graphic design, and video projects for clients. That meant figuring out requirements, making changes along the way, communicating clearly, and getting the work finished."], ["02", "College Coding Club", "Technical Member", "I’ve taken part in coding activities, technical discussions, practice sessions, and group problem-solving with other students."]].map(([n, title, meta, text]) => <motion.article key={n} whileHover={reducedMotion ? undefined : { y: -4 }} className="rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-7"><div className="flex flex-wrap justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.16em]"><span className="text-accent">{n} / {title}</span><span className="text-white/20">{meta}</span></div><p className="mt-5 text-sm leading-7 text-ink-dim">{text}</p></motion.article>)}</div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">PROJECTS</p><h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Things I’m actually working on.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-ink-faint">These are the projects where most of my learning is happening right now.</p><div className="mt-10 grid gap-4 lg:grid-cols-3">{work.map(([title, type, text, href, tags], i) => <motion.article key={title} whileHover={reducedMotion ? undefined : { y: -6 }} className="group flex min-h-[310px] flex-col rounded-[22px] border border-white/[0.08] bg-white/[0.018] p-7"><span className="font-mono text-[8px] tracking-[0.16em] text-accent/70">0{i + 1}</span><h3 className="mt-7 font-display text-2xl tracking-[-0.04em] text-white/85">{title}</h3><p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">{type}</p><p className="mt-5 text-sm leading-7 text-ink-dim">{text}</p><div className="mt-auto pt-7"><p className="mb-5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">{tags}</p><Link href={href} className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-accent">See project ↗</Link></div></motion.article>)}</div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">TECH</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">What I use.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-ink-faint">The stack changes depending on what I’m building, but these are the tools I spend the most time with.</p></div><div className="grid gap-3 sm:grid-cols-2">{stack.map(([title, items, signal]) => <div key={title} className="rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6 transition-colors hover:border-accent/20"><p className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/70">{signal}</p><h3 className="mt-4 font-display text-xl text-white/80">{title}</h3><p className="mt-3 text-sm leading-6 text-ink-dim">{items}</p></div>)}</div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20"><div><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">EDUCATION</p><h2 className="mt-5 font-display text-3xl tracking-[-0.045em] text-white/80 sm:text-4xl">Where I’m studying.</h2></div><div className="rounded-[22px] border border-accent/20 bg-accent/[0.035] p-7"><p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent">CURRENT</p><h3 className="mt-3 font-display text-2xl text-white/85">Integral University, Lucknow</h3><p className="mt-2 text-sm text-ink-dim">Bachelor of Computer Applications (BCA) — Computer Science</p><div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35">CGPA 7.3 / 10</span><span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35">Computer Science</span></div></div></div></section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24"><div className="rounded-[28px] border border-accent/20 bg-accent/[0.035] p-8 sm:p-10"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/75">OPEN TO OPPORTUNITIES</p><h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">I’m looking for a place where I can keep learning, take on real work, and be useful to the team.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-ink-dim">If you’re working on something interesting and think I could contribute, I’d be happy to talk.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="rounded-full bg-white px-5 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-black">See my work ↗</Link><Link href="/contact" className="rounded-full border border-white/[0.12] px-5 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/60 hover:border-accent/40 hover:text-white">Get in touch ↗</Link></div></div></section>
      </div>
    </main>
  );
}
