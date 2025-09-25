export interface ProjectData {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
  repo: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'spotify',
    titleKey: 'projects.spotify.title',
    descriptionKey: 'projects.spotify.description',
    image: 'spotify-img',
    link: 'https://spoti-team7-final.vercel.app/',
    repo: 'https://github.com/LLeo93/BW2-Team7/tree/main',
  },
  {
    id: 'pixelpals',
    titleKey: 'projects.pixelpals.title',
    descriptionKey: 'projects.pixelpals.description',
    image: 'pixelpals',
    link: 'https://pixelpals-pous.onrender.com',
    repo: 'https://github.com/LLeo93/pixelpals',
  },
  {
    id: 'llmeteo',
    titleKey: 'projects.llmeteo.title',
    descriptionKey: 'projects.llmeteo.description',
    image: 'llmeteo-img',
    link: 'https://ll-meteo.vercel.app/',
    repo: 'https://github.com/LLeo93/LLMeteo',
  },
  {
    id: 'llnetflix',
    titleKey: 'projects.llnetflix.title',
    descriptionKey: 'projects.llnetflix.description',
    image: 'llnetflix-img',
    link: 'https://ll-netflix-clone-v4yg.vercel.app/',
    repo: 'https://github.com/LLeo93/LLNetflixClone',
  },
  {
    id: 'applemusic',
    titleKey: 'projects.applemusic.title',
    descriptionKey: 'projects.applemusic.description',
    image: 'applemusic-img',
    link: 'https://applemusic-gold.vercel.app/',
    repo: 'https://github.com/LLeo93/applemusic',
  },
  {
    id: 'prompt-ai',
    titleKey: 'projects.prompt-ai.title',
    descriptionKey: 'projects.prompt-ai.description',
    image: 'prompt-ai-img',
    link: 'https://prompt-ai-orpin.vercel.app/',
    repo: 'https://github.com/LLeo93/prompt-ai',
  },
];
