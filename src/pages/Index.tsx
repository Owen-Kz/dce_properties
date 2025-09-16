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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PropertyPlans />
      <MeetTheTeam />
      <Partners />
      <Services />
      <Artisans />
      <InvestorHub />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
