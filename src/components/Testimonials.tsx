import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Coming Soon",
      business: "Local Business",
      text: "We're currently working with our first clients to implement AI automation solutions. Check back soon for real testimonials from businesses like yours.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-br from-accent/10 via-secondary/30 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5 -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Client <span className="bg-gradient-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Discover how premium businesses are transforming with our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-12 border-2 border-primary/30 hover:border-accent/50 bg-gradient-to-br from-card to-accent/5 hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" strokeWidth={2} />
                ))}
              </div>
              <p className="text-card-foreground text-xl mb-8 leading-relaxed font-medium">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-card-foreground text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
