import type { Metadata } from "next";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Philosophy from "@/components/Philosophy";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "About — Nityansh Rupesh Bahadur",
  description: "The story, working philosophy, journey, and technology behind Nityansh's work.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About />
      <Journey />
      <TechStack />
      <Philosophy />
    </main>
  );
}
