
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

### 🗄️ Supabase 配置

本项目支持 Supabase 集成，用于身份验证、数据库管理和后端功能。

#### 在 Lovable 中配置 Supabase

如果你在 Lovable 编辑器中使用此项目：

1. **连接 Supabase**
   - 点击编辑器右上角的绿色 Supabase 按钮
   - 选择"连接到 Supabase"
   - 按照提示完成连接过程

2. **创建新的 Supabase 项目**（如果还没有）
   - 访问 [Supabase](https://supabase.com)
   - 创建新项目
   - 获取项目 URL 和 API 密钥

3. **配置身份验证**
   - 在 Supabase 控制台中启用所需的身份验证提供商
   - 配置电子邮件/密码认证或第三方登录

#### 本地开发配置

如果你在本地开发环境中使用此项目：

1. **安装 Supabase 客户端**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **创建环境变量文件**
   ```bash
   # .env.local
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **配置 Supabase 客户端**
   ```typescript
   // src/lib/supabase.ts
   import { createClient } from '@supabase/supabase-js'

   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
   const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

   export const supabase = createClient(supabaseUrl, supabaseAnonKey)
   ```

#### 数据库设置

1. **创建用户表**
   ```sql
   create table profiles (
     id uuid references auth.users on delete cascade,
     updated_at timestamp with time zone,
     username text unique,
     full_name text,
     avatar_url text,
     website text,

     primary key (id),
     constraint username_length check (char_length(username) >= 3)
   );
   ```

2. **设置行级安全策略（RLS）**
   ```sql
   alter table profiles enable row level security;

   create policy "Public profiles are viewable by everyone."
     on profiles for select
     using ( true );

   create policy "Users can insert their own profile."
     on profiles for insert
     with check ( auth.uid() = id );

   create policy "Users can update own profile."
     on profiles for update
     using ( auth.uid() = id );
   ```

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

## 🔐 Authentication with Supabase

The template is prepared for Supabase authentication. To enable:

1. **Set up Supabase project** (see configuration section above)
2. **Configure authentication providers** in Supabase dashboard
3. **Implement auth components**:

```typescript
// Example auth hook
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription?.unsubscribe()
  }, [])

  return { user, loading }
}
```

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
