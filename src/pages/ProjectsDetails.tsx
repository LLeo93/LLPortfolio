import { useParams} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projectsData';
import React from 'react';
import Seo from '../components/Seo';
import Arrow from '../components/Arrow';
import TechBadge from '../components/TechBadge';
import '../Style/Progetti.css';
import CardActions from '../components/CardActions';

import { containerVariants, itemVariants } from '../animations/motion';
import { motion } from 'framer-motion';

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

  const projectActionClass = `
  inline-flex items-center justify-center gap-2 lg:mr-4
  whitespace-nowrap
  px-5 py-3
  rounded-xl

  border border-cyan-400/15
  bg-cyan-400/[0.04]
  text-cyan-300

  hover:border-cyan-300/30
  hover:bg-cyan-400/[0.08]
  hover:text-cyan-100

  hover:shadow-[0_0_12px_rgba(34,211,238,0.10)]
  hover:-translate-y-0.5

  transition-all duration-300
`;

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
       <CardActions
  variant="credential"
  layout="row"
  actions={[
    {
      type: 'link',
      url: '/projects',
      label: t('certifications.back'),
      icon: <Arrow direction="left" variant="navigation"  />,
      iconPosition: 'start',
    },
  ]}
/>
        </div>
      </main>
    );
  }

  const ariaLabelText =
    (imageAltKey && t(imageAltKey)) ||
    projectTitle ||
    project.imageAltFallback ||
    'Project media content';

  return (
    <>
      <Seo
        title={projectTitle || 'Project'}
        description={projectDescription || 'Project details'}
        image={project.image || ''}
        url={`/projects/${project.id}`}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full mt-2"
      >
        {/* HEADER */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col min-[335px]:flex-row justify-between items-center gap-4 mb-4"
        >
    <CardActions
  variant="credential"
  layout="row"
  backAction={{
    type: 'link',
    url: '/projects',
    label: t('certifications.back'),
    icon: <Arrow direction="left" variant="navigation" />,
    iconPosition: 'start',
  }}
/>

          {project.link && (
<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className={projectActionClass}
>
  {t('project_details.go_to_project')} 
  <Arrow direction="right" variant="action" />
</a>
          )}
        </motion.div>

        {/* MAIN */}
        <main
          id="project-main"
          aria-labelledby="project-title"
          className="w-full max-w-7xl mx-auto px-4 md:px-8 text-gray-200"
        >
          <motion.h2
            variants={itemVariants}
            id="project-title"
            className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 text-center md:text-left"
          >
            {projectTitle || project.titleFallback || 'Project'}
          </motion.h2>

          <div
            id="contenitoreDueColonne"
            className={`w-full relative gap-8 lg:gap-12 items-start ${
              project.videoSrc ? 'flex flex-col lg:flex-row' : 'flex flex-col'
            }`}
          >
            {/* MEDIA */}
            <motion.figure
              variants={itemVariants}
              className={`flex flex-col justify-start items-center ${
                project.videoSrc
                  ? 'w-full lg:w-[40%] lg:sticky lg:top-4'
                  : 'w-full'
              }`}
            >
              {project.videoSrc ? (
                <div className="w-full flex justify-center items-start">
                  <video
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="
                      w-auto
                      max-w-full
                      h-auto
                      max-h-[55vh]
                      rounded-2xl
                      shadow-2xl
                      border
                      border-neutral-800
                      object-contain
                      bg-neutral-950
                    "
                    aria-label={ariaLabelText}
                  />
                </div>
              ) : (
                <div
                  className={`
                    ${project.image}
                    aspect-video
                    w-full
                    rounded-2xl
                    shadow-2xl
                    border
                    border-neutral-800
                    bg-center
                    bg-cover
                    max-h-[70vh]
                  `}
                  role="img"
                  aria-label={ariaLabelText}
                />
              )}

              {((imageCaptionKey && t(imageCaptionKey)) ||
                project.imageCaptionFallback) && (
                <figcaption className="mt-3 text-xs text-gray-500 text-center italic max-w-xs">
                  {(imageCaptionKey && t(imageCaptionKey)) ||
                    project.imageCaptionFallback}
                </figcaption>
              )}
            </motion.figure>

            {/* DESCRIZIONE */}
            <motion.article
              variants={itemVariants}
              id="colonnaDiDestra"
              className={`flex flex-col justify-start space-y-8 pb-12 ${
                project.videoSrc ? 'w-full lg:w-[55%]' : 'w-full'
              }`}
            >
              <div className="prose max-w-none text-gray-300">
                <p className="text-base md:text-lg leading-relaxed text-justify whitespace-pre-line">
                  {projectDescription || project.descriptionFallback}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  {t('projects_list.tech_stack')}
                </h3>

                <TechBadge technologies={project.technologies} />
              </div>
            </motion.article>
          </div>

          {/* FOOTER */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col min-[335px]:flex-row justify-between items-center gap-4 w-full mt-12 border-t border-gray-800 pt-6 pb-8"
          >
       <CardActions
  variant="credential"
  layout="row"
  backAction={{
    type: 'link',
    url: '/projects',
    label: t('certifications.back'),
    icon: <Arrow direction="left" variant="navigation" />,
    iconPosition: 'start',
  }}
/>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={projectActionClass}
                aria-label={`${t('project_details.go_to_project')} - ${projectTitle}`}
              >
                {t('project_details.go_to_project')} <Arrow direction="right" variant='navigation'/>
              </a>
            )}
          </motion.div>
        </main>
      </motion.div>
    </>
  );
};

export default ProjectsDetails;
