"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WPBlog } from "../types/wp-blog";
import { MagnifyingGlassIcon, Squares2X2Icon, ListBulletIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { LoadingScreen } from "@/app/components/ui/LoadingScreen";

export default function BlogListingPage() {
  const [posts, setPosts] = useState<WPBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"latest" | "oldest" | "title">("latest");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://blogs.camlenio.com/wp-json/wp/v2";
        // Fetch more posts to make pagination meaningful
        const res = await fetch(`${apiUrl}/posts?_embed&per_page=50`);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const categories = [
    "Design and Branding",
    "Website Development",
    "App Development",
    "Social Media",
    "Marketing Strategy",
    "Video Production"
  ];

  const tags = [
    "design", "branding", "seo", "web development", "marketing", "ux design", "app development", "social media", "ui design"
  ];

  // Filtering Logic
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Search filter
    if (searchQuery) {
      result = result.filter(post =>
        post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter (Simulated since WP categories are IDs, usually we filter by content or meta for demo)
    if (selectedCategory) {
      // In a real WP setup, we'd fetch posts by category ID. Here we simulate:
      result = result.filter(post =>
        post.content.rendered.toLowerCase().includes(selectedCategory.split(' ')[0].toLowerCase())
      );
    }

    // Tag filter (Simulated)
    if (selectedTag) {
      result = result.filter(post =>
        post.content.rendered.toLowerCase().includes(selectedTag.toLowerCase())
      );
    }

    // Sort logic
    if (sortBy === "latest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered));
    }

    return result;
  }, [posts, searchQuery, sortBy, selectedCategory, selectedTag]);

  // Pagination Logic
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  // Reset to page 1 on search/filter/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-orange-100 to-gray-100 font-sans selection:bg-orange-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-30 pb-20 px-6 md:px-12 lg:px-24 border-b border-gray-200/50 relative overflow-hidden">


        <div className="max-w-7xl mx-auto text-center relative z-10">
          <nav className="flex justify-center items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Blog</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-black text-[#1A1A1A] leading-[1.1] md:leading-none tracking-tighter"
          >
            IDEAS <span className="text-transparent inline-block font-outline-2">THAT</span> <br />
            <span className="relative inline-block mt-1 md:mt-0">
              INS<span className="text-orange-500">P</span>IRE
              {/* <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [12, 18, 12]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-3 -right-4 md:-top-4 md:-right-8 w-10 h-10 md:w-16 md:h-16 bg-orange-500 flex items-center justify-center rounded-tr-2xl md:rounded-tr-3xl rounded-bl-2xl md:rounded-bl-3xl shadow-lg z-20"
              >
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.div> */}
            </span>
          </motion.h1>
          <style jsx>{`
            .font-outline-2 {
              -webkit-text-stroke: 1.5px #1A1A1A;
            }
            @media (min-width: 768px) {
              .font-outline-2 {
                -webkit-text-stroke: 2px #1A1A1A;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Camlenio Global Search & Control Deck */}
      <section className="sticky top-16 md:top-20 z-40 px-4 md:px-12 lg:px-24 py-3 md:py-5 transition-all duration-500">
        <div className="absolute inset-0 bg-white/80 md:bg-white/60 backdrop-blur-3xl border-b border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.02)]" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8 relative z-10">

          {/* Layout & Status Tools */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-2 bg-gray-900/5 p-1.5 rounded-2xl border border-white/50">
              <div className="relative flex items-center gap-1 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
                <motion.div
                  layoutId="viewSwitch"
                  className="absolute bg-orange-500 rounded-lg h-9 w-9 shadow-lg shadow-orange-500/20"
                  animate={{ x: viewType === "grid" ? 0 : 40 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button onClick={() => setViewType("grid")} className={clsx("relative z-10 w-9 h-9 flex items-center justify-center transition-colors cursor-pointer", viewType === "grid" ? "text-white" : "text-gray-400 hover:text-gray-900")}>
                  <Squares2X2Icon className="w-5 h-5" />
                </button>
                <button onClick={() => setViewType("list")} className={clsx("relative z-10 w-9 h-9 flex items-center justify-center transition-colors cursor-pointer", viewType === "list" ? "text-white" : "text-gray-400 hover:text-gray-900")}>
                  <ListBulletIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 hidden sm:block">
                <div className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400 mb-0.5">Library</div>
                <div className="text-sm font-black text-gray-900">{filteredPosts.length} <span className="text-[10px] text-gray-400 font-bold ml-1">POSTS</span></div>
              </div>
            </div>

            {/* Premium Smart Sort */}
            <div className="relative hidden lg:block">
              <div
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-3 py-3 px-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex -space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-orange-200" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 group-hover:text-gray-900 transition-colors">Sort: {sortBy}</span>
                <ChevronDownIcon className={clsx("w-3.5 h-3.5 text-gray-400 transition-transform duration-500", isSortOpen && "rotate-180")} />
              </div>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute top-full left-0 mt-4 w-52 bg-white/95 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.12)] rounded-3xl border border-gray-100 p-2.5 z-50 overflow-hidden"
                  >
                    {[
                      { id: "latest", label: "Fresh Insights" },
                      { id: "oldest", label: "Legacy Archive" },
                      { id: "title", label: "A - Z Index" }
                    ].map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => { setSortBy(opt.id as any); setIsSortOpen(false); }}
                        className={clsx(
                          "px-5 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl mb-1 last:mb-0 cursor-pointer transition-all",
                          sortBy === opt.id ? "bg-orange-500 text-white shadow-xl shadow-orange-500/20" : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        {opt.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Creative Search Interface */}
          <div className="relative w-full md:w-[500px] xl:w-[650px] group/search">
            <div className="relative flex items-center bg-gray-100/40 border border-gray-200/50 rounded-2xl p-1 transition-all duration-500 group-focus-within/search:bg-white group-focus-within/search:border-orange-500/20 group-focus-within/search:shadow-2xl group-focus-within/search:shadow-orange-500/5 ring-0 group-focus-within/search:ring-8 ring-orange-500/[0.03]">
              <div className="pl-5 pr-2">
                <div className="w-11 h-11 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center transition-all duration-500 group-focus-within/search:bg-orange-500 group-focus-within/search:text-white group-focus-within/search:shadow-xl group-focus-within/search:shadow-orange-500/20 group-focus-within/search:rotate-[-8deg]">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Scan articles, industries, trends..."
                className="w-full bg-transparent border-none px-4 py-4 text-sm font-bold text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="pr-6 opacity-0 group-focus-within/search:opacity-100 transition-opacity duration-500 hidden sm:block">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce delay-100" />
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-bounce delay-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-6 md:px-12 lg:px-24 py-20 relative">
        <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Blog (Left Column) */}
          <div className="lg:col-span-8">
            {/* Filter Pins (Active State) */}
            {(selectedCategory || selectedTag) && (
              <div className="flex gap-3 mb-8">
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-4 py-1.5 bg-orange-500 text-white text-[10px] font-black uppercase rounded-full flex items-center gap-2 cursor-pointer"
                  >
                    {selectedCategory} ×
                  </button>
                )}
                {selectedTag && (
                  <button
                    onClick={() => setSelectedTag(null)}
                    className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-black uppercase rounded-full flex items-center gap-2 cursor-pointer"
                  >
                    #{selectedTag} ×
                  </button>
                )}
              </div>
            )}

            <div className={clsx(
              "grid gap-x-10 gap-y-20",
              viewType === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            )}>

              <AnimatePresence mode="popLayout">

                {loading ? (
                  Array.from({ length: viewType === "grid" ? 4 : 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "animate-pulse group bg-white shadow-xl shadow-gray-200/50 border border-gray-100 rounded-[2rem]",
                        viewType === "list" ? "flex flex-col md:flex-row gap-8 items-center p-4 text-left" : "p-3"
                      )}
                    >
                      <div className={clsx("bg-gray-100 rounded-[1.5rem] w-full", viewType === "list" ? "md:w-1/2 aspect-[4/3] flex-shrink-0" : "aspect-[1.1] mb-8")} />
                      <div className={clsx("flex-1", viewType === "list" ? "py-4 w-full" : "px-2 pb-6")}>
                        <div className={clsx("h-8 bg-gray-100 rounded-lg w-full mb-3", viewType === "list" ? "max-w-[80%]" : "")} />
                        <div className="h-8 bg-gray-100 rounded-lg w-3/4 mb-6" />
                        <div className="h-4 bg-gray-100 rounded-full w-1/3 mb-4" />
                        {viewType === "list" && (
                          <div className="space-y-3 mt-6">
                            <div className="h-3 bg-gray-100 rounded-full w-full" />
                            <div className="h-3 bg-gray-100 rounded-full w-5/6" />
                            <div className="h-3 bg-gray-100 rounded-full w-4/6" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : paginatedPosts.length > 0 ? (
                  paginatedPosts.map((post, idx) => {
                    const media = post._embedded?.["wp:featuredmedia"]?.[0];
                    const imageUrl = media?.source_url || "/blog-placeholder.jpg";

                    return (
                      <motion.div
                        key={post.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={clsx("group", viewType === "list" && "flex flex-col md:flex-row gap-8 items-center text-left")}
                      >
                        <Link
                          href={`/blog/${post.id}`}
                          className={clsx(
                            "block overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl shadow-gray-200/50 border border-gray-100 group-hover:shadow-2xl group-hover:shadow-orange-200/50 group-hover:-translate-y-1 transition-all duration-500",
                            viewType === "list" ? "w-full md:w-1/2 aspect-[4/3]" : "aspect-[1.1] mb-8"
                          )}
                        >
                          <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                              src={imageUrl}
                              alt={post.title.rendered}
                              fill
                              className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                            />
                          </div>
                        </Link>

                        <div className={clsx("flex-1", viewType === "list" ? "py-4" : "px-2")}>
                          <Link href={`/blog/${post.id}`}>
                            <h2
                              className={clsx(
                                "font-black text-gray-900 leading-[1.15] mb-4 hover:text-orange-500 transition-colors",
                                viewType === "grid" ? "text-2xl" : "text-3xl"
                              )}
                              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                          </Link>
                          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>CAMLENIO EXPERT</span>
                          </div>
                          {viewType === "list" && (
                            <div
                              className="mt-6 text-gray-500 line-clamp-2 text-sm leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                            />
                          )}
                        </div>
                      </motion.div>
                    )
                  })
                ) : (
                  <div className="col-span-full py-20 text-center">
                    <h3 className="text-xl font-bold text-gray-400">No matching posts found.</h3>
                    <button
                      onClick={() => { setSearchQuery(""); setSelectedCategory(null); setSelectedTag(null); }}
                      className="mt-4 text-orange-500 font-bold hover:underline cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Premium Magnetic Pagination Dock */}
            {totalPages > 1 && (
              <div className="mt-40 flex flex-col items-center gap-12">
                <div className="relative group/pagination p-2.5 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/80 shadow-[0_30px_100px_rgba(0,0,0,0.04)] flex items-center gap-1">

                  {/* Previous Control */}
                  <motion.button
                    whileHover={{ x: -3 }}
                    whileTap={{ scale: 0.85 }}
                    disabled={currentPage === 1}
                    onClick={() => { setCurrentPage(prev => Math.max(1, prev - 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                    className="w-11 h-11 flex items-center justify-center rounded-[1.8rem] text-gray-400 hover:text-orange-500 hover:bg-orange-50/50 disabled:opacity-10 transition-all z-10 cursor-pointer"
                  >
                    <ChevronLeftIcon className="w-5 h-5 stroke-[3]" />
                  </motion.button>

                  {/* Page Indices */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const isActive = currentPage === i + 1;
                      return (
                        <motion.button
                          key={i}
                          whileTap={{ scale: 0.85 }}
                          onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                          className={clsx(
                            "relative w-11 h-11 flex items-center justify-center rounded-[1.8rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer z-10",
                            isActive ? "text-white" : "text-gray-400 hover:text-gray-900 hover:bg-gray-100/50"
                          )}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="paginationIndicator"
                              className="absolute inset-0 bg-orange-500 rounded-[1.8rem] shadow-[0_15px_35px_rgba(255,94,0,0.25)] -z-10"
                              transition={{ type: "spring", stiffness: 350, damping: 35 }}
                            />
                          )}
                          <span className="relative z-10">{i + 1}</span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Next Control */}
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.85 }}
                    disabled={currentPage === totalPages}
                    onClick={() => { setCurrentPage(prev => Math.min(totalPages, prev + 1)); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                    className="w-11 h-11 flex items-center justify-center rounded-[1.8rem] text-gray-400 hover:text-orange-500 hover:bg-orange-50/50 disabled:opacity-10 transition-all z-10 cursor-pointer"
                  >
                    <ChevronRightIcon className="w-5 h-5 stroke-[3]" />
                  </motion.button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (Right Column) */}
          <aside className="lg:col-span-4 space-y-16">

            {/* Categories */}
            <div className="bg-white/40 p-10 rounded-[2.5rem] border border-white/50 shadow-xl shadow-gray-100">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-8 pb-4 border-b border-gray-200">Categories</h3>
              <ul className="space-y-4">
                {categories.map((cat, i) => (
                  <li
                    key={i}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    className="group flex items-center gap-3 cursor-pointer"
                  >
                    <div className={clsx("w-1.5 h-1.5 rounded-full bg-orange-500 transition-all", selectedCategory === cat ? "scale-150 opacity-100" : "opacity-0 group-hover:opacity-100")} />
                    <span className={clsx(
                      "text-xs font-bold uppercase tracking-widest transition-colors",
                      selectedCategory === cat ? "text-orange-600" : "text-gray-500 group-hover:text-orange-500"
                    )}>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="bg-white/40 p-10 rounded-[2.5rem] border border-white/50 shadow-xl shadow-gray-100">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-8 pb-4 border-b border-gray-200">Featured Articles</h3>
              <div className="space-y-8">
                {posts.slice(0, 3).map((post) => {
                  const media = post._embedded?.["wp:featuredmedia"]?.[0];
                  return (
                    <Link key={post.id} href={`/blog/${post.id}`} className="group flex items-center gap-5">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-white shadow-sm">
                        <Image src={media?.source_url || "/blog-placeholder.jpg"} alt={post.title.rendered} fill className="object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{new Date(post.date).toLocaleDateString()}</div>
                        <h4 className="text-xs font-black text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white/40 p-10 rounded-[2.5rem] border border-white/50 shadow-xl shadow-gray-100">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 mb-8 pb-4 border-b border-gray-200">Tags Cloud</h3>
              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={clsx(
                      "px-5 py-2.5 border text-[10px] font-black uppercase tracking-widest rounded-full transition-all cursor-pointer",
                      selectedTag === tag
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white border-gray-100 text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-sm"
                    )}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>


    </div>
  );
}
