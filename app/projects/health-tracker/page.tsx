import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Health Tracker — Nityansh Rupesh Bahadur",
  description:
    "A finished mobile-first health tracking PWA for recording blood pressure and blood sugar, reviewing history, and sharing weekly reports.",
};

const capabilities = [
  [
    "01",
    "Fast reading entry",
    "Record blood pressure, blood sugar, or both from one simple screen with large inputs built for quick everyday use.",
  ],
  [
    "02",
    "Reliable timestamps",
    "Every reading gets the current date and time automatically, with the option to change it when adding an older measurement.",
  ],
  [
    "03",
    "Previous-reading comparison",
    "A new BP reading is compared only with the previous BP reading, and sugar is compared only with the previous sugar reading.",
  ],
  [
    "04",
    "History and editing",
    "Browse saved readings by date or measurement type, then edit or delete individual records when something needs correcting.",
  ],
  [
    "05",
    "Weekly reports",
    "See rolling seven-day summaries with reading counts, averages, highest and lowest recorded values, and the latest measurement.",
  ],
  [
    "06",
    "Trend charts",
    "Separate blood pressure and blood sugar charts make it easier to see how recorded values have changed over time.",
  ],
  [
    "07",
    "Doctor-friendly exports",
    "Generate a PDF report, use the device share sheet where supported, or download the same period as a CSV backup.",
  ],
  [
    "08",
    "Cloud accounts and privacy",
    "Supabase Authentication and Row Level Security keep each signed-in user's readings separated and available across devices.",
  ],
  [
    "09",
    "Patient settings",
    "Save a patient name, optional date of birth and doctor name, and manage the account password from the settings screen.",
  ],
  [
    "10",
    "PWA and offline fallback",
    "The site can be installed from the browser like an app. Recently cached readings remain viewable offline while new writes stay online-only to avoid conflicts.",
  ],
];

const stack = [
  "React",
  "Vite",
  "TypeScript",
  "Tailwind CSS",
  "Supabase Auth",
  "PostgreSQL",
  "Row Level Security",
  "Recharts",
  "jsPDF",
  "PWA",
  "Vercel",
  "GitHub Actions",
];

const liveUrl = "https://health-tracker-zeta-gold.vercel.app/";

export default function HealthTrackerPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1180px]">
        <Link
          href="/projects"
          className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent"
        >
          ← Back to projects
        </Link>

        <header className="mt-16 max-w-6xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-sky-400/80">
              05 / Health · PWA · Full Stack
            </p>
            <span className="rounded-full border border-sky-400/20 bg-sky-400/[0.08] px-3 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-sky-300">
              v1.0 · Complete · Live
            </span>
          </div>

          <h1 className="mt-5 font-display text-[clamp(3.8rem,10vw,8.8rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
            Health <span className="text-sky-400">Tracker</span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            A focused health log I built for a simple real-world job: save blood
            pressure and blood sugar readings quickly, keep them available across
            devices, and turn the history into something useful when speaking with
            a doctor.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-1"
            >
              Open live app ↗
            </a>
            <a
              href="https://github.com/nityansh19/Health-tracker"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/[0.12] px-5 py-3 text-sm font-medium text-white/65 transition-all hover:-translate-y-1 hover:border-sky-400/30 hover:text-white"
            >
              View source ↗
            </a>
          </div>
        </header>

        <section className="mt-20 md:mt-28">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-400/70">
                Live preview
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-white/85 sm:text-4xl">
                The actual deployed app.
              </h2>
            </div>
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/35 transition-colors hover:text-sky-300"
            >
              Open full screen ↗
            </a>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#080b10] shadow-[0_40px_130px_rgba(0,0,0,.45)]">
            <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.025] px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400/50" />
              <div className="ml-3 min-w-0 flex-1 truncate rounded-full border border-white/[0.07] bg-black/20 px-4 py-2 font-mono text-[8px] tracking-[0.08em] text-white/25">
                health-tracker-zeta-gold.vercel.app
              </div>
            </div>
            <div className="relative h-[620px] bg-[#f8fafc] sm:h-[720px]">
              <iframe
                src={liveUrl}
                title="Health Tracker live app preview"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-16 md:mt-32 md:grid-cols-[0.75fr_1.25fr]">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-400/70">
            Why I built it
          </p>
          <div className="space-y-6 text-lg leading-9 text-ink-dim">
            <p>
              I wanted this to solve a small problem properly instead of turning it
              into a giant health dashboard. The important part was making the
              everyday flow extremely short: open it, enter a reading, save it,
              and move on.
            </p>
            <p>
              The deeper work sits behind that simple interface: authentication,
              user-scoped cloud data, reporting logic, charts, exports, offline
              fallback, PWA behavior, and a mobile-first experience that still
              works from a desktop browser.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-400/70">
            What the app does
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {capabilities.map(([number, title, description]) => (
              <div key={title} className="bg-bg p-7">
                <span className="font-mono text-[9px] text-sky-400/60">
                  {number}
                </span>
                <h2 className="mt-5 font-display text-xl text-white/80">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-dim">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-16 border-t border-line pt-16 md:mt-32 md:grid-cols-2 md:pt-24">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-400/70">
              Data decisions
            </p>
            <p className="mt-5 text-base leading-8 text-ink-dim">
              Missing BP or sugar values are never treated as zero, and comparisons
              stay within the same measurement type. The app reports the numbers
              that were recorded without trying to diagnose them or label them as
              good, bad, normal, or abnormal.
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-400/70">
              Product decisions
            </p>
            <p className="mt-5 text-base leading-8 text-ink-dim">
              I kept navigation shallow, inputs large, reports readable, and the
              feature set intentionally small. It is meant to be useful to someone
              who does not care how the software works and just wants to record a
              measurement without friction.
            </p>
          </div>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-400/70">
            Stack
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-base leading-8 text-ink-dim">
            React, Vite and TypeScript power the frontend. Supabase handles
            authentication and PostgreSQL persistence with Row Level Security.
            Recharts handles trends, jsPDF builds downloadable reports,
            vite-plugin-pwa handles installation and caching, Vercel hosts the
            product, and GitHub Actions checks each build.
          </p>
        </section>

        <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-sky-400/70">
            Current status
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
            Health Tracker v1 is finished and in use.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-ink-dim">
            The original scope is complete and the deployed app is working. I am
            intentionally leaving it focused instead of adding features just to
            make the project look larger.
          </p>
        </section>

        <div className="mt-20 flex flex-wrap gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="border border-sky-400/25 bg-sky-400/[0.08] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/75 transition-colors hover:bg-sky-400/[0.14]"
          >
            Visit live app ↗
          </a>
          <a
            href="https://github.com/nityansh19/Health-tracker"
            target="_blank"
            rel="noreferrer"
            className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-sky-400/30 hover:text-white"
          >
            View source ↗
          </a>
          <Link
            href="/projects"
            className="border border-white/[0.12] px-6 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:border-sky-400/30 hover:text-white"
          >
            All projects ↗
          </Link>
        </div>
      </article>
    </main>
  );
}
