import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSwitcherProps {
  currentLang: string;
  onChange: (lng: string) => void;
  labels: { it: string; en: string };
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  onChange,
  labels,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex items-center justify-center gap-1

        w-fit mx-auto

        p-1.5

        mb-2 sm:mb-3 md:mb-4

        rounded-full

        border border-white/10
        bg-white/[0.04]

        backdrop-blur-2xl

        shadow-[0_8px_32px_rgba(0,0,0,0.35)]

        before:absolute
        before:inset-0
        before:rounded-full
        before:bg-gradient-to-b
        before:from-white/[0.06]
        before:to-transparent
        before:pointer-events-none
      "
      role="group"
      aria-label="Language switcher"
    >
      {(['it', 'en'] as const).map((lang) => {
        const isActive = currentLang === lang;

        return (
          <motion.button
            key={lang}
            type="button"
            onClick={() => onChange(lang)}
            aria-pressed={isActive}
            aria-label={`Switch language to ${lang.toUpperCase()}`}
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.04 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 22,
            }}
            className="
              relative

              min-w-[58px]

              px-4 sm:px-5
              py-2

              overflow-hidden
              rounded-full

              cursor-pointer
              select-none

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black

              transition-colors duration-300
            "
          >
            {/* ACTIVE PILL */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  layoutId="active-language-pill"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 320,
                    damping: 28,
                  }}
                  className="
                    absolute inset-0

                    rounded-full

                    bg-gradient-to-br
                    from-cyan-300
                    to-cyan-500

                    shadow-[0_0_24px_rgba(34,211,238,0.35)]

                    border border-white/20
                  "
                />
              )}
            </AnimatePresence>

            {/* PREMIUM HOVER GLOW */}
            {!isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="
                  absolute inset-0

                  rounded-full

                  bg-white/[0.05]
                  border border-white/[0.04]
                "
              />
            )}

            {/* TEXT */}
            <span
              className={`
                relative z-10

                text-xs sm:text-sm
                font-semibold
                tracking-[0.04em]

                transition-colors duration-300

                ${
                  isActive
                    ? 'text-black'
                    : 'text-gray-300 group-hover:text-cyan-300'
                }
              `}
            >
              {labels[lang]}
            </span>

            {/* INNER LIGHT */}
            {isActive && (
              <div
                className="
                  absolute inset-0

                  rounded-full

                  bg-gradient-to-t
                  from-transparent
                  to-white/20

                  pointer-events-none
                "
              />
            )}
          </motion.button>
        );
      })}
    </motion.div>
  );
};
