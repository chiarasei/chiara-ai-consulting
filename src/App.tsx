import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";

// Pages are imported directly (no lazy loading) so the whole site ships as
// one bundle and page switches never need to fetch extra code files.
import TradeFairLanding from "./pages/TradeFairLanding";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import RecentWorkPage from "./pages/RecentWorkPage";
import BookingDemoPage from "./pages/BookingDemoPage";
import PsychologyRoutes from "./pages/psychology/PsychologyRoutes";

const queryClient = new QueryClient();

// Give the error screen a fresh start on every page change, so one failed
// page never leaves "Something went wrong" stuck on the next page.
const RouteErrorBoundary = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  return <ErrorBoundary key={pathname}>{children}</RouteErrorBoundary>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RouteErrorBoundary>
            <Routes>
              <Route path="/" element={<TradeFairLanding />} />
              <Route path="/recent-work" element={<RecentWorkPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<Navigate to="/services" replace />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/demo/psychology/*" element={<PsychologyRoutes />} />
              <Route path="/demo/booking" element={<BookingDemoPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </RouteErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
