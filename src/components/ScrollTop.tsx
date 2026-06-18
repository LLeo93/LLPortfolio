import { useEffect, useMemo, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollProgressProps {
  containerId?: string;
}

const ScrollTop: React.FC<ScrollProgressProps> = ({
  containerId = 'main-scroll-container',
}) => {
  const [visible, setVisible] = useState(false);

  const isDesktop = useMemo(() => {
    if (typeof window === 'undefined') return false;

    return window.innerWidth >= 1024;
  }, []);

  useEffect(() => {
    const container = document.getElementById(containerId);

    const target = isDesktop && container ? container : window;

    const handleScroll = () => {
      let scrollTop = 0;

      if (target instanceof Window) {
        scrollTop = window.scrollY;
      } else {
        scrollTop = target.scrollTop;
      }

      setVisible(scrollTop > 300);
    };

    handleScroll();

    target.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [containerId, isDesktop]);

  const scrollToTop = () => {
    const container = document.getElementById(containerId);

    if (isDesktop && container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        group
        fixed
        bottom-5
        right-5
        z-[120]
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#07111f]/80
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(34,211,238,0.12)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.24)]
        active:scale-95
      "
    >
     
      <ChevronUp
        size={22}
        className="
          text-cyan-300
          group-hover:-translate-y-0.5
          group-hover:text-cyan-100
        "
      />
    </button>
  );
};

export default ScrollTop;
