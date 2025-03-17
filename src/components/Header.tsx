
import React, { useState } from 'react';
import { Bell, BookOpen, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get cart items count from localStorage
  const getCartCount = () => {
    try {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart).length : 0;
    } catch (error) {
      return 0;
    }
  };
  
  const cartCount = getCartCount();

  return (
    <header className="bg-corporate-navy text-white py-4 px-4 sm:px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-corporate-gold" />
          <Link to="/" className="text-xl font-montserrat font-bold">
            CorVo<span className="text-corporate-gold">Master</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8 font-montserrat">
          <Link to="/" className="hover:text-corporate-gold transition-colors">Dashboard</Link>
          <Link to="/modules" className="hover:text-corporate-gold transition-colors">Modules</Link>
          <Link to="/scenarios" className="hover:text-corporate-gold transition-colors">Scenarios</Link>
          <Link to="/progress" className="hover:text-corporate-gold transition-colors">Progress</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-white hover:text-corporate-gold transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-corporate-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="text-white hover:text-corporate-gold transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <Link to="/profile" className="text-white hover:text-corporate-gold transition-colors">
            <User className="h-5 w-5" />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 font-montserrat">
          <div className="flex flex-col space-y-3 px-4">
            <Link 
              to="/" 
              className="text-white hover:text-corporate-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/modules" 
              className="text-white hover:text-corporate-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Modules
            </Link>
            <Link 
              to="/scenarios" 
              className="text-white hover:text-corporate-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Scenarios
            </Link>
            <Link 
              to="/progress" 
              className="text-white hover:text-corporate-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Progress
            </Link>
            <Link 
              to="/profile" 
              className="text-white hover:text-corporate-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Profile
            </Link>
            <Link 
              to="/cart" 
              className="text-white hover:text-corporate-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
