import type { Metadata } from "next";
import Terminal from "@/components/Terminal";

export const metadata: Metadata = {
  title: "Terminal — Nityansh Rupesh Bahadur",
  description: "Talk to Nityansh's interactive portfolio terminal.",
};

export default function TerminalPage() {
  return (
    <main className="min-h-screen pt-16">
      <Terminal />
    </main>
  );
}
