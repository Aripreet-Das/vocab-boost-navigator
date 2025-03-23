
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from 'next-themes';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  
  return (
    <div className={`flex flex-col min-h-screen w-full font-montserrat relative ${
      isDark 
        ? 'bg-gradient-to-b from-corporate-navy via-corporate-darkblue to-black text-white' 
        : 'bg-white text-gray-800'
    }`}>
      <Header />
      <main className={`flex-grow w-full ${isAboutPage ? 'max-w-full px-4 md:px-8 lg:px-12' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
