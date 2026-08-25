import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title + " | Discipline Trading",
    description: post.description,
  };
}

/* -------------------------------------------------------
   Inline Markdown Renderer
   Supports:
   - [text](url)
   - **bold**
   - bare https:// URLs
------------------------------------------------------- */

function renderInlineMarkdown(text: string) {
  const parts: React.ReactNode[] = [];

  // Matches:
  // [Link Text](https://example.com)
  // **bold text**
  // https://example.com
  const regex =
    /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|https?:\/\/[^\s<]+)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    // Add normal text before the match
    if (match.index > lastIndex) {
      parts.push(
        <React.Fragment key={`text-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </React.Fragment>
      );
    }

    const token = match[0];

    // ---------------------------------------------------
    // Markdown link
    // [Title](https://example.com)
    // ---------------------------------------------------
    if (token.startsWith("[") && token.includes("](")) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

      if (linkMatch) {
        const linkText = linkMatch[1];
        const href = linkMatch[2];

        if (href.startsWith("/")) {
          parts.push(
            <Link
              key={`link-${key++}`}
              href={href}
              className="text-[#c9a84c] hover:text-[#e8c97a] underline underline-offset-2 transition-colors"
            >
              {linkText}
            </Link>
          );
        } else {
          parts.push(
            <a
              key={`link-${key++}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:text-[#e8c97a] underline underline-offset-2 transition-colors"
            >
              {linkText}
            </a>
          );
        }
      }
    }

    // ---------------------------------------------------
    // Bold text
    // **text**
    // ---------------------------------------------------
    else if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={`bold-${key++}`} className="text-white font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    }

    // ---------------------------------------------------
    // Bare URL
    // https://example.com
    // ---------------------------------------------------
    else if (token.startsWith("http://") || token.startsWith("https://")) {
      parts.push(
        <a
          key={`url-${key++}`}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c9a84c] hover:text-[#e8c97a] underline underline-offset-2 transition-colors"
        >
          {token}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(
      <React.Fragment key={`text-${key++}`}>
        {text.slice(lastIndex)}
      </React.Fragment>
    );
  }

  return parts;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#c9a84c] hover:text-[#e8c97a] transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <article>

          {/* Article Header */}
          <header className="mb-10">

            <span className="text-xs text-[#c9a84c] uppercase tracking-widest">
              {post.category}
            </span>

            <h1 className="text-white text-3xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-[#b0a898] text-lg mb-4">
              {post.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-[#b0a898] border-t border-[#c9a84c]/20 pt-4">
              <span>By Kamal Kumar</span>
              <span>{post.date}</span>
              <span>{post.readingTime}</span>
            </div>

          </header>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none text-[#e8e0d0]">

            {post.content.split("\n").map((line, i) => {

              /* -----------------------------------------
                 H2
              ----------------------------------------- */
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-[#c9a84c] mt-10 mb-4"
                  >
                    {renderInlineMarkdown(line.replace(/^## /, ""))}
                  </h2>
                );
              }

              /* -----------------------------------------
                 H3
              ----------------------------------------- */
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-xl font-bold text-white mt-7 mb-3"
                  >
                    {renderInlineMarkdown(line.replace(/^### /, ""))}
                  </h3>
                );
              }

              /* -----------------------------------------
                 Bullet point
              ----------------------------------------- */
              if (line.startsWith("- ")) {
                return (
                  <div
                    key={i}
                    className="flex gap-3 text-[#b0a898] leading-relaxed mb-2 ml-2"
                  >
                    <span className="text-[#c9a84c]">•</span>
                    <span>
                      {renderInlineMarkdown(line.replace(/^- /, ""))}
                    </span>
                  </div>
                );
              }

              /* -----------------------------------------
                 Numbered list
              ----------------------------------------- */
              if (/^\d+\.\s/.test(line)) {
                const numberMatch = line.match(/^(\d+)\.\s(.*)$/);

                if (numberMatch) {
                  return (
                    <div
                      key={i}
                      className="flex gap-3 text-[#b0a898] leading-relaxed mb-2 ml-2"
                    >
                      <span className="text-[#c9a84c] font-semibold">
                        {numberMatch[1]}.
                      </span>

                      <span>
                        {renderInlineMarkdown(numberMatch[2])}
                      </span>
                    </div>
                  );
                }
              }

              /* -----------------------------------------
                 Empty line
              ----------------------------------------- */
              if (line.trim() === "") {
                return <div key={i} className="h-2" />;
              }

              /* -----------------------------------------
                 Normal paragraph
              ----------------------------------------- */
              return (
                <p
                  key={i}
                  className="text-[#b0a898] leading-relaxed mb-4"
                >
                  {renderInlineMarkdown(line)}
                </p>
              );
            })}

          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-4 border border-[#c9a84c]/20 bg-[#111]">
            <p className="text-xs text-[#b0a898] leading-relaxed">
              This article is for educational purposes only and does not
              constitute financial advice. Please consult a SEBI registered
              investment advisor before making any investment decisions.
            </p>
          </div>

        </article>

      </div>
    </div>
  );
}