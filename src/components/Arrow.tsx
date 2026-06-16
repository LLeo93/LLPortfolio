import React from 'react';

interface ArrowProps {
  direction?: 'left' | 'right';
  className?: string;
  ariaHidden?: boolean;
  variant?: 'navigation' | 'action' | 'external';
}

const Arrow: React.FC<ArrowProps> = ({
  direction = 'right',
  className = '',
  ariaHidden = true,
  variant = 'action',
}) => {
  const base =
    'inline-flex items-center leading-none transition-all duration-300 ease-out';
  const motion =
    variant === 'navigation'
      ? 'group-hover:-translate-x-0.5'
      : variant === 'action'
        ? 'group-hover:translate-x-1'
        : 'group-hover:translate-x-1 group-hover:-translate-y-0.5';
  const symbol =
    variant === 'external'
      ? '↗'
      : direction === 'right'
        ? '→'
        : '←';
  const rotation =
    variant === 'external' ? 'rotate-[-10deg]' : '';
  const opacity =
    variant === 'navigation'
      ? 'opacity-75'
      : variant === 'action'
        ? 'opacity-100'
        : 'opacity-85';
  return (
    <span
      className={`
        ${base}
        ${motion}
        ${rotation}
        ${opacity}
        ${className}
      `}
      aria-hidden={ariaHidden}
    >
      {symbol}
    </span>
  );
};

export default Arrow;