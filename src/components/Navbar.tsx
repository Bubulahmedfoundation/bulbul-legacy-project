
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-4" : "bg-baft-darkgray py-6"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <span className={cn(
            "font-playfair text-xl md:text-2xl font-bold transition-colors",
            isScrolled ? "text-baft-maroon" : "text-white"
          )}>
            <span>Bulbul Ahmed Foundation Trust</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={cn(
            "transition-colors hover:text-baft-gold px-2 py-1",
            isScrolled ? "text-baft-darkgray" : "text-white"
          )}>
            Home
          </Link>
          <Link to="/about" className={cn(
            "transition-colors hover:text-baft-gold px-2 py-1",
            isScrolled ? "text-baft-darkgray" : "text-white"
          )}>
            About Us
          </Link>
          <Link to="/news-and-programs" className={cn(
            "transition-colors hover:text-baft-gold px-2 py-1",
            isScrolled ? "text-baft-darkgray" : "text-white"
          )}>
            News & Programs
          </Link>
          <Link to="/filmography" className={cn(
            "transition-colors hover:text-baft-gold px-2 py-1",
            isScrolled ? "text-baft-darkgray" : "text-white"
          )}>
            Filmography
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            className="flex items-center p-2" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-baft-darkgray" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-baft-darkgray" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div 
        className={cn(
          "md:hidden fixed top-[69px] right-0 bottom-0 w-[80%] max-w-[300px] bg-white z-50 shadow-xl transition-transform duration-300 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-4 space-y-2">
          <Link 
            to="/" 
            className="text-baft-darkgray hover:text-baft-maroon hover:bg-gray-100 rounded-md transition-colors px-4 py-3 font-medium" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-baft-darkgray hover:text-baft-maroon hover:bg-gray-100 rounded-md transition-colors px-4 py-3 font-medium" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/news-and-programs" 
            className="text-baft-darkgray hover:text-baft-maroon hover:bg-gray-100 rounded-md transition-colors px-4 py-3 font-medium" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            News & Programs
          </Link>
          <Link 
            to="/filmography" 
            className="text-baft-darkgray hover:text-baft-maroon hover:bg-gray-100 rounded-md transition-colors px-4 py-3 font-medium" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Filmography
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
