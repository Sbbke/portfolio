// src/lib/posts.ts

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
    .replace(/^\d{4}-\d{2}-\d{2}-/, "")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function slugToDate(slug: string): string | undefined {
  return slug.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1];
}

// Vite eagerly imports all HTML files under /posts at build time
const modules = import.meta.glob("/posts/*.html", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getPost(slug: string): Promise<Post> {
  const key = `/posts/${slug}.html`;
  const html = modules[key];
  if (html == null) throw new Response(null, { status: 404 });
  return { slug, title: slugToTitle(slug), date: slugToDate(slug), html };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const posts = Object.keys(modules).map(key => {
    const slug = key.replace(/^\/posts\//, "").replace(/\.html$/, "");
    return { slug, title: slugToTitle(slug), date: slugToDate(slug) } satisfies PostMeta;
  });

  return posts.sort((a, b) =>
    (b.date ?? "0000-00-00").localeCompare(a.date ?? "0000-00-00")
  );
}
