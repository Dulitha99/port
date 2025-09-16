import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';
import { Helmet } from 'react-helmet-async';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ frontmatter: any; content: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const postModule = await import(`../content/blog/${slug}.md?raw`);
        const { data, content } = matter(postModule.default);
        setPost({ frontmatter: data, content });
      } catch (e) {
        console.error("Failed to load post", e);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getPost();
    }
  }, [slug]);

  if (loading) {
    // You could return a skeleton loader here as well
    return <div className="container mx-auto px-4 py-20 text-center">Loading post...</div>;
  }

  if (!post) {
    // Redirect to 404 page might be better here
    return <div className="container mx-auto px-4 py-20 text-center">Post not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${post.frontmatter.title} | CyberSec Portfolio`}</title>
        <meta name="description" content={post.content.substring(0, 150)} />
      </Helmet>
      <article className="container mx-auto px-4 py-20 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading text-primary mb-4">{post.frontmatter.title}</h1>
        <p className="text-muted-foreground font-mono mb-8">
          {new Date(post.frontmatter.date).toLocaleDateString()}
        </p>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
