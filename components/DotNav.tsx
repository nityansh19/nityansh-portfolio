"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/data";

export default function DotNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[400] flex-col gap-3.5">
      {sections.map((s) => (
        <button
          key={s.id}
          title={s.label}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            active === s.id ? "bg-accent scale-[1.6]" : "bg-line-strong"
          }`}
        />
      ))}
    </div>
  );
}
