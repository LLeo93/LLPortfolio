export interface ProjectData {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
  repo: string;
  imageAltKey?: string;
  imageCaptionKey?: string;
  imageAltFallback?: string;
  imageCaptionFallback?: string;
  titleFallback?: string;
  descriptionFallback?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'spotify',
    titleKey: 'projects.spotify.title',
    descriptionKey: 'projects.spotify.description',
    image: 'spotify-img',
    link: 'https://spoti-team7-final.vercel.app/',
    repo: 'https://github.com/LLeo93/BW2-Team7/tree/main',
    imageAltKey: 'projects.spotify.image_alt',
    imageCaptionKey: 'projects.spotify.image_caption',
    imageAltFallback: 'Spotify clone UI screenshot',
    imageCaptionFallback: 'Spotify clone - team project',
    titleFallback: 'Spotify clone',
    descriptionFallback:
      "Spotify clone — team project replicating Spotify's UI using HTML, CSS and JS.",
  },
  {
    id: 'pixelpals',
    titleKey: 'projects.pixelpals.title',
    descriptionKey: 'projects.pixelpals.description',
    image: 'pixelpals',
    link: 'https://pixelpals-pous.onrender.com',
    repo: 'https://github.com/LLeo93/pixelpals',
    imageAltKey: 'projects.pixelpals.image_alt',
    imageCaptionKey: 'projects.pixelpals.image_caption',
    imageAltFallback: 'PixelPals platform screenshot',
    imageCaptionFallback: 'PixelPals - matchmaking platform',
    titleFallback: 'PixelPals',
    descriptionFallback:
      'PixelPals — matchmaking platform for gamers built with React and WebSocket chat.',
  },
  {
    id: 'llmeteo',
    titleKey: 'projects.llmeteo.title',
    descriptionKey: 'projects.llmeteo.description',
    image: 'llmeteo-img',
    link: 'https://ll-meteo.vercel.app/',
    repo: 'https://github.com/LLeo93/LLMeteo',
    imageAltKey: 'projects.llmeteo.image_alt',
    imageCaptionKey: 'projects.llmeteo.image_caption',
    imageAltFallback: 'LLMeteo app screenshot',
    imageCaptionFallback: 'LLMeteo - weather app',
    titleFallback: 'LLMeteo',
    descriptionFallback:
      'LLMeteo — simple responsive weather app using an external weather API.',
  },
  {
    id: 'llnetflix',
    titleKey: 'projects.llnetflix.title',
    descriptionKey: 'projects.llnetflix.description',
    image: 'llnetflix-img',
    link: 'https://ll-netflix-clone-v4yg.vercel.app/',
    repo: 'https://github.com/LLeo93/LLNetflixClone',
    imageAltKey: 'projects.llnetflix.image_alt',
    imageCaptionKey: 'projects.llnetflix.image_caption',
    imageAltFallback: 'LLNetflix mockup screenshot',
    imageCaptionFallback: 'LLNetflix - mockup',
    titleFallback: 'LLNetflix',
    descriptionFallback:
      'LLNetflix — Netflix mockup clone demonstrating responsive UI and API integration.',
  },
  {
    id: 'applemusic',
    titleKey: 'projects.applemusic.title',
    descriptionKey: 'projects.applemusic.description',
    image: 'applemusic-img',
    link: 'https://applemusic-gold.vercel.app/',
    repo: 'https://github.com/LLeo93/applemusic',
    imageAltKey: 'projects.applemusic.image_alt',
    imageCaptionKey: 'projects.applemusic.image_caption',
    imageAltFallback: 'Apple Music clone screenshot',
    imageCaptionFallback: 'Apple Music clone',
    titleFallback: 'Apple Music clone',
    descriptionFallback:
      'Apple Music clone — front-end project with React and Redux for search functionality.',
  },
  {
    id: 'prompt-ai',
    titleKey: 'projects.prompt-ai.title',
    descriptionKey: 'projects.prompt-ai.description',
    image: 'prompt-ai-img',
    link: 'https://prompt-ai-orpin.vercel.app/',
    repo: 'https://github.com/LLeo93/prompt-ai',
    imageAltKey: 'projects.prompt-ai.image_alt',
    imageCaptionKey: 'projects.prompt-ai.image_caption',
    imageAltFallback: 'Prompt-AI app screenshot',
    imageCaptionFallback: 'Prompt-AI - prompt manager',
    titleFallback: 'Prompt-AI',
    descriptionFallback:
      'Prompt-AI — prompt manager web app, responsive and built with Redux and Framer Motion.',
  },
];
