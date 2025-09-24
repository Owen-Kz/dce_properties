import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground rounded-t-[10vw] text-background relative overflow-hidden" id="contact">
 
      
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/dll8awuig/image/upload/v1758041712/portfolio/id_jy9p8lynw/ikqbueofjojdf4tuqr19.png" 
                    className="h-10 filter grayscale brightness-0 invert" 
                    alt="DCE Logo" 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">DCE Properties</h3>
                  <p className="text-sm text-background/70">& Facility Management Ltd</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 max-w-md">
                Your trusted partner in real estate investing and facility solutions. We Make Real estate investing Accessible, flexible and Transparent.
              </p>
              <div className="text-2xl font-bold text-background mb-2">
                Acquire • Protect • Manage • Grow
              </div>
              
              {/* Regulatory Body Section */}
              <div className="mt-6 pt-6 border-t border-background/20">
                <p className="text-background/70 text-sm mb-3">Registered and regulated by:</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center p-1">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                      {/* <span className="text-foreground font-bold text-xs">CICPFM</span> */}
                      <img src="https://res.cloudinary.com/dll8awuig/image/upload/v1758593525/portfolio/id_uk3r0xy52/fnadhwwvpxeivinbntgr.jpg" alt="CICPFM" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-background">CICPFM</p>
                    <p className="text-background/70 text-xs">Real Estate Regulatory Body</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
                <li><a href="#properties" className="hover:text-background transition-colors">Properties</a></li>
                <li><a href="#investors" className="hover:text-background transition-colors">Investors</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#contact" className="hover:text-background transition-colors">Contact Us</a></li>
              </ul>
              
              {/* Additional Regulatory Info */}
              <div className="mt-8 p-4 bg-background/5 rounded-lg">
                <p className="text-background/70 text-xs mb-2">Compliant with regulatory standards</p>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-background/80 text-sm">Fully Licensed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-background/10 rounded-xl p-8 mb-8 text-center relative overflow-hidden">
            {/* Subtle curve accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-background/5 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-background/5 rounded-full translate-y-8 -translate-x-8"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Ready to Start Your Property Journey?</h3>
            <p className="text-background/80 mb-6 relative z-10">
              Join thousands of satisfied clients who have achieved their property ownership dreams with DCE Properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="https://chat.whatsapp.com/KK1InKqHQYkIuBgCK9bKtR" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-teal-800 bg-white">
                  Start Saving Now
                </Button>
              </a>
              <a href="https://wa.me/2347066049148?text=Hello%20DCE%20Properties.%20I%20reached%20out%20via%20the%20website." target="_blank" rel="noopener noreferrer">
                <Button variant="" size="lg" className="bg-teal-800 text-background hover:bg-background hover:text-foreground">
                  Contact on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-background/60 text-sm">
                © {new Date().getFullYear()} DCE Properties & Facility Management Ltd. All rights reserved.
              </p>
              
              {/* Regulatory Badge */}
              <div className="flex items-center space-x-2 bg-background/5 px-3 py-1 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-background/70 text-xs">Regulated by CICPFM</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://web.facebook.com/profile.php?id=61571289125422" className="text-background/60 hover:text-background transition-colors" target="_blank">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 14.001c3.79 0 5.86-3.141 5.86-5.86 0-.09 0-.178-.006-.266a4.19 4.19 0 001.03-1.066 4.087 4.087 0 01-1.177.324 2.054 2.054 0 00.9-1.134 4.108 4.108 0 01-1.302.498 2.049 2.049 0 00-3.489 1.867 5.813 5.813 0 01-4.219-2.139 2.049 2.049 0 00.635 2.735 2.025 2.025 0 01-.928-.256v.026a2.049 2.049 0 001.642 2.008 2.054 2.054 0 01-.926.035 2.049 2.049 0 001.913 1.422A4.108 4.108 0 012 13.096a5.8 5.8 0 003.145.922c3.774 0 5.836-3.124 5.836-5.836l-.007-.266a4.168 4.168 0 001.023-1.061z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;