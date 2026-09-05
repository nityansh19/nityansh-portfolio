import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Nityansh Rupesh Bahadur",
  description: "Selected projects and systems built by Nityansh Rupesh Bahadur.",
};

const projects = [
  {
    number: "01",
    title: "CareerUpAI",
    category: "AI · FULL STACK",
    description:
      "An AI-powered career platform focused on resume analysis, profile improvement, career guidance, and practical recommendations.",
    href: "/projects/careerupai",
    status: "Currently building",
  },
  {
    number: "02",
    title: "Personal AI",
    category: "AI · AUTOMATION",
    description:
      "An experimental personal AI system exploring context, tools, developer workflows, automation, and a personal knowledge layer.",
    href: "/projects/personal-ai",
    status: "Currently building",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
            Selected Work / 2026
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
            Projects
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink-dim sm:text-lg">
            A small collection of ambitious systems. Each project is built to
            solve a real problem and push my engineering depth further.
          </p>
        </div>

        <div className="mt-20 space-y-5 md:mt-28">
          {projects.map((project) => (
            <Link
              key={project.number}
              href={project.href}
              className="group relative block overflow-hidden rounded-[26px] border border-white/[0.10] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.035] sm:p-10 md:p-12"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(91,110,245,0.10),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 grid gap-10 md:grid-cols-[90px_1fr_auto] md:items-end">
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent/60">
                  {project.number}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                    <span>{project.category}</span>
                    <span className="text-accent/50">·</span>
                    <span>{project.status}</span>
                  </div>
                  <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-dim sm:text-base">
                    {project.description}
                  </p>
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-accent">
                  Open ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
