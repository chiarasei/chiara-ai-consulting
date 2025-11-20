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
    <section id="testimonials" className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-5">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal">
            Small businesses that have already started their AI journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-10 border border-border bg-card">
              <div className="flex gap-1.5 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-card-foreground text-lg mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{testimonial.business}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
