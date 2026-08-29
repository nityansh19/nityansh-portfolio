"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "building", label: "BUILDING" },
  { id: "projects", label: "WORK" },
  { id: "stack", label: "STACK" },
  { id: "contact", label: "CONTACT" },
];

export default function Navigation() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        z-[9999]
        bottom-4
        sm:bottom-6
        left-3
        right-3
        sm:left-1/2
        sm:right-auto
        sm:-translate-x-1/2
        sm:w-auto
        w-auto
        max-w-[520px]
        rounded-full
        border
        border-white/[0.12]
        bg-[#090a0d]/80
        backdrop-blur-2xl
        shadow-[0_20px_70px_rgba(0,0,0,0.55)]
        px-1.5
        py-1.5
        sm:px-2
        sm:py-2
      "
      aria-label="Main navigation"
    >
      {/* Top glass highlight */}
      <div
        className="
          pointer-events-none
          absolute
          left-8
          right-8
          top-0
          h-px
          bg-white/20
        "
      />

      {/* Subtle outer glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-[1px]
          rounded-full
          opacity-30
          blur-sm
          bg-gradient-to-r
          from-transparent
          via-accent
          to-transparent
        "
      />

      <div className="relative flex w-full items-center justify-between gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="
                relative
                flex-1
                sm:flex-none
                flex
                items-center
                justify-center
                rounded-full
                px-2
                sm:px-4
                py-2.5
                sm:py-2
                text-[8px]
                xs:text-[9px]
                sm:text-[10px]
                font-mono
                tracking-[0.10em]
                sm:tracking-[0.14em]
                whitespace-nowrap
                transition-colors
                duration-300
              "
              style={{
                color: isActive
                  ? "rgba(245,245,247,0.95)"
                  : "rgba(160,163,173,0.65)",
              }}
            >
              {/* Active glass pill */}
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-white/[0.10]
                    bg-white/[0.055]
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* Active indicator */}
              {isActive && (
                <motion.span
                  layoutId="nav-dot"
                  className="
                    absolute
                    -top-[2px]
                    left-1/2
                    -translate-x-1/2
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-accent
                    shadow-[0_0_10px_rgba(91,110,245,0.9)]
                  "
                />
              )}

              {/* Navigation text */}
              <motion.span
                className="relative z-10"
                whileHover={{ y: -1 }}
                transition={{
                  duration: 0.2,
                }}
              >
                {item.label}
              </motion.span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}