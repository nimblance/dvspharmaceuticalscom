import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, ChevronUp, Award } from "lucide-react";

import laurentImage from "@assets/Laurent_1763402336828.jpg";

interface AdvisorMember {
  name: string;
  title: string;
  expertise: string;
  bio: string[];
  icon: typeof Award;
  image: string;
}

export function AdvisoryBoard() {
  const [expandedAdvisors, setExpandedAdvisors] = useState<Set<number>>(new Set());

  const toggleAdvisor = (index: number) => {
    const newExpanded = new Set(expandedAdvisors);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedAdvisors(newExpanded);
  };

  const advisors: AdvisorMember[] = [
    {
      name: "Dr. Laurent Massuyeau",
      title: "Senior Business Advisor",
      expertise: "Biosimilars & Biologics Commercialization",
      icon: Award,
      image: laurentImage,
      bio: [
        "Dr. Laurent Massuyeau is a global expert in biosimilars and biologics commercialisation, combining deep scientific knowledge with extensive executive experience. A Doctor of Veterinary Medicine with an MBA from INSEAD, he began his career in senior roles at Eli Lilly, Novartis, and Merck Serono, where he led international business development and licensing activities.",
        "In 2013, he founded IQone Healthcare Europe, a Swiss-based specialty and biosimilar company dedicated to improving patient access to high-quality biologics across Europe.",
        "Under his leadership, IQone Healthcare Switzerland became one of the top three biosimilar companies in the Swiss market, renowned for operational excellence and trusted partnerships with leading global biopharma players. IQone Europe was acquired by Clinigen Group in 2018, becoming Clinigen Europe, and IQone Switzerland was acquired by Celltrion in 2024, becoming its Swiss subsidiary.",
        "Dr. Massuyeau now serves as a Senior Advisor and member of the DVS Partners Advisory Board, where his experience in biosimilar strategy, market access, and commercial excellence continues to drive value for clients and partners worldwide."
      ]
    }
  ];

  return (
    <section id="advisory-board" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Advisory Board
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Senior business advisors providing strategic guidance and industry expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => {
            const isExpanded = expandedAdvisors.has(index);
            const preview = advisor.bio[0].substring(0, 150) + "...";
            
            return (
              <Card
                key={index}
                className="flex flex-col hover-elevate transition-all duration-300"
                data-testid={`card-advisor-${index}`}
              >
                <CardHeader className="space-y-3">
                  <div className="relative inline-flex items-center justify-center mb-2">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Avatar className="w-full h-full">
                        <AvatarImage 
                          src={advisor.image} 
                          alt={advisor.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
                          {advisor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl leading-tight">
                    {advisor.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">
                    {advisor.title}
                  </CardDescription>
                  <p className="text-sm font-medium text-muted-foreground">
                    {advisor.expertise}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                    {isExpanded ? (
                      advisor.bio.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))
                    ) : (
                      <p>{preview}</p>
                    )}
                  </div>
                  
                  <Button
                    variant="ghost"
                    onClick={() => toggleAdvisor(index)}
                    className="mt-4 w-full justify-center gap-2"
                    data-testid={`button-expand-advisor-${index}`}
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
