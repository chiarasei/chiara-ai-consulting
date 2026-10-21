import { Routes, Route } from "react-router-dom";
import DemoPsychologyHome from "./PsychologyHomePage";
import PsychologyServicesPage from "./PsychologyServicesPage";
import PsychologyHowItWorksPage from "./PsychologyHowItWorksPage";
import PsychologyPricingPage from "./PsychologyPricingPage";
import PsychologyContactPage from "./PsychologyContactPage";
import { PsychLangProvider } from "@/components/psychology/PsychLangContext";

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

export default PsychologyRoutes;
