import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home as HomeIcon,
  User as UserIcon,
  Briefcase as BriefcaseIcon,
  Award as AwardIcon,
} from 'lucide-react';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const getTitle = (pathname: string): string => {
    if (pathname.startsWith('/projects/'))
      return t('projects_list.details') || 'Details';

    switch (pathname) {
      case '/':
        return t('navigation.home');
      case '/about':
        return t('navigation.about_me');
      case '/projects':
        return t('projects_list.projects');
      case '/certificationsList':
        return t('navigation.certifications');
      default:
        return '';
    }
  };

  return (
    <main
      className="
        bg-black bg-opacity-40 backdrop-blur-md text-gray-200 shadow-lg z-50 p-6
        flex flex-col rounded-3xl w-full max-w-sm sm:max-w-md my-6
        md:max-w-xl md:w-3/4
        lg:fixed lg:top-8 lg:right-6 lg:bottom-6 lg:w-[calc(100vw-450px)] lg:max-w-none lg:items-center lg:mx-0 lg:my-0
        overflow-hidden
      "
    >
      <nav
        className="flex justify-around items-center w-full mb-4 md:mb-8 flex-shrink-0"
        aria-label={t('navigation.main_content_tabs')}
      >
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors duration-300 ${
            location.pathname === '/' ? 'text-cyan-400' : ''
          }`}
        >
          <HomeIcon size={24} />
          <span className="text-xs sm:text-sm">{t('navigation.home')}</span>
        </Link>

        <Link
          to="/about"
          className={`flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors duration-300 ${
            location.pathname === '/about' ? 'text-cyan-400' : ''
          }`}
        >
          <UserIcon size={24} />
          <span className="text-xs sm:text-sm">{t('navigation.about_me')}</span>
        </Link>

        <Link
          to="/projects"
          className={`flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors duration-300 ${
            location.pathname === '/projects' ? 'text-cyan-400' : ''
          }`}
        >
          <BriefcaseIcon size={24} />
          <span className="text-xs sm:text-sm">
            {t('projects_list.projects')}
          </span>
        </Link>
        <Link
          to="/certificationsList"
          className={`flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors duration-300 ${
            location.pathname === '/certificationsList' ? 'text-cyan-400' : ''
          }`}
        >
          <AwardIcon size={24} />
          <span className="text-xs sm:text-sm">
            {t('projects_list.certifications')}
          </span>
        </Link>
      </nav>

      <h1 className="text-3xl font-bold lg:mb-0.5 mb-4 text-center flex-shrink-0">
        {getTitle(location.pathname)}
      </h1>

      <div className="w-full h-full flex flex-col overflow-y-auto min-h-0 flex-grow">
        {children}
      </div>
    </main>
  );
};

export default MainContent;
