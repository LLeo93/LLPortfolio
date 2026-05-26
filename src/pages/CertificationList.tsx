import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import Seo from '../components/Seo';
import Card from '../components/Card';
import CardActions from '../components/CardActions';
import MetaBadge from '../components/MetaBadge';

import { certificationsData } from '../data/CertificationsData';
import { createViewCertificateDetailsAction } from '../utils/certificationActions';
import { itemVariants, containerVariants } from '../animations/motion';

const CertificationList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t('navigation.certifications') || 'Certifications'}
        description={
          t('seo.certifications.description') ||
          'Explore my certifications in Full Stack Development and digital skills.'
        }
        image=""
        url="/certifications"
      />

      <section
        className="
          flex-1
          flex
          flex-col
          items-center
          px-4
          sm:px-6
          lg:px-8
          pt-8
          pb-20
          text-gray-200
          overflow-y-auto
        "
        aria-labelledby="certifications-title"
      >
        {/* HEADER */}
        <div className="w-full max-w-3xl text-left mb-10">
          <p className="text-cyan-300 uppercase tracking-[0.24em] text-[11px] font-mono mb-2">
            {t('certifications.subtitle') || 'Credentials'}
          </p>
          <p className="text-gray-400 mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
            {t('certifications.description')}
          </p>
        </div>
        {/* LIST */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl flex flex-col gap-5"
        >
          {certificationsData.map((cert) => {
            const title = t(cert.titleKey);

            return (
              <motion.div key={cert.id} variants={itemVariants}>
                <Card
                  layout="vertical"
                  hoverScale={false}
                  className="
                    border border-white/[0.04]
                    hover:border-cyan-500/20
                    bg-gradient-to-br from-white/[0.02] to-transparent
                    p-5
                    sm:p-7
                    rounded-2xl
                    transition-all
                    duration-300
                  "
                  header={
                    <div className="flex flex-col gap-4">
                      {/* BADGES CONTAINER */}
                      <div className="w-full">
                        <MetaBadge
                          type={cert.type}
                          status={cert.status}
                          year={cert.year}
                          featured={cert.featured}
                        />
                      </div>

                      {/* TITLE & PROVIDER */}
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                          {title}
                        </h3>

                        <div className="flex items-center gap-2.5">
                          {cert.logoUrl && (
                            <img
                              src={cert.logoUrl}
                              alt={cert.provider}
                              className="w-5 h-5 rounded-full object-cover border border-white/10"
                            />
                          )}
                          <p className="text-xs sm:text-sm font-medium text-gray-400">
                            {cert.provider}
                          </p>
                        </div>
                      </div>
                      {/* 3 linee*/}
                      <div
                        className="
                          absolute
                          right-4
                          top-1/2
                          -translate-y-1/2
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-[4px]
                          opacity-50
                          transition-all
                          duration-300
                          group-hover:opacity-100
                          group-hover:translate-x-1
                        "
                      >
                        <span className="w-[3px] h-5 rounded-full bg-cyan-400/30" />
                        <span className="w-[3px] h-5 rounded-full bg-cyan-400/60" />
                        <span className="w-[3px] h-5 rounded-full bg-cyan-400/30" />
                      </div>
                    </div>
                  }
                  actions={
                    <div
                      className="
                        mt-5 
                        pt-4 
                        border-t 
                        border-white/[0.04] 
                        w-full 
                        flex 
                        &&:[&_a]:w-full 
                        &&:[&_a]:justify-center 
                        &&:[&_a]:text-center
                        &&:[&_a]:whitespace-nowrap
                        &&:[&_a]:text-sm
                        sm:[&_a]:w-auto 
                        sm:[&_a]:justify-start
                      "
                    >
                      <CardActions
                        variant="credential"
                        actions={[
                          {
                            ...createViewCertificateDetailsAction(t),
                            url: `/certifications/${cert.id}`,
                          },
                        ]}
                      />
                    </div>
                  }
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default CertificationList;
