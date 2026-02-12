import React, { useEffect, useState } from 'react';
import { getLatestPush, getUserLanguages } from '../services/githubService';
import type {
  GitHubActivityData,
  LanguageData,
} from '../services/githubService';
import { useTranslation } from 'react-i18next';
import {
  Activity,
  Zap,
  Clock,
  Code2,
  Terminal,
  GithubIcon,
} from 'lucide-react';

const GitHubConsole: React.FC = () => {
  const [activity, setActivity] = useState<GitHubActivityData | null>(null);
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    console.log('Console: Avvio caricamento dati...');

    const fetchData = async () => {
      try {
        const [act, langs] = await Promise.all([
          getLatestPush('LLeo93'),
          getUserLanguages('LLeo93'),
        ]);

        console.log('Activity ricevuta:', act);
        console.log('Linguaggi ricevuti:', langs);

        setActivity(act);
        setLanguages(langs);
      } catch (err) {
        console.error('Errore nel caricamento console:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-10 h-32 flex items-center justify-center font-mono text-xs text-cyan-500 animate-pulse italic">
        <GithubIcon />
        {t('home.github_status.connecting') || 'INITIALIZING_SYSTEM...'}
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="mt-10 p-4 border border-red-500/30 bg-red-500/10 rounded-xl text-red-400 font-mono text-xs">
        ERROR: FAILED_TO_FETCH_GITHUB_DATA
      </div>
    );
  }

  return (
    <section className="mt-10 w-full max-w-lg mx-auto relative z-50 px-4 sm:px-0">
      <div className="relative bg-black/60 border border-cyan-500/30 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="bg-cyan-950/30 p-4 border-b border-cyan-500/20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GithubIcon /> <Terminal size={16} className="text-cyan-400" />
            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
              Dev_Console v1.0.4
            </span>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-mono text-white">
            <Zap size={10} className="text-yellow-400" />{' '}
            {t('home.github_status.quota')}: {activity.limitRemaining}/60
          </span>
        </div>

        <div className="p-5 space-y-6">
          {/* Attività */}
          <div className="space-y-3 text-left font-mono">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-cyan-400 animate-pulse" />
              <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
                {t('home.github_status.feed_stable')}
              </span>
            </div>
            <div className="space-y-2">
              <p className="flex items-baseline gap-2 flex-col md:flex-row">
                <span className="text-cyan-400 text-xs font-bold uppercase">
                  {t('home.github_status.repository')}:
                </span>
                <a
                  href={activity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-300 truncate underline decoration-cyan-500/20"
                >
                  {activity.repoName}
                </a>
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-cyan-400 text-xs font-bold uppercase">
                  {t('home.github_status.latest_log')}:
                </span>
                <span className="text-white text-sm italic border-l-2 border-cyan-500/30 pl-3 py-1 bg-white/5">
                  "{activity.message}"
                </span>
              </div>
            </div>
          </div>

          {/* Linguaggi */}
          {languages.length > 0 && (
            <div className="pt-4 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <Code2 size={14} className="text-cyan-400" />
                <span className="text-[10px] text-gray-400 uppercase tracking-tighter">
                  {t('home.github_status.skills_title')}
                </span>
              </div>
              <div className="h-2 w-full flex rounded-full overflow-hidden bg-gray-900 ring-1 ring-white/10">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between border-b border-white/5 pb-1"
                  >
                    <span className="text-[11px] font-mono text-white font-bold truncate pr-2">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mr-2"
                        style={{ backgroundColor: lang.color }}
                      />
                      {lang.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-black/40 p-3 flex justify-between items-center text-[9px] font-mono border-t border-white/5">
          <span className="flex items-center gap-1 text-white">
            <Clock size={10} /> {t('home.github_status.last_sync')}:{' '}
            {new Date(activity.date).toLocaleTimeString()}
          </span>
          <span className="text-white">
            {t('home.github_status.auth_type')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default GitHubConsole;
