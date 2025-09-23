// Header.tsx
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-button') && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    closeMobileMenu();
    
    // If we're not on the home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      // Navigate to home page
      window.location.href = '/';
      // The scroll will happen after the page loads due to the URL hash
      return;
    }

    // If we're already on home page, smooth scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  // Handle navigation with smooth scroll for home page sections
  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/' && sectionId) {
      // For home page sections, use smooth scroll
      scrollToSection(sectionId);
    } else {
      // For other pages, normal navigation
      closeMobileMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <img 
                src="https://res.cloudinary.com/dll8awuig/image/upload/v1758041712/portfolio/id_jy9p8lynw/ikqbueofjojdf4tuqr19.png" 
                alt="DCE Properties Logo - Real Estate and Facility Management" 
                width={40}
                height={40}
              />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">DCE Properties</h1>
              <p className="text-xs text-muted-foreground">& Facility Management Ltd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => handleNavigation('/', 'home')}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/partners" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Partners
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            {/* Projects Link - Smooth scroll on home page, normal navigation otherwise */}
            <button
              onClick={() => handleNavigation('/', 'projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <Link 
              to="/artisans" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Artisans
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-teal-700 text-white hover:bg-teal-800"
              onClick={() => handleNavigation('/', 'contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </Button>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="lg:hidden mobile-menu mt-4 py-4 bg-background/95 backdrop-blur-md rounded-lg border border-border">
            <nav className="flex flex-col space-y-2 px-4">
              <button
                onClick={() => handleNavigation('/', 'home')}
                className="text-foreground hover:text-primary transition-colors px-4 py-2 text-left"
              >
                Home
              </button>
              
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              
              <Link 
                to="/partners" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={closeMobileMenu}
              >
                Partners
              </Link>
              
              <Link 
                to="/services" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              
              {/* Projects button for mobile */}
              <button
                onClick={() => handleNavigation('/', 'projects')}
                className="text-foreground hover:text-primary transition-colors px-4 py-2 text-left"
              >
                Projects
              </button>
              
              <Link 
                to="/artisans" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={closeMobileMenu}
              >
                Artisans
              </Link>
              
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
              {/* Mobile CTA Button */}
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-teal-700 text-white hover:bg-teal-800 mt-4"
                onClick={() => handleNavigation('/', 'contact')}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;