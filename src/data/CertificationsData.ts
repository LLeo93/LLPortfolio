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
    pdfUrl: '/Documents/Certificato_EDO_E1.2025.1316990.pdf',
  },
];
