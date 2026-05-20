import React from 'react';

interface TechBadgeProps {
  technologies?: string[];
}

const TechBadge: React.FC<TechBadgeProps> = ({ technologies }) => {
  if (!technologies || technologies.length === 0) return null;

  const getBadgeStyle = (tech: string): string => {
    const normalizedTech = tech.toLowerCase().trim();
    if (
      normalizedTech.includes('ui/ux') ||
      normalizedTech.includes('prototype') ||
      normalizedTech.includes('replica')
    ) {
      return 'bg-slate-900/60 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]';
    }
    if (
      normalizedTech.includes('supabase') ||
      normalizedTech.includes('websocket') ||
      normalizedTech.includes('firebase')
    ) {
      return 'bg-slate-900/60 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]';
    }
    return 'bg-slate-900/60 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]';
  };

  return (
    <div
      className="flex flex-wrap gap-2 mt-3 mb-4"
      aria-label="Tecnologie utilizzate"
    >
      {technologies.map((tech) => {
        const dynamicStyles = getBadgeStyle(tech);

        return (
          <span
            key={tech}
            className={`px-3 py-1 text-xs font-medium tracking-wide border rounded-full backdrop-blur-sm transition-all duration-300 ${dynamicStyles}`}
          >
            {tech}
          </span>
        );
      })}
    </div>
  );
};

export default TechBadge;
