// routes/posts/$slug.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


type Post = {
  slug: string;
  title: string;
  content: string;
  date?: string;
  language?: string;
  stars?: number;
  url?: string;
  tags?: string[];
  repo?: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    updated: string;
  };
};

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        setIsLoading(true);
        const response = await fetch(`/data/posts/${slug}.json`);
        
        if (!response.ok) {
          throw new Error('Post not found');
        }
        
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) {
      loadPost();
    }
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
        
        <div className="post-meta">
          {post.date && (
            <span className="post-date">
              {new Date(post.date).toLocaleDateString()}
            </span>
          )}
          
          {post.language && (
            <span className="post-language">{post.language}</span>
          )}
          
          {post.stars !== undefined && (
            <span className="post-stars">⭐ {post.stars}</span>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="post-content">
        {post.content}
      </div>

      {post.url && (
        <footer className="post-footer">
          <a 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub →
          </a>
        </footer>
      )}
    </article>
  );
}