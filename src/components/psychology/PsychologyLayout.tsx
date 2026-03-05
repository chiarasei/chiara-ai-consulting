import { Link, useLocation } from "react-router-dom";
import { Leaf, ArrowLeft, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", path: "/demo/psychology" },
  { label: "Services", path: "/demo/psychology/services" },
  { label: "How It Works", path: "/demo/psychology/how-it-works" },
  { label: "Pricing", path: "/demo/psychology/pricing" },
  { label: "Contact", path: "/demo/psychology/contact" },
];

const green = "hsl(165, 45%, 42%)";
const greenLight = "hsl(165, 40%, 92%)";
const greenText = "hsl(165, 50%, 35%)";
const textMuted = "hsl(200, 10%, 45%)";
const borderClr = "hsl(160, 15%, 88%)";

export { green, greenLight, greenText, textMuted, borderClr };

const PsychologyLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="font-sans min-h-screen flex flex-col" style={{ fontFamily: "'DM Sans', 'Outfit', sans-serif", background: "#FAFAF8", color: "#1a1a2e" }}>
      {/* Demo banner */}
      <div className="text-center text-xs py-2 font-medium tracking-wide flex items-center justify-center gap-3" style={{ background: greenLight, color: greenText }}>
        <Link to="/" className="inline-flex items-center gap-1 underline font-semibold hover:opacity-80">
          <ArrowLeft className="w-3 h-3" />
          Back to ChiaraAI Consulting
        </Link>
        <span className="opacity-40">|</span>
        <span>Portfolio Demo</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "rgba(250,250,248,0.92)", borderColor: borderClr }}>
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
          <Link to="/demo/psychology" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <Leaf className="w-5 h-5" style={{ color: green }} />
            <span>Psykolog Praktiken</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: location.pathname === path ? green : textMuted, fontWeight: location.pathname === path ? 600 : 500 }}
              >
                {label}
              </Link>
            ))}
            <Link to="/demo/psychology/contact" className="text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-md" style={{ background: green, color: "#fff" }}>
              Book a Session
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t px-5 py-4 space-y-1" style={{ borderColor: borderClr, background: "#FAFAF8" }}>
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left text-sm font-medium py-2.5 px-2 rounded-lg transition-colors"
                style={{ color: location.pathname === path ? green : textMuted, background: location.pathname === path ? greenLight : "transparent" }}
              >
                {label}
              </Link>
            ))}
            <Link to="/demo/psychology/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center text-sm font-semibold px-5 py-2.5 rounded-full mt-2" style={{ background: green, color: "#fff" }}>
              Book a Session
            </Link>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="py-10 px-5 border-t" style={{ borderColor: borderClr, background: "#fff" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <Leaf className="w-4 h-4" style={{ color: green }} />
            Psykolog Praktiken
          </div>
          <div className="flex items-center gap-6 text-xs" style={{ color: textMuted }}>
            {NAV_LINKS.map(({ label, path }) => (
              <Link key={path} to={path} className="hover:opacity-70">{label}</Link>
            ))}
          </div>
          <p className="text-xs" style={{ color: textMuted }}>
            Demo by <Link to="/" className="underline hover:opacity-70">ChiaraAI Consulting</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PsychologyLayout;
