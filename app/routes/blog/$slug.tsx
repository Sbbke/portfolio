// routes/blog/$slug.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPost, type Post } from 'src/lib/posts';

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    getPost(slug)
      .then(setPost)
      .catch(() => setError('Post not found'))
      .finally(() => setIsLoading(false));
  }, [slug]);

  if (isLoading) {
    return (
      <div className="loading-placeholder">
        <div className="spinner" />
        <p>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="error-message">
        <h2>Post Not Found</h2>
        <p>{error || 'The requested post could not be found.'}</p>
      </div>
    );
  }

  return (
    <article className="post-detail">
      <header className="post-header">
        <h1>{post.title}</h1>
        {post.date && (
          <span className="post-date">
            {new Date(post.date).toLocaleDateString()}
          </span>
        )}
      </header>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
