import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

interface ErrorPageProps {
  error?: Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t('error.title')}
        description={t('error.description')}
        image=""
        url="/error"
      />
      <div
        className="flex items-center justify-center h-screen bg-red-900 text-white p-8"
        role="alert"
        aria-live="assertive"
      >
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4">{t('error.title')}</h1>
          {error && <p className="mb-4 text-gray-200">{error.message}</p>}
          <p className="mb-4">{t('error.description')}</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-200 underline">
            {t('error.back_home')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
