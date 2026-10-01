"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import CareerUpLivePreview from "@/components/CareerUpLivePreview";

const projects = [
  {
    number: "01",
    title: <>CareerUp<span className="text-accent">AI</span></>,
    name: "CareerUpAI",
    eyebrow: "AI CAREER PLATFORM",
    description: "An AI-powered career platform designed to help users understand their profile, improve their resume, explore career paths and make smarter career decisions.",
    status: "Live beta · Nearly complete",
    href: "/projects/careerupai",
    liveUrl: "https://career-up-ai-delta.vercel.app/",
    stack: ["React", "Node.js", "MongoDB", "AI"],
    visual: "career",
  },
  {
    number: "02",
    title: <>Nitra <span className="text-accent">Chat</span></>,
    name: "Nitra Chat",
    eyebrow: "REAL-TIME COMMUNICATION",
    description: "A full-stack messaging product focused on identity, conversations, persistence, backend logic and the real-time layer that makes communication feel instant.",
    status: "Active development",
    href: "/projects/nitra-chat",
    liveUrl: undefined,
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose"],
    visual: "chat",
  },
  {
    number: "03",
    title: <>Nivora<span className="text-emerald-400">.</span></>,
    name: "Nivora",
    eyebrow: "PERSONAL FINANCE OS",
    description: "A complete finance product for expenses, income, savings, budgets, goals, analytics, authentication and cloud persistence.",
    status: "v1.0 · Complete",
    href: "/projects/nivora",
    liveUrl: undefined,
    stack: ["React", "TypeScript", "Supabase", "Capacitor"],
    visual: "finance",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "career") {
    return <CareerUpLivePreview />;
  }

  if (type === "chat") {
    return (
      <div className="relative h-full min-h-[290px] overflow-hidden border border-white/[0.08] bg-[#0a0b10] p-5 sm:min-h-[360px] sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(91,110,245,.11),transparent_36%)]" />
        <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/24">Nitra / Conversation</span>
          <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-accent">Connected</span>
        </div>
        <div className="relative mt-6 space-y-4">
          <div className="flex items-end gap-3">
            <span className="h-8 w-8 shrink-0 rounded-full bg-white/[0.06]" />
            <div className="max-w-[72%] rounded-2xl rounded-bl-sm border border-white/[0.07] bg-white/[0.035] px-4 py-3 text-xs leading-5 text-white/50">Hey, did you finish the new backend flow?</div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[72%] rounded-2xl rounded-br-sm border border-accent/20 bg-accent/[0.09] px-4 py-3 text-xs leading-5 text-white/72">Yep — persistence is working. Real-time delivery is next.</div>
          </div>
          <div className="flex items-end gap-3">
            <span className="h-8 w-8 shrink-0 rounded-full bg-white/[0.06]" />
            <div className="rounded-2xl rounded-bl-sm border border-white/[0.07] bg-white/[0.035] px-4 py-3">
              <div className="flex gap-1"><motion.span animate={{opacity:[.25,1,.25]}} transition={{duration:1.2,repeat:Infinity}} className="h-1.5 w-1.5 rounded-full bg-white/35"/><motion.span animate={{opacity:[.25,1,.25]}} transition={{duration:1.2,repeat:Infinity,delay:.2}} className="h-1.5 w-1.5 rounded-full bg-white/35"/><motion.span animate={{opacity:[.25,1,.25]}} transition={{duration:1.2,repeat:Infinity,delay:.4}} className="h-1.5 w-1.5 rounded-full bg-white/35"/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[290px] overflow-hidden border border-emerald-400/[0.12] bg-[#08100c] p-5 sm:min-h-[360px] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(52,211,153,.10),transparent_34%)]" />
      <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-4">
        <div>
          <p className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/24">Nivora / Overview</p>
          <p className="mt-2 text-sm text-white/62">Personal finance workspace</p>
        </div>
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,.7)]" />
      </div>
      <div className="relative mt-5 grid grid-cols-2 gap-3">
        {[["Expenses","₹24.8K"],["Income","₹42.0K"],["Savings","₹12.4K"],["Budget","68%"]].map(([label,value])=>(
          <div key={label} className="border border-white/[0.07] bg-white/[0.02] p-4">
            <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-white/22">{label}</p>
            <p className="mt-3 font-display text-2xl tracking-[-0.04em] text-white/80">{value}</p>
          </div>
        ))}
      </div>
      <div className="relative mt-3 border border-white/[0.07] bg-white/[0.02] p-4">
        <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-white/22">Monthly trend</p>
        <div className="mt-5 flex h-12 items-end gap-2">{[30,46,38,62,52,78,69,88].map((h,i)=><motion.span key={i} initial={{height:0}} whileInView={{height:h+"%"}} viewport={{once:true}} transition={{delay:i*.05,duration:.45}} className="flex-1 bg-emerald-400/45"/>)}</div>
      </div>
    </div>
  );
}

export default function ProjectStack() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section className="relative border-t border-white/[0.07] bg-[#07080a]">
      <div className="mx-auto max-w-[1180px] px-6 pt-24 sm:px-8 md:pt-32">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/75">02 / Selected projects</p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
          One project.<br/><span className="text-white/30">One moment at a time.</span>
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">Scroll through the three projects I want people to remember.</p>
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 pb-20 sm:px-8 md:pb-28">
        {projects.map((project,index)=>(
          <div key={project.name} className="relative flex items-center py-8 md:sticky md:top-0 md:min-h-[100svh] md:py-10" style={{zIndex:index+1}}>
            <motion.article
              initial={{opacity:0,y:40,scale:.985}}
              whileInView={{opacity:1,y:0,scale:1}}
              viewport={{once:true,amount:.24}}
              transition={{duration:.75,ease:[.16,1,.3,1]}}
              whileHover={reducedMotion ? undefined : { y:-4 }}
              data-cursor-label="VIEW"
              className="relative w-full overflow-hidden border border-white/[0.10] bg-[#090a0e] shadow-[0_40px_120px_rgba(0,0,0,.48)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.02),transparent_38%)]" />
              <div className="relative grid min-h-0 gap-9 p-5 sm:p-8 md:min-h-[68svh] lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-10 lg:p-10 xl:p-12">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[9px] tracking-[0.18em] text-white/22">{project.number} / 03</span>
                      <span className="border border-white/[0.08] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.13em] text-white/36">{project.status}</span>
                    </div>
                    <p className="mt-10 font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">{project.eyebrow}</p>
                    <h3 className="mt-4 max-w-full break-words font-display text-[clamp(2.75rem,11vw,4.7rem)] font-semibold leading-[0.84] tracking-[-0.07em] sm:text-[clamp(3.4rem,6vw,5rem)]">{project.title}</h3>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-white/43 sm:text-base">{project.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">{project.stack.map(item=><span key={item} className="border border-white/[0.07] px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-white/28">{item}</span>)}</div>
                  </div>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link href={project.href} className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1">
                      Explore project <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-label="LIVE"
                        className="group inline-flex w-fit items-center gap-3 rounded-full border border-accent/30 bg-accent/[0.08] px-5 py-3 text-sm font-medium text-white/82 transition-all duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-accent/[0.14]"
                      >
                        View live site
                        <span className="text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                      </a>
                    )}
                  </div>
                </div>
                <ProjectVisual type={project.visual}/>
              </div>
            </motion.article>
          </div>
        ))}
      </div>
    </section>
  );
}
