import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const stars: { x: number; y: number; speed: number; size: number }[] = [];
    const maxStars = 200;
    const minSpeed = 0.5;
    const maxSpeed = 2;
    const starSize = 1;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars.length = 0;
      for (let i = 0; i < maxStars; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          size: starSize,
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#FFFFFF';
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const update = () => {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > h) {
          star.y = 0;
          star.x = Math.random() * w;
        }
      });
    };

    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        id="animated-stars"
        className="block w-full h-full bg-[#1A1A2E]"
      ></canvas>
      <style>{`
        canvas {
          filter: blur(0.5px);
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
