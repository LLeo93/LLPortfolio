import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import BackgroundLayer from './BackgroundLayer';
import ScrollTop from './ScrollTop';

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
    bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)]
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
        <ScrollTop />
      </div>
    </div>
  );
};

export default Layout;
