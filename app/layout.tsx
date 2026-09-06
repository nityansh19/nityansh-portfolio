import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://nityansh-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nityansh Rupesh Bahadur — Full Stack Developer",
    template: "%s — Nityansh Rupesh Bahadur",
  },
  description:
    "Nityansh Rupesh Bahadur is a Full Stack Developer from Lucknow building web applications and exploring Python and AI.",
  applicationName: "Nityansh Rupesh Bahadur Portfolio",
  authors: [{ name: "Nityansh Rupesh Bahadur" }],
  creator: "Nityansh Rupesh Bahadur",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nityansh Rupesh Bahadur",
    title: "Nityansh Rupesh Bahadur — Full Stack Developer",
    description:
      "Portfolio, projects, experience, technical work, and current learning direction.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Nityansh Rupesh Bahadur — Full Stack Developer",
    description:
      "Portfolio, projects, experience, technical work, and current learning direction.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#08090b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body font-light bg-bg text-ink antialiased overflow-x-hidden">
        <Loader />
        <ScrollProgress />
        <CustomCursor />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
