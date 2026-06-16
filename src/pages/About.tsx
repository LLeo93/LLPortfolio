import React from 'react';
import LLimg from '../assets/LeonciniLibanio.jpg';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import Seo from '../components/Seo';

import { projects } from '../data/projects';
import { certificationsData } from '../data/CertificationsData';

import {
  containerVariants,
  itemVariants,
} from '../animations/motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  const projectsCount = projects.length;
  const certificationsCount = certificationsData.length;

  return (
    <>
      <Seo
        title={t('navigation.about_me')}
        description={t('about.short_description')}
        image={LLimg}
        url="/about"
      />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          w-full
          max-w-5xl
          mx-auto
          px-4
          md:px-8
          pb-16
          text-gray-200
        "
      >
        {/* HERO */}

        <motion.section
          variants={itemVariants}
          className="
            grid
            lg:grid-cols-[260px_1fr]
            gap-10
            items-center
            mb-16 lg:mt-6 mt-2
          "
        >
          <div className="flex justify-center">
            <img
              src={LLimg}
              alt={t('about.image_alt')}
              loading="lazy"
              decoding="async"
              className="
                w-52
                h-52
                md:w-60
                md:h-60
                object-cover
                rounded-full
                border
                border-cyan-500/20
                shadow-[0_0_60px_rgba(6,182,212,0.15)]
              "
            />
          </div>

          <div>
            <p
              className="
                text-cyan-400
                uppercase
                tracking-[0.24em]
                text-xs
                mb-3 
              "
            >
              {t('me.role')}
            </p>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
                mb-5
                 break-words
              "
            >
              {t('about.title_1')}
            </h2>

            <p
              className="
                text-gray-300
                leading-relaxed
                text-base
                md:text-lg
                max-w-3xl
              "
            >
              {t('about.short_description')}
            </p>

            {/* STATS */}

            <div
              className="
                grid
                grid-cols-3
                gap-4
                mt-8
              "
            >
              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/5
                  rounded-2xl
                  p-4
                  text-center
                "
              >
                <p className="text-2xl font-bold text-cyan-300">
                  {projectsCount}
                </p>

                <p className="text-xs text-gray-400">
                 {t('navigation.projects')}
                </p>
              </div>

              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/5
                  rounded-2xl
                  p-4
                  text-center
                "
              >
                <p className="text-2xl font-bold text-cyan-300">
                  {certificationsCount}
                </p>

                <p className="text-xs text-gray-400">
                  {t('navigation.certifications')}
                </p>
              </div>

              <div
                className="
                  bg-white/[0.03]
                  border
                  border-white/5
                  rounded-2xl
                  p-4
                  text-center
                "
              >
                <p className="text-2xl font-bold text-cyan-300">
                  2
                </p>

                <p className="text-xs text-gray-400">
                 {t('navigation.languages')}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* MY STORY */}

        <motion.section
          variants={itemVariants}
          className="mb-16"
        >
          <h3
            className="
              text-2xl
              font-bold
              text-white
              mb-6
            "
          >
            {t('navigation.about_me')}
          </h3>

          <div className="grid lg:grid-cols-2 gap-5">
            <div
              className="
                bg-white/[0.03]
                border
                border-white/5
                rounded-2xl
                p-6
              "
            >
              <p
                className="
                  text-gray-300
                  leading-relaxed
                  text-sm
                  md:text-base
                "
              >
                {t('about.text_1')}
              </p>
            </div>

            <div
              className="
                bg-white/[0.03]
                border
                border-white/5
                rounded-2xl
                p-6
              "
            >
              <p
                className="
                  text-gray-300
                  leading-relaxed
                  text-sm
                  md:text-base
                "
              >
                {t('about.text_2')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* APPROACH */}

        <motion.section
          variants={itemVariants}
          className="mb-16"
        >
          <h3
            className="
              text-2xl
              font-bold
              text-white
              mb-6
            "
          >
            {t('about.approach_title')}
          </h3>

          <div className="grid lg:grid-cols-3 gap-5">
            <div
              className="
                bg-white/[0.03]
                border
                border-white/5
                rounded-2xl
                p-6
              "
            >
              <h4 className="text-cyan-300 font-semibold mb-3">
                {t('about.approach_1_title')}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {t('about.approach_1_text')}
              </p>
            </div>

            <div
              className="
                bg-white/[0.03]
                border
                border-white/5
                rounded-2xl
                p-6
              "
            >
              <h4 className="text-cyan-300 font-semibold mb-3">
                {t('about.approach_2_title')}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {t('about.approach_2_text')}
              </p>
            </div>

            <div
              className="
                bg-white/[0.03]
                border
                border-white/5
                rounded-2xl
                p-6
              "
            >
              <h4 className="text-cyan-300 font-semibold mb-3">
                {t('about.approach_3_title')}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {t('about.approach_3_text')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* LOOKING FOR */}

        <motion.section variants={itemVariants}>
          <h3
            className="
              text-2xl
              font-bold
              text-white
              mb-4
            "
          >
            {t('about.looking_for_title')}
          </h3>

          <p
            className="
              text-gray-300
              leading-relaxed
              max-w-3xl
            "
          >
            {t('about.looking_for_text')}
          </p>
        </motion.section>
      </motion.main>
    </>
  );
};

export default About;