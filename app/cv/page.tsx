"use client";

import Link from "next/link";

const skills = [
  ["Programming", "JavaScript · TypeScript · Python · C / C++"],
  ["Frontend", "React.js · Next.js · HTML5 · CSS3 · Tailwind CSS · Responsive UI · Framer Motion"],
  ["Backend & APIs", "Node.js · Express.js · REST APIs · MongoDB / Mongoose · Authentication · File & PDF processing"],
  ["Data & Cloud", "Supabase · Firebase / Firestore · Cloudflare D1 / R2 · MySQL"],
  ["Mobile & Product", "Capacitor · Expo · PWA · Cross-platform app architecture"],
  ["Tools & Delivery", "Git · GitHub · Vite · npm · Vercel · Netlify · Cloudflare · Deployment · Debugging · Testing"],
];

const projects = [
  {
    title: "Nivora",
    meta: "Personal Finance OS · React · TypeScript · Supabase · Capacitor · v1.0 Complete",
    href: "https://github.com/nityansh19/Nivora",
    text: "Built a feature-complete personal finance product for web and Android with expense and income tracking, accounts, transfers, budgets, savings goals, analytics, recurring activity, notifications, authentication, cloud persistence, multi-device recovery, PWA support, and an AI-assisted finance experience.",
  },
  {
    title: "Folio",
    meta: "Knowledge Workspace · React · TypeScript · Tiptap · Cloudflare D1 / R2",
    href: "https://github.com/nityansh19/Notes",
    text: "Built a private knowledge-management workspace with rich-text and Markdown editing, autosave, version history, backlinks, a graph view, collections, tasks, journals, project associations, advanced search, import/export, authenticated owner-scoped APIs, and protected file storage.",
  },
  {
    title: "CareerUpAI",
    meta: "AI Career Platform · React · Express · MongoDB · Resume Intelligence",
    href: "https://github.com/nityansh19/CareerUpAI",
    text: "Developing a full-stack career platform with resume PDF parsing and analysis, Career Profile workflows, career intelligence matching, personalized feedback, protected application flows, REST APIs, MongoDB persistence, and a responsive product experience.",
  },
  {
    title: "Barca Fan Companion",
    meta: "Web + Mobile · React · TypeScript · Expo · Cloudflare · API Integration",
    href: "https://github.com/nityansh19/Barca",
    text: "Built a cross-platform football companion foundation with a responsive web app, Expo mobile client, shared API models, fixture and squad search, favourites, calendar export, local-time reminder previews, durable feed caching, provider-ready live-data adapters, and automated tests.",
  },
  {
    title: "Nitra Chat",
    meta: "Communication Workspace · Next.js · TypeScript · Firebase / Firestore",
    href: "https://github.com/nityansh19/Nitra-chat",
    text: "Built a polished responsive communication workspace with conversation search, command palette, reactions, message actions, profile flows, mobile layouts, accessibility states, and a Firebase / Firestore architecture prepared for realtime backend migration.",
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
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40 print:text-black/55">Full Stack Developer · Web &amp; Product Engineer</p>
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
                <span className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-accent">Available for freelance work</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Responsive Websites</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Full-Stack Apps</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">UI Revamps</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">API Integration</span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">Deployment</span>
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-[1.25fr_.75fr] print:block">
            <div className="p-8 sm:p-12 print:p-0 print:pt-7">
              <section>
                <SectionTitle>Professional Profile</SectionTitle>
                <p className="text-[15px] leading-8 text-ink-dim print:text-black/75">
                  Full-stack developer focused on building polished, responsive, production-minded web products from idea to deployment. Experienced across modern React interfaces, REST APIs, authentication, databases, cloud persistence, cross-platform app foundations, and deployment workflows. I work best on projects that need both clean user experience and solid application logic, and I am available for freelance websites, dashboards, full-stack applications, API integrations, UI revamps, bug fixing, and deployment work.
                </p>
              </section>

              <section className="mt-12">
                <SectionTitle>Experience</SectionTitle>
                <div className="space-y-7">
                  <Experience title="Freelance Digital Services" role="Web Developer / Designer / Video Editor">
                    Worked from client requirements through execution, revisions, and final delivery across web development, visual design, and video-editing work. Comfortable translating loosely defined requests into clear deliverables and communicating progress independently.
                  </Experience>
                  <Experience title="Independent Product Development" role="Full Stack Developer">
                    Designed and built multiple end-to-end products covering finance, career intelligence, knowledge management, communication, mobile experiences, cloud persistence, API integration, testing, and deployment. Regularly work across UI, backend logic, data models, debugging, and release polish.
                  </Experience>
                </div>
              </section>

              <section className="mt-12">
                <SectionTitle>Featured Projects</SectionTitle>
                <div className="space-y-7">
                  {projects.map((project) => (
                    <div key={project.title}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-display text-2xl tracking-[-0.035em] text-white print:text-black">{project.title}</h3>
                        <a href={project.href} target="_blank" rel="noreferrer" className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/25 transition-colors hover:text-accent print:text-black/45">GitHub ↗</a>
                      </div>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-accent/75 print:text-black/45">{project.meta}</p>
                      <p className="mt-3 text-sm leading-7 text-ink-dim print:text-black/75">{project.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="border-l border-white/[0.08] bg-white/[0.018] p-8 sm:p-12 print:mt-7 print:border-l-0 print:border-t print:border-black/15 print:bg-white print:p-0 print:pt-7">
              <section>
                <SectionTitle>Services I Can Deliver</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {["Business websites", "Landing pages", "Portfolio sites", "Full-stack apps", "Dashboards", "Responsive redesigns", "API integrations", "Authentication", "Database integration", "Bug fixing", "Performance polish", "Deployment"].map((item) => <span key={item} className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35 print:border-black/15 print:text-black/60">{item}</span>)}
                </div>
              </section>

              <section className="mt-12">
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
                <SectionTitle>Additional Build</SectionTitle>
                <div>
                  <h3 className="font-display text-xl text-white print:text-black">ScoutOP Live Follower Tracker</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-dim print:text-black/75">Minimal Next.js live-count interface with a server endpoint for follower-count retrieval.</p>
                  <a href="https://github.com/nityansh19/Tracker" target="_blank" rel="noreferrer" className="mt-2 inline-block font-mono text-[8px] uppercase tracking-[0.12em] text-accent/70 print:text-black/45">View repository ↗</a>
                </div>
              </section>

              <section className="mt-12">
                <SectionTitle>Professional Strengths</SectionTitle>
                <div className="flex flex-wrap gap-2">
                  {["Problem solving", "Fast learning", "Client communication", "Requirement understanding", "Independent execution", "Attention to UI", "Debugging", "Adaptability"].map((item) => <span key={item} className="rounded-full border border-white/[0.08] px-3 py-1.5 font-mono text-[8px] text-white/35 print:border-black/15 print:text-black/60">{item}</span>)}
                </div>
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
