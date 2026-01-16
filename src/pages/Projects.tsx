import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import Card from '../components/Card';
import CardActions from '../components/CardActions';
import type { ActionItem } from '../components/CardActions';
import { projects } from '../data/projects';
import '../Style/Progetti.css';

const Projects: React.FC = () => {
  const { t } = useTranslation();

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

      <div className="flex-1 flex flex-col items-center justify-start p-8 text-gray-200 overflow-y-auto">
        <section className="mb-12 w-full max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              const imageNode = project.internalLink ? (
                <Link to={project.internalLink} className="inline-block w-full">
                  <div
                    className={`${project.bgClass} h-32 md:h-48 w-full rounded-lg`}
                    role="img"
                    aria-label={t(project.titleKey)}
                  />
                </Link>
              ) : (
                <div
                  className={`${project.bgClass} h-32 md:h-48 w-full rounded-lg`}
                  role="img"
                  aria-label={t(project.titleKey)}
                />
              );

              return (
                <Card
                  key={project.id}
                  image={imageNode}
                  header={
                    <h4 className="text-xl font-bold mb-2 text-white">
                      {t(project.titleKey)}
                    </h4>
                  }
                  body={
                    <p className="text-gray-300 text-sm">
                      {t(project.descKey)}
                    </p>
                  }
                  actions={<CardActions actions={actions} layout="col" />}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
