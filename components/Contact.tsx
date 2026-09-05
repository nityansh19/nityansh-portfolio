"use client";

import { useState, type SVGProps } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

type IconProps = SVGProps<SVGSVGElement>;

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  copy?: string;
  external?: boolean;
  icon: (props: IconProps) => JSX.Element;
  hint: string;
};

function MailIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="m5 7 7 5 7-5"/></svg>;
}

function PhoneIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}><path d="M7.2 3.8 9.7 3l2 4.6-2.1 1.6a14.8 14.8 0 0 0 5.2 5.2l1.6-2.1 4.6 2-1 2.4c-.5 1.3-1.8 2.1-3.2 1.8C10.3 17.6 6.4 13.7 5.5 7.2c-.2-1.4.5-2.7 1.7-3.4Z"/></svg>;
}

function GithubIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M9 19c-4 .9-4-2-5.2-2.5M14.2 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.6-1.3 5.6-6A4.7 4.7 0 0 0 17.7 6 4.4 4.4 0 0 0 17.6 2S16.4 1.6 14 3.2a11.7 11.7 0 0 0-5.9 0C5.7 1.6 4.5 2 4.5 2A4.4 4.4 0 0 0 4.4 6a4.7 4.7 0 0 0-1.3 3.6c0 4.7 2.9 5.7 5.6 6A2.8 2.8 0 0 0 8 17.8V21"/></svg>;
}

function InstagramIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/></svg>;
}

function DiscordIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M7.5 6.1A13.5 13.5 0 0 1 12 5a13.5 13.5 0 0 1 4.5 1.1A11.2 11.2 0 0 1 20 16.2a12.1 12.1 0 0 1-3.4 1.8l-1.1-1.5a8 8 0 0 0-7 0l-1.1 1.5A12.1 12.1 0 0 1 4 16.2 11.2 11.2 0 0 1 7.5 6.1Z"/><circle cx="9" cy="11.3" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="11.3" r="1" fill="currentColor" stroke="none"/></svg>;
}

const contactItems: ContactItem[] = [
  { label: "Email", value: "Nityansh.bahadur1905@gmail.com", href: "mailto:Nityansh.bahadur1905@gmail.com", copy: "Nityansh.bahadur1905@gmail.com", icon: MailIcon, hint: "Best for projects & opportunities" },
  { label: "Phone", value: "+91 79921 32077", href: "tel:+917992132077", copy: "+917992132077", icon: PhoneIcon, hint: "Prefer a direct conversation" },
  { label: "GitHub", value: "github.com/nityansh19", href: "https://github.com/nityansh19", external: true, icon: GithubIcon, hint: "See what I am building" },
  { label: "Instagram", value: "@nityansh.19", href: "https://instagram.com/nityansh.19", external: true, icon: InstagramIcon, hint: "A little more personal" },
  { label: "Discord", value: "kakarotsenpai", copy: "kakarotsenpai", icon: DiscordIcon, hint: "Username — copy to connect" },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }
  return <button type="button" onClick={copyValue} className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.17em] text-white/30 transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.06] hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent">{copied ? "Copied ✓" : "Copy"}</button>;
}

