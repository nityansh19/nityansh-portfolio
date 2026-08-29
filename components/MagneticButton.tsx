"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  href,
  children,
  variant = "solid",
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  target?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.28);
    y.set((e.clientY - r.top - r.height / 2) * 0.5);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "font-mono text-xs tracking-wider uppercase px-6 py-4 rounded-sm inline-flex items-center gap-2.5 transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-ink text-bg hover:bg-accent hover:text-white"
      : "border border-line-strong text-ink hover:border-accent hover:text-accent";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
