import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Image as ImageIcon } from 'lucide-react';
import Seo from '../components/Seo';
import Card from '../components/Card';
import CardActions from '../components/CardActions';
import MetaBadge from '../components/MetaBadge';
import { projects } from '../data/projects';
import {
  createBackToCertificationsAction,
  createViewPdfAction,
} from '../utils/certificationActions';
import { useCertification } from '../hooks/useCertification';
import Arrow from '../components/Arrow';


 

const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const { cert, isFound } = useCertification();

  //per i progetti correlati 
const relatedProjects = projects.filter((project) =>
  cert?.relatedProjects?.includes(project.id)
);

  if (!isFound || !cert) {
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
    <>
      <Seo
        title={`${t(cert.titleKey)} - ${t('home.title')}`}
        description={t(cert.descriptionKey1)}
        image={cert.logoUrl || ''}
        url={`/certifications/${cert.id}`}
      />

      <div className="flex flex-col mt-2">
        <CardActions
          variant="split"
          backAction={createBackToCertificationsAction(t)}
          actions={
            cert.pdfUrl
              ? [
                  {
                    ...createViewPdfAction(t),
                    url: cert.pdfUrl,
                  },
                ]
              : []
          }
        />

        <main
          className="flex-1 overflow-y-auto px-4 py-8"
          aria-labelledby="cert-title"
        >
         <Card
  hoverScale={false}
  className="
    max-w-5xl
    mx-auto
    border
    border-white/5
    bg-white/[0.03]
    backdrop-blur-sm
    p-6
    md:p-8
  "
  header={
    <header>
      <div className="mb-5">
        <MetaBadge
          type={cert.type}
          status={cert.status}
          year={cert.year}
          featured={cert.featured}
        />
      </div>

      <h2
        id="cert-title"
        className="
          text-3xl
          md:text-5xl
          font-bold
          text-white
          leading-tight
          mb-5
        "
      >
        {t(cert.titleKey)}
      </h2>

      <div
        className="
          flex
          items-center
          gap-3
          mb-6
        "
      >
        {cert.logoUrl && (
          <img
            src={cert.logoUrl}
            alt={cert.provider}
            className="
              w-10
              h-10
              rounded-full
              object-cover
              border
              border-white/10
            "
          />
        )}

        <a
          href={cert.providerLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-gray-300
            hover:text-cyan-300
            transition-colors
          "
        >
          {cert.provider}
        </a>
      </div>

      <div className="space-y-4">
        <p
          className="
            text-gray-300
            leading-relaxed
            text-base
            md:text-lg
          "
        >
          {t(cert.descriptionKey1)}
        </p>

        {cert.descriptionKey2 && (
          <p
            className="
              text-gray-400
              leading-relaxed
            "
          >
            {t(cert.descriptionKey2)}
          </p>
        )}
      </div>
    </header>
  }
body={
  <>
    <section className="mt-8">
      <figure>
        <div
          className={`
            ${cert.imageClass2}
            w-full
            aspect-video
            rounded-2xl
            border
            border-white/5
            shadow-2xl
            bg-cover
            bg-center
            flex
            items-center
            justify-center
          `}
          role="img"
          aria-label={t(cert.imageAltKey)}
        >
          {!cert.imageClass2 && (
            <ImageIcon
              size={48}
              className="text-gray-700 opacity-50"
            />
          )}
        </div>

        <figcaption
          className="
            mt-4
            text-center
            text-gray-500
            text-sm
            italic
          "
        >
          {t(cert.imageCaptionKey)}
        </figcaption>
      </figure>
    </section>

    {relatedProjects.length > 0 && (
      <section className="mt-12">
        <h3
          className="
            text-xl
            font-bold
            text-white
            mb-4
          "
        >
         {t('navigation.related_projects')}
        </h3>

        <div className="flex flex-col gap-3">
          {relatedProjects.map((project) => (
            <Link
              key={project.id}
              to={project.internalLink}
              className="
                bg-white/[0.03]
                border
                border-white/5
                rounded-xl
                p-4
                transition-all
                duration-300
                hover:border-cyan-400/20
                hover:bg-cyan-400/[0.03]
              "
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-200">
                  {t(project.titleKey)}
                </span>

              <Arrow direction="right" variant="action" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    )}
  </>
}
/>
        </main>
      </div>
    </>
  );
};

export default Certifications;
