import React from 'react';

export type CardLayout = 'vertical' | 'horizontal' | 'custom';

interface CardProps {
  layout?: CardLayout;
  className?: string;
  image?: React.ReactNode;
  header?: React.ReactNode;
  body?: React.ReactNode;
  actions?: React.ReactNode;
  hoverScale?: boolean;
}

const Card: React.FC<CardProps> = ({
  layout = 'vertical',
  className = '',
  image,
  header,
  body,
  actions,
  hoverScale = true,
}) => {
  const baseClasses =
    'bg-neutral-900 bg-opacity-10 p-6 rounded-xl shadow-lg transform transition-transform duration-300';
  const hoverClasses = hoverScale ? 'hover:scale-105' : '';

  const layoutClasses =
    layout === 'horizontal'
      ? 'flex flex-col md:flex-row items-center'
      : layout === 'vertical'
      ? 'flex flex-col items-center'
      : '';

  return (
    <article
      className={`${baseClasses} ${hoverClasses} ${layoutClasses} ${className}`}
    >
      {image}

      <div className="flex-1 flex flex-col w-full mt-4 md:mt-0">
        {header && <div className="mb-2 w-full">{header}</div>}
        {body && <div className="mb-4 w-full">{body}</div>}
        {actions && <div className="w-full mt-auto">{actions}</div>}
      </div>
    </article>
  );
};

export default Card;
