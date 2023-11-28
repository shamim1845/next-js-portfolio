import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.developershamim.me",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.developershamim.me/resume.pdf",
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}
