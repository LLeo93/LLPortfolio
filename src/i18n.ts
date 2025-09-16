import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa le traduzioni
import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';

// Le risorse di traduzione
const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n
  .use(initReactI18next) // Passa i18n all'istanza di react-i18next
  .init({
    resources,
    lng: 'it', // Lingua predefinita
    fallbackLng: 'en', // Lingua di riserva se la traduzione non è disponibile
    interpolation: {
      escapeValue: false, // React già protegge da XSS
    },
  });

export default i18n;
