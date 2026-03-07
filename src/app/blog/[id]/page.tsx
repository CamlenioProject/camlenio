import { Metadata, ResolvingMetadata } from 'next';
import BlogPostClient from './BlogPostClient';
import { WPBlog } from "../../types/wp-blog";

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const p = await params;
  const slug = p.id;
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://blogs.camlenio.com/wp-json/wp/v2";

  try {
    const res = await fetch(`${apiUrl}/posts?slug=${slug}&_embed`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch post");

    const data: WPBlog[] = await res.json();
    if (!data || data.length === 0) throw new Error("Post not found");

    const post = data[0];

    const plainTitle = post.title.rendered.replace(/<[^>]+>/g, "");
    const plainDescription = post.excerpt.rendered.replace(/<[^>]+>/g, "").substring(0, 160) + "...";

    const featuredMediaArr = post._embedded ? post._embedded["wp:featuredmedia"] : null;
    const media = featuredMediaArr ? featuredMediaArr[0] : null;
    const imageUrl = media?.media_details?.sizes?.full?.source_url || media?.source_url || "https://camlenio.com/logo.png";
    const authorArr = post._embedded ? post._embedded["author"] : null;
    const author = authorArr ? authorArr[0] : null;
    const authorName = author && typeof author.name === "string" ? author.name : "Camlenio Team";

    return {
      title: `${plainTitle} | Camlenio Blog`,
      description: plainDescription,
      alternates: {
        canonical: `https://camlenio.com/blog/${slug}`,
      },
      openGraph: {
        title: plainTitle,
        description: plainDescription,
        url: `https://camlenio.com/blog/${slug}`,
        siteName: "Camlenio",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: plainTitle,
          },
        ],
        locale: "en_US",
        type: "article",
        authors: [authorName],
        publishedTime: post.date,
        modifiedTime: post.modified,
      },
      twitter: {
        card: "summary_large_image",
        title: plainTitle,
        description: plainDescription,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | Camlenio",
      description: "Explore the latest insights from Camlenio.",
      alternates: {
        canonical: `https://camlenio.com/blog/${slug}`,
      }
    };
  }
}

export default async function SingleBlogPage({ params }: Props) {
  const p = await params;
  return <BlogPostClient id={p.id} />;
}
