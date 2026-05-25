import type { IconType } from 'react-icons';

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiFigma,
  SiFirebase,
  SiSupabase,
} from 'react-icons/si';

export type TechItem = {
  icon: IconType;
  name: string;
};

export type TechGroup = {
  category: string;
  items: TechItem[];
};

export const technologies: TechGroup[] = [
  {
    category: 'home.tech_ecosystem.categories.frontend',
    items: [
      { icon: SiReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiJavascript, name: 'JavaScript' },
    ],
  },

  {
    category: 'home.tech_ecosystem.categories.ui_styling',
    items: [
      { icon: SiTailwindcss, name: 'Tailwind' },
      { icon: SiSass, name: 'Sass' },
      { icon: SiBootstrap, name: 'Bootstrap' },
      { icon: SiFigma, name: 'Figma' },
    ],
  },

  {
    category: 'home.tech_ecosystem.categories.backend_data',
    items: [
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiPostgresql, name: 'PostgreSQL' },
      { icon: SiFirebase, name: 'Firebase' },
      { icon: SiSupabase, name: 'Supabase' },
    ],
  },

  {
    category: 'home.tech_ecosystem.categories.workflow',
    items: [
      { icon: SiGit, name: 'Git' },
      { icon: SiGithub, name: 'GitHub' },
    ],
  },
];
