"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import ProjectStack from "@/components/ProjectStack";
import KineticHeroTitle from "@/components/KineticHeroTitle";

const heroSignals = [
  {
    label: "BUILDING",
    title: "CareerUpAI",
    detail: "Shipping a real full-stack product while pushing deeper into intelligent systems.",
  },
  {
    label: "LATEST ACHIEVEMENT",
    title: "Data Science Certificate",
    detail: "Completed CodeWithHarry’s Ultimate Job Ready Data Science Course.",
  },
  {
    label: "CURRENT FOCUS",
    title: "Data → ML",
    detail: "Python, SQL, analysis, visualization, statistics and machine learning.",
  },
  {
    label: "ROLE",
    title: "Full-Stack + Data",
    detail: "A product-focused developer now building a serious data science foundation.",
  },
];


const techProfiles = [
  {
    name: "JavaScript",
    mark: "JS",
    type: "Language",
    level: "Core",
    blurb: "The language behind much of my web work — interfaces, APIs and product logic.",
    uses: ["React UI", "APIs", "App logic"],
    projects: ["CareerUpAI", "Health Tracker", "Nitra Chat"],
  },
  {
    name: "TypeScript",
    mark: "TS",
    type: "Language",
    level: "Building with",
    blurb: "What I use when a codebase gets bigger and I want data, components and refactors to stay predictable.",
    uses: ["Typed UI", "Data models", "Safer refactors"],
    projects: ["Portfolio", "Nivora", "Health Tracker"],
  },
  {
    name: "Python",
    mark: "PY",
    type: "Data / AI",
    level: "Core focus",
    blurb: "My main language for data science, scripting, problem solving, backend experiments and the path into AI.",
    uses: ["Data analysis", "Automation", "ML workflows"],
    projects: ["Data science projects", "AI experiments"],
  },
  {
    name: "SQL",
    mark: "SQL",
    type: "Data",
    level: "Course-trained",
    blurb: "I use SQL to query relational data, filter and aggregate datasets, join tables and prepare data for analysis.",
    uses: ["Queries", "Joins", "Aggregation"],
    projects: ["Data science practice", "Analytics workflows"],
  },
  {
    name: "NumPy",
    mark: "NP",
    type: "Data Science",
    level: "Course-trained",
    blurb: "The numerical foundation I use for arrays, vectorized operations and efficient data-oriented computation in Python.",
    uses: ["Arrays", "Numerical computing", "Preprocessing"],
    projects: ["Data analysis projects", "ML preparation"],
  },
  {
    name: "Pandas",
    mark: "PD",
    type: "Data Science",
    level: "Course-trained",
    blurb: "My primary toolkit for loading, cleaning, transforming, exploring and analyzing tabular datasets.",
    uses: ["Data cleaning", "EDA", "Transformation"],
    projects: ["Data analysis projects", "Dataset exploration"],
  },
  {
    name: "Matplotlib / Seaborn",
    mark: "VIZ",
    type: "Visualization",
    level: "Course-trained",
    blurb: "Used to turn raw datasets into clear charts, distributions, comparisons and exploratory visual stories.",
    uses: ["Charts", "EDA", "Visual analysis"],
    projects: ["Data visualization", "Analysis reports"],
  },
  {
    name: "scikit-learn",
    mark: "SK",
    type: "Machine Learning",
    level: "Applied",
    blurb: "My practical machine-learning toolkit for preprocessing, training models, evaluating results and building repeatable ML workflows.",
    uses: ["ML models", "Preprocessing", "Evaluation"],
    projects: ["Machine learning practice", "Predictive workflows"],
  },
  {
    name: "Statistics & Probability",
    mark: "Σ",
    type: "Data Science",
    level: "Foundation",
    blurb: "The mathematical layer behind interpreting data, distributions, uncertainty and the behavior of machine-learning models.",
    uses: ["Distributions", "Inference", "Model reasoning"],
    projects: ["Data science coursework", "ML foundations"],
  },
  {
    name: "Jupyter / Colab",
    mark: "NB",
    type: "Workflow",
    level: "Working with",
    blurb: "Interactive notebook environments I use to explore datasets, document experiments and iterate quickly on analysis.",
    uses: ["Notebooks", "Experiments", "Documentation"],
    projects: ["Data science notebooks", "ML experiments"],
  },
  {
    name: "Data Analysis / EDA",
    mark: "EDA",
    type: "Data Science",
    level: "Practicing",
    blurb: "I’m learning how to inspect, clean and understand datasets before jumping into models — from missing values and outliers to patterns, correlations and useful features.",
    uses: ["Exploration", "Data cleaning", "Feature understanding"],
    projects: ["Data science notebooks", "Dataset case studies"],
  },
  {
    name: "Machine Learning",
    mark: "ML",
    type: "AI / Data Science",
    level: "Learning",
    blurb: "I’m building a practical foundation in supervised and unsupervised learning, model selection, evaluation and the reasoning behind predictive systems.",
    uses: ["Regression", "Classification", "Clustering"],
    projects: ["ML practice", "Predictive experiments"],
  },
  {
    name: "React",
    mark: "R",
    type: "Frontend",
    level: "Core",
    blurb: "My default way to build interactive product interfaces and reusable frontend systems.",
    uses: ["Components", "State", "Product UI"],
    projects: ["Health Tracker", "Nivora", "CareerUpAI"],
  },
  {
    name: "Next.js",
    mark: "N",
    type: "Frontend",
    level: "Building with",
    blurb: "I use it when a React project needs routing, server features and a stronger application structure.",
    uses: ["Routing", "App structure", "Full-stack React"],
    projects: ["Portfolio", "Nitra Chat"],
  },
  {
    name: "Node.js",
    mark: "ND",
    type: "Backend",
    level: "Core",
    blurb: "Where I build API logic, authentication flows and the backend parts that make a frontend useful.",
    uses: ["REST APIs", "Auth", "Server logic"],
    projects: ["CareerUpAI", "Full-stack builds"],
  },
  {
    name: "MongoDB",
    mark: "DB",
    type: "Database",
    level: "Building with",
    blurb: "A practical document database I use for application data, profiles and backend-driven features.",
    uses: ["Persistence", "Models", "Queries"],
    projects: ["CareerUpAI", "Nitra Chat"],
  },
  {
    name: "Supabase",
    mark: "SB",
    type: "Cloud / Data",
    level: "Building with",
    blurb: "My go-to when I want authentication, PostgreSQL and secure cloud persistence without overbuilding the backend.",
    uses: ["Auth", "PostgreSQL", "RLS"],
    projects: ["Health Tracker", "Nivora"],
  },
  {
    name: "HTML / CSS",
    mark: "</>",
    type: "Web",
    level: "Core",
    blurb: "Still the base of everything: structure, responsive layout, visual polish and the details people actually feel.",
    uses: ["Semantic UI", "Responsive layout", "Motion"],
    projects: ["Every web project"],
  },
  {
    name: "Git / GitHub",
    mark: "GIT",
    type: "Engineering",
    level: "Daily use",
    blurb: "The version-control workflow I use to track changes, manage projects and ship work safely.",
    uses: ["Version control", "Collaboration", "Delivery"],
    projects: ["Every active project"],
  },
  {
    name: "LLMs / RAG",
    mark: "AI",
    type: "Applied AI",
    level: "Exploring",
    blurb: "I’m learning how large language models and retrieval-augmented generation can be used inside useful, data-aware products.",
    uses: ["LLM workflows", "Retrieval", "AI products"],
    projects: ["AI teaching assistant coursework", "CareerUpAI direction"],
  },
] as const;


