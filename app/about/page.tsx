import type { Metadata } from "next";
import AboutExperienceV2 from "@/components/AboutExperienceV2";

export const metadata: Metadata = {
  title: "About — Nityansh Rupesh Bahadur",
  description: "The story, working philosophy, journey, and technology behind Nityansh's work.",
};

export default function AboutPage() {
  return <AboutExperienceV2 />;
}
