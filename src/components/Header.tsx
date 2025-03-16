
import React from 'react';
import { Bell, BookOpen, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-corporate-navy text-white py-4 px-4 sm:px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-corporate-gold" />
          <Link to="/" className="text-xl font-montserrat font-bold">
            Corporate<span className="text-corporate-gold">Vocab</span>Master
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8 font-montserrat">
          <Link to="/" className="hover:text-corporate-gold transition-colors">Dashboard</Link>
          <Link to="/modules" className="hover:text-corporate-gold transition-colors">Modules</Link>
          <Link to="/scenarios" className="hover:text-corporate-gold transition-colors">Scenarios</Link>
          <Link to="/progress" className="hover:text-corporate-gold transition-colors">Progress</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-corporate-gold transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-corporate-gold transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
