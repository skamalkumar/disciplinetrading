import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
  featured?: boolean;
}

/**
 * Recursively find all MDX files inside the posts directory.
 */
function getAllMdxFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Convert an MDX file path into its public slug.
 *
 * Example:
 *
 * posts/2026/08/what-are-options.mdx
 *
 * becomes:
 *
 * what-are-options
 */
function getSlugFromFilePath(filePath: string): string {
  return path.basename(filePath).replace(/\.mdx$/, "");
}

export function getAllPosts(): Post[] {
  const filePaths = getAllMdxFiles(postsDirectory);

  const posts = filePaths
    .map((fullPath) => {
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      const rt = readingTime(content);

      return {
        slug: getSlugFromFilePath(fullPath),
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        category: data.category || "General",
        tags: data.tags || [],
        readingTime: rt.text,
        content,
        featured: data.featured || false,
      } as Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const filePaths = getAllMdxFiles(postsDirectory);

  const matchingFile = filePaths.find(
    (filePath) => getSlugFromFilePath(filePath) === slug
  );

  if (!matchingFile) return null;

  try {
    const fileContents = fs.readFileSync(matchingFile, "utf8");

    const { data, content } = matter(fileContents);

    const rt = readingTime(content);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      category: data.category || "General",
      tags: data.tags || [],
      readingTime: rt.text,
      content,
      featured: data.featured || false,
    };
  } catch {
    return null;
  }
}