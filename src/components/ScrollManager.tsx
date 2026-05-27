import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DESKTOP_BREAKPOINT = 1024;

/*
  regolare posizione dello scroll quando si cambia pagina
*/
const MOBILE_SCROLL_POSITION = 450;
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;

    /*
      DESKTOP:
      scroll interno
    */
    if (isDesktop) {
      const container = document.getElementById('main-scroll-container');

      if (container) {
        container.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      return;
    }

    /*
      MOBILE/TABLET: main panel in primo piano
    */
    window.scrollTo({
      top: MOBILE_SCROLL_POSITION,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return null;
}
