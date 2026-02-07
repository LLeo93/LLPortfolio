import React, { useRef } from 'react';
import { useStarfield } from '../hooks/useStarfield';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useStarfield(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-[#1A1A2E]"
      aria-hidden="true"
    />
  );
};
export default AnimatedBackground;