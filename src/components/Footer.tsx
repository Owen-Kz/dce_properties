import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                {/* <span className="text-primary-foreground font-bold text-lg">DCE</span> */}
              <img src="https://res.cloudinary.com/dll8awuig/image/upload/v1758041712/portfolio/id_jy9p8lynw/ikqbueofjojdf4tuqr19.png" className="h-10 filter grayscale brightness-0 invert" alt="DcE Logo" />

              </div>
              <div>
                <h3 className="font-bold text-lg">DCE Properties</h3>
                <p className="text-sm text-background/70">& Facility Management Ltd</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Your trusted partner in property ownership and investment. 
              We make real estate accessible through flexible savings plans and transparent processes.
            </p>
            <div className="text-2xl font-bold text-background mb-2">
              Acquire • Protect • Manage • Grow
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
              {/* <li><a href="#faq" className="hover:text-background transition-colors">FAQs</a></li> */}
              <li><a href="#contact" className="hover:text-background transition-colors">Contact Us</a></li>
              {/* <li><a href="#privacy" className="hover:text-background transition-colors">Privacy Policy</a></li> */}
              {/* <li><a href="#terms" className="hover:text-background transition-colors">Terms & Conditions</a></li> */}
              {/* <li><a href="#partner" className="hover:text-background transition-colors">Partner With Us</a></li> */}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-background/10 rounded-xl p-8 mb-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Property Journey?</h3>
          <p className="text-background/80 mb-6">
            Join thousands of satisfied clients who have achieved their property ownership dreams with DCE Properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DCE Properties & Facility Management Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://web.facebook.com/profile.php?id=61571289125422" className="text-background/60 hover:text-background transition-colors" target="_blank">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
             </a>
            {/* // <a href="#" className="text-background/60 hover:text-background transition-colors">
            //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            //     <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
            //   </svg>
            // </a>  */}
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.017 14.001c3.79 0 5.86-3.141 5.86-5.86 0-.09 0-.178-.006-.266a4.19 4.19 0 001.03-1.066 4.087 4.087 0 01-1.177.324 2.054 2.054 0 00.9-1.134 4.108 4.108 0 01-1.302.498 2.049 2.049 0 00-3.489 1.867 5.813 5.813 0 01-4.219-2.139 2.049 2.049 0 00.635 2.735 2.025 2.025 0 01-.928-.256v.026a2.049 2.049 0 001.642 2.008 2.054 2.054 0 01-.926.035 2.049 2.049 0 001.913 1.422A4.108 4.108 0 012 13.096a5.8 5.8 0 003.145.922c3.774 0 5.836-3.124 5.836-5.836l-.007-.266a4.168 4.168 0 001.023-1.061z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
