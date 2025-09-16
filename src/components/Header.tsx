import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const Header = () => {
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
            <a href="#properties" className="text-foreground hover:text-primary transition-colors">Properties</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#investors" className="text-foreground hover:text-primary transition-colors">Investors</a>
            <a href="#artisans" className="text-foreground hover:text-primary transition-colors">Artisans</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="hidden md:flex">
            Start Saving to Own
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;