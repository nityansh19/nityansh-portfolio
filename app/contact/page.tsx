import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Nityansh Rupesh Bahadur",
  description: "Get in touch with Nityansh for opportunities and collaborations.",
};

const links = [
  { label: "Email", value: "Start a conversation", href: "mailto:Nityansh.bahadur1905@gmail.com" },
  { label: "GitHub", value: "nityansh19", href: "https://github.com/nityansh19" },
  { label: "Instagram", value: "@nityansh.19", href: "https://instagram.com/nityansh.19" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 pb-32 pt-36 sm:px-8 md:pt-44">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-4xl">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent/70">
            Contact / 2026
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.6rem,10vw,9rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            Let&apos;s build
            <br />
            something.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-dim sm:text-xl sm:leading-9">
            Have an interesting idea, an opportunity, or something worth
            building together? Start a conversation.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.08] md:mt-28 md:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group bg-bg p-8 transition-colors duration-500 hover:bg-white/[0.025] sm:p-10"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                {link.label}
              </div>
              <div className="mt-8 font-display text-2xl text-white/70 transition-colors group-hover:text-accent">
                {link.value}
              </div>
              <div className="mt-10 font-mono text-[9px] uppercase tracking-[0.16em] text-white/25 transition-colors group-hover:text-white/55">
                Open ↗
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 border-t border-line pt-10">
          <Link href="/projects" className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 transition-colors hover:text-accent">
            View projects ↗
          </Link>
          <Link href="/about" className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 transition-colors hover:text-accent">
            About me ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
