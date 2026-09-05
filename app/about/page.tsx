import type { Metadata } from "next";
import AboutExperience from "@/components/AboutExperience";

export const metadata: Metadata = {
  title: "About — Nityansh Rupesh Bahadur",
  description: "The story, working philosophy, journey, learning path, and technology behind Nityansh's work.",
};

export default function AboutPage() {
  return <AboutExperience />;
}
