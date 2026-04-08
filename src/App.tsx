import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BiomassPelletsGuidePunjab from "./pages/blog/BiomassPelletsGuidePunjab";
import StubbleBurningSolution from "./pages/blog/StubbleBurningSolution";
import CoalToBiomassSwitch from "./pages/blog/CoalToBiomassSwitch";
import BiomassPelletPrice2025 from "./pages/blog/BiomassPelletPrice2025";
import BiomassSuppliersNearBathinda from "./pages/blog/BiomassSuppliersNearBathinda";
import RiceHuskPellets from "./pages/blog/RiceHuskPellets";
import IndustrialFuelCostsPunjab from "./pages/awareness/IndustrialFuelCostsPunjab";
import TextileMillsFuelPunjab from "./pages/awareness/TextileMillsFuelPunjab";
import BrickKilnsBiomassPunjab from "./pages/awareness/BrickKilnsBiomassPunjab";
import FoodProcessingFuelPunjab from "./pages/awareness/FoodProcessingFuelPunjab";
import RiceMillsFuelPunjab from "./pages/awareness/RiceMillsFuelPunjab";
import DairyPlantsFuelPunjab from "./pages/awareness/DairyPlantsFuelPunjab";
import PaperMillsFuelPunjab from "./pages/awareness/PaperMillsFuelPunjab";
import DistilleriesFuelPunjab from "./pages/awareness/DistilleriesFuelPunjab";
import PoultryFarmsFuelPunjab from "./pages/awareness/PoultryFarmsFuelPunjab";
import ManufacturingCosts from "./pages/ManufacturingCosts";
import Equipment from "./pages/Equipment";
import Compliance from "./pages/Compliance";
import Buyers from "./pages/Buyers";
import Sitemap from "./pages/Sitemap";
import LocalSEOPage from "./pages/LocalSEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/manufacturing-costs" element={<ManufacturingCosts />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/biomass-pellets-complete-guide-punjab" element={<BiomassPelletsGuidePunjab />} />
          <Route path="/blog/stubble-burning-solution-punjab-biomass-pellets" element={<StubbleBurningSolution />} />
          <Route path="/blog/coal-to-biomass-switch-industrial-boilers" element={<CoalToBiomassSwitch />} />
          <Route path="/blog/biomass-pellet-price-punjab-2025" element={<BiomassPelletPrice2025 />} />
          <Route path="/blog/biomass-pellet-suppliers-near-bathinda" element={<BiomassSuppliersNearBathinda />} />
          <Route path="/blog/rice-husk-pellets-benefits-manufacturing" element={<RiceHuskPellets />} />
          <Route path="/awareness/industrial-fuel-costs-punjab" element={<IndustrialFuelCostsPunjab />} />
          <Route path="/awareness/textile-mills-fuel-punjab" element={<TextileMillsFuelPunjab />} />
          <Route path="/awareness/brick-kilns-biomass-punjab" element={<BrickKilnsBiomassPunjab />} />
          <Route path="/awareness/food-processing-fuel-punjab" element={<FoodProcessingFuelPunjab />} />
          <Route path="/awareness/rice-mills-fuel-punjab" element={<RiceMillsFuelPunjab />} />
          <Route path="/awareness/dairy-plants-fuel-punjab" element={<DairyPlantsFuelPunjab />} />
          <Route path="/awareness/paper-mills-fuel-punjab" element={<PaperMillsFuelPunjab />} />
          <Route path="/awareness/distilleries-fuel-punjab" element={<DistilleriesFuelPunjab />} />
          <Route path="/awareness/poultry-farms-fuel-punjab" element={<PoultryFarmsFuelPunjab />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/local-seo" element={<LocalSEOPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
