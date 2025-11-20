import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for new businesses",
      features: [
        "AI Chatbot on website",
        "Basic automation",
        "Email support",
        "Up to 500 conversations/month",
        "1 integration",
      ],
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "For growing businesses",
      features: [
        "AI Chatbot + Voice Assistant",
        "Automated booking system",
        "Priority support",
        "Unlimited conversations",
        "5 integrations",
        "Loyalty program",
        "Custom design",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      period: "",
      description: "Custom solutions",
      features: [
        "All Professional features",
        "Dedicated AI consultant",
        "Custom integrations",
        "Priority 24/7 support",
        "Advanced analytics & reports",
        "Multi-site support",
        "API access",
        "Train custom AI models",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your business. All plans include free installation and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-primary shadow-medium scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular ? "bg-gradient-accent" : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All prices exclude VAT. No commitment. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
