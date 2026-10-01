import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "CareerUpAI — Nityansh Rupesh Bahadur",
  description: "A deeper look at CareerUpAI, an AI-powered career platform Nityansh is building.",
};

const features: [string, string, string][] = [
  ["01", "CV analysis", "Inspect a resume and surface useful strengths, gaps, and areas that need work."],
  ["02", "Resume workspace", "Create, edit, and improve career documents inside one workflow."],
  ["03", "Profile analysis", "Connect skills, experience, and profile information instead of treating them separately."],
  ["04", "Career guidance", "Turn profile information into clearer suggestions about what to improve next."],
  ["05", "Personalized feedback", "Make recommendations respond to the person’s information instead of generic advice."],
  ["06", "Unified workspace", "Keep the important parts of the career journey together as the product expands."],
];

const stack = ["React", "Vite", "JavaScript", "Node.js", "Express", "MongoDB", "AI"];

export default function CareerUpAIPage() {
  return (
    <ProjectCaseStudy
      eyebrow="Flagship 01 / AI career platform"
      status="Live beta · Nearly complete"
      title={<>CareerUp<span className="text-accent">AI</span></>}
      intro="A career platform built to turn scattered resume, profile, and career information into clearer next actions."
      metrics={[
        ["Focus", "Career intelligence"],
        ["Role", "Full stack"],
        ["Direction", "Applied AI"],
      ]}
      features={features}
      stack={stack}
      problemTitle="Career information is everywhere. Direction is not."
      problemCopy="When someone is preparing for internships or jobs, the hard part is rarely finding another checklist. It is understanding what matters for their own profile, what is missing, and what to work on first."
      approachTitle="Bring the workflow into one product."
      approachCopy="CareerUpAI connects resume analysis, profile information, feedback, and guidance so the experience feels like one system instead of several disconnected tools."
      statusTitle="Building the product, not just the demo."
      statusCopy="CareerUpAI is now deployed as a working product while I continue polishing flows, UX and the AI-assisted career experience."
      secondaryHref="https://career-up-ai-delta.vercel.app/"
      secondaryLabel="View live CareerUpAI"
      preview={
        <div className="relative min-h-[340px] overflow-hidden p-5 sm:min-h-[420px] sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(91,110,245,.14),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative mx-auto flex min-h-[300px] max-w-[820px] items-center justify-center">
            <div className="w-full rounded-[22px] border border-white/[0.10] bg-[#0d0f15]/94 p-5 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">CareerUpAI / workspace</p>
                  <p className="mt-2 font-display text-lg text-white/75 sm:text-xl">Career signal overview</p>
                </div>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.85)]" />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["CV", "Resume analysis"],
                  ["PROFILE", "Skill signals"],
                  ["NEXT", "Action plan"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                    <div className="font-mono text-[7px] text-accent/70">{label}</div>
                    <div className="mt-3 font-display text-base text-white/70">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-[1.4fr_.6fr]">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-4">
                  <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">AI feedback</div>
                  <div className="mt-4 h-2 w-4/5 rounded-full bg-white/[0.08]" />
                  <div className="mt-2 h-2 w-3/5 rounded-full bg-white/[0.05]" />
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-4">
                  <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">Priority</div>
                  <div className="mt-4 font-display text-xl text-accent">Next step</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
