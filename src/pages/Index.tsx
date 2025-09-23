// Index.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyPlans from "@/components/PropertyPlans";
import InvestorHub from "@/components/InvestorHub";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Artisans from "@/components/Artisans";
import MeetTheTeam from "@/components/MeetTheTeam";
import Partners from "@/components/Partners";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Projects from "@/components/Projects";

const Index = () => {
  const location = useLocation();
  const baseUrl = "https://www.dceproperties.com";

  // Get meta tag configuration based on current path
  const getMetaConfig = () => {
    switch (location.pathname) {
      case '/about':
        return {
          title: 'About DCE Properties: Our Mission, Vision & Expert Team',
          description: 'At DCE Properties & Facility Management Ltd, we are a fast-growing real estate company in Lagos committed to property sales & marketing, property and facility management, hotel & hospitality partnerships, real estate investment opportunities, and sustainable real estate development',
          canonicalUrl: `${baseUrl}/about`,
        };
      case '/partners':
        return {
          title: 'Our Trusted Partners | DCE Properties & Facility Management',
          description: 'We collaborate with industry leaders to deliver exceptional property management and investment solutions to our clients.',
          canonicalUrl: `${baseUrl}/partners`,
        };
      case '/properties':
        return {
          title: 'Flexible Property Savings Plans in Nigeria | DCE Properties',
          description: 'Choose a savings plan that fits your budget: Daily Saver (₦1k/day), Weekly, or Express plans. Invest in pre-launch estates in Ikorodu, Epe, Ibeju-Lekki.',
          canonicalUrl: `${baseUrl}/properties`,
        };
      case '/services':
        return {
          title: 'Comprehensive Property Services | DCE Properties & Facility Management',
          description: 'Professional property construction, facility management, real estate marketing, and construction support services across Nigeria.',
          canonicalUrl: `${baseUrl}/services`,
        };
      case '/investors':
        return {
          title: 'High-Return Real Estate Investment Opportunities | DCE Properties',
          description: 'Invest with DCE Properties and earn up to 30% ROI. Choose between fixed-return plans or profit-sharing models in developing Lagos estates.',
          canonicalUrl: `${baseUrl}/investors`,
        };
      case '/artisans':
        return {
          title: 'Artisan Partnership Program | Join DCE Properties Network',
          description: 'Skilled Carpenter, Electrician, or Plumber? Join our network for steady work, professional development, and fair compensation on quality projects.',
          canonicalUrl: `${baseUrl}/artisans`,
        };
      case '/projects' :
        return {
          title: 'Our Real Estate Projects | DCE Properties & Facility Management',
          description: 'Explore our portfolio of successful real estate developments and property management projects across Lagos and Ogun State.',
          canonicalUrl: `${baseUrl}/projects`,
        };
      case '/contact':
        return {
          title: 'Contact DCE Properties & Facility Management | Get Started Today',
          description: 'Have questions about our savings plans or investments? Reach out to our customer relations team for guidance on your property journey.',
          canonicalUrl: `${baseUrl}/contact`,
        };
      default:
        return {
          title: 'DCE Properties - Save Daily, Own Property | Real Estate Investment Platform',
          description: 'Start with ₦1,000 daily savings and own property in Lagos & Ogun State. Transparent property investment platform with flexible payment plans.',
          canonicalUrl: baseUrl,
        };
    }
  };

  const metaConfig = getMetaConfig();
  const ogImage = "https://res.cloudinary.com/dll8awuig/image/upload/v1758041712/portfolio/id_jy9p8lynw/ikqbueofjojdf4tuqr19.png";

  // Handle scrolling to sections based on route
  useEffect(() => {
    const scrollToSection = () => {
      // Get section ID from pathname (remove leading slash)
      const sectionId = location.pathname.substring(1);
      
      // If we're on the home page, scroll to top
      if (sectionId === "") {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }

      // Find and scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        // Small timeout to ensure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    };

    scrollToSection();
  }, [location.pathname]);

  // Also handle direct hash links in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      {/* Dynamic Meta Tags for SEO */}
      <Helmet>
        <title>{metaConfig.title}</title>
        <meta name="description" content={metaConfig.description} />
        <link rel="canonical" href={metaConfig.canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaConfig.canonicalUrl} />
        <meta property="og:title" content={metaConfig.title} />
        <meta property="og:description" content={metaConfig.description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaConfig.canonicalUrl} />
        <meta property="twitter:title" content={metaConfig.title} />
        <meta property="twitter:description" content={metaConfig.description} />
        <meta property="twitter:image" content={ogImage} />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "DCE Properties & Facility Management Ltd",
            "description": metaConfig.description,
            "url": baseUrl,
            "logo": ogImage,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "sameAs": [
              "https://www.facebook.com/dceproperties",
              "https://www.instagram.com/dceproperties",
              "https://twitter.com/dceproperties"
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      {/* Main content sections with IDs matching routes */}
      <section id="home" itemScope itemType="https://schema.org/WebPage">
        <Hero />
      </section>
{/*       
      <section id="properties" itemScope itemType="https://schema.org/RealEstateListing">
        <PropertyPlans />
      </section> */}
      
      <section id="about" itemScope itemType="https://schema.org/AboutPage">
        <MeetTheTeam />
      </section>
      
      <section id="partners" itemScope itemType="https://schema.org/Organization">
        <Partners />
      </section>
      
      <section id="services" itemScope itemType="https://schema.org/Service">
        <Services />
      </section>
      

      <section id="projects" itemScope itemType="https://schema.org/CreativeWork">
  <Projects />
</section>
      
      <section id="artisans" itemScope itemType="https://schema.org/WebPage">
        <Artisans />
      </section>
{/*       
      <section id="investors" itemScope itemType="https://schema.org/InvestmentOrDeposit">
        <InvestorHub />
      </section> */}
      
      <section id="trust" itemScope itemType="https://schema.org/WebPage">
        <TrustSection />
      </section>
      
      <section id="contact" itemScope itemType="https://schema.org/ContactPage">
        <Footer />
      </section>
    </div>
  );
};

export default Index;