import React from 'react';

interface LanguageSwitcherProps {
  currentLang: string;
  onChange: (lng: string) => void;
  labels: { it: string; en: string };
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onChange,
  labels,
}) => (
  <div className="flex justify-center space-x-2 w-full mb-2 sm:mb-3 md:mb-4">
    {(['it', 'en'] as const).map((lang) => (
      <button
        key={lang}
        onClick={() => onChange(lang)}
        className={`text-xs sm:text-sm font-bold py-1 sm:py-2 px-3 sm:px-4 rounded-full transition-colors duration-300 ${
          currentLang === lang
            ? 'bg-cyan-400 text-black'
            : 'bg-transparent text-gray-400 border border-gray-400 hover:bg-cyan-400 hover:text-black'
        }`}
      >
        {labels[lang]}
      </button>
    ))}
  </div>
);
