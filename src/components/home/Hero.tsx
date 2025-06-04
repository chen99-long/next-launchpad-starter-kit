
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

const Hero = () => {
  const { t } = useTranslation('home');

  const handleGetStarted = () => {
    trackEvent('cta_click', { button: 'get_started', location: 'hero' });
  };

  const handleViewDocs = () => {
    trackEvent('cta_click', { button: 'view_docs', location: 'hero' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleGetStarted}
            >
              {t('hero.primaryAction')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover:bg-muted/50"
              onClick={handleViewDocs}
            >
              <Play className="mr-2 h-4 w-4" />
              {t('hero.secondaryAction')}
            </Button>
          </div>
          
          <div className="pt-8">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">⚡</div>
                    <div className="text-sm font-medium">Fast Setup</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-600">🌍</div>
                    <div className="text-sm font-medium">i18n Ready</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-indigo-600">📊</div>
                    <div className="text-sm font-medium">Analytics Built-in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
