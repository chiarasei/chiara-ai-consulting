import { Coffee, Utensils, Scissors, Sparkles, Hotel, ShoppingBag, Palette, Dumbbell, Heart, Store } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Cafés",
      useCase: "AI chatbot for menu questions and voice assistant for phone orders. Increase takeaway sales.",
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Restaurants",
      useCase: "Automatic table booking 24/7 and AI-assisted customer support for allergy and dietary questions.",
    },
    {
      icon: <Scissors className="w-10 h-10" />,
      title: "Hair Salons",
      useCase: "Smart booking system with automatic reminders and loyalty programs for regular customers.",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Beauty Salons",
      useCase: "Personalized treatment recommendations and automated follow-up after visits.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Nail Salons",
      useCase: "Online booking with image gallery and automatic maintenance reminders.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Tattoo Studios",
      useCase: "Manage consultations, portfolios, and long-term bookings with AI assistant.",
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "Spa & Wellness",
      useCase: "Package bookings, membership management, and personalized wellness recommendations.",
    },
    {
      icon: <Hotel className="w-10 h-10" />,
      title: "Hotels",
      useCase: "Multilingual chatbot for guest questions and automatic check-in/check-out messages.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Retail Shops",
      useCase: "Product recommendations, inventory notifications, and social media automation.",
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "All Small Businesses",
      useCase: "Custom solutions tailored to your industry. Contact us for a free consultation.",
    },
  ];

  return (
    <section id="industries" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cafés to hotels – we have experience automating businesses across many industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:shadow-soft transition-all duration-300"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{industry.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{industry.useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
