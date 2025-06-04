
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enCommon from './locales/en/common.json';
import enNav from './locales/en/navigation.json';
import enHome from './locales/en/home.json';
import enBlog from './locales/en/blog.json';

import zhCommon from './locales/zh/common.json';
import zhNav from './locales/zh/navigation.json';
import zhHome from './locales/zh/home.json';
import zhBlog from './locales/zh/blog.json';

const resources = {
  en: {
    common: enCommon,
    navigation: enNav,
    home: enHome,
    blog: enBlog,
  },
  zh: {
    common: zhCommon,
    navigation: zhNav,
    home: zhHome,
    blog: zhBlog,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false,
    },
    
    // Namespace configuration for better performance
    defaultNS: 'common',
    ns: ['common', 'navigation', 'home', 'blog'],
    
    // Load only needed namespaces
    load: 'languageOnly',
    
    // Performance optimizations
    react: {
      useSuspense: false,
    },
  });

export default i18n;
