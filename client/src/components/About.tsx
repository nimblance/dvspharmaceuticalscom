import { Card } from "@/components/ui/card";
import { Building2, Target, Handshake, Shield } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Building2,
      title: "Specialized Expertise",
      description: "Focus on Vaccines, Biologicals, and Pharmaceuticals business development"
    },
    {
      icon: Shield,
      title: "Pandemic Vaccine Expertise",
      description: "Unique experience with COVID-19 and influenza vaccines, having partnered with 40+ governments worldwide"
    },
    {
      icon: Handshake,
      title: "Proven Track Record",
      description: "Extensive network across multinational and local partners worldwide"
    },
    {
      icon: Target,
      title: "Strategic Partnerships",
      description: "Strong emphasis on strategic alliances and international collaborations"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Who We Are
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                Our team specializes in <span className="text-foreground font-semibold">Vaccines, Biologicals and Pharmaceuticals business development</span> with a strong focus on strategic alliances and partnerships.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                The company's core team, comprised of <span className="text-foreground font-semibold">seasoned international Business Development and International General Management Experts</span>, brings extensive expertise ensuring effective Business Development Solutions to support Portfolio Development as well as effective market expansion strategies.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                By leveraging collaborations with multinational and local partners, DVS delivers significant value, enabling the <span className="text-foreground font-semibold">commercialization of prioritized products in the international arena</span>, as well as the development of its clients and partners portfolio.
              </p>

              {/* Company Statement */}
              <div className="pt-6 border-t border-border mt-6">
                <blockquote className="text-xl md:text-2xl font-semibold text-primary italic">
                  "We say what we think, we do what we say."
                </blockquote>
                <p className="text-sm md:text-base text-muted-foreground mt-3">
                  This principle guides everything we do at DVS Partners—from how we build relationships to how we execute partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-highlight-${index}`}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
