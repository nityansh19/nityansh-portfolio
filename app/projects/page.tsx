import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Nityansh Rupesh Bahadur",
  description: "Projects and products built by Nityansh Rupesh Bahadur.",
};

const projects = [
  {
    number: "01",
    title: "Nivora",
    category: "FINTECH · PRODUCT ENGINEERING",
    description:
      "A complete personal finance app for tracking expenses, income, accounts, savings, budgets, goals, analytics, recurring activity, and secure cloud-backed user data.",
    href: "/projects/nivora",
    status: "v1.0 · Complete",
  },
  {
    number: "02",
    title: "CareerUpAI",
    category: "AI · FULL STACK",
    description:
      "An AI-powered career platform I’m building around resumes, profiles, career guidance, and helping people find opportunities that fit them better.",
    href: "/projects/careerupai",
    status: "Currently building",
  },
  {
    number: "03",
    title: "Nitra Chat",
    category: "REAL-TIME · FULL STACK",
    description:
      "A chat application where I’ve been working through real-time communication, backend logic, database-backed conversations, and the details that make a messaging app feel good to use.",
    href: "/projects/nitra-chat",
    status: "Active development",
  },
  {
    number: "04",
    title: "Personal AI Assistant",
    category: "AI · AUTOMATION",
    description:
      "A personal AI project for experimenting with assistants, context, automation, developer workflows, and the idea of having useful tools in one place.",
    href: "/projects/personal-ai",
    status: "Currently building",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg px-6 pb-32 pt-32 sm:px-8 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[8%] h-[480px] w-[480px] rounded-full bg-accent/[0.045] blur-[150px]" />
        <div className="absolute right-[-8%] top-[42%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.035] blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto max-w-[1180px]">
        <header className="max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80">
            <span className="h-px w-8 bg-accent" />
            03 / Projects
          </div>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
                Things I’m
                <br />
                <span className="text-white/40">building.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-ink-dim sm:text-lg">
                A mix of finished products and active builds. I care most about making things that solve a real problem, feel polished, and keep pushing my engineering skills forward.
              </p>
            </div>

            <div className="shrink-0 border-l border-white/[0.10] pl-5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/25 md:mb-1">
              <div>04 projects</div>
              <div className="mt-2 text-emerald-400/70">01 complete · 03 active</div>
            </div>
          </div>
        </header>

        <div className="mt-20 flex items-center gap-4 md:mt-28">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">Project index</span>
          <span className="h-px flex-1 bg-white/[0.07]" />
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">01 — 04</span>
        </div>

        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.07] pt-6 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-accent/60">Next</span>
          <span>More projects will go here when they’re ready.</span>
        </div>
      </div>
    </main>
  );
}
