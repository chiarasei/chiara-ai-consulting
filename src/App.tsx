import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { detectLanguage, isLang, langFromPath, localizePath } from "@/lib/i18nRoutes";
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
  return <ErrorBoundary key={pathname}>{children}</ErrorBoundary>;
};

// Keeps the site language in step with the /en or /sv address.
const LanguageGate = () => {
  const { lang } = useParams();
  const { language, setLanguage } = useLanguage();
  useEffect(() => {
    if (isLang(lang) && lang !== language) setLanguage(lang);
  }, [lang, language, setLanguage]);
  if (!isLang(lang)) return <NotFound />;
  return <Outlet />;
};

// Old addresses without a language (/, /services ...) go to the visitor's language.
const LanguageRedirect = ({ to }: { to: string }) => {
  const { hash, search } = useLocation();
  const lang = langFromPath(window.location.pathname) ?? detectLanguage();
  return <Navigate to={localizePath(lang, to) + search + hash} replace />;
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
              <Route path="/" element={<LanguageRedirect to="/" />} />
              <Route path="/recent-work" element={<LanguageRedirect to="/recent-work" />} />
              <Route path="/services" element={<LanguageRedirect to="/services" />} />
              <Route path="/industries" element={<LanguageRedirect to="/services" />} />
              <Route path="/pricing" element={<LanguageRedirect to="/pricing" />} />
              <Route path="/contact" element={<LanguageRedirect to="/contact" />} />
              <Route path="/:lang" element={<LanguageGate />}>
                <Route index element={<TradeFairLanding />} />
                <Route path="recent-work" element={<RecentWorkPage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="industries" element={<Navigate to="../services" replace />} />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
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
