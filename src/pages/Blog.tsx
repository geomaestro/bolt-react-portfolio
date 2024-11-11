import { useEffect, useState } from 'react';
import BlogHeader from '../components/BlogHeader';
import BlogCard from '../components/BlogCard';
import { getAllPosts } from '../lib/posts';
import type { Post } from '../lib/posts';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff1f2] dark:bg-gray-950">
      <BlogHeader />
      <main className="mx-auto max-w-3xl px-4 pb-16">
        <div className="grid gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}