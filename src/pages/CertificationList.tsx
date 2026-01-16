import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { certificationsData } from '../data/CertificationsData';
import { Image as ImageIcon } from 'lucide-react';
import Seo from '../components/Seo';
import Card from '../components/Card';
import CardActions from '../components/CardActions';

const CertificationList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t(`navigation.certifications`) || 'Certifications'}
        description="Explore my certifications in Full Stack Development and digital skills."
        image=""
        url="/certifications"
      />

      <section
        className="flex-1 flex flex-col items-center justify-start p-8 text-gray-200 overflow-y-auto"
        aria-labelledby="certifications-title"
      >
        <div className="flex flex-col gap-6">
          {certificationsData.map((cert) => {
            const title = t(cert.titleKey);

            return (
              <Card
                key={cert.id}
                layout="horizontal"
                hoverScale={true}
                imagePosition="end"
                header={
                  <div>
                    <h4 className="text-xl font-bold mb-1">{title}</h4>
                    <p className="text-gray-300 text-sm">{cert.provider}</p>
                  </div>
                }
                body={null}
                actions={
                  <CardActions
                    backAction={{
                      type: 'link',
                      url: `/certifications/${cert.id}`,
                      label: `${t('projects_list.view_certificate')} →`,
                    }}
                  />
                }
                image={
                  <Link
                    to={`/certifications/${cert.id}`}
                    className="w-35 h-25 md:w-40 md:h-28 lg:w-48 flex flex-col items-center justify-center"
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    {!cert.imageClass && (
                      <ImageIcon
                        size={24}
                        className="text-gray-600 opacity-50"
                      />
                    )}
                    <div
                      className={`${cert.imageClass} w-full h-full rounded-lg bg-cover bg-center border border-gray-800 flex items-center justify-center text-xs text-gray-500 italic`}
                      role="img"
                      aria-label={t(cert.imageAltKey)}
                    ></div>
                  </Link>
                }
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CertificationList;
