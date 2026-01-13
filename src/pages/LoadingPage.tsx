import React from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const LoadingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t('loading.title') || 'Loading...'}
        description={t('loading.message') || 'Pagina in caricamento'}
        image=""
        url="/loading"
      />
      <div
        className="flex items-center justify-center h-screen bg-black text-gray-200"
        role="status"
        aria-live="polite"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg">{t('loading.message')}</p>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
