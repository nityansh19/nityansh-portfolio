"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LIVE_URL = "https://career-up-ai-delta.vercel.app/";

export default function CareerUpLivePreview({ large = false }: { large?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={
        "relative h-full overflow-hidden border border-white/[0.09] bg-[#080a0f] " +
        (large ? "min-h-[430px] sm:min-h-[560px]" : "min-h-[330px] sm:min-h-[390px]")
      }
    >
      <div className="flex h-11 items-center justify-between border-b border-white/[0.08] bg-[#0b0d13]/95 px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#ff6b6b]/55" />
          <span className="h-2 w-2 rounded-full bg-[#ffd166]/55" />
          <span className="h-2 w-2 rounded-full bg-[#52d273]/55" />
        </div>

        <div className="mx-3 flex min-w-0 flex-1 justify-center">
          <div className="max-w-[420px] truncate rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-1.5 font-mono text-[7px] tracking-[0.08em] text-white/30 sm:text-[8px]">
            career-up-ai-delta.vercel.app
          </div>
        </div>

        <a
          href={LIVE_URL}
          target="_blank"
          rel="noreferrer"
          data-cursor-label="LIVE"
          className="shrink-0 font-mono text-[7px] uppercase tracking-[0.14em] text-accent transition-colors hover:text-white sm:text-[8px]"
        >
          Open ↗
        </a>
      </div>

      <div className="relative" style={{ height: large ? "min(68vw, 560px)" : "min(53vw, 390px)", minHeight: large ? 390 : 285 }}>
        {!loaded && (
          <div className="absolute inset-0 z-10 grid place-items-center bg-[#080a0f]">
            <div className="text-center">
              <motion.div
                animate={reducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                className="mx-auto h-8 w-8 rounded-full border border-white/10 border-t-accent"
              />
              <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/28">
                Loading live product
              </p>
            </div>
          </div>
        )}

        <iframe
          src={LIVE_URL}
          title="CareerUpAI live website preview"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 h-full w-full bg-white"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080a0f]/45 to-transparent" />
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] bg-[#0a0c11] px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/28 sm:text-[8px]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.65)]" />
          Live deployment
        </div>
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/48 transition-colors hover:text-accent sm:text-[8px]"
        >
          View full site ↗
        </a>
      </div>
    </div>
  );
}
