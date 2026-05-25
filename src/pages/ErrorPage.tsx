import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AlertTriangle, ArrowLeft, RefreshCcw, Terminal } from 'lucide-react';

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

      <main
        className="
          relative

          min-h-screen
          overflow-hidden

          bg-[#020617]

          px-4
          sm:px-6
          md:px-8

          py-10

          flex
          items-center
          justify-center
        "
        role="alert"
        aria-live="assertive"
      >
        {/* Ambient Glow */}
        <div
          className="
            absolute inset-0

            bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]

            pointer-events-none
          "
        />

        <div
          className="
            absolute inset-0

            bg-[radial-gradient(circle_at_bottom,rgba(250,204,21,0.06),transparent_45%)]

            pointer-events-none
          "
        />

        {/* Floating Blur */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute

            w-[420px]
            h-[420px]

            rounded-full

            bg-cyan-400/10

            blur-3xl
          "
        />

        {/* Card */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            relative z-10

            w-full
            max-w-[92vw]
            sm:max-w-xl

            overflow-hidden

            rounded-3xl

            border border-white/10
            bg-black/40

            backdrop-blur-2xl

            shadow-[0_10px_60px_rgba(0,0,0,0.45)]
          "
        >
          {/* Top Bar */}
          <div
            className="
              flex flex-col sm:flex-row
              items-start sm:items-center
              justify-between
              gap-4

              px-5 py-4

              border-b border-white/5

              bg-white/[0.03]
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex items-center justify-center

                  w-8 h-8 sm:w-10 sm:h-10

                  rounded-2xl

                  border border-yellow-400/10
                  bg-yellow-400/10
                "
              >
                <AlertTriangle size={18} className="text-yellow-300" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-cyan-300" />

                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.14em] sm:tracking-[0.25em]ing-[0.22em]

                      text-cyan-300
                      font-mono
                    "
                  >
                    {t('error.system_interruption')}
                  </span>
                </div>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  {t('error.monitoring_active')}
                </p>
              </div>
            </div>

            {/* Status */}
            <div
              className="
                flex items-center gap-2

                rounded-full

                border border-yellow-400/10
                bg-yellow-400/10

                px-3 py-1.5
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping
                    rounded-full
                    bg-yellow-300
                    opacity-75
                  "
                />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300" />
              </span>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-widest

                  text-yellow-200
                "
              >
                {t('error.degraded_state')}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-10 sm:px-8 sm:py-12 text-center">
            {/* Headline */}
            <motion.div
              onClick={() => window.location.reload()}
              role="button"
              aria-label={t('error.reload')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
    inline-flex
    items-center
    justify-center

    w-20 h-20

    rounded-3xl

    border border-cyan-400/10
    bg-cyan-400/[0.04]

    mb-8

    cursor-pointer

    transition-all duration-300

    hover:border-cyan-400/20
    hover:bg-cyan-400/[0.08]
  "
            >
              <RefreshCcw size={34} className="text-cyan-300" />
            </motion.div>

            <h1
              className="
                text-2xl
                sm:text-3xl

                font-bold
                text-white

                leading-tight
              "
            >
              {t('error.headline')}
            </h1>

            <p
              className="
                mt-5

                text-sm
                sm:text-base

                leading-relaxed

                text-gray-400
              "
            >
              {t('error.description')}
            </p>

            {/* Optional Debug */}
            {error && (
              <div
                className="
                  mt-8

                  rounded-2xl

                  border border-white/5
                  bg-black/30

                  p-4 sm:p-5

                  text-left
                "
              >
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.14em] sm:tracking-[0.25em]

                    text-gray-500

                    mb-3
                  "
                >
                  {t('error.debug_log')}
                </p>

                <code
                  className="
                    block

                    text-[10px] sm:text-xs
                    leading-5

                    text-red-300

                    break-words
                  "
                >
                  {error.message}
                </code>
              </div>
            )}

            {/* Actions */}
            <div
              className="
                mt-10

                flex flex-col
                sm:flex-row

                items-center
                justify-center

                gap-4
              "
            >
              <Link
                to="/"
                className="
                  group

                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  min-w-[180px]

                  rounded-2xl

                  border border-cyan-400/10
                  bg-cyan-400/[0.06]

                  px-6 py-3

                  text-sm
                  font-medium
                  text-cyan-200

                  transition-all duration-300

                  hover:border-cyan-400/20
                  hover:bg-cyan-400/[0.12]
                "
              >
                <ArrowLeft
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-x-1
                  "
                />

                {t('error.back_home')}
              </Link>

              <button
                onClick={() => window.location.reload()}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  min-w-[180px]

                  rounded-2xl

                  border border-white/10
                  bg-white/[0.03]

                  px-6 py-3

                  text-sm
                  font-medium
                  text-gray-300

                  transition-all duration-300

                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <RefreshCcw size={15} />

                {t('error.reload')}
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default ErrorPage;
