import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building, MapPin, Users, Globe2 } from "lucide-react";

interface Partnership {
  title: string;
  location: string;
  description: string;
  icon: typeof Building;
}

export function Collaborations() {
  const vaccinesPartnerships: Partnership[] = [
    {
      title: "Vaccines Industrial Company (VIC)",
      location: "Saudi Arabia",
      description: "DVS is partnering with VIC to support technology transfer projects into the Kingdom of Saudi Arabia and to collaborate with national authorities in securing supply of key vaccines for the public market. DVS also acts as VIC's commercial agent across the MENA region.",
      icon: Building
    },
    {
      title: "Leading Biotechnology Company",
      location: "Brazil",
      description: "DVS supports a leading public vaccine institute in Latin America in expanding the international reach of its influenza vaccines, beyond LATAM, with potential to extend the collaboration to other vaccine products.",
      icon: Globe2
    },
    {
      title: "Regional Distribution Network",
      location: "MENA and Beyond",
      description: "DVS is building a robust network of distributors in key MENA countries to commercialize leading vaccine portfolios, with plans to scale into additional regions.",
      icon: MapPin
    },
    {
      title: "European Vaccine Company",
      location: "COVID-19 Response",
      description: "During the COVID-19 pandemic, DVS was appointed by a global vaccine developer to manage the commercial development of its vaccine across over 30 countries in LATAM, MEA, and APAC, demonstrating DVS's capacity to drive large-scale international vaccine market access.",
      icon: Users
    }
  ];

  const biologicalsPartnerships: Partnership[] = [
    {
      title: "MedServe Joint Venture",
      location: "Kinshasa & Dubai",
      description: "Through a joint venture, DVS and MedServe, a Leading DRC Distribution company collaborate to supply branded pharmaceutical products across the DRC. DVS manages product sourcing and registration; MedServe handles importation, logistics, sales, and distribution—ensuring reliable supply to patients.",
      icon: Building
    },
    {
      title: "Leading Biotechnology & Pharmaceutical Company",
      location: "Argentina",
      description: "DVS acts as the company's commercial partner to expand its respiratory, dermatology, and biologicals portfolio into new international markets. In parallel, DVS supports the company in the development of its vaccines portfolio for the Argentinian and broader LATAM region.",
      icon: Globe2
    },
    {
      title: "MEDIS - European Pharmaceutical Group",
      location: "Belgium (B2B Division)",
      description: "DVS facilitates B2B contracts between MEDIS and industrial clients, supporting the out-licensing and supply of an e-CTD wide portfolio of pharmaceutical and biological products.",
      icon: Users
    },
    {
      title: "Leading Pharmaceutical & Healthcare Group",
      location: "Belgium",
      description: "DVS is the official agent in the DRC for this group, which supplies a broad portfolio of pharmaceutical and medical products to the public sector, reinforcing DVS's position in public health procurement and logistics.",
      icon: MapPin
    }
  ];

  const renderPartnerships = (partnerships: Partnership[], prefix: string) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {partnerships.map((partnership, index) => (
        <Card
          key={index}
          className="hover-elevate transition-all duration-300"
          data-testid={`card-${prefix}-${index}`}
        >
          <CardHeader className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                <partnership.icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-xl md:text-2xl leading-tight">
                  {partnership.title}
                </CardTitle>
              </div>
            </div>
            <CardDescription className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              {partnership.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {partnership.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="collaborations" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-20">
        {/* Vaccines Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Collaborations, Growth Engines
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground mt-4">
              Building a strong vaccines business development and access platform through strategic collaborations and regional expansion
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-center">
              Vaccines
            </h3>
            {renderPartnerships(vaccinesPartnerships, "vaccines")}
          </div>
        </div>

        {/* Biologicals & Pharmaceuticals Section */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground">
              Expanding our footprint in the pharmaceutical space through high-value partnerships and strategic regional operations
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-center">
              Biologicals & Pharmaceuticals
            </h3>
            {renderPartnerships(biologicalsPartnerships, "biologicals")}
          </div>
        </div>
      </div>
    </section>
  );
}
