import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Briefcase, TrendingUp } from "lucide-react";

export function BusinessModel() {
  const valuePoints = [
    {
      icon: Target,
      text: "DVS offers a robust value proposition to principals and partners, emphasizing the development of business solutions, strategic planning, alliances and partnerships across multiple markets with a single contract."
    },
    {
      icon: CheckCircle2,
      text: "By fostering strategic collaborations with institutions, private companies and in certain cases with Governments, DVS ensures growth aligned with agreed business objectives, driving impactful business development and commercial strategies."
    },
    {
      icon: Briefcase,
      text: "DVS operates as business partners, with a business model based on retainer, success fees and commissions, dedicated to developing together the international footprint and portfolio of small to mid-size companies in the healthcare sector."
    }
  ];

  return (
    <section id="business-model" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple Business Model
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          {valuePoints.map((point, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover-elevate transition-all duration-300"
              data-testid={`card-business-model-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0 mt-1">
                  <point.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed flex-1">
                  {point.text}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional highlight */}
        <Card className="mt-8 p-8 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary flex-shrink-0">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Partnership-Driven Growth
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our model ensures sustainable, win-win value creation through balanced strategies and effective portfolio and supply chain systems in various international markets, especially in the Middle East and Africa.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
