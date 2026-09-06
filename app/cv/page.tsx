"use client";

import Link from "next/link";

const skills = [
  ["Programming", "Python · JavaScript · TypeScript · C / C++"],
  ["Frontend", "HTML5 · CSS3 · React.js · Tailwind CSS · Bootstrap · Responsive Design"],
  ["Backend", "Node.js · Express.js · Flask · Django · REST APIs"],
  ["Data", "MongoDB · MySQL · Firebase"],
  ["Tools", "Git · GitHub · VS Code · npm · Docker · Vercel · Netlify"],
  ["Additional", "API Integration · Debugging · Version Control · Deployment"],
];

const projects = [
  {
    title: "Nivora",
    meta: "Fintech · Product Engineering · Phase 0 Foundation",
    text: "Personal finance application focused on daily expenses, income, savings, budgets, analytics, and goals. Current work is centered on the product foundation, interaction model, responsive UI, and the structure needed for the core data layer.",
  },
  {
    title: "CareerUpAI",
    meta: "AI · Full Stack · Currently Building",
    text: "Career platform designed around CV and resume analysis, profile analysis, career guidance, personalized feedback, and a single workspace. Covers frontend, backend, database functionality, and AI-driven workflows.",
  },
  {
    title: "Nitra Chat",
    meta: "Real-time · Full Stack · Active Development",
    text: "Telegram-inspired messaging application built with a focus on identity, messaging, discovery, persistence, and interaction. Next work includes stronger authorization, REST expansion, WebSockets, presence, media, offline states, and deployment.",
  },
  {
    title: "Personal AI Assistant",
    meta: "AI · Automation · Currently Building",
    text: "Personal project exploring Python, LLMs, automation, tool use, knowledge, developer workflows, and practical AI systems. The goal is to learn how useful assistant-style software works beyond a basic chat interface.",
  },
];

