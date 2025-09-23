// Header.tsx
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // RE-ADD React Router imports

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Keep this for potential active link styling

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Use Link for proper navigation */}
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

          {/* Navigation - Use proper Link components for SEO-friendly URLs */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link to="/partners" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
              Partners
            </Link>
            {/* <Link to="/properties" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
              Properties
            </Link> */}
            <Link to="/services" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
              Services
            </Link>
            <Link to="/projects" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
             Projects
            </Link>
            <Link to="/artisans" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
              Artisans
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors" onClick={closeMobileMenu}>
              Contact
            </Link>
          </nav>

          {/* CTA Button with descriptive text */}
          {/* <Button 
            variant="hero" 
            size="lg" 
            className="hidden bg-teal-800 text-white md:flex"
            onClick={() => {
              // Scroll to properties section when CTA is clicked
              const element = document.getElementById('properties');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Saving to Own
          </Button> */}

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
            <nav className="flex flex-col space-y-4 px-4" onClick={closeMobileMenu}>
              <Link to="/" className="text-foreground hover:text-primary transition-colors px-4 py-2">Home</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors px-4 py-2">About Us</Link>
              <Link to="/partners" className="text-foreground hover:text-primary transition-colors px-4 py-2">Partners</Link>
              {/* <Link to="/properties" className="text-foreground hover:text-primary transition-colors px-4 py-2">Properties</Link> */}
              <Link to="/services" className="text-foreground hover:text-primary transition-colors px-4 py-2">Services</Link>
              <Link to="/projects" className="text-foreground hover:text-primary transition-colors px-4 py-2">Projects</Link>
              <Link to="/artisans" className="text-foreground hover:text-primary transition-colors px-4 py-2">Artisans</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors px-4 py-2">Contact</Link>
              {/* <Button 
                variant="hero" 
                size="lg" 
                className="bg-teal-800 text-white mx-4 mt-4"
                onClick={() => {
                  closeMobileMenu();
                  const element = document.getElementById('properties');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start Saving to Own
              </Button> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;