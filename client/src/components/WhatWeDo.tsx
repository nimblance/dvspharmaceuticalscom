import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, Layers, Target, Users, Building2 } from "lucide-react";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            What We Do
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Building strategic partnerships that drive market expansion and portfolio growth across the global healthcare ecosystem
          </p>
        </div>

        {/* Core Business Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              At DVS Partners, we specialize in creating <strong>strategic alliances that unlock value</strong> for our clients and partners. 
              Our expertise lies in structuring and executing partnerships across <strong>Vaccines, Biologicals, and Pharmaceuticals</strong> with 
              a proven track record of success in international markets. We focus on two complementary partnership models that address 
              the most critical needs in the healthcare industry:
            </p>
          </Card>
        </div>

        {/* Two Core Partnership Models */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Market Expansion */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary">
                <Globe className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Market Expansion Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We help pharmaceutical and biotech companies extend their commercial reach into new geographic territories and markets.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">How It Works:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Market Assessment & Strategy:</strong> We identify high-potential markets and develop tailored entry strategies based on regulatory landscape, competitive dynamics, and commercial opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Partner Identification:</strong> Leveraging our extensive global network, we identify and qualify the right local partners with proven track records, market access, and distribution capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Deal Structuring & Execution:</strong> We negotiate balanced commercial terms, manage regulatory requirements, and ensure smooth implementation of market entry partnerships</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold text-base text-foreground mb-3">Key Benefits:</h4>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Accelerated market access through established local networks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reduced commercial risk through proven partner capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Optimized resource allocation by leveraging local expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Enhanced commercial performance through strategic partnerships</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Development */}
          <Card className="hover-elevate transition-all duration-300">
            <CardHeader className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Portfolio Development Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We facilitate strategic licensing and business development transactions that enhance product portfolios and drive innovation.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">How It Works:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Portfolio Gap Analysis:</strong> We assess therapeutic area needs, market opportunities, and strategic fit to identify high-value in-licensing or out-licensing opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Asset & Partner Scouting:</strong> Through our global industry connections, we source innovative products and identify partners whose portfolios and capabilities align with your strategic objectives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Transaction Management:</strong> We lead financial valuation, term sheet development, and contract negotiation to ensure balanced deals that create sustainable value for all parties</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold text-base text-foreground mb-3">Key Benefits:</h4>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Strategic portfolio enhancement through targeted acquisitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Accelerated time-to-market for innovative products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Risk mitigation through expert due diligence and valuation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Maximized asset value through optimal partnership structures</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Categories & Geographic Reach */}
        <div className="space-y-12">
          {/* Product Categories */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Applied Across All Product Categories
            </h3>
            <p className="text-base md:text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              We apply the same proven partnership models consistently across all therapeutic areas, 
              bringing deep expertise and a track record of success in each category:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover-elevate">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Vaccines</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Pandemic preparedness, pediatric immunizations, adult vaccines, travel vaccines, and emerging infectious diseases
                </p>
              </Card>
              <Card className="text-center p-6 hover-elevate">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Biologicals</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Biosimilars, monoclonal antibodies, specialty biologics, and complex therapeutic proteins
                </p>
              </Card>
              <Card className="text-center p-6 hover-elevate">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Pharmaceuticals</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Specialty pharmaceuticals, chronic disease management, and innovative small-molecule therapies
                </p>
              </Card>
            </div>
          </div>

          {/* Geographic Reach */}
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 text-primary mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Broad International Reach
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Our extensive global network and international experience enable us to identify and execute partnerships 
                  across all major markets. We have successfully completed transactions and built strategic alliances in:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                  {[
                    "Europe",
                    "North America",
                    "MENA",
                    "Latin America",
                    "Asia Pacific",
                    "China",
                    "Canada",
                    "International Markets"
                  ].map((region) => (
                    <div key={region} className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground">
                      <span className="text-primary">✓</span>
                      {region}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
