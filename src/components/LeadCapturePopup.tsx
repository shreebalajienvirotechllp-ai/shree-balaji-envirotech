import { useState, useEffect } from "react";
import { X, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface LeadCapturePopupProps {
  delayMs?: number;
  title?: string;
  description?: string;
}

export const LeadCapturePopup = ({
  delayMs = 30000,
  title = "Get Special Pricing",
  description = "Enter your details for exclusive bulk pricing and a free consultation"
}: LeadCapturePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('leadPopupClosed');
    if (hasClosedPopup) return;

    const exitIntentHandler = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('leadPopupShown', 'true');
      }
    };

    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('leadPopupShown', 'true');
      }
    }, delayMs);

    document.addEventListener('mouseout', exitIntentHandler);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseout', exitIntentHandler);
    };
  }, [delayMs, hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('leadPopupClosed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `New Lead from Website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/916280610158?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Thank you!",
      description: "We'll contact you shortly with special pricing.",
    });

    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Special Offer</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-white/90 text-sm">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-gray-300"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="border-gray-300"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gray-300"
                />
              </div>

              <div>
                <Textarea
                  placeholder="What are you looking for? (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-gray-300 min-h-[80px]"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
                Get Special Pricing Now
              </Button>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 pt-2">
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>Call us</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>Email us</span>
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
