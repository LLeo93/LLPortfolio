export interface ProjectData {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies?: string[];
  image?: string;
  link?: string;
  repo?: string;
  imageAltKey?: string;
  imageCaptionKey?: string;
  imageAltFallback?: string;
  imageCaptionFallback?: string;
  titleFallback?: string;
  descriptionFallback?: string;
  videoSrc?: string;
  imageFallbackUrl?: string;
}

export const projectsData: ProjectData[] = [
    {
    id: 'tdoll',
    titleKey: 'projects.tdoll.title',
    descriptionKey: 'projects.tdoll.description',
    image: 'tdoll-img',
    link: 'https://t-doll-e1bl.vercel.app/#support-tdoll-title',
    repo: 'https://github.com/LLeo93/T-Dolls',
    imageAltKey: 'projects.tdoll.image_alt',
    imageCaptionKey: 'projects.tdoll.image_caption',
    imageAltFallback: 'T-Doll landing page screenshot',
    imageCaptionFallback: 'T-Doll - interactive support page',
    titleFallback: 'T-Doll',
    descriptionFallback:
      'T-Doll — compact landing page created to present a themed product and support section with a clear, readable structure.',
    technologies: ['Landing Page', 'UI Design', 'React'],
  },
  {
    id: 'labodega',
    titleKey: 'projects.labodega.title',
    descriptionKey: 'projects.labodega.description',
    image: 'labodega-img',
    link: 'https://la-bodega-menu.vercel.app/',
    repo: 'https://github.com/LLeo93/la-bodega-menu',
    imageAltKey: 'projects.labodega.image_alt',
    imageCaptionKey: 'projects.labodega.image_caption',
    imageAltFallback: 'La Bodega Coctelería menu interface',
    imageCaptionFallback: 'La Bodega - Interactive Digital Menu',
    titleFallback: 'La Bodega Coctelería',
    descriptionFallback:
      'La Bodega Coctelería — Interactive digital menu and brand identity designed for an exclusive Spanish cocktail bar.',
    technologies: ['UI/UX Design', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'autocare',
    titleKey: 'projects.autocare.title',
    descriptionKey: 'projects.autocare.description',
    image: 'autocare-img',
    repo: '',
    imageAltKey: 'projects.autocare.image_alt',
    imageCaptionKey: 'projects.autocare.image_caption',
    imageAltFallback: 'AutoCare app screenshot',
    imageCaptionFallback: 'AutoCare - UI/UX Prototype',
    titleFallback: 'AutoCare',
    descriptionFallback:
      'AutoCare — UI/UX prototype for a car maintenance app, designed in Figma.',
    technologies: ['UI/UX Prototype', 'Figma'],
    videoSrc: '/Videos/Auto_Care_video.webm',
  },
  {
    id: 'mooddrop',
    titleKey: 'projects.mooddrop.title',
    descriptionKey: 'projects.mooddrop.description',
    videoSrc: '/Videos/Mood_Drop_Video.webm',
    repo: '',
    imageAltKey: 'projects.mooddrop.image_alt',
    imageCaptionKey: 'projects.mooddrop.image_caption',
    imageAltFallback: 'MoodDrop application concept and Figma design',
    imageCaptionFallback: 'MoodDrop — UI/UX Prototyping & Mobile Architecture',
    titleFallback: 'MoodDrop',
    descriptionFallback:
      'MoodDrop — Mood-tracking mobile application designed in Figma and currently engineered for React Native and Supabase infrastructure.',
    technologies: ['UI/UX Prototype', 'Mobile Dev', 'Supabase'],
  },
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
    technologies: ['Team Project', 'UI Replica'],
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
    technologies: ['Full-Stack Dev', 'WebSockets'],
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
    technologies: ['Web App', 'Responsive UI'],
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
    technologies: ['Web App', 'API Integration'],
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
    technologies: ['Frontend Eng', 'Redux Logic'],
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
    technologies: ['Frontend Eng', 'State Management'],
  },

];
