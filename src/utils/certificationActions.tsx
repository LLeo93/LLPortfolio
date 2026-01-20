import Arrow from '../components/Arrow';
import { FileText } from 'lucide-react';
import type { ActionItem } from '../components/CardActions';
export const createBackToCertificationsAction = (
  t: (key: string) => string
): ActionItem => ({
  type: 'link',
  url: '/certificationsList',
  label: t('certifications.back'),
  icon: <Arrow direction="left" />,
  iconPosition: 'start',
});

export const createViewPdfAction = (
  t: (key: string) => string
): ActionItem => ({
  type: 'external',
  url: '',
  label: t('certifications.view_pdf'),
  icon: (
    <>
      <FileText size={20} />
      <Arrow direction="right" />
    </>
  ),
  iconPosition: 'end',
});

export const createViewCertificateDetailsAction = (
  t: (key: string) => string
): ActionItem => ({
  type: 'link',
  url: '',
  label: t('projects_list.view_certificate'),
  icon: <Arrow direction="right" />,
  iconPosition: 'end',
});
