import { useState, useEffect } from 'react';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  readTime: number;
  content: string;
  excerpt: string;
}

// Sample blog posts data - in a real app, this would come from your markdown files
const samplePosts: BlogPost[] = [
  {
    slug: 'getting-started-with-react-starter-kit',
    title: 'Getting Started with React Starter Kit',
    description: 'Learn how to quickly set up and customize your new React project with our comprehensive starter template.',
    date: '2024-06-01',
    author: 'Development Team',
    tags: ['react', 'typescript', 'starter-kit'],
    category: 'Tutorial',
    readTime: 5,
    excerpt: 'A comprehensive guide to setting up your first project with our React starter template. Learn about the built-in features and how to customize them for your needs.',
    content: `# Getting Started with React Starter Kit

Welcome to the React Starter Kit! This comprehensive template provides everything you need to build modern, scalable web applications.

## What's Included

- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Internationalization** (i18n) support
- **Google Analytics** integration
- **SEO optimization**
- **Blog system** with Markdown support

## Quick Setup

1. Clone the repository
2. Install dependencies: \`npm install\`
3. Start development server: \`npm run dev\`
4. Open http://localhost:8080

## Configuration

Update the site configuration in \`src/config/site.ts\`:

\`\`\`typescript
export const siteConfig = {
  title: "Your Site Title",
  description: "Your site description",
  googleAnalyticsId: "G-XXXXXXXXXX",
  // ... other settings
};
\`\`\`

That's it! You're ready to start building your application.`
  },
  {
    slug: 'internationalization-best-practices',
    title: 'Internationalization Best Practices',
    description: 'Best practices for implementing i18n in React applications with performance optimization.',
    date: '2024-05-28',
    author: 'i18n Expert',
    tags: ['i18n', 'internationalization', 'performance'],
    category: 'Best Practices',
    readTime: 8,
    excerpt: 'Discover the best practices for implementing internationalization in React applications, including namespace organization, lazy loading, and performance optimization.',
    content: `# Internationalization Best Practices

Internationalization (i18n) is crucial for reaching global audiences. Here are the best practices we've implemented in this starter kit.

## Namespace Organization

We organize translations into separate namespaces for better performance:

- \`common\` - Shared UI elements
- \`navigation\` - Menu and navigation items
- \`home\` - Homepage content
- \`blog\` - Blog-specific content

## Performance Optimization

- **Lazy loading**: Only load needed translations
- **Split bundles**: Separate translation files by feature
- **Caching**: Browser caches translation files

## Implementation

\`\`\`typescript
// Using namespaced translations
const { t } = useTranslation(['home', 'common']);

// Accessing nested translations
t('home:hero.title')
t('common:buttons.save')
\`\`\`

This approach ensures your app loads quickly while supporting multiple languages efficiently.`
  },
  {
    slug: 'seo-optimization-techniques',
    title: 'SEO Optimization Techniques',
    description: 'Complete guide to implementing SEO best practices in React applications.',
    date: '2024-05-25',
    author: 'SEO Specialist',
    tags: ['seo', 'meta-tags', 'performance'],
    category: 'SEO',
    readTime: 6,
    excerpt: 'Learn how to optimize your React application for search engines with proper meta tags, canonical URLs, and structured data implementation.',
    content: `# SEO Optimization Techniques

Search Engine Optimization is essential for discoverability. This guide covers the SEO features built into the starter kit.

## Meta Tags

We automatically generate meta tags for:
- Title and description
- Open Graph tags for social media
- Twitter Cards
- Canonical URLs

## Implementation

\`\`\`tsx
<Layout
  title="Page Title"
  description="Page description"
  canonicalUrl="https://example.com/page"
>
  {/* Your page content */}
</Layout>
\`\`\`

## Performance SEO

- Fast loading times
- Responsive design
- Semantic HTML structure
- Optimized images

The starter kit includes all these optimizations out of the box!`
  }
];

export const useBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demo purposes
    const timer = setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return posts.find(post => post.slug === slug);
  };

  const getPostsByCategory = (category: string): BlogPost[] => {
    return posts.filter(post => post.category === category);
  };

  const getPostsByTag = (tag: string): BlogPost[] => {
    return posts.filter(post => post.tags.includes(tag));
  };

  const searchPosts = (query: string): BlogPost[] => {
    const lowercaseQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  return {
    posts,
    loading,
    getPostBySlug,
    getPostsByCategory,
    getPostsByTag,
    searchPosts,
  };
};
