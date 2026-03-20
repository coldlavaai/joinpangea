import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://joinpangea.ai";

  const staticPages = [
    "",
    "/features",
    "/platform",
    "/how-it-works",
    "/pricing",
    "/why-pangaea",
    "/compliance",
    "/blog",
    "/demo",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/features" ? 0.9 : 0.8,
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
