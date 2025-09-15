import React from 'react';
import LLimg from '../assets/LeonciniLibanio.jpg';

const About: React.FC = () => (
  <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-200">
    <p className="text-lg text-justify mb-5">
      <span className="text-cyan-400 font-bold">
        Costruisci il tuo futuro, un'esperienza alla volta.
      </span>{' '}
      <br />
      Sono un Junior Full Stack Developer spinto dalla passione per la creazione
      e la risoluzione di problemi. Il mio percorso nel mondo della
      programmazione non è stato lineare. Per sette anni ho lavorato a tempo
      pieno in un contesto completamente diverso, come magazziniere alla Laika,
      dove ho imparato l'importanza della precisione e dell'organizzazione. Il
      desiderio di una nuova sfida e l'insoddisfazione per il mio lavoro mi
      hanno spinto a prendere una decisione coraggiosa: cambiare vita. Ispirato
      da mio zio, uno sviluppatore con anni di esperienza, e spinto dalla mia
      passione di bambino per la modifica dei videogiochi, ho intrapreso un
      Master in Full Stack Developer.
      <br />
      <span className="text-cyan-400 font-bold"> La mia visione.</span>
      <br />
      Questo Master mi ha dato gli strumenti per trasformare la mia creatività
      in codice e la mia determinazione in soluzioni. Ho capito che la
      programmazione non è solo un lavoro, ma un modo per costruire qualcosa di
      concreto, proprio come facevo prima, ma in un mondo completamente nuovo.
      Oggi, sono pronto a mettere le mie competenze e la mia inesauribile voglia
      di imparare al servizio di un team dinamico e di progetti innovativi.
      Credo che il mio background unico mi renda un professionista versatile,
      capace di affrontare ogni sfida con una prospettiva diversa e una forte
      etica del lavoro.
    </p>
    <img src={LLimg} alt="" className="w-100 rounded-full" />
  </div>
);

export default About;
