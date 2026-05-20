import React from 'react';
import '../Style/Progetti.css';

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
       bg-white/[0.03] backdrop-blur-sm animate-fade-in-up
        p-4
        rounded-xl
        shadow-lg
        h-full
        flex flex-col
        ${
          hoverScale
            ? 'group transform-gpu transition-all will-change-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2'
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
