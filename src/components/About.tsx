import { Award, Cloud, Code, Target } from "lucide-react";
import React from "react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Focused",
      description: "We deliver measurable results that make a real difference to your business.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      description: "Deep experience in DevOps, cloud services, and AI automation.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Scalability",
      description: "Solutions that grow with you – from startup to established business.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality & Support",
      description: "Reliable support and continuous optimization of your AI solutions.",
    },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              About ChiaraAI Consulting
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-normal">
              <p>
                ChiaraAI Consulting was founded with a vision to make AI automation accessible and affordable for small businesses. We understand the challenges small businesses face – time constraints, limited resources, and the need to compete with larger players.
              </p>
              <p>
                Our founder has extensive experience in DevOps, cloud architecture, and automation of complex systems. Now we use this expertise to help local businesses grow through smart AI technology.
              </p>
              <p>
                We believe in personal service, long-term relationships, and solutions that actually work in the real world – not just on paper.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-soft transition-all duration-500"
              >
                <div className="text-primary mb-4">
                  {React.cloneElement(value.icon, { strokeWidth: 1.5 })}
                </div>
                <h3 className="font-semibold mb-3 text-card-foreground text-base">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
