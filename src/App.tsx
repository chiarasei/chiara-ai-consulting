import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AboutPage from "./pages/AboutPage";
import TradeFairLanding from "./pages/TradeFairLanding";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ShopifyShowcasePage from "./pages/ShopifyShowcasePage";
import RecentWorkPage from "./pages/RecentWorkPage";
import FloatingChat from "./components/FloatingChat";
import DemoPsychologyHome from "./pages/psychology/PsychologyHomePage";
import PsychologyServicesPage from "./pages/psychology/PsychologyServicesPage";
import PsychologyHowItWorksPage from "./pages/psychology/PsychologyHowItWorksPage";
import PsychologyPricingPage from "./pages/psychology/PsychologyPricingPage";
import PsychologyContactPage from "./pages/psychology/PsychologyContactPage";
import { PsychLangProvider } from "./components/psychology/PsychLangContext";

const queryClient = new QueryClient();

const PsychologyRoutes = () => (
  <PsychLangProvider>
    <Routes>
      <Route path="/" element={<DemoPsychologyHome />} />
      <Route path="/services" element={<PsychologyServicesPage />} />
      <Route path="/how-it-works" element={<PsychologyHowItWorksPage />} />
      <Route path="/pricing" element={<PsychologyPricingPage />} />
      <Route path="/contact" element={<PsychologyContactPage />} />
    </Routes>
  </PsychLangProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TradeFairLanding />} />
            <Route path="/recent-work" element={<RecentWorkPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo/psychology/*" element={<PsychologyRoutes />} />
            <Route path="/demo/shopify" element={<ShopifyShowcasePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingChat />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
