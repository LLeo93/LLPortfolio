import React from 'react';
import { Link } from 'react-router-dom';
import CapstoneProject from '../assets/Certificati/CapstonProject.webp';
import { useTranslation } from 'react-i18next';

const Certifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-label={
        t('projects_list.certifications') ||
        t('certifications.master_title') ||
        'Certifications'
      }
      className="px-4"
    >
      <Link
        to="/Projects"
        aria-label={
          t('certifications.aria_back') ||
          t('projects_list.back') ||
          'Go back to projects'
        }
      >
        <div className="text-cyan-400 hover:text-cyan-200 transition-colors mt-2 block text-lg mb-2">
          {t('certifications.back')} &larr;
        </div>
      </Link>

      <div className="bg-gray-900 text-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0" aria-hidden="true" />
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-indigo-400 mb-2">
              {t('certifications.master_title')}
            </h2>
            <div className="flex items-center">
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                alt={t('certifications.epicode_logo_alt') || 'Epicode logo'}
                width={50}
                height={50}
                className="mr-3"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300 mb-4 pt-2">
                <a
                  href="https://epicode.com/it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    t('certifications.epicode_link_aria') ||
                    'Open Epicode website'
                  }
                  className="underline-offset-2 hover:underline"
                >
                  Epicode
                </a>
              </h3>
            </div>

            <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify max-w-prose">
              {t('certifications.description_1')}
            </p>

            <p className="mt-4 text-sm sm:text-md md:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify max-w-prose">
              {t('certifications.description_2')}
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-center justify-center m-3">
        <figure>
          <img
            src={CapstoneProject}
            alt={
              t('certifications.capstone_image_alt') ||
              'Capstone project certificate'
            }
            loading="lazy"
            decoding="async"
            className="max-w-full h-auto rounded-md shadow-md"
          />
          {t('certifications.capstone_image_caption') ? (
            <figcaption className="mt-2 text-xs text-gray-400">
              {t('certifications.capstone_image_caption')}
            </figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
};

export default Certifications;
