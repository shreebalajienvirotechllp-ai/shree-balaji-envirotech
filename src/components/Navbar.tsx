import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Chrome as Home, Package, Sparkles, MessageSquare, Users, BookOpen, Briefcase, ChevronDown, Factory, ClipboardCheck, Wrench, ShoppingCart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const logoWebP = "/logo.webp";
const logoJPG = "/logo.jpg";
import { cn } from "@/lib/utils";

const scrollNavItems = [
  { label: "Home", id: "hero", icon: Home },
  { label: "Products", id: "products", icon: Package },
  { label: "Benefits", id: "benefits", icon: Sparkles },
  { label: "Contact", id: "contact", icon: MessageSquare },
];

const businessNavItems = [
  { label: "Manufacturing Costs", path: "/manufacturing-costs", icon: Factory, description: "Cost breakdown & analysis" },
  { label: "Equipment", path: "/equipment", icon: Wrench, description: "Machinery & setup" },
  { label: "Compliance", path: "/compliance", icon: ClipboardCheck, description: "Licenses & approvals" },
  { label: "Buyers", path: "/buyers", icon: ShoppingCart, description: "Find pellet buyers" },
];


const pageNavItems = [
  { label: "About Us", path: "/about", icon: Users },
  { label: "Blog", path: "/blog", icon: BookOpen },
];


// Custom nav link component
const NavButton = ({ 
  children, 
  onClick, 
  isScrolled, 
  isActive 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  isScrolled: boolean; 
  isActive: boolean;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "relative font-medium transition-colors group",
      isScrolled ? "text-foreground" : "text-primary-foreground",
      isActive && "text-secondary"
    )}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = scrollNavItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(scrollNavItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar - fixed and hides on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-2 shadow-sm"
          >
            <div className="container mx-auto px-4 flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 animate-pulse" />
                <a href="tel:+916280610158" className="hover:underline hover:text-secondary transition-colors">
                  +91 62806 10158
                </a>
                <span className="mx-1">|</span>
                <a href="tel:+918360410158" className="hover:underline hover:text-secondary transition-colors">
                  +91 83604 10158
                </a>
                <span className="mx-2">|</span>
                <a href="mailto:shreebalajienvirotech@gmail.com" className="hover:underline hover:text-secondary transition-colors">
                  shreebalajienvirotech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <span className="inline-block animate-bounce">🌿</span>
                <span>Sustainable Energy for a Greener Tomorrow</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50 py-3"
            : "top-0 md:top-10 bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-secondary/30 rounded-full blur-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <picture>
                  <source srcSet={logoWebP} type="image/webp" />
                  <img
                    src={logoJPG}
                    alt="Shree Balaji Envirotech"
                    className="h-12 w-auto rounded-full relative z-10 ring-2 ring-secondary/20 transition-all group-hover:ring-secondary/40"
                    width="48"
                    height="48"
                    loading="eager"
                  />
                </picture>
              </div>
              <div className={`hidden sm:block transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                <div className="font-bold text-lg leading-tight tracking-tight">Shree Balaji</div>
                <div className="text-xs opacity-80 tracking-wide">Envirotech</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-5">
              {scrollNavItems.map((item) => (
                <NavButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  isScrolled={isScrolled}
                  isActive={activeSection === item.id}
                >
                  {item.label}
                </NavButton>
              ))}
              
              {/* Business Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsBusinessOpen(true)}
                onMouseLeave={() => setIsBusinessOpen(false)}
              >
                <button
                  className={cn(
                    "relative font-medium transition-colors group flex items-center gap-1",
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  <Briefcase className="w-4 h-4" />
                  Business
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    isBusinessOpen && "rotate-180"
                  )} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </button>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isBusinessOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card/98 backdrop-blur-xl rounded-xl shadow-2xl border border-border overflow-hidden"
                    >
                      <div className="p-2">
                        {businessNavItems.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2 }}
                            >
                              <Link
                                to={item.path}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-all duration-200 group"
                              >
                                <motion.div
                                  className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Icon className="w-4 h-4" />
                                </motion.div>
                                <div className="flex-1">
                                  <div className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                                    {item.label}
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Page Navigation Links */}
              {pageNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative font-medium transition-colors group",
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-secondary-foreground shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div 
            className={cn(
              "md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu Slide-in Panel */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="md:hidden fixed top-0 right-0 h-full w-[280px] bg-card/98 backdrop-blur-xl z-50 shadow-2xl border-l border-border"
              >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <picture>
                  <source srcSet={logoWebP} type="image/webp" />
                  <img
                    src={logoJPG}
                    alt="Shree Balaji Envirotech"
                    className="h-10 w-auto rounded-full"
                    width="40"
                    height="40"
                  />
                </picture>
                <div>
                  <div className="font-bold text-sm leading-tight text-foreground">Shree Balaji</div>
                  <div className="text-xs text-muted-foreground">Envirotech</div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
              {/* Section Label */}
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Navigate
              </div>
              
              {/* Scroll Navigation Items */}
              <div className="space-y-1 mb-6">
                {scrollNavItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "flex items-center gap-3 w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-200",
                        activeSection === item.id 
                          ? "bg-primary text-primary-foreground shadow-md" 
                          : "text-foreground hover:bg-muted"
                      )}
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: isMobileMenuOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                      {activeSection === item.id && (
                        <span className="ml-auto w-2 h-2 bg-secondary rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Section Label - Business */}
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Business
              </div>
              
              {/* Business Navigation Items */}
              <div className="space-y-1 mb-6">
                {businessNavItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-200 text-foreground hover:bg-muted"
                      style={{ 
                        animationDelay: `${(index + 4) * 50}ms`,
                        animation: isMobileMenuOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Section Label */}
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Explore
              </div>
              
              {/* Page Navigation Items */}
              <div className="space-y-1 mb-6">
                {pageNavItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-200 text-foreground hover:bg-muted"
                      style={{ 
                        animationDelay: `${(index + 17) * 50}ms`,
                        animation: isMobileMenuOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg"
                size="lg"
              >
                Get Quote
              </Button>

              {/* Contact Info */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Call Us
                </div>
                <a href="tel:+916280610158" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors mb-1">
                  <Phone className="w-4 h-4" />
                  +91 62806 10158
                </a>
                <a href="tel:+918360410158" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 83604 10158
                </a>
              </div>
            </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;