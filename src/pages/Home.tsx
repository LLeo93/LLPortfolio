import React from 'react';
import './../Style/HomeStyle.css';
import githubIcon from '../assets/icons/github.png';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import GitHubConsole from '../components/GitHubConsole';
import TechEcosystem from '../components/TechEcosystem';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t('navigation.home') || 'Home'}
        description={t('home.subtitle')}
        image={githubIcon}
        url="/"
      />
      <div
        className="
          flex-1
          flex
          flex-col
          items-center
          px-4
          sm:px-6
          md:px-8
          pt-10
          pb-16
          text-center
          text-gray-200
          overflow-x-hidden
        "
      >
        <h2 className="text-4xl font-bold mb-4">{t('home.welcome')}</h2>
        <h3 className="text-sm md:text-lg text-center">{t('home.title')}</h3>
        <p className="text-sm md:text-lg text-center">{t('home.subtitle')}</p>
        <GitHubConsole />
        <TechEcosystem />
      </div>
    </>
  );
};

export default Home;
