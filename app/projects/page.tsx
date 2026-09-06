import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Nityansh Rupesh Bahadur",
  description: "Selected products, experiments, and engineering systems built by Nityansh Rupesh Bahadur.",
};

const projects = [
  {
    number: "01",
    title: "Nivora",
    category: "FINTECH · PRODUCT ENGINEERING",
    description:
      "A calm personal finance OS for daily expenses, income, savings, budgets, goals, and financial analytics — designed as a reusable product foundation rather than a generic CRUD dashboard.",
    href: "/projects/nivora",
    status: "Phase 0 · Foundation",
  },
  {
    number: "02",
    title: "CareerUpAI",
    category: "AI · FULL STACK",
    description:
      "An AI-powered career platform focused on resume analysis, profile improvement, career guidance, and practical recommendations that turn career information into clearer next steps.",
    href: "/projects/careerupai",
    status: "Currently building",
  },
  {
    number: "03",
    title: "Nitra Chat",
    category: "REAL-TIME · FULL STACK",
    description:
      "A premium messaging platform with a custom product identity, rich interaction design, database-backed users and conversations, and a roadmap toward real-time communication.",
    href: "/projects/nitra-chat",
    status: "Active development",
  },
  {
    number: "04",
    title: "Personal AI Assistant",
    category: "AI · AUTOMATION",
    description:
      "An experimental personal AI system exploring context, tools, developer workflows, automation, productivity, and a personal knowledge layer.",
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
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.22em] text-accent/80">
            <span className="h-px w-8 bg-accent" />
            Selected Work / 2026
          </div>
          <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.84] tracking-[-0.07em]">
            Projects
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink-dim sm:text-lg">
            A focused collection of products I am building to solve real problems, sharpen engineering depth, and explore how thoughtful software should feel.
          </p>
        </div>

        <div className="mt-20 space-y-6 md:mt-28">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
          <span className="h-px w-10 bg-white/[0.10]" />
          More experiments will appear here as they become ready to showcase.
        </div>
      </div>
    </main>
  );
}
