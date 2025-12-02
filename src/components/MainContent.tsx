import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home as HomeIcon,
  User as UserIcon,
  Briefcase as BriefcaseIcon,
} from 'lucide-react';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const getTitle = (pathname: string): string => {
    switch (pathname) {
      case '/':
        return t('navigation.home');
      case '/about':
        return t('navigation.about_me');
      case '/projects':
        return (
          t('projects_list.projects') +
          ' e ' +
          t('projects_list.certifications')
        );
      default:
        return '';
    }
  };

  return (
    <main
      className="
        bg-black bg-opacity-40 backdrop-blur-md text-gray-200 shadow-lg z-50 p-6
        flex flex-col gap-4 rounded-3xl w-full max-w-sm sm:max-w-md my-6
        md:max-w-xl md:w-3/4
        lg:fixed lg:top-16 lg:right-16 lg:h-[calc(100vh-8rem)] lg:w-[calc(100vw-450px)] lg:max-w-none lg:items-center lg:mx-0 lg:my-0
        overflow-y-auto
      "
    >
      <nav
        className="flex justify-around items-center w-full mb-4 md:mb-8"
        aria-label={t('navigation.main_content_tabs')}
      >
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors duration-300 ${
            location.pathname === '/' ? 'text-cyan-400' : ''
          }`}
          aria-current={location.pathname === '/' ? 'page' : undefined}
        >
          <HomeIcon size={24} />
          {t('navigation.home')}
        </Link>
        <Link
          to="/about"
          className={`flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors duration-300 ${
            location.pathname === '/about' ? 'text-cyan-400' : ''
          }`}
          aria-current={location.pathname === '/about' ? 'page' : undefined}
        >
          <UserIcon size={24} />
          {t('navigation.about_me')}
        </Link>
        <Link
          to="/projects"
          className={`flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors duration-300 ${
            location.pathname === '/projects' ? 'text-cyan-400' : ''
          }`}
          aria-current={location.pathname === '/projects' ? 'page' : undefined}
        >
          <BriefcaseIcon size={24} />
          {t('projects_list.projects')}
        </Link>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-center ">
        {getTitle(location.pathname)}
      </h1>

      <div className="w-full h-full flex flex-col overflow-y-auto">
        {children}
      </div>
    </main>
  );
};

export default MainContent;