const quickPrompts = [
  {
    label: "Building",
    question: "What are you building right now?",
    answer:
      "CareerUpAI is my main active build. I also recently finished Health Tracker, a cloud-synced BP and blood sugar PWA, and Nivora, a personal finance product.",
  },
  {
    label: "Stack",
    question: "What do you actually use?",
    answer:
      "My stack now spans full-stack development and data science: React, Next.js, TypeScript, Node.js, MongoDB and Supabase alongside Python, SQL, NumPy, Pandas, Matplotlib, Seaborn, scikit-learn, Jupyter/Colab, data analysis, statistics and machine-learning workflows.",
  },
  {
    label: "Shipped",
    question: "What have you finished?",
    answer:
      "Health Tracker and Nivora are complete v1 products. I care more about shipping usable projects than collecting small tutorial demos.",
  },
  {
    label: "Work",
    question: "What are you open to?",
    answer:
      "I’m open to internships, freelance work and product-focused collaborations in full-stack development, Python, data analysis and entry-level data science / AI work where I can keep learning while contributing to real products.",
  },
] as const;
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/75">{children}</p>;
}

export default function LandingExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const [activeTech, setActiveTech] = useState(0);
  const [activePrompt, setActivePrompt] = useState(0);
  const [profileSrc, setProfileSrc] = useState("https://avatars.githubusercontent.com/u/257083668?v=4");

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 20, mass: 0.45 });
  const sy = useSpring(py, { stiffness: 90, damping: 20, mass: 0.45 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 84]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 0.97]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 0.9, 0.16]);

  const textX = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-5, 5]);
  const textY = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [-4, 4]);
  const portraitX = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [8, -8]);
  const portraitY = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [7, -7]);
  const rotateY = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-4, 4]);
  const rotateX = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [4, -4]);
  const gridX = useTransform(sx, [-1, 1], reducedMotion ? [0, 0] : [-12, 12]);
  const gridY = useTransform(sy, [-1, 1], reducedMotion ? [0, 0] : [-10, 10]);
  const glowX = useTransform(sx, [-1, 1], ["30%", "70%"]);
  const glowY = useTransform(sy, [-1, 1], ["28%", "72%"]);

  const selectedTech = techProfiles[activeTech];
  const selectedPrompt = quickPrompts[activePrompt];

  function handleHeroPointer(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  return (
    <main className="relative overflow-hidden bg-[#07080a] text-white">
      <section
        ref={heroRef}
        onPointerMove={handleHeroPointer}
        onPointerLeave={() => {
          px.set(0);
          py.set(0);
        }}
        className="relative overflow-hidden border-b border-white/[0.07] lg:min-h-[94svh]"
      >
        <motion.div
          style={{ x: gridX, y: gridY }}
          className="pointer-events-none absolute -inset-8 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        />
        <motion.div
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                "radial-gradient(650px circle at " +
                x +
                " " +
                y +
                ", rgba(99,112,255,.16), transparent 64%)"
            ),
          }}
          className="pointer-events-none absolute inset-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(116,92,255,.09),transparent_28%),linear-gradient(to_bottom,transparent_72%,rgba(91,110,245,.045))]" />

        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <motion.div
            aria-hidden
            animate={reducedMotion ? undefined : { y: [0, -18, 0], rotateZ: [-2.2, -1.2, -2.2] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-[7vw] top-[14%] select-none font-display text-[9rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.018] [transform:rotateY(-24deg)_rotateZ(-2deg)]"
          >
            BUILD
          </motion.div>
          <motion.div
            aria-hidden
            animate={reducedMotion ? undefined : { y: [0, 15, 0], x: [0, -8, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-[4vw] bottom-[7%] select-none font-display text-[7rem] font-extrabold leading-none tracking-[-0.07em] text-accent/[0.026] [transform:rotateY(28deg)_rotateZ(4deg)]"
          >
            CREATE
          </motion.div>
          <div className="absolute right-[18%] top-[18%] h-[44%] w-px bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
        </div>

        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-col px-5 pb-24 pt-5 sm:px-8 sm:pb-28 lg:min-h-[94svh] lg:px-10 lg:pb-12 lg:pt-6 xl:px-14"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between border-b border-white/[0.07] pb-5"
          >
            <Link href="/" className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/38 transition-colors hover:text-white">
              NRB / 2026
            </Link>
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/40">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.9)]" />
              Open to opportunities
            </div>
          </motion.div>

          <div className="grid flex-1 items-start gap-8 py-7 sm:py-9 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_310px] xl:gap-14">
            <motion.div style={{ x: textX, y: textY }} className="min-w-0 lg:pr-2 xl:pr-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.55 }}
                className="mb-4 flex max-w-[330px] items-start gap-3 font-mono text-[8px] uppercase leading-4 tracking-[0.18em] text-accent/90 sm:max-w-none sm:items-center sm:text-[9px] sm:tracking-[0.22em]"
              >
                <span className="h-px w-8 bg-accent" />
                Full-stack developer · learning data science · building toward AI
              </motion.p>

              <KineticHeroTitle />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.6 }}
                className="mt-5 max-w-[590px] text-[13px] leading-6 text-white/58 sm:text-[14px] md:text-[15px]"
              >
                I build polished full-stack products and I’m now expanding seriously into data science. My current focus is Python, SQL, NumPy, Pandas, data visualization, statistics and machine learning — with the long-term goal of building useful AI systems, not just demos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.53, duration: 0.55 }}
                className="mt-5 max-w-[760px]"
              >
                <div className="mb-2 flex items-center gap-3 font-mono text-[7px] uppercase tracking-[0.16em] text-white/22">
                  <span className="h-px w-6 bg-accent/55" />
                  Current data science toolkit
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "Jupyter"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.11em] text-white/42 transition-colors hover:border-accent/25 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.56, duration: 0.6 }}
                className="mt-5 max-w-[760px]"
              >
                <div className="mb-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">
                  <span>Live snapshot</span>
                  <span className="flex items-center gap-2 text-accent/70">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_10px_rgba(91,110,245,.8)]" />
                    2026
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                  {heroSignals.map((item, index) => (
                    <motion.div
                      key={item.label}
                      whileHover={reducedMotion ? undefined : { y: -4 }}
                      className="group relative min-h-[118px] overflow-hidden border border-white/[0.08] bg-white/[0.018] p-3.5 transition-all duration-300 hover:border-accent/25 hover:bg-accent/[0.035] sm:p-4"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_85%_10%,rgba(91,110,245,.16),transparent_48%)]" />
                      <div className="relative flex h-full flex-col">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-accent/65">
                            {item.label}
                          </span>
                          <span className="font-mono text-[7px] text-white/12">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="mt-4 font-display text-lg font-semibold tracking-[-0.04em] text-white/82 sm:text-xl">
                          {item.title}
                        </p>
                        <p className="mt-auto pt-2 text-[11px] leading-5 text-white/30">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.66, duration: 0.55 }}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link
                  data-cursor-label="VIEW"
                  href="/projects"
                  className="group inline-flex items-center justify-between gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1 sm:gap-8"
                >
                  Explore work
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
                </Link>
                <Link
                  data-cursor-label="HELLO"
                  href="/contact"
                  className="group inline-flex items-center justify-between gap-3 rounded-full border border-white/[0.13] bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/82 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] sm:gap-8"
                >
                  Contact me
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ x: portraitX, y: portraitY, rotateX, rotateY, transformPerspective: 1200 }}
              className="relative z-10 mx-auto hidden w-full max-w-[255px] lg:mx-0 lg:block lg:justify-self-end xl:max-w-[310px]"
            >
              <div className="relative">
                <div className="absolute -left-8 top-10 hidden h-px w-20 bg-gradient-to-r from-transparent to-accent/60 md:block" />
                <div className="absolute -right-8 bottom-16 hidden h-px w-20 bg-gradient-to-r from-accent/60 to-transparent md:block" />

                <div className="relative overflow-hidden border border-white/[0.11] bg-[#0b0c10]/72 p-2 shadow-[0_35px_100px_rgba(0,0,0,.48)] backdrop-blur-xl">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#111216]">
                    <motion.img
                      src={profileSrc}
                      alt="Portrait of Nityansh Rupesh Bahadur"
                      className="absolute inset-0 h-full w-full object-cover object-[50%_18%] grayscale-[8%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-white/[0.02]" />
                    <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-white/68 shadow-[0_8px_24px_rgba(0,0,0,.25)] backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(91,110,245,.8)]" />
                      Lucknow, India
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/34">Current build</p>
                      <div className="mt-2 flex items-end justify-between gap-4">
                        <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white/92">CareerUpAI</p>
                        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(91,110,245,.9)]" />
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-4 hidden border border-white/[0.10] bg-[#0a0b0f]/86 px-4 py-3 backdrop-blur-xl md:block"
                >
                  <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/25">Focus</p>
                  <p className="mt-1 text-sm text-white/72">Python → Data → ML</p>
                </motion.div>

              </div>
            </motion.div>
          </div>

          <div className="hidden items-center justify-between border-t border-white/[0.07] pt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/22 lg:flex">
            <span>Full-stack developer · learning data science · building toward AI</span>
            <motion.span
              animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:block"
            >
              Scroll to explore ↓
            </motion.span>
            <span>01 / 06</span>
          </div>
        </motion.div>
      </section>

      <ProjectStack />

      <section className="relative overflow-hidden border-t border-line py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[18%] top-[20%] h-[420px] w-[420px] rounded-full bg-accent/[0.055] blur-[150px]" />
          <div className="absolute right-[10%] bottom-[5%] h-[360px] w-[360px] rounded-full bg-violet-500/[0.035] blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>04 / Skills & stack</SectionLabel>
              <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                What I build with
                <span className="text-white/28"> and what I’m learning.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/38">
              Full-stack engineering meets a growing data science toolkit.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-2">
              {techProfiles.map((tech, index) => {
                const active = activeTech === index;
                return (
                  <motion.button
                    key={tech.name}
                    type="button"
                    onMouseEnter={() => setActiveTech(index)}
                    onFocus={() => setActiveTech(index)}
                    onClick={() => setActiveTech(index)}
                    whileHover={reducedMotion ? undefined : { y: -3 }}
                    className={
                      "group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 " +
                      (active
                        ? "border-accent/45 bg-accent/[0.085] shadow-[0_18px_55px_rgba(91,110,245,.12)]"
                        : "border-white/[0.08] bg-white/[0.018] hover:border-white/[0.16] hover:bg-white/[0.035]")
                    }
                  >
                    {active && (
                      <motion.div
                        layoutId="stack-active-glow"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(91,110,245,.18),transparent_52%)]"
                      />
                    )}
                    <div className="relative flex items-start justify-between gap-3">
                      <span
                        className={
                          "font-display text-2xl font-semibold tracking-[-0.05em] sm:text-3xl " +
                          (active ? "text-white" : "text-white/52")
                        }
                      >
                        {tech.mark}
                      </span>
                      <span
                        className={
                          "rounded-full border px-2 py-1 font-mono text-[6px] uppercase tracking-[0.13em] " +
                          (active
                            ? "border-accent/25 text-accent"
                            : "border-white/[0.08] text-white/20")
                        }
                      >
                        {tech.level}
                      </span>
                    </div>
                    <div className="relative mt-7">
                      <p className="font-display text-lg font-semibold tracking-[-0.035em] text-white/82">
                        {tech.name}
                      </p>
                      <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/22">
                        {tech.type}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              layout
              className="relative min-h-[430px] overflow-hidden rounded-[26px] border border-white/[0.10] bg-[#0a0b10]/92 p-6 shadow-[0_35px_120px_rgba(0,0,0,.38)] sm:p-8 lg:sticky lg:top-24 lg:min-h-[520px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(91,110,245,.12),transparent_36%)]" />
              <motion.div
                key={"ghost-tech-" + selectedTech.name}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="pointer-events-none absolute -right-4 top-5 select-none font-display text-[clamp(7rem,16vw,12rem)] font-bold leading-none tracking-[-0.09em] text-white/[0.025]"
              >
                {selectedTech.mark}
              </motion.div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/22">
                    Selected / {String(activeTech + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.16em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(91,110,245,.9)]" />
                    {selectedTech.level}
                  </span>
                </div>

                <motion.div
                  key={"tech-copy-" + selectedTech.name}
                  initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32 }}
                  className="mt-8"
                >
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">
                    {selectedTech.type}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(3.2rem,6vw,5.2rem)] font-semibold leading-none tracking-[-0.07em]">
                    {selectedTech.name}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-white/46">
                    {selectedTech.blurb}
                  </p>
                </motion.div>

                <div className="mt-7">
                  <p className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/22">
                    I use it for
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedTech.uses.map((item, index) => (
                      <motion.span
                        key={selectedTech.name + item}
                        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.055 }}
                        className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-2 text-xs text-white/55"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <p className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/22">
                    Used in
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selectedTech.projects.map((project, index) => (
                      <motion.div
                        key={selectedTech.name + project}
                        initial={reducedMotion ? false : { opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.055 }}
                        className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/20 px-4 py-3"
                      >
                        <span className="text-sm text-white/62">{project}</span>
                        <span className="text-accent/60">↗</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
            <span>Hover on desktop · tap on mobile</span>
            <span>{techProfiles.length} tools in the mix</span>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[14%] top-[16%] h-[420px] w-[420px] rounded-full bg-accent/[0.055] blur-[150px]" />
          <div className="absolute left-[8%] bottom-[4%] h-[300px] w-[300px] rounded-full bg-violet-500/[0.025] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>05 / Quick answers</SectionLabel>
              <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
                Skip the scroll.
                <span className="text-white/28"> Ask the useful stuff.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/36">
              Four questions recruiters usually care about.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            className="mt-10 overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#090a0e] shadow-[0_38px_120px_rgba(0,0,0,.4)]"
          >
            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-white/[0.08] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/24">
                    Pick a question
                  </p>
                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-accent/70">
                    04 prompts
                  </span>
                </div>

                <div className="mt-5 grid gap-2">
                  {quickPrompts.map((prompt, index) => {
                    const active = activePrompt === index;
                    return (
                      <motion.button
                        key={prompt.label}
                        type="button"
                        onMouseEnter={() => setActivePrompt(index)}
                        onFocus={() => setActivePrompt(index)}
                        onClick={() => setActivePrompt(index)}
                        whileHover={reducedMotion ? undefined : { x: 4 }}
                        className={
                          "group flex min-h-[72px] items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all duration-300 " +
                          (active
                            ? "border-accent/40 bg-accent/[0.08]"
                            : "border-white/[0.07] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.03]")
                        }
                      >
                        <span
                          className={
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-[8px] " +
                            (active
                              ? "border-accent/35 bg-accent/[0.10] text-accent"
                              : "border-white/[0.08] text-white/24")
                          }
                        >
                          0{index + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={
                              "block font-mono text-[7px] uppercase tracking-[0.15em] " +
                              (active ? "text-accent/80" : "text-white/22")
                            }
                          >
                            {prompt.label}
                          </span>
                          <span
                            className={
                              "mt-1 block text-sm leading-5 " +
                              (active ? "text-white/78" : "text-white/44")
                            }
                          >
                            {prompt.question}
                          </span>
                        </span>
                        <span
                          className={
                            "text-sm transition-transform duration-300 group-hover:translate-x-1 " +
                            (active ? "text-accent" : "text-white/14")
                          }
                        >
                          →
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <Link
                  data-cursor-label="OPEN"
                  href="/terminal"
                  className="mt-5 flex items-center justify-between rounded-2xl border border-white/[0.09] bg-black/20 px-4 py-3 text-sm text-white/48 transition-all hover:border-accent/30 hover:text-white/78"
                >
                  Open full terminal
                  <span className="text-accent">↗</span>
                </Link>
              </div>

              <div className="relative min-h-[420px] overflow-hidden p-5 sm:min-h-[480px] sm:p-7 lg:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(91,110,245,.10),transparent_38%)]" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white/12" />
                      <span className="h-2 w-2 rounded-full bg-white/08" />
                      <span className="h-2 w-2 rounded-full bg-accent/65 shadow-[0_0_10px_rgba(91,110,245,.6)]" />
                    </div>
                    <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
                      portfolio@nityansh
                    </span>
                  </div>

                  <motion.div
                    key={"prompt-" + activePrompt}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28 }}
                    className="mt-8"
                  >
                    <p className="font-mono text-[10px] leading-6 text-white/30 sm:text-xs">
                      <span className="text-accent/80">portfolio@nityansh:~$</span>{" "}
                      <span className="text-white/72">{selectedPrompt.question}</span>
                    </p>

                    <div className="mt-6 border-l border-accent/35 pl-5 sm:pl-6">
                      <p className="max-w-2xl font-display text-[clamp(1.8rem,3.4vw,3rem)] font-medium leading-[1.12] tracking-[-0.04em] text-white/88">
                        {selectedPrompt.answer}
                      </p>
                    </div>
                  </motion.div>

                  <div className="mt-auto pt-10">
                    <div className="flex items-center gap-3 border-t border-white/[0.07] pt-5 font-mono text-[8px] uppercase tracking-[0.15em] text-white/18">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                      Interactive preview
                      <span className="ml-auto text-white/12">
                        hover or tap a prompt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(91,110,245,0.10),transparent_34%)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 text-center sm:px-8">
          <SectionLabel>06 / Let&apos;s build</SectionLabel>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
            Have an ambitious idea?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ink-dim md:text-base">
            I&apos;m open to internships, collaborations and product-focused opportunities.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              data-cursor-label="HELLO"
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1"
            >
              Start a conversation ↗
            </Link>
            <Link
              data-cursor-label="VIEW"
              href="/projects"
              className="rounded-full border border-white/[0.12] bg-white/[0.035] px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
