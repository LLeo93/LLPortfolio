import { motion } from 'framer-motion';
import { technologies } from '../data/TechStack';
import { useTranslation } from 'react-i18next';

const TechEcosystem = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full max-w-5xl mt-14">
      <div
        className="
          relative overflow-hidden

          rounded-3xl

          border border-white/10
          bg-black/40

          backdrop-blur-2xl

          shadow-[0_10px_60px_rgba(0,0,0,0.45)]

          p-6 md:p-8
        "
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)]
            pointer-events-none
          "
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8 text-left">
            <p
              className="
                text-cyan-300
                uppercase
                tracking-[0.28em]
                text-xs
                font-mono
                mb-3
              "
            >
              {t('home.tech_ecosystem.eyebrow')}
            </p>

            <h3 className="text-2xl font-bold text-white">
              {t('home.tech_ecosystem.title')}
            </h3>

            <p className="text-gray-400 mt-2 max-w-2xl">
              {t('home.tech_ecosystem.description')}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {technologies.map((group) => (
              <div
                key={group.category}
                className="
                  rounded-2xl

                  border border-white/5
                  bg-white/[0.03]

                  p-5

                  hover:border-cyan-400/20
                  transition-all duration-500
                "
              >
                <div className="flex items-center justify-between mb-5">
                  <h4
                    className="
                      text-sm
                      uppercase
                      tracking-[0.22em]
                      text-gray-400
                    "
                  >
                    {t(group.category)}
                  </h4>

                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {group.items.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <motion.div
                        whileHover={{
                          y: -4,
                          scale: 1.04,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        key={tech.name}
                        className="
                          group
                          min-w-[72px] sm:min-w-[84px] md:min-w-[92px]
                          flex flex-col
                          items-center
                          justify-center 

                          rounded-xl

                          border border-white/5
                          bg-black/30

                          p-3 sm:p-4

                          transition-all duration-300

                          hover:border-cyan-400/20
                          hover:bg-cyan-400/[0.03]
                        "
                      >
                        <Icon
                          className="
                            text-cyan-300
                            w-5 h-5
                            sm:w-6 sm:h-6
                             md:w-7 md:h-7
                            transition-all duration-300

                            group-hover:scale-110
                            group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.45)]
                          "
                        />

                        <span
                          className="
                            mt-3
                            text-[11px] sm:text-xs
                            text-gray-300
                            font-medium
                          "
                        >
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;
