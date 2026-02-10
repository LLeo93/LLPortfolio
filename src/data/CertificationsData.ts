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
  },
];
