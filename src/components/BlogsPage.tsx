import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { ArrowRight } from 'lucide-react';
import matter from 'gray-matter';
import { Link } from 'react-router-dom';
import { SkeletonCard } from '~/components/ui/skeleton-card'; // Import skeleton

interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    [key: string]: any;
  };
}

const BlogsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const postModules = import.meta.glob('../content/blog/*.md', { as: 'raw' });

      const postsData = await Promise.all(
        Object.entries(postModules).map(async ([path, resolver]) => {
          const rawContent = await resolver();
          const { data } = matter(rawContent);
          const slug = path.split('/').pop()?.replace('.md', '') ?? '';

          return {
            slug,
            frontmatter: data as Post['frontmatter'],
          };
        })
      );

      postsData.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
      setPosts(postsData);
      setIsLoading(false); // Set loading to false after fetching
    };

    fetchPosts();
  }, []);

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-4">Intel & Dispatches</h2>
        <p className="text-center text-muted-foreground mb-12">Field notes from the digital front lines.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="bg-card/60 backdrop-blur-sm h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-primary">{post.frontmatter.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-mono">
                      {new Date(post.frontmatter.date).toLocaleDateString()}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {post.frontmatter.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full font-mono">
                      <Link to={`/blog/${post.slug}`}>
                        Read Dispatch <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
