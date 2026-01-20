import { useParams } from 'react-router-dom';
import { certificationsData } from '../data/CertificationsData';
export const useCertification = () => {
  const { id } = useParams<{ id: string }>();
  const cert = certificationsData.find((c) => c.id === id);

  return {
    cert,
    id,
    isFound: !!cert,
  };
};

export const useCertifications = () => {
  return certificationsData;
};
