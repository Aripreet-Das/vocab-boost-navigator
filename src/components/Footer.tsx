
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-corporate-navy text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen className="h-5 w-5 mr-2 text-corporate-gold" />
            <span className="text-lg font-montserrat font-bold">
              CorVo<span className="text-corporate-gold">Master</span>
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left mb-4 md:mb-0">
            <Link to="/about" className="text-sm hover:text-corporate-gold mb-2 md:mb-0">About</Link>
            <a href="#" className="text-sm hover:text-corporate-gold mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-corporate-gold mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="text-sm hover:text-corporate-gold">Contact</a>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">© 2023 CorVoMaster. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
