
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/site';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation('navigation');

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-r from-blue-500 to-purple-600" />
              <span className="font-bold">{siteConfig.title}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex space-x-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`https://twitter.com/${siteConfig.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.name.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.name.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/docs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('documentation')}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('blog')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
