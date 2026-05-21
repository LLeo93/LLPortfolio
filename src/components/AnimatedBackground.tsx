import React, { useRef } from 'react';
import { useStarfield } from '../hooks/useStarfield';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useStarfield(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="
fixed inset-0 z-0
bg-[radial-gradient(circle_at_top,#16213E_0%,#0F172A_45%,#020617_100%)]
"
      aria-hidden="true"
    />
  );
};
export default AnimatedBackground;
