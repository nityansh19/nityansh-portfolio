import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Nityansh Rupesh Bahadur",
  description: "Get in touch with Nityansh for opportunities and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-bg pt-16">
      <Contact />
    </main>
  );
}
