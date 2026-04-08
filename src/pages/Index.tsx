import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import StickyCTA from "@/components/StickyCTA";
import BottomNav from "@/components/BottomNav";
import SEOHead from "@/components/SEOHead";
import { LeadCapturePopup } from "@/components/LeadCapturePopup";

// Lazy load components below the fold
const Products = lazy(() => import("@/components/Products"));
const Manufacturing = lazy(() => import("@/components/Manufacturing"));
const Benefits = lazy(() => import("@/components/Benefits"));
const Comparison = lazy(() => import("@/components/Comparison"));
const SavingsCalculator = lazy(() => import("@/components/SavingsCalculator"));
const Demand = lazy(() => import("@/components/Demand"));
const About = lazy(() => import("@/components/About"));
const Team = lazy(() => import("@/components/Team"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const VideoTestimonials = lazy(() => import("@/components/VideoTestimonials"));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const Certifications = lazy(() => import("@/components/Certifications"));
const PartnersCarousel = lazy(() => import("@/components/PartnersCarousel"));
const HomeFAQ = lazy(() => import("@/components/HomeFAQ"));
const BlogPreview = lazy(() => import("@/components/BlogPreview"));
const Contact = lazy(() => import("@/components/Contact"));

// Simple loading fallback
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <SEOHead
        title="Shree Balaji Envirotech - Premium Biomass Pellet Solutions | Punjab"
        description="Leading manufacturer of eco-friendly biomass pellets in Punjab. Save 40% on fuel costs with our sustainable energy solutions. High-quality, carbon-neutral biomass fuel for industries."
        keywords="biomass pellets, renewable energy, sustainable fuel, eco-friendly, carbon neutral, green energy, Punjab, Bathinda, industrial fuel, coal alternative"
      />
      <Navbar />
      <Hero />
      <Stats />
      
      <Suspense fallback={<SectionLoader />}>
        <Products />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Manufacturing />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Benefits />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Comparison />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <SavingsCalculator />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Demand />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Team />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <VideoTestimonials />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CaseStudies />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Certifications />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PartnersCarousel />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <HomeFAQ />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <BlogPreview />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <StickyCTA />
      <BottomNav />
      <LeadCapturePopup />
    </main>
  );
};

export default Index;
