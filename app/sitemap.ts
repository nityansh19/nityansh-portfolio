import type { MetadataRoute } from "next";

const baseUrl = "https://nityansh-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/careerupai",
    "/projects/nivora",
    "/projects/nitra-chat",
    "/projects/personal-ai",
    "/cv",
    "/terminal",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
