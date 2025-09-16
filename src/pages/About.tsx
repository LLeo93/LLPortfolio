import React from 'react';
import LLimg from '../assets/LeonciniLibanio.jpg';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-200">
      <p className="text-sm md:text-lg text-justify mb-5">
        <span className="text-cyan-400 font-bold">{t('about.title_1')}</span>{' '}
        <br />
        {t('about.text_1')} <br />
        <span className="text-cyan-400 font-bold">{t('about.title_2')} </span>
        <br />
        {t('about.text_2')}
      </p>
      <img src={LLimg} alt="" className="w-100 rounded-full" />
    </div>
  );
};

export default About;
