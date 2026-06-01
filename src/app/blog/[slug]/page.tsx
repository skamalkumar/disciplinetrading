import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title + " | Discipline Trading",
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#c9a84c] hover:text-[#e8c97a] transition-colors mb-8"
        >
          Back to Blog
        </Link>

        <article>
          <header className="mb-10">
            <span className="text-xs text-[#c9a84c] uppercase tracking-widest">{post.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-[#b0a898] text-lg mb-4">{post.description}</p>
            <div className="flex items-center gap-4 text-xs text-[#b0a898] border-t border-[#c9a84c]/20 pt-4">
              <span>By Kamal Kumar</span>
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <div className="prose prose-invert max-w-none text-[#e8e0d0]">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-[#c9a84c] mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-bold mt-6 mb-3">
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-[#b0a898] ml-4 mb-1">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <br key={i} />;
              }
              return (
                <p key={i} className="text-[#b0a898] leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </div>

          <div className="mt-12 p-4 border border-[#c9a84c]/20 bg-[#111]">
            <p className="text-xs text-[#b0a898]">
              This article is for educational purposes only and does not constitute financial advice.
              Please consult a SEBI registered investment advisor before making any investment decisions.
            </p>
          </div>
        </article>

      </div>
    </div>
  );
}
