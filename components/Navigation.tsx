"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  { href: "/", label: "HOME", short: "N", match: (path: string) => path === "/" },
  { href: "/projects", label: "WORK", short: "WORK", match: (path: string) => path.startsWith("/projects") },
  { href: "/about", label: "ABOUT", short: "ABOUT", match: (path: string) => path.startsWith("/about") },
  { href: "/cv", label: "CV", short: "CV", match: (path: string) => path.startsWith("/cv") },
  { href: "/terminal", label: "TERMINAL", short: "TERM", match: (path: string) => path.startsWith("/terminal") },
  { href: "/contact", label: "CONTACT", short: "HI", match: (path: string) => path.startsWith("/contact") },
];

export default function Navigation() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <motion.nav
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-[calc(0.7rem+env(safe-area-inset-bottom))] left-1/2 z-[9999] w-[calc(100%-1rem)] max-w-[650px] -translate-x-1/2 print:hidden sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:w-auto"
      aria-label="Main navigation"
    >
      <div className="relative rounded-[22px] border border-white/[0.11] bg-[#090a0d]/88 p-1.5 shadow-[0_20px_70px_rgba(0,0,0,0.52)] backdrop-blur-2xl sm:rounded-full sm:p-2">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative grid grid-cols-6 gap-1 sm:flex sm:items-center">
          {navItems.map((item) => {
            const isActive = item.match(pathname);
            const isContact = item.href === "/contact";
            const labelClass = isActive
              ? "text-white"
              : isContact
                ? "text-accent"
                : "text-white/42 hover:text-white/75";

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className="relative flex min-w-0 items-center justify-center rounded-[16px] px-1.5 py-2.5 font-mono text-[7px] uppercase tracking-[0.06em] transition-colors duration-300 active:scale-[0.97] sm:rounded-full sm:px-4 sm:py-2.5 sm:text-[9px] sm:tracking-[0.14em]"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-[16px] border border-white/[0.10] bg-white/[0.065] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:rounded-full"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}

                <span className={"relative z-10 transition-colors " + labelClass}>
                  <span className="sm:hidden">{item.short}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>

                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -top-[2px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(91,110,245,0.9)]"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
