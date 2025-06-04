
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation(['navigation', 'common']);

  return (
    <Layout title={t('navigation:about')}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('navigation:about')}
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn more about this comprehensive starter template
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>🚀 Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This starter template is designed to accelerate your React development process 
                  by providing a solid foundation with modern tools and best practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⚡ Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built with performance in mind, featuring optimized bundles, lazy loading, 
                  and efficient state management for smooth user experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🌍 Global Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete internationalization support with namespaced translations, 
                  making it easy to reach global audiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📊 Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Google Analytics integration with privacy-focused tracking and 
                  event monitoring to understand your users better.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4 pt-8">
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <p className="text-muted-foreground">
              This template provides everything you need to build modern web applications quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
