import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Briefcase, Award, Activity } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  expertise: string;
  bio: string[];
  icon: typeof Briefcase;
}

export function Team() {
  const [expandedMembers, setExpandedMembers] = useState<Set<number>>(new Set());

  const toggleMember = (index: number) => {
    const newExpanded = new Set(expandedMembers);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedMembers(newExpanded);
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Doronn Victor Sitruk",
      title: "Co-Founder, Partner",
      expertise: "Commercial Strategy & Market Access",
      icon: Briefcase,
      bio: [
        "A seasoned Business Development professional with over 30 years of international experience in the healthcare industry, including Vaccines and Pharmaceuticals sectors, having worked for prominent companies such as GSK, Novo Nordisk, Eli Lilly, Schering-Plough, and Teva. His career spans across Europe, the USA, and the International regions, with a specialized focus on business development, commercial strategy and Market Access.",
        "At GSK, Doronn served as the Vaccines International Franchise Head, overseeing influenza, travel vaccines, adult and adolescent vaccines. The scope included MENA LATAM CANADA and ASIA. Before that, he led Commercial Strategy in China and supported selected markets in APAC, including Hong Kong, Taiwan, and South Korea, on numerous strategic projects.",
        "Doronn has a notable track record of establishing successful international joint ventures and alliances, resulting in sustainable, win-win value creation. He has implemented balanced strategies and effective portfolio and supply chain systems in various international markets, especially in the Middle East and Africa.",
        "Since 2016, Doronn has been the CO-founder of DVS partners, leveraging his extensive industry knowledge to drive impactful business development and commercial strategies in the healthcare sector."
      ]
    },
    {
      name: "Damien Dessis",
      title: "Co-Founder, Partner",
      expertise: "Business Development & Licensing",
      icon: Award,
      bio: [
        "Damien Dessis is an experienced business development leader in the biologics and vaccines sectors, with a strong track record across global markets. Over the course of his career, he has developed broad expertise in deal structuring, financial valuation, negotiation, and complex partnering transactions, helping organizations build value through strategic collaborations and portfolio growth.",
        "Damien has held senior business development roles, namely at GSK Vaccines, Valneva and various smaller organizations, where he contributed to advancing innovative vaccines and biologics portfolios through partnerships, licensing agreements, and pipeline optimization initiatives. His strategic vision and keen understanding of industry trends have allowed him to forge successful partnerships and transactions, creating significant value and growth for his organizations.",
        "With more than 20 years in the biotech and pharmaceutical industries, Damien has worked closely with both established companies and emerging start-ups, supporting them in areas such as business modeling, strategic planning, and fundraising. Known for his pragmatic collaborative approach and analytical mindset, he combines scientific understanding with commercial acumen to deliver sustainable results."
      ]
    },
    {
      name: "Dr. Dirk Poelaert",
      title: "Partner, Chief Medical Officer",
      expertise: "Medical Affairs & Clinical Operations",
      icon: Activity,
      bio: [
        "Dr. Dirk Poelaert is a senior medical leader and global expert in vaccines and pharmaceuticals, with more than 30 years of international experience across medical, clinical, and commercial operations in leading global companies. A medical doctor by training (KU Leuven) with postgraduate studies in Business Management and Clinical Trials & Statistics, he has held senior leadership positions at Eli Lilly, Astra, MSD Belgium, and GSK Vaccines, where he directed European and global medical affairs, clinical operations, and vaccine-strategy programs.",
        "His career reflects a strong balance between scientific excellence, operational rigor, and strategic vision, consistently driving innovation, compliance, and value creation across the healthcare ecosystem.",
        "Dr. Poelaert's expertise spans the full vaccine lifecycle, with a unique focus on pandemic preparedness and response, including influenza and COVID-19 vaccines. At GSK Biologicals, he served as Global Medical Director for Pandemic Influenza, leading scientific communication and global medical planning during critical health-emergency phases. His deep understanding of vaccine R&D, medical affairs, and public-health interfaces positions him as a recognized authority in pandemic-vaccine strategy and implementation."
      ]
    },
    {
      name: "Dr. Laurent Massuyeau",
      title: "Advisor, Biosimilars",
      expertise: "Biosimilars & Biologics Commercialization",
      icon: Award,
      bio: [
        "Dr. Laurent Massuyeau is a global expert in biosimilars and biologics commercialisation, combining deep scientific knowledge with extensive executive experience. A Doctor of Veterinary Medicine with an MBA from INSEAD, he began his career in senior roles at Eli Lilly, Novartis, and Merck Serono, where he led international business development and licensing activities.",
        "In 2013, he founded IQone Healthcare Europe, a Swiss-based specialty and biosimilar company dedicated to improving patient access to high-quality biologics across Europe.",
        "Under his leadership, IQone Healthcare Switzerland became one of the top three biosimilar companies in the Swiss market, renowned for operational excellence and trusted partnerships with leading global biopharma players. IQone Europe was acquired by Clinigen Group in 2018, becoming Clinigen Europe, and IQone Switzerland was acquired by Celltrion in 2024, becoming its Swiss subsidiary.",
        "Dr. Massuyeau now serves as a Senior Advisor and member of the DVS Partners Advisory Board, where his experience in biosimilar strategy, market access, and commercial excellence continues to drive value for clients and partners worldwide."
      ]
    },
    {
      name: "Guy Dotan",
      title: "Partner, Licensing, Biosimilars",
      expertise: "Business Development & Strategic Licensing",
      icon: Briefcase,
      bio: [
        "Guy spent more than 18 years at Teva Pharmaceuticals, where he was a senior member of the Global Business Development & Licensing team. In this capacity, he personally led negotiations for dozens of high-value licensing deals and strategic alliances, managing multi-functional teams and aligning with key internal stakeholders in R&D, legal, regulatory, and commercial operations.",
        "Following his tenure at Teva, Guy served as Head of Business Development at Trevena, a publicly traded US biotech company. There, he led the global out-licensing strategy for Trevena's lead asset, Olinvyk®, and drove alliance management initiatives with regional and global partners. He was also actively involved in partnering discussions for the company's early-stage pipeline assets.",
        "In 2023, Guy joined DVS Pharmaceuticals as Partner, where he leverages his deep licensing experience, commercial acumen, and global network of contacts to advise biotech and pharma companies on strategic growth opportunities. His core focus includes licensing strategy, transaction execution, commercial deal structuring, and strategic entry into key international markets. Guy is known for his pragmatic, value-driven approach to business development."
      ]
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Leadership Team
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Seasoned international experts with decades of combined experience in healthcare business development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => {
            const isExpanded = expandedMembers.has(index);
            const preview = member.bio[0].substring(0, 150) + "...";
            
            return (
              <Card
                key={index}
                className="flex flex-col hover-elevate transition-all duration-300"
                data-testid={`card-team-${index}`}
              >
                <CardHeader className="space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-2">
                    <member.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl leading-tight">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">
                    {member.title}
                  </CardDescription>
                  <p className="text-sm font-medium text-muted-foreground">
                    {member.expertise}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                    {isExpanded ? (
                      member.bio.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{preview}</p>
                    )}
                  </div>
                  
                  <Button
                    variant="ghost"
                    onClick={() => toggleMember(index)}
                    className="mt-4 w-full justify-center gap-2"
                    data-testid={`button-expand-${index}`}
                  >
                    {isExpanded ? (
                      <>
                        Read Less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
