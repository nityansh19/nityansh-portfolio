import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Terminal", href: "/terminal" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link href="/" className="font-display text-xl tracking-[-0.04em] text-white/80 transition-colors hover:text-white">
              Nityansh<span className="text-accent">.</span>
            </Link>
            <p className="mt-2 max-w-sm text-xs leading-6 text-ink-faint">
              Full-stack development, Python, AI, and a lot of time spent making things work.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-faint transition-colors hover:text-accent focus-visible:outline-none focus-visible:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/[0.06] pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Nityansh Rupesh Bahadur</span>
          <span className="text-accent/55">Open for jobs &amp; opportunities</span>
          <span>Lucknow, India</span>
        </div>
      </div>
    </footer>
  );
}
