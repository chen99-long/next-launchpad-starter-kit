# 🚀 LaunchPad Starter Kit

A comprehensive React starter template with internationalization, analytics, SEO optimization, and blog support. Built with modern tools and best practices for rapid development.

![LaunchPad Starter Kit](https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop)

## ✨ Features

- **🎯 React 18 + TypeScript** - Modern React with full type safety
- **🌍 Internationalization** - Complete i18n support with react-i18next
- **📊 Google Analytics** - Easy GA4 integration with privacy focus
- **🔍 SEO Optimized** - Automatic meta tags, canonical URLs, and structured data
- **📝 Markdown Blog** - Write in Markdown, publish automatically
- **🎨 Modern UI** - Beautiful components with Tailwind CSS and shadcn/ui
- **⚡ Performance** - Optimized builds, lazy loading, and best practices
- **🔐 Auth Ready** - Prepared for Supabase authentication
- **📱 Responsive** - Mobile-first design approach
- **🌙 Dark Mode** - Built-in dark mode support

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd launchpad-starter-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your site**
   
   Edit `src/config/site.ts`:
   ```typescript
   export const siteConfig = {
     title: "Your Site Title",
     description: "Your site description",
     url: "https://your-domain.com",
     googleAnalyticsId: "G-XXXXXXXXXX", // Your GA4 ID
     canonicalUrl: "https://your-domain.com",
     // ... other settings
   };
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:8080`

## 📋 Configuration Guide

### 🌍 Internationalization Setup

The template includes English and Chinese translations by default. Translation files are organized by namespace for better performance:

```
src/i18n/locales/
├── en/
│   ├── common.json      # Shared UI elements
│   ├── navigation.json  # Menu and navigation
│   ├── home.json       # Homepage content
│   └── blog.json       # Blog-specific content
└── zh/
    ├── common.json
    ├── navigation.json
    ├── home.json
    └── blog.json
```

**Adding a new language:**

1. Create a new folder in `src/i18n/locales/` (e.g., `fr/`)
2. Copy the JSON files from `en/` and translate them
3. Update `src/i18n/index.ts` to include the new language
4. Add the language to `src/components/layout/LanguageSelector.tsx`

### 📊 Google Analytics Setup

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Update `googleAnalyticsId` in `src/config/site.ts`
3. The analytics will automatically start tracking pageviews and events

**Custom event tracking:**
```typescript
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

// Track custom events
trackEvent('button_click', { 
  button_name: 'hero_cta',
  page: 'home' 
});
```

### 🔍 SEO Configuration

The template automatically generates:
- Meta titles and descriptions
- Open Graph tags for social media
- Twitter Card tags
- Canonical URLs
- Structured data

**Per-page SEO:**
```tsx
<Layout 
  title="Page Title"
  description="Page description"
  canonicalUrl="https://yoursite.com/page"
>
  {/* Your content */}
</Layout>
```

### 📝 Blog System

Create new blog posts by adding them to the `useBlog` hook in `src/hooks/useBlog.ts`. In a production environment, you would typically:

1. Store markdown files in a `content/blog/` directory
2. Use a build-time script to parse markdown files
3. Generate static routes for each post

**Blog post structure:**
```typescript
{
  slug: 'post-url-slug',
  title: 'Post Title',
  description: 'Post description for SEO',
  date: '2024-06-01',
  author: 'Author Name',
  tags: ['tag1', 'tag2'],
  category: 'Category',
  readTime: 5, // minutes
  content: '# Markdown content here...',
  excerpt: 'Short excerpt for listing pages'
}
```

## 🛠️ Development

### 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── analytics/      # Analytics components
│   ├── home/          # Homepage components
│   ├── layout/        # Layout components
│   └── ui/            # shadcn/ui components
├── config/            # Configuration files
├── hooks/             # Custom React hooks
├── i18n/              # Internationalization
│   └── locales/       # Translation files
├── lib/               # Utility functions
└── pages/             # Page components
```

### 🎨 Styling

The template uses Tailwind CSS with shadcn/ui components. You can:

- Customize the design system in `tailwind.config.ts`
- Modify component styles in individual component files
- Add custom CSS in `src/index.css`

### 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push

### Other Platforms

The template works with any static hosting provider:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage

## 🔐 Authentication (Coming Soon)

The template is prepared for Supabase authentication. To enable:

1. Set up a Supabase project
2. Configure authentication providers
3. Update the auth components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](docs/)
- 🐛 [Issues](issues/)
- 💬 [Discussions](discussions/)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.
