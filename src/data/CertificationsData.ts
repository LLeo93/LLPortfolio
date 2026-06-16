export type CertificationStatus =
  | 'verified'
  | 'completed'
  | 'in-progress'
  | undefined;
export interface Certification {
  id: string;
  titleKey: string;
  provider: string;
  providerLink: string;
  descriptionKey1: string;
  descriptionKey2?: string;
  imageClass: string;
  imageClass2?: string;
  imageAltKey: string;
  imageCaptionKey: string;
  logoUrl?: string;
  pdfUrl?: string;
  year?: string;
  type?: string;
  status?: CertificationStatus;
  featured?: boolean;
  relatedProjects?: string[];
}

export const certificationsData: Certification[] = [
  {
    id: 'master-epicode',
    titleKey: 'certifications.master_title',
    provider: 'Epicode',
    providerLink: 'https://epicode.com/it/',
    descriptionKey1: 'certifications.description_1',
    descriptionKey2: 'certifications.description_2',
    imageClass: 'bg-certificate-capstone',
    imageClass2: 'bg-certificate-capstone',
    imageAltKey: 'certifications.capstone_image_alt',
    imageCaptionKey: 'certifications.capstone_image_caption',
    logoUrl:
      'https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png',
    pdfUrl: '/Documents/Certificato_Libanio_Leoncini_Epicode.pdf',
    year: '2025',
    type: 'Full Stack',
    status: 'verified',
    featured: true,
    relatedProjects: [
    'pixelpals',
    'spotify',
    'applemusic',
    'llmeteo',
    'llnetflix',
],
  },
  {
    id: 'ui-ux-design-lowcode',
    titleKey: 'certifications.ui_ux_lowcode.title',
    provider: 'Regione Lombardia / GOL (Progetto Europa)',
    providerLink: 'https://www.progetto-europa.it/',
    descriptionKey1: 'certifications.ui_ux_lowcode.description',
    imageClass: 'bg-certificate-uiux-lowcode',
    imageClass2: 'bg-certificate-big-uiux-lowcode',
    imageAltKey: 'certifications.ui_ux_lowcode.image_alt',
    imageCaptionKey: 'certifications.ui_ux_lowcode.image_caption',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Lombardy_square.svg',
    pdfUrl: '/Documents/Certificato_GOL_UIUX_LowCode_Libanio_Leoncini.pdf',
    year: '2026',
    type: 'UI/UX Design',
    status: 'verified',
    featured: true,
    relatedProjects: [
      'autocare',
      'mooddrop',
      'portfolio',
      //bodega-menu
],
  },
  {
    id: 'frontend-synergie',
    titleKey: 'certifications.frontend_course.title',
    provider: 'Synergie Academy / Forma.temp',
    providerLink: '#',
    descriptionKey1: 'certifications.frontend_course.description',
    imageClass: 'bg-certificate-formatemp1',
    imageClass2: 'bg-certificate-big-formatemp1',
    imageAltKey: 'certifications.frontend_course.image_alt',
    imageCaptionKey: 'certifications.frontend_course.image_caption',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qYQZS_le9_Eve6bJxTJddS5CNoLaUjvK_g&s',
    pdfUrl: '/Documents/Certificato_Libanio_Leoncini_Formatemp.pdf',
    year: '2025',
    type: 'Frontend',
    status: 'verified',
    featured: false,
    relatedProjects: [
    'prompt-ai',
    'portfolio',
    //'t-doll',
],
  },
  {
    id: 'digital-skills-edo',
    titleKey: 'certifications.digital_skills.title',
    provider: 'Regione Lombardia / GOL',
    providerLink: '#',
    descriptionKey1: 'certifications.digital_skills.description',
    imageClass: 'bg-certificate-digitalcomp',
    imageClass2: 'bg-certificate-big-digitalcomp',
    imageAltKey: 'certifications.digital_skills.image_alt',
    imageCaptionKey: 'certifications.digital_skills.image_caption',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Flag_of_Lombardy_square.svg',
    pdfUrl: '/Documents/Certificato_EDO_E1.2025.1316990.pdf',
    year: '2025',
    type: 'Digital Skills',
    status: 'verified',
    featured: false,
     relatedProjects: ['mooddrop'],
  },
  {
    id: 'ai-chatgpt-lezione-online',
    titleKey: 'certifications.ai_chatgpt.title',
    provider: 'Lezione-online (Accreditato MIM)',
    providerLink: 'https://www.lezione-online.it',
    descriptionKey1: 'certifications.ai_chatgpt.description',
    imageClass: 'bg-certificate-chatgpt',
    imageClass2: 'bg-certificate-big-chatgpt',
    imageAltKey: 'certifications.ai_chatgpt.image_alt',
    imageCaptionKey: 'certifications.ai_chatgpt.image_caption',
    logoUrl:
      'https://media.licdn.com/dms/image/v2/C4E0BAQGHBne248-qgg/company-logo_200_200/company-logo_200_200/0/1643713851206/lezione_onlineit_logo?e=2147483647&v=beta&t=XWynh9V1CAcYmQqKyPzcmb8NDw3YpCpU_krnhGENf6k',
    pdfUrl: '/Documents/Libanio_Leoncini_Certificato_ChatGpt.pdf',
    year: '2026',
    type: 'Artificial Intelligence',
    status: 'verified',
    featured: false,
    relatedProjects: [
    'prompt-ai',
    'mooddrop',
    'autocare',
    //tdoll, bodega-menu
]
  },
  {
    id: 'freecodecamp-responsive-web-design',
    titleKey: 'certifications.freecodecamp_responsive.title',
    provider: 'freeCodeCamp',
    providerLink: 'https://www.freecodecamp.org',
    descriptionKey1: 'certifications.freecodecamp_responsive.description',
    imageClass: 'bg-certificate-freecodecamp',
    imageClass2: 'bg-certificate-big-freecodecamp',
    imageAltKey: 'certifications.freecodecamp_responsive.image_alt',
    imageCaptionKey: 'certifications.freecodecamp_responsive.image_caption',
    logoUrl: 'https://popsql.com/static/external-logos/freecodecamp.png',
    pdfUrl:
      '/Documents/freecodecamp.org_certification_lleo93_responsive-web-design.pdf',
    year: '2026',
    type: 'Web Design',
    status: 'completed',
    featured: false,
     relatedProjects: [],
  },
  {
    id: 'freecodecamp-responsive-v9',
    titleKey: 'certifications.freecodecamp_responsive_v9.title',
    provider: 'freeCodeCamp',
    providerLink:
      'https://www.freecodecamp.org/certification/lleo93/responsive-web-design-v9',
    descriptionKey1: 'certifications.freecodecamp_responsive_v9.description',
    imageClass: 'bg-certificate-freecodecamp-v9',
    imageClass2: 'bg-certificate-big-freecodecamp-v9',
    imageAltKey: 'certifications.freecodecamp_responsive_v9.image_alt',
    imageCaptionKey: 'certifications.freecodecamp_responsive_v9.image_caption',
    logoUrl: 'https://popsql.com/static/external-logos/freecodecamp.png',
    pdfUrl:
      '/Documents/freecodecamp.org_certification_lleo93_responsive-web-design-v9.pdf',
    year: '2026',
    type: 'Web Design',
    status: 'completed',
    featured: false,
     relatedProjects: [],
  },
];
