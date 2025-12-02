import React from 'react';
import './../Style/HomeStyle.css';
import html5Icon from '../assets/icons/html5.png';
import cssIcon from '../assets/icons/css.png';
import javascriptIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import javaIcon from '../assets/icons/java.png';
import pg4adminIcon from '../assets/icons/pg4admin.jpg';
import githubIcon from '../assets/icons/github.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import typescriptIcon from '../assets/icons/typescript.png';
import bootstrapIcon from '../assets/icons/bootstrap.png';
import mongodbIcon from '../assets/icons/mongodb.png';
import sassIcon from '../assets/icons/sass.png';
import gitIcon from '../assets/icons/git.png';
import { useTranslation } from 'react-i18next';
const icons = [
  githubIcon,
  html5Icon,
  cssIcon,
  javascriptIcon,
  sassIcon,
  bootstrapIcon,
  reactIcon,
  typescriptIcon,
  javaIcon,
  pg4adminIcon,
  mongodbIcon,
  tailwindIcon,
  gitIcon,
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-200">
      <h1 className="text-4xl font-bold mb-4">{t('home.welcome')}</h1>
      <h2 className="text-sm md:text-lg text-center">{t('home.title')}</h2>
      <p className="text-sm md:text-lg text-center">{t('home.subtitle')}</p>

      <div className="scroll-wrapper h-20 mt-12">
        <div className="scroll-container">
          {[...icons, ...icons].map((icon, index) => (
            <div key={index} className="flex-shrink-0 h-16 w-16 opacity-80">
              <img
                src={icon}
                alt={`Icona ${index}`}
                className="w-full h-full object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
