"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "N", match: (path: string) => path === "/" },
  { href: "/projects", label: "WORK", match: (path: string) => path.startsWith("/projects") },
  { href: "/about", label: "ABOUT", match: (path: string) => path.startsWith("/about") },
  { href: "/cv", label: "CV", match: (path: string) => path.startsWith("/cv") },
  { href: "/terminal", label: "TERMINAL", match: (path: string) => path.startsWith("/terminal") },
  { href: "/contact", label: "CONTACT", match: (path: string) => path.startsWith("/contact") },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-3 right-3 z-[9999] w-auto max-w-[640px] rounded-full border border-white/[0.12] bg-[#090a0d]/80 px-1.5 py-1.5 shadow-[0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl print:hidden sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:left-1/2 sm:right-auto sm:w-auto sm:-translate-x-1/2 sm:px-2 sm:py-2"
      aria-label="Main navigation"
    >
      <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-white/20" />
      <div className="pointer-events-none absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 blur-sm" />

      <div className="relative flex w-full items-center justify-between gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const isActive = item.match(pathname);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className="relative flex min-w-0 flex-1 items-center justify-center rounded-full px-1.5 py-2.5 font-mono text-[8px] tracking-[0.08em] whitespace-nowrap transition-colors duration-300 active:scale-[0.97] sm:flex-none sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.14em]"
              style={{ color: isActive ? "rgba(245,245,247,0.95)" : "rgba(160,163,173,0.65)" }}
            >
              {isActive && (
                <motion.span layoutId="nav-active" className="absolute inset-0 rounded-full border border-white/[0.10] bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {isActive && <motion.span layoutId="nav-dot" className="absolute -top-[2px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(91,110,245,0.9)]" />}
              <motion.span className="relative z-10" whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>{item.label}</motion.span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
