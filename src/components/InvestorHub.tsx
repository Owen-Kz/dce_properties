import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InvestorHub = () => {
  const [capital, setCapital] = useState("");
  const [duration, setDuration] = useState("");
  const [model, setModel] = useState("");

  const calculateROI = () => {
    const amount = parseFloat(capital);
    if (!amount || !duration) return null;

    const rates = {
      "12": 0.15,
      "18": 0.20,
      "24": 0.25,
    };

    const rate = rates[duration as keyof typeof rates];
    if (!rate) return null;

    const roi = amount * rate;
    const total = amount + roi;

    return {
      roi: roi.toLocaleString(),
      total: total.toLocaleString(),
      rate: (rate * 100).toString(),
    };
  };

  const result = calculateROI();

  const roiPlans = [
    {
      duration: "12 Months",
      rate: "15%",
      example: "₦1,000,000 → ₦1,150,000",
      color: "bg-gradient-primary",
    },
    {
      duration: "18 Months",
      rate: "20%",
      example: "₦2,000,000 → ₦2,400,000",
      color: "bg-gradient-secondary",
    },
    {
      duration: "24 Months",
      rate: "25%",
      example: "₦5,000,000 → ₦6,250,000",
      color: "bg-accent",
    },
  ];

  return (
    <section id="investors" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Investor Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us and earn attractive returns on your investment. 
            Choose between fixed ROI plans or profit-sharing models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ROI Calculator */}
          <div>
            <Card className="bg-card shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">
                  Investment Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="capital" className="text-foreground">Investment Capital (₦)</Label>
                  <Input
                    id="capital"
                    type="text"
                    placeholder="e.g., 1,000,000"
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <div>
                  <Label htmlFor="duration" className="text-foreground">Duration</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 Months (15% ROI)</SelectItem>
                      <SelectItem value="18">18 Months (20% ROI)</SelectItem>
                      <SelectItem value="24">24 Months (25% ROI)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="model" className="text-foreground">Investment Model</Label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed">Fixed ROI</SelectItem>
                      <SelectItem value="profit-share">Profit Share (30%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {result && (
                  <div className="bg-gradient-card p-6 rounded-lg shadow-card">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Projection</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment:</span>
                        <span className="font-semibold text-foreground">₦{parseFloat(capital).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ROI ({result.rate}%):</span>
                        <span className="font-semibold text-secondary">₦{result.roi}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between">
                        <span className="text-foreground font-semibold">Total Return:</span>
                        <span className="font-bold text-primary text-lg">₦{result.total}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button variant="outline" className="bg-teal-800 text-white w-full text-lg py-3">
                  Start Investing
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* ROI Plans */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Fixed ROI Plans</h3>
            <div className="space-y-4 mb-8">
              {roiPlans.map((plan, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{plan.duration}</h4>
                        <p className="text-muted-foreground">{plan.example}</p>
                      </div>
                      <div className={`${plan.color} text-white px-4 py-2 rounded-full font-bold text-lg`}>
                        {plan.rate}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Profit Share Model */}
            <Card className="bg-gradient-to-r from-teal-800 to-teal-700 text-white shadow-premium">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Profit Share Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white-foreground mb-4">
                  Receive 30% of net profit per estate cycle. Perfect for larger investments 
                  seeking higher potential returns.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Ikorodu:</strong> ₦1.2M plots
                  </div>
                  <div>
                    <strong>Shagamu:</strong> ₦1.5M plots
                  </div>
                  <div>
                    <strong>Epe:</strong> ₦2M-₦2.5M plots
                  </div>
                  <div>
                    <strong>Ibeju Lekki:</strong> ₦5M plots
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHub;
