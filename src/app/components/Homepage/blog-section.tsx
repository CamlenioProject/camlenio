"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaComments, FaHeart } from "react-icons/fa";
import { LazyMotion, domMax, m } from "framer-motion";
import Link from "next/link";
import { WPBlog } from "../../types/wp-blog";

export default function BlogSection(): React.JSX.Element {
  const [blogs, setBlogs] = useState<WPBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      try {
        const res = await fetch(
          "https://blogs.camlenio.com/wp-json/wp/v2/posts?per_page=3&_embed"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data: WPBlog[] = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <LazyMotion features={domMax}>
      <div className="bg-gradient-to-r from-gray-100 via-orange-100 to-gray-50 py-16 overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-8 md:px-16 text-center">
          <div className="relative inline-block px-4 py-1.5 rounded-full border border-orange-50 bg-orange-100 shadow-sm text-sm font-medium text-orange-600 mb-4">
            Blogs
          </div>

          <m.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          >
            Blogs
          </m.h2>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[420px] rounded-xl bg-orange-100 animate-pulse"
                />
              ))}

            {!loading &&
              blogs.map((blog) => {
                const media = blog._embedded?.["wp:featuredmedia"]?.[0];
                const image =
                  media?.media_details?.sizes?.medium_large?.source_url ??
                  media?.source_url;

                return (
                  <Link
                    key={blog.id}
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      key={blog.id}
                      className="rounded-xl shadow-md overflow-hidden flex flex-col h-full bg-orange-100 group"
                    >
                      {image && (
                        <div className="relative w-full aspect-[3/4] h-96 bg-white">
                          <Image
                            src={image}
                            alt={media?.alt_text || blog.title.rendered}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-grow text-left">
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt />
                            {new Date(blog.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <span>-</span>
                          <span className="flex items-center gap-1">
                            <FaComments /> WP
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold leading-snug mb-5 text-gray-900">
                          {blog.title.rendered}
                        </h3>

                        <div className="mt-auto flex items-center justify-between">
                          Read More →
                          <FaHeart className="text-gray-400 hover:text-red-500 transition" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
