import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <article className="section">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Posts
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="badge text-xs mb-4 inline-block">{post.category}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-950 leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-zinc-500 mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-200 mb-10" />

          {/* MDX Content */}
          <div className="prose prose-zinc prose-sm sm:prose-base max-w-none prose-headings:font-bold prose-headings:text-zinc-950 prose-p:text-zinc-600 prose-p:leading-relaxed prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-800 prose-li:text-zinc-600 prose-code:text-violet-700 prose-code:bg-violet-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-violet-500 prose-blockquote:text-zinc-500">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-zinc-950 mb-3">
            Need help with this for your business?
          </h2>
          <p className="text-zinc-500 mb-8 text-sm">
            We offer done-for-you services across web, marketing, and AI. Get a free strategy call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services" className="btn-primary">
              See Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section border-t border-zinc-100">
          <h2 className="text-xl font-bold text-zinc-950 mb-6">Related posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card group hover:-translate-y-1 transition-all"
              >
                <span className="badge text-xs mb-3 inline-block">{p.category}</span>
                <h3 className="font-semibold text-zinc-950 text-sm mb-2 group-hover:text-violet-600 transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-400">{p.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
