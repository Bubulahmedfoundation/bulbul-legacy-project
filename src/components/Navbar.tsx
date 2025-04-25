
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
          <span className={cn(
            "font-playfair text-xl md:text-2xl font-bold transition-colors",
            isScrolled ? "text-baft-maroon" : "text-white drop-shadow-md"
          )}>
            Bulbul Ahmed Foundation Trust
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`block h-0.5 w-6 ${isScrolled ? 'bg-baft-darkgray' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block h-0.5 w-6 ${isScrolled ? 'bg-baft-darkgray' : 'bg-white'} mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 ${isScrolled ? 'bg-baft-darkgray' : 'bg-white'} mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn(
            "transition-colors hover:text-baft-gold",
            isScrolled ? "text-baft-darkgray" : "text-white drop-shadow-sm"
          )}>
            Home
          </Link>
          <Link to="/about" className={cn(
            "transition-colors hover:text-baft-gold",
            isScrolled ? "text-baft-darkgray" : "text-white drop-shadow-sm"
          )}>
            About Us
          </Link>
          <Link to="/programs" className={cn(
            "transition-colors hover:text-baft-gold",
            isScrolled ? "text-baft-darkgray" : "text-white drop-shadow-sm"
          )}>
            Programs
          </Link>
          <Link to="/news" className={cn(
            "transition-colors hover:text-baft-gold",
            isScrolled ? "text-baft-darkgray" : "text-white drop-shadow-sm"
          )}>
            News & Events
          </Link>
          <Link to="/get-involved" className={cn(
            "transition-colors hover:text-baft-gold",
            isScrolled ? "text-baft-darkgray" : "text-white drop-shadow-sm"
          )}>
            Get Involved
          </Link>
          <Link 
            to="/get-involved#donate" 
            className={cn(
              "px-5 py-2 rounded transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
              isScrolled 
                ? "bg-baft-maroon text-white hover:bg-baft-maroon/90" 
                : "bg-baft-gold text-baft-darkgray hover:bg-baft-gold/90"
            )}
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
