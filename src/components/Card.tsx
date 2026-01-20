import React from 'react';

interface CardProps {
  layout?: 'horizontal' | 'vertical';
  hoverScale?: boolean;
  className?: string;
  image?: React.ReactNode;
  imagePosition?: 'start' | 'end';
  header?: React.ReactNode;
  body?: React.ReactNode;
  actions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  layout = 'vertical',
  hoverScale = true,
  className = '',
  image,
  imagePosition = 'start',
  header,
  body,
  actions,
}) => {
  return (
    <article
      className={`
        bg-neutral-900 bg-opacity-10
        p-4
        rounded-xl
        shadow-lg
        h-full
        flex flex-col
        ${
          hoverScale
            ? 'transform transition-transform duration-300 hover:scale-105'
            : ''
        }
        ${className}
      `}
    >
      <div
        className={`flex ${
          layout === 'horizontal'
            ? 'flex-col md:flex-row items-center gap-4'
            : 'flex-col gap-6 h-full'
        }`}
      >
        {image && imagePosition === 'start' && <div>{image}</div>}

        <div
          className={`${
            layout === 'vertical' ? 'flex flex-col' : ''
          } flex-1 w-full`}
        >
          {header && <div className="mb-8">{header}</div>}
          {body && <div className="mb-4">{body}</div>}
          {actions && <div className="mt-auto">{actions}</div>}
        </div>

        {image && imagePosition === 'end' && <div>{image}</div>}
      </div>
    </article>
  );
};

export default Card;
