import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Progetti.css';

const Projects: React.FC = () => (
  <div className="flex-1 flex flex-col items-center justify-start p-8 text-gray-200 overflow-y-auto">
    <section className="mb-12 w-full max-w-2xl">
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400 md:text-start lg:text-start text-center">
        Progetti
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project Card 1 */}
        <div className="bg-neutral-900 bg-opacity-10 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 block">
          <Link to="https://spoti-team7-final.vercel.app/">
            <div className="bg-project-A h-32 md:h-48 w-full rounded-lg mb-4 "></div>
            <h4 className="text-xl font-bold mb-2 text-white">Spotify clone</h4>
            <p className="text-gray-300 text-sm">
              Clone di Spotify realizzato dal Team 7
            </p>
          </Link>
          <Link to="/projects/spotify">
            <span className="text-cyan-400 hover:text-cyan-200 transition-colors mt-2 block">
              Dettagli &rarr;
            </span>
          </Link>
          <a
            href="https://spoti-team7-final.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition-colors mt-2 block"
          >
            Visualizza progetto &rarr;
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="bg-neutral-900 bg-opacity-10 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 block">
          <div className="bg-project-B h-32 md:h-48 w-full rounded-lg mb-4 "></div>
          <h4 className="text-xl font-bold mb-2 text-white"></h4>
          <p className="text-gray-300 text-sm"></p>
          <span className="text-cyan-400 hover:text-cyan-200 transition-colors mt-2 block"></span>
        </div>

        {/*altri progetti */}
      </div>
    </section>

    <section className="w-full max-w-2xl">
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400 md:text-start lg:text-start text-center">
        Certificazioni
      </h3>
      <div className="flex flex-col gap-4  ">
        {/* Certification 1 */}

        <div className="items-center flex flex-col md:flex-row bg-neutral-900 bg-opacity-10 p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
          <div className="flex-1">
            <h4 className="text-xl font-bold mb-1">Master Epicode</h4>
            <p className="text-gray-300 text-sm mb-4">
              Junior Full Stack Developer
            </p>
            <Link to="/certifications">
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-200 transition-colors"
              >
                Visualizza certificato &rarr;
              </a>
            </Link>
          </div>
          <Link to="/certifications">
            <div className=" w-35 h-25 md:w-40 md:h-40 md:ml-1 lg:mr-10 lg:w-48">
              <div className="bg-certificate-capstone w-full h-full rounded-lg"></div>
            </div>
          </Link>
        </div>
        {/*altre certificazioni */}
      </div>
    </section>
  </div>
);

export default Projects;
