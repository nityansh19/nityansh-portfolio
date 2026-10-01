import Link from "next/link";

type Feature = [string, string, string];

type ProjectCaseStudyProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  accentWord?: string;
  status: string;
  metrics: [string, string][];
  features: Feature[];
  stack: string[];
  problemTitle: string;
  problemCopy: string;
  approachTitle: string;
  approachCopy: string;
  statusTitle: string;
  statusCopy: string;
  preview: React.ReactNode;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function ProjectCaseStudy({
  eyebrow,
  title,
  intro,
  status,
  metrics,
  features,
  stack,
  problemTitle,
  problemCopy,
  approachTitle,
  approachCopy,
  statusTitle,
  statusCopy,
  preview,
  secondaryHref = "/contact",
  secondaryLabel = "Start a conversation",
}: ProjectCaseStudyProps) {
  const secondaryExternal = secondaryHref.startsWith("http");

  return (
    <main className="min-h-screen bg-bg px-5 pb-28 pt-28 sm:px-8 md:pt-36">
      <article className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-accent sm:text-[9px]"
          >
            ← Back to projects
          </Link>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[7px] uppercase tracking-[0.16em] text-white/35 sm:text-[8px]">
            {status}
          </span>
        </div>

        <header className="mt-10 grid gap-10 border-b border-white/[0.07] pb-12 md:mt-14 md:grid-cols-[1.15fr_.85fr] md:items-end md:pb-16">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-accent/75 sm:text-[9px]">{eyebrow}</p>
            <h1 className="mt-5 font-display text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
              {title}
            </h1>
          </div>

          <div className="md:pb-2">
            <p className="text-[15px] leading-7 text-ink-dim sm:text-base sm:leading-8">{intro}</p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {metrics.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/[0.07] bg-white/[0.018] px-4 py-4">
                  <div className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">{label}</div>
                  <div className="mt-2 font-display text-lg tracking-[-0.03em] text-white/75">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-8 overflow-hidden rounded-[26px] border border-white/[0.09] bg-[#090a0e] md:mt-12">
          {preview}
        </section>

        <section className="mt-16 grid gap-10 border-t border-white/[0.07] pt-12 md:mt-24 md:grid-cols-2 md:gap-16 md:pt-16">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">01 / Problem</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{problemTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-dim sm:text-base sm:leading-8">{problemCopy}</p>
          </div>
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">02 / Approach</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{approachTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-dim sm:text-base sm:leading-8">{approachCopy}</p>
          </div>
        </section>

        <section className="mt-16 border-t border-white/[0.07] pt-12 md:mt-24 md:pt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">03 / System</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">What the product is built around.</h2>
            </div>
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">{features.length.toString().padStart(2, "0")} modules</span>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([n, t, d]) => (
              <div key={t} className="rounded-[22px] border border-white/[0.07] bg-white/[0.018] p-5 sm:p-6">
                <span className="font-mono text-[8px] text-accent/60">{n}</span>
                <h3 className="mt-4 font-display text-xl tracking-[-0.035em] text-white/80">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-dim">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-white/[0.07] pt-12 md:mt-24 md:grid-cols-[.8fr_1.2fr] md:pt-16">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">04 / Stack</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em]">Tools behind it.</h2>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.13em] text-white/38">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 border-y border-white/[0.07] py-12 md:mt-24 md:py-16">
          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-accent/70">05 / Current state</p>
          <div className="mt-4 grid gap-6 md:grid-cols-[1fr_.8fr] md:items-end">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">{statusTitle}</h2>
            <p className="text-sm leading-7 text-ink-dim sm:text-base sm:leading-8">{statusCopy}</p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-full border border-white/[0.11] px-5 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:border-white/25 hover:text-white">
            All projects
          </Link>
          <Link
            href={secondaryHref}
            target={secondaryExternal ? "_blank" : undefined}
            rel={secondaryExternal ? "noreferrer" : undefined}
            className="rounded-full border border-accent/25 bg-accent/[0.08] px-5 py-3 font-mono text-[8px] uppercase tracking-[0.16em] text-white/75 transition-colors hover:bg-accent/[0.14]"
          >
            {secondaryLabel} ↗
          </Link>
        </div>
      </article>
    </main>
  );
}
