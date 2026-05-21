import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import Card from '../components/Card';
import CardActions from '../components/CardActions';
import type { ActionItem } from '../components/CardActions';
import { projects } from '../data/projects';
import '../Style/Progetti.css';
import TechBadge from '../components/TechBadge';
import Gradients from '../data/Gradients';
import { containerVariants, itemVariants } from '../animations/motion';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const randomGradient = React.useMemo(() => {
    return Gradients[Math.floor(Math.random() * Gradients.length)];
  }, []);

  return (
    <>
      <Seo
        title={t('navigation.projects') || 'Progetti'}
        description={
          t('projects_list.description') ||
          'Elenco dei miei progetti e lavori realizzati'
        }
        image=""
        url="/projects"
      />

      <div
        className="flex-1 flex flex-col items-center justify-start p-8 text-gray-200 overflow-y-auto"
        style={
          {
            '--project-gradient': randomGradient,
          } as React.CSSProperties
        }
      >
        <section className="mb-12 w-full max-w-2xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => {
              const actions: ActionItem[] = [];

              if (project.internalLink) {
                actions.push({
                  type: 'link',
                  url: project.internalLink,
                  label: t('projects_list.details') || 'Dettagli',
                  icon: <span>&rarr;</span>,
                  iconPosition: 'end',
                });
              }

              if (project.liveLink) {
                actions.push({
                  type: 'external',
                  url: project.liveLink,
                  label: t('projects_list.view_project') || 'Vai al progetto',
                  icon: <span>&rarr;</span>,
                  iconPosition: 'end',
                });
              }

              if (project.repoLink) {
                actions.push({
                  type: 'external',
                  url: project.repoLink,
                  label: 'GitHub Repo',
                  icon: <span>&rarr;</span>,
                  iconPosition: 'end',
                });
              }
              const renderMediaContent = () => {
                if (project.videoSrc) {
                  return (
                    <video
                      src={project.videoSrc}
                      muted
                      autoPlay
                      loop
                      playsInline
                      poster={project.imageFallbackUrl || ''}
                      className="w-full h-32 md:h-48 rounded-lg object-cover bg-neutral-800"
                    />
                  );
                }
                return (
                  <div
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();

                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      const y = ((e.clientY - rect.top) / rect.height) * 100;

                      e.currentTarget.style.setProperty('--x', `${x}%`);
                      e.currentTarget.style.setProperty('--y', `${y}%`);
                    }}
                    className={`${project.bgClass}  project-card-media h-32 md:h-48 w-full rounded-lg bg-center bg-contain bg-no-repeat`}
                    role="img"
                    aria-label={t(project.titleKey)}
                  />
                );
              };
              const imageNode = project.internalLink ? (
                <Link
                  to={project.internalLink}
                  className="inline-block w-full overflow-hidden rounded-lg group"
                >
                  <div className="transform transition-transform duration-500 group-hover:scale-[1.025] rounded-lg overflow-hidden">
                    {renderMediaContent()}
                  </div>
                </Link>
              ) : (
                <div className="w-full overflow-hidden rounded-lg">
                  {renderMediaContent()}
                </div>
              );
              return (
                <motion.div variants={itemVariants} key={project.id}>
                  <Card
                    image={imageNode}
                    header={
                      <h4 className="text-xl font-bold mb-2 text-white transition-all duration-500 group-hover:text-cyan-100">
                        {t(project.titleKey)}
                      </h4>
                    }
                    body={
                      <div>
                        <p className="text-gray-300 text-sm">
                          {t(project.descKey)}
                        </p>
                        <TechBadge technologies={project.technologies} />
                      </div>
                    }
                    actions={<CardActions actions={actions} layout="col" />}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Projects;
