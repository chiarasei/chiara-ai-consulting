import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollToTop from "@/components/ScrollToTop";

const TradeFairLanding = lazy(() => import("./pages/TradeFairLanding"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RecentWorkPage = lazy(() => import("./pages/RecentWorkPage"));
const BookingDemoPage = lazy(() => import("./pages/BookingDemoPage"));
const PsychologyRoutes = lazy(() => import("./pages/psychology/PsychologyRoutes"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background" role="status" aria-label="Loading page">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-[hsl(var(--brass))]" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<TradeFairLanding />} />
                <Route path="/recent-work" element={<RecentWorkPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/demo/psychology/*" element={<PsychologyRoutes />} />
                <Route path="/demo/booking" element={<BookingDemoPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
