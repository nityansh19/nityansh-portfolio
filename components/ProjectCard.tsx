"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type ProjectCardProps = {
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  status: string;
};

export default function ProjectCard({
  number,
  title,
  category,
  description,
  href,
  status,
}: ProjectCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const smoothX = useSpring(x, { stiffness: 110, damping: 22, mass: 0.45 });
  const smoothY = useSpring(y, { stiffness: 110, damping: 22, mass: 0.45 });
  const rotateX = useTransform(smoothY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4]);
  const glowX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
    >
      <Link href={href} className="group block">
        <motion.div
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            x.set((event.clientX - rect.left) / rect.width);
            y.set((event.clientY - rect.top) / rect.height);
          }}
          onMouseLeave={() => {
            x.set(0.5);
            y.set(0.5);
          }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#090a0e] transition-shadow duration-500 group-hover:shadow-[0_40px_120px_rgba(0,0,0,.42)]"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([gx, gy]) =>
                  `radial-gradient(420px circle at ${gx} ${gy}, rgba(91,110,245,0.15), transparent 68%)`
              ),
            }}
          />

          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="relative z-10 grid gap-10 p-7 sm:p-10 md:grid-cols-[90px_1fr_auto] md:items-end md:p-12">
            <div className="flex items-center justify-between md:block">
              <span className="font-mono text-[10px] tracking-[0.18em] text-accent/60">
                {number}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/15 md:hidden">
                {status}
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                <span>{category}</span>
                <span className="text-accent/50">·</span>
                <span>{status}</span>
              </div>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1 sm:text-6xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-dim sm:text-base">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition-colors group-hover:text-accent">
              <span>Open</span>
              <motion.span
                className="text-base"
                animate={{ x: [0, 0, 0], y: [0, 0, 0] }}
                whileHover={{ x: 4, y: -4 }}
              >
                ↗
              </motion.span>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