export default function CVPage() {
  function printCV() {
    window.print();
  }

  return (
    <main className="min-h-screen bg-bg px-5 pb-28 pt-32 sm:px-8 md:pt-40 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link href="/" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent">← Back to portfolio</Link>
          <button type="button" onClick={printCV} className="rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65 transition-all hover:-translate-y-0.5 hover:bg-accent/[0.14] hover:text-white">Print / Save as PDF ↗</button>
        </div>

        <article className="overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#0a0b0f] shadow-[0_50px_150px_rgba(0,0,0,.38)] print:rounded-none print:border-0 print:bg-white print:text-black print:shadow-none">
          <header className="relative overflow-hidden border-b border-white/[0.08] p-8 sm:p-12 print:border-black/15 print:p-0 print:pb-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(91,110,245,.15),transparent_30%)] print:hidden" />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent print:text-black/45">Curriculum Vitae</p>
                  <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl print:text-black">Nityansh Rupesh Bahadur</h1>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 print:text-black/55">Full Stack Developer · Python &amp; AI Learner</p>
                </div>
                <div className="font-mono text-[9px] leading-6 text-white/35 sm:text-right print:text-black/55">
                  <div>Lucknow, Uttar Pradesh</div>
                  <div>+91 79921 32077</div>
                  <div>Nityansh.bahadur1905@gmail.com</div>
                  <div>github.com/nityansh19</div>
                  <div>nityansh-portfolio.vercel.app</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 print:hidden">
                <span className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-accent">Open for jobs &amp; opportunities</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Internships</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Web / Full Stack</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Python</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Software Development</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">AI</span>
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-[1.25fr_.75fr] print:block">
            <div className="p-8 sm:p-12 print:p-0 print:pt-7">
              <section>
                <SectionTitle>Professional Profile</SectionTitle>
                <p className="text-[15px] leading-8 text-ink-dim print:text-black/75">
                  BCA Computer Science student at Integral University with practical experience building and deploying full-stack web applications. Strong foundation in modern JavaScript and Python, with current work moving deeper into backend systems and AI-powered application development. Also experienced with freelance web development, graphic design, and video editing, with a focus on understanding requirements and delivering the finished work.
                </p>
              </section>

              <section className="mt-12">
                <SectionTitle>Experience</SectionTitle>
                <div className="space-y-7">
                  <Experience title="Freelance Digital Services" role="Freelance Web Developer / Graphic Designer / Video Editor">
                    Delivered web development, graphic design, and video editing projects based on client requirements. Handled client communication, requirement understanding, independent execution, deadlines, revisions, and delivery.
                  </Experience>
                  <Experience title="College Coding Club" role="Technical Member">
                    Participated in coding activities, technical discussions, collaborative development, programming practice, idea sharing, and problem-solving sessions with peers.
                  </Experience>
                </div>
              </section>

              <section className="mt-12">
                <SectionTitle>Featured Projects</SectionTitle>
                <div className="space-y-7">
                  {projects.map((project) => (
                    <div key={project.title}>
                      <h3 className="font-display text-2xl tracking-[-0.035em] text-white print:text-black">{project.title}</h3>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-accent/75 print:text-black/45">{project.meta}</p>
                      <p className="mt-3 text-sm leading-7 text-ink-dim print:text-black/75">{project.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="border-l border-white/[0.08] bg-white/[0.018] p-8 sm:p-12 print:mt-7 print:border-l-0 print:border-t print:border-black/15 print:bg-white print:p-0 print:pt-7">
              <section>
                <SectionTitle>Technical Skills</SectionTitle>
                <div className="space-y-5">
                  {skills.map(([group, list]) => (
                    <div key={group}>
                      <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-accent/70 print:text-black/45">{group}</div>
                      <p className="mt-2 text-sm leading-6 text-ink-dim print:text-black/75">{list}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12">
                <SectionTitle>Education</SectionTitle>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl text-white print:text-black">Integral University, Lucknow</h3>
                    <p className="mt-1 text-sm text-ink-dim print:text-black/75">BCA — Computer Science</p>
                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/25 print:text-black/50">Third Year · Expected May 2027 · CGPA 7.3 / 10</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white print:text-black">NIOS</h3>
                    <p className="mt-1 font-mono text-[8px] text-white/25 print:text-black/50">Class XII · 70%</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white print:text-black">Bal Vidya Mandir</h3>
                    <p className="mt-1 font-mono text-[8px] text-white/25 print:text-black/50">Class X · 80%</p>
                  </div>
                </div>
              </section>

              <section className="mt-12">
                <SectionTitle>Professional Strengths</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {["Problem solving", "Fast learning", "Communication", "Client requirements", "Independent execution", "Teamwork", "Adaptability", "Creative approach"].map((item) => <span key={item} className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35 print:border-black/15 print:text-black/60">{item}</span>)}
                </div>
              </section>

              <section className="mt-12">
                <SectionTitle>Languages</SectionTitle>
                <div className="space-y-2 font-mono text-[9px] text-white/40 print:text-black/60">
                  <div>English — Fluent / Professional</div>
                  <div>Spanish — Knowledge</div>
                  <div>Japanese — Knowledge</div>
                </div>
              </section>

              <section className="mt-12">
                <SectionTitle>Interests</SectionTitle>
                <p className="text-sm leading-7 text-ink-dim print:text-black/75">Full-stack development, Python, AI applications, backend systems, and developer tooling.</p>
              </section>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent/75 print:text-black/45">{children}</h2>;
}

function Experience({ title, role, children }: { title: string; role: string; children: React.ReactNode }) {
  return (
    <div className="border-l border-accent/30 pl-5">
      <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-accent/75 print:text-black/45">{title}</div>
      <h3 className="mt-2 font-display text-2xl tracking-[-0.035em] text-white print:text-black">{role}</h3>
      <p className="mt-2 text-sm leading-7 text-ink-dim print:text-black/75">{children}</p>
    </div>
  );
}
