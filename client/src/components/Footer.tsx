import { Mail, Linkedin } from "lucide-react";
import dvsLogo from "@assets/Screenshot 2025-11-17 at 18.25.22_1763400324343.png";

export function Footer() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <img src={dvsLogo} alt="DVS Partners" className="h-10" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Expert business development solutions in vaccines, biologicals, and pharmaceuticals. Driving strategic partnerships and international market expansion.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:contact@dvspartners.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover-elevate active-elevate-2 transition-all"
                aria-label="Email"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover-elevate active-elevate-2 transition-all"
                aria-label="LinkedIn"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", id: "about" },
                { label: "Collaborations", id: "collaborations" },
                { label: "Business Model", id: "business-model" },
                { label: "Team", id: "team" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Areas */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Expertise
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Vaccines</li>
              <li className="text-sm text-muted-foreground">Biologicals</li>
              <li className="text-sm text-muted-foreground">Pharmaceuticals</li>
              <li className="text-sm text-muted-foreground">Strategic Partnerships</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DVS Partners. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
