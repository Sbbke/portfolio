// src/routes/posts/$slug.tsx
import { useLoaderData, useParams } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { getPost } from "src/lib/posts";
type Post = {
  title: string;
  content: string;
  date?: string;
};

const posts: Record<string, Post> = {
  "golang-project-structure": {
    title: "Golang Project Structure Best Practices",
    content: "...",
    date: "2025-12-01",
  },
  "dark-mode-2026": {
    title: "Dark Mode Best Practices 2026",
    content: "...",
  },
  // add more
};

export async function loader({ params }: LoaderFunctionArgs) {
  const post = await getPost(params.slug!);
  return { post };
}

export default function PostDetail() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <article>
      <h1>{post.title}</h1>
      {post.date && (
        <p>Published: {new Date(post.date).toLocaleDateString()}</p>
      )}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}