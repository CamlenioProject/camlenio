import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(
      "https://blogs.camlenio.com/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified",
      { next: { revalidate: 3600 } }
    );
    const posts = await res.json();

    const postUrls = posts.map((post: any) => ({
      url: `https://camlenio.com/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    return [
      {
        url: "https://camlenio.com/blog",
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1.0,
      },
      ...postUrls,
    ];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return [
      {
        url: "https://camlenio.com/blog",
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1.0,
      },
    ];
  }
}
