"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = ["INITIALIZING PORTFOLIO...", "LOADING PROJECTS...", "SYSTEM READY."];

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1650);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-bg flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 0.8, 0.24, 1] }}
        >
          <div className="font-mono text-[13px] text-ink-dim tracking-wide min-h-[90px] text-left">
            {lines.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.5, duration: 0.5, ease: [0.16, 0.8, 0.24, 1] }}
                className={i === 2 ? "text-ink" : ""}
              >
                {line}
              </motion.div>
            ))}
          </div>
          <div className="w-[220px] h-px bg-line mt-6 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: [0.16, 0.8, 0.24, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
