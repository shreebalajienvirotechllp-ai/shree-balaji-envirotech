import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Leaf, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { NAPFooter } from "./NAPFooter";
import { businessInfo } from "@/lib/localSEO";

const Footer = () => {
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* NAP Information - Schema.org markup */}
        <div className="mb-12">
          <NAPFooter />
        </div>

        <div className="border-t border-primary-foreground/10 pt-12 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shree Balaji Envirotech" className="h-14 w-auto rounded-full" />
              <div>
                <div className="font-bold text-lg">Shree Balaji</div>
                <div className="text-sm text-primary-foreground/80">Envirotech</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Leading manufacturer of premium biomass pellets, committed to sustainable energy solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Leaf className="w-4 h-4 text-secondary" />
              <span>Eco-Certified Manufacturer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "hero" },
                { label: "Benefits", id: "benefits" },
                { label: "About Us", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link to="/blog" className="hover:text-secondary transition-colors">Blog & Guides</Link>
              </li>
              <li>
                <Link to="/blog/biomass-pellets-complete-guide-punjab" className="hover:text-secondary transition-colors">Biomass Pellets Guide</Link>
              </li>
              <li>
                <Link to="/awareness/textile-mills-fuel-punjab" className="hover:text-secondary transition-colors">For Textile Mills</Link>
              </li>
              <li>
                <Link to="/awareness/brick-kilns-biomass-punjab" className="hover:text-secondary transition-colors">For Brick Kilns</Link>
              </li>
              <li>
                <Link to="/awareness/food-processing-fuel-punjab" className="hover:text-secondary transition-colors">For Food Processors</Link>
              </li>
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Government Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="https://biomassexchange.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">SAMARTH Mission</a>
              </li>
              <li>
                <a href="https://www.ntpc.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">NTPC Limited</a>
              </li>
              <li>
                <a href="https://pspcl.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">PSPCL</a>
              </li>
              <li>
                <a href="https://cpcb.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">CPCB</a>
              </li>
              <li>
                <a href="https://ppcb.punjab.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">PPCB</a>
              </li>
              <li>
                <a href="https://mnre.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">MNRE</a>
              </li>
              <li>
                <a href="https://moef.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">MoEFCC</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-secondary" />
                <div className="flex flex-col">
                  <a href="tel:+916280610158" className="hover:text-secondary transition-colors">
                    +91 62806 10158
                  </a>
                  <a href="tel:+918360410158" className="hover:text-secondary transition-colors">
                    +91 83604 10158
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:shreebalajienvirotech@gmail.com" className="hover:text-secondary transition-colors">
                  shreebalajienvirotech@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>Bathinda, Punjab, India</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Instagram className="w-4 h-4 text-secondary" />
                <a href="https://www.instagram.com/shreebalaji_envirotech/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  @shreebalaji_envirotech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Shree Balaji Envirotech. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Committed to sustainable energy solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
