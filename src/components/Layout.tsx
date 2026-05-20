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
    p-4 md:p-8 max-w-none mx-auto
    flex flex-col items-center justify-center gap-6
    lg:flex-row lg:items-start lg:justify-start lg:px-6
  "
      >
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default Layout;
