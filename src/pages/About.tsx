import React from 'react';
import LLimg from '../assets/LeonciniLibanio.jpg';

const About: React.FC = () => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-200">
    <p className="text-lg text-center mb-5">
      Un appassionato Junior Full Stack Developer con una forte spinta per
      l'apprendimento e la creazione di applicazioni web innovative. Mi piace
      risolvere problemi complessi e trasformare idee in codice pulito ed
      efficiente.
    </p>
    <img src={LLimg} alt="" className="w-100" />
  </div>
);

export default About;
