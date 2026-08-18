import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Discipline Trading",
  description:
    "Learn options trading with expert articles on Nifty, BankNifty, call and put options, strategies and more by Kamal Kumar.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
            Learn Options Trading
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Articles</h1>
          <p className="text-[#b0a898] text-lg max-w-2xl">
            Expert options trading education by Kamal Kumar. M.Sc. Finance and Investment, ex-Lloyds Bank London.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#b0a898] text-lg">No articles yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="border border-[#c9a84c]/20 p-6 hover:border-[#c9a84c]/60 transition-colors h-full flex flex-col">
                  <span className="text-xs text-[#c9a84c] uppercase tracking-widest mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors leading-snug flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#b0a898] leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#b0a898] mt-auto">
                    <span>{post.date}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
