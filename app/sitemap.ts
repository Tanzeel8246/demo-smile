import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { r: "", priority: 1 },
    { r: "/about/", priority: 0.7 },
    { r: "/treatments/", priority: 0.9 },
    { r: "/doctors/", priority: 0.8 },
    { r: "/appointment/", priority: 0.9 },
    { r: "/faq/", priority: 0.8 },
    { r: "/contact/", priority: 0.8 },
    { r: "/privacy-policy/", priority: 0.5 },
    { r: "/terms/", priority: 0.5 },
  ];
  const now = new Date();
  return routes.map(({ r, priority }) => ({
    url: `${SITE.domain}${r || "/"}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
