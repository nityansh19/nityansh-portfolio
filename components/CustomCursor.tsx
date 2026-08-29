"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const rx = useSpring(dx, { stiffness: 200, damping: 22 });
  const ry = useSpring(dy, { stiffness: 200, damping: 22 });
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dx.set(e.clientX);
      dy.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const target = t.closest("a, button, [data-cursor-hover]") as HTMLElement | null;
      setHovering(!!target);
      setLabel(target?.getAttribute("data-cursor-label") || "");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [dx, dy]);

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-[9999] w-[5px] h-[5px] rounded-full bg-accent pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ x: dx, y: dy }}
        animate={{ opacity: label ? 0 : 1 }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 z-[9999] rounded-full border pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
        style={{ x: rx, y: ry }}
        animate={{
          width: label ? 74 : hovering ? 56 : 34,
          height: label ? 74 : hovering ? 56 : 34,
          borderColor: hovering ? "#5b6ef5" : "rgba(255,255,255,0.14)",
          backgroundColor: label ? "rgba(91,110,245,0.95)" : "rgba(91,110,245,0)",
        }}
        transition={{ duration: 0.3, ease: [0.16, 0.8, 0.24, 1] }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-[10px] uppercase tracking-wider text-white text-center leading-tight px-1"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
