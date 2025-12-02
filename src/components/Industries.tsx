import { Coffee, Utensils, Scissors, Sparkles, Hotel, ShoppingBag, Palette, Dumbbell, Heart, Store } from "lucide-react";
import React from "react";

const Industries = () => {
  const industries = [
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Cafés",
      useCase: "AI voice assistant takes phone orders during busy hours, chatbot answers menu questions and handles dietary restrictions. Automated order confirmations and loyalty rewards for regulars. Increase takeaway sales by 30-50%.",
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Restaurants",
      useCase: "24/7 voice-powered table booking system that handles reservations, special requests, and modifications. AI assistant answers questions about allergens, ingredients, and daily specials. Reduce no-shows with automated reminders.",
    },
    {
      icon: <Scissors className="w-10 h-10" />,
      title: "Hair Salons",
      useCase: "Voice booking system available after hours. Clients call anytime to book, reschedule, or check availability. Automated appointment reminders reduce no-shows by 70%. Smart loyalty program tracks visits and offers personalized rewards.",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Beauty Salons",
      useCase: "AI voice assistant helps clients book treatments, explains services, and recommends personalized beauty routines. Automated follow-ups after treatments with care tips. Smart rebooking reminders at optimal intervals.",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Nail Salons",
      useCase: "Voice-enabled booking with natural conversation flow. AI shows available slots based on preferred stylist and service type. Image gallery integration for design inspiration. Automated maintenance reminders every 2-3 weeks.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Tattoo Studios",
      useCase: "AI voice assistant handles initial consultations, explains process and pricing, manages complex multi-session bookings. Portfolio showcase through chatbot. Automated care instructions and healing progress check-ins.",
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "Spa & Wellness",
      useCase: "Voice booking for multiple services and package deals. AI assistant recommends treatment combinations based on client needs. Membership management and automatic renewal reminders. Personalized wellness tips between visits.",
    },
    {
      icon: <Hotel className="w-10 h-10" />,
      title: "Hotels",
      useCase: "Multilingual AI voice concierge answers guest questions 24/7. Automated check-in reminders, room service ordering, and local recommendations. Post-stay follow-up for reviews. Handle high call volumes during peak season.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Retail Shops",
      useCase: "AI assistant answers product questions, checks inventory in real-time, and processes phone orders. Automated notifications when requested items are back in stock. Personalized shopping recommendations based on purchase history.",
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "All Small Businesses",
      useCase: "Whatever your industry, AI voice agents and automation can handle customer communications, reduce admin workload, and increase sales. We design custom solutions tailored to your specific business needs and workflow.",
    },
  ];

  return (
    <section id="industries" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-secondary/40 to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Industries We <span className="bg-gradient-accent bg-clip-text text-transparent">Transform</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Bringing professional AI automation to businesses across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-5 md:p-8 rounded-xl border-2 border-primary/20 hover:border-accent/50 bg-gradient-to-br from-card to-accent/5 hover:shadow-medium transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="text-primary group-hover:text-accent mb-3 md:mb-5 group-hover:scale-110 transition-all duration-500 relative z-10">
                {React.cloneElement(industry.icon, { strokeWidth: 2, className: "w-8 h-8 md:w-10 md:h-10" })}
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-card-foreground relative z-10">{industry.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed relative z-10">{industry.useCase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
