import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
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

        w-12
        h-12

        rounded-2xl

        border
        border-cyan-400/20

        bg-[#07111f]/80
        backdrop-blur-xl

        text-cyan-300

        shadow-[0_0_30px_rgba(34,211,238,0.12)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:text-cyan-100
        hover:shadow-[0_0_35px_rgba(34,211,238,0.22)]

        active:scale-95

        lg:hidden
      "
    >
      <ChevronUp
        size={22}
        className="
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
        "
      />
    </button>
  );
};

export default ScrollTop;
