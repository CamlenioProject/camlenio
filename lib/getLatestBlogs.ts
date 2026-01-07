// lib/getLatestBlogs.ts
import { WPBlog } from "@/app/types/wp-blog";

export const getLatestBlogs = async (): Promise<WPBlog[]> => {
  const res = await fetch(
    "https://blogs.camlenio.com/wp-json/wp/v2/posts?per_page=3&_embed",
    {
      next: { revalidate: 600 }, // auto refresh every 10 min
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};