function ChannelCard({ item, index, reducedMotion }: { item: ContactItem; index: number; reducedMotion: boolean }) {
  const Icon = item.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }} whileHover={reducedMotion ? undefined : { y: -8 }} className="group/channel relative h-full min-h-[285px] overflow-hidden border-b border-white/[0.07] p-6 transition-colors duration-500 hover:bg-white/[0.025] lg:border-b-0 lg:border-r lg:last:border-r-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(91,110,245,.14),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover/channel:opacity-100" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/[0.04] transition-all duration-700 group-hover/channel:scale-125 group-hover/channel:border-accent/15" />
      <div className="relative z-10 flex items-center justify-between"><span className="font-mono text-[8px] tracking-[0.16em] text-accent/60">0{index + 1}</span><motion.span animate={reducedMotion ? undefined : { opacity: [0.25, 0.8, 0.25] }} transition={{ duration: 2.8 + index * 0.25, repeat: Infinity, ease: "easeInOut" }} className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.75)]" /></div>
      <div className="relative z-10 mt-8 flex items-start justify-between gap-4">
        <motion.div whileHover={reducedMotion ? undefined : { rotate: 6, scale: 1.08 }} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025] text-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] transition-colors duration-300 group-hover/channel:border-accent/30 group-hover/channel:bg-accent/[0.06] group-hover/channel:text-accent"><Icon className="h-5 w-5" aria-hidden="true" /></motion.div>
        <span className="mt-1 rounded-full border border-white/[0.07] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">{item.label}</span>
      </div>
      <div className="relative z-10 mt-8"><div className="font-display text-lg tracking-[-0.035em] text-white/75 transition-colors duration-300 group-hover/channel:text-white sm:text-xl">{item.label === "Discord" ? item.value : item.value.replace("https://", "")}</div><p className="mt-3 max-w-[220px] text-xs leading-6 text-white/25 transition-colors duration-300 group-hover/channel:text-white/40">{item.hint}</p></div>
      <div className="absolute inset-x-6 bottom-5 flex items-center justify-between gap-3">
        {item.href ? <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/28 transition-colors hover:text-accent focus-visible:outline-none focus-visible:text-accent">{item.label === "GitHub" || item.label === "Instagram" ? "Open profile" : item.label === "Phone" ? "Call now" : "Send email"}<span>↗</span></a> : <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/18">Copy username</span>}
        {item.copy ? <CopyButton value={item.copy} /> : <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/15">Direct link</span>}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent/0 via-accent/80 to-accent/0 transition-transform duration-700 group-hover/channel:scale-x-100" />
    </motion.div>
  );
}

