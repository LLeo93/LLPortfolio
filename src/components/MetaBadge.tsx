import React from 'react';
import { BadgeCheck, CalendarDays, Layers3, Sparkles } from 'lucide-react';

interface MetaBadgeProps {
  type?: string;
  status?: 'verified' | 'completed' | 'in-progress';
  year?: string;
  featured?: boolean;
}

const MetaBadge: React.FC<MetaBadgeProps> = ({
  type,
  status = 'verified',
  year,
  featured = false,
}) => {
  const statusStyles = {
    verified: `
      border-emerald-500/20
      bg-emerald-500/10
      text-emerald-300
    `,
    completed: `
      border-cyan-500/20
      bg-cyan-500/10
      text-cyan-300
    `,
    'in-progress': `
      border-yellow-500/20
      bg-yellow-500/10
      text-yellow-300
    `,
  };

  const statusLabels = {
    verified: 'Verified',
    completed: 'Completed',
    'in-progress': 'In Progress',
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* CATEGORY */}
      {type && (
        <div
          className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-purple-500/20
            bg-purple-500/10
            px-3 py-1
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-purple-300
          "
        >
          <Layers3 size={12} />
          <span>{type}</span>
        </div>
      )}

      {/* STATUS */}
      <div
        className={`
          inline-flex items-center gap-1.5
          rounded-full
          border
          px-3 py-1
          text-[10px]
          uppercase
          tracking-[0.18em]
          ${statusStyles[status]}
        `}
      >
        <BadgeCheck size={12} />
        <span>{statusLabels[status]}</span>
      </div>

      {/* YEAR */}
      {year && (
        <div
          className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-white/10
            bg-white/[0.03]
            px-3 py-1
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-gray-300
          "
        >
          <CalendarDays size={12} />
          <span>{year}</span>
        </div>
      )}

      {/* FEATURED */}
      {featured && (
        <div
          className="
            inline-flex items-center gap-1.5
            rounded-full
            border border-cyan-400/20
            bg-cyan-400/[0.08]
            px-3 py-1
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-cyan-300
            animate-pulse
          "
        >
          <Sparkles size={12} />
          <span>Featured</span>
        </div>
      )}
    </div>
  );
};

export default MetaBadge;
