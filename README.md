# Nityansh Rupesh Bahadur — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/` — root layout, global styles, and the single page that assembles every section
- `components/` — one component per section (Hero, About, CurrentlyBuilding, Projects,
  TechStack, Journey, Philosophy, Terminal, Contact, Footer), plus shared pieces
  (Loader, Navigation, DotNav, CustomCursor, MagneticButton, Reveal)
- `lib/data.ts` — all copy and content in one place, so text/links/projects can be
  updated without touching component code

## Where to edit things

- Swap the resume link in `components/Hero.tsx` once you have a PDF to link to.
- Update project entries, tech stack nodes, and timeline in `lib/data.ts`.
- Replace the CareerUpAI preview placeholder in `components/CurrentlyBuilding.tsx`
  with real screenshots once available.

Respects `prefers-reduced-motion` throughout — animations are still present but
skip the more elaborate canvas motion for users who've asked for less movement.
