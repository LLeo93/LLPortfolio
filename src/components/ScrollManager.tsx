import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DESKTOP_BREAKPOINT = 1024;

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;

    if (isDesktop) {
      const container = document.getElementById('main-scroll-container');

      if (container) {
        container.scrollTo({
          top: 120,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({
        top: 450,
        behavior: 'smooth',
      });
    }
  }, [location.pathname]);

  return null;
}
