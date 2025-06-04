
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import Features from '@/components/home/Features';

const FeaturesPage = () => {
  const { t } = useTranslation('home');

  return (
    <Layout 
      title={t('features.title')}
      description={t('features.subtitle')}
    >
      <div className="py-12">
        <Features />
      </div>
    </Layout>
  );
};

export default FeaturesPage;
