
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { useBlog } from '@/hooks/useBlog';
import { Search, Calendar, Clock, User } from 'lucide-react';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

const Blog = () => {
  const { t } = useTranslation('blog');
  const { posts, loading, searchPosts } = useBlog();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = searchQuery ? searchPosts(searchQuery) : posts;

  const handlePostClick = (slug: string) => {
    trackEvent('blog_post_click', { post_slug: slug });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      trackEvent('blog_search', { search_query: query });
    }
  };

  if (loading) {
    return (
      <Layout title={t('title')} description={t('subtitle')}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Skeleton className="h-12 w-64 mx-auto" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            <Skeleton className="h-10 w-full max-w-md mx-auto" />
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={t('title')} description={t('subtitle')}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">{t('noPostsFound')}</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                        onClick={() => handlePostClick(post.slug)}
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} {t('readTime')}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
