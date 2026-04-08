import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: "",
    phone: "",
    quantity: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.getElementById("hero");
      const contactSection = document.getElementById("contact");

      if (heroSection && contactSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const contactTop = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsVisible(heroBottom < 0 && contactTop > windowHeight && !isDismissed);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isDismissed]);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Quick Quote Request:\n\nName: ${quoteData.name}\nPhone: ${quoteData.phone}\nQuantity Needed: ${quoteData.quantity} tons/month`;
    const whatsappUrl = `https://wa.me/916280610158?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Quote request sent!",
      description: "We'll contact you with pricing shortly.",
    });

    setIsQuoteOpen(false);
    setQuoteData({ name: "", phone: "", quantity: "" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.0, 0.0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-border shadow-elevated py-3 px-4"
        >
          <div className="container mx-auto flex items-center justify-between gap-2">
            <div className="flex-1 flex gap-2">
              <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 hidden md:flex">
                    <Calculator className="h-4 w-4" />
                    Quick Quote
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Get Instant Pricing</DialogTitle>
                    <DialogDescription>
                      Enter your details and we'll send you a customized quote immediately
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name *"
                      value={quoteData.name}
                      onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={quoteData.phone}
                      onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Monthly Quantity (tons) *"
                      value={quoteData.quantity}
                      onChange={(e) => setQuoteData({ ...quoteData, quantity: e.target.value })}
                      required
                    />
                    <Button type="submit" className="w-full">Get Quote Now</Button>
                  </form>
                </DialogContent>
              </Dialog>

              <a href="tel:+916280610158" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">Call Now</span>
                  <span className="sm:hidden">Call</span>
                </Button>
              </a>

              <a
                href="https://wa.me/916280610158?text=Hi%2C%20I%27m%20interested%20in%20biomass%20pellets"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
