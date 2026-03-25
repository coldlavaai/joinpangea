import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { SectionLabel } from "@/components/section";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-copper-400 hover:text-copper-300 text-sm transition-colors mb-8 inline-block"
        >
          &larr; Back to Blog
        </Link>

        <SectionLabel>{post.date}</SectionLabel>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
          {post.title}
        </h1>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="font-mono text-xs text-copper-400/70 bg-copper-500/10 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none [&_h2]:font-serif [&_h2]:text-copper-400 [&_h3]:font-serif [&_a]:text-copper-400 [&_a:hover]:text-copper-300 [&_strong]:text-white [&_blockquote]:border-copper-500/30 [&_code]:text-copper-300 [&_code]:bg-forest-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
          {/* For now, render raw markdown content as paragraphs */}
          {/* TODO: Add MDX or markdown renderer */}
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-white/70 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-forest-700/50">
          <Link
            href="/blog"
            className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
