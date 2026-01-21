import React from 'react';

interface ProfileProps {
  avatar: string;
  name: string;
  role: string;
}

export const SidebarProfile: React.FC<ProfileProps> = ({
  avatar,
  name,
  role,
}) => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="rounded-full overflow-hidden w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 border-2 border-cyan-400 mb-2 sm:mb-3 md:mb-4 transform transition-transform duration-300 hover:scale-105">
      <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
    </div>
    <div className="cursor-pointer">
      <h2 className="text-lg sm:text-xl md:text-xl font-bold text-white mb-0 sm:mb-1 md:mb-1">
        {name}
      </h2>
      <p className="text-xs sm:text-sm md:text-sm text-white mb-2 sm:mb-3 md:mb-4">
        {role}
      </p>
    </div>
  </div>
);
