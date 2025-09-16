import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PropertyPlans from "@/components/PropertyPlans";
import InvestorHub from "@/components/InvestorHub";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PropertyPlans />
      <InvestorHub />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
