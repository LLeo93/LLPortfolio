import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projectsData';
import React from 'react';

const ProjectsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const project = projectsData.find((p) => p.id === id);
  const projectTitle = project ? (t(project.titleKey) as string) : '';
  const projectDescription = project
    ? (t(project.descriptionKey) as string)
    : '';
  const imageAltKey = project?.imageAltKey;
  const imageCaptionKey = project?.imageCaptionKey;

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center h-full text-gray-200 p-8">
        <div
          role="alert"
          aria-live="polite"
          className="max-w-prose text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            {t('project_details.not_found')}
          </h2>
          <Link
            to="/projects"
            className="text-cyan-400 hover:text-cyan-200 underline"
          >
            &rarr; {t('project_details.back_to_projects')}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <div className="flex flex-col min-[335px]:flex-row justify-between items-center gap-4">
        <Link
          to="/projects"
          className="text-cyan-400 hover:text-cyan-200 transition-colors"
          aria-label={t('project_details.back') + ' - ' + (projectTitle || '')}
        >
          &larr; {t('project_details.back')}
        </Link>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-200 transition-colors"
          aria-label={`${t('project_details.go_to_project')} - ${projectTitle}`}
          title={`${t('project_details.go_to_project')} - ${projectTitle}`}
        >
          {t('project_details.go_to_project')} &rarr;
        </a>
      </div>
      <main
        id="project-main"
        aria-labelledby="project-title"
        className="flex-1 flex flex-col items-center justify-start p-8 text-gray-200 overflow-y-auto"
      >
        <h2
          id="project-title"
          className="text-3xl font-bold mb-4 text-cyan-400"
        >
          {projectTitle || project.titleFallback || 'Project'}
        </h2>

        <figure className="w-full max-w-2xl mb-6">
          <div
            className={`${project.image} aspect-video w-full rounded-lg mb-0 bg-center bg-cover`}
            role="img"
            aria-label={
              (imageAltKey && t(imageAltKey)) ||
              projectTitle ||
              project.imageAltFallback ||
              'Project screenshot'
            }
          />
          {(imageCaptionKey && t(imageCaptionKey)) ||
          project.imageCaptionFallback ? (
            <figcaption className="mt-2 text-sm text-gray-400 text-center">
              {(imageCaptionKey && t(imageCaptionKey)) ||
                project.imageCaptionFallback}
            </figcaption>
          ) : null}
        </figure>
        <article className="prose max-w-2xl">
          <p className="text-gray-300 mb-6 text-justify text-sm md:text-lg">
            {projectDescription || project.descriptionFallback}
          </p>
        </article>
        <div className=" flex flex-col min-[335px]:flex-row justify-between items-center gap-4 ">
          <Link
            to="/projects"
            className="text-cyan-400 hover:text-cyan-200 transition-colors"
            aria-label={
              t('project_details.back') + ' - ' + (projectTitle || '')
            }
          >
            &larr; {t('project_details.back')}
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition-colors"
            aria-label={`${t(
              'project_details.go_to_project'
            )} - ${projectTitle}`}
          >
            {t('project_details.go_to_project')} &rarr;
          </a>
        </div>
      </main>
    </>
  );
};

export default ProjectsDetails;
