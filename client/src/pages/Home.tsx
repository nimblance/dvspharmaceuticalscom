import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Collaborations } from "@/components/Collaborations";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <WhatWeDo />
        <Collaborations />
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  );
}
