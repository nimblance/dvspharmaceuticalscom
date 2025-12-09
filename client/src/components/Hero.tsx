export function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline Only */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-fade-in">
            Strategic Partnerships in
            <br />
            <span className="text-primary">Vaccines, Biologicals & Pharmaceuticals</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
