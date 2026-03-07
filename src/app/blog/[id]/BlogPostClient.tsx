"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { WPBlog } from "../../types/wp-blog";
import { CalendarIcon, ClockIcon, XMarkIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

import { LoadingScreen } from "@/app/components/ui/LoadingScreen";

interface BlogPostClientProps {
  id: string;
}

export default function BlogPostClient({ id }: BlogPostClientProps) {
  const router = useRouter();
  const [post, setPost] = useState<WPBlog | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WPBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }

    const fetchPostData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://blogs.camlenio.com/wp-json/wp/v2";

        // Fetch current post by slug
        const res = await fetch(`${apiUrl}/posts?slug=${id}&_embed`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();

        let fetchedPost = null;
        if (data && data.length > 0) {
          fetchedPost = data[0];
          setPost(fetchedPost);
        } else {
          throw new Error("Post not found");
        }

        // Fetch related/recent posts for sidebar
        const excludeId = fetchedPost ? fetchedPost.id : "";
        const relatedRes = await fetch(`${apiUrl}/posts?_embed&per_page=3${excludeId ? `&exclude=${excludeId}` : ''}`);
        if (relatedRes.ok) {
          const relatedData = await relatedRes.json();
          setRelatedPosts(relatedData);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPostData();
  }, [id]);

  // Smooth scroll for internal anchor links (like Table of Contents)
  useEffect(() => {
    if (!loading && post) {
      const handleAnchorClick = (e: Event) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href !== "#!") {
          e.preventDefault();
          const targetId = href.substring(1);
          const el = document.getElementById(targetId);
          if (el) {
            const headerOffset = 120;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      };

      const links = document.querySelectorAll(".article-body a, .toc-link");
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#") && href !== "#!") {
          link.addEventListener("click", handleAnchorClick);
        }
      });

      return () => {
        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href && href.startsWith("#") && href !== "#!") {
            link.removeEventListener("click", handleAnchorClick);
          }
        });
      };
    }
  }, [loading, post]);

  const handleShare = (platform: string) => {
    if (!post) return;
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(post.title.rendered);

    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank");
    } else if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    } else if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Sanitize WordPress links, add heading IDs and collect TOC items
  const { cleanContent, tocData } = useMemo(() => {
    if (!post) return { cleanContent: "", tocData: [] };

    let content = post.content.rendered;
    let tocItems: { id: string, text: string, level: number }[] = [];

    // Replace WP links
    content = content.replace(/href="([^"]+)"/g, (match, url) => {
      if (url.includes("blogs.camlenio.com") || url.includes("wordpress")) {
        const hashIndex = url.indexOf("#");
        if (hashIndex !== -1) return `href="${url.substring(hashIndex)}"`;
        return `href="#!" onClick="event.preventDefault();"`;
      }
      return match;
    });

    // Add IDs to headings and collect TOC data
    let headingCount = 0;
    content = content.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, text) => {
      const cleanText = text.replace(/<[^>]+>/g, "").trim();
      if (!cleanText) return match;

      const idMatch = attrs.match(/id="([^"]+)"/);
      const headingId = idMatch ? idMatch[1] : `section-${headingCount++}`;

      tocItems.push({ id: headingId, text: cleanText, level: parseInt(tag[1]) });

      if (idMatch) return match;
      return `<${tag}${attrs} id="${headingId}">${text}</${tag}>`;
    });

    return { cleanContent: content, tocData: tocItems };
  }, [post]);

  if (loading) {
    return <LoadingScreen message="Loading Article" subtitle="Retrieving blog data..." variant="full" />;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 shadow-sm">
          <XMarkIcon className="w-10 h-10 text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <Link href="/blog" className="text-orange-500 font-bold hover:underline">Return to Journal</Link>
      </div>
    );
  }

  const featuredMediaArr = post._embedded ? post._embedded["wp:featuredmedia"] : null;
  const media = featuredMediaArr ? featuredMediaArr[0] : null;
  const imageUrl = media?.media_details?.sizes?.full?.source_url || media?.source_url;

  const authorArr = post._embedded ? post._embedded["author"] : null;
  const author = authorArr ? authorArr[0] : null;
  const authorName = author && typeof author.name === "string" ? author.name : "Camlenio Team";
  const authorImg = (author && (author as any).avatar_urls) ? (author as any).avatar_urls["96"] : "/logo-icon.png";

  const terms = post._embedded ? (post._embedded as any)["wp:term"] : null;
  const category = (terms && terms[0] && terms[0][0]) ? terms[0][0].name : "Business Strategy";

  return (
    <div className="selection:bg-orange-50 bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 selection:text-orange-900 min-h-screen pt-24 md:pt-28 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-16">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-gray-500 mb-4 md:mb-8">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span className="text-gray-300">•</span>
          <Link href="/blog" className="hover:text-orange-600">Our Blogs</Link>
          <span className="text-gray-300">•</span>
          <span className="text-gray-900 truncate">{category}</span>
        </nav>

        {/* Title */}
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#111] leading-[1.1] mb-6 md:mb-10 tracking-tight"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="flex flex-wrap items-center gap-2.5 md:gap-4">
            {/* Author Pill */}
            <div className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <div className="w-6 h-6 rounded-full overflow-hidden relative">
                <Image src={authorImg} alt={authorName} fill className="object-cover" />
              </div>
              <span className="text-sm font-bold text-gray-800">{authorName}</span>
            </div>

            {/* Category Pill */}
            <div className="bg-gray-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600">
              {category}
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600">
              <ClockIcon className="w-4 h-4 text-orange-500" />
              <span>5 min read</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600">
              <CalendarIcon className="w-4 h-4 text-orange-500" />
              <span>{new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>

            {/* Views */}
            {/* <div className="flex items-center gap-2 bg-gray-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-gray-600">
              <EyeIcon className="w-4 h-4 text-orange-500" />
              <span>{((post.id * 17) % 5000) + 300} Views</span>
            </div> */}
          </div>

          <div className="flex items-center gap-3">
            {/* Single Share Button */}
            <div className="relative flex flex-col items-center">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => handleShare("copy")}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50/80 backdrop-blur-sm text-gray-500 hover:text-orange-500 hover:border-orange-500 transition-all shadow-sm cursor-pointer"
                title="Share Story"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </motion.button>
              {isCopied && (
                <span className="absolute -bottom-6 text-[10px] font-bold text-orange-500 whitespace-nowrap opacity-100 transition-opacity duration-300 drop-shadow-sm">
                  Copied!
                </span>
              )}
            </div>

            {/* Like Button */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsLiked(!isLiked)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border hover:border-orange-500 transition-colors shadow-sm cursor-pointer ${isLiked ? 'bg-orange-50 border-orange-500 text-orange-500 scale-110' : 'bg-gray-50/80 border-gray-200 text-gray-500 hover:text-orange-500'}`}
            >
              <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Featured Image (Hidden on Desktop) */}
        {imageUrl && (
          <div className="lg:hidden w-full rounded-[1.5rem] overflow-hidden shadow-xl shadow-gray-200/50 mb-10 border border-gray-100 bg-gray-50 flex items-center justify-center">
            <img
              src={imageUrl}
              alt={post.title.rendered}
              className="w-full h-auto object-contain"
            />
          </div>
        )}

        {/* 3-Column Flex Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 relative w-full">

          {/* Left Column: Table of Contents (Sticky) */}
          <aside className="hidden lg:block w-[300px] xl:w-[340px] flex-shrink-0 sticky top-28 self-start">
            <TableOfContents tocData={tocData} relatedPosts={relatedPosts} />
          </aside>

          {/* Right Column: Main Article Content Area */}
          <div className="flex-1 min-w-0">


            {/* Desktop Featured Image - Middle Area */}
            {imageUrl && (
              <div className="hidden lg:flex rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 mb-12 border border-gray-100 bg-gray-50 items-center justify-center">
                <img
                  src={imageUrl}
                  alt={post.title.rendered}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}

            {/* Article Content Body */}
            <article className="prose prose-xl prose-orange max-w-none prose-headings:text-gray-900 prose-headings:font-extrabold prose-headings:tracking-tight prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-8 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline">
              <div
                className="article-body px-0"
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />
            </article>

            {/* Mobile Footer Area if needed */}
            <aside className="lg:hidden mt-20 pt-12 border-t border-gray-100">
              {/* Content for mobile usually goes here if we want sidebar items below post */}
              <div className="bg-gray-50/50 p-8 rounded-3xl">
                <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-widest">More Stories</h3>
                <div className="space-y-6">
                  {relatedPosts.map(p => (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="block group">
                      <h4 className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors" dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

      </div>

      <style jsx global>{`
        /* Hide WP inline Table Of Contents since we have the dynamic one on left */
        .article-body .ez-toc-v2_0_62,
        .article-body #ez-toc-container,
        .article-body .lwptoc {
          display: none !important;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 10px;
        }
        
        .article-body h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #111;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        .article-body h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #111;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .article-body p {
          margin-top: 0;
          margin-bottom: 1rem;
          color: #3f3f46;
          font-size: 1rem;
          line-height: 1.7;
        }
        .article-body p:empty {
          display: none;
        }
        .article-body ul, .article-body ol {
          margin-top: 0.5rem;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .article-body li {
          margin-bottom: 0.5rem;
          color: #3f3f46;
          font-size: 1rem;
          line-height: 1.7;
        }
        
        @media (min-width: 768px) {
          .article-body h2 {
            font-size: 2.25rem;
            line-height: 1.2;
          }
          .article-body h3 {
            font-size: 1.75rem;
          }
          .article-body p {
            font-size: 1.125rem;
            line-height: 1.8;
          }
          .article-body li {
            font-size: 1.05rem;
          }
        }
        .article-body a {
          color: #f97316;
          text-decoration: underline;
          text-decoration-color: transparent;
          transition: all 0.2s;
        }
        .article-body a:hover {
          text-decoration-color: #f97316;
        }
        .article-body blockquote {
          margin: 3.5rem 0;
          padding: 2.5rem;
          background-color: #f9fafb;
          border-left: 6px solid #f97316;
          border-radius: 0 1.5rem 1.5rem 0;
          font-style: italic;
          font-size: 1.25rem;
          color: #111;
        }
        .article-body img {
          border-radius: 1.5rem;
          margin: 4rem 0;
          box-shadow: 0 20px 50px -15px rgba(0,0,0,0.1);
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

// Separate components to maintain hook stability
const TableOfContents = ({ tocData, relatedPosts }: { tocData: any[], relatedPosts: any[] }) => {
  if (tocData.length === 0) return null;
  return (
    <div className="bg-gray-50/30 rounded-3xl p-6 border border-gray-100 shadow-sm">
      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100/50 pb-4">
        Table of Contents
      </h3>
      <ul className="space-y-3">
        {tocData.map(item => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${item.id}`}
              className="toc-link text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors block leading-relaxed line-clamp-2"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Related Blogs under TOC */}
      <div className="mt-12">
        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100/50 pb-4">
          Related Blogs
        </h3>
        <div className="space-y-6">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((rPost) => {
              const rMedia = rPost._embedded?.["wp:featuredmedia"]?.[0];
              return (
                <Link key={rPost.id} href={`/blog/${rPost.slug}`} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-xl overflow-hidden relative flex-shrink-0 bg-gray-100 border border-gray-100 shadow-sm">
                    <Image
                      src={rMedia?.source_url || "/blog-placeholder.jpg"}
                      alt={rPost.title.rendered}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      <CalendarIcon className="w-3 h-3 text-orange-500" />
                      <span>{new Date(rPost.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                    </div>
                    <h4
                      className="text-xs font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: rPost.title.rendered }}
                    />
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-sm text-gray-400 py-4">Checking for more stories...</p>
          )}
        </div>
      </div>
    </div>
  );
};
