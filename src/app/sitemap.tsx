import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://disciplinetrading.com', lastModified: new Date() },
    { url: 'https://disciplinetrading.com/blog', lastModified: new Date() },
    { url: 'https://disciplinetrading.com/about', lastModified: new Date() },
    { url: 'https://disciplinetrading.com/contact', lastModified: new Date() },
    { url: 'https://disciplinetrading.com/youtube', lastModified: new Date() },
    // Add individual blog post URLs here if you have them
  ]
}