
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Layout from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBlog } from '@/hooks/useBlog';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation('blog');
  const { getPostBySlug } = useBlog();
  
  const post = slug ? getPostBySlug(slug) : null;

  React.useEffect(() => {
    if (post) {
      trackEvent('blog_post_view', { 
        post_slug: post.slug,
        post_title: post.title,
        post_category: post.category 
      });
    }
  }, [post]);

  if (!post) {
    return (
      <Layout title="Post not found">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('backToBlog')}
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={post.title}
      description={post.description}
      canonicalUrl={`${window.location.origin}/blog/${post.slug}`}
    >
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backToBlog')}
            </Link>
          </Button>
          
          <header className="space-y-6 mb-12">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{post.category}</Badge>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.description}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{t('publishedOn')} {new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{t('author')} {post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} {t('readTime')}</span>
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
