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
}

const CardActions: React.FC<CardActionsProps> = ({
  actions = [],
  layout = 'row',
  backAction,
}) => {
  return (
    <div
      className={`flex ${
        layout === 'row' ? 'flex-row gap-4' : 'flex-col gap-2'
      } w-full`}
    >
      {backAction && (
        <Link
          to={backAction.url}
          className="text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1"
          aria-label={backAction.label}
        >
          {backAction.icon &&
            backAction.iconPosition === 'start' &&
            backAction.icon}
          {backAction.label}
          {backAction.icon &&
            backAction.iconPosition === 'end' &&
            backAction.icon}
        </Link>
      )}

      {actions.map((a, i) =>
        a.type === 'link' ? (
          <Link
            key={i}
            to={a.url}
            className="text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1"
            aria-label={a.label}
          >
            {a.icon && a.iconPosition === 'start' && a.icon}
            {a.label}
            {a.icon && a.iconPosition === 'end' && a.icon}
          </Link>
        ) : (
          <a
            key={i}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1"
            aria-label={a.label}
          >
            {a.icon && a.iconPosition === 'start' && a.icon}
            {a.label}
            {a.icon && a.iconPosition === 'end' && a.icon}
          </a>
        )
      )}
    </div>
  );
};

export default CardActions;
