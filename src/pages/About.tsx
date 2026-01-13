import React from 'react';
import LLimg from '../assets/LeonciniLibanio.jpg';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={`About - ${t('home.title')}`}
        description={t('about.short_description')}
        image={LLimg}
        url="/about"
      />

      <section
        aria-labelledby="about-heading"
        className="flex-1 flex flex-col items-center justify-center p-8 text-gray-200"
      >
        <p className="text-sm md:text-lg text-justify mb-5 max-w-prose">
          <br />
          {t('about.text_1')}
          <br />
          <span className="text-cyan-400 font-bold">{t('about.title_2')}</span>
          <br />
          {t('about.text_2')}
        </p>

        <img
          src={LLimg}
          alt={t('about.image_alt') || 'Leoncini Libanio portrait'}
          className="w-100 rounded-full"
          loading="lazy"
          decoding="async"
        />
      </section>
    </>
  );
};

export default About;
