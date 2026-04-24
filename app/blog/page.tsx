import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing & Business Growth Tips",
  description:
    "Practical guides on web development, digital marketing, SEO, Amazon listings, and AI automation from the Munzeer.com team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 pt-12 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Grow your business online
          </h1>
          <p className="text-xl text-zinc-400">
            Practical guides on web, marketing, AI, and ecommerce from our team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-400">Blog posts coming soon...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <span className="badge text-xs mb-3 self-start">{post.category}</span>
                <h2 className="font-bold text-zinc-950 mb-2 group-hover:text-violet-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 mb-4 flex-1 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
