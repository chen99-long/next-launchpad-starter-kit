
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import Header from './Header';
import Footer from './Footer';
import { GoogleAnalytics } from '../analytics/GoogleAnalytics';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description = siteConfig.description,
  canonicalUrl,
  noIndex = false,
}) => {
  const pageTitle = title ? `${title} | ${siteConfig.title}` : siteConfig.title;
  const fullCanonicalUrl = canonicalUrl || siteConfig.canonicalUrl;

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={fullCanonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={siteConfig.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:site" content={siteConfig.twitter} />
          <link rel="canonical" href={fullCanonicalUrl} />
          {noIndex && <meta name="robots" content="noindex,nofollow" />}
        </Helmet>
        
        <GoogleAnalytics />
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
