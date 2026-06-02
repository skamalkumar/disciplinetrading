import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.disciplinetrading.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.disciplinetrading.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://www.disciplinetrading.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.disciplinetrading.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.disciplinetrading.com/youtube",
      lastModified: new Date(),
    },
  ];
}