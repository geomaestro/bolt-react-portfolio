import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../lib/posts';
import type { Post } from '../lib/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      getPost(slug).then(setPost);
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={post.coverImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-3xl px-4 pb-16">
            <Link 
              to="/blog"
              className="mb-4 inline-block text-sm font-medium text-white/80 hover:text-white"
            >
              ← Back to blog
            </Link>
            <h1 className="text-4xl font-bold text-white">{post.title}</h1>
            <time className="mt-2 block text-lg text-white/80">{post.date}</time>
          </div>
        </div>
      </div>
      
      <article className="prose prose-lg mx-auto max-w-3xl px-4 py-12 dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}