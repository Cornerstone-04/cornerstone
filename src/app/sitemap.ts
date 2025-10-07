import { MetadataRoute } from "next";
// import { projects } from "@/lib/me";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cornerstoneephraim.vercel.app";
  const currentDate = new Date();

  // Core pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Optional: Add individual project URLs if you create dynamic routes
  /*
  const projectUrls = projects.flatMap(category =>
    category.works
      .filter(work => work.url)
      .map(work => ({
        url: `${baseUrl}/projects/${encodeURIComponent(work.title.toLowerCase().replace(/\s+/g, '-'))}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
  );

  return [...routes, ...projectUrls];
  */

  return routes;
}