import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collaborations } from "@/components/Collaborations";
import { BusinessModel } from "@/components/BusinessModel";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Collaborations />
        <BusinessModel />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
