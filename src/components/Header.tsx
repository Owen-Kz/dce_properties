import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll function
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const targetId = href?.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : null;
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        // Close mobile menu after clicking a link
        setIsMenuOpen(false);
      }
    };

    // Add event listener to navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll as EventListener);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-button') && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <img src="https://res.cloudinary.com/dll8awuig/image/upload/v1758041712/portfolio/id_jy9p8lynw/ikqbueofjojdf4tuqr19.png" alt="DcE Logo" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">DCE Properties</h1>
              <p className="text-xs text-muted-foreground">& Facility Management Ltd</p>
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
            <a href="#partners" className="text-foreground hover:text-primary transition-colors">Partners</a>

            <a href="#properties" className="text-foreground hover:text-primary transition-colors">Properties</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#investors" className="text-foreground hover:text-primary transition-colors">Investors</a>
            <a href="#artisans" className="text-foreground hover:text-primary transition-colors">Artisans</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="hidden bg-teal-800 text-white md:flex">
            Start Saving to Own
          </Button>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors px-4 py-2">Home</a>
              <a href="#properties" className="text-foreground hover:text-primary transition-colors px-4 py-2">Properties</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors px-4 py-2">Services</a>
              <a href="#investors" className="text-foreground hover:text-primary transition-colors px-4 py-2">Investors</a>
              <a href="#artisans" className="text-foreground hover:text-primary transition-colors px-4 py-2">Artisans</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors px-4 py-2">Contact</a>
              <Button variant="hero" size="lg" className="bg-teal-800 text-white mx-4 mt-4">
                Start Saving to Own
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;