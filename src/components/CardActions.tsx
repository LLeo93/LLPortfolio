import React from 'react';
import { Link } from 'react-router-dom';

export interface ActionItem {
  type: 'link' | 'external';
  url: string;
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

interface CardActionsProps {
  actions?: ActionItem[];
  layout?: 'row' | 'col';
  backAction?: ActionItem;
  variant?: 'default' | 'split' | 'credential';
}

const CardActions: React.FC<CardActionsProps> = ({
  actions = [],
  layout = 'row',
  backAction,
  variant = 'default',
}) => {
  const renderActionContent = (action: ActionItem) => {
    const isStart = action.iconPosition === 'start';

    return isStart ? (
      <>
        {action.icon}
        {action.label}
      </>
    ) : (
      <>
        {action.label}
        {action.icon}
      </>
    );
  };

  const renderAction = (action: ActionItem, key: number, className: string) => {
    if (action.type === 'link') {
      return (
        <Link
          key={key}
          to={action.url}
          className={className}
          aria-label={action.label}
        >
          {renderActionContent(action)}
        </Link>
      );
    }

    return (
      <a
        key={key}
        href={action.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={action.label}
      >
        {renderActionContent(action)}
      </a>
    );
  };

  /*split*/

  if (variant === 'split') {
    return (
      <div className="flex w-full items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          {backAction &&
            renderAction(
              backAction,
              999,
              `
                text-cyan-400
                hover:text-cyan-200
                transition-all duration-300
                hover:translate-x-1
                flex items-center gap-1
              `,
            )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          {actions.map((a, i) =>
            renderAction(
              a,
              i,
              `
                text-cyan-400
                hover:text-cyan-200
                transition-all duration-300
                hover:translate-x-1
                flex items-center gap-1
              `,
            ),
          )}
        </div>
      </div>
    );
  }

  /*CREDENTIAL VARIANT*/

  if (variant === 'credential') {
    return (
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {backAction &&
          renderAction(
            backAction,
            999,
            `
              inline-flex items-center justify-center gap-2
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              px-4 py-3
              text-sm font-medium text-gray-300
              transition-all duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.05]
              hover:text-cyan-200
            `,
          )}

        {actions.map((a, i) =>
          renderAction(
            a,
            i,
            `
              group
              inline-flex items-center justify-center gap-2
              rounded-xl
              border border-cyan-400/20
              bg-cyan-400/[0.06]
              px-5 py-3
              text-sm font-semibold text-cyan-300
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-cyan-400/40
              hover:bg-cyan-400/[0.10]
              hover:text-cyan-100
            `,
          ),
        )}
      </div>
    );
  }

  /*DEFAULT VARIANT*/

  return (
    <div
      className={`flex ${
        layout === 'row' ? 'flex-row gap-4' : 'flex-col gap-2'
      } w-full`}
    >
      {backAction &&
        renderAction(
          backAction,
          999,
          `
            text-cyan-400
            hover:text-cyan-200
            transition-all duration-300
            hover:translate-x-1
            flex items-center gap-1
          `,
        )}

      {actions.map((a, i) =>
        renderAction(
          a,
          i,
          `
            text-cyan-400
            hover:text-cyan-200
            transition-all duration-300
            hover:translate-x-1
            hover:gap-2
            flex items-center gap-1
          `,
        ),
      )}
    </div>
  );
};

export default CardActions;
