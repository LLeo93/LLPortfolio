import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { getLatestPush, getUserLanguages } from '../services/githubService';
import type {
  GitHubActivityData,
  LanguageData,
} from '../services/githubService';

import { useTranslation } from 'react-i18next';

import {
  Activity,
  Zap,
  Clock3,
  Code2,
  Terminal,
  Github,
  Sparkles,
  ExternalLink,
  Cpu,
} from 'lucide-react';

const GitHubConsole: React.FC = () => {
  const [activity, setActivity] = useState<GitHubActivityData | null>(null);
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [act, langs] = await Promise.all([
          getLatestPush('LLeo93'),
          getUserLanguages('LLeo93'),
        ]);

        setActivity(act);
        setLanguages(langs);
      } catch (err) {
        console.error('GitHub Console Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formattedTime = useMemo(() => {
    if (!activity?.date) return '--';

    return new Intl.DateTimeFormat(i18n.language === 'it' ? 'it-IT' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(activity.date));
  }, [activity?.date, i18n.language]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          mt-10
          w-full
          max-w-[95vw] sm:max-w-2xl
          mx-auto
          px-4
        "
      >
        <div
          className="
            relative overflow-hidden
            rounded-3xl

            border border-cyan-500/20
            bg-black/40

            backdrop-blur-2xl

            shadow-[0_10px_60px_rgba(0,0,0,0.45)]
          "
        >
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]
            "
          />

          <div className="relative flex flex-col items-center justify-center gap-3 py-14">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
            >
              <Github className="text-cyan-400" size={34} />
            </motion.div>

            <div className="space-y-2 text-center">
              <p className="font-mono text-sm text-cyan-300 tracking-[0.14em] sm:tracking-[0.22em] uppercase">
                {t('home.github_status.connecting')}
              </p>

              <div className="flex justify-center gap-1">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: dot * 0.2,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!activity) {
    return (
      <div
        className="
          mt-10
          w-full
          max-w-2xl
          mx-auto
          px-4
        "
      >
        <div
          className="
            rounded-3xl
            border border-red-500/20
            bg-red-500/10
            p-4 sm:p-6

            backdrop-blur-xl
          "
        >
          <p className="font-mono text-sm text-red-300">
            {t('home.github_status.fetch_error')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
   mt-8 sm:mt-12
w-full
max-w-full
mx-auto

px-0 sm:px-4
      "
      aria-label="GitHub activity console"
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_70%)]
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          relative overflow-hidden

          rounded-3xl

          border border-white/10
          bg-black/45

          backdrop-blur-2xl

          shadow-[0_10px_60px_rgba(0,0,0,0.45)]
        "
      >
        {/* TOP BAR */}
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

                w-10 h-10

                rounded-2xl

                bg-cyan-400/10
                border border-cyan-400/20
              "
            >
              <Github className="text-cyan-300" size={18} />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <Terminal size={13} className="text-cyan-300" />

                <span
                  className="
                    font-mono
                    text-[11px]
                    uppercase
                   tracking-[0.12em] sm:tracking-[0.25em]
                    text-cyan-300
                  "
                >
                  {t('home.live_activity')}
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                {t('home.github_status.skills_subtitle')}
              </p>
            </div>
          </div>

          <div
            className="
              flex items-center gap-2

              rounded-full

              border border-emerald-400/15
              bg-emerald-400/10

              px-3 py-1.5
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute inline-flex h-full w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-75
                "
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>

            <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-wider">
              {t('home.github_status.feed_stable')}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* REPOSITORY */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity size={15} className="text-cyan-300" />

              <h3
                className="
                  text-xs
                  uppercase
                  tracking-[0.12em] sm:tracking-[0.25em]
                  text-gray-400
                  font-semibold
                "
              >
                {t('home.github_status.repository')}
              </h3>
            </div>

            <motion.a
              whileHover={{ y: -2 }}
              href={activity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-full
                flex flex-col sm:flex-row
                items-start sm:items-center
                justify-between
                gap-4
                rounded-2xl
                border border-white/5
                bg-white/[0.03]
                p-4
                transition-all duration-300
                hover:border-cyan-400/20
                hover:bg-cyan-400/[0.04]
              "
            >
              <div className="flex items-center gap-4 min-w-0">
                <div
                  className="
                    flex items-center justify-center

                    w-11 h-11

                    rounded-xl

                    bg-cyan-400/10
                    border border-cyan-400/10
                  "
                >
                  <Cpu className="text-cyan-300" size={18} />
                </div>

                <div className="min-w-0 text-left">
                  <p className="text-white font-semibold truncate">
                    {activity.repoName}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {t('home.github_status.repository_label')}
                  </p>
                </div>
              </div>

              <ExternalLink
                size={16}
                className="
                hidden sm:block
                text-gray-500
                transition-all duration-300
                group-hover:text-cyan-300
                group-hover:translate-x-0.5
                "
              />
            </motion.a>
          </div>

          {/* COMMIT */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-cyan-300" />

              <h3
                className="
                  text-xs
                  uppercase
                  tracking-[0.12em] sm:tracking-[0.25em]
                  text-gray-400
                  font-semibold
                "
              >
                {t('home.github_status.latest_log')}
              </h3>
            </div>

            <div
              className="
                relative overflow-hidden

                rounded-2xl

                border border-white/5
                bg-gradient-to-br
                from-cyan-400/[0.05]
                to-transparent

                p-4 sm:p-5
              "
            >
              <div
                className="
                  absolute left-0 top-0 bottom-0
                  w-1
                  bg-cyan-400/70
                "
              />

              <p
                className="
                 text-xs sm:text-sm
                  leading-relaxed
                  text-gray-200

                  italic
                  pl-4
                "
              >
                "{activity.message}"
              </p>
            </div>
          </div>

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 size={15} className="text-cyan-300" />

                  <h3
                    className="
                      text-xs
                      uppercase
                     tracking-[0.12em] sm:tracking-[0.25em]
                      text-gray-400
                      font-semibold
                    "
                  >
                    {t('home.github_status.skills_title')}
                  </h3>
                </div>

                <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                  {languages.length} {t('home.github_status.stacks')}
                </span>
              </div>

              {/* Progress */}
              <div
                className="
                  overflow-hidden
                  rounded-full

                  h-3

                  bg-white/5
                  ring-1 ring-white/10
                "
              >
                <div className="flex h-full w-full overflow-hidden">
                  {languages.map((lang) => (
                    <motion.div
                      key={lang.name}
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.percentage}%` }}
                      transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                      }}
                      style={{
                        backgroundColor: lang.color,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <motion.div
                    whileHover={{ y: -2 }}
                    key={lang.name}
                    className="
                      flex items-center justify-between

                      rounded-xl

                      border border-white/5
                      bg-white/[0.03]

                      px-4 py-3

                      transition-all duration-300

                      hover:border-white/10
                      hover:bg-white/[0.05]
                    "
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{
                          backgroundColor: lang.color,
                        }}
                      />

                      <span
                        className="
                          truncate
                          text-sm
                          font-medium
                          text-gray-200
                        "
                      >
                        {lang.name}
                      </span>
                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-cyan-300
                      "
                    >
                      {lang.percentage}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div
          className="
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between
            gap-3

            px-5 py-4

            border-t border-white/5

            bg-white/[0.02]
          "
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Clock3 size={13} />

            <span className="text-[11px] uppercase tracking-widest">
              {t('home.github_status.last_sync')}:
            </span>

            <span className="text-[11px] text-gray-300">{formattedTime}</span>
          </div>

          <div
            className="
              flex items-center gap-2

              rounded-full

              border border-yellow-400/10
              bg-yellow-400/10

              px-3 py-1.5
            "
          >
            <Zap size={12} className="text-yellow-300" />

            <span className="text-[10px] text-yellow-200 uppercase tracking-wider">
              {t('home.github_status.quota')}:
            </span>

            <span className="text-[10px] font-semibold text-yellow-100">
              {activity.limitRemaining}/60
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubConsole;
