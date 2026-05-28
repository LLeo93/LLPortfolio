import AnimatedBackground from './AnimatedBackground';

const BackgroundLayer = () => {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <AnimatedBackground />
    </div>
  );
};

export default BackgroundLayer;
