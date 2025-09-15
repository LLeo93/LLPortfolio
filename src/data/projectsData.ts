export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 'spotify',
    title: 'Spotify clone',
    description: `Clone di Spotify: Non solo un progetto, ma l'inizio di tutto.
                    Questo progetto, sviluppato durante la mia prima Build Week in Epicode, ha rappresentato il mio battesimo nel mondo della programmazione. Con un team di sconosciuti, assegnato dal docente, e armati solo di HTML, CSS, Bootstrap e JavaScript, ci siamo lanciati nella sfida di replicare l'interfaccia di Spotify.

                    Abbiamo imparato a lavorare in team, gestendo il flusso con Trello e GitHub, trasformando le nostre competenze front-end in un prodotto funzionante. Oltre al codice, questo progetto ha dato vita a un'amicizia solida che dura ancora oggi.

                    Questo lavoro di gruppo non è solo la dimostrazione delle mie prime competenze tecniche. È la prova che la collaborazione e la passione possono trasformare le sfide in successi, creando un legame indissolubile tra le persone. Un'esperienza che mi ha insegnato che i migliori progetti nascono dalla condivisione.`,
    image: 'spotify-img',
    link: 'https://spoti-team7-final.vercel.app/',
  },
  {
    id: 'Pixelpals',
    title: 'Pixelpals',
    description: ` Trova il Tuo Eroe nel Mondo del Gaming!
                        PixelPals è la mia piattaforma creata per connettere i gamer, trasformando l'esperienza di gioco da solitaria a un'avventura di squadra. Questo progetto è stato sviluppato con l'obiettivo di creare un ecosistema dove i giocatori possano trovare facilmente il compagno perfetto o un team per scalare le classifiche.

                        Ho progettato un sistema di profili personalizzabili e un matching intelligente che aiuta gli utenti a trovare compagni di gioco compatibili in base a gusti e stili. La piattaforma include anche una chat in tempo reale basata su WebSocket e badge esclusivi per premiare la dedizione alla community.

                        Le Tecnologie dietro PixelPals
                        Frontend: Sviluppato con React per un'interfaccia utente dinamica e reattiva, e stilizzato con Tailwind CSS per un design accattivante.

                        Backend: Ho utilizzato Spring Boot per costruire un backend robusto, supportato da un database MongoDB per gestire i dati in modo efficiente.

                        Connettività: L'autenticazione è gestita con JWT, mentre la comunicazione in tempo reale è resa possibile da WebSocket.

                        Questo progetto non è solo una dimostrazione delle mie competenze tecniche, ma anche la mia visione di come la tecnologia possa creare comunità e migliorare l'esperienza umana.`,
    image: 'pixelpals',
    link: 'https://pixelpals-pous.onrender.com',
  },
];
