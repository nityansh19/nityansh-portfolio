import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "Personal AI — Nityansh Rupesh Bahadur",
  description: "A deeper look at Nityansh's experimental personal AI and automation project.",
};

const systems: [string, string, string][] = [
  ["01", "Context", "Keep track of the current goal instead of treating every message as an isolated request."],
  ["02", "Tools", "Explore how an assistant can work with APIs, files, and developer utilities."],
  ["03", "Automation", "Use Python and workflows to remove repetitive work from the developer workspace."],
  ["04", "Knowledge", "Experiment with a personal knowledge layer so the system becomes more useful over time."],
  ["05", "Developer workflow", "Use AI inside the process of building software, not as a separate novelty feature."],
  ["06", "Experimentation", "Keep the architecture flexible while testing what is actually useful."],
];

const stack = ["Python", "AI", "LLMs", "React", "Node.js", "APIs", "Linux", "Docker"];

export default function PersonalAIPage() {
  return (
    <ProjectCaseStudy
      eyebrow="Flagship 02 / AI workspace"
      status="Experimental build"
      title={<>Personal AI <span className="text-white/28">/ JARVIS</span></>}
      intro="A long-term workspace AI experiment focused on context, tools, automation, and making an assistant useful inside real developer workflows."
      metrics={[
        ["Focus", "Context + tools"],
        ["Core", "Python"],
        ["Direction", "AI systems"],
      ]}
      features={systems}
      stack={stack}
      problemTitle="A chatbot can answer. I want a system that can assist."
      problemCopy="The interesting challenge is not only generating a good response. It is keeping useful context, choosing the right tools, handling failures, and fitting those capabilities into the way work already happens."
      approachTitle="Treat the model as one layer of a larger system."
      approachCopy="The project is built around context, tools, automation, permissions, APIs, and a workspace interface. The model matters, but the surrounding engineering is where the assistant becomes practical."
      statusTitle="Still experimental — intentionally."
      statusCopy="I’m keeping the project flexible so I can test capabilities one at a time, learn what genuinely improves the workflow, and avoid turning it into a giant feature list before the core system is useful."
      secondaryHref="/terminal"
      secondaryLabel="Talk to the portfolio"
      preview={
        <div className="relative min-h-[340px] overflow-hidden p-5 sm:min-h-[420px] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(139,92,246,.14),transparent_40%)]" />
          <div className="relative mx-auto flex min-h-[300px] max-w-[820px] items-center justify-center overflow-hidden rounded-[22px] border border-white/[0.08] bg-black/20">
            <div className="absolute h-60 w-60 rounded-full border border-white/[0.07]" />
            <div className="absolute h-44 w-44 rounded-full border border-dashed border-violet-300/[0.12]" />
            <div className="absolute h-28 w-28 rounded-full border border-violet-300/[0.16] bg-violet-400/[0.04] shadow-[0_0_80px_rgba(139,92,246,.18)]" />

            {[
              ["CONTEXT", "left-5 top-6 sm:left-12 sm:top-12"],
              ["TOOLS", "right-5 top-7 sm:right-12 sm:top-14"],
              ["PYTHON", "left-6 bottom-7 sm:left-14 sm:bottom-14"],
              ["AUTOMATION", "right-4 bottom-8 sm:right-10 sm:bottom-12"],
            ].map(([label, pos]) => (
              <div key={label} className={"absolute " + pos + " rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/30"}>
                {label}
              </div>
            ))}

            <div className="relative z-10 text-center">
              <div className="font-mono text-[7px] uppercase tracking-[0.24em] text-violet-300/60">Personal AI</div>
              <div className="mt-2 font-display text-2xl tracking-[-0.04em] text-white/80">WORKSPACE</div>
              <div className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">context → tools → action</div>
            </div>
          </div>
        </div>
      }
    />
  );
}
