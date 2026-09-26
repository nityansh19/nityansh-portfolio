import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Nityansh Rupesh Bahadur",
  description: "Projects and products built by Nityansh Rupesh Bahadur.",
};

const projects = [
  {
    number: "01",
    title: "CareerUpAI",
    category: "AI · FULL STACK · PRODUCT",
    description:
      "An AI-powered career platform built around resumes, profiles, guidance, and helping people make clearer career decisions.",
    href: "/projects/careerupai",
    status: "Flagship · Building",
  },
  {
    number: "02",
    title: "Personal AI / JARVIS",
    category: "AI · AUTOMATION · WORKSPACE",
    description:
      "A personal AI workspace exploring context, automation, developer workflows, and the idea of bringing useful tools into one intelligent system.",
    href: "/projects/personal-ai",
    status: "Flagship · Building",
  },
  {
    number: "03",
    title: "Nivora",
    category: "FINTECH · PRODUCT ENGINEERING",
    description:
      "A personal finance product for expenses, income, savings, budgets, goals, analytics and day-to-day financial organization.",
    href: "/projects/nivora",
    status: "v1.0 · Complete",
  },
  {
    number: "04",
    title: "Nitra Chat",
    category: "REAL-TIME · FULL STACK",
    description:
      "A real-time chat application focused on communication flows, backend logic, database-backed conversations and polished messaging UX.",
    href: "/projects/nitra-chat",
    status: "Active development",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg px-6 pb-32 pt-32 sm:px-8 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[8%] h-[480px] w-[480px] rounded-full bg-accent/[0.045] blur-[150px]" />
        <div className="absolute right-[-8%] top-[42%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.035] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px]">
        <header className="max-w-4xl">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80">
            <span className="h-px w-8 bg-accent" />
            Projects / Selected systems
          </div>

          <h1 className="mt-7 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
            Things I&apos;m
            <br />
            <span className="text-white/38">serious about.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-ink-dim sm:text-lg">
            Not a wall of tutorial projects. These are the products I use to push deeper into engineering, AI, backend systems and product thinking.
          </p>
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
      </div>
    </main>
  );
}
