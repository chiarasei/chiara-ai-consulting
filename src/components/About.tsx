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
    <section id="about" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="space-y-5 md:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">ChiaraAI</span> Consulting
            </h2>
            <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg font-medium">
              <p>
                ChiaraAI Consulting was founded with a vision to make professional AI automation accessible and affordable for small businesses. We understand the challenges small businesses face – time constraints, limited resources, and the need to compete with larger players.
              </p>
              <p>
                Our founder has extensive experience in DevOps, cloud architecture, and automation of complex systems. Now we use this expertise to help local businesses grow through advanced AI technology.
              </p>
              <p>
                We believe in personal service, long-term relationships, and solutions that deliver real results – not just promises.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-4 md:p-8 rounded-xl border-2 border-primary/20 hover:border-accent/40 bg-gradient-to-br from-card to-primary/5 hover:shadow-medium transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="text-primary group-hover:text-accent mb-3 md:mb-4 transition-colors duration-500 relative z-10">
                  {React.cloneElement(value.icon, { strokeWidth: 2, className: "w-6 h-6 md:w-8 md:h-8" })}
                </div>
                <h3 className="font-bold mb-2 md:mb-3 text-card-foreground text-sm md:text-base relative z-10">{value.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
