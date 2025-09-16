import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { type Project } from '../data/projectsData';

const ProjectsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 'spotify',
      title: t('projects.spotify.title'),
      description: t('projects.spotify.description'),
      image: 'spotify-img',
      link: 'https://spoti-team7-final.vercel.app/',
    },
    {
      id: 'Pixelpals',
      title: t('projects.pixelpals.title'),
      description: t('projects.pixelpals.description'),
      image: 'pixelpals',
      link: 'https://pixelpals-pous.onrender.com',
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-200">
        <h2 className="text-2xl font-bold mb-4">
          {t('project_details.not_found')}
        </h2>
        <Link to="/projects" className="text-cyan-400 hover:text-cyan-200">
          {t('project_details.back_to_projects')} &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-start p-8 text-gray-200 overflow-y-auto">
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">{project.title}</h2>
      <div
        className={`${project.image} aspect-video w-full max-w-2xl rounded-lg mb-6`}
      ></div>
      <p className="text-gray-300 mb-6 max-w-2xl text-justify text-sm md:text-lg">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-200 transition-colors mb-4"
      >
        {t('project_details.go_to_project')} &rarr;
      </a>
      <Link
        to="/projects"
        className="text-cyan-400 hover:text-cyan-200 transition-colors"
      >
        {t('project_details.back')} &larr;
      </Link>
    </div>
  );
};

export default ProjectsDetails;
