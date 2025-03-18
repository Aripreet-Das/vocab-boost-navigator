
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from 'next-themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className={`flex flex-col min-h-screen w-full font-montserrat ${
      isDark || theme === undefined
        ? 'bg-gradient-to-b from-corporate-navy via-corporate-darkblue to-black text-white' 
        : 'bg-white text-corporate-navy'
    }`}>
      <Header />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
