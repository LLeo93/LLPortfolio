import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '../assets/LLeoAvatar.jpg';
import { SidebarProfile } from './SidebarProfile';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SidebarContacts } from './SidebarContacts';

const Sidebar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const fullName = t('me.full_name');

  return (
    <aside
      className="
        bg-black bg-opacity-40 backdrop-blur-md text-gray-200 shadow-lg z-50 p-4 sm:p-5
        flex flex-col items-center gap-2 sm:gap-3 rounded-3xl
        my-4 sm:my-5 w-full max-w-sm sm:max-w-md h-fit
        md:flex-row md:max-w-xl md:w-3/4 md:p-5 md:gap-4 md:my-6
        lg:fixed lg:top-16 lg:left-16 lg:h-[calc(100vh-8rem)] lg:w-72 lg:flex-col lg:items-center lg:my-0 lg:mx-0 lg:p-8
    "
    >
      <div className="flex flex-col items-center">
        <SidebarProfile avatar={Avatar} name={fullName} role={t('me.role')} />
        <LanguageSwitcher
          currentLang={i18n.language}
          onChange={(lng) => i18n.changeLanguage(lng)}
          labels={{ it: t('me.language.it'), en: t('me.language.en') }}
        />
      </div>

      <SidebarContacts t={t} />

      <footer className="mt-2 sm:mt-3 md:mt-4 text-xs text-white text-center lg:text-left">
        {t('me.copyright', { year: new Date().getFullYear(), name: fullName })}
      </footer>
    </aside>
  );
};

export default Sidebar;
