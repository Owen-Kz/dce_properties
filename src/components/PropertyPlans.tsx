import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PropertyPlans = () => {
  const plans = [
    {
      title: "Daily Saver",
      amount: "₦1,000",
      period: "per day",
      monthly: "₦31,000/month",
      popular: false,
    },
    {
      title: "Daily Plus",
      amount: "₦2,000",
      period: "per day",
      monthly: "₦61,000/month",
      popular: true,
    },
    {
      title: "Weekly Saver",
      amount: "₦7,000",
      period: "per week",
      monthly: "₦29,000/month",
      popular: false,
    },
    {
      title: "Express Saver",
      amount: "₦5,000",
      period: "per day",
      monthly: "₦152,000/month",
      popular: false,
    },
    {
      title: "Monthly Plan",
      amount: "₦152,500",
      period: "per month",
      monthly: "Fixed monthly payment",
      popular: false,
    },
  ];

  const locations = [
    {
      name: "Ikorodu/Shagamu Axis",
      price: "₦1.2M - ₦1.5M",
      description: "Growing suburban area with great potential",
    },
    {
      name: "Lagos-Ibadan Expressway (Ajebo)",
      price: "₦2.5M",
      description: "Strategic location along major highway",
    },
    {
      name: "Epe (New Growth Zone)",
      price: "₦2M - ₦2.5M",
      description: "Emerging area with future development plans",
    },
    {
      name: "Ibeju Lekki (Prime Zone)",
      price: "₦800k - ₦5M",
      description: "Near Free Trade Zone, premium location",
    },
  ];

  return (
    <section id="savings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Flexible Property Savings Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a plan that works for your budget. Start with as little as ₦1,000 daily 
            and watch your property ownership dreams become reality.
          </p>
        </div>

        {/* Savings Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground">{plan.title}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.amount}
                  <span className="text-lg text-muted-foreground font-normal"> {plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.monthly}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-muted/50 rounded-xl p-6 mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-4">Important Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">Installment Interest:</strong> 2.5% for plans above 3 months
            </div>
            <div id="properties">
              <strong className="text-foreground">Service Charge:</strong> ₦500/month per ₦1k daily subscription
            </div>
            <div>
              <strong className="text-foreground">Bank Charges:</strong> ₦50 per transfer (CBN)
            </div>
          </div>
        </div>

        {/* Property Locations */}
        <div className="text-center mb-12" >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Available Property Locations
          </h3>
          <p className="text-lg text-muted-foreground">
            Pre-launch estates in prime locations across Lagos and Ogun State
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{location.name}</CardTitle>
                <div className="text-2xl font-bold text-secondary">{location.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{location.description}</p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyPlans;
