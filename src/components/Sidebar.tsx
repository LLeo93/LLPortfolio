import React from 'react';
import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail as MailIcon,
  Phone as PhoneCall,
} from 'lucide-react';
import Avatar from '../assets/LLeoAvatar.jpg';
import { useTranslation } from 'react-i18next';

const Sidebar: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <aside
      className="
        bg-black bg-opacity-40 backdrop-blur-md text-gray-200 shadow-lg z-50 p-6 
        flex flex-col items-center gap-4 rounded-3xl
        my-6 w-full max-w-sm sm:max-w-md
        md:flex-row md:max-w-xl md:w-3/4
        lg:fixed lg:top-16 lg:left-16 lg:h-[calc(100vh-8rem)] lg:w-72 lg:flex-col lg:items-center lg:my-0 lg:mx-0 lg:p-8
      "
    >
      <div className="flex flex-col items-center justify-center text-center">
        {/* Avatar */}
        <div className="rounded-full overflow-hidden w-28 h-28 border-2 border-cyan-400 mb-4 transform transition-transform duration-300 hover:scale-105">
          <img
            src={Avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nome e Ruolo */}
        <div className="cursor-pointer">
          <h2 className="text-xl font-bold text-white mb-1">
            Leoncini Libanio
          </h2>
          <p className="text-sm text-white mb-4">Junior Full Stack Developer</p>
        </div>
        <div className="flex justify-center space-x-2 w-full mb-4">
          <button
            onClick={() => changeLanguage('it')}
            className={`
              text-sm font-bold py-2 px-4 rounded-full transition-colors duration-300
              ${
                i18n.language === 'it'
                  ? 'bg-cyan-400 text-black'
                  : 'bg-transparent text-gray-400 border border-gray-400 hover:bg-cyan-400 hover:text-black'
              }
            `}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`
              text-sm font-bold py-2 px-4 rounded-full transition-colors duration-300
              ${
                i18n.language === 'en'
                  ? 'bg-cyan-400 text-black'
                  : 'bg-transparent text-gray-400 border border-gray-400 hover:bg-cyan-400 hover:text-black'
              }
            `}
          >
            EN
          </button>
        </div>
        {/* Lingue 
        <div className="flex justify-center space-x-6">
          <span
            role="img"
            aria-label="Italian flag"
            className="text-3xl transform transition-transform duration-300 hover:scale-125"
          >
            🇮🇹
          </span>
          <span
            role="img"
            aria-label="United Kingdom flag"
            className="text-3xl transform transition-transform duration-300 hover:scale-125"
          >
            🇬🇧
          </span>
        </div>
        */}
      </div>

      {/* Contatti */}
      <nav
        className="flex flex-col gap-3 w-full text-sm text-center lg:text-left cursor-pointer mt-4"
        aria-label={t('navigation.main_content_tabs"')}
      >
        <a
          href="mailto:liba.leoncini@gmail.com"
          className="flex items-center justify-center lg:justify-start gap-2 break-all transform transition-transform duration-300 hover:scale-105 text-cyan-400"
        >
          <MailIcon size={18} />
          Gmail
        </a>
        <a
          href="https://www.linkedin.com/in/libanio-leoncini/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center lg:justify-start gap-2 break-all transform transition-transform duration-300 hover:scale-105 text-cyan-400"
        >
          <LinkedinIcon size={18} />
          Linkedin
        </a>
        <a
          href="https://github.com/LLeo93"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center lg:justify-start gap-2 break-all transform transition-transform duration-300 hover:scale-105 text-cyan-400"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
        <a
          href="tel:+393806952354"
          className="flex items-center justify-center lg:justify-start gap-2 break-all transform transition-transform duration-300 hover:scale-105 text-cyan-400"
        >
          <PhoneCall size={18} />
          +39 3806952354
        </a>
      </nav>

      <div className="mt-6 text-xs text-white text-center lg:text-left">
        &copy; 2025 LLeo. - Junior Full Stack Developer
      </div>
    </aside>
  );
};

export default Sidebar;
