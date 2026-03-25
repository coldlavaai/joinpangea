import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel, SectionTitle } from "@/components/section";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on construction workforce management, compliance, onboarding automation, and the future of construction labour.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-32 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Blog</SectionLabel>
          <SectionTitle>
            Insights for construction leaders
          </SectionTitle>
          <p className="text-lg text-white/60">
            Practical guides on workforce management, compliance, and the future of construction labour.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-forest-800 rounded-xl p-12 border border-forest-700/50 text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-xl text-white mb-3">
              Coming soon
            </h3>
            <p className="text-sm text-white/60 mb-6">
              We&apos;re preparing our first articles on construction workforce management, compliance automation, and industry trends. Check back soon.
            </p>
            <Link
              href="/demo"
              className="text-copper-400 hover:text-copper-300 font-semibold text-sm transition-colors"
            >
              Book a demo in the meantime &rarr;
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-forest-800 rounded-xl p-6 border border-forest-700/50 hover:border-copper-500/30 transition-colors group"
              >
                <div className="font-mono text-xs text-white/40 mb-3">
                  {post.date}
                </div>
                <h3 className="font-serif text-lg text-white mb-2 group-hover:text-copper-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {post.excerpt}
                </p>
                {post.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
