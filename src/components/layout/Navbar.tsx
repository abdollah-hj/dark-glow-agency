
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold neon-text-blue">AGENCY</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About Us
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>
          
          <button 
            onClick={toggleMenu} 
            className="md:hidden flex items-center justify-center p-2 rounded-lg glass"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden glass mt-2 overflow-hidden transition-all duration-300 origin-top ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            <Link to="/" className={`text-lg px-2 py-3 ${location.pathname === '/' ? 'neon-text-blue' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`text-lg px-2 py-3 ${location.pathname === '/about' ? 'neon-text-blue' : ''}`}>
              About Us
            </Link>
            <Link to="/contact" className={`text-lg px-2 py-3 ${location.pathname === '/contact' ? 'neon-text-blue' : ''}`}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
