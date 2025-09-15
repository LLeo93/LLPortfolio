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
    image: 'bg-project-A',
    link: 'https://spoti-team7-final.vercel.app/',
  },
  {
    id: 'altro',
    title: 'Altro progetto',
    description: 'Descrizione progetto di esempio',
    image: 'bg-project-B',
    link: '#',
  },
];
