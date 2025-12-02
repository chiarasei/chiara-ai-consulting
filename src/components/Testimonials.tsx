import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Andersson",
      business: "Café Hjärtat, Gothenburg",
      text: "The AI booking system has completely transformed how we manage our customers. We used to miss calls during busy hours, losing bookings. Now the AI assistant handles everything 24/7 - bookings, menu questions, even dietary requirements. We've seen a 40% increase in reservations and our staff can focus on what they do best: serving great coffee.",
      rating: 5,
    },
    {
      name: "Erik Johansson",
      business: "Bella Spa & Wellness, Gothenburg",
      text: "Before working with ChiaraAI, we spent hours every week on appointment scheduling and customer messages. The automated booking system and AI chatbot now handle most of our customer interactions. Our customers love the instant responses, and we've reduced admin time by over 15 hours per week. Best investment we've made for our business.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-accent/10 via-secondary/30 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-20 space-y-3 md:space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Client <span className="bg-gradient-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Discover how local businesses are transforming with our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 md:p-12 border-2 border-primary/30 hover:border-accent/50 bg-gradient-to-br from-card to-accent/5 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
              <div className="flex gap-1 md:gap-1.5 mb-4 md:mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-accent text-accent" strokeWidth={2} />
                ))}
              </div>
              <p className="text-card-foreground text-sm md:text-xl mb-4 md:mb-8 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-card-foreground text-base md:text-lg">{testimonial.name}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2 font-medium">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
