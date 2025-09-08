import React from 'react';
import { Link } from 'react-router-dom';
import CapstoneProject from '../assets/Certificati/CapstonProject.webp';

const Certifications: React.FC = () => {
  return (
    <section>
      <Link to="/Projects">
        <div className="text-cyan-400 hover:text-cyan-200 transition-colors mt-2 block text-lg mb-2">
          Indietro &larr;
        </div>
      </Link>
      <div className="bg-gray-900 text-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0"></div>
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-indigo-400 mb-2">
              Master in Full Stack Developer
            </h2>
            <div className="flex">
              <img
                src={
                  'https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png'
                }
                alt=""
                width={50}
                className="mr-3"
              />{' '}
              <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300 mb-4 pt-2 ">
                <a href="https://epicode.com/it/">Epicode</a>
              </h2>
            </div>

            <p className="text-sm sm:text-md md:text-lg lg:text-xl text-gray-400 leading-relaxed">
              Certificato Master di un anno in Sviluppo Full Stack, dove ho
              acquisito competenze avanzate in un ambiente di lavoro Agile e
              Scrum. Ho sviluppato progetti completi sia in autonomia che in
              team, dimostrando padronanza di un'ampia gamma di tecnologie, tra
              cui HTML5, CSS3, JavaScript, TypeScript, React, Java Spring Boot e
              SQL.
            </p>
            <p className="mt-4 text-sm sm:text-md md:text-lg lg:text-xl text-gray-400 leading-relaxed">
              Il mio progetto finale, "PixelPals", è un'applicazione web
              completa per il matchmaking tra giocatori, che riflette la mia
              capacità di gestire lo sviluppo di un'applicazione dalla
              concezione alla realizzazione finale.
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-center justify-center m-3">
        <img src={CapstoneProject} alt="" />
      </div>
    </section>
  );
};

export default Certifications;
