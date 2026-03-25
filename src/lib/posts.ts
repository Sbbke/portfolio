// src/lib/posts.ts
import fs from "fs/promises";
import path from "path";

const POSTS_DIR = path.resolve(process.cwd(), "posts");

export type PostMeta = {
  title: string;
  date?: string;
  slug: string;
};

export type Post = PostMeta & {
  html: string;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugToTitle(slug: string): string {
  return slug
    .replace(/^\d{4}-\d{2}-\d{2}-/, "") // strip leading date prefix if present
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function slugToDate(slug: string): string | undefined {
  return slug.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1];
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join(POSTS_DIR, `${slug}.html`);

  let html: string;
  try {
    html = await fs.readFile(filePath, "utf-8");
  } catch {
    throw new Response(null, { status: 404 });
  }

  return {
    slug,
    title: slugToTitle(slug),
    date: slugToDate(slug),
    html,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  let files: string[];
  try {
    files = await fs.readdir(POSTS_DIR); // ← was fs.readFile
  } catch {
    return [];
  }

  const posts = files
    .filter(f => f.endsWith(".html"))
    .map(f => {
      const slug = f.replace(/\.html$/, "");
      return {
        slug,
        title: slugToTitle(slug),
        date: slugToDate(slug),
      } satisfies PostMeta;
    });

  return posts.sort((a, b) =>
    (b.date ?? "0000-00-00").localeCompare(a.date ?? "0000-00-00")
  );
}