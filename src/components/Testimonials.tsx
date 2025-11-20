import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Bergström",
      business: "Café Solsidan, Stockholm",
      text: "Thanks to ChiaraAI's chatbot, we've increased our takeaway orders by 40%. Customers love being able to order anytime!",
      rating: 5,
    },
    {
      name: "Erik Johansson",
      business: "Studio Ink, Gothenburg",
      text: "The booking system has saved me hours every week. Clients love being able to see available times and book directly online.",
      rating: 5,
    },
    {
      name: "Maria Lindqvist",
      business: "Beauty & Harmony, Malmö",
      text: "The AI voice assistant answers calls when we're busy with customers. Perfect solution for a small salon like ours.",
      rating: 5,
    },
    {
      name: "Johan Svensson",
      business: "Bistro Home, Uppsala",
      text: "Automatic reminders have reduced no-shows by 60%. Easy integration and fantastic support!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Small businesses that have already started their AI journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
