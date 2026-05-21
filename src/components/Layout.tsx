import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import BackgroundLayer from './BackgroundLayer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white font-sans">
      <BackgroundLayer />
      <div
        className="
    relative z-10
    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_40%)]
    p-4 md:p-8 max-w-none mx-auto
    flex flex-col items-center justify-center gap-6
    lg:flex-row lg:items-start lg:justify-start lg:px-6
    min-h-[100dvh] transition-all
duration-700
ease-out
  "
      >
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default Layout;
