
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Globe, 
  BarChart3, 
  Search, 
  FileText, 
  Shield, 
  Zap 
} from 'lucide-react';

const Features = () => {
  const { t } = useTranslation('home');

  const features = [
    {
      icon: Globe,
      title: t('features.i18n.title'),
      description: t('features.i18n.description'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Search,
      title: t('features.seo.title'),
      description: t('features.seo.description'),
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: FileText,
      title: t('features.blog.title'),
      description: t('features.blog.description'),
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: t('features.auth.title'),
      description: t('features.auth.description'),
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Zap,
      title: t('features.performance.title'),
      description: t('features.performance.description'),
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`} />
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