export default function Contact() {
  const reducedMotion = useReducedMotion() ?? false;
  const [active, setActive] = useState("Email");
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const smoothX = useSpring(mouseX, { stiffness: 75, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 75, damping: 24 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  const glow = useTransform([smoothX, smoothY], ([x, y]) => `radial-gradient(420px circle at ${x}% ${y}%, rgba(91,110,245,.16), transparent 72%)`);
  const activeItem = contactItems.find((item) => item.label === active) ?? contactItems[0];
  const ActiveIcon = activeItem.icon;

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-28 md:py-[170px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div animate={reducedMotion ? undefined : { scale: [1, 1.14, 1], opacity: [0.018, 0.042, 0.018] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[52%] top-[44%] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-accent blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)", backgroundSize: "68px 68px", maskImage: "radial-gradient(circle at center, black, transparent 72%)", WebkitMaskImage: "radial-gradient(circle at center, black, transparent 72%)" }} />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-bg to-transparent" /><div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-8">
        <div className="flex items-center justify-between"><motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="flex items-center gap-3"><span className="h-px w-8 bg-accent" /><span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent">08 / Connect</span></motion.div><span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/15 sm:block">Open channel / direct response</span></div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="relative max-w-5xl"><motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="absolute -left-5 top-2 hidden h-3 w-3 rounded-full border border-accent/40 bg-accent/20 shadow-[0_0_22px_rgba(91,110,245,.65)] md:block" /><h2 className="font-display text-[clamp(4rem,11vw,9.4rem)] font-semibold leading-[0.8] tracking-[-0.075em]"><span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">LET&apos;S</motion.span></span><span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }} className="block">BUILD</motion.span></span><span className="block overflow-hidden"><motion.span initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.16, ease: [0.16, 1, 0.3, 1] }} className="block text-accent">SOMETHING.</motion.span></span></h2></div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }} className="flex items-center gap-3 pb-2"><span className="relative flex h-2.5 w-2.5 items-center justify-center"><span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-accent/20" /><span className="relative h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_14px_rgba(91,110,245,.9)]" /></span><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">Open to opportunities</span></motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.22 }} className="mt-11 flex max-w-3xl flex-col gap-6 md:flex-row md:items-end md:justify-between"><p className="text-[16px] leading-7 text-ink-dim md:text-[18px] md:leading-8">Have a project, an opportunity, or an idea worth exploring?<span className="block text-white/80">Pick a channel and start the conversation.</span></p><div className="flex flex-wrap gap-3"><MagneticButton href="mailto:Nityansh.bahadur1905@gmail.com" target="_self" variant="solid">Email me ↗</MagneticButton><MagneticButton href="tel:+917992132077" target="_self" variant="ghost">Call me ↗</MagneticButton></div></motion.div>

        <motion.div onMouseMove={handleMouseMove} initial={{ opacity: 0, y: 50, scale: 0.985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="relative mt-20 overflow-hidden rounded-[30px] border border-white/[0.11] bg-[#090a0e]/85 shadow-[0_50px_160px_rgba(0,0,0,.48)] backdrop-blur-2xl md:mt-24">
          {!reducedMotion && <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background: glow }} />}
          <div className="relative z-10 flex h-12 items-center justify-between border-b border-white/[0.07] px-5 sm:px-7"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/10" /><span className="h-2 w-2 rounded-full bg-white/10" /><span className="h-2 w-2 rounded-full bg-white/10" /></div><div className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">nityansh / connect</div><div className="font-mono text-[8px] text-white/15">08</div></div>
          <div className="relative z-10 border-b border-white/[0.07] px-6 py-9 sm:px-10 sm:py-12 md:px-14 md:py-14"><div className="flex flex-wrap items-center justify-between gap-4"><span className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent">Primary channel</span><span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">RESPONSE → DIRECT</span></div><a href="mailto:Nityansh.bahadur1905@gmail.com" className="group/email mt-7 block"><div className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">Send a message</div><div className="break-all font-display text-[clamp(1.55rem,4.2vw,3.4rem)] font-medium leading-tight tracking-[-0.05em] text-white/75 transition-all duration-500 group-hover/email:translate-x-1 group-hover/email:text-white sm:break-normal">Nityansh.bahadur1905@gmail.com</div><div className="mt-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 transition-colors group-hover/email:text-accent">Start a conversation <span className="transition-transform duration-300 group-hover/email:translate-x-2">→</span></div></a></div>
          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-5">{contactItems.map((item, index) => <div key={item.label} onMouseEnter={() => setActive(item.label)} onFocus={() => setActive(item.label)}><ChannelCard item={item} index={index} reducedMotion={reducedMotion} /></div>)}</div>
          <motion.div layout className="relative z-10 border-t border-white/[0.07] bg-black/10 px-6 py-5 sm:px-8"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-4"><motion.div key={activeItem.label} initial={reducedMotion ? undefined : { opacity: 0, scale: 0.7, rotate: -10 }} animate={reducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }} className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.055] text-accent"><ActiveIcon className="h-4 w-4" aria-hidden="true" /></motion.div><div><div className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/20">Selected channel</div><div className="mt-1 font-display text-base tracking-[-0.02em] text-white/65">{activeItem.label}</div></div></div><div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.16em] text-white/20"><span className="hidden sm:block">{activeItem.hint}</span>{activeItem.href ? <a href={activeItem.href} target={activeItem.external ? "_blank" : undefined} rel={activeItem.external ? "noreferrer" : undefined} className="rounded-full border border-accent/20 bg-accent/[0.05] px-4 py-2.5 text-accent transition-all hover:border-accent/40 hover:bg-accent/[0.1]">Continue ↗</a> : activeItem.copy ? <CopyButton value={activeItem.copy} /> : null}</div></div></motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-16 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-7 font-mono text-[8px] uppercase tracking-[0.18em] text-white/18 sm:flex-row sm:items-center"><span>Choose your channel. I will take it from there.</span><span className="text-white/25">Lucknow, India · UTC +05:30</span></motion.div>
      </div>
    </section>
  );
}
