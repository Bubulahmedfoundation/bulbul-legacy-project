
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300", 
        isScrolled 
          ? "bg-white/95 shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-baft-maroon font-playfair text-xl md:text-2xl font-bold">
            Bulbul Ahmed Foundation Trust
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`block h-0.5 w-6 bg-baft-darkgray transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-baft-darkgray mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-baft-darkgray mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-baft-darkgray hover:text-baft-maroon transition-colors">Home</Link>
          <Link to="/about" className="text-baft-darkgray hover:text-baft-maroon transition-colors">About Us</Link>
          <Link to="/programs" className="text-baft-darkgray hover:text-baft-maroon transition-colors">Programs</Link>
          <Link to="/news" className="text-baft-darkgray hover:text-baft-maroon transition-colors">News & Events</Link>
          <Link to="/get-involved" className="text-baft-darkgray hover:text-baft-maroon transition-colors">Get Involved</Link>
          <Link 
            to="/get-involved#donate" 
            className="px-5 py-2 bg-baft-maroon text-white rounded hover:bg-baft-maroon/90 transition-colors"
          >
            Donate
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-baft-darkgray hover:text-baft-maroon transition-colors px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-baft-darkgray hover:text-baft-maroon transition-colors px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/programs" 
            className="text-baft-darkgray hover:text-baft-maroon transition-colors px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Programs
          </Link>
          <Link 
            to="/news" 
            className="text-baft-darkgray hover:text-baft-maroon transition-colors px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            News & Events
          </Link>
          <Link 
            to="/get-involved" 
            className="text-baft-darkgray hover:text-baft-maroon transition-colors px-4 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Involved
          </Link>
          <Link 
            to="/get-involved#donate" 
            className="mx-4 px-5 py-2 bg-baft-maroon text-white rounded text-center hover:bg-baft-maroon/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
