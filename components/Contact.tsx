"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import MagneticButton from "./MagneticButton";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  copy?: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "Nityansh.bahadur1905@gmail.com",
    href: "mailto:Nityansh.bahadur1905@gmail.com",
    copy: "Nityansh.bahadur1905@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 79921 32077",
    href: "tel:+917992132077",
    copy: "+917992132077",
  },
  {
    label: "GitHub",
    value: "github.com/nityansh19",
    href: "https://github.com/nityansh19",
    external: true,
  },
  {
    label: "Instagram",
    value: "@nityansh.19",
    href: "https://instagram.com/nityansh.19",
    external: true,
  },
  {
    label: "Discord",
    value: "kakarotsenpai",
    copy: "kakarotsenpai",
  },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyValue}
      className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25 transition-all duration-300 hover:text-accent"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

function ChannelIcon({ label }: { label: string }) {
  if (label === "Email") {
    return <span>✉</span>;
  }

  if (label === "Phone") {
    return <span>⌕</span>;
  }

  if (label === "GitHub") {
    return <span>GH</span>;
  }

  if (label === "Instagram") {
    return <span>◎</span>;
  }

  return <span>DS</span>;
}

export default function Contact() {
  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 24,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  const glow = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(500px circle at ${x}% ${y}%, rgba(91,110,245,0.13), transparent 70%)`
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-32 md:py-[190px]"
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Central light */}

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.025, 0.045, 0.025],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[55%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-[160px]"
        />

        {/* Fine grid */}

        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
          }}
        />

        {/* Vertical fade */}

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        {/* =====================================================
            HEADER META
        ====================================================== */}

        <div className="mb-10 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent">
              08 / Contact
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 sm:block"
          >
            26°27′N · 80°20′E
          </motion.div>
        </div>

        {/* =====================================================
            HERO TYPOGRAPHY
        ====================================================== */}

        <div className="relative">
          <div className="absolute -right-2 top-0 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 lg:block">
            END OF EXPERIENCE
          </div>

          <h2 className="max-w-[1050px] font-display text-[clamp(4rem,11vw,9.5rem)] font-semibold leading-[0.79] tracking-[-0.07em]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                LET&apos;S
              </motion.span>
            </span>

            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                BUILD
              </motion.span>
            </span>

            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-accent"
              >
                SOMETHING.
              </motion.span>
            </span>
          </h2>
        </div>

        {/* =====================================================
            SUBTEXT / STATUS
        ====================================================== */}

        <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-[570px] text-[16px] leading-7 text-ink-dim md:text-[18px] md:leading-8"
          >
            Have a project, an opportunity, or an idea worth
            exploring?
            <br />
            <span className="text-white/75">
              Let&apos;s turn it into something real.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-accent/25" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,0.9)]" />
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              Open to opportunities
            </span>
          </motion.div>
        </div>

        {/* =====================================================
            CONTACT TERMINAL / COMMAND CENTER
        ====================================================== */}

        <motion.div
          onMouseMove={handleMouseMove}
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.975,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-20 overflow-hidden rounded-[28px] border border-white/[0.11] bg-[#090a0e]/80 shadow-[0_50px_150px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:mt-24"
        >
          {/* Interactive spotlight */}

          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute inset-0 z-0"
              style={{ background: glow }}
            />
          )}

          {/* Top browser-like bar */}

          <div className="relative z-10 flex h-12 items-center justify-between border-b border-white/[0.07] px-5 sm:px-7">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>

            <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
              nityansh / connect
            </div>

            <div className="font-mono text-[8px] text-white/15">
              08
            </div>
          </div>

          {/* ===================================================
              EMAIL HERO
          ==================================================== */}

          <div className="relative z-10 border-b border-white/[0.07] px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16">
            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent">
                Primary channel
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
                RESPONSE → DIRECT
              </span>
            </div>

            <a
              href="mailto:Nityansh.bahadur1905@gmail.com"
              className="group/email block"
            >
              <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                Send a message
              </div>

              <div className="break-all font-display text-[clamp(1.45rem,4vw,3.2rem)] font-medium leading-tight tracking-[-0.045em] text-white/75 transition-colors duration-500 group-hover/email:text-white sm:break-normal">
                Nityansh.bahadur1905@gmail.com
              </div>

              <div className="mt-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover/email:text-accent">
                Start a conversation

                <span className="transition-transform duration-300 group-hover/email:translate-x-2">
                  →
                </span>
              </div>
            </a>
          </div>

          {/* ===================================================
              CHANNELS
          ==================================================== */}

          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-5">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group/channel relative border-b border-white/[0.07] p-6 transition-all duration-500 hover:bg-white/[0.025] sm:border-r lg:border-b-0 lg:last:border-r-0"
              >
                {/* Index */}

                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[8px] text-accent/50">
                    0{index + 1}
                  </span>

                  <span className="font-mono text-[8px] text-white/15">
                    {item.label}
                  </span>
                </div>

                {/* Icon */}

                <div className="mb-6 flex h-9 w-9 items-center justify-center border border-white/[0.08] bg-white/[0.025] font-mono text-[9px] text-white/40 transition-all duration-500 group-hover/channel:border-accent/30 group-hover/channel:text-accent">
                  <ChannelIcon label={item.label} />
                </div>

                {/* Value */}

                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block break-words font-mono text-[10px] leading-5 text-white/45 transition-colors duration-300 hover:text-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="block break-words font-mono text-[10px] leading-5 text-white/45">
                    {item.value}
                  </span>
                )}

                {/* Copy */}

                {item.copy && (
                  <div className="mt-5">
                    <CopyButton value={item.copy} />
                  </div>
                )}

                {/* Hover line */}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover/channel:w-full" />
              </motion.div>
            ))}
          </div>

          {/* ===================================================
              ACTION BAR
          ==================================================== */}

          <div className="relative z-10 flex flex-col justify-between gap-7 px-6 py-8 sm:px-10 md:flex-row md:items-center md:px-14 md:py-10">
            <div>
              <div className="font-display text-xl tracking-[-0.025em] text-white/75">
                Prefer something direct?
              </div>

              <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                Pick your preferred channel
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <MagneticButton href="mailto:Nityansh.bahadur1905@gmail.com">
                Email Me →
              </MagneticButton>

              <MagneticButton
                href="tel:+917992132077"
                variant="ghost"
              >
                Call Me →
              </MagneticButton>
            </div>
          </div>

          {/* ===================================================
              DECORATIVE SIGNAL
          ==================================================== */}

          <div className="pointer-events-none absolute right-[-100px] top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-accent/[0.06] md:block">
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[35px] rounded-full border border-white/[0.04]"
            >
              <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_15px_rgba(91,110,245,0.8)]" />
            </motion.div>
          </div>

          {/* Bottom highlight */}

          <div className="pointer-events-none absolute bottom-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
        </motion.div>

        {/* =====================================================
            FINAL SIGNATURE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.25,
          }}
          className="mt-16 border-t border-white/[0.07] pt-7"
        >
          <div className="flex flex-col justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 sm:flex-row">
            <span>Nityansh Rupesh Bahadur</span>

            <span>Full Stack · AI · Product</span>

            <span>Lucknow · India</span>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <span className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.04em] text-white/10">
              BUILD WITH INTENT.
            </span>

            <span className="font-mono text-[8px] text-white/10">
              © 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}