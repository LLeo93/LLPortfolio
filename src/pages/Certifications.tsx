import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { certificationsData } from '../data/CertificationsData';
import { Image as ImageIcon, FileText } from 'lucide-react';

const Certifications: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const cert = certificationsData.find((c) => c.id === id);

  if (!cert) {
    return (
      <main className="flex flex-col items-center justify-center h-full p-8 text-white">
        <h2 className="text-2xl font-bold">{t('project_details.not_found')}</h2>
        <Link to="/certificationsList" className="text-cyan-400 underline mt-4">
          {t('project_details.back_to_projects')}
        </Link>
      </main>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex flex-col min-[342px]:flex-row justify-between items-center gap-4">
        <Link
          to="/certificationsList"
          className="text-cyan-400 hover:text-cyan-200 transition-colors text-lg"
          aria-label={t('certifications.aria_back')}
        >
          &larr; {t('certifications.back')}
        </Link>

        {cert.pdfUrl && (
          <a
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition-colors text-lg flex items-center gap-2"
          >
            <FileText size={20} />
            {t('certifications.view_pdf')} &rarr;
          </a>
        )}
      </div>

      <main
        className="flex-1 overflow-y-auto px-4 py-8"
        aria-labelledby="cert-title"
      >
        <article className="bg-gray-900 text-white rounded-xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto">
          <header className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left flex-1">
              <h2
                id="cert-title"
                className="text-2xl md:text-4xl font-extrabold text-indigo-400 mb-4"
              >
                {t(cert.titleKey)}
              </h2>
              <div className="flex items-center mb-6 justify-center md:justify-start">
                {cert.logoUrl && (
                  <img
                    src={cert.logoUrl}
                    alt="Logo"
                    width={50}
                    className="mr-3"
                  />
                )}
                <h3 className="text-lg font-semibold text-gray-300">
                  {cert.provider}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify mb-4 text-sm md:text-base">
                {t(cert.descriptionKey1)}
              </p>
              {cert.descriptionKey2 && (
                <p className="text-gray-400 leading-relaxed text-justify text-sm md:text-base">
                  {t(cert.descriptionKey2)}
                </p>
              )}
            </div>
          </header>

          <section className="mt-10 flex flex-col items-center justify-center">
            <figure className="w-full max-w-3xl">
              <div
                className={`${cert.imageClass2} w-full aspect-[16/11] md:aspect-video rounded-lg shadow-2xl border border-gray-800 flex items-center justify-center bg-cover bg-center`}
                role="img"
                aria-label={t(cert.imageAltKey)}
              >
                {!cert.imageClass && (
                  <ImageIcon size={48} className="text-gray-700 opacity-50" />
                )}
              </div>

              <figcaption className="mt-4 text-center text-gray-400 text-sm italic">
                {t(cert.imageCaptionKey)}
              </figcaption>
            </figure>
          </section>
          <div className="flex flex-col min-[419px]:flex-row justify-between items-center gap-2">
            <Link
              to="/certificationsList"
              className="text-cyan-400 hover:text-cyan-200 transition-colors text-lg"
              aria-label={t('certifications.aria_back')}
            >
              &larr; {t('certifications.back')}
            </Link>

            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-200 transition-colors text-lg flex items-center gap-2"
              >
                <FileText size={20} />
                {t('certifications.view_pdf')} &rarr;
              </a>
            )}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Certifications;
