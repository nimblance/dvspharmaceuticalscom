import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary animate-fade-in">
            <Globe className="h-4 w-4" />
            <span>Global Healthcare Business Development</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Strategic Partnerships in
            <br />
            <span className="text-primary">Vaccines, Biologicals & Pharmaceuticals</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Expert business development solutions driving portfolio growth and international market expansion through proven collaborations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("collaborations")}
              className="group min-w-[200px]"
              data-testid="button-view-collaborations"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="min-w-[200px] backdrop-blur-sm"
              data-testid="button-hero-contact"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-2">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">30+</div>
              <div className="text-sm md:text-base text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-2">
                <Globe className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">Global</div>
              <div className="text-sm md:text-base text-muted-foreground">MENA, LATAM, APAC, Europe</div>
            </div>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-2">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">Strategic</div>
              <div className="text-sm md:text-base text-muted-foreground">Partnerships & Alliances</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
