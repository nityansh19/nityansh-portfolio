export const roles = ["Full Stack Developer", "Problem Solver", "Lifelong Learner"];

export const pipeline = [
  { num: "01", label: "Ideas", desc: "Spotting a real problem worth solving" },
  { num: "02", label: "Logic", desc: "Structuring how it should actually work" },
  { num: "03", label: "Code", desc: "Writing it, testing it, breaking it" },
  { num: "04", label: "Product", desc: "Something people can actually use" },
];

export const careerUpFeatures = [
  { title: "CV Analysis", desc: "AI reads your resume like a recruiter would." },
  { title: "Resume Builder", desc: "Structured, ATS-friendly resumes in minutes." },
  { title: "Career Guidance", desc: "Personalized direction based on your profile." },
  { title: "Smart Suggestions", desc: "Concrete edits, not generic advice." },
];

export const projects = [
  { num: "01", name: "CareerUpAI", tag: "AI · Full Stack", disabled: false },
  { num: "02", name: "Nitra Chat", tag: "Real-Time · Full Stack", disabled: false },
  { num: "03", name: "Personal AI Assistant", tag: "AI · Automation", disabled: false },
];

export type TechGroup = "frontend" | "backend" | "database" | "exploring";

export const techNodes: {
  id: string;
  name: string;
  core?: boolean;
  group?: TechGroup;
  x: number;
  y: number;
  desc: string;
}[] = [
  { id: "core", name: "Nityansh", core: true, x: 0.5, y: 0.5, desc: "The center of the stack." },
  { id: "html", name: "HTML", group: "frontend", x: 0.2, y: 0.22, desc: "Semantic structure for every interface." },
  { id: "css", name: "CSS", group: "frontend", x: 0.14, y: 0.46, desc: "Layout, motion, and visual detail." },
  { id: "js", name: "JavaScript", group: "frontend", x: 0.2, y: 0.72, desc: "Interactivity across the stack." },
  { id: "react", name: "React", group: "frontend", x: 0.36, y: 0.86, desc: "Component-driven UI at scale." },
  { id: "vite", name: "Vite", group: "frontend", x: 0.3, y: 0.1, desc: "Fast builds, faster feedback loops." },
  { id: "node", name: "Node.js", group: "backend", x: 0.7, y: 0.16, desc: "JavaScript on the server." },
  { id: "express", name: "Express", group: "backend", x: 0.82, y: 0.36, desc: "Minimal, unopinionated APIs." },
  { id: "mongo", name: "MongoDB", group: "database", x: 0.84, y: 0.62, desc: "Flexible, document-based storage." },
  { id: "python", name: "Python", group: "exploring", x: 0.66, y: 0.82, desc: "Currently deepening — data, scripting, AI." },
  { id: "ai", name: "Artificial Intelligence", group: "exploring", x: 0.5, y: 0.92, desc: "Applied AI, the core of CareerUpAI." },
  { id: "docker", name: "Docker", group: "exploring", x: 0.6, y: 0.06, desc: "Consistent environments, containerized." },
  { id: "linux", name: "Linux", group: "exploring", x: 0.42, y: 0.1, desc: "The daily operating environment." },
];

export const techEdges: [string, string][] = [
  ["html", "css"],
  ["css", "js"],
  ["js", "react"],
  ["react", "vite"],
  ["node", "express"],
  ["express", "mongo"],
  ["python", "ai"],
  ["docker", "linux"],
];

export const groupColor: Record<TechGroup, string> = {
  frontend: "91,110,245",
  backend: "139,110,245",
  database: "91,110,245",
  exploring: "139,110,245",
};

export const journey = [
  {
    year: "2026",
    title: "Beginning an ambitious development journey",
    tags: ["First real projects", "Full stack fundamentals"],
  },
  {
    year: "Currently",
    title: "Mastering Python, going deeper into full stack",
    tags: ["Python", "Full Stack Development", "DevOps", "Artificial Intelligence"],
  },
];

export const terminalData: Record<string, string> = {
  whoami:
    "Nityansh Rupesh Bahadur\nFull Stack Developer\nProblem Solver\nCurrently building ambitious things.",
  current_focus: "Python\nArtificial Intelligence\nDevOps\nFull Stack Development",
  stack:
    "Frontend  -> HTML, CSS, JavaScript, React, Vite\nBackend   -> Node.js, Express\nDatabase  -> MongoDB\nExploring -> Python, AI, Docker, Linux",
  contact:
    "Email     -> Nityansh.bahadur1905@gmail.com\nGitHub    -> github.com/nityansh19\nInstagram -> @nityansh.19\nDiscord   -> kakarotsenpai",
};

export const sections = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "building", label: "Building" },
  { id: "projects", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "journey", label: "Journey" },
  { id: "philosophy", label: "Philosophy" },
  { id: "terminal", label: "Terminal" },
  { id: "contact", label: "Contact" },
];
