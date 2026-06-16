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
      {/* LEFT - BACK */}
      <div className="flex items-center gap-2 ">
        {backAction &&
          renderAction(
            backAction,
            999,
            `
              inline-flex items-center gap-1
              px-3 py-2
              rounded-lg

              border border-white/10
              bg-white/[0.02]
              text-gray-400

              hover:text-white
              hover:bg-white/[0.06]
              hover:border-white/20

              transition-all duration-300
            `,
          )}
      </div>

      {/* RIGHT - ACTIONS */}
      <div className="flex items-center gap-2 lg:mr-4">
        {actions.map((a, i) =>
          renderAction(
            a,
            i,
            `
              inline-flex items-center gap-1
              px-3 py-2
              rounded-lg

              border border-cyan-400/20
              bg-cyan-400/[0.05]
              text-cyan-300

              hover:bg-cyan-400/[0.12]
              hover:border-cyan-400/40
              hover:text-cyan-100
              hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]
              hover:-translate-y-0.5

              transition-all duration-300
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
            px-4 py-3
            rounded-xl

            border border-white/10
            bg-white/[0.02]
            text-gray-300

            hover:bg-white/[0.05]
            hover:border-white/15
            hover:text-white

            transition-all duration-300
          `,
        )}

      {actions.map((a, i) =>
        renderAction(
          a,
          i,
          `
            inline-flex items-center justify-center gap-2 
            px-5 py-3
            rounded-xl

            border border-cyan-400/15
            bg-cyan-400/[0.04]
            text-cyan-300

            hover:border-cyan-300/30
            hover:bg-cyan-400/[0.08]
            hover:text-cyan-100

            hover:shadow-[0_0_12px_rgba(34,211,238,0.10)]
            hover:-translate-y-0.5

            transition-all duration-300
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
          text-gray-400
          hover:text-white
          px-2 py-1
          rounded-md
          hover:bg-white/[0.05]
          transition-all duration-300
        `,
      )}

    {actions.map((a, i) =>
      renderAction(
        a,
        i,
        `
          text-cyan-300
          hover:text-cyan-100
          px-2 py-1
          rounded-md
          hover:bg-cyan-400/10
          transition-all duration-300
        `,
      ),
    )}
  </div>
);
};

export default CardActions;
