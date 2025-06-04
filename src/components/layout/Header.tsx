
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { siteConfig } from '@/config/site';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t } = useTranslation(['navigation', 'common']);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600" />
          <span className="font-bold text-xl">{siteConfig.title}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t(`navigation:${item.name.toLowerCase()}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageSelector />
          <Button variant="outline" size="sm">
            {t('common:signIn')}
          </Button>
          <Button size="sm">{t('common:getStarted')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`navigation:${item.name.toLowerCase()}`)}
              </Link>
            ))}
            <div className="pt-3 border-t space-y-3">
              <LanguageSelector />
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  {t('common:signIn')}
                </Button>
                <Button size="sm" className="w-full">
                  {t('common:getStarted')}
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
