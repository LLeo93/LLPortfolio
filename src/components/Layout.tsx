import React from 'react';
import AnimatedBackground from './AnimatedBackground.tsx';
import Sidebar from './Sidebar.tsx';
import MainContent from './MainContent.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white font-sans p-4 md:p-8 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-center">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full lg:flex-row lg:items-start lg:justify-center lg:gap-8 lg:p-10">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default Layout;
