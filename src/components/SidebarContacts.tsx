import React from 'react';
import { Mail, Linkedin, Github, PhoneCall } from 'lucide-react';

interface SidebarContactsProps {
  t: any;
}

const ContactLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}> = ({ href, icon, label, external }) => (
  <li>
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center justify-center lg:justify-start gap-2 px-2 py-2 min-h-[40px] rounded-lg text-cyan-400 transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      {icon}
      <span>{label}</span>
    </a>
  </li>
);

export const SidebarContacts: React.FC<SidebarContactsProps> = ({ t }) => (
  <nav
    className="w-full mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-sm"
    aria-label={t('navigation.main_content_tabs')}
  >
    <ul className="grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-5 lg:gap-4">
      <ContactLink
        href="mailto:liba.leoncini@gmail.com"
        icon={<Mail size={18} />}
        label={t('me.social.gmail')}
      />
      <ContactLink
        href="https://www.linkedin.com/in/libanio-leoncini/"
        icon={<Linkedin size={18} />}
        label={t('me.social.linkedin')}
        external
      />
      <ContactLink
        href="https://github.com/LLeo93"
        icon={<Github size={18} />}
        label={t('me.social.github')}
        external
      />
      <ContactLink
        href="tel:+393806952354"
        icon={<PhoneCall size={18} />}
        label={t('me.phone')}
      />
    </ul>
  </nav>
);
