import { lazy, Suspense } from 'react';

const AnimatedBackground = lazy(() => import('./AnimatedBackground'));

const BackgroundLayer = () => {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Suspense fallback={<div className="w-full h-full bg-[#1A1A2E]" />}>
        <AnimatedBackground />
      </Suspense>
    </div>
  );
};

export default BackgroundLayer;
