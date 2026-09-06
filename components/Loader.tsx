"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const lines = ["INITIALIZING PORTFOLIO...", "LOADING PROJECTS...", "SYSTEM READY."];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), reducedMotion ? 150 : 950);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.45, ease: [0.16, 0.8, 0.24, 1] }}
        >
          <div className="min-h-[90px] text-left font-mono text-[13px] tracking-wide text-ink-dim" aria-hidden="true">
            {lines.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reducedMotion ? 0 : 0.04 + i * 0.22,
                  duration: reducedMotion ? 0.01 : 0.35,
                  ease: [0.16, 0.8, 0.24, 1],
                }}
                className={i === 2 ? "text-ink" : ""}
              >
                {line}
              </motion.div>
            ))}
          </div>
          <div className="relative mt-6 h-px w-[220px] overflow-hidden bg-line" aria-hidden="true">
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: reducedMotion ? 0.01 : 0.9, ease: [0.16, 0.8, 0.24, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
